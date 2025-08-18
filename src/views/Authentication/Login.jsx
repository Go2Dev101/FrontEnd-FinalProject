import { useState } from "react";
import { BoxerAuth } from "../../components/BoxerAuth";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
// import { toast } from "sonner"
// import axios from "axios";

export const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    // const respon = await axios.post(`http://localhost:3000/api/user/login`, login);
    // console.log(respon);
    // toast(respon.data.message || respon.data);
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
              minLength="8"
              required
            />
          </label>
          <Button
            type="submit"
            size="md"
            className={`w-fit px-8 mt-8 mx-auto ${
              Object.values(login).some((value) => value.trim() === "") &&
              "bg-primary-700/60 pointer-events-none"
            }`}
          >
            Login
          </Button>
        </form>
      </Card>
    </BoxerAuth>
  );
};
