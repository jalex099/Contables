<template>
  <div class="tblData container">
        <b-table striped hover :items="cuenta"></b-table>
  </div>
  
</template>

<script>
export default {
  name: 'DetalleBalance',
  props:{
    cuenta:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tblData{
  height: 100vh;
  overflow: auto;
}

  .tblData::-webkit-scrollbar {
	width: 5px;
  background: transparent;
}

.tblData::-webkit-scrollbar-thumb {
	background: rgba(244, 91, 105,0.2);
  border-radius: 20px;
}
</style>