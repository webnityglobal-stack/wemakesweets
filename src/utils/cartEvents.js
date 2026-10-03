/**
 * Utility functions for cart state synchronization across components.
 */

export const getCartItemCount = (cart) => {
  if (!cart) return 0;
  if (Array.isArray(cart.items)) {
    return cart.items.reduce(
      (total, item) => total + (Number(item.quantity) || 1),
      0
    );
  }
  if (typeof cart.totalItems === "number") return cart.totalItems;
  if (typeof cart.count === "number") return cart.count;
  return 0;
};

export const emitCartUpdated = (cart = null) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("cartUpdated", {
        detail: { cart },
      })
    );
  }
};
