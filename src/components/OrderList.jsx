import React from "react";
import { Card } from "./ui/card";
import { OrderCounter } from "./OrderCounter";

export const OrderList = ({data}) => {
  console.log(data)
  return (
    <>
      <div className="flex flex-col w-full">
        <Card className="max-w-200 w-full p-4 min-h-186">
          <div id="OrderItems" className="">
            <div className="flex">
              <img
                src="./public/img/Set Menu IMG.svg"
                className="max-w-40 w-full"
              />
              <div
                id="Details"
                className="flex flex-col items-stretch p-2 text-primary-700 "
              >
                <p className="text-2xl">14 Days meal set</p>
                <p>Delivery Date: 5-12 July</p>
                <p className="text-2xl">{data.priceTHB} THB</p>
              </div>
              <div id="Count">
                <OrderCounter />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
