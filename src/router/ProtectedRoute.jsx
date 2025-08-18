import cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const token = cookies.get('token')
    if (!token) {
        return <Navigate to="/login"/>
    }
  return children;
};
