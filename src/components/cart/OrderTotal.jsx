import { Button } from "../ui/button";

export const OrderTotal = ({ data }) => {
  return (
    <>
      <div className="max-w-124 w-full bg-white flex flex-col mb-3 p-6 rounded-xl shadow-md">
        <h2 className="font-bold text-4xl text-primary-700">Order Total</h2>
        <div className="gap-y-3  text-primary-800 text-2xl">
          <div className="flex justify-between ">
            <p className="text-2xl">{data.title}</p>
            <p className="text-2xl">{data.priceTHB} THB</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>200 THB</p>
          </div>
          <div className="flex justify-between  border-black border-b-2 text-sm">
            <p>*All prices are inclusive of 7% VAT.</p>
          </div>
        </div>
        <div className="flex justify-between font-bold text-3xl text-primary-700 py-2 mb-16">
          <p>Total</p>
          <p>4300 THB</p>
        </div>
        <Button size={"md"} className="bg-primary-700 text-3xl font-bold">
          Proceed Payment
        </Button>
        <Button
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
