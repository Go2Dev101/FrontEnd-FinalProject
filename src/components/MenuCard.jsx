import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Plus } from "lucide-react";

export const MenuCard = ({name,detail,img,category,kcal,price}) => {
  const mode = {
    menu:{seeMore:true,addMenu:true},
    landing:{seeMore:true},
    plan:""
  }
  return (
    <Card className="max-w-80 w-full gap-0">
      <img
        src={img.url}
        alt={img.alt}
        className="rounded-t-xl h-60 w-full"
      />
      <div className="flex flex-col gap-3 p-5 w-full">
        <div>
          <p className="text-xl font-medium text-primary-900 mb-1">
            {name}
          </p>
          <p className="text-sm text-secondary-400 line-clamp-2">{detail}</p>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary">{category}</Badge>
          <Badge variant="secondary">
            <Dumbbell/>
            {kcal}kcal
          </Badge>
        </div>
        <p className="text-end text-xl font-medium text-primary-900">{price} THB</p>
        <div className="flex gap-3 justify-center w-full">
          <Button size="md" className="bg-secondary-500 hover:bg-secondary-500/80 text-white w-1/2">
            See more
          </Button>
          {mode === "menu" && <Button size="md" className="bg-tertiary-500 hover:bg-tertiary-500/90">Order now</Button>}
          {mode  && <Button size="md" className="w-1/2" >
            <Plus className="size-6"/>Add menu</Button>}
        </div>
      </div>
    </Card>
  );
};
