import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  let location = useLocation();
  const adminLogIn = localStorage.getItem("AdminLogIn");
  console.log(user.email);
  if (user.email && adminLogIn) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
