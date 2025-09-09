import { Link } from "react-router-dom";

export const ProgressBar = ({ path }) => {
  // const modes = { orderSummary: false, delivery: true };
  return (
    <>
      <div className="flex">
        <Link to={`/${path}`}>
          <p className="font-bold text-3xl text-primary-800 mr-6 ">Back</p>
        </Link>
        <div className="relative">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full border-3 border-primary-900 bg-background-50 z-1"></div>
              <p className="font-bold text-primary-800">Order Summary</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full border-3 border-primary-900 bg-primary-900 z-1 "></div>
              <p className="font-bold text-primary-800">Delivery Address</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full border-3 border-primary-900 bg-background-50 z-1 "></div>
              <p className="font-bold text-primary-800 text-center">Payment</p>
            </div>
            <div className="w-3/4 h-1 mt-5 bg-primary-900 absolute left-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};
