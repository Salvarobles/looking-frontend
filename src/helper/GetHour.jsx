const GetHour = (checkIn) => {
    // Crear un objeto de fecha a partir de la cadena de fecha proporcionada
    const date = new Date(checkIn);
    
    // Obtener la hora, los minutes y los segundos de la fecha
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Formatear la hora como una cadena HH:MM:SS
    const hourFormated = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    
    return hourFormated;
}

export default GetHour;