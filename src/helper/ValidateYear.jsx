const ValidateYear = (birthday) => {
  // Convertir la fecha de nacimiento a un objeto Date
  const birthDateObj = new Date(birthday);

  // Obtener la fecha actual
  const today = new Date();

  // Calcular la diferencia de años entre la fecha actual y la fecha de nacimiento
  let age = today.getFullYear() - birthDateObj.getFullYear();

  // Verificar si el mes actual es menor al mes de nacimiento, o si es el mismo mes pero el día actual es anterior al día de nacimiento
  if (
    today.getMonth() < birthDateObj.getMonth() ||
    (today.getMonth() === birthDateObj.getMonth() &&
      today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  // Verificar si el usuario es menor de 18 años
  if (age < 18) {
    return true; // Retorna true si el usuario es menor de 18 años
  }

  return false; // Retorna false si el usuario tiene 18 años o más
};

export default ValidateYear;
