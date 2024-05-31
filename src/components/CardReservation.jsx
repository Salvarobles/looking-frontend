import { Button, Card } from "flowbite-react";
import formatDate from "../helper/formatDate";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFbill from "./PDFbill";

const CardReservation = ({ reservation }) => {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {reservation?.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {formatDate(reservation?.startDate.date)} -{" "}
        {formatDate(reservation?.endDate.date)}
      </p>
      <PDFDownloadLink
        document={<PDFbill reservation={reservation} />}
        fileName="factura.pdf"
      >
        {({ loading, url, error, blob }) =>
          loading ? (
            <button className="text-white bg-customBlue hover:bg-customBackground focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-customBlue dark:hover:bg-customBlue dark:focus:bg-customBlue">
              Cargando Documento
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                4
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button className="text-white bg-customBlue hover:bg-customBackground focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-customBlue dark:hover:bg-customBlue dark:focus:bg-customBlue">
              {" "}
              Descargar PDF
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                4
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )
        }
      </PDFDownloadLink>
    </Card>
  );
};

export default CardReservation;
