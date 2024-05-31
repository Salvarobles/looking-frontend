import { Button, Rating } from "flowbite-react";
import { useState } from "react";

const SendComent = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
  return (
    <div>
      <div className="text-2xl font-bold">
        Seleccione las estrellas: 
        <Rating>
          {[...Array(5)].map((_, index) => (
            <Rating.Star
              key={index}
              filled={index < rating}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </Rating>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
        >
          Tu comentario
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Escribe su comentario..."
        ></textarea>
      </div>
      <Button color="blue">Enviar Comentartio</Button>
    </div>
  );
};

export default SendComent;
