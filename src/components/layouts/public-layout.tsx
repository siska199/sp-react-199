import useCurrentPath from "@hooks/use-current-path";
import { routes } from "@routes/constant";
import { useAppSelector } from "@store-redux/store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PublicLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const {
    currentPath: { handle },
  } = useCurrentPath();

  useEffect(() => {
    if (isAuthenticated && !handle?.isOpenRoute)
      navigate(routes.home.fullPath, { replace: true });
  }, [isAuthenticated]);

  return (
    <div className={` h-screen  relative  w-full`}>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
