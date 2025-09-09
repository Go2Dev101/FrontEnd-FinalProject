import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, MoveLeft, ChevronDown } from "lucide-react";

import { Boxer } from "../Boxer";
import { Nutrition } from "./Nutrition";
import { Tag } from "./Tag";
import { Information } from "./Information";
import { InfoBar } from "./InfoBar";
import { QuantityInput } from "../cart/QuantityInput";
import { navigation } from "../../utils/navigation";
import { Ingredeints } from "./Ingredeints";
import { addDays, formatDate, handleCounter } from "../../utils/handle";
import { useMessage } from "../../context/MessageContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const MenuDetail = ({ path, mode = "menu", menu, loading }) => {
  const modes = {
    menu: { addCart: true, addMenu: false, orderNow: true },
    addMenu: { addCart: false, addMenu: true, orderNow: false },
  };
  const { handleCart, handleOrders } = useMessage();
  const navigate = useNavigate();

  const [menuInfoBar, setMenuInfoBar] = useState("info");
  const [menuQuantity, setMenuQuantity] = useState(1);
  const [isDeliveryDate, setIsDeliveryDate] = useState(false);
  const [date, setDate] = useState();
  const [deliveryDate, setDeliveryDate] = useState();

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
          {!menu.imageUrl ? (
            <span className="max-w-133 w-full aspect-square rounded-4xl bg-secondary-200 animate-pulse"></span>
          ) : (
            <img
              src={menu.imageUrl}
              alt={menu.title}
              className="max-w-133 w-full aspect-square object-cover rounded-2xl"
            />
          )}
        </section>
        {loading ? (
          <section className="animate-pulse sm:px-4 text-primary-900 flex-1/2 flex flex-col sm:justify-center gap-4">
            <div className="h-5 rounded bg-gray-200"></div>
            <div className="h-5 w-24 rounded bg-gray-200"></div>
            <div className="flex gap-3">
              <div className="flex-1/8 h-5 rounded bg-gray-200"></div>
              <div className="flex-1/8 h-5 rounded bg-gray-200"></div>
            </div>

            <InfoBar onClick={handleMenuInfoBar} menuBar={menuInfoBar} />
            <div className="h-5 rounded bg-gray-200"></div>
            <div className="h-5 w-24 rounded bg-gray-200"></div>
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
        ) : (
          <section className="sm:px-4 text-primary-900 flex-1/2 flex flex-col sm:justify-center gap-4">
            <h1 className="text-2xl sm:text-4xl font-bold">{menu.title}</h1>
            <p className="text-xl sm:text-2xl font-medium">{menu.price} THB</p>
            <Tag proteins={menu.proteins} kcal={menu.nutritionFacts.kcal} />
            <InfoBar onClick={handleMenuInfoBar} menuBar={menuInfoBar} />
            {menuInfoBar === "info" && (
              <Information information={menu.information} />
            )}
            {/* {menuInfoBar === "ingre" && <Ingredeints />} */}
            {menuInfoBar === "nutri" && (
              <Nutrition nutritionFacts={menu.nutritionFacts} />
            )}
            <div>
              <div className="flex flex-col gap-3">
                <label className="px-1 font-medium">Delivery Date</label>
                <Popover open={isDeliveryDate} onOpenChange={setIsDeliveryDate}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className="w-fit justify-between font-normal"
                    >
                      {date ? deliveryDate : "Select Delivery Date"}
                      <ChevronDown />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date);
                        setIsDeliveryDate(false);
                        setDeliveryDate(
                          `${formatDate(date)} - ${addDays(
                            date,
                            menu.durationDays
                          )}`
                        );
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
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
                    onClick={() =>
                      handleCart(menu._id, menuQuantity, deliveryDate)
                    }
                    size="md"
                    className="w-32"
                  >
                    Add to cart
                  </Button>
                )}
                {modes[mode].orderNow && (
                  <Button
                    onClick={() => {
                      handleOrders(
                        navigate,
                        menu._id,
                        menuQuantity,
                        deliveryDate
                      );
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
        )}
      </div>
    </Boxer>
  );
};
