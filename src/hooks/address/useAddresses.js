import { useState, useEffect, useCallback } from "react";
import addressService from "@/services/addressService";
import { authStorage } from "@/utils/authStorage";

const useAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAddresses = useCallback(async () => {
    if (!authStorage.isAuthenticated()) {
      setAddresses([]);
      setCount(0);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await addressService.getAddresses();

      if (data?.success) {
        setAddresses(data.addresses || []);
        setCount(data.count ?? data.addresses?.length ?? 0);
      } else {
        setError(data?.message || "Failed to load addresses.");
      }
    } catch (err) {
      console.error("Failed to fetch addresses:", err);
      setError(
        err.response?.data?.message ||
          "Unable to load saved addresses. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  return {
    addresses,
    count,
    loading,
    error,
    refetch: fetchAddresses,
  };
};

export default useAddresses;
