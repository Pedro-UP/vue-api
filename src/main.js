import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//*Importar el router
import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import CategoryDetails from './components/CategoryDetails.vue'
import MealDetails from './components/MealDetails.vue'

//* Definir las Rutas
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category/:title',
        name: 'Category',
        component: CategoryDetails
    },
    {
        path: '/meal/:id',
        name: 'Meal',
        component: MealDetails
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

createApp(App).use(router).mount('#app')
