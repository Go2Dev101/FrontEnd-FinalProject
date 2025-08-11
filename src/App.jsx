import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Menu } from "./views/menu/Menu";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
