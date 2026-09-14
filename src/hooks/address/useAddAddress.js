import { useState } from "react";
import addressService from "@/services/addressService";

const useAddAddress = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addAddress = async (addressData) => {
    try {
      setLoading(true);
      setError("");

      const payload = {
        name: addressData.name?.trim(),
        phone: addressData.phone?.trim(),
        email: addressData.email?.trim() || "",
        address: addressData.address?.trim(),
        address2: addressData.address2?.trim() || "",
        city: addressData.city?.trim(),
        state: addressData.state?.trim(),
        pincode: addressData.pincode?.trim(),
        country: addressData.country?.trim() || "India",
        isDefault: Boolean(addressData.isDefault),
      };

      const data = await addressService.addAddress(payload);

      if (data?.success) {
        return {
          success: true,
          message: data.message || "Address added successfully",
          address: data.address,
        };
      } else {
        const msg = data?.message || "Failed to add address.";
        setError(msg);
        return {
          success: false,
          error: msg,
        };
      }
    } catch (err) {
      console.error("Failed to add address:", err);
      const msg =
        err.response?.data?.message ||
        "Unable to add address. Please check your information and try again.";
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
    addAddress,
    loading,
    error,
    setError,
  };
};

export default useAddAddress;
