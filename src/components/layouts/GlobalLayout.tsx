import useCurrentPath from "@/hooks/useCurrentPath";
import { routes } from "@routes/constant";
import { useAppSelector } from "@store-redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface TPropsGlobalLayout {
  children: React.ReactNode;
}

const GlobalLayout = (props: TPropsGlobalLayout) => {
  const { children } = props;
  const { currentPath } = useCurrentPath();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (currentPath?.pathname === "/")
      navigate(
        (isAuthenticated
          ? routes.home.fullPath
          : routes?.exampleComponent?.fullPath) || "",
        { replace: true }
      );
  }, [currentPath]);

  return <>{children}</>;
};

export default GlobalLayout;
