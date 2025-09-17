import { useEffect, useState } from "react";
import { Boxer } from "../components/Boxer";
import { CheckOutHeader } from "../components/cart/CheckOutHeader";
import { useAuth } from "../context/AuthContext";
import { getAllOrdersByUser } from "../services/orderService.js";
import { formatDate } from "../utils/handle";

export const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const respon = await getAllOrdersByUser();

        setOrders(respon.ordersHistory);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, []);

  return (
    <Boxer>
      <CheckOutHeader header={"Order History"} />
      <section className="flex justify-center">
        <div className="border border-secondary-400 rounded-3xl overflow-hidden max-w-400 w-full bg-white">
          <table className="w-full  text-primary-900">
            <thead>
              <tr className="text-cente">
                <th className="px-1 py-2 sm:p-2">Order Date</th>
                <th className="px-1 py-2 sm:p-2">Items</th>
                <th className="px-1 py-2 sm:p-2">Total</th>
                <th className="px-1 py-2 sm:p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // loading
                <tr>
                  <td colSpan={4} className="p-2 text-center border-t">
                    Loading...
                  </td>
                </tr>
              ) : orders.length > 0 ? (
                // Show order
                orders.map((order) => (
                  <tr key={order._id} className="text-center border-t">
                    <td className="w-1/4 px-1 py-2 sm:p-2">
                      {formatDate(new Date(order.createdAt))}
                    </td>
                    <td className="w-1/4 px-1 py-2 sm:p-2">
                      {order.totalItems} items
                    </td>
                    <td className="w-1/4 px-1 py-2 sm:p-2">
                      {order.grandTotal?.toLocaleString("th-TH") || 0} THB
                    </td>
                    <td className="w-1/4 px-1 py-2 sm:p-2">
                      <button className="bg-secondary-200 px-4 sm:px-12 py-1 rounded-3xl capitalize">
                        {order.status}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                // No orders found
                <tr>
                  <td colSpan={4} className="p-2 text-center border-t">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </Boxer>
  );
};
