import axiosInstance from "../api/axiosInstance";

const cartService = {
  // Add item to cart (Logged-in or Guest)
  addToCart: async ({ productId, variantId, quantity }) => {
    const response = await axiosInstance.post("/cart/add", {
      productId,
      variantId,
      quantity,
    });

    return response.data;
  },

  // Get cart (Logged-in or Guest)
  getCart: async () => {
    const response = await axiosInstance.get("/cart/");

    return response.data;
  },

  // Remove item from cart
  removeCartItem: async (cartItemId) => {
    const response = await axiosInstance.delete(`/cart/${cartItemId}`);
    return response.data;
  },

  // Update item quantity in cart
  updateCartItem: async (cartItemId, quantity) => {
    const response = await axiosInstance.put(
      `/cart/${cartItemId}`,
      {
        quantity,
      }
    );

    return response.data;
  },

  // Clear entire cart
  clearCart: async () => {
    const response = await axiosInstance.delete("/cart/");
    return response.data;
  },

  // Merge guest cart into user cart when user logs in
  mergeCart: async (guestId) => {
    const response = await axiosInstance.post("/cart/merge", {
      guestId,
    });
    return response.data;
  },
};

export default cartService;
