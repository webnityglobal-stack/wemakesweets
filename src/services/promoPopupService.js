import axios from "axios";
import axiosInstance from "../api/axiosInstance";

const PROD_API_FALLBACK = "https://salmon-coyote-671066.hostingersite.com/api/image-upload";
const SERVER_BASE_FALLBACK = "https://salmon-coyote-671066.hostingersite.com";

/**
 * Resolves an image path into a fully qualified URL.
 * Handles absolute URLs, protocol-relative, data URLs, or relative paths like /uploads/...
 */
export const resolvePopupImageUrl = (imagePath) => {
  if (!imagePath || typeof imagePath !== "string") return "";

  if (/^(?:https?:|\/\/|data:|blob:)/i.test(imagePath)) {
    return imagePath;
  }

  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${SERVER_BASE_FALLBACK}${cleanPath}`;
};

/**
 * Service to fetch the promotional / discount popup image.
 * GET /api/image-upload
 */
const promoPopupService = {
  getPromoImage: async () => {
    let data = null;

    // First attempt: use axiosInstance configured for the project
    try {
      const response = await axiosInstance.get("/image-upload");
      if (response && response.data && response.data.success) {
        data = response.data;
      }
    } catch {
      // If axiosInstance failed (e.g., local dev baseURL without the route), fallback to production direct URL
      try {
        const fallbackRes = await axios.get(PROD_API_FALLBACK, { timeout: 10000 });
        if (fallbackRes && fallbackRes.data && fallbackRes.data.success) {
          data = fallbackRes.data;
        }
      } catch (fallbackError) {
        console.warn("Failed to fetch promo popup image from both endpoints:", fallbackError);
        return { success: false, image: null, imageUrl: null };
      }
    }

    if (!data || !Array.isArray(data.images) || data.images.length === 0) {
      return { success: false, image: null, imageUrl: null };
    }

    // Get the latest uploaded promotional image
    const latestImage = data.images[data.images.length - 1];
    const rawPath =
      latestImage.path ||
      latestImage.url ||
      latestImage.imageUrl ||
      latestImage.image ||
      latestImage.filename;

    const fullUrl = resolvePopupImageUrl(rawPath);

    return {
      success: true,
      image: latestImage,
      imageUrl: fullUrl,
    };
  },
};

export default promoPopupService;
