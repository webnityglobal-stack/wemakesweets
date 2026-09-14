import axiosInstance from "../api/axiosInstance";

const addressService = {
  // Get all addresses of current logged-in user
  getAddresses: async () => {
    const response = await axiosInstance.get("/addresses");
    return response.data;
  },

  // Add a new delivery address
  addAddress: async (addressData) => {
    const response = await axiosInstance.post("/addresses", addressData);
    return response.data;
  },

  // Update an existing delivery address
  updateAddress: async (addressId, addressData) => {
    const response = await axiosInstance.put(
      `/addresses/${addressId}`,
      addressData
    );
    return response.data;
  },

  // Delete an existing delivery address
  deleteAddress: async (addressId) => {
    const response = await axiosInstance.delete(`/addresses/${addressId}`);
    return response.data;
  },
};

export default addressService;
