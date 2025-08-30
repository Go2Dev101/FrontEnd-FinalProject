import { Minus, Plus } from "lucide-react";

export const QuantityInput = ({
  onClickMinus,
  onClickPlus,
  quantity,
  mode = "menu",
}) => {
  const modes = {
    menu: {
      background: "bg-white",
      button: "bg-secondary-200",
    },
    order: {
      background: "bg-white",
    },
  };
  return (
    <div
      className={`p-2 rounded-full border flex w-31 justify-between items-center ${modes[mode].background}`}
    >
      <span
        onClick={onClickMinus}
        className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ${
          modes[mode].button
        } ${quantity === 1 && "pointer-events-none opacity-80"}`}
      >
        <Minus />
      </span>
      <p>{quantity}</p>
      <span
        onClick={onClickPlus}
        className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ${modes[mode].button}`}
      >
        <Plus />
      </span>
    </div>
  );
};
