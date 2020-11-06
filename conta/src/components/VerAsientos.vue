<template>
  <div class="contenedor">
    <div class="cuentas" v-for="cuenta in par" :key="cuenta.id">
      <Partida v-bind:par="cuenta"/>
    </div>
  </div>
  
</template>

<script>
import Partida from '@/components/Partida.vue'
export default {
  name: 'VerAsientos',
  components:{
    Partida
  },
  props:{
    par:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenedor{
  padding: 2rem 1.5rem;
}

.cuentas{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 2rem;
}
</style>