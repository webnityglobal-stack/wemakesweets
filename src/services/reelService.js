import axiosInstance from "../api/axiosInstance";

/**
 * Resolves a reel video URL returned from the backend.
 * Handles both absolute URLs (e.g. "https://salmon-coyote-671066.hostingersite.com/uploads/reels/...")
 * and relative paths (e.g. "/uploads/reels/...").
 */
export const resolveReelVideoUrl = (videoUrl) => {
  if (!videoUrl || typeof videoUrl !== "string") return "";

  // Return as-is if already a complete or protocol-relative URL
  if (/^(?:https?:|\/\/|data:|blob:)/i.test(videoUrl)) {
    return videoUrl;
  }

  const rawBaseURL =
    import.meta.env.VITE_API_BASE_URL ||
    "https://salmon-coyote-671066.hostingersite.com/api";

  const cleanBase = rawBaseURL.trim().replace(/\/+$/, "");
  const serverBase = cleanBase.replace(/\/api\/?$/i, "");
  const cleanPath = videoUrl.startsWith("/") ? videoUrl : `/${videoUrl}`;

  return `${serverBase}${cleanPath}`;
};

const reelService = {
  /**
   * Fetches all reels uploaded from admin panel
   * GET /api/reels
   * Returns: { success: boolean, message: string, count: number, reels: Array<{ filename, url, size, createdAt, updatedAt }> }
   */
  getReels: async () => {
    const response = await axiosInstance.get("/reels");
    return response.data;
  },
};

export default reelService;
