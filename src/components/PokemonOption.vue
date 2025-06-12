<template>
      {{ mensaje2 }}
  <div class="option-container">
    <ul>
      <li @click="comunicarclick(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>

export default {
    data() {
    return {
      mensaje2:'mensaje2'
    }
  },
  props: {
    pokemons: {
      type: Array,
      required: true
    },
  },
  methods:{
    comunicarclick(id){
      console.log("Click...");
      console.log("Id del hijo: "+id)
      
      const objetoEviado={
        atributo:id,
        atributo2:"Gaby",
        atributo3:"dos "
      }
      this.$emit('seleccionado',objetoEviado)
    },
  },

};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

.option-container {
  display: flex;
  justify-content: center;
}

li:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>