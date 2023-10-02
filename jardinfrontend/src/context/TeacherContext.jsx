import React from "react";
import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const TeacherContext = createContext();

function TeacherProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user")) ?? null
  );
  const [session, setSession] = useState(
    window.localStorage.getItem("session") ?? false
  );

  const values = useMemo(
    () => ({
      user,
      session,
      setUser,
      setSession,
    }),
    [user, session]
  );

  return <TeacherContext.Provider value={values}>{children}</TeacherContext.Provider>;
}

export default TeacherProvider;

TeacherProvider.protoTypes = {
  children: PropTypes.object,
};
