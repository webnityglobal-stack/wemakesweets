import { useEffect, useState } from "react";
import { toast } from "sonner";
import cartService from "@/services/cartService";

const useCart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingItemId, setUpdatingItemId] = useState(null);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await cartService.getCart();

      if (data?.success) {
        setCart(data.cart);
      } else {
        setCart(null);
        setError(data?.message || "Unable to load cart.");
      }
    } catch (error) {
      console.error("Unable to fetch cart:", error);

      setCart(null);

      setError(
        error.response?.data?.message ||
          "Unable to load cart. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };



const removeCartItem = async (cartItemId) => {
  try {
    setLoading(true);
    setError("");

    const data = await cartService.removeCartItem(cartItemId);

    setCart(data.cart);
    const msg = data.message || "Item removed from cart.";
    toast.success(msg);

    return {
      success: true,
      message: msg,
    };
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Unable to remove item from cart.";

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




  const updateCartItem = async (cartItemId, quantity) => {
    if (!cartItemId || quantity < 1) return;

    const previousCart = cart;

    try {
      setUpdatingItemId(cartItemId);
      setError("");

      // ----------------------------------
      // OPTIMISTIC UPDATE
      // ----------------------------------

      setCart((prevCart) => {
        if (!prevCart) return prevCart;

        return {
          ...prevCart,
          items: prevCart.items.map((item) =>
            item._id === cartItemId
              ? {
                  ...item,
                  quantity,
                }
              : item
          ),
        };
      });

      // ----------------------------------
      // API
      // ----------------------------------

      const data = await cartService.updateCartItem(
        cartItemId,
        quantity
      );

      // ----------------------------------
      // SERVER IS SOURCE OF TRUTH
      // ----------------------------------

      setCart(data.cart);

      return {
        success: true,
        cart: data.cart,
      };
    } catch (error) {
      // ----------------------------------
      // ROLLBACK
      // ----------------------------------

      setCart(previousCart);

      const message =
        error.response?.data?.message ||
        "Unable to update cart.";

      setError(message);
      toast.error(message);

      return {
        success: false,
        error: message,
      };
    } finally {
      setUpdatingItemId(null);
    }
  };




  useEffect(() => {
    fetchCart();
  }, []);

return {
    cart,
    loading,
    error,
    refetch: fetchCart,
removeCartItem,
    updateCartItem,
    updatingItemId,
};
};

export default useCart;