<template>
  <h1>¿Deseas realizar una busqueda?</h1>
  <!--  //* Aqui se vincula la busqueda que pongamos con la variable search y cuando damos enter enviara dicha 
  * informacion al metodo shearcData. -->
  <input
    type="text"
    v-model="search"
    v-on:keyup.enter="searchData"
    placeholder="Buscar receta"
    class="search-imput"
  />

  <Meal
    v-for="meal in paginatedM"
    v-bind:key="meal.idMeal"
    v-bind:meal="meal"
  ></Meal>

  <div class="text-center">...</div>
  <div class="text-center">O Busca por Categoria</div>

  <!-- * Usamos un ciclo for para ir mostrando cada categoria, e igual 
        * se utiliza la llave para no tener errores.  -->
  <category
    v-for="category in paginated"
    v-bind:key="category.idCategory"
    v-bind:category="category"
  ></category>

  <div class="text-center">Actual: {{ current }}</div>

  <div class="text-center">
    <a @click="prev()">Anterior</a>
    |
    <a @click="next()">Siguiente</a>
  </div>
</template>

<script>
   import axios from "axios";
   import swal from "sweetalert";
   import category from "./Categoria.vue";
   import Meal from "./Meal.vue";
export default {
  name: "App",
  components: { category, Meal },
  data() {
    /* En nuestro componente App retornaremos los datos de categoria y meals */
    return {
      categories: [],
      meals: [],
      search: null,
      //Paginacion
      current: 1,
      pageSize: 5,
    };
  },
  mounted() {
    // Realiza una solicitud HTTP GET a la URL de la API de comidas
    axios
      .get("https://themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        // Si la solicitud es exitosa, imprime la lista de categorías en la consola
        this.categories = res.data.categories;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  /*  Propiedades calculadas que se actualizan automáticamente en 
  función de otras propiedades de la instancia de Vue.	 */
  computed: {
    indexStart() {
      //Este cálculo nos da el índice del primer elemento de la página actual en la matriz de datos.
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      // Este cálculo nos da el índice del último elemento de la página actual en la matriz de datos.
      return this.indexStart + this.pageSize;
    },
    paginated() {
      /*  Esta propiedad devuelve un subconjunto de la matriz de datos categories que 
      corresponde a la página actual.
      La propiedad slice se utiliza para seleccionar el subconjunto de 
      la matriz que corresponde a la página actual. */
      return this.categories.slice(this.indexStart, this.indexEnd);
    },
    paginatedM() {
      return this.meals.slice(this.indexStart, this.indexEnd);
    },
  },
  /* Funciones que realizan tareas específicas cuando se invocan 
  desde la instancia de Vue o en respuesta a un evento. */
  methods: {
    searchData() {
      // Verificar si el campo de busqueda tiene texto
      if (this.search) {
        axios
          .get(
            "https://themealdb.com/api/json/v1/1/search.php?s=" + this.search
          )
          // Actualizar el arreglo "meals" en el estado de la aplicación con los resultados de la búsqueda
          .then((response) => {
            this.meals = response.data.meals;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // Este componente es para mejorar el dideño del swet alert el cual primero debe
        // de descargarse y posteriormente importarce
        swal({
          title: "Atencion",
          text: "No a escrito nada en la busqueda!",
          icon: "error",
        });
      }
    },
    prev() {
      if (this.current > 1) {
        this.current--;
      } else {
        swal({
          title: "Atencion",
          text: "No Puede regresar a la pagina anterior, ya que no existe pagina anterior!",
          icon: "warning",
        });
      }
    },
    next() {
      this.current++;
    },
  },
};
</script>