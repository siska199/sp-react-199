import { routes } from "@routes/constant";
import { useAppSelector } from "@store-redux/store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protectedlayout = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated)
      navigate(routes?.auth?.child?.signIn?.fullPath || "", { replace: true });
  }, []);

  return (
    <main className="w-full  flex  max-h-screen relative ">
      <Outlet />
    </main>
  );
};

export default Protectedlayout;
