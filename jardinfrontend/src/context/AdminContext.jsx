import React from "react";
import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const AdminContext = createContext();

function AdminProvider({ children }) {
  const [adminSession, setAdminSession] = useState(
    window.localStorage.getItem("adminSession") ?? false
  );

  const values = useMemo(
    () => ({
      adminSession,
      setAdminSession,
    }),
    [adminSession]
  );

  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
}

export default AdminProvider;

AdminProvider.protoTypes = {
  children: PropTypes.object,
};
