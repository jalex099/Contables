<template>
            <!-- Always shows a header, even in smaller screens. -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">Sistemas Contables</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <a class="mdl-navigation__link" href="">Inicio</a>
                <a class="mdl-navigation__link" href="">Asientos Contables</a>
                <a class="mdl-navigation__link" href="">Nuevo asiento</a>
            </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Title</span>
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="">Inicio</a>
              <a class="mdl-navigation__link" href="">Asientos Contables</a>
              <a class="mdl-navigation__link" href="">Nuevo asiento</a>
            </nav>
        </div>
        <main class="mdl-layout__content">
            <div class="page-content"><!-- Your content goes here -->
              <NuevaPartida/>
            </div>
        </main>
        </div>
</template>

<script>
import NuevaPartida from './components/NuevaPartida.vue'

export default {
  name: 'App',
  created: function() {
           window.document.title = "Sistemas Contables"
       },
  components: {
    NuevaPartida
  }
}
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body{
  margin: 0;
  padding: 0;
}

</style>
