<template>
  <!-- Always shows a header, even in smaller screens. -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title" style="font-family: 'Quicksand', sans-serif;">Sistemas Contables</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <router-link to="/" class="mdl-navigation__link">Home</router-link>
                <router-link to="/about" class="mdl-navigation__link">About</router-link>
                <router-link to="/asientos" class="mdl-navigation__link">Asientos Contables</router-link>
            </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title" style="font-family: 'Quicksand', sans-serif;">Sistemas Contables</span>
            <nav class="mdl-navigation">
              <router-link to="/" class="mdl-navigation__link">Home</router-link>
                <router-link to="/about" class="mdl-navigation__link">About</router-link>
                <router-link to="/asientos" class="mdl-navigation__link">Asientos Contables</router-link>
            </nav>
        </div>
        <main class="mdl-layout__content">
            <div class="page-content"><!-- Your content goes here -->
              <router-view/>
            </div>
        </main>
        </div>
</template>


<style>
*{
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
