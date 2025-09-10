import { Navigate } from "react-router-dom";
import { useCheckout } from "../../context/CheckoutContext";

export const ProtectedCheckoutRoute = ({ children, requiredStep }) => {
  const { step } = useCheckout();

  // ถ้า step ปัจจุบัน < requiredStep ให้ redirect
  const order = ["ordersummary", "delivery", "payment", "ordersuccess"];
  const currentIndex = order.indexOf(step);
  const requiredIndex = order.indexOf(requiredStep);

  if (currentIndex < requiredIndex) {
    return <Navigate to={`/${step}`} replace />;
  }

  return children;
};
