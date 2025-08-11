import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import  Menu  from "./views/menu/Menu";
import { Home } from "./views/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"menu",
        element:<Menu />,
      },
      {
        path:"contact",
        element:<Menu />,
      },
      {
        path:"cart",
        element:<Menu />,
      },
      {
        path:"profile",
        element:<Menu />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
