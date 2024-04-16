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
    throw new Error("Error create user: " + error.message);
  }
};

export { getAllTypesAccommodations, createAccommodation };
