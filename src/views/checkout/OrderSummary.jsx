import { CheckOutHeader } from "../../components/cart/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/cart/ProgressBar";
import { OrderList } from "../../components/cart/OrderList";
import { OrderTotal } from "../../components/cart/OrderTotal";
import { useEffect, useState } from "react";
import { calculateCart } from "../../utils/cart.js";
import { Card } from "../../components/ui/card.jsx";
import { useMessage } from "../../context/MessageContext.jsx";
// import { useAuth } from "../../context/AuthContext.jsx";

export const OrderSummary = () => {
  // const { logout } = useAuth();
  const [calculate, setCalculate] = useState({ totalAmount: 0, cartItems: 0 });
  const { carts } = useMessage();
  const { handleClearCart } = useMessage();

  useEffect(() => {
    setCalculate(calculateCart(carts || []));
  }, [carts]);

  return (
    <>
      <Boxer>
        <section id="header" className="flex justify-between">
          <CheckOutHeader
            header={"Order Summary"}
            title={"Please review your order"}
          />
          <ProgressBar />
        </section>

        <div>
          <button
            id="clear-cart"
            className=" w-max-1/12 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart 🗑️
          </button>
        </div>

        <div className="flex gap-6">
          <section id="cart" className="flex flex-col items-end gap-2">
            <div className="flex gap-6">
              <div className="w-1/2">
                {carts.length > 0 ? (
                  carts.map((item) => (
                    <OrderList key={item.menuId._id} cart={item} />
                  ))
                ) : (
                  <Card className="w-full p-6">
                    <div className="w-full rounded-xl border border-gray-200 bg-white/60 py-10 px-6 text-center">
                      <p className="text-gray-500 text-lg">
                        Your cart is empty
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Choose your favorite menu and come back here to review
                        your cart 🍽️
                      </p>
                    </div>
                  </Card>
                )}
              </div>
              <div id="orderTotal" className="w-1/3">
                <OrderTotal mode="orderSummary" data={calculate} />
              </div>
            </div>
          </section>
        </div>
      </Boxer>
    </>
  );
};
