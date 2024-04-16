import SectionBestPlace from "../containers/Home/SectionBestPlace";
import SectionWelcome from "../containers/Home/SectionWelcome";

const Home = () => {
  return (
    <>
      <SectionWelcome />
      <div className="flex justify-around mx-12 my-20 border">
        <div className=' border'>
          <SectionBestPlace />
        </div>
        <div>
          <figure className="max-w-lg">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/image/logo.png"
              alt="image description"
            />
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
              Image caption
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Home;
