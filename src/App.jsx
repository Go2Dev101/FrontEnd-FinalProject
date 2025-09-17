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
import { MessageProvider } from "./context/MessageContext";
import { Home } from "./views/Home";
import { PaymentPage } from "./views/checkout/PaymentPage";
import { CheckoutProvider } from "./context/CheckoutContext";
import { ProtectedCheckoutRoute } from "./components/common/ProtectedCheckoutRoute";
import { OrderHistory } from "./views/OrderHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <MessageProvider>
          <CheckoutProvider>
            <Layout />
          </CheckoutProvider>
        </MessageProvider>
      </AuthProvider>
    ),

    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "ordersuccess",
        element: (
          <ProtectedCheckoutRoute requiredStep="ordersuccess">
            <OrderSuccess />
          </ProtectedCheckoutRoute>
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
          <ProtectedCheckoutRoute requiredStep="delivery">
            <DeliveryAddressForm />
          </ProtectedCheckoutRoute>
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
      {
        path: "payment",
        element: (
          <ProtectedCheckoutRoute requiredStep="payment">
            <PaymentPage />
          </ProtectedCheckoutRoute>
        ),
      },
      {
        path: "orderhistory",
        element: (
          <ProtectedRoute>
            <OrderHistory />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
