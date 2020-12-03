<template>
  <div class="w-100">
      <div v-for="movement in diario" :key="movement" class="py-3 px-5 mx-auto">
        <DetalleDiario v-bind:movement="movement"/>
        <hr>
      </div>
  </div>
</template>

<script>
import DetalleDiario from '@/components/DetalleDiario.vue'
export default {
  name: 'Diario',
  props:{
    diario:Array
  },
  components:{
      DetalleDiario
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>