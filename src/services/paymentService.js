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
};

export default paymentService;
