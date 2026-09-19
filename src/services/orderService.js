import axiosInstance from "../api/axiosInstance";

const orderService = {
  // Fetch logged-in user's orders
  getMyOrders: async () => {
    const response = await axiosInstance.get("/orders/my-orders");
    return response.data;
  },

  // Create order in backend
  createOrder: async (orderData) => {
    const response = await axiosInstance.post("/orders/create", orderData);
    return response.data;
  },

  // Fetch order details by orderId (e.g. WMS-1789715277772)
  getOrderById: async (orderId) => {
    const response = await axiosInstance.get(`/orders/${orderId}`);
    return response.data;
  },

  // Cancel order via Shiprocket API (PUT /shiprocket/cancel/:orderId)
  cancelShiprocketOrder: async (orderId, mongoOrderId = null) => {
    try {
      const response = await axiosInstance.put(`/shiprocket/cancel/${orderId}`);
      return response.data;
    } catch (err) {
      const errMsg = err.response?.data?.message?.toLowerCase() || "";
      // If Shiprocket order does not exist yet, fallback to backend order cancel if mongoId provided
      if (
        (err.response?.status === 400 || err.response?.status === 404) &&
        (errMsg.includes("shiprocket order does not exist") ||
          errMsg.includes("shiprocket order not found")) &&
        mongoOrderId
      ) {
        const fallbackRes = await axiosInstance.put(
          `/orders/cancel/${mongoOrderId}`
        );
        return fallbackRes.data;
      }
      throw err;
    }
  },
};

export default orderService;

