// ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext.tsx";

const ProtectedRoute = ({ redirectPath = "/landing" }) => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
