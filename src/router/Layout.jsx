import { useEffect } from "react";
import { useAuthContext } from "../contexts/useAuthContext";
import { getAccount } from "../services/mainApi";
import Header from "../containers/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "flowbite-react";

const Layout = () => {
  const { login } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const key = localStorage.getItem("looking");
      if (key !== null) {
        const data = await getAccount(key);
        console.log(data);
        login(data.account);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
