import axios from "axios";
import { setupInterceptors } from "./apiInterceptor";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://wemakesweets-backend.onrender.com/api",
  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(axiosInstance);

export default axiosInstance;