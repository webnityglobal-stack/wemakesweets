import { useState } from "react";
import { toast } from "sonner";
import cartService from "../../services/cartService";
import { authStorage } from "../../utils/authStorage";
import { emitCartUpdated } from "../../utils/cartEvents";
import { trackAddToCart } from "../../services/metaTrackingService";

const useAddToCart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addToCart = async ({
    productId,
    variantId,
    quantity = 1,
    productName,
    price = 0,
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

      emitCartUpdated(data?.cart || null);

      // Meta Pixel + Conversions API: AddToCart
      try {
        const addedItem = data?.cart?.items?.find(
          (i) =>
            String(i.variantId || i.variant?._id || "") === String(variantId) ||
            String(i.product || i.productId || "") === String(productId)
        );
        const effectivePrice = price || addedItem?.price || 0;
        trackAddToCart({
          productId,
          variantId,
          quantity,
          productName,
          price: effectivePrice,
        });
      } catch (trackErr) {
        console.warn("Meta AddToCart tracking error:", trackErr);
      }

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