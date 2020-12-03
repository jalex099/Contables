<template>
  <div>
      <div v-for="eleme in element" :key="eleme" class="data">
        <p class="text-muted">{{eleme['account_name']}}</p>
        <p class="text-muted">$ {{eleme['amount']}}</p>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'ElementDiario',
  props:{
    element:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data{
    display: flex;
    justify-content: space-between;
}
</style>