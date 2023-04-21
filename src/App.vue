<template>
   <div>
      <a href="https://github.com/Pedro-UP" target="_blank">
         <img src="/image/iconojpg.jpg" class="logo" alt="PC logo" />
      </a>
   </div>

   <div id="nav">
      <router-link to="/">Inicio</router-link>
   </div>
   <router-view></router-view>
</template>

<!-- //* Esta funcion utiliza axios para poder acceder a la api en este caso especificamente a
* categorias y si la consulta fue correcta lo mostrara con el metodo then, si hay un error
* nos lo mostrara a traves del metodo cath que es para ver el error y todo esto lo veremos
* en la consola del navegador. -->
<script>
   export default {
      name: "App"
   };
</script>

<style>
   .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
   }
   .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
   }
   .logo.vue:hover {
      filter: drop-shadow(0 0 2em #42b883aa);
   }

   .search-imput {
      border: 1px solid yellow;
      min-height: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
   }

   * {
      font-family: "Muli", sans-serif;
   }
   .category_container {
      border: 1px solid yellow;
      padding: 50px;
   }
</style>
