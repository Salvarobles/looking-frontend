import { useState } from "react";
import ValidateYear from "../helper/ValidateYear";
import Swal from "sweetalert2";
import { createUser } from "../services/userApi";
import SpinnerCustom from "../components/SpinnerCustom";
import ButtonGroup from "../components/ButtonGroup";
import FormRegisterUser from "../components/Forms/FormRegisterUser";
import FormRegisterAccommodation from "../components/Forms/FormRegisterAccommodation";
import { createAccommodation } from "../services/accommodationApi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/useAuthContext";

const Register = () => {
  const { login } = useAuthContext();
  // Estado para los formularios (true --> userForm, false -->accommodationForm)
  const [form, setForm] = useState(true);

  // Mensaje y Spinner
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  // Estados globales para User y Accommodation
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Estados para User
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [avatar, setAvatar] = useState(null);

  // Estados para Accommodation
  const totalPaginas = 2;
  const [paginaActual, setPaginaActual] = useState(1);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState(0);
  const [typeAccommodation, setTypeAccommodation] = useState("");
  const [numberRooms, setNumberRooms] = useState(0);
  const [maximumCapacity, setMaximumCapacity] = useState(0);
  const [img, setImg] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  // Función para verificar la validez del correo electrónico
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Controlar renderizar formularios

  const handleChangeForm = (e, boolean) => {
    e.preventDefault();
    setForm(boolean);
    setAlert("");
  };

  // Funciones para Accommodation

  // Manejar el paginado del formulario de Accommodation
  const handleNext = (e) => {
    e.preventDefault();

    if (
      !(
        address &&
        city &&
        postalCode &&
        typeAccommodation &&
        checkIn &&
        checkOut &&
        name &&
        email &&
        password &&
        isValidEmail(email)
      )
    ) {
      // Aquí pones el código que deseas ejecutar si todos los estados no están vacíos
      Swal.fire({
        icon: "error",
        title: `Tienes que rellenar todos los Campos!`,
        text: `Asegurase de que sea un email valido. Ejemplo 'name@looking.com'`,
      });
      return;
    }

    setPaginaActual(paginaActual + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setPaginaActual(paginaActual - 1);
  };

  const handleChangeImg = (files) => {
    if (!files) {
      setImg(null);
    }
    const images = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = () => {
        // Aquí puedes hacer lo que quieras con la imagen, por ejemplo, guardarla en un array.
        images.push(reader.result);
      };

      reader.readAsDataURL(files[i]);
    }
    setImg(images);
  };

  const handleSubmitAccommodation = async (e) => {
    e.preventDefault();
    setLoading(true);

    const accommodationObject = {
      email: email.trim().toLocaleLowerCase(),
      name: name.trim(),
      password: password.trim(),
      address: address.trim(),
      city: city.trim(),
      postalCode: postalCode.trim(),
      typeAccommodation,
      numberRooms: numberRooms.trim(),
      maximumCapacity: maximumCapacity.trim(),
      checkIn,
      checkOut,
      description: description.trim(),
      price: price.trim(),
      img,
    };


    // llamar a la api para hacer el post y crear el accomodation
    try {
      const responseData = await createAccommodation(accommodationObject);
      setAlert(responseData);

      setLoading(false);
      navigate("/login");
      // Limpiamos el formulario
      setEmail("");
      setName("");
      setPassword("");
      setAddress("");
      setCity("");
      setPostalCode(0);
      setTypeAccommodation("");
      setNumberRooms(0);
      setMaximumCapacity(0);
      setImg([]);
      setCheckIn(0);
      setCheckOut(0);
      setDescription("");
      setPrice(0);
      setPaginaActual(1);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Funciones para el user

  const handleChangeAvatar = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setAvatar(null);
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (ValidateYear(birthday)) {
      Swal.fire({
        icon: "error",
        title: `Eres menor de edad!`,
        text: "Debes de ser mayor de edad para utilizar Looking.",
      });
      setLoading(false);
      return;
    }

    const userObject = {
      email: email.trim().toLocaleLowerCase(),
      name: name.trim(),
      surname: surname.trim(),
      birthday,
      password: password.trim(),
      avatar,
    };

    // llamar a la api para hacer el post y crear el usuario
    try {
      const responseData = await createUser(userObject);
      setAlert(responseData.message);
      setLoading(false);
      login(responseData.user);
      navigate("/");
      // Limpiamos el formulario
      setEmail("");
      setName("");
      setSurname("");
      setBirthday("");
      setPassword("");
      setAvatar(null);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container rounded shadow-md hover:shadow-lg">
        <div className="my-4 lg:my-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="flex items-center justify-center lg:flex lg:justify-start lg:h-auto lg:rounded-l">
            <Link to={"/"} className="mx-auto">
              <img
                src="/image/logo.png"
                alt=""
                className="mx-auto max-h-full transition duration-300 ease-in-out transform hover:scale-105 filter drop-shadow-xl sm:block"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white lg:p-8 rounded-lg rounded-r h-full">
              <h1 className="font-bold text-center text-3xl lg:text-4xl py-5">
                Registrase en Looking!
              </h1>
              <p className="mb-2">
                Si quieres vovler al{" "}
                <Link className="text-blue-600" to={"/"}>
                  Home
                </Link>{" "}
                pincha en el logo
              </p>
              {loading ? (
                <SpinnerCustom />
              ) : (
                <div className="transition-opacity duration-500 ease-in-out">
                  <ButtonGroup handleChangeForm={handleChangeForm} />
                  {form ? (
                    <FormRegisterUser
                      handleChangeEmail={setEmail}
                      handleChangeName={setName}
                      handleChangeSurname={setSurname}
                      handleChangeBirthday={setBirthday}
                      handleChangePassword={setPassword}
                      handleChangeAvatar={handleChangeAvatar}
                      avatar={avatar}
                      handleSubmitUser={handleSubmitUser}
                      alert={alert}
                    />
                  ) : (
                    <FormRegisterAccommodation
                      paginaActual={paginaActual}
                      totalPaginas={totalPaginas}
                      email={email}
                      name={name}
                      password={password}
                      address={address}
                      city={city}
                      postalCode={postalCode}
                      typeAccommodation={typeAccommodation}
                      numberRooms={numberRooms}
                      maximumCapacity={maximumCapacity}
                      checkIn={checkIn}
                      checkOut={checkOut}
                      description={description}
                      handleNext={handleNext}
                      handlePrevious={handlePrevious}
                      handleChangeEmail={setEmail}
                      handleChangeName={setName}
                      handleChageAddress={setAddress}
                      handleChangeCity={setCity}
                      addPostalCode={setPostalCode}
                      handleTypeAccommodation={setTypeAccommodation}
                      handleChangeNumberRooms={setNumberRooms}
                      handleChangeMaximumCapacity={setMaximumCapacity}
                      handleChangeImg={handleChangeImg}
                      handleChangeCheckIn={setCheckIn}
                      handleChangeCheckOut={setCheckOut}
                      handleChangeDescription={setDescription}
                      handleChangePassword={setPassword}
                      handleSubmitAccommodation={handleSubmitAccommodation}
                      handleChangeprice={setPrice}
                      price={price}
                      alert={alert}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
