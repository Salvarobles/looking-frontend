const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/`;

const validateAccount = async (account) => {
    try {
      const response = await fetch(`${endpoint}validateAccount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      throw new Error("Error fetching account");
    }
  };


  const getAccount = async (account) => {
    try {
      const response = await fetch(`${endpoint}getAccount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      throw new Error("Error fetching account");
    }
  };



export { validateAccount, getAccount};