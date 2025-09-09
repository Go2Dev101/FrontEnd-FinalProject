import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Card } from "../ui/card";
import { Trash2 } from "lucide-react";
import { QuantityInput } from "./QuantityInput";
import { useMessage } from "../../context/MessageContext";

export const OrderList = ({ cart }) => {
  const [qty, setQty] = useState(cart.quantity);
  const { orders, setOrders } = useMessage();

  const handleDelete = (id) => {
    if (!window.confirm("Remove this item?")) return;
    const newOrders = orders.filter((order) => order.menuId !== id);
    setOrders(newOrders);
  };

  useEffect(() => {
    const menu = orders.find((menu) => menu.menuId === cart.menuId);
    menu.quantity = qty;
    setOrders([...orders]);
  }, []);

  return (
    <div className="space-y-4">
      <Card className="w-full p-4">
        <div className="flex items-center justify-between gap-4">
          {/* ซ้าย: รูป + รายละเอียด */}
          <div className="flex items-center gap-6">
            <img
              src={cart.imageUrl || "/img/Set Menu IMG.svg"} // fallback รูป
              alt={cart.name}
              className="w-28 h-28 object-cover rounded-xl bg-gray-100"
            />
            <div className="text-primary-700">
              <p className="font-semibold text-lg">{cart.name}</p>
              <p className="text-sm text-gray-500">
                Delivery Date: {cart.deliveryDate || "-"}
              </p>
            </div>
          </div>

          {/* ขวา: ราคา + จำนวน + ปุ่มลบ */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="font-semibold">{cart.price} THB</p>
              <div className="mt-2">
                <QuantityInput
                  quantity={qty}
                  onClickMinus={() => setQty((q) => Math.max(1, q - 1))}
                  onClickPlus={() => setQty((q) => q + 1)}
                  mode="menu"
                />
              </div>
            </div>

            <button
              onClick={() => handleDelete(cart.menuId)}
              className="p-2 rounded-full hover:bg-red-100 cursor-pointer"
              aria-label="remove cart"
              title="Remove from cart"
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
