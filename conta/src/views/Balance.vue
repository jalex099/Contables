<template>
  <h1>Balance</h1>
</template>

<script>
// @ is an alias to /src

//import VerAsientos from '@/components/VerAsientos.vue'

export default {
  name: 'Home',
  components: {
    //VerAsientos
  },
  data: ()=>{
    return{
      cuentas:[]
    }
  },
  created: async function (){
    window.document.title = "Balance";
    
  }
}
</script>
