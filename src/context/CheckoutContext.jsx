import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutContext = createContext();

const steps = ["ordersummary", "delivery", "payment", "ordersuccess"];

export const CheckoutProvider = ({ children }) => {
  const [step, setStep] = useState("ordersummary");
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Read step from localStorage
  useEffect(() => {
    const save = localStorage.getItem("checkout");
    if (save) {
      const data = JSON.parse(save);
      setStep(data.step || "ordersummary");
      setOrderId(data.orderId || "");
    }
  }, []);

  // Save step to localStorage
  useEffect(() => {
    localStorage.setItem("checkout", JSON.stringify({ step, orderId }));
  }, [step, orderId]);

  useEffect(() => {
    const path = location.pathname.replace("/", ""); // '/delivery' => 'delivery'
    if (path === "ordersummary") {
      setStep("ordersummary");
      setOrderId("")
    }
  }, [location]);

  const nextStep = () => {
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
      navigate(`/${steps[currentIndex + 1]}`);
    }
  };

  const prevStep = () => {
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
      navigate(`/${steps[currentIndex - 1]}`);
    } else {
      navigate("/menuset");
    }
  };
  return (
    <CheckoutContext.Provider
      value={{
        step,
        setStep,
        orderId,
        setOrderId,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
