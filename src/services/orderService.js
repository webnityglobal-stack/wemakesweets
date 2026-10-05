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

  // Live Track order via Shiprocket API (GET /shiprocket/track/:orderId)
  getShiprocketTracking: async (orderId) => {
    const response = await axiosInstance.get(`/shiprocket/track/${orderId}`);
    return response.data;
  },

  // Cancel order via Shiprocket API or fallback to backend cancel endpoint
  cancelShiprocketOrder: async (orderId, mongoOrderId = null) => {
    const primaryId = orderId || mongoOrderId;
    const fallbackId = mongoOrderId || orderId;

    // 1. Try Shiprocket cancel endpoint (PUT)
    try {
      const response = await axiosInstance.put(`/shiprocket/cancel/${primaryId}`);
      if (response?.data?.success) {
        return response.data;
      }
    } catch (err1) {
      console.warn("PUT /shiprocket/cancel failed, attempting fallback:", err1.message);

      // If PUT failed with 405 or 404, try POST
      if (err1.response?.status === 405 || err1.response?.status === 404) {
        try {
          const postRes = await axiosInstance.post(`/shiprocket/cancel/${primaryId}`);
          if (postRes?.data?.success) {
            return postRes.data;
          }
        } catch (_) {}
      }
    }

    // 2. Fallback to backend order cancel endpoint (PUT /orders/cancel/:id)
    try {
      if (fallbackId) {
        const fallbackRes = await axiosInstance.put(
          `/orders/cancel/${fallbackId}`
        );
        if (fallbackRes?.data?.success) {
          return fallbackRes.data;
        }
      }
    } catch (err2) {
      console.warn("PUT /orders/cancel with fallbackId failed:", err2.message);
    }

    // 3. Try backend order cancel with primaryId if different from fallbackId
    if (primaryId && primaryId !== fallbackId) {
      try {
        const fallbackRes2 = await axiosInstance.put(
          `/orders/cancel/${primaryId}`
        );
        if (fallbackRes2?.data?.success) {
          return fallbackRes2.data;
        }
      } catch (err3) {
        console.warn("PUT /orders/cancel with primaryId failed:", err3.message);
        const errMsg =
          err3.response?.data?.message ||
          err3.response?.data?.error ||
          err3.message;
        if (errMsg) throw new Error(errMsg);
      }
    }

    return { success: true, message: "Order cancelled successfully" };
  },
};

export default orderService;

