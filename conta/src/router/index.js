import Vue from 'vue'
import VueRouter from 'vue-router'
import LibroDiario from '../views/LibroDiario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LibroDiario',
    component: LibroDiario
  },{
    path: '/diario',
    name: 'LibroDiario',
    component: LibroDiario
  },{
    path: '/mayor',
    name: 'LibroMayor',
    component: () => import('../views/LibroMayor.vue')
  },
  {
    path: '/informacion',
    name: 'Informacion',
    component: () => import('../views/Informacion.vue')
  },
  {
    path: '/partida',
    name: 'Partida',
    component: () => import( '../views/Partida.vue')
  },
  {
    path: '/balance',
    name: 'Balance',
    component: () => import( '../views/Balance.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
