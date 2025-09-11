import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllMenus } from "../services/menuService.js";
import { useEffect, useRef, useState } from "react";
import { MenuCard } from "../components/MenuCard.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Home = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const promoRef = useRef(null);

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const respon = await getAllMenus();
        setMenus(respon.menus || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const scrollPromo = (direct) => {
    const el = promoRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.9, 320);
    el.scrollBy({
      left: direct === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#fef5e5] text-gray-900">
      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center p-6">
        <img
          src="img/spaghetti.png"
          alt="Spaghetti"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full object-cover flex flex-col bg-white text-center justify-center">
          <p className="text-2xl font-semibold">
            “Get your glow from the inside out — start with this wholesome
            bowl.”
          </p>
        
        </div>
      </section>

      {/* Promotion */}
      <section className="relative px-6 sm:px-10 py-5">
       
        <div
          ref={promoRef}
          className="flex flex-row overflow-auto gap-10 scroll-smooth no-scrollbar"
        >
          {loading ? (
            <p>Loading....</p>
          ) : (
            menus
              .sort((a, b) => a.durationDays - b.durationDays)
              .map((menu) => (
                <MenuCard key={menu._id} data={menu} mode="landing" />
              ))
          )}
        </div>

        <button
          aria-label="scroll left"
          onClick={() => scrollPromo("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow rounded-full flex items-center justify-center w-12 h-12"
        >
          <ChevronLeft size={100} />
        </button>

        <button
          aria-label="scroll right"
          onClick={() => scrollPromo("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow rounded-full flex items-center justify-center w-12 h-12"
        >
          <ChevronRight size={100} />
        </button>
      </section>

      {/* How does it work */}
      <section className="bg-white p-10">
        <h2 className="text-center text-2xl font-bold mb-6">
          How does it work
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <img src="../src/assets/choosemenu.svg" alt="" />
            <p className="font-semibold">Choose order</p>
          </div>
           <div className="flex flex-col items-center gap-2">
            <img src="../src/assets/location.svg" alt="" />
            <p className="font-semibold">Select location</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="../src/assets/payment.svg" alt="" />
            <p className="font-semibold">Pay advanced</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="../src/assets/enjoymeal.svg" alt="" />
            <p className="font-semibold">Enjoy meals</p>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="p-10">
        <h2 className="text-center text-2xl font-bold mb-6">Delivery</h2>
        <img
          src="../src/assets/deliveryzone.svg"
          alt="Delivery routes"
          className="mx-auto"
        />
      </section>

      {/* About */}
      <section className="bg-white p-10">
        <h2 className="text-center text-2xl font-bold mb-6">About Us</h2>
        <p className="mx-auto text-center text-gray-700">
          DailyLean offers healthy, tasty meals for busy people who care about
          their well-being.Our food is flavorful, filling, and packed with
          nutrients your body needs. We carefully select fresh, premium
          ingredients from local farms. <br></br><br></br>-- You're not just eating clean
          <br></br>you're making a positive impact. --
        </p>
      </section>
    </div>
  );
};
