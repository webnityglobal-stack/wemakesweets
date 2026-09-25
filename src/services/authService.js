import axiosInstance from "../api/axiosInstance";

const authService = {
  signup: async (signupData) => {
    const response = await axiosInstance.post(
      "/auth/signup",
      signupData
    );
console.log("this is api response", response);
    return response.data;
  },

  login: async (loginData) => {
    const response = await axiosInstance.post(
      "/auth/login",
      loginData
    );

    return response.data;
  },

  forgotPassword: async (identifier) => {
    const response = await axiosInstance.post("/auth/forgot-password", {
      identifier,
    });
    return response.data;
  },

  verifyResetOTP: async (identifier, otp) => {
    const response = await axiosInstance.post("/auth/verify-reset-otp", {
      identifier,
      otp,
    });
    return response.data;
  },

  resetPassword: async (identifier, password) => {
    const response = await axiosInstance.post("/auth/reset-password", {
      identifier,
      password,
    });
    return response.data;
  },
};

export default authService;