import axios from "axios";
import { setupInterceptors } from "./apiInterceptor";

const rawBaseURL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://salmon-coyote-671066.hostingersite.com/api";

const cleanBaseURL = rawBaseURL.trim().replace(/\/+$/, "");
const baseURL = cleanBaseURL.endsWith("/api")
  ? cleanBaseURL
  : `${cleanBaseURL}/api`;

const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(axiosInstance);

export default axiosInstance;