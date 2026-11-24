import { useState } from "react";
import authService from "../../services/authService";
import cartService from "../../services/cartService";
import { authStorage } from "../../utils/authStorage";
import { guestStorage } from "../../utils/guestStorage";
import { emitCartUpdated } from "../../utils/cartEvents";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");

  const sendOtp = async (phone) => {
    try {
      setLoading(true);
      setError("");

      const data = await authService.sendOtp(phone);
      return {
        success: true,
        data,
        message: data?.message || "OTP sent successfully.",
      };
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Unable to send OTP. Please try again.";
      setError(message);
      return {
        success: false,
        error: message,
      };
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async (phone, retryType = "text") => {
    try {
      setResending(true);
      setError("");

      const data = await authService.resendOtp(phone, retryType);
      return {
        success: true,
        data,
        message: data?.message || "OTP resent successfully.",
      };
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Unable to resend OTP. Please try again.";
      setError(message);
      return {
        success: false,
        error: message,
      };
    } finally {
      setResending(false);
    }
  };

  const verifyOtp = async ({ phone, otp, name }) => {
    try {
      setLoading(true);
      setError("");

      const guestId = guestStorage.getGuestId();

      const data = await authService.verifyOtp({
        phone,
        otp,
        name,
        guestId,
      });

      if (!data?.token) {
        throw new Error("Authentication token not received.");
      }

      authStorage.setAuth({
        token: data.token,
        user: data.user,
      });

      // Backend already merges guest cart & links guest orders on verify-otp.
      // Clear local guestId and sync fresh cart into UI.
      try {
        if (guestId) {
          if (!data.mergedGuestCart) {
            await cartService.mergeCart(guestId).catch(() => null);
          }
          guestStorage.clearGuestId();
        }
        const cartRes = await cartService.getCart();
        if (cartRes?.cart) {
          emitCartUpdated(cartRes.cart);
        }
      } catch (cartSyncErr) {
        console.warn("Post-login cart sync notice:", cartSyncErr);
      }

      return {
        success: true,
        message: data.message,
        token: data.token,
        user: data.user,
        isNewUser: Boolean(data.isNewUser),
        linkedGuestOrders: Number(data.linkedGuestOrders || 0),
      };
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Invalid or expired OTP. Please try again.";
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
    sendOtp,
    verifyOtp,
    resendOtp,
    loading,
    resending,
    error,
    setError,
  };
};

export default useLogin;
