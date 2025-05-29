<template>
    <div class="container">
        <div v-show="mostrar" class="notificacion">
            <h1>Mascota Guardada.!</h1>
        </div>

        <label for="id_nombre">Nombre: </label>
        <input v-model="nuevoNombre" id="id_nombre" type="text">
        <span v-if="errores.nombre" class="error">Campo obligatorio</span>

        <label for="id_especie">Especie: </label>
        <input v-model="nuevoEspecie" id="id_especie" type="text">
        <span v-if="errores.especie" class="error">Campo obligatorio</span>

        <label for="id_raza">Raza: </label>
        <input v-model="nuevoRaza" id="id_raza" type="text">
        <span v-if="errores.raza" class="error">Campo obligatorio</span>

        <label for="id_edad">Edad:</label>
        <input v-model="nuevoEdad" id="id_edad" type="number" min="0">
        <span v-if="errores.edad" class="error">Campo obligatorio</span>

        <label for="id_genero">Género: </label>
        <input v-model="nuevoGenero" id="id_genero" type="text">
        <span v-if="errores.genero" class="error">Campo obligatorio</span>

        <button @click="validarYAgregar">Agregar</button>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Especie</th>
                    <th>Raza</th>
                    <th>Edad</th>
                    <th>Género</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ nombre, especie, raza, edad, genero } in mascotas" :key="nombre">
                    <td>{{ nombre }}</td>
                    <td>{{ especie }}</td>
                    <td>{{ raza }}</td>
                    <td>{{ edad }}</td>
                    <td>{{ genero }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mostrar: false,
            nuevoNombre: "",
            nuevoEspecie: "",
            nuevoRaza: "",
            nuevoEdad: null,
            nuevoGenero: "",
            errores: {
                nombre: false,
                especie: false,
                raza: false,
                edad: false,
                genero: false,
                peso: false,
                dueno: false
            },
            mascotas: [
                {
                    "nombre": "Max",
                    "especie": "Perro",
                    "raza": "Labrador Retriever",
                    "edad": 3,
                    "genero": "Macho"
                },
                {
                    "nombre": "Luna",
                    "especie": "Gato",
                    "raza": "Siamesa",
                    "edad": 2,
                    "genero": "Hembra"
                },
                {
                    "nombre": "Rocky",
                    "especie": "Conejo",
                    "raza": "Cabeza de León",
                    "edad": 1,
                    "genero": "Macho"
                },
                {
                    "nombre": "Polly",
                    "especie": "Ave",
                    "raza": "Loro Amazónico",
                    "edad": 5,
                    "genero": "Hembra"
                }
            ]
        }
    },
    methods: {
        validarYAgregar() {
            this.errores = {
                nombre: !this.nuevoNombre,
                especie: !this.nuevoEspecie,
                raza: !this.nuevoRaza,
                edad: this.nuevoEdad === null || this.nuevoEdad === '',
                genero: !this.nuevoGenero,
            };

            const tieneErrores = Object.values(this.errores).some(e => e);
            if (tieneErrores) return;

            const nuevaMascota = {
                nombre: this.nuevoNombre,
                especie: this.nuevoEspecie,
                raza: this.nuevoRaza,
                edad: this.nuevoEdad,
                genero: this.nuevoGenero
            };

            this.mascotas.push(nuevaMascota);
            this.mostrar = true;
            setTimeout(() => { this.mostrar = false }, 3000);

            this.limpiarInput();
        },
        limpiarInput() {
            this.nuevoNombre = "";
            this.nuevoEspecie = "";
            this.nuevoRaza = "";
            this.nuevoEdad = null;
            this.nuevoGenero = "";
        }
    }
}
</script>

<style scoped>
.container {
    background: #45b39d;
    border-radius: 15px;
    max-width: 700px;
    margin: 50px auto;
    padding: 20px 30px;
}

label {
    display: block;
    margin: 5px 14px;
    font-weight: bold;
    text-align: left;

}

input {
    width: 670px;
    height: 23px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    margin-bottom: 5px;
}

.error {
    color: red;
    font-size: 13px;
    margin-bottom: 10px;
    display: block;
    text-align: left;
    padding: 0px 14px;
}

button {
    background: #b6dcd5;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    padding: 10px 15px;
}

button:active {
    background: #6aa0a2;
}

table {
    width: 90%;
    margin: 30px auto;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background-color: white;
}

thead {
    background-color: #54999b;
    color: white;
}

thead th {
    padding: 12px 20px;
}

tbody td {
    padding: 12px 20px;
    border-bottom: 1px solid #eee;
}

tbody tr:hover {
    background-color: #c3eaea;
}
</style>
