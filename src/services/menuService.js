import api from "./api.js";

// Get all menus
export const getAllMenus = async () => {
  const response = await api.get("/api/menu", { withCredentials: true });
  return response.data;
};

// Get menu by slug
export const getMenuBySlug = async (slug) => {
  const response = await api.get(`/api/menu/${slug}`, {
    withCredentials: true,
  });
  return response.data;
};
