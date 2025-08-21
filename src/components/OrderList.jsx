import React from "react";
import { Card } from "./ui/card";
import { OrderCounter } from "./OrderCounter";

export const OrderList = () => {
  return (
    <>
      <Card className="w-full p-4 min-h-186">
        <div id="OrderItems" className="flex justify-around">
          <div id="Img" className="w-full max-h-40 max-w-40">
            <img
              src="./public/img/Set Menu IMG.svg"
              className="max-w-40 w-full"
            />
          </div>
          <div
            id="Details"
            className="flex flex-col items-stretch p-2 text-primary-700 "
          >
            <p className="text-2xl">14 Days meal set</p>
            <p>Delivery Date: 5-12 July</p>
            <p className="text-2xl">4200.00 THB</p>
          </div>
          <div id="Count" className="items-end">
            <OrderCounter />
          </div>
        </div>
      </Card>
    </>
  );
};
