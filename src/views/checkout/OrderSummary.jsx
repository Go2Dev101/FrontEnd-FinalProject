// import React, { useContext } from "react";
import { CheckOutHeader } from "../../components/cart/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/cart/ProgressBar";
import { OrderList } from "../../components/cart/OrderList";
// import { MessageContext } from "../../context/MessageContext";
// import { menuSet } from "../../data/menuSet";
import { OrderTotal } from "../../components/cart/OrderTotal";
import { getCartSummary } from "../../services/cartService.js";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const [load, setLoad] = useState(true);
  const [cart, setCart] = useState("");
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

  console.log(cart.items);
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
            {
              load ? <p>Loading..</p> : <OrderList orders={cart.items} />
              //  cart.items.length > 0 ? (

              //   cart.items.map((item) => {
              // <OrderList order={item} key={item._id} />

              //   })
              // ) : (
            }
          </div>
          <div id="orderTotal" className="w-1/3">
            {/* {orders && orders.length > 0 ? <OrderTotal /> : null} */}
            <OrderTotal />
          </div>
        </section>
      </Boxer>
    </>
  );
};
