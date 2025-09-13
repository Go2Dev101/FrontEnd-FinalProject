import api from "./api.js";

// Login user
export const loginUser = async (userData) => {
  const response = await api.post("/api/user/login", userData, {
    withCredentials: true,
  });
  return response.data;
};

// Logout user
export const logoutUser = async () => {
  const response = await api.post("/api/user/logout", {
    withCredentials: true,
  });
  return response.data;
};

// Signup user
export const signupUser = async (userData) => {
  const response = await api.post("/api/user/signup", userData, {
    withCredentials: true,
  });
  return response.data;
};
