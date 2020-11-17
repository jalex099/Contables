<template>
<b-row class="w-100">
  <b-col cols="12" class="py-3">
    <NuevaPartida v-bind:par="cuentas"/>
  </b-col>
</b-row>
</template>

<script>
// @ is an alias to /src
import NuevaPartida from '@/components/NuevaPartida.vue'

export default {
  name: 'Asientos',
  components: {
    NuevaPartida
  },
  data: ()=>{
    return{
      cuentas:[]
    }
  },
  created: 
    async function () {
      window.document.title = "Asientos Contables"
      fetch("https://sistemas-contables.herokuapp.com/v1/accounts")
          .then(res =>{
            return res.json()
          }) 
          .then(data =>{
            this.cuentas = data["items"];
          })
          .catch(error =>{
            console.log(error)
          })
    },
  methods:{
 
  }
}
</script>

<style  scoped>
.nuevaPartida{
  background-color : red;
}

.sin-espacio{
  padding: 2rem;
  margin: 0;
}
</style>