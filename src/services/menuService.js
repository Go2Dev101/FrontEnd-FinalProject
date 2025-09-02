import api from "./api.js";

// Get all menus
export const getAllMenus = async () => {
  const response = await api.get("/api/menu");
  return response.data;
};
