import { useEffect, useState } from "react";
import {
  changeHiddenAccommodation,
  getAccommodationsHidden,
} from "../services/accommodationApi";
import { Table } from "flowbite-react";
import TableBody from "../components/Table/TableBody";
import Swal from "sweetalert2";

const ListAccommodation = () => {
  const [accommodations, setAccommodations] = useState([]);

  const handleAcceptedAccommodation = async (idAccommodation) => {
    try {
      const response = await changeHiddenAccommodation(idAccommodation);

      if (response.message) {
        showSuccessMessage(response.message);
        // Si el cambio se realiza con éxito, volvemos a cargar los alojamientos
        fetchAccommodationsHidden();
      } else {
        showErrorMessage(response.error);
      }
    } catch (error) {
      showErrorMessage("Ha ocurrido un error al procesar la solicitud.");
    }
  };

  const fetchAccommodationsHidden = async () => {
    const response = await getAccommodationsHidden();
    setAccommodations(response);
  };

  const showSuccessMessage = (message) => {
    Swal.fire({
      icon: "success",
      title: "Cambio Aceptado",
      text: message,
    });
  };

  const showErrorMessage = (message) => {
    Swal.fire({
      icon: "error",
      title: "Cambio Erróneo",
      text: message,
    });
  };

  useEffect(() => {
    fetchAccommodationsHidden();
  }, []);

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg mx-10 my-20 ">
      <Table>
        <Table.Head>
          <Table.HeadCell className="bg-customBlue text-white">
            Nombre
          </Table.HeadCell>
          <Table.HeadCell className="bg-customBlue text-white">
            Tipo
          </Table.HeadCell>
          <Table.HeadCell className="bg-customBlue text-white">
            Descripción
          </Table.HeadCell>
          <Table.HeadCell className="bg-customBlue text-white">
            email
          </Table.HeadCell>
          <Table.HeadCell className="bg-customBlue text-white">
            Horas E/S
          </Table.HeadCell>
          <Table.HeadCell className="bg-customBlue text-white">
            Imagenes
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Aceptar</span>
          </Table.HeadCell>
        </Table.Head>
        <TableBody
          accommodations={accommodations}
          handleAcceptedAccommodation={handleAcceptedAccommodation}
        />
      </Table>
    </div>
  );
};

export default ListAccommodation;
