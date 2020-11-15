<template>

<div>
  <div>
  <!-- As a heading -->
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="#">Contabilidad</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/" class="mdl-navigation__link">Home</router-link>
        </b-nav-item>
        <b-nav-item >
           <router-link to="/about" class="mdl-navigation__link">About</router-link>
        </b-nav-item>
        <b-nav-item> 
          <router-link to="/asientos" class="mdl-navigation__link">Asientos Contables</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<router-view/>
</div>
 
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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
</style>
