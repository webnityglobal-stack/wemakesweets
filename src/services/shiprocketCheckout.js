/**
 * Shiprocket Headless Checkout Service
 * API & UI Flow Documentation:
 * https://documenter.getpostman.com/view/25617008/2sB34bL3ig#2bef03a2-b3cc-4d63-a8c8-bf078842a321
 */

export const FASTRR_ACTIVE_USER_KEY = "fastrr_active_user_id";

export const getShiprocketCheckoutToken = () => {
  return import.meta.env.VITE_SHIPROCKET_CHECKOUT_TOKEN?.trim() || "";
};

export const getRedirectUrl = () => {
  // Live frontend: https://wemakesweets.vercel.app/order-confirmation
  // Local frontend: http://localhost:5173/order-confirmation
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}/order-confirmation`;
  }
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://wemakesweets.vercel.app";
  return `${siteUrl.replace(/\/$/, "")}/order-confirmation`;
};

export const getFallbackUrl = () => {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}/cart`;
  }
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://wemakesweets.vercel.app";
  return `${siteUrl.replace(/\/$/, "")}/cart`;
};

/**
 * Clear all FastRR / Shiprocket cookies, localStorage entries, and DOM elements
 * to ensure that switching accounts or logging out doesn't leak another user's session.
 */
export const clearFastrrCheckoutSession = () => {
  if (typeof window === "undefined") return;

  try {
    // 1. Delete FastRR / Shiprocket cookies across possible paths and domains
    const knownCookies = [
      "fastrr_uuid",
      "fastrr_usid",
      "fastrr_user_id",
      "fastrrUserIdEventTriggered",
      "fastrrPrefetchTriggered",
      "fastrr_status",
      "fastrr_transaction_id",
      "fastrr_redirect_uuid",
      "fastrr_redirect",
      "fastrr_redirect_time",
      "src_fca_utm",
      "sr_checkout_utm",
      "discount_nudge",
      "discount_code",
      "isPoweredBySrLogoVisible",
      "EDD_check_uuid",
      "e360_session",
      "__oppref",
      "_fbp",
      "_fbc",
    ];

    const allCookieNames = new Set(knownCookies);
    if (document.cookie) {
      document.cookie.split(";").forEach((cookieStr) => {
        const name = cookieStr.split("=")[0].trim();
        if (/fastrr|shiprocket|sr_|src_|pickrr/i.test(name)) {
          allCookieNames.add(name);
        }
      });
    }

    const host = window.location.hostname;
    const domains = ["", host, `.${host}`];
    const parts = host.split(".");
    if (parts.length > 2) {
      domains.push(`.${parts.slice(-2).join(".")}`);
    }

    const paths = ["/", "/cart", "/checkout", "/my-account", window.location.pathname];

    allCookieNames.forEach((name) => {
      domains.forEach((d) => {
        paths.forEach((p) => {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${p}${d ? `; domain=${d}` : ""}`;
        });
      });
    });

    // 2. Clear FastRR / Shiprocket localStorage keys
    const APP_PROTECTED_KEYS = new Set([
      "accessToken",
      "user",
      "guest_wishlist",
      FASTRR_ACTIVE_USER_KEY,
    ]);

    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && !APP_PROTECTED_KEYS.has(key)) {
        toRemove.push(key);
      }
    }
    toRemove.forEach((key) => localStorage.removeItem(key));

    // 3. Clear sessionStorage
    try {
      sessionStorage.clear();
    } catch (_) {}

    // 4. Clean up any open / stale Fastrr DOM elements
    const domSelectors = [
      "#fastrr-main-container",
      "#headless-container",
      "#headless-iframe",
      "#fastrr-pre-loader",
      "#prefetch-iframe",
      ".fastrr-checkout-modal",
      "iframe[src*='shiprocket']",
      "iframe[src*='fastrr']",
    ];
    domSelectors.forEach((sel) => {
      try {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      } catch (_) {}
    });

    // 5. Reset global Fastrr variables
    if (window.srCustomCheckoutCallBackFn) {
      window.srCustomCheckoutCallBackFn = null;
    }

    console.log("[Shiprocket Checkout] FastRR session cleared successfully.");
  } catch (err) {
    console.warn("[Shiprocket Checkout] Error clearing FastRR session:", err);
  }
};

/**
 * Check if the active FastRR session in browser belongs to the current logged-in user.
 * If user switched or logged out, purges stale FastRR data and binds to the new user.
 * @param {Object|null} currentUser - The currently authenticated user object from authStorage
 */
export const syncFastrrUserSession = (currentUser) => {
  if (typeof window === "undefined") return;

  const currentIdentifier = currentUser
    ? String(currentUser._id || currentUser.id || currentUser.phone || currentUser.email || "")
    : "";

  let lastActiveUser = "";
  try {
    lastActiveUser = localStorage.getItem(FASTRR_ACTIVE_USER_KEY) || "";
  } catch (_) {}

  // If user has changed or logged out, clear the previous Fastrr session
  if (!currentIdentifier || lastActiveUser !== currentIdentifier) {
    console.log(
      `[Shiprocket Checkout] User switch/logout detected (from "${lastActiveUser}" to "${currentIdentifier}"). Purging FastRR session.`
    );
    clearFastrrCheckoutSession();
    try {
      if (currentIdentifier) {
        localStorage.setItem(FASTRR_ACTIVE_USER_KEY, currentIdentifier);
      } else {
        localStorage.removeItem(FASTRR_ACTIVE_USER_KEY);
      }
    } catch (_) {}
  }
};

/**
 * Launch Shiprocket Headless Checkout
 * @param {Event} event - Click event from button
 * @param {string} [customToken] - Optional token override
 * @param {Object} [options] - Additional options (fallbackUrl, isInitiatedFromApp, eventCallback, currentUser)
 * @returns {boolean} Whether checkout was initiated successfully
 */
export const launchShiprocketCheckout = (event, customToken, options = {}) => {
  const token = customToken || getShiprocketCheckoutToken();
  const fallbackUrl = options.fallbackUrl || getFallbackUrl();

  if (!token) {
    console.warn("Shiprocket Checkout Token is missing. Please set VITE_SHIPROCKET_CHECKOUT_TOKEN in .env");
    return false;
  }

  // Ensure FastRR session is strictly synced with current user before launch
  if (options.currentUser) {
    syncFastrrUserSession(options.currentUser);
  }

  if (typeof window !== "undefined" && window.HeadlessCheckout?.addToCart) {
    try {
      if (options.eventCallback && typeof options.eventCallback === "function") {
        window.srCustomCheckoutCallBackFn = options.eventCallback;
      }
      window.HeadlessCheckout.addToCart(event, token, {
        fallbackUrl,
        isInitiatedFromApp: Boolean(options.isInitiatedFromApp),
        eventCallback: options.eventCallback,
      });
      return true;
    } catch (err) {
      console.error("Error invoking HeadlessCheckout.addToCart:", err);
      return false;
    }
  } else {
    console.error("HeadlessCheckout is not available on window. Ensure shopify.js is loaded.");
    return false;
  }
};
