import { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { getCart, updateCart } from "../services/cartService";
import { useAuth } from "./AuthContext";

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
  }, []);

  // Set data cart database when orders have change
  useEffect(() => {
    if (!user) return;
    const handleUpdateCart = async () => {
      try {
        await updateCart(carts);
      } catch (err) {
        console.error(err);
      }
    };
    handleUpdateCart();
  }, [carts]);

  // เพิ่ม/อัปเดตสินค้าในตะกร้า
  const handleCart = (data, quantity = 1, deliveryDate) => {
    if (!user) {
      return navigate("/login");
    }

    const index = carts.findIndex((menu) => menu.menuId._id === data._id);

    if (index !== -1) {
      const updatedOrders = [...carts];
      updatedOrders[index] = {
        ...updatedOrders[index],
        quantity: updatedOrders[index].quantity + (quantity || 1),
        deliveryDate,
      };
      setCarts(updatedOrders);
    } else {
      setCarts([
        ...carts,
        {
          menuId: {
            _id: data._id,
            title: data.title,
            price: data.price,
            imageUrl: data.imageUrl,
          },
          quantity: quantity || 1,
          deliveryDate: deliveryDate,
        },
      ]);
    }
  };

  // ใช้เวลาสั่งซื้อแล้วพาไปหน้า summary
  const handleOrders = (navigate, data, quantity, deliveryDate) => {
    const index = carts.findIndex((menu) => menu.menuId._id === data._id);

    if (index === -1) {
      setCarts([
        ...carts,
        {
          menuId: {
            _id: data._id,
            title: data.title,
            price: data.price,
            imageUrl: data.imageUrl,
          },
          quantity: quantity || 1,
          deliveryDate: deliveryDate,
        },
      ]);
    }
    navigate("/ordersummary");
  };

  // OrderList;
  const handleDelete = (id) => {
    if (!window.confirm("Remove this item?")) return;
    const updateCarts = carts.filter((item) => item.menuId._id !== id);
    setCarts(updateCarts);
  };

  const handleChange = (id, quantity) => {
    const editCarts = carts.find((item) => item.menuId._id === id);
    if (editCarts) {
      const updateCarts = carts.map((item) =>
        item.menuId._id === id
          ? { ...item, ...(quantity !== undefined ? { quantity } : {}) }
          : item
      );
      setCarts(updateCarts);
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
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
