import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import Accommodation from "../pages/Accommodation";
import ListAccommodation from "../pages/ListAccommodation";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ShowAccommodation from "../pages/ShowAccommodation";
import ShowReservationClient from "../pages/ShowReservationClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/accomodation",
        element: <Accommodation />,
      },
      {
        path: "/accommodation/:id/:startDate/:endDate",
        element: <ShowAccommodation />,
      },
      {
        element: <ProtectedRouteAdmin redirect="" />,
        children: [
          { path: "/listaccommodations", element: <ListAccommodation /> },
        ],
      },
      {
        path: "/myreservationclient",
        element: <ShowReservationClient />,
      }
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
