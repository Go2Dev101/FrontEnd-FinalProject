import { Tag } from "./Tag";

export const MenuCard = () => {
  return (
    <div className="rounded-lg max-w-80 bg-white">
      <img src="" alt="" />
      <div className="p-4">
        <div>
          <p className="text-xl font-medium text-primary-900 mb-1">c</p>
          <p className="text-sm text-secondary-400"></p>
        </div>

        <div className="flex gap-2">
          <Tag text={"Sh"} />
          <Tag icon={true} text={"220kcal"} />
        </div>
        <p className="text-end text-xl font-medium text-primary-900">200 THB</p>
      </div>
    </div>
  );
};
