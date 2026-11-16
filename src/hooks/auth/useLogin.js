import { useState } from "react";
import authService from "../../services/authService";
import cartService from "../../services/cartService";
import { authStorage } from "../../utils/authStorage";
import { guestStorage } from "../../utils/guestStorage";
import { emitCartUpdated } from "../../utils/cartEvents";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (loginData) => {
    try {
      setLoading(true);
      setError("");

      const data = await authService.login(loginData);

      if (!data?.token) {
        throw new Error("Authentication token not received.");
      }

      authStorage.setAuth({
        token: data.token,
        user: data.user,
      });

      // Merge guest cart into user account if active
      try {
        const guestId = guestStorage.getGuestId();
        if (guestId) {
          const mergeRes = await cartService.mergeCart(guestId);
          if (mergeRes?.cart) {
            emitCartUpdated(mergeRes.cart);
          }
          guestStorage.clearGuestId();
        }
      } catch (mergeErr) {
        console.warn("Guest cart merge warning:", mergeErr);
      }

      return {
        success: true,
        message: data.message,
        token: data.token,
        user: data.user,
      };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Unable to login. Please try again.";

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
    login,
    loading,
    error,
    setError,
  };
};

export default useLogin;
