import CardAccommodation from "../../components/CardAccommodation";

const SectionShowAccommodation = ({ accommodations, handleShowProduct }) => {
  return (
    <div className="flex flex-wrap justify-center gap-14 my-10">
      {accommodations.map((accommodation) => (
        <div
          key={accommodation.id}
          className="h-80 w-960 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 px-4 mb-36"
        >
          <CardAccommodation
            id={accommodation.id}
            city={accommodation.city}
            name={accommodation.name}
            review={accommodation.review}
            price={accommodation.price}
            img={accommodation.img}
            typeAccommodation={accommodation.typeAccommodation}
            maximumCapacity={accommodation.maximumCapacity}
            handleShowProduct={handleShowProduct}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionShowAccommodation;
