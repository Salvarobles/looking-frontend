const FormRegisterUser = (props) => {
  const {
    handleChangeEmail,
    handleChangeName,
    handleChangeSurname,
    handleChangeBirthday,
    handleChangePassword,
    handleChangeAvatar,
    avatar,
    handleSubmitUser,
    alert,
  } = props;

  return (
    <>
      {alert && (Object.keys(alert)[0] === "error" || alert.message) ? (
        <div
          className={`p-4 mb-4 text-sm rounded-lg ${
            alert.error
              ? "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400"
              : "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400"
          }`}
          role="alert"
        >
          <span className="font-medium">
            {alert.error ? "Advertencia!" : "Exito!"}
          </span>{" "}
          {alert.error ? alert.error : alert.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmitUser} className="max-w-sm mx-auto ">
        <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => handleChangeEmail(e.target.value.trim().toLocaleLowerCase())}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@looking.com"
            required
          />
        </div>
        <div className="flex gap-5 ">
          <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => handleChangeName(e.target.value.trim())}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              required
              autoComplete="username"

            />
          </div>
          <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
            <label
              htmlFor="surname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="surname"
              onChange={(e) => handleChangeSurname(e.target.value.trim())}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="surname"
              required
              autoComplete="username"
            />
          </div>
        </div>

        <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Fecha de Nacimiento
          </label>

          <div className="relative max-w-sm transition duration-300 ease-in-out filter hover:drop-shadow-lg">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              type="date"
              onChange={(e) => handleChangeBirthday(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
              required
            />
          </div>
        </div>

        <div className="mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => handleChangePassword(e.target.value.trim())}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            autoComplete="current-password"
          />
        </div>

        <div className="flex flex-col w-full mb-5 transition duration-300 ease-in-out filter hover:drop-shadow-lg">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 text-start"
          >
            Avatar
          </label>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center mx-auto w-52 h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            {avatar ? (
              <img
                src={avatar}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click para subir</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG
                </p>
              </div>
            )}
            <input
              id="dropzone-file"
              onChange={(e) => handleChangeAvatar(e.target.files[0])}
              type="file"
              className="hidden"
              accept="image/png, image/jpeg"
            />
          </label>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5"
          >
            Registrarse
          </button>
          <button
            type="button"
            onClick={() => handleChangeAvatar()}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
          >
            Eliminar Avartar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormRegisterUser;
