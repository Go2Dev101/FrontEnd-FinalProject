import React from "react";
import { CheckOutHeader } from "../../components/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/ProgressBar";

import { OrderList } from "../../components/OrderList";

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

        <section id="main">
          <div id="Order Management">
            <OrderList />
          </div>
          <div id="Order Total"></div>
        </section>
      </Boxer>
    </>
  );
};
