import React, { useState } from "react";
import axios from "axios";
import { Card } from "../ui/card";
import { Trash2 } from "lucide-react";
import { QuantityInput } from "./QuantityInput";

export const OrderList = ({ summary, setSummary, API }) => {
  const [qty, setQty] = useState(1);
  const items = summary?.items ?? [];

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${API}/${itemId}`);
    } catch (err) {
      console.error("Error deleting cart item:", err);
    }

    // อัปเดต state หลังลบ (optimistic)
    const newItems = items.filter((it) => it._id !== itemId);
    setSummary({ ...summary, items: newItems });
  };

  if (items.length === 0) {
    return (
      <Card className="w-full p-6">
        <div className="w-full rounded-xl border border-gray-200 bg-white/60 py-10 px-6 text-center">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <p className="text-gray-400 text-sm mt-1">
            Choose your favorite menu and come back here to review your order 🍽️
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item._id} className="w-full p-4">
          <div className="flex items-center justify-between gap-4">
            {/* ซ้าย: รูป + รายละเอียด */}
            <div className="flex items-center gap-6">
              <img
                src={item.imageUrl || "/img/Set Menu IMG.svg"} // fallback รูป
                alt={item.name}
                className="w-28 h-28 object-cover rounded-xl bg-gray-100"
              />
              <div className="text-primary-700">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">
                  วันที่ส่ง: {item.deliveryDate || "-"}
                </p>
              </div>
            </div>

            {/* ขวา: ราคา + จำนวน + ปุ่มลบ */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="font-semibold">{item.price} THB</p>
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
                onClick={() => handleDelete(item._id)}
                className="p-2 rounded-full hover:bg-red-100"
                aria-label="remove item"
                title="Remove from cart"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
