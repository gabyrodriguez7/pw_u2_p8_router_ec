<template>
  <div class="container">
    <!-- Mensaje de éxito o error -->
    <div v-show="mostrarMensaje" class="alert">
      <h2>{{ mensajeFinal }}</h2>
    </div>
  
    <label for="id_nombre">Nombre: </label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <span v-if="mensaje.nombre">{{ mensaje.nombre }}</span>
  
    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <span v-if="mensaje.apellido">{{ mensaje.apellido }}</span>
  
    <label for="id_edad">Edad: </label>
    <input v-model="nuevoEdad" id="id_edad" type="number" />
  
    <label for="id_FechaNacimiento">Fecha de nacimiento: </label>
    <input v-model="nuevoFechaNacimiento" id="id_FechaNacimiento" type="date" />
  
    <label for="id_email">Email: </label>
    <input v-model="nuevoEmail" id="id_email" type="email" />
  
    <button @click="agregarEstudiante">Agregar</button>
  
    <ul>
      <li v-for="{ nombre, apellido, edad, fechaNacimiento, email } in lista" :key="nombre + apellido">
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} -
        Fecha de nacimiento: {{ fechaNacimiento }} - Email: {{ email }}
      </li>
    </ul>
  
    <button @click="obtenerPathVariable">Path Variable</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: null,
      nuevoApellido: null,
      nuevoEdad: null,
      nuevoFechaNacimiento: null,
      nuevoEmail: null,
      lista: [
        {
          nombre: "Gabriela",
          apellido: "Rodriguez",
          edad: 25,
          fechaNacimiento: "1999-06-29",
          email: "gabyr@uce.edu.ec",
        },
        {
          nombre: "Daniel",
          apellido: "Torres",
          edad: 23,
          fechaNacimiento: "2002-01-10",
          email: "danit@uce.edu.ec",
        },
        {
          nombre: "Carlos",
          apellido: "Lopez",
          edad: 28,
          fechaNacimiento: "1996-04-27",
          email: "carlols@uce.edu.ec",
        },
        {
          nombre: "Steven",
          apellido: "Cruz",
          edad: 22,
          fechaNacimiento: "2003-11-11",
          email: "stevenc@uce.edu.ec",
        },
        {
          nombre: "Belen",
          apellido: "Castillo",
          edad: 21,
          fechaNacimiento: "2004-07-05",
          email: "belenc@uce.edu.ec",
        },
        {
          nombre: "Juan",
          apellido: "Teran",
          edad: 20,
          fechaNacimiento: "2005-12-12",
          email: "juant@uce.edu.ec",
        },
        {
          nombre: "Luis",
          apellido: "Boada",
          edad: 19,
          fechaNacimiento: "2006-10-15",
          email: "luisb@uce.edu.ec",
        },
      ],
      mostrarMensaje: false,
      nombreMensaje: false,
      apellidoMensaje: false,
      fechaNacimientoMensaje: false,
      emailMensaje: false,
      monedaMensaje: false,
      mensaje: {
        nombre: null,
        apellido: null,
      },
      mensajeFinal: null,
    };
  },
  methods: {
    agregarEstudiante() {
      if (this.validarEntradas()) {
        const nuevo = {
          nombre: this.nuevoNombre,
          apellido: this.nuevoApellido,
          edad: this.nuevoEdad,
          fechaNacimiento: this.nuevoFechaNacimiento,
          email: this.nuevoEmail,
        };

        this.lista.push(nuevo);

        this.mostrarMensaje = true;
        setTimeout(() => {
          this.mostrarMensaje = false;
        }, 3000);
        this.mensajeFinal="Estudiante guardado";
        this.limpiarPagina();
      }
    },
    validarEntradas() {
      try {
        let valido = this.mensaje.nombre.primero;
        let numero = 0;
        if (!this.nuevoNombre || this.nuevoNombre.trim() === "") {
          this.mensaje.nombre = "Nombre es obligatorio";
          valido = false;
        } else {
          numero++;
        }

        if (!this.nuevoApellido || this.nuevoApellido.trim() === "") {
          this.mensaje.apellido = "Apellido es obligatorio";
          valido = false;
        } else {
          numero++;
        }

        if (numero === 2) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Error ha ocurrido un problema");
        console.error(error);
        this.mostrarMensaje = true;
        this.mensajeFinal = "Ha ocurrido un error en el sistema";
        return false;
      }
    },
    limpiarPagina() {
      this.nuevoNombre = null;
      this.nuevoApellido = null;
      this.nuevoEdad = null;
      this.nuevoFechaNacimiento = null;
      this.nuevoEmail = null;
      this.mensaje.nombre = null;
      this.mensaje.apellido = null;
    },
    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log("Cédula:", cedula);

      const anio = this.$route.query.anio;
      console.log("Año:", anio);
      const mes = this.$route.query.mes;
      console.log("Mes:", mes);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("create");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    const cedula = this.$route.params.cedula;
    console.log("Cédula:", cedula);

    const anio = this.$route.query.anio;
    console.log("Año:", anio);
    const mes = this.$route.query.mes;
    console.log("Mes:", mes);
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("Destruyo o quito un componente");
  },
  unmounted() {

  }
};
</script>

<style scoped>
.container {
  background: rgb(143, 240, 235);
  border: 1px solid;
  border-radius: 12px;
  max-width: 900px;
  margin: 50px auto;
  padding: 30px 40px 30px 20px;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.alert {
  background-color: #e0f7e9;
  border: 1px solid #48c78e;
  color: #276749;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
}

label {
  display: block;
  color: #0d1615ab;
  text-align: left;
}

input {
  background: #d9faf8;
  color: #2c3b38;
  text-align: left;
  width: 100%;
  height: 18px;
  border-radius: 5px;
  border: 1px solid #4e7c77ab;
  margin-bottom: 20px;
  padding: 5px 10px;
}

span {
  color: red;
  font-size: 0.9rem;
  display: block;
  margin-top: -15px;
  margin-bottom: 10px;
}

button {
  background: rgb(212, 252, 248);
  color: #2c3b38;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
  margin-top: 15px;
}

ul {
  list-style: none;
  margin-top: 30px;
  padding-left: 0;
}

li {
  background: rgb(212, 252, 248);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #2c3b38;
  font-size: 16px;
}
</style>
