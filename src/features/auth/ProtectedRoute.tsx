import { Navigate } from "react-router-dom";
import { useAuthHook } from "./hook";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { user } = useAuthHook();
  const authToken = localStorage.getItem("authToken");

  console.log(authToken, "authToken");
  if (!authToken && !user) {
    // user is not authenticated
    return <Navigate to="/abc" />;
  }
  return children;
};
