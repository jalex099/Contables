<template>
  <div class="contenedor">
    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
  <thead>
    <tr>
      <th class="mdl-data-table__cell--non-numeric">Material</th>
      <th>Quantity</th>
      <th>Unit price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
      <td>25</td>
      <td>$2.90</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
      <td>50</td>
      <td>$1.25</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
      <td>10</td>
      <td>$2.35</td>
    </tr>
  </tbody>
</table>

<button @click="getUsers">GetUsers</button>
<ul>
  <li v-for="user in users" :key="user.id">{{user.name}}</li>
</ul>
  </div>
  
</template>

<script>

export default {
  name: 'VerAsientos',
  data: ()=>{
    return{
      users:[]
    }
  },
  methods:{
    getUsers(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res =>{
        return res.json()
      }) 
      .then(data =>{
        this.users = data;
      })
      .catch(error =>{
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenedor{
  padding: 2rem 1.5rem;
}
</style>