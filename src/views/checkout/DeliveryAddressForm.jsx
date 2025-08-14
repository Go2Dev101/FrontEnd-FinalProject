import { Link } from "react-router-dom";
import { Boxer } from "../../components/Boxer";
import { SquarePen } from "lucide-react";
import { ProgressBar } from "../../components/ProgressBar";
import { CheckOutHeader } from "../../components/CheckOutHeader";
import { Button } from "@/components/ui/button";
import { OrderTotal } from "../../components/OrderTotal";
import { useState } from "react";

export const DeliveryAddressForm = () => {
  const [edit,setEdit] = useState(false);



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
                  className="max-w-75 w-full bg-white text-primary-700 hover:bg-gray-100/80"
                >
                  Pickup Point
                </Button>
              </div>
              <div className=" bg-white flex flex-col mb-3 p-8 rounded-xl">
                <div className="flex justify-between gap-6 text-2xl font-bold text-primary-700">
                  <p>Name</p>
                  <p>Tel :091-234-5678 </p>
                </div>
                <p className="text-xl text-primary-700">
                  51/233 M.5 T.Bangyai A.Bangyai Nonthaburi
                </p>

                
                  
                
                  <SquarePen 
                  onClick ={() => setEdit(true)}
                  className="ml-auto hover:text-primary-900 text-primary-700"/>
                
              </div>
            </div>
          </div>
          <OrderTotal />
        </section>
      </Boxer>
      {edit && <div className="h-screen w-full fixed top-0 left-0 bg-black/80 z-60 overscroll-none flex justify-center items-center">
      <OrderTotal />
      </div>}
    </>
  );
};


