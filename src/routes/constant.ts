interface RouteComponent {
  publicNavbar?: boolean;
}

export interface TRoute {
  name: string;
  fullPath: string;
  isPrivate?: boolean;
  isOpenRoute?: boolean;
  component?: RouteComponent;
  child?: {
    [key: string]: TRoute;
  };
}

const route = {
  auth: {
    name: "auth",
    fullPath: "/auth",
    child: {
      signIn: {
        name: "sign-in",
        fullPath: "/auth/sign-in",
        isPrivate: false,
      },
      signUp: {
        name: "sign-up",
        fullPath: "/auth/sign-up",
        isPrivate: false,
      },
    },
  },
  home: {
    name: "home",
    fullPath: "/home",
    isPrivate: true,
  },
  exampleComponent: {
    name: "example-component",
    fullPath: "/example-component",
    isPublic: true,
  },
} as const;

export type TRoutes = {
  [K in keyof typeof route]: TRoute;
};

export const routes: TRoutes = route;
