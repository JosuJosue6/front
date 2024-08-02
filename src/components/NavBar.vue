<template>
    <div >
        <router-link to="/">Bienvenida</router-link>
        <router-link to="/producto">Ingresar un Producto</router-link>
        <router-link to="/venta">Realizar venta</router-link>
    </div>
</template>

<script>

</script>

<style scoped>
div {
    position: relative;
    background-color: black;
    padding: 20px 30px;

}

a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

a:hover {
    color: rgb(0, 0, 0);
    background-color: white;
    padding: 20px 30px;
    border-radius: 5px;
    text-decoration: underline;
}

</style>