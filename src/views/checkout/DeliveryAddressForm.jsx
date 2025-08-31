import { Link } from "react-router-dom";
import { Boxer } from "../../components/Boxer";
import { SquarePen } from "lucide-react";
import { ProgressBar } from "../../components/ProgressBar";
import { CheckOutHeader } from "../../components/CheckOutHeader";
import { Button } from "@/components/ui/button";
import { OrderTotal } from "../../components/OrderTotal";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const pickUpPoints = [
  "Chula Hospital",
  "Udom Suksa School",
  "The Tree Condo",
  "MRT Samyan",
  "The One Building",
];
export const DeliveryAddressForm = () => {
  const [edit, setEdit] = useState(true);
  const [user, setUser] = useState({
    streetAddress: "",
    subDistrict: "",
    district: "",
    postalCode: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(API, user);
  //     await fetchUsers();
  //     // Reset the form
  //     setUser({
  //       streetAddress: "",
  //       subDistrict: "",
  //       district: "",
  //       postalCode: "",
  //       phoneNumber: "",
  //     });
  //   } catch (error) {
  //     console.error("Error creating user:", error);
  //   }
  // };
  return (
    <>
      <Boxer>
        <section className="flex justify-between">
          <CheckOutHeader
            header={"Delivery Address"}
            title={"Please fill out your address"}
          />
          <ProgressBar path={"ordersummary"} />
        </section>

        <section className="flex flex-1/2 justify-between gap-10  ">
          <div className="flex-1/2 max-w-164 ">
            <div className="flex flex-col">
              <div className="space-x-4 flex justify-between mb-6">
                <Button size={"sm"} className="max-w-75 w-full">
                  Delivery Address
                </Button>
                <Button
                  size={"sm"}
                  className="max-w-75 w-full bg-white text-primary-700 hover:bg-gray-100/80"
                >
                  Pickup Point
                </Button>
              </div>
              <div className=" bg-white flex flex-col mb-3 p-8 rounded-xl">
                <div className="flex justify-between gap-6 text-2xl font-bold text-primary-700">
                  <p>Name</p>
                  <p>Tel :091-234-5678 </p>
                </div>
                <p className="text-xl text-primary-700">55</p>

                <SquarePen
                  onClick={() => setEdit(true)}
                  className="ml-auto hover:text-primary-900 text-primary-700"
                />
              </div>
              /* Pick up point */
              <div className=" bg-white flex flex-col mb-3 p-8 rounded-xl">
                <div className="flex flex-col justify-between gap-6 text-2xl font-bold text-primary-700">
                  <p>Select 1 Pickup Point</p>
                  <div className="flex gap-3 flex-wrap sm:">
                    {pickUpPoints.map((point, index) => (
                      <Button
                        key={index}
                        className="max-w-75 w-full bg-white text-primary-700 hover:bg-gray-100/80"
                      >
                        {point}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OrderTotal />
        </section>
      </Boxer>
      {/* pop-up address */}
      {edit && (
        <div className="h-screen w-full fixed top-0 left-0 bg-black/80 z-60 overscroll-none flex justify-center items-center">
          <Card className="w-full max-w-sm p-3">
            <CardHeader>
              <CardTitle className="text-2xl">Edit Delivery Address</CardTitle>
              {/* <CardDescription>
                Enter your email below to login to your account
              </CardDescription> */}
              <CardAction>
                <X onClick={() => setEdit(false)} className="cursor-pointer" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <label>
                      <p>Street address</p>
                      <Input
                        onChange={handleChange}
                        value={user.streetAddress}
                        name="streetAddress"
                        type="text"
                        placeholder="House Number and street name"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label>
                      <p>Sub-District</p>
                      <Input
                        onChange={handleChange}
                        value={user.subDistrict}
                        name="subDistrict"
                        type="text"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label>
                      <p>District</p>
                      <Input
                        onChange={handleChange}
                        value={user.district}
                        name="district"
                        type="text"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label>
                      <p>Postal code</p>
                      <Input
                        onChange={handleChange}
                        value={user.postalCode}
                        name="postalCode"
                        type="text"
                        required
                        maxLength={5}
                        pattern="1\d{4}"
                      />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label>
                      <p>Phone Number</p>
                      <Input
                        onChange={handleChange}
                        value={user.phoneNumber}
                        name="phoneNumber"
                        type="tel"
                        required
                        placeholder="0812345678"
                        maxLength={10}
                        pattern="0\d{9}"
                      />
                    </label>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Save
              </Button>
              <Button variant="outline" className="w-full">
                Back
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};
