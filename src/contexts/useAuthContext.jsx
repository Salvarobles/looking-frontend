import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [rememberMe, setRememberMe] = useState();

  const login = (account, rememberMe) => {
    setAccount(account);

    if (rememberMe) {
      localStorage.setItem("looking", account.email);
    }
  };

  const logout = () => {
    setAccount("");
    localStorage.removeItem("looking");
  };

  return (
    <AuthContext.Provider
      value={{ account, rememberMe, setRememberMe, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
