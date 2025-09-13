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
    <div className="flex justify-center w-max-740 h-max-200">
      <Card className="w-full p-4">
        <div className="flex items-center justify-between gap-4">
          {/* Img + title + delivery date*/}
          <div className="flex items-center gap-2 md:gap-6">
            <img loading="lazy"
              src={cart.menuId.imageUrl}
              alt={cart.title}
              className="w-15 h-15 object-cover rounded-xl bg-gray-100 md:w-28 md:h-28"
            />
            <div className="text-primary-700">
              <p className="line-clamp-1 w-full sm:text-sm md:text-md">
                {cart.menuId.title}
              </p>
              <p className="line-clamp-1 w-full text-xs text-gray-500">
                Delivery Date: {cart.deliveryDate || "-"}
              </p>
            </div>
          </div>

          {/* price + button */}
          <div className="flex items-center gap-0.5 -mx-4 md:gap-2 md: px-2">
            <div className="text-right">
              <p className="font-semibold">{cart.menuId.price.toLocaleString("th-TH")} THB</p>
              <div className="mt-2 ">
                <QuantityInput
                  count={qty}
                  setCount={setQty}
                  onChange={onChange}
                />
              </div>
            </div>

            <button
              onClick={() => handleDelete(cart.menuId._id)}
              className="p-2 rounded-full hover:bg-red-100 cursor-pointer mt-6"
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
