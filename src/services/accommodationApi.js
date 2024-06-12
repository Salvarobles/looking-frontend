const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/accommodation`;

const getAllTypesAccommodations = async () => {
  try {
    const response = await fetch(`${endpoint}/alltypes`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching accommodation" + error);
  }
};

const createAccommodation = async (accommodation) => {
  try {
    const response = await fetch(`${endpoint}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accommodation),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error create accommodation: " + error.message);
  }
};

const getFiveBestsAccommodations = async () => {
  try {
    const response = await fetch(`${endpoint}/bestAccommodation`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching bests accommodation" + error);
  }
};

const getAccommodationsHidden = async () => {
  try {
    const response = await fetch(`${endpoint}/getAccommodationsHidden`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching accommodation hidden" + error);
  }
};

const changeHiddenAccommodation = async (idAccommodation) => {
  try {
    const response = await fetch(`${endpoint}/changeHiddenAccomodation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idAccommodation),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error create accommodation: " + error.message);
  }
};

const getAccommodations = async () => {
  try {
    const response = await fetch(`${endpoint}/getAccommodations`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching accommodation" + error);
  }
};

const getAccommodationsSearch = async (filter) => {
  try {
    const response = await fetch(`${endpoint}/getAccommodationsSearch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error fetching accommodation" + error);
  }
};

const getAccommodationExpensive = async () => {
  try {
    const response = await fetch(`${endpoint}/getAccommodationExpensive`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching accommodation expensive" + error);
  }
};

const getAccommodation = async (idAccommodation, startDate, endDate) => {
  let accommodation = {
    idAccommodation,
    startDate,
    endDate,
  };
  try {
    const response = await fetch(`${endpoint}/getAccommodation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accommodation),
    });
    console.log(accommodation)
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching accommodation" + error);
  }
};


export {
  getAllTypesAccommodations,
  createAccommodation,
  getFiveBestsAccommodations,
  getAccommodationsHidden,
  changeHiddenAccommodation,
  getAccommodations,
  getAccommodationsSearch,
  getAccommodationExpensive,
  getAccommodation
};
