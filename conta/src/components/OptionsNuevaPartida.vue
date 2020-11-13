<template>
    <option v-bind:value="cuenta._id">{{cuenta.name}}</option>
</template>

<script>

export default {
  name: 'NuevaPartida',
  props:{
    cuenta: Array
  },
  data: ()=>{
    return{
    }
  },
  methods: {
   
  },
  created: function(){
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>