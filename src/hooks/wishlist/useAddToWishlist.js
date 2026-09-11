import { useState } from "react";
import { toast } from "sonner";
import wishlistService from "../../services/wishlistService";
import { authStorage } from "../../utils/authStorage";

const useAddToWishlist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addToWishlist = async ({
    productId,
    variantId,
    productName,
  }) => {
    if (!authStorage.isAuthenticated()) {
      const msg = "Please login to add items to your wishlist.";
      setError(msg);
      toast.error(msg);
      return {
        success: false,
        error: msg,
        requiresAuth: true,
      };
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const data = await wishlistService.addToWishlist({
        productId,
        variantId,
      });

      const successMsg = productName
        ? `"${productName}" added to wishlist successfully!`
        : data?.message || "Product added to wishlist successfully!";

      setSuccess(successMsg);
      toast.success(successMsg);

      // Notify other components of wishlist update
      window.dispatchEvent(new Event("wishlistUpdated"));

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Unable to add product to wishlist:", error);

      const message =
        error.response?.data?.message ||
        "Unable to add product to wishlist. Please try again.";

      setError(message);
      toast.error(message);

      return {
        success: false,
        error: message,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    addToWishlist,
    loading,
    error,
    success,
    setError,
    setSuccess,
  };
};

export default useAddToWishlist;
