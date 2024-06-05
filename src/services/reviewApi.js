const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/review`;

const createReview = async (commentObj) => {
    try {
      const response = await fetch(`${endpoint}/createReview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentObj),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error createReview" + error);
    }
  };
  
  export {
    createReview
  };