import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_IMG_URL;

/**
 * Componente NavbarHeader para la cabecera de la barra de navegación.
 * @param {Object} props - Las propiedades pasadas al componente.
 * @param {Object} props.account - Información de la cuenta del usuario.
 * @param {function} props.logout - Función para cerrar sesión.
 * @returns {JSX.Element} - El JSX del componente NavbarHeader.
 */

const NavbarHeader = ({ account, logout }) => {
  let img;
  if (account) {
    img = account.avatar ? apiUrl + "/avatar/" + account.avatar : null;
    if (account.img) {
      img = account.img[0] ? apiUrl + "/accommodation/" + account.img[0] : null;
    }
  }

  return (
    <Navbar fluid rounded className="mt-5">
      <Link to={"/"} className="flex flex-row justify-center">
        <img
          src="/image/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Looking Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Looking
        </span>
      </Link>
      <div className="flex md:order-2">
        {account ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={img} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{account.name}</span>
                <span className="block truncate text-sm font-medium">
                  {account.email}
                </span>
              </Dropdown.Header>
              {account.rol.includes("ROLE_USER") &&
                !account.rol.includes("ROLE_ADMIN") && (
                  <>
                    <Link to={"/myreservationclient"}>
                      <Dropdown.Item>Mis Reservas</Dropdown.Item>
                    </Link>
                    <Dropdown.Item>Configuracion</Dropdown.Item>
                  </>
                )}
              {account.rol.includes("ROLE_ADMIN") && (
                <>
                  <Link to={"/listaccommodations"}>
                    <Dropdown.Item>Listado de Empresas</Dropdown.Item>
                  </Link>
                  <Dropdown.Item>Configuracion</Dropdown.Item>
                </>
              )}

              {account.rol.includes("ROLE_ACCOMMODATION") && (
                <>
                  <Dropdown.Item>Listado de Reseñas</Dropdown.Item>
                  <Dropdown.Item>Configuracion</Dropdown.Item>
                </>
              )}
              <Dropdown.Divider />
              <Dropdown.Item>
                <button onClick={logout}>Cerrar Sesión</button>
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button className="bg-customBlue enabled:hover:bg-customBackground mr-5">
                <p className="text-lg">Iniciar Sesión</p>
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button className="bg-customBlue enabled:hover:bg-customBackground mr-5">
                <p className="text-lg">Registrarse</p>
              </Button>
            </Link>
          </>
        )}
      </div>
      <Navbar.Collapse>
        <Link to={"/"} className=" hover:text-customBlue text-xl">
          Inicio
        </Link>
        <Link to={"/accomodation"} className="hover:text-customBlue text-xl">
          Alojamientos
        </Link>

        <Link to={"/explore"} className="hover:text-customBlue text-xl">
          Explorar
        </Link>
        <Link to={"/aboutus"} className="hover:text-customBlue text-xl">
          Acerca de Nosotros
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;
