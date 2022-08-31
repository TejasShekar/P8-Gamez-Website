import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";

export const RequireAuth = () => {
  const {
    authState: { isAuth },
  } = useAuth();
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};
