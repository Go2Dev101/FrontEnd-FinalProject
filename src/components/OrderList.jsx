import React from "react";
import { Card } from "./ui/card";
import { Trash2 } from "lucide-react";
import { QuantityInput } from "./QuantityInput";
import { useState } from "react";

export const OrderList = ({ data }) => {
  const [qty, setQty] = useState(1);
  console.log(data);
  return (
    <>
      <div className="">
        <Card className="w-full p-4">
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
                <p className="text-2xl">{data.title}</p>
                <p>Delivery Date: 5-12 July</p>
                <p className="text-2xl">{data.priceTHB} THB</p>
              </div>
              <div>
                <QuantityInput
                  quantity={qty}
                  onClickMinus={() => setQty((q) => Math.max(1, q - 1))}
                  onClickPlus={() => setQty((q) => q + 1)}
                  mode="menu"
                />
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
