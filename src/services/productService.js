import axiosInstance from "../api/axiosInstance";

const productService = {

  // get all product 
  getAllProducts: async () => {
    const response = await axiosInstance.get("/products");

    return response.data;
  },


  // get product by id
  getProductById: async (productId) => {
    const response = await axiosInstance.get(`/products/${productId}`);

    return response.data;
  },

};

export default productService;