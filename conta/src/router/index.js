import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
