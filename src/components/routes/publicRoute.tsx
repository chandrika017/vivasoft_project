import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }: any) {
  const isLoggedIn = useAuth();

  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
}
