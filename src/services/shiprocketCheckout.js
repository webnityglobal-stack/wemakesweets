/**
 * Shiprocket Headless Checkout Service
 * API & UI Flow Documentation:
 * https://documenter.getpostman.com/view/25617008/2sB34bL3ig#2bef03a2-b3cc-4d63-a8c8-bf078842a321
 */

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
 * Launch Shiprocket Headless Checkout
 * @param {Event} event - Click event from button
 * @param {string} [customToken] - Optional token override
 * @param {Object} [options] - Additional options (fallbackUrl, isInitiatedFromApp, eventCallback)
 * @returns {boolean} Whether checkout was initiated successfully
 */
export const launchShiprocketCheckout = (event, customToken, options = {}) => {
  const token = customToken || getShiprocketCheckoutToken();
  const fallbackUrl = options.fallbackUrl || getFallbackUrl();

  if (!token) {
    console.warn("Shiprocket Checkout Token is missing. Please set VITE_SHIPROCKET_CHECKOUT_TOKEN in .env");
    return false;
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

