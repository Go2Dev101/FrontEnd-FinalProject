import { useState } from "react";
import { BoxerAuth } from "../../components/BoxerAuth";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Info } from "lucide-react";
// import { toast } from "sonner"
// import axios from "axios";

export const Signup = () => {
  const [signup, setSignup] = useState({
    fristname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();

    if (signup.password !== signup.confirmPassowrd) {
      return setErrorMessage("Passwords do not match");
    }
    const { confirmPassowrd, ...signupData } = signup;

    // const respon = await axios.post(`http://localhost:3000/api/user/signup`, signupData);
    // console.log(respon);
    // toast(respon.data)
  };

  return (
    <BoxerAuth>
      <Card className="py-18 px-6 text-primary-900 max-w-124 w-full bg-background-50">
        <h1 className="text-3xl font-bold text-center">Create Your Account</h1>
        <form
          onSubmit={handleSignup}
          className="flex flex-col max-w-103 w-full gap-4 mx-auto"
        >
          <label className="w-full">
            <p className="font-medium">Frist Name</p>
            <Input
              onChange={handleChange}
              type="text"
              name="fristname"
              value={signup.fristname}
              placeholder="your first name"
              required
            />
          </label>
          <label className="w-full">
            <p className="font-medium">Last Name</p>
            <Input
              onChange={handleChange}
              type="text"
              name="lastname"
              value={signup.lastname}
              placeholder="your last name"
              required
            />
          </label>
          <label className="w-full">
            <p className="font-medium">Email</p>
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              value={signup.email}
              placeholder="example@example.com"
              required
            />
          </label>
          <label className="w-full">
            <p className="font-medium">Password</p>
            <Input
              onChange={handleChange}
              type="password"
              name="password"
              value={signup.password}
              placeholder="enter your password"
              minLength="8"
              required
            />
          </label>
          <label className="w-full">
            <p className="font-medium">Confirm Password</p>
            <Input
              onChange={handleChange}
              type="password"
              name="confirmPassowrd"
              value={signup.confirmPassowrd}
              placeholder="confirm your password"
              minLength="8"
              required
            />
          </label>

          {/* Show error message */}
          {errorMessage && (
            <div className="text-red-500 text-sm flex items-center gap-1">
              <Info size={16} />
              <p>{errorMessage}</p>
            </div>
          )}

          <Button
            type="submit"
            size="md"
            className={`w-fit px-8 mt-4 mx-auto ${
              // Check if any field in signup is empty
              Object.values(signup).some((value) => value.trim() === "") &&
              "bg-primary-700/60 pointer-events-none"
            }`}
          >
            Sign up
          </Button>
        </form>
      </Card>
    </BoxerAuth>
  );
};
