<template>
    <div>
        <h1>Selecciona el Pokémon Correcto</h1>
        <PokemonImage :pokemonId="50" :mostrarImagen="true" />
        <PokemonOption />
    </div>
</template>
<script>
import PokemonOption from "@/components/PokemonOption.vue";
import PokemonImage from "@/components/PokemonImage.vue";
export default {
    components: {
        PokemonImage,
        PokemonOption,
    }
}
</script>