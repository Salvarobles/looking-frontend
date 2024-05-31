import { Card, Rating, Tooltip } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/useAuthContext";
const apiUrl = import.meta.env.VITE_IMG_URL;

const CardAccommodation = (props) => {
  const {
    id,
    name,
    city,
    img,
    review,
    price,
    handleShowProduct,
    typeAccommodation,
    maximumCapacity,
  } = props;

  const { account } = useAuthContext();

  // Calcular la cantidad de estrellas llenas y vacías
  const filledStars = Math.floor(review); // Parte entera del valor de review
  const hasHalfStar = review % 1 !== 0; // Verificar si hay una mitad de estrella
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Calcular las estrellas vacías

  // Verificar si review es un número y no es NaN
  const formattedReview =
    typeof review === "number" && !isNaN(review) ? review.toFixed(2) : "N/A";

  return (
    <div
      key={id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      // className="w-52 border border-gray-200"
    >
      <img
        className="p-8 rounded-t-lg object-cover h-80 m-auto"
        src={apiUrl + "accommodation/" + img}
        alt={name}
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name} - {city}
        </h5>

        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {`Max Personas: ${maximumCapacity}`}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
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
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {" "}
            {formattedReview === "N/A" ? "Out" : formattedReview}
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-3">
            {" "}
            {"Tipo: " + `${typeAccommodation}`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}€ / pers
          </span>
          {account ? (
            <>
              <button
                onClick={(e) => handleShowProduct(e, id)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Ver más
              </button>
            </>
          ) : (
            <>
              {" "}
              <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <Link to={"/register"}>Registrarse</Link>
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardAccommodation;
