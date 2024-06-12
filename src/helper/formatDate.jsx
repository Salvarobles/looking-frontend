/**
 * Función para formatear una cadena de fecha en el formato "día de mes de año".
 * @param {string} dateString - La cadena de fecha a formatear.
 * @returns {string} - La fecha formateada.
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("es-ES", { month: "long" });
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;
};

export default formatDate;
