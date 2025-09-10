import { useLocation } from "react-router-dom";

export const ProgressBar = () => {
  const { pathname } = useLocation();

  const steps = [
    { label: "Checkout", href: "/ordersummary" },
    { label: "Delivery", href: "/delivery" },
    { label: "Payment", href: "/payment" },
  ];

  const currentIndex = Math.max(
    0,
    steps.findIndex((s) => pathname.startsWith(s.href))
  );

  return (
    <div className="w-112">
      {/* แถวของวงกลม (ความสูงเท่ากับวงกลม) */}
      <div className="relative grid grid-cols-3 items-center justify-items-center px-[22px] h-11">
        {/* เส้น: วาดครั้งเดียว อยู่หลังวงกลม */}
        <div className="absolute left-[75px] right-[75px] top-1/2 -translate-y-1/2 h-[3px] bg-primary-900 z-0" />

        {/* วงกลม 3 จุด */}
        {steps.map((s, i) => {
          const isActive = i === currentIndex;
          return (
            <div
              key={s.href}
              className="relative z-10 flex flex-col items-center"
            >
              <div
                className={[
                  "w-11 h-11 rounded-full border-2 border-primary-900",
                  isActive ? "bg-primary-900" : "bg-background-50",
                ].join(" ")}
              />
              <p
                key={s.href}
                className="text-center font-bold text-primary-800"
              >
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
