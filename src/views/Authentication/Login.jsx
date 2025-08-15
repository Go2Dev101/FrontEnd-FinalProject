import { useState } from "react";
import { BoxerAuth } from "../../components/BoxerAuth";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };
  console.log(login);
  return (
    <BoxerAuth>
      <Card className="py-18 px-6 text-primary-900 max-w-124 w-full bg-background-50">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center w-full"
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
            <input placeholder="" />
          </label>
          <label className="w-full">
            <p className="font-medium">Password</p>
            <Input
              onChange={handleChange}
              type="password"
              name="password"
              value={login.password}
              placeholder="Enter your password"
              minlength="8"
              required
            />
          </label>
          <Button type="submit" size="md" className="w-fit px-8 mt-8">
            Login
          </Button>
        </form>
      </Card>
    </BoxerAuth>
  );
};
