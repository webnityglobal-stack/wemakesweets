import { useState } from "react";
import addressService from "@/services/addressService";

const useDeleteAddress = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteAddress = async (addressId) => {
    try {
      setLoading(true);
      setError("");

      const data = await addressService.deleteAddress(addressId);

      if (data?.success) {
        return {
          success: true,
          message: data.message || "Address deleted successfully",
        };
      } else {
        const msg = data?.message || "Failed to delete address.";
        setError(msg);
        return {
          success: false,
          error: msg,
        };
      }
    } catch (err) {
      console.error("Failed to delete address:", err);
      const msg =
        err.response?.data?.message ||
        "Unable to delete address. Please try again.";
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
    deleteAddress,
    loading,
    error,
    setError,
  };
};

export default useDeleteAddress;
