import { toast } from "sonner";
import { authStorage } from "../utils/authStorage";
import { guestStorage } from "../utils/guestStorage";

const setupInterceptors = (axiosInstance) => {
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = authStorage.getToken();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      } else {
        // Send guest ID for guest user tracking (cart, checkout, etc.)
        const guestId = guestStorage.getGuestId();
        if (guestId) {
          config.headers["x-guest-id"] = guestId;
        }
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // If backend generated or returned guestId, synchronize it
      if (response?.data?.guestId) {
        guestStorage.setGuestId(response.data.guestId);
      }
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        const reqUrl = error.config?.url || "";
        const isAuthAttempt =
          reqUrl.includes("/auth/login") ||
          reqUrl.includes("/auth/send-otp") ||
          reqUrl.includes("/auth/verify-otp") ||
          reqUrl.includes("/auth/resend-otp") ||
          reqUrl.includes("/auth/send-login-otp") ||
          reqUrl.includes("/auth/verify-login-otp");
        if (!isAuthAttempt && authStorage.getToken()) {
          toast.error("Session expired. Please login again.");
        }
        authStorage.clearAuth();
      }

      return Promise.reject(error);
    }
  );
};

export { setupInterceptors };
