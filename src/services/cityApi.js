const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/city`;

const getAllCities = async () => {
  try {
    const response = await fetch(`${endpoint}/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching city" + error);
  }
};

export { getAllCities };
