<template>
  <div class="tblData">
        <b-table striped hover :items="par"></b-table>
  </div>
  
</template>

<script>
export default {
  name: 'VerAsientos',
  props:{
    par:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tblData{
  height: 40rem;
  overflow: auto;
}
</style>