import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '../views/LoginView.vue'
import CatalogViewVue from '../views/GrupoView.vue'
import MateriasViewVue from '../views/MateriaView.vue'
import AlumnosViewVue from '../views/AlumnoView.vue'
import CalificacionesViewVue from '../views/CalificacionesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogViewVue
    },
    {
      path: '/materias',
      name: 'materias',
      component: MateriasViewVue
    },
    {
      path: '/alumnos',
      name: 'alumnos',
      component: AlumnosViewVue
    },
    {
      path:'/calificaciones',
      name:'calificaciones',
      component: CalificacionesViewVue

    }
  ]
})

export default router
