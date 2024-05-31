import { Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/useAuthContext";
import ErrorPage from "../pages/ErrorPage";

const ProtectedRouteAdmin = () => {
  const { account } = useAuthContext();

  // Si el usuario está autenticado y es un administrador, renderiza el Outlet
  return account && account.rol.includes("ROLE_ADMIN") ? <Outlet /> : <ErrorPage />;
};

export default ProtectedRouteAdmin;
