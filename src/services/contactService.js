import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/send`, formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again later.");
    }
  }
};
