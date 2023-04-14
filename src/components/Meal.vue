<template>
  <div class="category_container">
       <!-- //* Para mostrar la imagen. -->
    <img v-bind:src="meal.strMealThumb" alt="" />
       <!-- //* Para mostrar el nombre del platillo -->
    <p><b>{{ meal.strMeal }}</b></p>
        <!-- //* Para mostrar la categoria y el origen -->
    <h5>Categoria: {{ meal.strCategory }} | Origen: {{ meal.strArea}}</h5>
  </div>
</template>

<script>
export default{
    props:["meal"]
}
</script>