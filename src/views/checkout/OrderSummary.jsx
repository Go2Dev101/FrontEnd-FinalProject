import { CheckOutHeader } from "../../components/cart/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/cart/ProgressBar";
import { OrderList } from "../../components/cart/OrderList";
import { OrderTotal } from "../../components/cart/OrderTotal";
import { getCartSummary } from "../../services/cartService.js";
import { useEffect, useState } from "react";
import { calculateCart } from "../../utils/cart.js";

// import { useMessage } from "../../context/MessageContext.jsx";

export const OrderSummary = () => {
  // const { orders } = useMessage();
  const [load, setLoad] = useState(true);
  const [cart, setCart] = useState("");
  const [calculate, setCalculate] = useState("");
  useEffect(() => {
    const fetchCart = async () => {
      setLoad(true);
      try {
        const res = await getCartSummary();
        setCart(res.summary);
      } catch (error) {
        console.error(error);
      } finally {
        setLoad(false);
      }
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const response = calculateCart(cart.items);
    setCalculate(response);
  }, [cart]);

  return (
    <>
      <Boxer>
        <section id="header" className="flex justify-between">
          <CheckOutHeader
            header={"Order Summary"}
            title={"Please review your order"}
          />
          <ProgressBar path={"delivery"} />
        </section>

        <section id="cart" className="flex justify-center gap-6">
          <div className="w-1/2">
            {load ? (
              <p>Loading..</p>
            ) : // <OrderList carts={cart.items} />
            cart.items.length > 0 ? (
              cart.items.map((item) => <OrderList cart={item} key={item._id} />)
            ) : (
              <Card className="w-full p-6">
                <div className="w-full rounded-xl border border-gray-200 bg-white/60 py-10 px-6 text-center">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Choose your favorite menu and come back here to review your
                    cart 🍽️
                  </p>
                </div>
              </Card>
            )}
          </div>
          <div id="orderTotal" className="w-1/3">
            {/* {orders && orders.length > 0 ? <OrderTotal /> : null} */}
            <OrderTotal mode="orderSummary" data={calculate} />
          </div>
        </section>
      </Boxer>
    </>
  );
};
