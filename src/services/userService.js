import axiosInstance from "../api/axiosInstance";

const userService = {
  // get user dashboard (user profile + stats)
  getDashboard: async () => {
    const response = await axiosInstance.get("/users/dashboard");
    return response.data;
  },

  // update user profile
  updateProfile: async (profileData) => {
    const response = await axiosInstance.put("/users/profile", profileData);
    return response.data;
  },
};

export default userService;
