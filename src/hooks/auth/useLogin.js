import { useState } from "react";
import authService from "../../services/authService";
import { authStorage } from "../../utils/authStorage";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (loginData) => {
    try {
      setLoading(true);
      setError("");

      const data = await authService.login(loginData);

      if (!data?.token) {
        throw new Error("Authentication token not received.");
      }

      authStorage.setAuth({
        token: data.token,
        user: data.user,
      });

      return {
        success: true,
        message: data.message,
        token: data.token,
        user: data.user,
      };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Unable to login. Please try again.";

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
    login,
    loading,
    error,
    setError,
  };
};

export default useLogin;