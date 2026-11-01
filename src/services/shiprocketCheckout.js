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
 * Helper to generate a compliant UUID v4
 */
export const generateUUID = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Rotate FastRR device & session UUIDs so Shiprocket's server cannot link the current
 * browser instance to the previously logged-in user.
 */
export const rotateFastrrDeviceIds = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const newDeviceId = generateUUID();
  const newSessionId = generateUUID();

  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  const domains = ["", hostname, `.${hostname}`];
  if (domainParts.length > 2) {
    domains.push(`.${domainParts.slice(-2).join(".")}`);
  }

  domains.forEach((dom) => {
    const domStr = dom ? `; domain=${dom}` : "";
    document.cookie = `fastrr_uuid=${newDeviceId}; path=/${domStr}; max-age=31536000; SameSite=Lax`;
    document.cookie = `fastrr_usid=${newSessionId}; path=/${domStr}; max-age=31536000; SameSite=Lax`;
  });
};

/**
 * Thoroughly delete all FastRR / Shiprocket cookies across all domain and path combinations
 * including SameSite=None; Secure required by Chrome for cross-site cookies.
 */
export const purgeAllFastrrCookies = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const cookieNames = [
    "fastrr_uuid",
    "fastrr_usid",
    "fastrr_user_id",
    "fastrr_user_profile_id",
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
    "__uc_site",
    "_fbp",
    "_fbc",
  ];

  if (document.cookie) {
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (/fastrr|shiprocket|sr_|src_|pickrr|uc_/i.test(name) && !cookieNames.includes(name)) {
        cookieNames.push(name);
      }
    });
  }

  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  const domains = ["", hostname, `.${hostname}`];
  if (domainParts.length > 2) {
    domains.push(`.${domainParts.slice(-2).join(".")}`);
  }

  const paths = ["/", "/cart", "/checkout", "/my-account", window.location.pathname];
  const flagCombos = [
    "; SameSite=None; Secure",
    "; SameSite=Lax",
    "; SameSite=Strict",
    "",
  ];

  cookieNames.forEach((name) => {
    domains.forEach((dom) => {
      paths.forEach((p) => {
        flagCombos.forEach((flags) => {
          const domStr = dom ? `; domain=${dom}` : "";
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${p}${domStr}${flags}`;
          document.cookie = `${name}=; max-age=0; path=${p}${domStr}${flags}`;
        });
      });
    });
  });
};

/**
 * Clear all FastRR localStorage cached tokens and set srcUserPerformedLogout flag
 * so Fastrr's React app will not automatically log in the previous user.
 */
export const purgeFastrrLocalStorage = () => {
  if (typeof window === "undefined" || !window.localStorage) return;

  const fastrrKeys = [
    "refreshToken",
    "refreshTokenValue",
    "user_id",
    "seller_id",
    "pim_sid",
    "expireTime",
    "x-session-token",
    "fastrr_user_id",
    "fastrr_user_profile_id",
    "fastrrCart",
    "codFormAddress",
    "logout_temp",
    "checkoutToken",
    "user_type",
    "__uc_site",
    "landingPageUrl",
    "landingPageExpireTime",
    "shopifyCart",
    "shopifyCartItems",
    "srCartSelectedFreebies",
    "srFreebieSelector",
    "configfetchAfterRedirectionTried",
    "marketingConsent",
    "isCardDesign",
    "srcUserCookieOpted",
    "src_pim_sid",
    "src_refresh_token",
    "src_is_logged_in",
    "src_user_id",
    "buyer_details",
    "fastrr_buyer_details",
    "customer_address",
  ];

  fastrrKeys.forEach((k) => localStorage.removeItem(k));

  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && /fastrr|shiprocket|pickrr|sr_|src_/i.test(key) && key !== FASTRR_ACTIVE_USER_KEY) {
      localStorage.removeItem(key);
    }
  }

  // FastRR internal flags to completely disable cached session auto-login
  localStorage.setItem("srcUserPerformedLogout", "true");
  localStorage.setItem("logout_temp", "true");
};

/**
 * Complete FastRR session purge (cookies + device rotation + localStorage + DOM)
 */
export const clearFastrrCheckoutSession = () => {
  if (typeof window === "undefined") return;

  try {
    purgeAllFastrrCookies();
    rotateFastrrDeviceIds();
    purgeFastrrLocalStorage();

    try {
      sessionStorage.clear();
    } catch (_) {}

    const domSelectors = [
      "#fastrr-main-container",
      "#headless-container",
      "#headless-iframe",
      "#fastrr-pre-loader",
      "#prefetch-iframe",
      "#fastrr-prefetch-container",
      ".fastrr-checkout-modal",
      "iframe[src*='shiprocket']",
      "iframe[src*='fastrr']",
    ];

    domSelectors.forEach((sel) => {
      try {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      } catch (_) {}
    });

    if (window.srCustomCheckoutCallBackFn) {
      window.srCustomCheckoutCallBackFn = null;
    }

    console.log("[Shiprocket Checkout] FastRR session thoroughly purged and device ID rotated.");
  } catch (err) {
    console.warn("[Shiprocket Checkout] Error purging FastRR session:", err);
  }
};

/**
 * Synchronize FastRR session with the currently authenticated website user.
 * If user switched accounts or logged out, purges previous session.
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

  if (!currentIdentifier || lastActiveUser !== currentIdentifier) {
    console.log(
      `[Shiprocket Checkout] User switch/logout: previous "${lastActiveUser}", current "${currentIdentifier}". Purging FastRR session.`
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
 * @param {Object} [options] - Additional options (fallbackUrl, isInitiatedFromApp, eventCallback, currentUser, userAddress)
 * @returns {boolean} Whether checkout was initiated successfully
 */
export const launchShiprocketCheckout = (event, customToken, options = {}) => {
  const token = customToken || getShiprocketCheckoutToken();
  const fallbackUrl = options.fallbackUrl || getFallbackUrl();

  if (!token) {
    console.warn("Shiprocket Checkout Token is missing. Please set VITE_SHIPROCKET_CHECKOUT_TOKEN in .env");
    return false;
  }

  // 1. Sync & purge previous FastRR session if account changed
  const effectiveUser =
    options.currentUser ||
    (typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null);

  if (effectiveUser) {
    syncFastrrUserSession(effectiveUser);
  }

  // 2. Launch via HeadlessCheckout.addToCart cleanly without breaking iframe src
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

/**
 * Clear all FastRR / Shiprocket checkout cookies, session and cached buyers
 */
export const clearFastrrSession = () => {
  if (typeof window === "undefined") return;

  const cookiesToClear = [
    "fastrr_uuid",
    "fastrr_usid",
    "fastrr_user_id",
    "fastrrUserIdEventTriggered",
    "fastrrPrefetchTriggered",
    "e360_session",
    "EDD_check_uuid",
    "cxpToken",
    "sr_user_id",
    "sr_checkout_utm",
    "src_fca_utm",
    "discount_code",
    "discount_nudge",
  ];

  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = [
    "",
    host,
    `.${host}`,
    parts.length > 1 ? `.${parts.slice(-2).join(".")}` : "",
  ].filter(Boolean);

  cookiesToClear.forEach((name) => {
    domains.forEach((dom) => {
      document.cookie = `${name}=; Path=/; Domain=${dom}; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;`;
    });
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;`;
  });

  try {
    Object.keys(localStorage || {}).forEach((key) => {
      if (/fastrr|shiprocket|checkout/i.test(key)) {
        localStorage.removeItem(key);
      }
    });
    Object.keys(sessionStorage || {}).forEach((key) => {
      if (/fastrr|shiprocket|checkout/i.test(key)) {
        sessionStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.warn("Storage clear warning:", e);
  }

  try {
    const ids = [
      "fastrr-prefetch-container",
      "headless-iframe",
      "headless-container",
      "fastrr-main-container",
    ];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    document
      .querySelectorAll("iframe[src*='shiprocket'], iframe[src*='fastrr']")
      .forEach((el) => el.remove());
  } catch (e) {
    console.warn("DOM cleanup warning:", e);
  }
};

