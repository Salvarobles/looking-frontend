import { Link } from "react-router-dom";

const SectionDisponibleAccommodation = () => {
  return (
    <section className="mx-12 my-20 sm:flex-col lg:flex lg:flex-row xl:flex-row xl:mx-52">
      <div className="w-2/2 lg:w-1/2">
        <p className="text-start">Descubre</p>
        <h1 className="text-6xl font-bold">
          Alojamientos <br /> Disponibles
        </h1>
        <p className="my-5 ">
          Explora nuestra selección de alojamientos y encuentra el lugar
          perfecto para tu proxima estancia. Con nuestro filtrado personalizado,
          puedes buscar por tipo de alojamiento, número de personas y fechas de
          ida y vuelta.
        </p>
      </div>
      <div className="w-2/2 flex flex-col justify-center items-center lg:w-1/2">
        <p>Encuentra tu alojameinto ideal y reserva ahora mismo.</p>
        <div className="flex justify-start my-5 gap-5">
          <Link to={"/accomodation"}>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              color="blue"
            >
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionDisponibleAccommodation;
