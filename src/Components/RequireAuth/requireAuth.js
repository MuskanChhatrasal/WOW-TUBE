import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

export const RequireAuth = () => {
  const location = useLocation();

  const { authData } = useAuth();
  const userID = authData._id;

  return userID ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
