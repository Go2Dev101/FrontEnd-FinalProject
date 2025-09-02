import api from "./api.js";

// Edit user profile
export const editUserProfile = async (userId, profileData) => {
  const response = await api.post(`/api/user/${userId}`, profileData);
  return response.data;
};

// Get user profile
export const getUserProfile = async () => {
  const response = await api.get("/api/user/profile");
  return response.data;
};