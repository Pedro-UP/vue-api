<template>
  <div class="category_container">
       <!-- //* Para mostrar la imagen. -->
    <img @click="openMealDetails" v-bind:src="meal.strMealThumb" alt="" />
       <!-- //* Para mostrar el nombre del platillo -->
    <p><b>{{ meal.strMeal }}</b></p>
        <!-- //* Para mostrar la categoria y el origen -->
  </div>
</template>

<script>
export default{
    props:["meal"],
    methods:{
        openMealDetails(){
            this.$router.push("/meal/" + this.meal.idMeal);
        }
    }
}
</script>