import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { createOrder } from "../../services/orderService";

export const OrderTotal = ({ mode, data }) => {
  const modes = { orderSummary: false, delivery: true };
  const navigate = useNavigate();
  const handleProceedPayment = async () => {
    try {
      await createOrder();
      //เขียนดักไม่ให้กดเล่นเยอะเกิน
      //ลบตะกร้า Set cart= 0 in []
      navigate("/payment");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="max-w-124 w-full bg-white flex flex-col mb-3 p-6 rounded-xl shadow-md">
        <h2 className="font-bold text-4xl text-primary-700 py-2">
          {data?.totalItems || 0} ITEMS
        </h2>
        <div className="gap-y-3  text-primary-800 text-2xl">
          <div className="flex justify-between ">
            <p className="text-2xl">Subtotal</p>
            <p className="text-2xl">{data?.totalAmount || 0} THB </p>
          </div>
          {modes[mode] && (
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>{data?.shippingFee || 0} THB </p>
            </div>
          )}
          <div className="flex justify-between  border-black border-b-2 text-sm p-2">
            <p>*All prices are inclusive of 7% VAT.</p>
          </div>
        </div>
        <div className="flex justify-between font-bold text-3xl text-primary-700 py-2 mb-16">
          <p>Total</p>
          <p>{data?.grandTotal || 0} THB </p>
        </div>
        {modes[mode] ? (
          <Button
            onClick={handleProceedPayment}
            size={"md"}
            className="bg-primary-700 text-3xl font-bold"
          >
            Proceed Payment
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/delivery")}
            size={"md"}
            className="bg-primary-700 text-3xl font-bold"
          >
            Checkout
          </Button>
        )}
        <Button
          onClick={() =>
            navigate(`${modes[mode] ? "/ordersummary" : "/menuSet"}`)
          }
          size={"md"}
          variant={"outline"}
          className="mt-7 bg-white shadow-md border-primary-700 border-3 text-primary-700 text-3xl font-bold hover:bg-gray-100/80"
        >
          Back
        </Button>
      </div>
    </>
  );
};
