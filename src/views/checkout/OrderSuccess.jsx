import React, { useEffect, useState } from "react";
import { Boxer } from "../../components/Boxer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCheckout } from "../../context/CheckoutContext";
import { getIdOrders } from "../../services/orderService";

export const OrderSuccess = () => {
  const formatTH = (s) =>
    !s ? "-" : new Date(s).toLocaleString("th-TH", {
            timeZone: "Asia/Bangkok",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
          .replace(/^(.*)\s(.*)$/, "วันที่ $1 เวลา $2");

  const { orderId } = useCheckout();
  const [storeReceipt, setStoreReceipt] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        const orders = await getIdOrders(orderId);
        setStoreReceipt(orders.order);
        console.log(orders);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

   console.log("{formatTH(storeReceipt.createdAt)}")
   console.log(formatTH(storeReceipt.createdAt))
  return (
    <Boxer className="flex flex-col items-center px-2 sm:px-4">
      <div className="p-4 bg-white w-full max-w-2xl text-center">
        {/* Section: Thank You */}
        <section className="mt-5 p-2 bg-white w-full text-center space-y-2">
          <div className="text-base sm:text-lg font-semibold">
            Thanks for your order!
          </div>
          <div className="text-sm sm:text-base text-gray-600">
            The order confirmation has been sent to{" "}
            <br className="block sm:hidden" />
            <span className="break-words">{storeReceipt.email}</span>
          </div>
        </section>

        {/* Section: Transaction Info */}

        <section className="mt-5 px-4 sm:px-10 bg-white w-full text-left space-y-2 text-sm sm:text-base">
          <div>
            <div className="font-medium">Transaction Date</div>
            <div>{formatTH(storeReceipt.createdAt)}</div>
          </div>
          <div>
            <div className="font-medium">Payment Method</div>
            <div>Prompt pay</div>
          </div>
        </section>

        {/* Section: Order Summary */}
        <section className="mt-5 px-4 sm:px-10 py-2 bg-white w-full">
          <div className="text-left font-semibold mb-2">TRACK ORDER</div>
          {storeReceipt.items?.map((receipt) => (
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <img
                  src={receipt.menuId.imageUrl}
                  alt={receipt.name}
                  className="w-16 h-16 bg-gray-100 rounded"
                />
                <div>
                  <div className="font-medium">
                    {receipt.name?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                  <div className="text-gray-600 text-left">
                    X {receipt.quantity}
                  </div>
                </div>
              </div>
              <div className="font-medium">
                {receipt.price?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,})}{" "}THB
              </div>
            </div>
          ))}
        </section>

        {/* Section: Price Summary */}
        <section className="px-4 sm:px-10 py-2 bg-white w-full">
          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>
                {storeReceipt?.totalAmount?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,})}{" "}THB
              </div>
            </div>
            <div className="flex justify-between">
              <div>Shipment cost</div>
              <div>
                {storeReceipt?.shippingFee?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,})}{" "}THB
              </div>
            </div>
            <div className="flex justify-between font-bold">
              <div>Grand Total</div>
              <div>
                {storeReceipt?.grandTotal?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,})}{" "}THB
              </div>
            </div>
          </div>
        </section>

        {/* Section: Button */}
        <section className="px-4 sm:px-10 py-4 bg-white w-full">
          <Link to="/menuset" className="hover:text-amber-400 block">
            <Button className="w-full" variant="green">
              Back To Menu
            </Button>
          </Link>
        </section>
      </div>
    </Boxer>
  );
};
