import { useState } from "react";
import { toast } from "sonner";
import wishlistService from "../../services/wishlistService";
import { authStorage } from "../../utils/authStorage";

const useRemoveFromWishlist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const removeFromWishlist = async ({
    productId,
    variantId,
    productName,
  }) => {
    if (!authStorage.isAuthenticated()) {
      const msg = "Please login to manage your wishlist.";
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

      const data = await wishlistService.removeFromWishlist({
        productId,
        variantId,
      });

      const successMsg = productName
        ? `"${productName}" removed from wishlist.`
        : data?.message || "Product removed from wishlist.";

      setSuccess(successMsg);
      toast.info(successMsg);

      // Notify other components of wishlist update
      window.dispatchEvent(new Event("wishlistUpdated"));

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Unable to remove product from wishlist:", error);

      const message =
        error.response?.data?.message ||
        "Unable to remove product from wishlist. Please try again.";

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
    removeFromWishlist,
    deleteWishlist: removeFromWishlist,
    loading,
    error,
    success,
    setError,
    setSuccess,
  };
};

export default useRemoveFromWishlist;
