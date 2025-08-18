import cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

export const ProtectedAdminRoute = ({ children }) => {
  const token = cookies.get("token");
  const decoded = jwtDecode(token);

  if (!token || decoded.role === "admin") {
    return <Navigate to="/login" />;
  }
  return children;
};
