import { useState } from "react";
import { Trash2 } from "lucide-react";
import { QuantityInput } from "./QuantityInput";
import { Card } from "../ui/card";
import { useMessage } from "../../context/MessageContext";

export const OrderList = ({ cart }) => {
  const [qty, setQty] = useState(cart.quantity);
  const { handleDelete, handleChange } = useMessage();

  const onChange = (newQty) => {
    setQty(newQty);
    handleChange(cart.menuId._id, newQty);
  };

  return (
    <div className="space-y-4">
      <Card className="w-full p-4">
        <div className="flex items-center justify-between gap-4">
          {/* ซ้าย: รูป + รายละเอียด */}
          <div className="flex items-center gap-6">
            <img
              src={cart.menuId.imageUrl}
              alt={cart.title}
              className="w-28 h-28 object-cover rounded-xl bg-gray-100"
            />
            <div className="text-primary-700">
              <p className="font-semibold text-lg">{cart.menuId.title}</p>
              <p className="text-sm text-gray-500">
                Delivery Date: {cart.deliveryDate || "-"}
              </p>
            </div>
          </div>

          {/* ขวา: ราคา + จำนวน + ปุ่มลบ */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="font-semibold">{cart.menuId.price} THB</p>
              <div className="mt-2">
                <QuantityInput
                  count={qty}
                  setCount={setQty}
                  onChange={onChange}
                />
              </div>
            </div>

            <button
              onClick={() => handleDelete(cart.menuId._id)}
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
