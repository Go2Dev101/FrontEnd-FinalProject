import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }
  return user ? children : <Navigate to="/login" state={{ from: location }} />;
};
