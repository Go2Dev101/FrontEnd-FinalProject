import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigationDetail } from "../utils/navigation";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export const MenuCard = ({
  name,
  detail,
  img,
  category,
  kcal,
  price,
  mode = "menu",
  menuId,
}) => {
  const modes = {
    menu: { seeMore: true, addMenu: false, orderNow: true },
    landing: { seeMore: false, addMenu: false, orderNow: true },
    addMenu: { seeMore: true, addMenu: true, orderNow: false },
  };
  const navigate = useNavigate();
  
    const { handleOrders } = useContext(MessageContext);
  return (
    <Card className="max-w-80 w-full gap-0">
      <img src={img.url} alt={img.alt} className="rounded-t-xl h-60 w-full object-cover" />
      <div className="flex flex-col gap-3 p-5 w-full">
        <div>
          <p className="text-xl font-medium text-primary-900 mb-1">{name}</p>
          <p className="text-sm text-secondary-400 line-clamp-2">{detail}</p>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary">{category}</Badge>
          <Badge variant="secondary">
            <Dumbbell />
            {kcal}kcal
          </Badge>
        </div>
        <p className="text-end text-xl font-medium text-primary-900">
          {price} THB
        </p>
        <div className="flex gap-3 justify-center w-full">
          {modes[mode].seeMore && (
            <Button
              onClick={() => navigationDetail(navigate,"menuset",menuId)}
              size="md"
              className="bg-secondary-500 hover:bg-secondary-500/80 text-white w-1/2"
            >
              See more
            </Button>
          )}
          {modes[mode].orderNow && (
            <Button
            onClick={() => {handleOrders(navigate,menuId,1,"")}}
              size="md"
              className="bg-tertiary-500 hover:bg-tertiary-500/90 w-1/2"
            >
              Order now
            </Button>
          )}
          {modes[mode].addMenu && (
            <Button size="md" className="w-1/2">
              <Plus className="size-6" />
              Add menu
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
