<template>
    <div>
         <h1>Activo</h1>{{selected}}
         <button v-on:click="show">Add 1</button>
         <b-form-select class="mdl-textfield__input w-100" id="cuentas" name="cuentas" v-model="selected" required>
              <OptionsNuevaPartida v-for="cuenta in active_sub_accounts" :key="cuenta" v-bind:cuenta="cuenta"/>
           </b-form-select>
         <div v-for="active in active_sub_accounts" :key="active">
         </div>
            {{active["name"]}}
            {{active["current_amount"]}}
            <b-dropdown id="dropdown-dropright" dropright text="Ver estados de cuentas" variant="warning" class="m-2" v-on:click="show">
                <DetalleBalance v-bind:cuenta="active_sub_accounts"/>
            </b-dropdown>
            
            <h1>Pasivo</h1>
            {{passive["name"]}}
            {{passive["current_amount"]}}
            <b-dropdown id="dropdown-dropright" dropright text="Ver estados de cuentas" variant="warning" class="m-2">
                <DetalleBalance v-bind:cuenta="passive_sub_accounts"/>
            </b-dropdown>
            <h1>Capital</h1>
             {{capital["name"]}}
            {{capital["current_amount"]}}
            <b-dropdown id="dropdown-dropright" dropright text="Ver estados de cuentas" variant="warning" class="m-2">
                <DetalleBalance v-bind:cuenta="capital_sub_accounts"/>
            </b-dropdown>
            <h1>Reserva Legal</h1>
            {{legalReserve}}
    </div>
</template>

<script>
// @ is an alias to /src

import DetalleBalance from '@/components/DetalleBalance.vue'
import OptionsNuevaPartida from '@/components/OptionsNuevaPartida.vue'
export default {
  name: 'Balance',
  components: {
    DetalleBalance,
    OptionsNuevaPartida
  },
  data: ()=>{
    return{
      active:[],
      active_sub_accounts:[],
      passive:[],
      passive_sub_accounts:[],
      capital:[],
      capital_sub_accounts:[],
      legalReserve: Number,
      taxToPay: Number,
      netProfit: Number,
      selected:String
    }
  },
  methods:{
    show(){
      let url = "https://sistemas-contables.herokuapp.com/v1/accounts/" + this.selected + "/transactions"
      fetch(url)
          .then(res =>{
            return res.json()
          }) 
          .then(data =>{
            console.log(data)
          })
          .catch(error =>{
            console.log(error)
          })
      }
  },
  created: async function (){
    window.document.title = "Balance";
    this.selected=""
     fetch("https://sistemas-contables.herokuapp.com/v1/accounts/balance")
          .then(res =>{
            return res.json()
          }) 
          .then(data =>{
            this.active = data["active"]
            this.passive = data["passive"]
            this.capital = data["capital"]
            this.legalReserve = data['legalReserve']
            this.taxToPay = data['taxToPay']
            this.netProfit = data['netProfit']
            
            this.active["sub_accounts"].forEach(element => {
                this.active_sub_accounts.push(element)
            });

            this.passive["sub_accounts"].forEach(element => {
                this.passive_sub_accounts.push(element)
            });

            this.capital["sub_accounts"].forEach(element => {
                this.capital_sub_accounts.push(element)
            });
          })
          .catch(error =>{
            console.log(error)
          })

    

  }
}
</script>
