import axiosInstance from "../api/axiosInstance";

/**
 * Resolves an image path returned from the backend into a fully qualified URL.
 * Handles relative paths like "/uploads/hero/..." or absolute URLs like "https://...".
 */
export const resolveBannerImageUrl = (imagePath) => {
  if (!imagePath || typeof imagePath !== "string") return "";

  // Already a full or protocol-relative or data URL
  if (/^(?:https?:|\/\/|data:)/i.test(imagePath)) {
    return imagePath;
  }

  // Get base URL from environment or default deployed URL
  const apiBase =
    import.meta.env.VITE_API_BASE_URL ||
    "https://wemakesweets-backend.onrender.com/api";

  // Strip trailing /api or /api/ so we point to the backend server root
  const serverBase = apiBase.replace(/\/api\/?$/i, "");
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;

  return `${serverBase}${cleanPath}`;
};

const heroBannerService = {
  /**
   * Fetches hero banner slides/slots from backend
   * Returns: { success: boolean, banners: Array<{ _id, slot, image, isActive }> }
   */
  getHeroBanners: async () => {
    const response = await axiosInstance.get("/hero-banner");
    return response.data;
  },
};

export default heroBannerService;
