import { useEffect, useState, useCallback, useMemo } from "react";
import { toast } from "sonner";
import wishlistService from "@/services/wishlistService";
import { authStorage } from "@/utils/authStorage";

const WISHLIST_KEY = "wms_wishlist";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [removingId, setRemovingId] = useState(null);

  const fetchWishlist = useCallback(async () => {
    if (!authStorage.isAuthenticated()) {
      setWishlist(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await wishlistService.getWishlist();

      if (data?.success) {
        setWishlist(data.wishlist);

        // Sync local storage IDs so ProductCards know what's wishlisted
        try {
          const ids = (data.wishlist?.products || [])
            .map((item) => item.product?._id || item.product)
            .filter(Boolean);
          localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
        } catch (err) {
          console.error("Unable to sync local wishlist IDs", err);
        }
      } else {
        setWishlist(null);
        setError(data?.message || "Unable to load wishlist.");
      }
    } catch (err) {
      console.error("Unable to fetch wishlist:", err);
      setWishlist(null);
      setError(
        err.response?.data?.message ||
          "Unable to load wishlist. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const removeFromWishlist = async ({ productId, variantId, productName }) => {
    if (!authStorage.isAuthenticated()) {
      const msg = "Please login to manage your wishlist.";
      toast.error(msg);
      return { success: false, error: msg, requiresAuth: true };
    }

    try {
      setRemovingId(productId);
      setError("");

      const data = await wishlistService.removeFromWishlist({
        productId,
        variantId,
      });

      if (data?.success) {
        setWishlist(data.wishlist);

        // Sync local storage IDs
        try {
          const ids = (data.wishlist?.products || [])
            .map((item) => item.product?._id || item.product)
            .filter(Boolean);
          localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
        } catch (err) {
          console.error("Unable to sync local wishlist IDs", err);
        }

        const msg = productName
          ? `"${productName}" removed from wishlist.`
          : data.message || "Product removed from wishlist.";
        toast.info(msg);

        window.dispatchEvent(new Event("wishlistUpdated"));

        return {
          success: true,
          wishlist: data.wishlist,
        };
      }
    } catch (err) {
      console.error("Unable to remove product from wishlist:", err);
      const message =
        err.response?.data?.message ||
        "Unable to remove product from wishlist. Please try again.";
      setError(message);
      toast.error(message);
      return {
        success: false,
        error: message,
      };
    } finally {
      setRemovingId(null);
    }
  };

  const clearWishlist = async () => {
    if (!authStorage.isAuthenticated()) {
      toast.error("Please login to manage your wishlist.");
      return;
    }

    const items = wishlist?.products || [];
    if (items.length === 0) return;

    try {
      setLoading(true);
      await Promise.all(
        items.map((item) => {
          const productId = item.product?._id || item.product;
          const variantId = item.variantId || item.product?.variants?.[0]?._id;
          return wishlistService.removeFromWishlist({ productId, variantId });
        })
      );

      setWishlist({
        ...wishlist,
        products: [],
      });
      localStorage.setItem(WISHLIST_KEY, JSON.stringify([]));
      toast.info("Wishlist cleared.");
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Unable to clear wishlist:", err);
      toast.error("Unable to clear wishlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  useEffect(() => {
    const handleUpdate = () => {
      fetchWishlist();
    };

    window.addEventListener("wishlistUpdated", handleUpdate);
    window.addEventListener("authUpdated", handleUpdate);

    return () => {
      window.removeEventListener("wishlistUpdated", handleUpdate);
      window.removeEventListener("authUpdated", handleUpdate);
    };
  }, [fetchWishlist]);

  // Normalized list of products with variantId attached
  const wishlistProducts = useMemo(() => {
    if (!wishlist?.products) return [];
    return wishlist.products
      .filter((item) => item.product && typeof item.product === "object")
      .map((item) => ({
        ...item.product,
        wishlistItemId: item._id,
        variantId: item.variantId || item.product.variants?.[0]?._id,
      }));
  }, [wishlist]);

  return {
    wishlist,
    wishlistProducts,
    loading,
    error,
    refetch: fetchWishlist,
    removeFromWishlist,
    clearWishlist,
    removingId,
  };
};

export default useWishlist;
