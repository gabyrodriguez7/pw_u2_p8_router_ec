<template>
    <div class="container">
        <div v-show="mostrar">
            <h1>Estudiante Guardado</h1>
            </div>
        <label for="id_nombre">Nombre: </label>
        <input v-model="nuevoNombre" id="id_nombre" type="text" />

        <label for="id_apellido">Apellido: </label>
        <input v-model="nuevoApellido" id="id_apellido" type="text" />

        <label for="id_edad">Edad: </label>
        <input v-model="nuevoEdad" id="id_edad" type="number" />

        <label for="id_FechaNacimiento">Fecha de nacimiento: </label>
        <input v-model="nuevoFechaNacimiento" id="id_FechaNacimiento" type="date">

        <label for="id_email">Email: </label>
        <input v-model="nuevoEmail" id="id_email" type="email">

        <button v-on:click=" agregarEstudiante()">Agregar</button>

        <!--<ul>
            <li v-for="{ nombre, apellido, edad, fechaNacimiento, email } in lista" :key="nombre">Nombre: {{ nombre }} -
                Apellido: {{ apellido }} - Edad: {{ edad }} - Fecha de nacimiento: {{ fechaNacimiento }} - Email: {{
                    email }}</li>

        </ul>-->

        <table>
            <thead>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Fecha de nacimiento</th>
                <th>email</th>
                <th>Boton</th>
            </thead>
            <tbody>
                <tr v-for="{ nombre, apellido, edad, fechaNacimiento, email } in lista" :key="nombre">
                    <td>{{ nombre }}</td>
                    <td>{{ apellido }}</td>
                    <td>{{ edad }}</td>
                    <td>{{ fechaNacimiento }}</td>
                    <td>{{ email }}</td>
                    <td><button>ver</button></td>
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
            nuevoNombre: null,
            nuevoApellido: null,
            nuevoEdad: null,
            nuevoFechaNacimiento: null,
            nuevoEmail: null,
            lista: [{ nombre: "Gabriela", apellido: "Rodriguez", edad: 25, fechaNacimiento: "1999-06-29", email: "gabyr@uce.edu.ec" },
            { nombre: "Daniel", apellido: "Torres", edad: 23, fechaNacimiento: "2002-01-10", email: "danit@uce.edu.ec" },
            { nombre: "Carlos", apellido: "Lopez", edad: 28, fechaNacimiento: "1996-04-27", email: "carlols@uce.edu.ec" },
            { nombre: "Steven", apellido: "Cruz", edad: 22, fechaNacimiento: "2003-11-11", email: "stevenc@uce.edu.ec" },
            { nombre: "Belen", apellido: "Castillo", edad: 21, fechaNacimiento: "2004-07-05", email: "belenc@uce.edu.ec" },
            { nombre: "Juan", apellido: "Teran", edad: 20, fechaNacimiento: "2005-12-12", email: "juant@uce.edu.ec" },
            { nombre: "Luis", apellido: "Boada", edad: 19, fechaNacimiento: "2006-10-15", email: "luisb@uce.edu.ec" }
            ]  
        };
        
    },
    methods: {
        agregarEstudiante() {
            const nuevo = {
                nombre: this.nuevoNombre,
                apellido: this.nuevoApellido,
                edad: this.nuevoEdad,
                fechaNacimiento: this.nuevoFechaNacimiento,
                email: this.nuevoEmail
            }
            /*this.lista.unshift(nuevo);*/
            this.lista.push(nuevo);
            this.mostrar=true;
            this.nombre=null;

            setTimeout(()=>{this.mostrar=false;},3000);
        },
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

button {
    background: rgb(212, 252, 248);
    color: #2c3b38;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    width: 200px;
}

ul {
    list-style: none;
    margin-top: 30px;
}

li {
    background: rgb(212, 252, 248);
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 15px;
    color: #2c3b38;
    font-size: 16px;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.95rem;
    background-color: #6eb9cf;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;
    margin-top: 25px;

}

thead {
    background-color: #f4f6f8;
}

thead th {
    text-align: left;
    padding: 15px;
    color: #333;
    font-weight: 600;
    border-bottom: 2px solid #a6bbd6;
    text-align: center;
}

tbody tr {
    transition: background-color 0.2s;
}

tbody tr:nth-child(even) {
    background-color: #d2e1f0;
}

tbody tr:hover {
    background-color: #eef3f9;
}

tbody td {
    padding: 15px;
    border-bottom: 1px solid #e3e6ea;
    color: #444;
}
</style>
