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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { getCartShippingFee } from "../../services/cartService.js";
import { editUserProfile } from "../../services/profileService.js";
import { useAuth } from "../../context/AuthContext.jsx";
import { toast } from "sonner";

const listPostalCode = [
  "10320",
  "10310",
  "10240",
  "10800",
  "10900",
  "10110",
  "10500",
  "10400",
  "10300",
  "10330",
  "10100",
  "10120",
  "10510",
  "10250",
  "10260",
  "10220",
  "10210",
  "10230",
  "10200",
  "10700",
  "10600",
  "10520",
  "10170",
  "10530",
  "10140",
  "10150",
  "10160",
];

export const DeliveryAddressForm = () => {
  const { user, setUser } = useAuth();

  const [edit, setEdit] = useState(false);

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

  useEffect(() => {
    const fetchTotal = async () => {
      if (!user?.address?.postalCode) 
        return;
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

    fetchTotal();
    setClient({
      firstName: user?.firstName,
      lastName: user?.lastName,
      phone: user?.phone,
      address: {
        streetAddress: user?.address?.streetAddress,
        subDistrict: user?.address?.subDistrict,
        district: user?.address?.district,
        postalCode: user?.address?.postalCode,
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

        <section id="main">
          <div className="flex flex-col gap-4 max-w-full mx-auto lg:gap-0 lg:flex-row lg:justify-center lg:px-10">
            <div id="leftBox" className="flex flex-col mx-auto">
              <div
                id="button"
                className="flex gap-4 mb-4 w-full flex-col items-center mx-auto min-w-124 md:flex-row"
              >
                {/* Delivery Address Button */}
                <h2 className=" rounded-3xl bg-primary-700  text-white font-bold text-center py-2 w-full md:py-3 md:text-xl lg:text-2xl  lg:px-3 lg:py-3">
                  Delivery Address
                </h2>
              </div>
              <div id="deliInfo" className="mx-auto w-full min-w-100">
                {/* Delivery Address Box */}
                <div
                  id="info"
                  className="bg-white flex mb-3 p-8 rounded-xl w-full mx-auto md:max-w-124 lg:max-w-154"
                >
                  <div className="flex flex-col max-w-full gap-6  text-md lg:text-2xl font-bold text-primary-700">
                    <p>
                      Name : {user?.firstName}&nbsp;&nbsp;&nbsp;
                      {user?.lastName}
                    </p>

                    <p>Tel : {user?.phone} </p>

                    <p>
                      Address : {user?.address?.streetAddress}&nbsp;
                      {user?.address?.subDistrict}&nbsp;
                      {user?.address?.district}
                      &nbsp;{user?.address?.postalCode}
                    </p>
                  </div>

                  <SquarePen
                    onClick={() => setEdit(true)}
                    className="ml-auto hover:text-primary-900 text-primary-700 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div id="rightBox" className="w-full lg:w-1/3 mx-auto">
              {/* Oder Total  */}
              <OrderTotal
                mode="delivery"
                data={summary}
                client={user?.address?.postalCode}
              />
            </div>
          </div>
        </section>
      </Boxer>
      {/* pop-up address  */}
      {edit && (
        <div className="h-screen w-full fixed top-0 left-0 bg-black/80 z-60 overscroll-none flex justify-center items-center">
          <Card className="w-full max-w-sm p-3">
            <CardHeader className="flex justify-between">
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
                        list="postalCodes"
                        value={client.address.postalCode}
                        onChange={handleChangeAddress}
                        name="postalCode"
                        type="text"
                        required
                        maxLength={5}
                        pattern="1\d{4}"
                      />
                      <datalist id="postalCodes">
                        {listPostalCode.map((postal) => (
                          <option value={postal} />
                        ))}
                      </datalist>
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
