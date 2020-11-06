<template>
  <div class="mdl-grid sin-espacio">
    <div class = "mdl-cell mdl-cell--7-col graybox sin-espacio">
      <VerAsientos v-bind:par="cuentas"/>
    </div>
    <div class = "mdl-cell mdl-cell--5-col graybox sin-espacio"><NuevaPartida v-bind:par="cuentas"/></div>
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
  },
  data: ()=>{
    return{
      cuentas:[]
    }
  },
  created: 
    async function () {
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
  padding: 0;
  margin: 0;
}
</style>