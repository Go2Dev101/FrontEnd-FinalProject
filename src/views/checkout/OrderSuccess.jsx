import React from "react";
import { Boxer } from "../../components/Boxer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const OrderSuccess = () => {
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
            <span className="break-words">example@gmail.com</span>
          </div>
        </section>

        {/* Section: Transaction Info */}
        <section className="mt-5 px-4 sm:px-10 bg-white w-full text-left space-y-2 text-sm sm:text-base">
          <div>
            <div className="font-medium">Transaction Date</div>
            <div>Friday, July 11, 2025 (GMT+7)</div>
          </div>
          <div>
            <div className="font-medium">Payment Method</div>
            <div>Prompt pay</div>
          </div>
          <div>
            <div className="font-medium">Shipping Method</div>
            <div>Express delivery (1-3 business days)</div>
          </div>
        </section>

        {/* Section: Order Summary */}
        <section className="mt-5 px-4 sm:px-10 py-2 bg-white w-full">
          <div className="text-left font-semibold mb-2">TRACK ORDER</div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <img
                src=""
                alt="Product"
                className="w-16 h-16 bg-gray-100 rounded"
              />
              <div>
                <div className="font-medium">Healthy Chicken Breast </div>
                <div className="text-gray-600">x1</div>
              </div>
            </div>

            <div className="font-medium">THB 300</div>
          </div>
        </section>

        {/* Section: Price Summary */}
        <section className="px-4 sm:px-10 py-2 bg-white w-full">
          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>THB 300</div>
            </div>
            <div className="flex justify-between">
              <div>Shipment cost</div>
              <div>THB 40</div>
            </div>
            <div className="flex justify-between font-bold">
              <div>Grand Total</div>
              <div>THB 340</div>
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
