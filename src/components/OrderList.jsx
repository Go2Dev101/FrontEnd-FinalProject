import React from "react";
import { Card } from "./ui/card";
import { OrderCounter } from "./OrderCounter";
import { Trash2 } from "lucide-react";

export const OrderList = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="">
        <Card className="w-full p-4 min-h-186">
          <div id="OrderItems" className="flex justify-around items-center">
            <div className="flex gap-10 items-center">
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
              <div>
                <OrderCounter />
              </div>
              <div>
                <Trash2 />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
