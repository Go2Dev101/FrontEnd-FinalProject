import { useState } from "react";
import { MessageContext } from "./MessageContext";
import { useNavigate } from "react-router-dom";

export const MessageProvider = ({ children }) => {
  const [orders, setOrders] = useState([{menuId:"",quantity:"",deliveryDate:""}]);
  const navigate = useNavigate();

  const handleCart = (e) => {
    setOrders({...orders,e});
  };

  const handleOrders = (e) => {
    setOrders({...orders,e});
    navigate(`/`);
  };
  return (
    <MessageContext
      value={{ orders, handleOrders, handleCart }}
    >
      {children}
    </MessageContext>
  );
};