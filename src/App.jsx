import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MenuSet } from "./views/menu/MenuSet";
import { Home } from "./views/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
<<<<<<< HEAD
        // element: <Home />,
        element:<MenuSet />,
=======
        element: <MenuSet />,
>>>>>>> develop
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
