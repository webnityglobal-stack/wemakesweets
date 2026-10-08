import axiosInstance from "../api/axiosInstance";

const contactService = {
  submitContactForm: async (formData) => {
    const response = await axiosInstance.post("/contact", formData);
    return response.data;
  },

  submitFAQQuestion: async (questionData) => {
    const response = await axiosInstance.post("/contact/faq-question", questionData);
    return response.data;
  },
};

export default contactService;
