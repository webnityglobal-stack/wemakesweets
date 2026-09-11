import { useState } from "react";
import { toast } from "sonner";
import cartService from "../../services/cartService";
import { authStorage } from "../../utils/authStorage";

const useAddToCart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addToCart = async ({
    productId,
    variantId,
    quantity = 1,
    productName,
  }) => {
    if (!authStorage.isAuthenticated()) {
      const msg = "Please login to add items to your cart.";
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

      const data = await cartService.addToCart({
        productId,
        variantId,
        quantity,
      });

      const successMsg = productName
        ? `"${productName}" added to cart successfully!`
        : data?.message || "Product added to cart successfully!";

      setSuccess(successMsg);
      toast.success(successMsg);

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Unable to add product to cart:", error);

      const message =
        error.response?.data?.message ||
        "Unable to add product to cart. Please try again.";

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
    addToCart,
    loading,
    error,
    success,
    setError,
    setSuccess,
  };
};

export default useAddToCart;