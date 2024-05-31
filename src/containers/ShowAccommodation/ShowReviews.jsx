import { Blockquote, Rating } from "flowbite-react";

const ShowReviews = ({ reviews = [] }) => {
  return (
    <div className="mx-auto flex-col">
      {reviews.map((review) => (
        <figure className="max-w-screen-md mb-10" key={review.id}>
          <div className="mb-4 flex items-center">
            <Rating size="md">
              {[...Array(review.rating)].map((_, index) => (
                <Rating.Star key={index} />
              ))}
            </Rating>
          </div>
          <Blockquote>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {review?.comment}
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                {review?.user}
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                {review?.date}
              </cite>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default ShowReviews;