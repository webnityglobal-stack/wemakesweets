import axiosInstance from "../api/axiosInstance";

const authService = {
  sendOtp: async (phone) => {
    const response = await axiosInstance.post("/auth/send-otp", {
      phone,
    });
    return response.data;
  },

  verifyOtp: async ({ phone, otp, name, guestId }) => {
    const payload = {
      phone,
      otp,
      ...(name ? { name } : {}),
      ...(guestId ? { guestId } : {}),
    };
    const response = await axiosInstance.post("/auth/verify-otp", payload);
    return response.data;
  },

  resendOtp: async (phone, retryType = "text") => {
    const response = await axiosInstance.post("/auth/resend-otp", {
      phone,
      retryType,
    });
    return response.data;
  },
};

export default authService;
