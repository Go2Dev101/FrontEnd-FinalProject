import { useEffect, useState } from "react";
import { MessageContext } from "./MessageContext";

export const MessageProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Read data from local storage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setOrders(parsed);
      }
    } catch (err) {
      console.error("Parse cart error:", err);
    }
  }, []);

  // Set data at local storage when orders have change
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(orders));
    } catch (err) {
      console.error("Write cart error:", err);
    }
  }, [orders]);

  // เพิ่ม/อัปเดตสินค้าในตะกร้า
  // const handleCart = (menuId, quantity = 1, deliveryDate) => {
  //   const menu = orders.find((menu) => menu.menuId === menuId);
  //   console.log(menu === true, menu === false, typeof menu);
  //   if (typeof menu === "object") {
  //     menu.quantity += quantity || 1;
  //     setOrders([...orders]);
  //   } else {
  //     setOrders([
  //       ...orders,
  //       { menuId: menuId, quantity: quantity || 1, deliveryDate: deliveryDate },
  //     ]);
  //   }
  // };
  const handleCart = (menuId, quantity = 1, deliveryDate) => {
    setOrders((previousOrders) => {
      const index = previousOrders.findIndex(
        (item) => item.menuId === menuId && item.deliveryDate === deliveryDate
      );
      if (index !== -1) {
        const next = [...previousOrders];
        next[index] = {
          ...next[index],
          quantity: next[index].quantity + quantity,
        };
        return next;
      }
      return [...previousOrders, { menuId, deliveryDate, quantity }];
    });
  };

  // ใช้เวลาสั่งซื้อแล้วพาไปหน้า summary
  const handleOrders = (navigate, menuId, quantity, deliveryDate) => {
    handleCart(menuId, quantity, deliveryDate);
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
    <MessageContext value={{ orders, handleOrders, handleCart, handleDelete }}>
      {children}
    </MessageContext>
  );
};
