import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MenuSet } from "./views/menu/MenuSet";
import { OrderSuccess } from "./views/checkout/OrderSuccess";
import { MenuSetDetail } from "./views/menu/MenuSetDetail";
import { OrderSummary } from "./views/checkout/OrderSummary";
import { DeliveryAddressForm } from "./views/checkout/DeliveryAddressForm";
import { Login } from "./views/Authentication/Login";
import { Signup } from "./views/Authentication/Signup";
import { ProtectedRoute } from "./router/ProtectedRoute";
// import { Home } from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen bg-background-100 flex justify-center items-center">
        <h1 className="text-7xl font-bold">404 - Page Not Found 👨🏻‍🔧👨🏻‍🔧</h1>
      </div>
    ),
    children: [
      {
        path: "/",
        // element: <Home />,
        element: <MenuSet />,
      },
      {
        path: "menuset",
        element: <MenuSet />,
      },
      {
        path: "menuset/:menuSetId",
        element: <MenuSetDetail />,
      },
      {
        path: "contact",
        element: <DeliveryAddressForm />,
      },
      {
        path: "cart",
        element: <MenuSet />,
      },
      {
        path: "profile",
        element: <OrderSuccess />,
      },
      {
        path: "ordersummary",
        element: (
          <ProtectedRoute>
            <OrderSummary />
          </ProtectedRoute>
        ),
      },
      {
        path: "delivery",
        element: <DeliveryAddressForm />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
