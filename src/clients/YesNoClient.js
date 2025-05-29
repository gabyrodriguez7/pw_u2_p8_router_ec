import axios from "axios";


//Creo la funcion que me permite integrarme

const consultarRespuesta = async() => {
    const repuesta = axios.get('https://yesno.wtf/api').then(rpt => rpt.data);
    console.log();
    return repuesta;
}

//Necesito crear una funcion fachada
export const consultarRespuestaFachada = async()=>{
    return await consultarRespuesta();
}
