<template>
  <h3>{{ category_title }}</h3>

  <Meal
    v-for="meal in meals"
    v-bind:key="meal.idMeal"
    v-bind:meal="meal"
  ></Meal>

</template>

<script>
import axios from "axios";
import Meal from "./Meal2.vue";

export default {
  name: "CategoryDetails",
  components: {
    Meal
  },
  data() {
    return {
      category_title: this.$route.params.title,
      meals: [],
      page: 1,
      pages: 1
    };
  },
  mounted() {
    console.log(this.$route.params);
    axios
      .get("https://themealdb.com/api/json/v1/1/filter.php?c=" + this.category_title)
      .then((res) => {
        // Si la solicitud es exitosa, imprime la lista de categorías en la consola
        this.meals = res.data.meals;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>