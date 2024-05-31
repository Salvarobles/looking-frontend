import { Modal } from "flowbite-react";
import React from "react";
import { useAuthContext } from "../../contexts/useAuthContext";

const ModalWelcome = (props) => {
  const { openModal, openModalWelcome, closeModalWelcome } = useAuthContext();

  return (
    <div>
      <Modal
        show={openModal}
        position={"center"}
        onClose={() => closeModalWelcome()}
      >
        <Modal.Header>Bienvenido/a a Looking</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              ¡Bienvenido/a a Looking, tu plataforma ficticia de reservas de
              hoteles!
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Looking es un proyecto académico diseñado para simular una
              experiencia de reserva de hoteles en línea. Aunque es ficticio,
              ofrece una visión completa de cómo funcionaría una plataforma de
              este tipo. Aquí tienes un breve resumen de lo que puedes explorar:
            </p>
            <ul className="list-disc list-inside text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <li>
                Buscar y reservar habitaciones en una amplia variedad de
                hoteles.
              </li>
              <li>Filtrar resultados por fecha y ciudad.</li>
              <li>Leer y dejar comentarios sobre tus estancias.</li>
              <li>
                Crear una cuenta de usuario para gestionar tus reservas y
                comentarios.
              </li>
              <li>
                Registrar tu alojamiento y recibir reservas directamente desde
                nuestra plataforma.
              </li>
            </ul>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Este proyecto tiene como objetivo proporcionar una experiencia
              educativa en la creación y gestión de una plataforma de reservas
              de hoteles. ¡Esperamos que disfrutes explorando todas sus
              funcionalidades!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => closeModalWelcome()}
            className="text-white bg-customBlue hover:bg-customBackground focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-customBlue dark:hover:bg-customBlue dark:focus:bg-customBlue"
          >
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalWelcome;
