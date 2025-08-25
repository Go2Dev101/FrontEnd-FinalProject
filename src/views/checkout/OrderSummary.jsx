import React, { useContext } from "react";
import { CheckOutHeader } from "../../components/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/ProgressBar";
import { OrderList } from "../../components/OrderList";
import { MessageContext } from "../../context/MessageContext";
import { menuSet } from "../../data/menuSet";
import { OrderTotal } from "../../components/OrderTotal";

export const OrderSummary = () => {
  const { orders } = useContext(MessageContext);
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

        <section id="main" className="display flex justify-center gap-6">
          <div id="orderManagement" className="w-full max-w-1/2">
            {orders.map((order) => {
              const menu = menuSet.filter((menu) => menu.id === order.menuId);
              console.log(menu);
              return (
                // <p></p>
                <OrderList data={menu[0]} />
              );
            })}
          </div>
          <div id="orderTotal">
            <OrderTotal />
          </div>
        </section>
      </Boxer>
    </>
  );
};
