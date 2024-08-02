<template>
    <div>
        <form class="formulario">
            <p><input v-model="codigo" type="text" placeholder="Codigo de barras"></p>
            <p><input v-model="nombre" type="text" placeholder="Nombre"></p>
            <p><input v-model="categoria" type="text" placeholder="Categoria"></p>
            <p><input v-model="stock" type="number" placeholder="Stock"></p>
            <p><input v-model="precio" type="number" placeholder="Precio unitario"></p>
            <p><button @click="insertar">AGREGAR</button></p>
        </form>
    </div>
</template>

<script>

import { guardarFachada } from '../clients/clienteProducto.js'

export default {
    data() {
        return {
            codigo: null,
            nombre: null,
            categoria: null,
            stock: null,
            precio: null
        }
    },

    methods: {

        async insertar() {
            const bodyProducto = {
                codigoBarras: this.codigo,
                nombre: this.nombre,
                categoria: this.categoria,
                stock: this.stock,
                precioUnitario: this.precio
            }

            const data = await guardarFachada(bodyProducto);
            this.reiniciar();
        },

        reiniciar(){
            this.codigo = null;
            this.nombre = null;
            this.categoria = null;
            this.stock = null;
            this.precio = null; 
        }

        

    }
}


</script>

<style scoped>
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

button:hover{
    background-color: rgb(55, 120, 79);
    text-decoration: underline;
    cursor: pointer;
}

</style>