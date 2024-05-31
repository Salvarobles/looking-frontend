import { useEffect } from "react";
import { useAuthContext } from "../contexts/useAuthContext";
import { getAccount } from "../services/mainApi";
import Header from "../containers/Header";
import { Outlet } from "react-router-dom";
import FooterPage from "../containers/FooterPage";

const Layout = () => {
  const { login, account, logout } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const key = localStorage.getItem("looking");
      if (key !== null) {
        const data = await getAccount(key);
        login(data.account);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header account={account} logout={logout} />
        <div className="flex-grow">
          <Outlet />
        </div>
        <FooterPage />
      </div>
    </>
  );
};

export default Layout;
