import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/useAuthContext";
import { getReservationClient } from "../services/reservationApi;";
import CardReservation from "../components/CardReservation";

const ShowReservationClient = () => {
  const { account } = useAuthContext();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fecthReservationClient = async () => {
      const response = await getReservationClient(account.id);
      setReservations(response);
    };
    fecthReservationClient();
  }, [account]);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 my-10 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
        {reservations.map((reservation) => (
          <CardReservation key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
};

export default ShowReservationClient;
