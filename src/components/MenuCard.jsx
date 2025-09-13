import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { navigationDetail } from "../utils/navigation";

import { Tag } from "./menu/Tag";
import { useMessage } from "../context/MessageContext";

export const MenuCard = ({ data, mode = "menu" }) => {
  const modes = {
    menu: { seeMore: true },
    landing: { seeMore: false },
  };
  const navigate = useNavigate();

  const { handleOrders } = useMessage();
  return (
    <Card className="max-w-80 min-w-72  w-full gap-0">
      <img loading="lazy"
        src={data.imageUrl}
        alt={data.title}
        className="rounded-t-xl h-60 w-full object-top"
      />
      <div className="flex flex-col gap-3 p-5 w-full">
        <div>
          <p className="text-xl font-medium text-primary-900 mb-1 line-clamp-1">
            {data.title}
          </p>
          <p className="text-sm text-secondary-400 line-clamp-2">
            {data.information.description}
          </p>
        </div>

        {/* Tag menu card */}
        <Tag proteins={data.proteins} kcal={data.nutritionFacts.kcal} />

        {/* price menu card */}
        <p className="text-end text-xl font-medium text-primary-900">
          {data.price} THB
        </p>
        <div className="flex gap-3 justify-center w-full">
          {modes[mode].seeMore && (
            <Button
              onClick={() => navigationDetail(navigate, "menuset", data.slug)}
              size="md"
              className="bg-secondary-500 hover:bg-secondary-500/80 text-white w-1/2"
            >
              See more
            </Button>
          )}
          <Button
            onClick={() => {
              handleOrders(navigate, data, 1, "");
            }}
            size="md"
            className="bg-tertiary-500 hover:bg-tertiary-500/90 w-1/2"
          >
            Order now
          </Button>
        </div>
      </div>
    </Card>
  );
};
