import { Button, Table } from "flowbite-react";
import GetHour from "../../helper/GetHour";
import { useState } from "react";
import ModalImage from "../Modal/ModalImage";

const TableBody = ({ accommodations, handleAcceptedAccommodation }) => {
  const [openModal, setOpenModal] = useState(false);

  const openImageModal = (accommodationId) => {
    setOpenModal(accommodationId); // Establecer el ID del alojamiento para abrir su modal
  };

  const closeModal = () => {
    setOpenModal(null); // Cerrar cualquier modal abierto
  };

  return (
    <>
      <Table.Body className="divide-y">
        {accommodations.map((accommodation) => (
          <Table.Row
            key={accommodation.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {accommodation.name}
            </Table.Cell>
            <Table.Cell>{accommodation.typeAccommodation}</Table.Cell>
            <Table.Cell>{accommodation.description}</Table.Cell>
            <Table.Cell>{accommodation.email}</Table.Cell>
            <Table.Cell>
              {GetHour(accommodation.checkIn)}-{GetHour(accommodation.checkOut)}
            </Table.Cell>
            <Table.Cell>
              {accommodation.img && (
                <>
                  <Button
                    className="bg-customBlue enabled:hover:bg-customBackground"
                    onClick={() => openImageModal(accommodation.id)}
                  >
                    Ver Imagenes
                  </Button>
                  {openModal === accommodation.id && (
                    <ModalImage
                      imgs={accommodation.img}
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      closeModal={closeModal}
                    />
                  )}
                </>
              )}
            </Table.Cell>
            <Table.Cell>
              <button
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                onClick={() => handleAcceptedAccommodation(accommodation.id)}
              >
                Aceptar
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </>
  );
};

export default TableBody;
