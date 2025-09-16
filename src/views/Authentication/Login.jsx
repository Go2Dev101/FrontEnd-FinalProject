import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Info } from "lucide-react";

import { BoxerAuth } from "../../components/BoxerAuth";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";
import { loginUser } from "../../services/authService.js";
import { useAuth } from "../../context/AuthContext.jsx";

export const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || "/";

  const [login, setLogin] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const respon = await loginUser(login);
      toast(respon.message, {
            duration: 1000,
          });
      setUser(respon.user);

      setErrorMessage("");

      setLogin({
        email: "",
        password: "",
      });
      navigate(fromPath);
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err?.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <BoxerAuth>
      <Card className="py-18 px-6 text-primary-900 max-w-124 w-full bg-background-50">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col max-w-103 w-full gap-4 mx-auto"
        >
          <label className="w-full">
            <p className="font-medium">Email</p>
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              value={login.email}
              placeholder="example@example.com"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
          </label>
          <label className="w-full">
            <p className="font-medium">Password</p>
            <Input
              onChange={handleChange}
              type="password"
              name="password"
              value={login.password}
              placeholder="Enter your password"
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
            className={`w-fit px-8 mt-8 mx-auto ${
              Object.values(login).some((value) => value.trim() === "") &&
              "bg-primary-700/60 pointer-events-none"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>

      <p className="text-primary-900 p-4 text-end max-w-124 w-full">
        Don't have an account?{" "}
        <Link to="/signup" className="hover:underline cursor-pointer">
          Sign up
        </Link>
      </p>
    </BoxerAuth>
  );
};
