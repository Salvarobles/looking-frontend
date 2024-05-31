import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <img src={"/image/logo.png"} alt="Logo" className="w-36 mb-5" />
      <h1 className="text-2xl mb-5">Esta página no existe</h1>
      <Link to={'/'}>
        <button className="px-4 py-2 text-lg text-white bg-blue-500 rounded hover:bg-blue-700">
          Ir al Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
