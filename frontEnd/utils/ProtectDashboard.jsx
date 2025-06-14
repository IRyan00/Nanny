import { Navigate } from "react-router-dom";

const ProtectDashboard = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/" />;
};

export default ProtectDashboard;
