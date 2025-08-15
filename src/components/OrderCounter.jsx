import React from "react";
import { CircleMinus, CirclePlus } from "lucide-react";

export const OrderCounter = () => {
  return (
    <div className="flex gap-1">
      <CircleMinus className="border-primary-950" />
      <div>
        <p>1</p>
      </div>
      <CirclePlus />
    </div>
  );
};
