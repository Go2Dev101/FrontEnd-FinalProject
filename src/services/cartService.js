import api from "./api.js";

// Create a new cart
export const createCart = async (cartData) => {
  const response = await api.post("/api/cart", { items: cartData });
  return response.data;
};

// Get cart
export const getCart = async () => {
  const response = await api.get("/api/cart");
  return response.data;
};

// Update cart
export const updateCart = async (cartData) => {
  const response = await api.put("/api/cart", { items: cartData });
  return response.data;
};

// Get cart summary
export const getCartSummary = async () => {
  const response = await api.get("/api/cart/summary");
  return response.data;
};

// Get cart shipping fee
export const getCartShippingFee = async () => {
  const response = await api.get("/api/cart/shipping");
  return response.data;
};
