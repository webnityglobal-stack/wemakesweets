import axiosInstance from "../api/axiosInstance";

const wishlistService = {
  // add to wishlist
  addToWishlist: async ({ productId, variantId }) => {
    const response = await axiosInstance.post(`/wishlist/add/${productId}`, {
      variantId,
    });

    return response.data;
  },

  // get wishlist
  getWishlist: async () => {
    const response = await axiosInstance.get("/wishlist");
    return response.data;
  },

  // remove / delete from wishlist
  removeFromWishlist: async ({ productId, variantId }) => {
    const response = await axiosInstance.delete(
      `/wishlist/remove/${productId}`,
      {
        data: {
          variantId,
        },
      }
    );
    return response.data;
  },
};

export default wishlistService;
