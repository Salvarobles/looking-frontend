const ValidateSearchAccommodation = (
  startDate,
  endDate,
  city,
) => {
  let alert;
  // Verifica que todos los estados estén completos
  if (!startDate || !endDate || !city) {
    // Muestra un mensaje de error o realiza alguna acción adecuada si algún estado está incompleto
    alert = "Por favor, completa todos los campos correctamente.";
  }

  // Verifica que la fecha de fin sea mayor que la fecha de inicio
  if (endDate <= startDate) {
    // Muestra un mensaje de error o realiza alguna acción adecuada si la fecha de fin es menor o igual que la fecha de inicio
    alert = "La fecha de fin debe ser posterior a la fecha de inicio.";
  }

  return alert;
};

export default ValidateSearchAccommodation;
