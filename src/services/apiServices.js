import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const bookTable = async (formData) => {
  try {
    const response = await apiClient.post("/bookings", formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.log(error, "here is error");

      throw new Error(error.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};
