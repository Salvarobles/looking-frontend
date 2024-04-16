import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      // {
      //   path: "/product/:id",
      //   element: <ProductPage />,
      // },
      // {
      //   element: <ProtectedRoute redirect="/loginPage" />,
      //   children: [
      //     { path: "/cart", element: <Cart /> },
      //     { path: "/user", element: <User /> },
      //   ],
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
