import GlobalLayout from "@components/layouts/global-layout";
import PublicLayout from "@components/layouts/public-layout";
import exampleComponentRoute from "@routes/public/example-component-route";
import React from "react";
import { RouteObject } from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <React.Suspense fallback={"Loading..."}>
        <GlobalLayout>
          <PublicLayout />
        </GlobalLayout>
      </React.Suspense>
    ),
    children: [...exampleComponentRoute],
  },
];

export default publicRoutes;
