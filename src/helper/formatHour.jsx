/**
 * Función para formatear una cadena de fecha en el formato "hora:minutos".
 * @param {string} dateString - La cadena de fecha a formatear.
 * @returns {string} - La hora formateada.
 */
const formatHour = (dateString) => {
    const date = new Date(dateString);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes}`;
}

export default formatHour
