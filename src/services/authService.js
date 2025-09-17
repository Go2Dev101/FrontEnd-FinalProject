import api from "./api.js";

// Login user
export const loginUser = async (userData) => {
  const response = await api.post("/api/user/login", userData);

  // Store token in localStorage as fallback for mobile browsers
  if (response.data.token) {
    localStorage.setItem("authToken", response.data.token);
  }
  return response.data;
};

// Logout user
export const logoutUser = async () => {
  const response = await api.post("/api/user/logout");

  // Clear localStorage token on logout
  localStorage.removeItem("authToken");
  return response.data;
};

// Signup user
export const signupUser = async (userData) => {
  const response = await api.post("/api/user/signup", userData);
  return response.data;
};
