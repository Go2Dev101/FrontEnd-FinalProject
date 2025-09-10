import { CheckOutHeader } from "../../components/cart/CheckOutHeader";
import { Boxer } from "../../components/Boxer";
import { ProgressBar } from "../../components/cart/ProgressBar";
import { OrderList } from "../../components/cart/OrderList";
import { OrderTotal } from "../../components/cart/OrderTotal";
import { getCartSummary } from "../../services/cartService.js";
import { useEffect, useState } from "react";
import { calculateCart } from "../../utils/cart.js";
import { Card } from "../../components/ui/card.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

export const OrderSummary = () => {
  const { logout } = useAuth();
  const [load, setLoad] = useState(true);
  const [cart, setCart] = useState({ items: [] });
  const [calculate, setCalculate] = useState({ totalAmount: 0, cartItems: 0 });

  useEffect(() => {
    const fetchCart = async () => {
      setLoad(true);
      try {
        const res = await getCartSummary();
        setCart(res.summary || { items: [] });
      } catch (error) {
        if (error.response.data.code === "TOKEN_EXPIRED") {
          logout();
        }
        console.error(error);
      } finally {
        setLoad(false);
      }
    };
    fetchCart();
  }, [logout]);

  // คำนวณยอดรวมใหม่ทุกครั้งที่ items เปลี่ยน
  useEffect(() => {
    setCalculate(calculateCart(cart.items || []));
  }, [cart.items]);

  // ลูกแจ้งว่าเปลี่ยนจำนวน
  const handleQtyChange = (menuId, qty) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        String(item.menuId) === String(menuId)
          ? { ...item, quantity: qty }
          : item
      ),
    }));
  };

  // ลูกแจ้งว่าลบ
  const handleDelete = (menuId) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter(
        (item) => String(item.menuId) !== String(menuId)
      ),
    }));
  };

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

        <section id="cart" className="flex justify-center gap-6">
          <div className="w-1/2">
            {load ? (
              <p>Loading..</p>
            ) : cart.items.length > 0 ? (
              cart.items.map((item) => (
                <OrderList
                  key={item.menuId}
                  cart={item}
                  onQtyChange={handleQtyChange}
                  onDelete={handleDelete}
                />
              ))
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
