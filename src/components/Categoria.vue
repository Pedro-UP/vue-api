<template>
    <!-- //* Usaremos los siguientes parametros para mostrar la api
   * idCategory, strCategory, strCategoryDescription, strCategoryThumb -->
  <div @click="openCategoryList" class="category_container">
       <!-- //* Para mostrar la imagen. -->
    <img v-bind:src="category.strCategoryThumb" alt="" />
       <!-- //* Para mostrar el nombre de la categoria -->
    <h6>{{ category.strCategory }}</h6>
        <!-- //* Para mostrar la descripcion -->
    <p>{{ category.strCategoryDescription }}</p>
  </div>
</template>

<script>
export default{
    props:["category"],
    methods:{
        openCategoryList(){
            this.$router.push("/category/" + this.category.strCategory);
        }
    }
}
</script>