import { Navigate } from "react-router-dom";
import { useAuthHook } from "./hook";
import FullPageLoader from "../../Components/Loaders/FullPageLoader";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { user, loading } = useAuthHook();
  const authToken = localStorage.getItem("authToken");

  if (loading) return <FullPageLoader />;
  if (!authToken && !user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
