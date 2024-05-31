import { Datepicker, Label, TextInput, Tooltip } from "flowbite-react";
import { useEffect, useState } from "react";

const SectionSearchAccommodation = (props) => {
  const {
    handleDateChangeStart,
    minEndDate,
    handleDateChangeEnd,
    city,
    handleChangeCity,
    handleSearch,
    handleCleanFilter,
  } = props;

  const currentDate = new Date();

  return (
    <div className="relative w-full mt-5 h-96">
      <img
        className="inset-0 w-full h-96 object-cover"
        src="/image/fondoViaje.webp"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white text-4xl font-bold">¿Cuál es su destino?</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4  mt-5 items-end">
          <Tooltip content="Destino" trigger="hover">
            <TextInput
              id="destination"
              type="text"
              placeholder="Destino..."
              required
              className="mr-2"
              value={city}
              onChange={(e) => handleChangeCity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                } else if (e.key === "Escape") {
                  handleCleanFilter(e);
                }
              }}
            />
          </Tooltip>
          <div className="mr-2">
            <Tooltip content="Fecha de Entrada" trigger="hover">
              <Datepicker
                language="es-BR"
                labelTodayButton="Hoy"
                labelClearButton="Limpiar"
                minDate={currentDate}
                title="Fecha de Entrada"
                onSelectedDateChanged={(date) => handleDateChangeStart(date)}
              />
            </Tooltip>
          </div>
          <div className="mr-2">
            <Tooltip content="Fecha de Salida" trigger="hover">
              <Datepicker
                language="es-BR"
                labelTodayButton="Hoy"
                labelClearButton="Limpiar"
                defaultDate={minEndDate}
                minDate={minEndDate}
                title="Fecha de salida"
                onSelectedDateChanged={(date) => handleDateChangeEnd(date)}
              />
            </Tooltip>
          </div>
          <div className="flex">
            <Tooltip content="Buscar" trigger="hover">
              <button
                type="button"
                onClick={(e) => handleSearch(e)}
                className="h-11 p-2.5 ms-2 text-sm font-medium text-white bg-customBlue rounded-lg border border-customBlue hover:bg-customBackground focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-customBlue-600 dark:hover:bg-customBlue-700 dark:focus:ring-customBlue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </Tooltip>
            <button
              type="button"
              onClick={(e) => handleCleanFilter(e)}
              className="h-11 p-2.5 ms-2 text-sm font-medium text-white bg-customBlue rounded-lg border border-customBlue hover:bg-customBackground focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-customBlue-600 dark:hover:bg-customBlue-700 dark:focus:ring-customBlue-800"
            >
              <span>Eliminar Filtros</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSearchAccommodation;
