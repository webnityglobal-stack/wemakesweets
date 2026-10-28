import axiosInstance from "../api/axiosInstance";
import { authStorage } from "../utils/authStorage";

const PIXEL_ID = "1523136356504886";

/**
 * Read cookie value by name
 */
const getCookie = (name) => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
  return match ? decodeURIComponent(match[3]) : null;
};

/**
 * Generate a unique event_id for Meta deduplication
 */
export const generateEventId = (prefix = "evt") => {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 9);
  return `${prefix}_${timestamp}_${randomStr}`;
};

/**
 * Track via Meta Pixel (Browser-side)
 */
const sendPixelEvent = (eventName, eventData, eventId) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("track", eventName, eventData, { eventID: eventId });
      if (import.meta.env.DEV) {
        console.log(`[Meta Pixel] Tracked ${eventName}:`, { eventId, eventData });
      }
    } catch (err) {
      console.warn(`[Meta Pixel] Error sending ${eventName}:`, err);
    }
  }
};

/**
 * Send event via Conversions API (Server-side)
 * Dispatches to backend API `/meta-ads/event`, and falls back to `/api/meta-capi` if present.
 */
const sendCapiEvent = async (eventName, eventData, eventId, customUserData = {}) => {
  try {
    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");
    const loggedInUser = authStorage?.getUser?.() || null;

    const payload = {
      eventName,
      eventId,
      eventSourceUrl: typeof window !== "undefined" ? window.location.href : "",
      eventData,
      userData: {
        fbp: fbp || null,
        fbc: fbc || null,
        email: customUserData.email || loggedInUser?.email || null,
        phone: customUserData.phone || loggedInUser?.phone || null,
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        ...customUserData,
      },
    };

    // 1. Send to backend endpoint
    try {
      await axiosInstance.post("/meta-ads/event", payload);
      if (import.meta.env.DEV) {
        console.log(`[Meta CAPI] Tracked ${eventName} via backend:`, eventId);
      }
      return;
    } catch (backendErr) {
      // 2. Fallback to local serverless route if deployed on Vercel
      try {
        await fetch("/api/meta-capi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (import.meta.env.DEV) {
          console.log(`[Meta CAPI] Tracked ${eventName} via fallback API:`, eventId);
        }
      } catch (fallbackErr) {
        // Silently catch to prevent user disruption
      }
    }
  } catch (err) {
    console.warn(`[Meta CAPI] Error sending ${eventName}:`, err);
  }
};

/**
 * Unified dispatch for both Pixel and Conversions API with the same event_id
 */
export const trackMetaEvent = (eventName, eventData, eventId = null, customUserData = {}) => {
  const finalEventId = eventId || generateEventId(eventName.toLowerCase());

  // 1. Meta Pixel
  sendPixelEvent(eventName, eventData, finalEventId);

  // 2. Meta Conversions API (Asynchronous, non-blocking)
  sendCapiEvent(eventName, eventData, finalEventId, customUserData);

  return finalEventId;
};

/**
 * Specific Event Helpers
 */

/**
 * 1. Product page open → ViewContent
 */
export const trackViewContent = (product) => {
  if (!product) return;

  const productId = String(product._id || product.id || "");
  const eventId = `vc_${productId}_${Date.now()}`;
  const price = Number(
    product.variants?.[0]?.salePrice ??
    product.salePrice ??
    product.variants?.[0]?.mrp ??
    product.price ??
    0
  );

  const eventData = {
    content_name: product.name || "Product",
    content_category: product.category?.name || product.category || "Sweets",
    content_ids: [productId],
    content_type: "product",
    value: price,
    currency: "INR",
  };

  return trackMetaEvent("ViewContent", eventData, eventId);
};

/**
 * 2. Add to cart click → AddToCart
 */
export const trackAddToCart = ({ product, productId, variantId, productName, quantity = 1, price = 0 }) => {
  const id = String(variantId || productId || product?._id || product?.id || "");
  const name = productName || product?.name || "Product";
  const numQty = Number(quantity) || 1;
  const unitPrice = Number(
    price ||
    product?.variants?.[0]?.salePrice ||
    product?.salePrice ||
    product?.price ||
    0
  );
  const totalValue = unitPrice * numQty;

  const eventId = `atc_${id}_${Date.now()}`;
  const eventData = {
    content_name: name,
    content_ids: [id],
    content_type: "product",
    value: totalValue,
    currency: "INR",
  };

  return trackMetaEvent("AddToCart", eventData, eventId);
};

/**
 * 3. Checkout start → InitiateCheckout
 */
export const trackInitiateCheckout = ({ items = [], totalAmount = 0, orderId = null }) => {
  const eventId = `ic_${orderId || Date.now()}`;
  const contentIds = items.map((i) =>
    String(i.productId || i.product?._id || i.product || i.variantId || i._id || "")
  ).filter(Boolean);

  const numItems = items.reduce((sum, i) => sum + (Number(i.quantity) || 1), 0);

  const eventData = {
    content_ids: contentIds,
    content_type: "product",
    num_items: numItems,
    value: Number(totalAmount || 0),
    currency: "INR",
  };

  return trackMetaEvent("InitiateCheckout", eventData, eventId);
};

/**
 * 4. Order success page → Purchase (with value + currency INR)
 */
export const trackPurchase = (order) => {
  if (!order) return;

  const orderId = order.orderId || order._id || `order_${Date.now()}`;
  // Deterministic eventId based on orderId for idempotent deduplication across reloads
  const eventId = `pur_${orderId}`;

  const items = Array.isArray(order.items) ? order.items : [];
  const contentIds = items.map((i) =>
    String(i.product?._id || i.product || i.productId || i.variantId || i._id || "")
  ).filter(Boolean);

  const numItems = items.reduce((sum, i) => sum + (Number(i.quantity) || 1), 0);
  const value = Number(order.totalAmount ?? order.subtotal ?? 0);

  const eventData = {
    content_ids: contentIds,
    content_type: "product",
    num_items: numItems,
    value: value,
    currency: "INR",
  };

  const userData = {
    email: order.customer?.email || order.shippingAddress?.email || null,
    phone: order.customer?.phone || order.shippingAddress?.phone || null,
  };

  return trackMetaEvent("Purchase", eventData, eventId, userData);
};

export default {
  trackMetaEvent,
  trackViewContent,
  trackAddToCart,
  trackInitiateCheckout,
  trackPurchase,
  generateEventId,
};
