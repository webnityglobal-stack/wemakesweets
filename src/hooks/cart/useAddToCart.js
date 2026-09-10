import { useState } from "react";
import cartService from "../../services/cartService";

const useAddToCart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addToCart = async ({
    productId,
    variantId,
    quantity = 1,
  }) => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const data = await cartService.addToCart({
        productId,
        variantId,
        quantity,
      });

      setSuccess(data?.message || "Product added to cart successfully.");

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