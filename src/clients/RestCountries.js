import axios from "axios";

const consultaRespuesta = async (nombreBuscado) => {
    const respuesta = await axios.get('https://restcountries.com/v3.1/name/'+nombreBuscado);
    const paises = respuesta.data;
    const pais = paises.find(p =>
        p.name?.common?.toLowerCase() === nombreBuscado.toLowerCase());
    return pais;
}

export const consultarRespuestaFachada = async (nombreBuscado) => {
    return await consultaRespuesta(nombreBuscado);
}