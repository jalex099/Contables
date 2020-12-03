<template>
    <b-row class="w-100">
      <b-col cols="12"> 
        <h3 class="display-4 px-2 py-4" style="font-family: 'Quicksand', sans-serif;">Libro Mayor</h3>
        <hr>
        <div v-for="element in cuentas" :key="element" class="container px-5 py-2">
          <div v-if="element['name']=='Activos'">
            <h3>Activos</h3>
            <div v-for="exe in element['sub_accounts']" :key="exe">
              <div class="flex-box" v-if="exe['current_amount']>0">
                <p class="text-muted">{{exe['name']}}</p>
                <p class="text-muted">$ {{exe['current_amount']}}</p>
              </div>
            </div>
          </div>

          <div v-if="element['name']=='Pasivos'">
            <h3>Pasivos</h3>
            <div v-for="exe in element['sub_accounts']" :key="exe">
              <div class="flex-box" v-if="exe['current_amount']>0">
                <p class="text-muted">{{exe['name']}}</p>
                <p class="text-muted">$ {{exe['current_amount']}}</p>
              </div>
            </div>
          </div>

          <div v-if="element['name']=='Capital'">
            <h3>Capital</h3>
            <div v-for="exe in element['sub_accounts']" :key="exe">
              <div class="flex-box" v-if="exe['current_amount']>0">
                <p class="text-muted">{{exe['name']}}</p>
                <p class="text-muted">4 {{exe['current_amount']}}</p>
              </div>
            </div>
          </div>

          <div v-if="element['name']=='Ingresos'">
            <h3>Ingresos</h3>
            <div v-for="exe in element['sub_accounts']" :key="exe">
              <div class="flex-box" v-if="exe['current_amount']>0">
                <p class="text-muted">{{exe['name']}}</p>
                <p class="text-muted">$ {{exe['current_amount']}}</p>
              </div>
            </div>
          </div>

          <div v-if="element['name']=='Costos'">
            <h3>Costos</h3>
            <div v-for="exe in element['sub_accounts']" :key="exe">
              <div class="flex-box" v-if="exe['current_amount']>0">
                <p class="text-muted">{{exe['name']}}</p>
                <p class="text-muted">$ {{exe['current_amount']}}</p>
              </div>
            </div>
          </div>

          <div v-if="element['name']=='Gastos'">
            <h3>Gastos</h3>
            <div v-for="exe in element['sub_accounts']" :key="exe">
              <div class="flex-box" v-if="exe['current_amount']>0">
                <p class="text-muted">{{exe['name']}}</p>
                <p class="text-muted">$ {{exe['current_amount']}}</p>
              </div>
            </div>
          </div>
        </div>
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

<style  scoped>
.flex-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
