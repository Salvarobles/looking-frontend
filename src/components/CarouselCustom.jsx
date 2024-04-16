import { Carousel } from "flowbite-react";

const CarouselCustom = () => {
  return (
    <div className="relative w-96 h-96 sm:h-64 xl:h-80 2xl:h-96 mx-16 overflow-hidden">
      <Carousel slideInterval={5000}>
        <div>
          <img src="/image/logo.png" alt="..." />
        </div>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
          className="object-cover w-full h-full"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default CarouselCustom;
