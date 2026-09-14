import { useState } from "react";
import userService from "@/services/userService";
import { authStorage } from "@/utils/authStorage";

const useUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateProfile = async (profileData) => {
    try {
      setLoading(true);
      setError("");

      const payload = {
        name: profileData.name?.trim(),
        phone: profileData.phone?.trim(),
        email: (profileData.email || profileData.mail)?.trim(),
        mail: (profileData.email || profileData.mail)?.trim(),
      };

      const data = await userService.updateProfile(payload);

      if (data?.success) {
        if (data.user) {
          const currentToken = authStorage.getToken();
          authStorage.setAuth({
            token: currentToken,
            user: data.user,
          });
        }

        return {
          success: true,
          message: data.message || "Profile updated successfully",
          user: data.user,
        };
      } else {
        const msg = data?.message || "Failed to update profile.";
        setError(msg);
        return {
          success: false,
          error: msg,
        };
      }
    } catch (err) {
      console.error("Unable to update profile:", err);
      const msg =
        err.response?.data?.message ||
        "Unable to update profile. Please try again.";
      setError(msg);
      return {
        success: false,
        error: msg,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    updateProfile,
    loading,
    error,
    setError,
  };
};

export default useUpdateProfile;
