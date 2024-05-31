import { useEffect, useState } from "react";
import SectionBestPlace from "../containers/Home/SectionBestPlace";
import SectionDisponibleAccommodation from "../containers/Home/SectionDisponibleAccommodation";
import SectionWelcome from "../containers/Home/SectionWelcome";
import { getFiveBestsAccommodations } from "../services/accommodationApi";
import ModalWelcome from "../components/Modal/ModalWelcome";
import { useAuthContext } from "../contexts/useAuthContext";

const apiUrl = import.meta.env.VITE_IMG_URL;

const Home = () => {
  const [bestAccommodation, setBestAccommodation] = useState([]);
  // openModalWelcome();

  useEffect(() => {
    const fetchBestAccommodation = async () => {
      const response = await getFiveBestsAccommodations();
      setBestAccommodation(response);
    };
    fetchBestAccommodation();
  }, []);

  return (
    <>
      <SectionWelcome bestAccommodation={bestAccommodation} />
      <div className="flex justify-around items-center mx-12 my-20">
        <div className="w-1/3 ">
          <SectionBestPlace />
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <figure className="w-11/12 m-auto">
            <img
              className="w-96 rounded-lg m-auto"
              src={apiUrl + "/accommodation/" + bestAccommodation[0]?.img[0]}
              alt="image description"
            />
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
              Imagen de {bestAccommodation[0]?.name}
            </figcaption>
          </figure>
        </div>
      </div>
      <SectionDisponibleAccommodation />
      <ModalWelcome />
    </>
  );
};

export default Home;
