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
};

export default authService;