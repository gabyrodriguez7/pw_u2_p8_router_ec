<template>
    <div class="container">
        <div class="imagen">
            <img v-if="flagUrl" :src="flagUrl" alt="no se puede cargar">
        </div>
        <div class="pais">
            <input v-model="pais" @keyup.enter="consumirAPI" type="text" placeholder="Ingresa el nombre del pais">
            <h2 v-if="instruccion">Recuerda terminar con un enter despues de ingresar el pais!</h2>
            <div class="informacion" v-if="esValida">
                <h1>{{ pensando }}</h1>
                <p>Capital: </p>
                <h1>{{ capital }}</h1>
                <p>Region: </p>
                <h1>{{ region }}</h1>
                <p>Idioma: </p>
                <h2>{{ idioma }}</h2> 
            </div>
            <h1>{{ respuesta }}</h1>
        </div>

    </div>
</template>

<script>
import { consultarRespuestaFachada } from '@/clients/RestCountries.js'
export default {
    data() {
        return {
            pais: null,
            respuesta: null,
            pensando:'',
            idioma: null,
            capita: null,
            region: null,
            flagUrl: '',
            esValida: false,
            instruccion: true,
        };
    },
    watch: {
        pregunta(value, oldValue) {
            this.esValida = false;
        }
    },
    methods: {
        async consumirAPI() {
            this.instruccion = false;
            this.respuesta = '';
            this.pensando = 'Pensando...';
            this.esValida = false;

            
            if (!this.pais) {
                this.pensando = '';
                this.respuesta = 'Ingresa un país válido.';
                return;
            }
            const resp = await consultarRespuestaFachada(this.pais);
            this.pensando = '';
            
            if (resp && resp.capital && resp.languages && resp.region) {
                this.idioma = resp.languages;
                this.capital = resp.capital;
                this.region = resp.region;
                this.flagUrl = resp.flags?.png || '';
                this.esValida = true;
                this.respuesta = '';
            } else {
                this.idioma = '';
                this.capital = '';
                this.region = '';
                this.flagUrl = '';
                this.esValida = false;
                this.respuesta = 'No se encontró información para el país ingresado.';
            }
        },
    },


}
</script>

<style scoped>
.container {
    padding-top: 20px;
}

h2 {
    font-size: 30px;
}

input {
    width: 310px;
    height: 30px;
    font-size: 25px;
    margin-top: 20px;
    border-radius: 7px;
    border: none;
}

img {
    border-radius: 7px;
    width: 310px;
}
p {
    font-size: 40px;
    display: flex;
    font-weight: bold;
}

.informacion {
    padding: 20px;
    margin: 20px auto 0 auto;
    background: #50975c ;
    border-radius: 10px;
    box-shadow:10px 10px #2f6037;
    width: 500px;

}
</style>