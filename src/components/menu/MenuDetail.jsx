import { useContext, useState } from "react";
import { Boxer } from "../Boxer";
import { Nutrition } from "./Nutrition";
import { Tag } from "./Tag";
import { Button } from "@/components/ui/button";
import { Plus, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigation } from "../../utils/navigation";
import { InfoBar } from "./InfoBar";
import { Ingredeints } from "./Ingredeints";
import { Information } from "./Information";
import { MessageContext } from "../../context/MessageContext";
import { QuantityInput } from "../cart/QuantityInput";
import { handleCounter } from "../../utils/handle";

export const MenuDetail = ({ path, mode = "menu", menu }) => {
  const modes = {
    menu: { addCart: true, addMenu: false, orderNow: true },
    addMenu: { addCart: false, addMenu: true, orderNow: false },
  };
  const [menuInfoBar, setMenuInfoBar] = useState("info");
  const [menuQuantity, setMenuQuantity] = useState(1);

  const navigate = useNavigate();

  const { handleCart, handleOrders } = useContext(MessageContext);

  const handleMenuInfoBar = (e) => {
    setMenuInfoBar(e);
  };

  return (
    <Boxer className="flex justify-center">
      <div className="flex flex-col lg:flex-row max-w-300 w-full">
        <section
          onClick={() => navigation(navigate, path)}
          className="lg:absolute left-16 flex gap-1 mb-5 cursor-pointer"
        >
          <MoveLeft />
          <p>Back to menu</p>
        </section>
        <section className="flex-1/2 flex items-center justify-center mb-6 lg:mb-0">
          {menu.imageUrl !== "" ? (
            <img
              src={menu.imageUrl}
              alt={menu.title}
              className="max-w-133 w-full aspect-square object-cover rounded-2xl"
            />
          ) : (
            <span className="max-w-133 w-full aspect-square rounded-4xl bg-secondary-200 animate-pulse"></span>
          )}
        </section>
        <section className="sm:px-4 text-primary-900 flex-1/2 flex flex-col sm:justify-center gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{menu.title}</h1>
          <p className="text-xl sm:text-2xl font-medium">{menu.price} THB</p>
          <Tag category={menu.category} kcal={menu.kcal} />
          <InfoBar onClick={handleMenuInfoBar} menuBar={menuInfoBar} />
          {menuInfoBar === "info" && (
            <Information information={menu.description} />
          )}
          {/* {menuInfoBar === "ingre" && <Ingredeints />}
          {menuInfoBar === "nutri" && (
            <Nutrition nutritionFacts={menu.nutritionFacts} />
          )} */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-20 items-center mt-3">
            <QuantityInput
              onClickMinus={() =>
                handleCounter(setMenuQuantity, menuQuantity, "minus")
              }
              onClickPlus={() =>
                handleCounter(setMenuQuantity, menuQuantity, "plus")
              }
              quantity={menuQuantity}
              mode="menu"
            />
            <div className="flex gap-3 justify-center">
              {modes[mode].addCart && (
                <Button
                  onClick={() => handleCart(menu._id, menuQuantity)}
                  size="md"
                  className="w-32"
                >
                  Add to cart
                </Button>
              )}
              {modes[mode].orderNow && (
                <Button
                  onClick={() => {
                    handleOrders(navigate, menu._id, menuQuantity);
                  }}
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
