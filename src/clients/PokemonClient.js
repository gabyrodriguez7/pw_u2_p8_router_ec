import axios from "axios";


const consumirPokemon = async (id) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rpt => rpt.data);
    return respuesta;
}

//Funciones Fachada

export const consumirPokemonFachada = async (id) => {
    return await consumirPokemon(id);
}