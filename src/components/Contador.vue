<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <p>{{ numero }} <sup>2</sup> = {{ calCuadrado }}</p>
        <div>
            <button v-on:click="incrementar()">+1</button>
            <button @click="decrementar()">-1</button>
        </div>

        <!--<p>{{ numero + 1 }}</p>
        <p>{{ texto }}</p>
        <p>{{ activo }}</p>
        <p>{{ usuario }}</p>
        <p>{{ arreglo }}</p>
        1+1
        {{ 1 + 1 }}
        true? 'Es Verdadero': 'Es falso'
        {{ true ? "Es verdadero" : "Es falso" }}-->
    </div>
</template>

<script>
export default {
    /* props: ["title", "value"],*/
    props: {
        title: String,
        value: {
            type: Number,
            required: false,
            default: 100,
            validator(value) {
                return value > 0;
            }
        },
        p1: Boolean,
        p2: Array,
        p3: Object,
        p4: Function,
        p5: Date,
        p6: Symbol
    },
    data() {
        return {
            numero: this.value,
            titulo: "Contador",
            texto: "Gabriela Rodríguez",
            activo: true,
            usuario: {
                nombre: "Gaby",
                edad: 25,
                genero: "F",
            },
            arreglo: ["Amarillo", "Azul"],
        };
    },
    methods: {
        calcularCuadrado() {
            console.log("Entro al metodo");
            return this.numero * this.numero;
        },
        incrementar() {
            this.numero++;
        },
        decrementar() {
            this.numero--;
        },
    },
    computed: {
        calCuadrado() {
            console.log("Entro al propiedad computada");
            return this.numero * this.numero;
        },
    },
    created (){
        if(this.value > 0){
            console.log('Es correcto')
        }else{
            throw new Error('Error el valor no puede ser menor que cero');
        }
    }
};
</script>

<style>
p {
    color: rgb(170, 183, 212);
}
</style>