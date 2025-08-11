import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MenuSet } from "./views/menu/MenuSet";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <MenuSet />,
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
        element:<MenuSet />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
