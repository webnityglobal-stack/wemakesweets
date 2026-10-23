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
   * Cancel payment and mark order as cancelled when checkout is closed or user backs out
   * @param {string} orderId - The WMS order ID
   * @param {string} [reason] - Cancellation reason
   * @returns {Promise<Object>}
   */
  cancelPayment: async (orderId, reason = "Payment cancelled / checkout closed by user") => {
    try {
      const response = await axiosInstance.post("/payment/cancel", {
        orderId,
        reason,
        failureReason: reason,
      });
      return response.data;
    } catch (err) {
      console.warn("Cancel payment error:", err?.response?.data || err.message);
      return null;
    }
  },
};

export default paymentService;
