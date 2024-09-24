import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

export const getAllDishes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dish`);
    return response.data.dishes;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch dishes");
  }
};

// export const getDishById = async (id) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/dishes/${id}`);
//     return response.data.dish;
//   } catch (error) {
//     throw new Error(
//       error.response?.data?.message || "Failed to fetch the dish"
//     );
//   }
// };

// export const createDish = async (dishData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/dishes`, dishData);
//     return response.data.dish;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Failed to create dish");
//   }
// };

// export const updateDish = async (id, updatedData) => {
//   try {
//     const response = await axios.put(
//       `${API_BASE_URL}/dishes/${id}`,
//       updatedData
//     );
//     return response.data.dish;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Failed to update dish");
//   }
// };

// export const deleteDish = async (id) => {
//   try {
//     const response = await axios.delete(`${API_BASE_URL}/dishes/${id}`);
//     return response.data.message;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Failed to delete dish");
//   }
// };
