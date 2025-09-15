import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { createOrder } from "../../services/orderService";
import { useMessage } from "../../context/MessageContext";
import { useCheckout } from "../../context/CheckoutContext";
import { useAuth } from "../../context/AuthContext";

export const OrderTotal = ({ mode, data }) => {
  const modes = { orderSummary: false, delivery: true };

  const { logout } = useAuth();
  const { carts } = useMessage();
  const { nextStep, prevStep, setOrderId } = useCheckout();
  const navigate = useNavigate();

  const isCartEmpty = !Array.isArray(carts) || carts.length === 0;

  const handleProceedPayment = async () => {
    if (carts.length === 0) {
      return navigate("/menuset");
    }
    try {
      const respon = await createOrder();
      setOrderId(respon.order._id);
      nextStep();
    } catch (error) {
      if (error.response.data.message === "Authentication token missing!") {
        return logout();
      }
      if (error.response.data.code === "TOKEN_EXPIRED") {
        return logout();
      }
      console.error(error);
    }
  };

  return (
    <>
      <div className="max-w-124 w-full lg:mx-0 mx-auto bg-white flex flex-col mb-3 p-6 rounded-xl shadow-md">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary-700 py-2">
          {data?.totalItems || 0} Items
        </h2>
        <div className="gap-y-3  text-primary-800 text-2xl">
          <div className="flex justify-between ">
            <p className="text-lg lg:text-2xl">Subtotal</p>
            <p className="text-lg lg:text-2xl">
              {data?.totalAmount?.toLocaleString("th-TH") || 0}
              THB{" "}
            </p>
          </div>
          {modes[mode] && (
            <div className="flex justify-between">
              <p className="text-lg lg:text-2xl">Delivery Fee</p>
              <p className="text-lg lg:text-2xl">
                {data?.shippingFee?.toLocaleString("th-TH") || 0}
                THB{" "}
              </p>
            </div>
          )}
          <div className="flex justify-between  border-gray-300 border-b-2 text-sm p-2">
            <p>*All prices are inclusive of 7% VAT.</p>
          </div>
        </div>
        <div className="flex justify-between font-bold text-3xl text-primary-700 py-2 mb-16">
          <p className="text-2xl md:text-3xl lg:text-4xl">Total</p>
          <p className="text-2xl md:text-3xl lg:text-4xl">
            {data?.grandTotal?.toLocaleString("th-TH") || 0}{" "}
            THB{" "}
          </p>
        </div>
        {modes[mode] ? (
          <Button
            onClick={handleProceedPayment}
            size={"md"}
            className="bg-primary-700 text-md md:text-xl lg:text-2xl font-bold"
          >
            Proceed Payment
          </Button>
        ) : (
          <Button
            onClick={() => nextStep()}
            size="md"
            disabled={isCartEmpty}
            className="bg-primary-700 text-md md:text-xl lg:text-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout
          </Button>
        )}
        <Button
          onClick={() => prevStep()}
          size={"md"}
          variant={"outline"}
          className="mt-7 bg-white shadow-md border-primary-700 border-3 text-primary-700 text-md md:text-xl lg:text-2xl font-bold hover:bg-gray-100/80"
        >
          Back
        </Button>
      </div>
    </>
  );
};
