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
        className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-secondary-200
        ${count === 1 && "pointer-events-none opacity-80"}`}
      >
        <Minus />
      </span>
      <p>{count}</p>
      <span
        onClick={() => handleChange(count + 1)}
        className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-secondary-200"
      >
        <Plus />
      </span>
    </div>
  );
};
