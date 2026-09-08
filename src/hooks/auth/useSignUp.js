import { useState } from "react";
import authService from "../../services/authService";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signup = async (signupData) => {
    try {
      setLoading(true);
      setError("");

      const data = await authService.signup(signupData);

      return {
        success: true,
        message: data.message,
        user: data.user,
      };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to create account. Please try again.";

      setError(message);

      return {
        success: false,
        error: message,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    signup,
    loading,
    error,
    setError,
  };
};

export default useSignUp;