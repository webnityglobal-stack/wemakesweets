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
        authStorage.clearAuth();
      }

      return Promise.reject(error);
    }
  );
};

export { setupInterceptors };