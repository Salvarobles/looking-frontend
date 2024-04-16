const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/user`;

async function createUser(user) {
  try {
      const response = await fetch(`${endpoint}/create`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
      });

      const responseData = await response.json();
      return responseData;
  } catch (error) {
      throw new Error('Error create user: ' + error.message);
  }
}

export { createUser };
