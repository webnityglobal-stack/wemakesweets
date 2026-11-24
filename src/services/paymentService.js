import axiosInstance from "../api/axiosInstance";

const paymentService = {
  /**
   * Create a FastRR payment session for an order and retrieve checkout token
   * @param {string} orderId - The WMS order ID (e.g. WMS-1789627673274)
   * @returns {Promise<Object>} Payment response containing checkoutToken
   */
  createPayment: async (orderId) => {
    const response = await axiosInstance.post("/payment/create", {
      orderId,
    });
    return response.data;
  },

  /**
   * Verify and sync FastRR payment and order status
   * @param {string} orderId - The WMS order ID (e.g. WMS-1789627673274)
   * @returns {Promise<Object>} Updated order and payment details
   */
  verifyPayment: async (orderId) => {
    const response = await axiosInstance.post("/payment/verify", {
      orderId,
    });
    return response.data;
  },

  /**
   * Cancel payment and mark order as FAILED + CANCELLED when checkout is closed or user backs out.
   * Idempotent — safe to call multiple times on same order.
   * @param {string} orderId - The WMS order ID
   * @param {string} [reason] - Cancellation reason
   * @returns {Promise<Object|null>}
   */
  cancelPayment: async (orderId, reason = "Payment cancelled / checkout closed by user") => {
    if (!orderId) return null;
    try {
      const response = await axiosInstance.post("/payment/cancel", {
        orderId,
        reason,
        failureReason: reason,
      });
      console.log(`[paymentService.cancelPayment] Order ${orderId} cancelled:`, response.data?.message);
      return response.data;
    } catch (err) {
      // 400 = already cancelled/paid — that's fine, treat as success
      if (err?.response?.status === 400) {
        console.log(`[paymentService.cancelPayment] Order ${orderId} already in final state (400):`, err.response.data?.message);
        return { success: true, alreadyFinal: true };
      }
      console.warn("[paymentService.cancelPayment] Error:", err?.response?.data || err.message);
      return null;
    }
  },

  /**
   * Explicitly mark an order payment as FAILED (alias for cancelPayment with explicit failure reason)
   * @param {string} orderId
   * @param {string} [reason]
   */
  failPayment: async (orderId, reason = "Payment failed") => {
    if (!orderId) return null;
    try {
      const response = await axiosInstance.post("/payment/failed", {
        orderId,
        reason,
        failureReason: reason,
      });
      return response.data;
    } catch (err) {
      if (err?.response?.status === 400) {
        return { success: true, alreadyFinal: true };
      }
      console.warn("[paymentService.failPayment] Error:", err?.response?.data || err.message);
      return null;
    }
  },
};

export default paymentService;
