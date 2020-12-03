<template>
    <b-row class="w-100">
      <b-col cols="12"> 
        <h3 class="display-4 px-2 py-4" style="font-family: 'Quicksand', sans-serif;">Libro Diario</h3>
        <hr>
        <Diario v-bind:diario="movements"/>
      </b-col>
    </b-row>
</template>

<script>
// @ is an alias to /src

import Diario from '@/components/Diario.vue'
export default {
  name: 'LibroDiario',
  components: {
    Diario
  },
  data: ()=>{
    return{
      movements:[]
    }
  },
  created: async function (){
    window.document.title = "Home";
    fetch("https://sistemas-contables.herokuapp.com/v1/accounting-seat")
          .then(res =>{
            return res.json()
          }) 
          .then(data =>{
            data['items'].forEach(element => {
              this.movements.push(element)
            });
          })
          .catch(error =>{
            console.log(error)
          })
  }
}
</script>
