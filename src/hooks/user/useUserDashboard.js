import { useEffect, useState, useCallback } from "react";
import userService from "@/services/userService";
import { authStorage } from "@/utils/authStorage";

const useUserDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboard = useCallback(async () => {
    if (!authStorage.isAuthenticated()) {
      setDashboard(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await userService.getDashboard();

      if (data?.success) {
        setDashboard(data.dashboard);

        // Sync updated user data into authStorage so other components stay updated
        if (data.dashboard?.user) {
          const currentToken = authStorage.getToken();
          authStorage.setAuth({
            token: currentToken,
            user: data.dashboard.user,
          });
        }
      } else {
        setError(data?.message || "Unable to load dashboard data.");
      }
    } catch (err) {
      console.error("Unable to fetch user dashboard:", err);
      setError(
        err.response?.data?.message ||
          "Unable to load dashboard data. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return {
    dashboard,
    user: dashboard?.user || null,
    stats: dashboard?.stats || {
      totalOrders: 0,
      inTransit: 0,
      wishlist: 0,
      addresses: 0,
    },
    loading,
    error,
    refetch: fetchDashboard,
  };
};

export default useUserDashboard;
