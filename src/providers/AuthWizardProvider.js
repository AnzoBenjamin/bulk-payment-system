import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthWizardContext = createContext({ user: {}, accessToken: "" });

const AuthWizardProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [step, setStep] = useState(1);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  // const value = { user, setUser, step, setStep };
  const value = {
    user,
    setUser,
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
  };
  return (
    <AuthWizardContext.Provider value={value}>
      {children}
    </AuthWizardContext.Provider>
  );
};

AuthWizardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuthWizardContext = () => useContext(AuthWizardContext);

export default AuthWizardProvider;
