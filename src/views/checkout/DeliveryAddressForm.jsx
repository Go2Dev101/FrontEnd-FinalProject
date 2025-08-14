import { Link } from "react-router-dom";
import { Boxer } from "../../components/Boxer";
import { SquarePen } from "lucide-react";
import { ProgressBar } from "../../components/ProgressBar";
import { CheckOutHeader } from "../../components/CheckOutHeader";
import { Button } from "@/components/ui/button";

const DeliveryAddressForm = () => {
  return (
    <>
      <Boxer>
        <section className="flex justify-between">
          <CheckOutHeader
            header={"Delivery Address"}
            title={"Please fill out your address"}
          />
          <ProgressBar path={"ordersummary"} />
        </section>

        <section className="flex flex-1/2 justify-between gap-10  ">
          <div className="flex-1/2 max-w-164 ">
            <div className="flex flex-col">
              <div className="space-x-4 flex justify-between mb-6">
                <Button size={"sm"} className="max-w-75 w-full">
                  Delivery Address
                </Button>
                <Button
                  size={"sm"}
                  className="max-w-75 w-full bg-white text-primary-700 hover:bg-secondary-200/50"
                >
                  Pickup Point
                </Button>
              </div>
              <div className=" bg-white flex flex-col mb-3 p-8 rounded-xl">
                <div className="flex justify-between gap-6 text-2xl font-bold">
                  <p>Name</p>
                  <p>Tel :091-234-5678 </p>
                </div>
                <p className="text-xl">
                  51/233 M.5 T.Bangyai A.Bangyai Nonthaburi
                </p>

                <Link to="/edit" className=" hover:text-amber-400 ">
                  <SquarePen className="ml-auto" />
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-124 flex-1/2   bg-white flex flex-col mb-3 p-8 rounded-xl">
            <h2 className="font-bold text-4xl text-primary-700">Order Total</h2>
            <div className="gap-y-3  text-primary-800 text-2xl">
              <div className="flex justify-between">
                <p>14-days meal set</p>
                <p>4200 THB</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Free</p>
                <p>200 THB</p>
              </div>
              <div className="flex justify-between  border-black border-b-2">
                <p>Tax</p>
                <p className="mb-10 ">100 THB</p>
              </div>
            </div>
            <div className="flex justify-between font-bold text-3xl text-primary-700 py-2 mb-16">
              <p>Total</p>
              <p>4300 THB</p>
            </div>

            <button className="bg-primary-700 text-white rounded-3xl cursor-pointer px-4 shadow-gray-500 font-bold">
              Proceed Payment
            </button>
            <button className="bg-white text-primary-700 rounded-3xl cursor-pointer px-4 mt-7 shadow-gray-500 font-bold">
              Back
            </button>
            <div className="border-dotted text-4xl text-center">ADS area</div>
          </div>
        </section>
      </Boxer>
    </>
  );
};

export default DeliveryAddressForm;
