import { useEffect, useState } from "react";
import { MessageContext } from "./MessageContext";

export const MessageProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Read data from local storage
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setOrders(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  // Set data at local storage when orders have change
  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("cart", JSON.stringify(orders));
    }
  }, [orders]);

  const handleCart = (menuId, quantity, deliveryDate) => {
    const menu = orders.find((menu) => menu.menuId === menuId);
    console.log(menu === true, menu === false, typeof menu);
    if (typeof menu === "object") {
      menu.quantity += quantity || 1;
      setOrders([...orders]);
    } else {
      setOrders([
        ...orders,
        { menuId: menuId, quantity: quantity || 1, deliveryDate: deliveryDate },
      ]);
    }
  };

  const handleOrders = (navigate, menuId, quantity, deliveryDate) => {
    handleCart(menuId, quantity, deliveryDate);
    navigate("/ordersummary");
  };
  return (
    <MessageContext value={{ orders, handleOrders, handleCart }}>
      {children}
    </MessageContext>
  );
};
