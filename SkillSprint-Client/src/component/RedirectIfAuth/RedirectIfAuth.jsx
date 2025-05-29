import React from "react";
import useUser from "../../hook/useUser";
import { Navigate } from "react-router-dom";

function RedirectIfAuth({ children }) {
  const { user } = useUser();

  return user ? <Navigate to="/" replace /> : children;
}

export default RedirectIfAuth;
