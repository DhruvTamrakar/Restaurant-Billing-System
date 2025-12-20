import axios from "axios";

const API_URL = "https://localhost:7070/api"; 

// Get all categorie
export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/Category`);
    return res.data;
  } catch (err) {
    console.error("Hello    "+err);
    return [];
  }
};

// Get food items by category
export const getFoodByCategory = async (categoryName) => {
  try {
    const res = await axios.get(`${API_URL}/Food/category/${categoryName}`);
    return res.data;
  } catch (err) {
    console.error("hello"+err);
    return [];
  }
};
