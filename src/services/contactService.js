import axiosInstance from "../api/axiosInstance";

const contactService = {
  submitContactForm: async (formData) => {
    const response = await axiosInstance.post("/contact", formData);
    return response.data;
  },
};

export default contactService;
