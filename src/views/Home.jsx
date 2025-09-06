import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Home = () => {
  const menus = [
    { id: 1, title: "Spaghetti Bologness", kcal: "220kcal", price: 200 },
    { id: 2, title: "Spaghetti Bologness", kcal: "220kcal", price: 200 },
    { id: 3, title: "Spaghetti Bologness", kcal: "220kcal", price: 200 },
  ];
  return (<div className="bg-[#fef5e5] text-gray-900">

      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center">
        <img
          src="/hero.jpg"
          alt="Healthy bowl"
          className="w-full h-full object-cover"
        />
        <div className="p-10 flex flex-col gap-6">
          <p className="text-2xl font-semibold">
            “Get your glow from the inside out — start with this wholesome bowl.”
          </p>
          <Button className="bg-[#f49b21] text-white w-fit">Order Now</Button>
        </div>
      </section>

      {/* Promotion */}
      <section className="p-10">
        <h2 className="text-center text-2xl font-bold mb-6">
          Promotion/Popular Set
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["SET 3-DAYS", "SET 5-DAYS", "SET 7-DAYS"].map((set, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="flex flex-col items-center p-6">
                <img src="/set.png" alt={set} className="h-40 object-cover" />
                <h3 className="font-semibold mt-4">{set}</h3>
                <p className="text-sm text-gray-500">Eat fresh. Feel great.</p>
                <Button className="bg-[#f49b21] mt-4 text-white">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Menu */}
      <section className="p-10">
        <h2 className="text-center text-2xl font-bold mb-6">Popular Menu</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {menus.map((menu) => (
            <Card key={menu.id} className="shadow-md">
              <CardContent className="p-4">
                <img
                  src="/menu.jpg"
                  alt={menu.title}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-semibold">{menu.title}</h3>
                <p className="text-sm text-gray-500">{menu.kcal}</p>
                <p className="font-bold mt-2">{menu.price} THB</p>
                <Button className="bg-[#f49b21] mt-4 text-white w-full">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button className="bg-[#3c4d1f] text-white">See more</Button>
        </div>
      </section>

      {/* How does it work */}
      <section className="bg-white p-10">
        <h2 className="text-center text-2xl font-bold mb-6">
          How does it work
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Select location",
            "Choose order",
            "Pay advanced",
            "Enjoy meals",
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 bg-[#3c4d1f] rounded-full" />
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery */}
      <section className="p-10">
        <h2 className="text-center text-2xl font-bold mb-6">Delivery</h2>
        <img src="/delivery-map.png" alt="Delivery routes" className="mx-auto" />
      </section>

      {/* About */}
      <section className="bg-white p-10">
        <h2 className="text-center text-2xl font-bold mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          DailyLean offers healthy, tasty meals for busy people who care about
          their well-being. Our food is flavorful, filling, and packed with
          nutrients your body needs.
        </p>
      </section>
    </div>
  );
};