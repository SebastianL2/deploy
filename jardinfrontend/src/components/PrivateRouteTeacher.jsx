import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TeacherContext } from "../context/TeacherContext";

const PrivateRouteUser = ({ children }) => {
  const { session } = useContext(TeacherContext);

  if (session) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRouteUser;
