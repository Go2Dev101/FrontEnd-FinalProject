// import React, { useContext } from "react";
import { CheckOutHeader } from "../../components/cart/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/cart/ProgressBar";
import { OrderList } from "../../components/cart/OrderList";
// import { MessageContext } from "../../context/MessageContext";
// import { menuSet } from "../../data/menuSet";
import { OrderTotal } from "../../components/cart/OrderTotal";

export const OrderSummary = () => {
  return (
    <>
      <Boxer>
        <section id="header" className="flex justify-between">
          <CheckOutHeader
            header={"Order Summary"}
            title={"Please review your order"}
          />
          <ProgressBar path={"delivery"} />
        </section>

        <section id="cart" className="flex justify-center gap-6">
          <div className="w-1/2">
            <OrderList />
          </div>
          <div id="orderTotal" className="w-1/3">
            {/* {orders && orders.length > 0 ? <OrderTotal /> : null} */}
            <OrderTotal />
          </div>
        </section>
      </Boxer>
    </>
  );
};
