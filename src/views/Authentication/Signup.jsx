import { useState } from "react";
import { BoxerAuth } from "../../components/BoxerAuth";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Info } from "lucide-react";
import { signupUser } from "../../services/authService.js";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassoword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signup.password !== signup.confirmPassoword) {
      return setErrorMessage("Passwords do not match");
    }
    const { confirmPassoword, ...signupData } = signup;
    setLoading(true);
    try {
      const respon = await signupUser(signupData);
      toast(respon.message, {
            duration: 1000,
          });

      setErrorMessage("");

      setSignup({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassoword: "",
      });
      navigate("/login");
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err?.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
            <p className="font-medium">First Name</p>
            <Input
              onChange={handleChange}
              type="text"
              name="firstName"
              value={signup.firstName}
              placeholder="your first name"
              required
            />
          </label>
          <label className="w-full">
            <p className="font-medium">Last Name</p>
            <Input
              onChange={handleChange}
              type="text"
              name="lastName"
              value={signup.lastName}
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
              name="confirmPassoword"
              value={signup.confirmPassoword}
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
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
      </Card>
      <p className="text-primary-900 p-4 text-end max-w-124 w-full">
        Already have an account?{" "}
        <Link to="/login" className="hover:underline cursor-pointer">
          Log in
        </Link>
      </p>
    </BoxerAuth>
  );
};
