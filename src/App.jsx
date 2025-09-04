import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MenuSet } from "./views/menu/MenuSet";
import { OrderSuccess } from "./views/checkout/OrderSuccess";
import { MenuSetDetail } from "./views/menu/MenuSetDetail";
import { OrderSummary } from "./views/checkout/OrderSummary";
import { DeliveryAddressForm } from "./views/checkout/DeliveryAddressForm";
import { Login } from "./views/Authentication/Login";
import { AdminDashboard } from "./views/admin/AdminDashboard";
import { AdminNavbar } from "./views/admin/AdminNavbar";
import { Signup } from "./views/Authentication/Signup";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/common/ProtectedRoute";
import { PageNotFound } from "./components/common/PageNotFound";
// import { Home } from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    errorElement: (
      <div className="min-h-screen bg-background-100 flex justify-center items-center">
        <h1 className="text-7xl font-bold">404 - Page Not Found 👨🏻‍🔧👨🏻‍🔧</h1>
      </div>
    ),
    errorElement: <PageNotFound />,
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
        path: "menuset/:menuSlug",
        element: <MenuSetDetail />,
      },
      {
        path: "contact",
        element: <DeliveryAddressForm />,
      },
      {
        path: "profile",
        // element: <OrderSuccess />,
        element: (
          <div className="flex">
            <AdminNavbar />
            <AdminDashboard />
          </div>
        ),
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
        element: (
<<<<<<< HEAD
          // <ProtectedRoute>
          <DeliveryAddressForm />
          // </ProtectedRoute>
=======
          <ProtectedRoute>
            <DeliveryAddressForm />
          </ProtectedRoute>
>>>>>>> refs/remotes/origin/main
        ),
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
