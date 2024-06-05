import { Button, Rating } from "flowbite-react";
import { useState } from "react";
import { useAuthContext } from "../contexts/useAuthContext";
import { createReview } from "../services/reviewApi";
import Swal from "sweetalert2";


const SendComent = ({ setUpdate, update, idAccommodation }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const {account} = useAuthContext();

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmitComment = async () => {
    const date = Date();
    const commentObj = {
      rating,
      comment: comment.trim(),
      date,
      idUser: account.id,
      idAccommodation,
    }
    
    const response = await createReview(commentObj);
    response.message && (
      Swal.fire({
        icon: "success",
        title: "Reseña creada",
      })
    )

    const errors = response.errors && Object.values(response.errors).flat().join('\n');

    if (errors) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errors,
        animation: true
      });
    }
    setUpdate(!update)
  };

  return (
    <div>
      <div className="text-2xl font-bold">
        Seleccione las estrellas:
        <Rating aria-required>
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
          onChange={(e) => setComment(e.target.value)}
          id="message"
          rows="4"
          className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Escribe su comentario..."
          required
        ></textarea>
      </div>
      <Button onClick={handleSubmitComment} color="blue">
        Enviar Comentartio
      </Button>
    </div>
  );
};

export default SendComent;
