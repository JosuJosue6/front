<template>
    <div class="container">
        <div>
            <form class="formulario">
                <p type="Codigo de barras"><input v-model="codigo" type="text"></p>
                <p type="Cantidad"><input v-model="cantidad" type="text"></p>
                <p><button @click="agregar">AGREGAR</button></p>
            </form>
        </div>
        <div class="tabla">
            <ul>C.barras Nombre Cantidad Precio Subtotal</ul>
            <li v-for="({ codigo, nombre, cantidad, precio, subtotal }) in lista">

                <ul>
                    <h3>{{ codigo }} {{ nombre }} {{ cantidad }} {{ precio }} {{ subtotal }} </h3>
                </ul>
            </li>
            <p >Total:{{total}}</p>
        </div>
    </div>
</template>

<script>

import { buscarFachada } from '@/clients/clienteProducto';

const productos = [
    { codigo: null, nombre: null, cantidad: null, precio: null, subtotal: null }
]
export default {

    data() {
        return {
            codigo: null,
            cantidad: null,
            nombre: null,
            precio: null,
            subtotal: null,
            lista: productos
        }
    },

    methods: {
        async agregar() {
            const producto = await buscarFachada(this.codigo);
            console.log(producto);
            const productoNuevo = {
                codigo: this.codigo,
                cantidad: this.cantidad,
                nombre: producto.nombre,
                precio: producto.precioUnitario,
                subtotal: this.cantidad * producto.precioUnitario,
            }
            this.lista.push(productoNuevo);
        },

        buscar(codigoBarras) {
            const producto = productos.find(producto => producto.codigoBarras === codigoBarras);
            return producto;
        }
    },
    computed:{
        total(){
            return this.lista.reduce((accumulado, producto) => accumulado + producto.subtotal, 0);
        }
    }
}

</script>

<style scoped>
.tabla {
    border: solid 1px black;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px black;
}

.formulario {
    display: grid;
    grid-template-columns: repeat(3, 350px);
}

input {
    border-radius: 5px;
    padding: 10px 20px;
    border: solid 1px black;
}

p:before {
    content: attr(type);
    display: block;
    margin: 5px 2px;
    font-size: 15px;
    color: black;

}

button {
    border-radius: 5px;
    background-color: rgb(72, 156, 103);
    color: white;
    padding: 10px 20px;
    border: none;
    margin: 20px;
}

button:hover {
    background-color: rgb(55, 120, 79);
    text-decoration: underline;
    cursor: pointer;
}

label {
    margin: 20px 20px;
}

li {
    list-style-type: none;
}
</style>