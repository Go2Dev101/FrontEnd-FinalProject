import api from "./api.js";

// Create a new order
export const createOrder = async () => {
  const response = await api.post("/api/order");
  return response.data;
}

// Get all orders for the logged-in user role admin
export const getAllOrders = async () => {
  const response = await api.get("/api/order");
  return response.data;
}