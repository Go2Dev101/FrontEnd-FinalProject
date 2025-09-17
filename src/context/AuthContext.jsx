import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";
import { getUserProfile } from "../services/profileService.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isFirstRun = useRef(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile();
        setUser(response.user);
      } catch (err) {
        if (isFirstRun.current) {
          isFirstRun.current = false;
        } else {
          console.error("Not authenticated:", err);
        }
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const logout = async () => {
    try {
      await api.post("/api/user/logout");
      setUser(null);

      // Clear localStorage token on logout
      localStorage.removeItem("authToken");
      navigate("/login");
    } catch (err) {
      if (err.response.data.message === "Authentication token missing!") {
        setUser(null);

        // Clear localStorage token on logout
        localStorage.removeItem("authToken");
        navigate("/login");
      }
      console.error("Logout failed:", err);
    }
  };
  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }
  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, loading, isFirstRun }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
