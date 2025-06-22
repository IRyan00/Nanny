import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const ProtectDashboard = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await api.get("/api/auth/check-admin");
        setIsAuthorized(response.status === 200);
      } catch (error) {
        setIsAuthorized(false);
      }
    };

    checkAdmin();
  }, []);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/" />;
};

export default ProtectDashboard;
