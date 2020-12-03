<template>
    <b-row class="w-100">
      <b-col cols="12"> 
        {{cuentas}}
      </b-col>
    </b-row>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'LibroMayor',
  components: {
  },
  data: ()=>{
    return{
      cuentas:[],
      active:[],
      passive:[],
      capital:[],
      income:[],
      cost:[],
      expense:[]
    }
  },
  created: async function (){
    window.document.title = "Home";
    fetch("https://sistemas-contables.herokuapp.com/v1/accounts")
          .then(res =>{
            return res.json()
          }) 
          .then(data =>{
            data['items'].forEach(element => {
              this.cuentas.push(element)
            });
          })
          .catch(error =>{
            console.log(error)
          })
  }
}
</script>
