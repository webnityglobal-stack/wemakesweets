import axiosInstance from "../api/axiosInstance";

const productService = {
  getAllProducts: async () => {
    const response = await axiosInstance.get("/products");

    return response.data;
  },
};

export default productService;