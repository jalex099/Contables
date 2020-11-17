<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <VerAsientos v-bind:par="cuentas"/>
  </div>
</template>

<script>
// @ is an alias to /src

import VerAsientos from '@/components/VerAsientos.vue'

export default {
  name: 'Home',
  components: {
    VerAsientos
  },
  data: ()=>{
    return{
      cuentas:[]
    }
  },
  created: async function (){
    window.document.title = "Home";
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
  }
}
</script>
