<template>
    <div>
        <h1>Selecciona el Pokémon Correcto</h1>
        <PokemonImage :pokemonId="151" :mostrarImagen="true" />
        <PokemonOption :pokemons="this.vectorPokemon"/>
    </div>
</template>
<script>
import PokemonOption from "@/components/PokemonOption.vue";
import PokemonImage from "@/components/PokemonImage.vue";
import { obtenerOpcionesFachada } from '@/clients/PokemonClient.js'
export default {
    data() {
        return{
        vectorPokemon: [],
        }
    },
    components: {
        PokemonImage,
        PokemonOption,
    },
    methods: {
        async iniciarJuego() {
            const opciones = await obtenerOpcionesFachada(4);
            this.vectorPokemon = opciones;
            console.log(this.vectorPokemon);
            console.log(this.vectorPokemon);
            
        },
    },
    mounted() {
        this.iniciarJuego();
    }
}
</script>