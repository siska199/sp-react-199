import HomePage from "@pages/home/home";
import { routes } from "@routes/constant";
import { RouteObject } from "react-router-dom";

const homeRoute: RouteObject[] = [
  {
    path: routes?.home?.fullPath,
    element: <HomePage />,
    handle: {
      ...routes.home,
    },
  },
];

export default homeRoute;
