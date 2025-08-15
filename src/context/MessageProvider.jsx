import { useState } from "react";
import { MessageContext } from "./MessageContext";

export const MessageProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const handleCart = (menuId, quantity, deliveryDate) => {
    const menu = orders.find((menu) => menu.menuId === menuId);
    if (menu) {
      menu.quantity += quantity || 1;
    } else {
      setOrders([
        ...orders,
        { menuId: menuId, quantity: quantity || 1, deliveryDate: deliveryDate },
      ]);
    }
  };

  const handleOrders = (navigate,menuId, quantity, deliveryDate) => {
    handleCart(menuId, quantity , deliveryDate)
    navigate("/ordersummary");
  };
  return (
    <MessageContext value={{ orders, handleOrders, handleCart }}>
      {children}
    </MessageContext>
  );
};
