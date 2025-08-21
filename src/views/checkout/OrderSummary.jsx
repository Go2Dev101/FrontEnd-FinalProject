import React from "react";
import { CheckOutHeader } from "../../components/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/ProgressBar";
import { OrderList } from "../../components/OrderList";
import { OrderTotal } from "../../components/OrderTotal";

export const OrderSummary = () => {
  return (
    <>
      <Boxer>
        <section id="Header" className="flex justify-between">
          <CheckOutHeader
            header={"Order Summary"}
            title={"Please review your order"}
          />
          <ProgressBar path={"delivery"} />
        </section>

        <section id="main" className="flex gap-4">
          <div id="OrderManagement" className="w-full">
            <OrderList />
          </div>
          <div id="OrderTotal">
            <OrderTotal />
          </div>
        </section>
      </Boxer>
    </>
  );
};
