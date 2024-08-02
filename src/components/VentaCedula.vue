<template>
    <div>
        <form class="formulario">
            <p>
                <label for="">Numero de venta</label>
                <br>
                <input v-model="numeroVenta" type="text" name="" id="">
                <br>
                <label for="">Cedula</label>
                <br>
                <input v-model="cedula" type="text" name="" id="">
            </p>
            <p>
                <button @click="guardar">Guardar</button>
            </p>
        </form>
    </div>
</template>

<script>

import{guardarFachada} from '../clients/clienteVenta.js'

export default{
    data(){
        return{
            numeroVenta: null,
            cedula:null
        }
    },

    methods: {
        async guardar() {
            const bodyVenta={
                numero: this.numeroVenta,
                cedulaCliente: this.cedula
            }

            const data = await guardarFachada(bodyVenta);
            this.reiniciar();
        },

        reiniciar(){
            this.numeroVenta =null,
            this.cedula = null
        }
    }
}

</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px black;
}

.formulario {
    display: grid;
    grid-template-columns: repeat(2,350px);
}

input {
    border-radius: 5px;
    padding: 10px 20px;
    border: solid 1px black;
}

button {
    border-radius: 5px;
    background-color: rgb(72, 156, 103);
    color: white;
    padding: 10px 20px;
    border: none;
}

button:hover {
    background-color: rgb(55, 120, 79);
    text-decoration: underline;
    cursor: pointer;
}
</style>