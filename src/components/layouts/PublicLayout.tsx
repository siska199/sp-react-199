import useCurrentPath from "@hooks/useCurrentPath";
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
    <div className={`bg-sport-plain h-screen  relative  w-full`}>
      <div
        className={`absolute top-0 bg-glassmorphism text-white h-full w-full`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
