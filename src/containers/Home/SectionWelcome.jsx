import { Link } from "react-router-dom";
import CarouselCustom from "../../components/CarouselCustom";

const SectionWelcome = ({bestAccommodation}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Encuentra el alojamiento perfecto para ti
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Explora nuestra amplia selección de alojamientos y encuentra el lugar
          ideal para tu próxima estancía.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to={'/accomodation'}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-customBlue hover:bg-customBackground focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Buscar
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CarouselCustom bestAccommodation={bestAccommodation}/>
      </div>
    </section>
  );
};

export default SectionWelcome;
