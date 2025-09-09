import { Link } from "react-router-dom";
import { Boxer } from "../../components/Boxer";
import { SquarePen } from "lucide-react";
import { ProgressBar } from "../../components/cart/ProgressBar";
import { CheckOutHeader } from "../../components/cart/CheckOutHeader";
import { Button } from "@/components/ui/button";
import { OrderTotal } from "../../components/cart/OrderTotal";
import { useEffect, useState } from "react";
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
import { getCartShippingFee } from "../../services/cartService.js";
import { editUserProfile } from "../../services/profileService.js";
import { useAuth } from "../../context/AuthContext.jsx";
import { toast } from "sonner";

const pickUpPoints = [
  "Chula Hospital",
  "Triam Udom Suksa School",
  "The Tree Condo",
  "MRT Samyan",
  "The One Building",
];

export const DeliveryAddressForm = () => {
  const { user, setUser } = useAuth();
  const [edit, setEdit] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [client, setClient] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phone: user?.phone || "",
    address: {
      streetAddress: user?.address?.streetAddress || "",
      subDistrict: user?.address?.subDistrict || "",
      district: user?.address?.district || "",
      postalCode: user?.address?.postalCode || "",
    },
  });
  const [summary, setSummary] = useState();
  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleChangeAddress = (e) => {
    setClient({
      ...client,
      address: {
        ...client.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await editUserProfile(user._id, client);
      setUser(res.user);
      // Reset the form

      setEdit(false);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  const fetchTotal = async () => {
    try {
      const res = await getCartShippingFee();
      setSummary(res.summary);
    } catch (error) {
      if (error.response.data.message === "Shipping zone not found!") {
        toast(error.response.data.message);
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchTotal();
    setClient({
      firstName: user?.firstName,
      lastName: user?.lastName,
      phone: user?.phone,
      address: {
        streetAddress: user.address?.streetAddress,
        subDistrict: user.address?.subDistrict,
        district: user.address?.district,
        postalCode: user.address?.postalCode,
      },
    });
  }, [user]);


  return (
    <>
      <Boxer>
        <section className="flex justify-between">
          <CheckOutHeader
            header={"Delivery Address"}
            title={"Please fill out your address"}
          />
          <ProgressBar path={"payment"} />
        </section>

        <section className="flex flex-1/2 justify-between gap-10  ">
          <div className="flex-1/2 max-w-164 ">
            <div className="flex flex-col">
              <div className="space-x-4 flex justify-between mb-6">
                <Button
                  size={"sm"}
                  className="max-w-75 w-full"
                  onClick={() => {
                    setIsShow(true);
                  }}
                >
                  Delivery Address
                </Button>
                <Button
                  size={"sm"}
                  className="max-w-75 w-full bg-white text-primary-700 hover:bg-gray-100/80"
                  onClick={() => {
                    setIsShow(false);
                  }}
                >
                  Pickup Point
                </Button>
              </div>
              {/* Delivery Address Button */}
              {isShow ? (
                <div className=" bg-white flex flex-col mb-3 p-8 rounded-xl">
                  <div className="flex justify-between gap-6 text-2xl font-bold text-primary-700">
                    <p>
                      Name : {user?.firstName}&nbsp;&nbsp;&nbsp;{user?.lastName}
                    </p>
                    {/* </div> */}
                    <p>Tel :{user?.phone} </p>
                  </div>
                  <p className="text-xl text-primary-700">
                    Address: {user?.address?.streetAddress}&nbsp;
                    {user?.address?.subDistrict}&nbsp;{user?.address?.district}
                    &nbsp;{user?.address?.postalCode}
                  </p>

                  <SquarePen
                    onClick={() => setEdit(true)}
                    className="ml-auto hover:text-primary-900 text-primary-700"
                  />
                </div>
              ) : (
                <></>
              )}
              {/* Pick up point Button */}
              {!isShow ? (
                <div className=" bg-white flex flex-col mb-3 p-8 rounded-xl">
                  <div className="flex flex-col justify-between gap-6 text-2xl font-bold text-primary-700">
                    <p>Select Pickup Point</p>
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
              ) : (
                <></>
              )}
            </div>
          </div>
          <OrderTotal mode="delivery" data={summary} />
        </section>
      </Boxer>
      {/* pop-up address  */}
      {edit && (
        <div className="h-screen w-full fixed top-0 left-0 bg-black/80 z-60 overscroll-none flex justify-center items-center">
          <Card className="w-full max-w-sm p-3">
            <CardHeader>
              <CardTitle className="text-2xl">Edit Delivery Address</CardTitle>
              <CardAction>
                <X onClick={() => setEdit(false)} className="cursor-pointer" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <label>
                      <p>First Name</p>
                      <Input
                        value={client.firstName}
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        placeholder="Enter Your First Name"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label>
                      <p>Last Name</p>
                      <Input
                        value={client.lastName}
                        onChange={handleChange}
                        name="lastName"
                        type="text"
                        placeholder="Enter Your Last Name"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label>
                      <p>Street Address</p>
                      <Input
                        value={client.address.streetAddress}
                        onChange={handleChangeAddress}
                        name="streetAddress"
                        type="text"
                        placeholder="House Number and street name"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label>
                      <p>Subdistrict</p>
                      <Input
                        value={client.address.subDistrict}
                        onChange={handleChangeAddress}
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
                        value={client.address.district}
                        onChange={handleChangeAddress}
                        name="district"
                        type="text"
                        required
                      />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label>
                      <p>Postal Code</p>
                      <Input
                        value={client.address.postalCode}
                        onChange={handleChangeAddress}
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
                        value={client.phone}
                        onChange={handleChange}
                        name="phone"
                        type="tel"
                        required
                        placeholder="0812345678"
                        maxLength={10}
                        pattern="0\d{9}"
                      />
                    </label>
                  </div>
                </div>
                <Button type="submit" className="w-full ">
                  Save
                </Button>
              </form>
              <Button
                onClick={() => {
                  setEdit(false);
                }}
                variant="outline"
                className="w-full"
              >
                Back
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
