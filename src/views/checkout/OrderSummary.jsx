import React, { useContext } from "react";
import { CheckOutHeader } from "../../components/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/ProgressBar";
import { OrderList } from "../../components/OrderList";
import { MessageContext } from "../../context/MessageContext";
import { menuSet } from "../../data/menuSet";
import { OrderTotal } from "../../components/OrderTotal";

export const OrderSummary = () => {
  const { orders, handleDelete } = useContext(MessageContext);

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

        <section id="main" className="flex justify-center gap-6">
          <div id="orderManagement" className="w-1/2">
            {orders && orders.length > 0 ? (
              orders.map((order) => {
                const menu = menuSet.find((m) => m.id === order.menuId);
                if (!menu) return null;

                const dataForRow = {
                  ...menu,
                  quantity: order.quantity,
                  deliveryDate: order.deliveryDate,
                };

                return (
                  <OrderList
                    key={`${order.menuId}__${order.deliveryDate || "N/A"}`}
                    data={dataForRow}
                    orderId={order.id}
                    onDelete={() =>
                      handleDelete(order.menuId, order.deliveryDate)
                    }
                  />
                );
              })
            ) : (
              <div className="w-full rounded-xl border border-gray-200 bg-white/60 py-16 px-6 text-center">
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-1">
                  Choose your favorite menu and come back here to review your
                  order.🍽️
                </p>
              </div>
            )}
          </div>

          <div id="orderTotal" className="w-1/3">
            {orders && orders.length > 0 ? <OrderTotal /> : null}
          </div>
        </section>
      </Boxer>
    </>
  );
};
