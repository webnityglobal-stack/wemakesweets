import { useEffect, useState } from "react";
import { toast } from "sonner";
import cartService from "@/services/cartService";
import { emitCartUpdated } from "@/utils/cartEvents";
import { authStorage } from "@/utils/authStorage";

const useCart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingItemId, setUpdatingItemId] = useState(null);

  const fetchCart = async () => {
    if (!authStorage.isAuthenticated()) {
      setCart({ items: [] });
      setLoading(false);
      setError("");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await cartService.getCart();

      if (data?.success && data?.cart) {
        const items = Array.isArray(data.cart.items) ? data.cart.items : [];
        const sanitizedCart = {
          ...data.cart,
          items,
        };
        setCart(sanitizedCart);
        emitCartUpdated(sanitizedCart);
      } else {
        setCart({ items: [] });
        emitCartUpdated({ items: [] });
        if (data?.message && !data?.success) {
          setError(data.message);
        }
      }
    } catch (error) {
      console.error("Unable to fetch cart:", error);

      setCart({ items: [] });
      emitCartUpdated({ items: [] });

      if (error?.response?.status !== 401) {
        setError(
          error.response?.data?.message ||
            "Unable to load cart. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };



  const removeCartItem = async (cartItemId) => {
    try {
      setLoading(true);
      setError("");

      const data = await cartService.removeCartItem(cartItemId);

      const items = Array.isArray(data?.cart?.items) ? data.cart.items : [];
      const sanitizedCart = data?.cart ? { ...data.cart, items } : { items: [] };

      setCart(sanitizedCart);
      emitCartUpdated(sanitizedCart);
      const msg = data?.message || "Item removed from cart.";
      toast.success(msg);

      return {
        success: true,
        message: msg,
      };
    } catch (error) {
      console.error("Unable to remove item from cart:", error);

      // Optimistically remove from state so the user is never stuck with a broken item
      setCart((prevCart) => {
        if (!prevCart) return { items: [] };
        const updatedItems = (prevCart.items || []).filter(
          (item) => item._id !== cartItemId && item.productId !== cartItemId
        );
        const updatedCart = { ...prevCart, items: updatedItems };
        emitCartUpdated(updatedCart);
        return updatedCart;
      });

      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Item removed from cart.";

      toast.info(message);

      return {
        success: true,
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
      emitCartUpdated(data.cart);

      return {
        success: true,
        cart: data.cart,
      };
    } catch (error) {
      // ----------------------------------
      // ROLLBACK
      // ----------------------------------

      setCart(previousCart);
      emitCartUpdated(previousCart);

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

    const handleAuthSync = () => {
      fetchCart();
    };

    window.addEventListener("authUpdated", handleAuthSync);
    return () => {
      window.removeEventListener("authUpdated", handleAuthSync);
    };
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