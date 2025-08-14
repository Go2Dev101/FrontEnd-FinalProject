import { useState } from "react";
import { Boxer } from "../Boxer";
import { InfoBar } from "./infoBar";
import { Nutrition } from "./Nutrition";
import { Tag } from "./Tag";
import { Button } from "@/components/ui/button";
import { Minus, Plus, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigation } from "../../utils/navigation";

export const MenuDetail = ({ path,mode = "menu" }) => {
  const modes = {
    menu: { addCart: true, addMenu: false, orderNow: true },
    addMenu: { addCart: false, addMenu: true, orderNow: false },
  };
  const [menuInfoBar, setMenuInfoBar] = useState("info");

  const handleMenuInfoBar = (e) => {
    setMenuInfoBar(e);
  };
  const navigate = useNavigate();

  return (
    <Boxer className="flex justify-center">
      <div className="flex flex-col lg:flex-row max-w-300 w-full">
        <section onClick={() => navigation(navigate,path)} className="lg:absolute left-16 flex gap-1 mb-5 cursor-pointer">
          <MoveLeft />
          <p>Back to menu</p>
        </section>
        <section className="flex-1/2 flex items-center justify-center mb-6 lg:mb-0">
          <img
            src="/img/manuSet3Day.png"
            alt=""
            className="max-w-133 w-full aspect-square rounded-4xl"
          />
        </section>
        <section className="sm:px-4 text-primary-900 flex-1/2 flex flex-col sm:justify-center gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">Spaghetti bologness</h1>
          <p className="text-xl sm:text-2xl font-medium">200 THB</p>
          <Tag category={"22"} kcal={"2222"} />
          <InfoBar onClick={handleMenuInfoBar} infoBar={menuInfoBar} />
          {menuInfoBar === "nutri" && <Nutrition />}
          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-20 items-center mt-3">
            <div className="p-2 rounded-full border bg-white flex w-31 justify-between items-center">
              <span className="w-8 h-8 rounded-full bg-secondary-200 flex justify-center items-center">
                <Minus />
              </span>
              <p>5</p>
              <span className="w-8 h-8 rounded-full bg-secondary-200 flex justify-center items-center">
                <Plus />
              </span>
            </div>
            <div className="flex gap-3 justify-center">
              {modes[mode].addCart && (
                <Button
                  //   onClick={() => navigation(navigate,"menuset",menuId)}
                  size="md"
                  className="w-32"
                >
                  Add to cart
                </Button>
              )}
              {modes[mode].orderNow && (
                <Button
                  size="md"
                  className="bg-tertiary-500 hover:bg-tertiary-500/90 w-32"
                >
                  Order now
                </Button>
              )}
              {modes[mode].addMenu && (
                <Button size="md" className="w-32">
                  <Plus className="size-6" />
                  Add menu
                </Button>
              )}
            </div>
          </div>
        </section>
      </div>
    </Boxer>
  );
};
