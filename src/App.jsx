import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MenuSet } from "./views/menu/MenuSet";
import { OrderSuccess } from "./views/checkout/OrderSuccess";
import { Home } from "./views/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        // element: <Home />,
        element:<MenuSet />,
      },
      {
        path:"menu",
        element:<MenuSet />,
      },
      {
        path:"contact",
        element:<MenuSet />,
      },
      {
        path:"cart",
        element:<MenuSet />,
      },
      {
        path:"profile",
        element:<OrderSuccess />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
