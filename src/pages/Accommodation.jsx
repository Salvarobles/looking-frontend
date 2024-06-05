import { useState } from "react";
import SectionShowAccommodation from "../containers/Accommodation/SectionShowAccommodation";
import { useEffect } from "react";
import {
  getAccommodations,
  getAccommodationsSearch,
} from "../services/accommodationApi";
import SectionSearchAccommodation from "../containers/Accommodation/SectionSearchAccommodation";
import ValidateSearchAccommodation from "../helper/ValidateSearchAccommodation";
import Swal from "sweetalert2";
import SectionFilterAccommodation from "../containers/Accommodation/SectionFilterAccommodation";
import { useNavigate } from "react-router-dom";

const Accommodation = () => {
  // Todos los alojamientos
  const [accommodations, setAccommodations] = useState([]);

  const [cleanFilter, setCleanFilter] = useState(false);

  // Estados para el componente sectionSearchAccommodation
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [minEndDate, setMinEndDate] = useState(new Date());
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  // Funciones para la sectionSearchAccommodation
  const handleDateChangeStart = (date) => {
    setStartDate(date);

    // Calcula la fecha mínima para el Datepicker de salida (endDate)
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);

    // Establece la fecha mínima para el Datepicker de salida
    setMinEndDate(nextDay);

    // Si la fecha de salida ya está seleccionada y es anterior a la nueva fecha de entrada,
    // restablece la fecha de salida
    if (endDate && date >= endDate) {
      setEndDate(null);
    }
  };

  // Función para manejar el cambio de fecha seleccionada para la fecha de salida
  const handleDateChangeEnd = (date) => {
    setEndDate(date);
  };

  const handleCleanFilter = (e) => {
    e.preventDefault();
    setCleanFilter(!cleanFilter);
    setCity("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const alert = ValidateSearchAccommodation(startDate, endDate, city);
    if (alert) {
      Swal.fire({
        icon: "error",
        title: `Error Búsqueda`,
        text: alert,
      });
      return;
    }

    console.log(city)

    const filter = {
      city: city.trim(),
    };

    try {
      const response = await getAccommodationsSearch(filter);
      setAccommodations(response);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Error al buscar la ciudad`,
        text: error.message,
      });
    }
  };

  const handleShowProduct = (e, id) => {
    let city = ' ';
    const alert = ValidateSearchAccommodation(startDate, endDate, city);
    if (alert) {
      Swal.fire({
        icon: "error",
        title: `Error Búsqueda`,
        text: alert,
      });
      return;
    }
    e.preventDefault();
    navigate(`/accommodation/${id}/${startDate}/${endDate}`);
  };

  useEffect(() => {
    const fetchAccommodations = async () => {
      const response = await getAccommodations();
      setAccommodations(response);
    };

    fetchAccommodations();
  }, [cleanFilter]);

  return (
    <>
      <SectionSearchAccommodation
        minEndDate={minEndDate}
        handleDateChangeStart={handleDateChangeStart}
        handleDateChangeEnd={handleDateChangeEnd}
        city={city}
        handleChangeCity={setCity}
        handleSearch={handleSearch}
        handleCleanFilter={handleCleanFilter}
      />
      {/* <SectionFilterAccommodation/> */}
      <div className="w-full m-auto mt-5">
        <SectionShowAccommodation
          accommodations={accommodations}
          handleShowProduct={handleShowProduct}
        />
      </div>
    </>
  );
};

export default Accommodation;
