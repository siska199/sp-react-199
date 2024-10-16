import ExampleComponentPage from "@pages/example-component/example-component";
import { routes } from "@routes/constant";
import { RouteObject } from "react-router-dom";

const exampleComponentRoute: RouteObject[] = [
  {
    path: routes?.exampleComponent?.name,
    element: <ExampleComponentPage />,
    handle: {
      ...routes.exampleComponent,
    },
  },
];

export default exampleComponentRoute;
