<template>
    <div >
        <h1>VENTA</h1>
        <VentaCedula/>
        <br>
        <ListaProductos/>
    </div>
</template>

<script >

import VentaCedula from '../components/VentaCedula.vue'
import ListaProductos from '../components/ListaProductos.vue'

export default{


    components:{
        VentaCedula,
        ListaProductos
    }
}

</script>

<style scoped>

</style>