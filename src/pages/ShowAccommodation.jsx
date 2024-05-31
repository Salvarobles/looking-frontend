import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDate from "../helper/formatDate";
import GalleryImage from "../components/GalleryImage";
import { getAccommodation } from "../services/accommodationApi";
import SectionInformationAccommodation from "../containers/ShowAccommodation/SectionInformationAccommodation";
import SkeletonInfoImg from "../components/SkeletonInfoImg";
import ShowReviews from "../containers/ShowAccommodation/ShowReviews";
import SendComent from "../components/SendComent";
import { useAuthContext } from "../contexts/useAuthContext";
import ModalReservation from "../components/Modal/ModalReservation";
import { createReservation } from "../services/reservationApi;";
import Swal from "sweetalert2";

const ShowAccommodation = () => {
  const { id, startDate, endDate } = useParams();
  const { account } = useAuthContext();
  const [accommodation, setAccommodation] = useState({});
  const [loading, setLoading] = useState(true);

  const [room, setRoom] = useState(0);
  const [numberAdults, setNumberAdults] = useState(1);

  const [openModal, setOpenModal] = useState(false);

  let startDateFormatted = formatDate(startDate);
  let endDateFormatted = formatDate(endDate);

  const handleCreateReservation = async (e) => {
    e.preventDefault();
    const reservation = {
      startDate,
      endDate,
      numberAdults,
      status: "confirmado",
      price: accommodation.price * numberAdults,
      user: account.id,
      room,
    };

    try {
      const response = await createReservation(reservation);
      setOpenModal(false);
      response.message &&
        Swal.fire({
          icon: "success",
          title: response.message,
        });

      response.error &&
        Swal.fire({
          icon: "error",
          title: "Lo siento su reserva no ha podido ser generada.",
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lo siento su reserva no ha podido ser generada.",
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchAccommodation = async () => {
      const response = await getAccommodation(
        parseInt(id, 10),
        startDate,
        endDate
      );

      setRoom(response?.availableRooms[0].id);

      setAccommodation(response);
      setLoading(false);
    };

    fetchAccommodation();
  }, []);

  return (
    <>
      <div className="flex-col justify-center items-center mx-10 my-5">
        {loading ? (
          <div className="w-full mx-10 my-5">
            <SkeletonInfoImg />
          </div>
        ) : (
          <>
            <div className="flex justify-around mx-10 my-5">
              <div className="w-1/2">
                <SectionInformationAccommodation
                  setOpenModal={setOpenModal}
                  accommodation={accommodation}
                  startDate={startDateFormatted}
                  endDate={endDateFormatted}
                  handleNumberAdults={setNumberAdults}
                  handleChangeRoom={setRoom}
                />
              </div>
              <div className="w-1/2">
                <GalleryImage img={accommodation.img} />
              </div>
            </div>
            <div className="m-12 flex flex-row ">
              <div className="border w-1/2">
                <ShowReviews reviews={accommodation.reviews} />
              </div>
              <div className="w-1/2">
                <SendComent />
              </div>
            </div>

            <ModalReservation
              openModal={openModal}
              setOpenModal={setOpenModal}
              numberAdults={numberAdults}
              room={room}
              startDate={startDateFormatted}
              endDate={endDateFormatted}
              price={accommodation.price}
              accommodation={accommodation}
              handleCreateReservation={handleCreateReservation}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ShowAccommodation;
