import { Minus, Plus } from "lucide-react";

export const QuantityInput = ({ setCount, count, onChange }) => {
  const handleChange = (newValue) => {
    setCount(newValue);
    onChange?.(newValue);
  };
  return (
    <div className="p-2 rounded-full border flex w-20 justify-between items-center bg-white md:w-25">
      <span
        onClick={() => handleChange(count - 1)}
        className={`rounded-full flex justify-center items-center cursor-pointer bg-secondary-200 w-4 h-4 md:w-5 md:h-5
        ${
          count === 1 && "pointer-events-none opacity-80 w-4 h-4 md:w-5 md:h-5"
        }`}
      >
        <Minus />
      </span>
      <p>{count}</p>
      <span
        onClick={() => handleChange(count + 1)}
        className="rounded-full flex justify-center items-center cursor-pointer bg-secondary-200 w-4 h-4 md:w-5 md:h-5"
      >
        <Plus />
      </span>
    </div>
  );
};
