import { Button, Label, Rating, Select, Tooltip } from "flowbite-react";
import SkeletonInfoImg from "../../components/SkeletonInfoImg";
import formatDate from "../../helper/formatDate";
import BuyAccommodation from "../../components/BuyAccommodation";
import formatHour from "../../helper/formatHour";
import { useEffect } from "react";

const SectionInformationAccommodation = ({
  accommodation,
  startDate,
  endDate,
  setOpenModal,
  handleNumberAdults,
  handleChangeRoom,
}) => {
  // // Calcular la cantidad de estrellas llenas y vacías
  const filledStars = Math.floor(accommodation?.rating); // Parte entera del valor de review
  const hasHalfStar = accommodation?.rating % 1 !== 0; // Verificar si hay una mitad de estrella
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Calcular las estrellas vacías

  // Verificar si review es un número y no es NaN
  const formattedReview =
    typeof accommodation?.rating === "number" && !isNaN(accommodation?.rating)
      ? accommodation?.rating.toFixed(2)
      : "N/A";

  useEffect(() => {
    () => handleNumberAdults(1);
    () => handleChangeRoom(accommodation?.availableRooms[0]);
  }, [accommodation, handleChangeRoom]);

  return (
    <div className="flex-col">
      <h3 className="text-3xl font-bold dark:text-white mb-3">
        {accommodation?.name}
      </h3>
      <div className="flex-row gap-5 mb-3 lg:flex lg:flex-row">
        <h3 className="text-2xl font-bold dark:text-white">
          Precio: {accommodation?.price}€ / noche
        </h3>
        <p className="text-3xl font-bold dark:text-white">|</p>
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <Tooltip content="Rating" trigger="hover" placement="left">
            <Rating>
              {[...Array(filledStars)].map((_, index) => (
                <Rating.Star key={index} />
              ))}
              {hasHalfStar && <Rating.Star half />}
              {[...Array(emptyStars)].map((_, index) => (
                <Rating.Star
                  key={index + filledStars + (hasHalfStar ? 1 : 0)}
                  filled={false}
                />
              ))}
            </Rating>
          </Tooltip>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {formattedReview === "N/A" ? "Out" : formattedReview}
          </span>
        </div>
      </div>
      <h3 className="text-xl dark:text-white mb-3">
        <strong>{"Ubicación: "}</strong>
        {accommodation?.address +
          ", " +
          accommodation?.city +
          ", " +
          accommodation?.country}
        <strong> Codigo Postal: </strong> {accommodation?.postalCode}
      </h3>
      <h3 className="text-xl dark:text-white mb-3">
        <strong>Tipo de Alojamiento: </strong>{" "}
        {accommodation?.typeAccommodation}
      </h3>
      <h3 className="text-xl dark:text-white mb-3">
        <strong>Fechas Seleccionadas: </strong> {startDate + " - " + endDate}
      </h3>
      <div>
        <div className="flex-col items-center justify-center mx-auto">
          <div className="flex-col justify-center items-center">
            <div className=" mb-2 block ">
              <Label
                className="text-xl font-bold"
                htmlFor="reservation"
                value="N° de Personas: "
              />
            </div>
            <Select
              className="w-60"
              id="reservation"
              onChange={(e) => handleNumberAdults(e.target.value)}
              required
            >
              {[...Array(accommodation?.maxCapacity)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1} persona{index + 1 > 1 ? "s" : ""}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex-col justify-center items-center">
            <div className=" mb-2 block ">
              <Label
                className="text-xl font-bold"
                htmlFor="reservation"
                value="Selecciona Habitacion: "
              />
            </div>
            <Select
              className="w-60"
              id="reservation"
              onChange={(e) => handleChangeRoom(e.target.value)}
              required
            >
              {accommodation?.availableRooms.map((room, index) => (
                <option key={room?.id} value={room?.id}>
                  {index + 1}º habitación
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button
          className=" text-white bg-customBlue hover:bg-customBackground focus:ring-4 focus:outline-none focus:ring-customBlue font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center justify-center me-2 dark:bg-customBlue dark:hover:bg-customBackground dark:focus:ring-customBlue"
          onClick={() => setOpenModal(true)}
        >
          <svg
            className="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Reservar
        </Button>
      </div>

      <div>
        <h3 className="text-xl dark:text-white mt-3">
          <strong>Descripción: </strong>
        </h3>
        <h3 className="text-xl dark:text-white mt-3">
          <strong>Hora de Entrada y salida: </strong>
          {formatHour(accommodation.checkIn) +
            "-" +
            formatHour(accommodation.checkOut)}
        </h3>
        <h3 className="text-xl dark:text-white mt-3">
          <strong>Email: {accommodation.email}</strong>
        </h3>
        <h3 className="text-xl dark:text-white mt-3">
          {accommodation.description}
        </h3>
      </div>
    </div>
  );
};

export default SectionInformationAccommodation;
