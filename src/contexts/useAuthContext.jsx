import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [rememberMe, setRememberMe] = useState();
  const [openModal, setOpenModal] = useState(true);

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

  const closeModalWelcome = () => {
    setOpenModal(false);
    localStorage.setItem("modalShown", "false");
  };

  const openModalWelcome = () => {
    setOpenModal(true);
    localStorage.setItem("modalShown", "true");
  };

  return (
    <AuthContext.Provider
      value={{
        account,
        rememberMe,
        setRememberMe,
        login,
        logout,
        openModal,
        openModalWelcome,
        closeModalWelcome,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
