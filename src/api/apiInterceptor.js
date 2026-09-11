import { toast } from "sonner";
import { authStorage } from "../utils/authStorage";

const setupInterceptors = (axiosInstance) => {
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = authStorage.getToken();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
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
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        const isLoginAttempt = error.config?.url?.includes("/auth/login");
        if (!isLoginAttempt && authStorage.getToken()) {
          toast.error("Session expired. Please login again.");
        }
        authStorage.clearAuth();
      }

      return Promise.reject(error);
    }
  );
};

export { setupInterceptors };