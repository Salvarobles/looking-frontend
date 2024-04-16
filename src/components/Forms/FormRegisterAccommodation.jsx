import { useEffect, useState } from "react";
import { getAllCities } from "../../services/cityApi";
import { getAllTypesAccommodations } from "../../services/accommodationApi";
import Swal from "sweetalert2";

const FormRegisterAccommodation = (props) => {
  const {
    email,
    name,
    password,
    address,
    city,
    postalCode,
    typeAccommodation,
    numberRooms,
    maximumCapacity,
    checkIn,
    checkOut,
    description,
    paginaActual,
    totalPaginas,
    handleNext,
    handlePrevious,
    handleChangeEmail,
    handleChangeName,
    handleChageAddress,
    handleChangeCity,
    addPostalCode,
    handleTypeAccommodation,
    handleChangeNumberRooms,
    handleChangeMaximumCapacity,
    handleChangeImg,
    handleChangeCheckIn,
    handleChangeCheckOut,
    handleChangeDescription,
    handleChangePassword,
    handleSubmitAccommodation,
    alert,
  } = props;

  const [cities, setCities] = useState([]);
  const [typesAccommodations, setTypesAccommodations] = useState([]);

  const maxLength = 378;  

  const handleChangePostalCode = (value) => {
    // Verificar si el valor es un número y es positivo
    if (value.toString().length <= 5) {
      if ((/^\d+$/.test(value) && parseInt(value) >= 0) || value === "") {
        addPostalCode(value);
      } else {
        // El valor no es un número válido y positivo
        // Aquí puedes mostrar un mensaje de error o realizar alguna otra acción
        Swal.fire({
          icon: "error",
          title: `No puede ser Negativo el codigo postal!`,
        });
      }
    }
  };

  const handleChangeHeightTextArea = (event) => {
    const text = event.target.value;
    const remainingCharacters = maxLength - text.length;


    if (text.length <= 378) {
      handleChangeDescription(text); // Actualizar el estado solo si no excede el límite
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + 2 + "px";
    }
  };

  const renderFormulario = () => {
    switch (paginaActual) {
      case 1:
        return (
          <>
            <div className="flex gap-5 ">
              <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre Hotel
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => handleChangeName(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  autoComplete="username"
                  value={name}
                  required
                />
              </div>

              <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => handleChangeEmail(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@looking.com"
                  value={email}
                  required
                />
              </div>
            </div>

            <div className="flex gap-5 ">
              <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  id="address"
                  onChange={(e) => handleChageAddress(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="C/..."
                  value={address}
                  required
                  autoComplete="username"
                />
              </div>

              <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => handleChangePassword(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  autoComplete="current-password"
                  value={password}
                />
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="ciudad"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Ciudad
                </label>
                <select
                  id="ciudad"
                  onChange={(e) => handleChangeCity(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={city}
                >
                  <option value="">Selecciona</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                  {/* Agrega más opciones según sea necesario */}
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="tipoHotel"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tipo de Hotel
                </label>
                <select
                  id="tipoHotel"
                  onChange={(e) => handleTypeAccommodation(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={typeAccommodation}
                >
                  <option value="">Selecciona</option>
                  {typesAccommodations.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                  {/* Agrega más opciones según sea necesario */}
                </select>
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="codigoPostal"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Código Postal
                </label>
                <input
                  type="number"
                  id="codigoPostal"
                  onChange={(e) =>
                    handleChangePostalCode(e.target.value)
                  }
                  value={postalCode}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Código Postal"
                  required
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="checkIn"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Check-In
                </label>
                <input
                  type="time"
                  id="checkIn"
                  onChange={(e) => handleChangeCheckIn(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Horario de Check-In"
                  required
                  value={checkIn}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="checkOut"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Check-Out
                </label>
                <input
                  type="time"
                  id="checkOut"
                  onChange={(e) => handleChangeCheckOut(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Horario de Check-Out"
                  required
                  value={checkOut}
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            {/* Agregar más campos de la segunda página */}
            <div className="flex gap-5 mb-5 items-end">
              <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
                <label
                  htmlFor="numberRooms"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Numero habitaciones
                </label>
                <input
                  type="number"
                  id="numberRooms"
                  onChange={(e) =>
                    handleChangeNumberRooms(e.target.value)
                  }
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={numberRooms}
                />
              </div>
              <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
                <label
                  htmlFor="maxCapacity"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Maximo de Personas/Habitacion
                </label>
                <input
                  type="number"
                  id="maxCapacity"
                  onChange={(e) =>
                    handleChangeMaximumCapacity(e.target.value)
                  }
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={maximumCapacity}
                  required
                />
              </div>
            </div>
            <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Descripción
              </label>
              <div style={{ position: "relative" }}>
                <span
                  style={{ position: "absolute", top: "-20px", right: "10px" }}
                >
                  {maxLength - description.length} caracteres restantes
                </span>
                <textarea
                  id="description"
                  onChange={(e) => handleChangeHeightTextArea(e)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-auto"
                  placeholder="Escribe aquí..."
                  required
                  value={description}
                />
              </div>
            </div>
            <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                onChange={(e) => handleChangeImg(e.target.files)}
                type="file"
                multiple
              />
            </div>
            <div className="flex justify-center items-center mb-5">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5"
              >
                Registrarse
              </button>
              <button
                type="button"
                onClick={() => handleChangeImg()}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
              >
                Eliminar Imagenes
              </button>
            </div>
          </>
        );
      // Agregar más casos para más páginas si es necesario
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchCitiesApi = async () => {
      const response = await getAllCities();
      setCities(response);
    };

    const fetchTypesAccommodationsApi = async () => {
      const response = await getAllTypesAccommodations();
      setTypesAccommodations(response);
    };

    fetchCitiesApi();
    fetchTypesAccommodationsApi();
  }, []);

  return (
    <>
      <div>
        {alert && (Object.keys(alert)[0] === "error" || alert.message) ? (
          <div
            className={`p-4 mb-4 text-sm rounded-lg ${
              alert.error
                ? "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400"
                : "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400"
            }`}
            role="alert"
          >
            <span className="font-medium">
              {alert.error ? "Advertencia!" : "Exito!"}
            </span>{" "}
            {alert.error ? alert.error : alert.message}
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmitAccommodation} className="max-w-sm mx-auto ">
        {renderFormulario()}
        <nav aria-label="Page navigation example">
          <ul>
            {paginaActual > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Anterior Página
              </button>
            )}
            {paginaActual < totalPaginas && (
              <button
                type="button"
                onClick={handleNext}
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Siguiente Página
              </button>
            )}
          </ul>
        </nav>
      </form>
    </>
  );
};

export default FormRegisterAccommodation;
