import api from "./api.js";

// Create a new order
export const createOrder = async () => {
  const response = await api.post("/api/order", { withCredentials: true });
  return response.data;
};

// Get all orders for the logged-in user role admin
export const getAllOrders = async () => {
  const response = await api.get("/api/order", { withCredentials: true });
  return response.data;
};

// Get orders_Id  for receipt
export const getIdOrders = async (orderId) => {
  const response = await api.get(`/api/order/${orderId}`, {
    withCredentials: true,
  });
  return response.data;
};

// Update order status
export const updateOrderStatus = async (orderId, status) => {
  const response = await api.put(
    `/api/order/${orderId}`,
    { status },
    { withCredentials: true }
  );
  return response.data;
};
