import GlobalLayout from "@components/layouts/global-layout";
import Protectedlayout from "@components/layouts/protected-layout";
import homeRoute from "@routes/protected/home-route";
import React from "react";
import { RouteObject } from "react-router-dom";

const protectedRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <React.Suspense fallback={"Loading..."}>
        <GlobalLayout>
          <Protectedlayout />
        </GlobalLayout>
      </React.Suspense>
    ),
    children: [...homeRoute],
  },
];

export default protectedRoutes;
