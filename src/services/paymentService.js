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
   * Finalize / Sync payment status for an order
   * @param {{ orderId?: string, paymentId?: string, gatewayOrderId?: string }} data
   * @returns {Promise<Object>} Payment status response
   */
  paymentSuccess: async (data) => {
    const response = await axiosInstance.post("/payment/success", data);
    return response.data;
  },

  /**
   * Get payment details by payment ID
   * @param {string} paymentId
   * @returns {Promise<Object>}
   */
  getPayment: async (paymentId) => {
    const response = await axiosInstance.get(`/payment/${paymentId}`);
    return response.data;
  },
};

export default paymentService;
