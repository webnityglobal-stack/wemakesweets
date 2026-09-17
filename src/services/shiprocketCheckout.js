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
 * @param {Object} [options] - Additional options (fallbackUrl, isInitiatedFromApp)
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
      window.HeadlessCheckout.addToCart(event, token, {
        fallbackUrl,
        isInitiatedFromApp: Boolean(options.isInitiatedFromApp),
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
