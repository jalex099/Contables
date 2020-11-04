<template>
  <div class="mdl-grid sin-espacio">
    <div class = "mdl-cell mdl-cell--7-col graybox sin-espacio"><VerAsientos /></div>
    <div class = "mdl-cell mdl-cell--5-col graybox sin-espacio"><NuevaPartida/></div>
  </div>
</template>

<script>
// @ is an alias to /src
import NuevaPartida from '@/components/NuevaPartida.vue'
import VerAsientos from '@/components/VerAsientos.vue'

export default {
  name: 'Asientos',
  components: {
    NuevaPartida,
    VerAsientos
  }
}
</script>

<style  scoped>
.nuevaPartida{
  background-color : red;
}

.sin-espacio{
  padding: 0;
  margin: 0;
}
</style>