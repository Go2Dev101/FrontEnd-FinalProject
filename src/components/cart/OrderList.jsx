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
    <div className="">
      <Card className="max-w-full px-6 py-4 md:px-4 md:py-4 lg:px-2">
        <div className="flex justify-between gap-x-6 ">
          {/* Img */}
          <div className="flex justify-center items-center">
            <div className="flex">
              <img
                loading="lazy"
                src={cart.menuId.imageUrl}
                alt={cart.title}
                className="w-20 h-20 mx-4 object-cover rounded-sm bg-gray-100 md:w-28 md:h-28 lg:w-25 lg:h-25"
              />
            </div>
            {/* title + delivery date + price */}
            <div className="flex flex-col items-start gap-2 text-primary-700">
              <p className="line-clamp-1 w-full text-sm font-bold md:text-base">
                {cart.menuId.title}
              </p>
              <p className="w-full text-xs text-gray-500 font-medium">
                Delivery Date: <br></br>
                {cart.deliveryDate || "-"}
              </p>
              <div className="text-tertiary-500">
                <p className="font-semibold">
                  {cart.menuId.price?.toLocaleString("th-TH") || 0} THB
                </p>
              </div>
            </div>
          </div>

          {/* button */}
          <div className="flex justify-center items-center gap-0.5 -mx-4 md:gap-2 md: px-2">
            <div className="flex">
              <QuantityInput
                count={qty}
                setCount={setQty}
                onChange={onChange}
              />
            </div>
            <div className="flex mx-3">
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
        </div>
      </Card>
    </div>
  );
};
