import { useState } from "react";
import addressService from "@/services/addressService";

const useUpdateAddress = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateAddress = async (addressId, addressData) => {
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

      const data = await addressService.updateAddress(addressId, payload);

      if (data?.success) {
        return {
          success: true,
          message: data.message || "Address updated successfully",
          address: data.address,
        };
      } else {
        const msg = data?.message || "Failed to update address.";
        setError(msg);
        return {
          success: false,
          error: msg,
        };
      }
    } catch (err) {
      console.error("Failed to update address:", err);
      const msg =
        err.response?.data?.message ||
        "Unable to update address. Please check your information and try again.";
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
    updateAddress,
    loading,
    error,
    setError,
  };
};

export default useUpdateAddress;
