import axiosInstance from "../api/axiosInstance";

const reviewService = {
  /**
   * Add a review for a product
   * @param {{ productId: string, rating: number, comment: string }} payload
   */
  addReview: async ({ productId, rating, comment }) => {
    const cleanId =
      typeof productId === "object"
        ? productId?._id || productId?.id
        : productId;

    const response = await axiosInstance.post("/reviews/add", {
      productId: String(cleanId),
      rating: Number(rating),
      comment: String(comment || "").trim(),
    });
    return response.data;
  },

  /**
   * Get all reviews of a product
   * @param {string} productId
   */
  getProductReviews: async (productId) => {
    const response = await axiosInstance.get(`/reviews/product/${productId}`);
    return response.data;
  },

  /**
   * Update an existing review
   * @param {string} reviewId
   * @param {{ rating: number, comment: string }} payload
   */
  updateReview: async (reviewId, { rating, comment }) => {
    const cleanId =
      typeof reviewId === "object"
        ? reviewId?._id || reviewId?.id
        : reviewId;

    const response = await axiosInstance.put(`/reviews/update/${cleanId}`, {
      rating: Number(rating),
      comment: String(comment || "").trim(),
    });
    return response.data;
  },

  /**
   * Get single review by id
   * @param {string} reviewId
   */
  getReviewById: async (reviewId) => {
    const response = await axiosInstance.get(`/reviews/${reviewId}`);
    return response.data;
  },
};

export default reviewService;
