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
  const [orders, setOrders] = useState([]);

  // Read data from cart database
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const respon = await getCart();
        setOrders(respon.cart);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCart();
  }, []);

  // Set data cart database when orders have change
  useEffect(() => {
    if (!orders || orders.length < 1) return;
    const handleUpdateCart = async () => {
      try {
        await updateCart(orders);
      } catch (err) {
        console.error(err);
      }
    };
    handleUpdateCart();
  }, [orders]);

  // เพิ่ม/อัปเดตสินค้าในตะกร้า
  const handleCart = (menuId, quantity = 1, deliveryDate) => {
    if (!user) {
      return navigate("/login");
    }

    const index = orders.findIndex((menu) => menu.menuId === menuId);

    if (index !== -1) {
      const updatedOrders = [...orders];
      updatedOrders[index] = {
        ...updatedOrders[index],
        quantity: updatedOrders[index].quantity + (quantity || 1),
        deliveryDate,
      };
      setOrders(updatedOrders);
    } else {
      setOrders([
        ...orders,
        {
          menuId: menuId,
          quantity: quantity || 1,
          deliveryDate: deliveryDate,
        },
      ]);
    }
  };

  // ใช้เวลาสั่งซื้อแล้วพาไปหน้า summary
  const handleOrders = (navigate, menuId, quantity, deliveryDate) => {
    const index = orders.findIndex((menu) => menu.menuId === menuId);

    if (index === -1) {
      setOrders([
        ...orders,
        {
          menuId: menuId,
          quantity: quantity || 1,
          deliveryDate: deliveryDate,
        },
      ]);
    }
    navigate("/ordersummary");
  };

  // ลบออกจากตะกร้า
  const handleDelete = (menuId, deliveryDate) => {
    setOrders((previousOrders) =>
      previousOrders.filter(
        (item) =>
          !(item.menuId === menuId && item.deliveryDate === deliveryDate)
      )
    );
  };

  return (
    <MessageContext.Provider
      value={{ orders, setOrders, handleOrders, handleCart, handleDelete }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
