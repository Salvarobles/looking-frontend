const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/reservation`;

const createReservation = async (reservation) => {
  try {
    const response = await fetch(`${endpoint}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error create accommodation: " + error.message);
  }
};


const getReservationClient = async (idUser) => {
  try {
    const response = await fetch(`${endpoint}/getReservationClient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idUser),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching accommodation" + error);
  }
};

export { createReservation, getReservationClient };
