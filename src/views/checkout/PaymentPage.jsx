import { Boxer } from "../../components/Boxer";
import { CheckOutHeader } from "../../components/cart/CheckOutHeader";
import { ProgressBar } from "../../components/cart/ProgressBar";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import { useCheckout } from "../../context/CheckoutContext";

export const PaymentPage = () => {
  const { nextStep } = useCheckout();
  const [countDown, setcountDown] = useState({ min: 1, sec: 0 });

  useEffect(() => {
    const handleCountTime = () => {
      setcountDown((prev) => {
        if (prev.sec === 0) {
          if (prev.min === 0) {
            clearInterval(intervalId); // stop timer
            return { min: 0, sec: 0 };
          }
          return { min: prev.min - 1, sec: 59 };
        } else {
          return { ...prev, sec: prev.sec - 1 };
        }
      });
    };

    const intervalId = setInterval(handleCountTime, 1000);

    // cleanup when component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (countDown.min === 0 && countDown.sec === 0) {
      nextStep();
    }
  }, [countDown.min, countDown.sec, nextStep]);

  return (
    <Boxer>
      <section className="flex justify-between">
        <CheckOutHeader
          header={"Payment Confirmation"}
          title={"Please fill out your Please upload payslip"}
        />
        <ProgressBar path={"delivery"} />
      </section>
      <div className="flex justify-center">
        <Card className="max-w-100 w-full p-8">
          <p className="text-3xl font-bold text-primary-700 text-center">
            Payment Now
          </p>
          <hr />
          <img
            src="./img/QRCode.png"
            alt="QR code"
            className="h-70 object-contain "
          />
          <p
            className={`text-center text-lg ${
              countDown.min < 2 && "text-red-500"
            }`}
          >
            {countDown.min.toString().padStart(2, "0")}:
            {countDown.sec.toString().padStart(2, "0")}
          </p>
          <Button
            onClick={() => nextStep()}
            size={"md"}
            className="max-w-45 w-full mx-auto"
          >
            Confirm
          </Button>
        </Card>
      </div>
    </Boxer>
  );
};
