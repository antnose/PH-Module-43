import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Users from "./Components/Users/Users.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "mobiles",
        Component: Mobiles,
      },
      {
        path: "laptops",
        Component: Laptops,
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: `user/:userId`,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
