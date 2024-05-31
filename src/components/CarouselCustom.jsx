import { Carousel } from "flowbite-react";
const apiUrl = import.meta.env.VITE_IMG_URL;

const CarouselCustom = (props) => {
  const { bestAccommodation } = props;
  return (
    <div className="relative w-1/2 h-4/5 sm:h-64 xl:h-80 2xl:h-96 mx-16 overflow-hidden">
      <Carousel slideInterval={5000}>
        {bestAccommodation.map((accommodation) => (
          <img
            key={accommodation.id} // Asegúrate de agregar una key única para cada elemento
            src={apiUrl + "/accommodation/" + accommodation?.img[0]}
            alt={`Imagen de ${accommodation?.name}`}
            className="object-cover w-full h-full"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCustom;
