import axiosInstance from "../api/axiosInstance";

const cartService = {

    // add cart 
  addToCart: async ({ productId, variantId, quantity }) => {
    const response = await axiosInstance.post("/cart/add", {
      productId,
      variantId,
      quantity,
    });

    return response.data;
  },

//   getcart product
  getCart: async () => {
    const response = await axiosInstance.get("/cart/");

    return response.data;
  },


   removeCartItem: async (cartItemId) => {
    const response = await axiosInstance.delete(`/cart/${cartItemId}`);
    return response.data;
  },

  updateCartItem: async (cartItemId, quantity) => {
    const response = await axiosInstance.put(
      `/cart/${cartItemId}`,
      {
        quantity,
      }
    );

    return response.data;
  },

};

export default cartService;