<template>

<div>
  <div>
  <!-- As a heading -->
  <b-navbar toggleable type="dark" id="nav" variant="dark">
    <b-navbar-brand style="color: #fff; font-size: 25px">
       <img src="./assets/services.svg" class="d-inline-block align-top" style="width:3rem" alt="Icono de empresa">
       Ackerman Services
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/" class="link">Asientos Contables</router-link>
        </b-nav-item>
        <b-nav-item >
           <router-link to="/balance" class="link">Balance General</router-link>
        </b-nav-item>
        <b-nav-item> 
          <router-link to="/partida" class="link">Nueva Partida</router-link>
        </b-nav-item>
        <b-nav-item >
           <router-link to="/informacion" class="link">Información</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<div style="min-height: 100vh">
  <transition enter-active-class="slideInLeft"
    leave-active-class="slideOutRight" mode="out-in">
    <router-view/>
  </transition>
</div>
</div>
 
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('vue2-animate/dist/vue2-animate.min.css')

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  
}
</script>

<style>
*{
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


  body::-webkit-scrollbar {
	width: 5px;
  background: transparent;
}

body::-webkit-scrollbar-thumb {
	background: rgba(244, 93, 105);
  border-radius: 20px;
}

#nav{
  background-color: #5e5e5e !important;
}

.link{
  color: #aaaaaa;
  transition: all linear 0.5s;
  text-decoration: none;
  font-size: 14px;
}
.link:hover{
  color: #f45b69;
  text-decoration: none;
  font-size: 18px;
}

body{
  background-color: #fcfaf9;
}
</style>
