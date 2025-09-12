import { Minus, Plus } from "lucide-react";

export const QuantityInput = ({ setCount, count, onChange }) => {
  const handleChange = (newValue) => {
    setCount(newValue);
    onChange?.(newValue);
  };
  return (
    <div className="p-2 rounded-full border flex w-31 justify-between items-center bg-white">
      <span
        onClick={() => handleChange(count - 1)}
        className={`rounded-full flex justify-center items-center cursor-pointer bg-secondary-200
        ${
          count === 1 && "pointer-events-none opacity-80 w-6 h-6 md:w-8 md:h-8"
        }`}
      >
        <Minus />
      </span>
      <p>{count}</p>
      <span
        onClick={() => handleChange(count + 1)}
        className="rounded-full flex justify-center items-center cursor-pointer bg-secondary-200 w-6 h-6 md:w-8 md:h-8"
      >
        <Plus />
      </span>
    </div>
  );
};
