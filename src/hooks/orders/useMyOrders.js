import { useState, useEffect, useCallback } from "react";
import orderService from "@/services/orderService";
import { authStorage } from "@/utils/authStorage";

const useMyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = useCallback(async () => {
    if (!authStorage.isAuthenticated()) {
      setOrders([]);
      setCount(0);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await orderService.getMyOrders();

      if (data?.success) {
        setOrders(data.orders || []);
        setCount(data.count ?? data.orders?.length ?? 0);
      } else {
        setError(data?.message || "Failed to load orders.");
      }
    } catch (err) {
      console.error("Failed to fetch my orders:", err);
      setError(
        err.response?.data?.message ||
          "Unable to load your orders. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return {
    orders,
    count,
    loading,
    error,
    refetch: fetchOrders,
  };
};

export default useMyOrders;
