<template>
  <div class="home">
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
            data["items"].forEach(element => {
              element["sub_accounts"].forEach(elemen => {
                  this.cuentas.push(elemen)
              })
            });
          })
          .catch(error =>{
            console.log(error)
          })
  }
}
</script>
