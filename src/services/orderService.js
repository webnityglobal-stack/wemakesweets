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
};

export default orderService;
