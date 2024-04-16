import { Button, Navbar } from "flowbite-react";

const NavbarHeader = () => {
  return (
    <Navbar fluid rounded className="mt-5">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/image/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Looking Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Looking
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-customBlue enabled:hover:bg-customBackground mr-5"><p className="text-xl">Iniciar Sesión</p></Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link href="#" className=" enabled:hover:bg-customBlue text-xl">
          Inicio
        </Navbar.Link>
        <Navbar.Link href="#" className="  enabled:hover:bg-customBlue text-xl">Alojamientos</Navbar.Link>
        <Navbar.Link href="#" className=" enabled:hover:bg-customBlue text-xl">Explorar</Navbar.Link>
        <Navbar.Link href="#" className=" enabled:hover:bg-customBlue text-xl">Acerca de Nosotros</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;
