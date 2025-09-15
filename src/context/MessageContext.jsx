import { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { getCart, updateCart } from "../services/cartService";
import { useAuth } from "./AuthContext";
import { addDays, formatDate } from "../utils/handle";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [carts, setCarts] = useState([]);

  // Read data from cart database
  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;
      try {
        const respon = await getCart();
        setCarts(respon.cart);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCart();
  }, [user]);

  // Update cart to database
  const handleUpdateCart = async (newCarts) => {
    if (!user) return;
    try {
      await updateCart(newCarts);
    } catch (err) {
      console.error(err);
    }
  };

  // เพิ่ม/อัปเดตสินค้าในตะกร้า
  const handleCart = async (data, quantity = 1, deliveryDate) => {
    let updateCarts;
    if (!user) {
      return navigate("/login");
    }

    const index = carts.findIndex((menu) => menu.menuId._id === data._id);

    if (index !== -1) {
      updateCarts = [...carts];
      updateCarts[index] = {
        ...updateCarts[index],
        quantity: updateCarts[index].quantity + (quantity || 1),
        deliveryDate,
      };
    } else {
      updateCarts = [
        ...carts,
        {
          menuId: {
            _id: data._id,
            title: data.title,
            price: data.price,
            imageUrl: data.imageUrl,
          },
          quantity: quantity || 1,
          deliveryDate:
            deliveryDate?.trim() === "" || deliveryDate === undefined
              ? `${formatDate(new Date())} - ${addDays(
                  new Date(),
                  data.durationDays
                )}`
              : deliveryDate,
        },
      ];
    }
    setCarts(updateCarts);
    try {
      await handleUpdateCart(updateCarts);
    } catch (err) {
      console.error(err);
    }
  };

  // ใช้เวลาสั่งซื้อแล้วพาไปหน้า summary
  const handleOrders = async (navigate, data, quantity, deliveryDate) => {
    let updateCarts;
    const index = carts.findIndex((menu) => menu.menuId._id === data._id);
    if (index === -1) {
      updateCarts = [
        ...carts,
        {
          menuId: {
            _id: data._id,
            title: data.title,
            price: data.price,
            imageUrl: data.imageUrl,
          },
          quantity: quantity || 1,
          deliveryDate:
            deliveryDate?.trim() === "" || deliveryDate === undefined
              ? `${formatDate(new Date())} - ${addDays(
                  new Date(),
                  data.durationDays
                )}`
              : deliveryDate,
        },
      ];
    }
    setCarts(updateCarts);
    try {
      await handleUpdateCart(updateCarts);
    } catch (err) {
      console.error(err);
    }
    navigate("/ordersummary");
  };

  // Delete from cart
  const handleDelete = async (id) => {
    if (!window.confirm("Remove this item?")) return;
    const updateCarts = carts.filter((item) => item.menuId._id !== id);
    setCarts(updateCarts);
    try {
      await handleUpdateCart(updateCarts);
    } catch (err) {
      console.error(err);
    }
  };
  // Update cart
  const handleChange = async (id, quantity) => {
    const editCarts = carts.find((item) => item.menuId._id === id);
    if (editCarts) {
      const updateCarts = carts.map((item) =>
        item.menuId._id === id
          ? { ...item, ...(quantity !== undefined ? { quantity } : {}) }
          : item
      );
      setCarts(updateCarts);
      try {
        await handleUpdateCart(updateCarts);
      } catch (err) {
        console.error(err);
      }
    }
  };

  // Clear cart
  const handleClearCart = async () => {
    if (!window.confirm("Remove all item in cart?")) return;
    const updateCarts = [];
    setCarts(updateCarts);
    try {
      await handleUpdateCart(updateCarts);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MessageContext.Provider
      value={{
        carts,
        setCarts,
        handleOrders,
        handleCart,
        handleDelete,
        handleChange,
        handleClearCart,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
