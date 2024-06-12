import { Link } from "react-router-dom";
import SpinnerCustom from "../SpinnerCustom";

/**
 * Componente de formulario de inicio de sesión.
 * @param {object} props - Las propiedades pasadas al componente.
 * @returns {JSX.Element} - El JSX del formulario de inicio de sesión.
 */
const FormLogin = (props) => {
  // Extrae las propiedades pasadas al componente
  const {
    loading, // Indica si hay una operación de carga en curso
    error, // Contiene un mensaje de error si hay algún problema
    handleChangeEmail, // Función para manejar el cambio de email
    handleChangePassword, // Función para manejar el cambio de contraseña
    handleChangeRememberMe, // Función para manejar el cambio de la opción "Recordarme"
    handleSubmit, // Función para manejar el envío del formulario
  } = props;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto w-3/4 mt-5 py-12 rounded shadow-md hover:shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="h-96 lg:h-auto lg:rounded-l flex items-center justify-center ">
            <Link to={'/'}>
              <img
                src="/image/logo.png"
                alt=""
                className="mx-auto max-h-full transition duration-300 ease-in-out transform hover:scale-105 filter drop-shadow-xl"
              />
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg lg:rounded-r">
            <h1 className="font-bold text-center text-3xl lg:text-4xl py-5">
              Bienvenido a Looking!
            </h1>
            {error && (
              <div
                className={`p-4 mb-4 text-sm rounded-lg text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400
                  `}
                role="alert"
              >
                <span className="font-medium">Advertencia!</span> {error}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="max-w-sm mx-auto transition duration-300 ease-in-out filter hover:drop-shadow-lg"
            >
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@looking.com"
                  onChange={(e) => handleChangeEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => handleChangePassword(e.target.value)}
                />
              </div>
              <div className="flex items-start mb-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  onChange={(e) => handleChangeRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Recordarme
                </label>
              </div>

              <div className="my-3">
                <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  No tienes cuenta?{" "}
                  <Link className="text-blue-700" to={"/register"}>
                    Registrate
                  </Link>
                </span>
                <br />
                <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <Link>Recuperar Password</Link>
                </span>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loading ? <SpinnerCustom /> : "Iniciar Sesión"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
