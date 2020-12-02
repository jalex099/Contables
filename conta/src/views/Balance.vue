<template>
    <div class="container">
      <h3 class="display-4" style="font-family: 'Quicksand', sans-serif;">Balance General</h3>
      <b-row class="py-3">
        <b-col cols="12" md="6">
          <b-row>
            <b-col cols="12">
              <div class="container py-2" style="display:flex; justify-content:space-between">
                <h5>ACTIVOS</h5>
                <p class="text-muted">$ {{totalActive}}</p>
              </div><hr>
              <div class="container" v-for="active in active_sub_accounts" :key="active" >
                <div class="py-1 px-5 data" v-if="active.current_amount >0" >
                  <p>{{active.name}}</p>
                  <p>$ {{active.current_amount}}</p>
                </div>
              </div>
            </b-col>
          </b-row>
<!--        *****************************************************************    -->
          
        </b-col>
        <b-col cols="12" md="6">
          <b-row>
            <b-col cols="12">
              <div class="container py-2" style="display:flex; justify-content:space-between">
                <h5>PASIVOS</h5>
                <p class="text-muted">$ {{totalPassive}}</p>
              </div> <hr>
              <div class="container" v-for="passive in passive_sub_accounts" :key="passive">
                <div class="py-1 px-5 data" v-if="passive.current_amount >0" >
                  <p>{{passive.name}}</p>
                  <p>$ {{passive.current_amount}}</p>
                </div>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12">
              <div class="container py-2" style="display:flex; justify-content:space-between">
                <h5>CAPITAL</h5>
                <p class="text-muted">$ {{totalCapital}}</p>
              </div> <hr>
              <div class="container" v-for="capital in capital_sub_accounts" :key="capital">
                <div class="py-1 px-5 data" v-if="capital.current_amount >0" >
                  <p>{{capital.name}}</p>
                  <p>$ {{capital.current_amount}}</p>
                </div>
              </div>
              <div class="container py-1 px-5 data">
                <p >Impuestos por Pagar: </p>
                <p>${{taxToPay}}</p>
              </div>
              <div class="container py-1 px-5 data">
                <p >Reserva Legal: </p>
                <p>${{legalReserve}}</p>
              </div>
              <div class="container py-1 px-5 data">
                <p >Utilidad Neta: </p>
                <p>${{netProfit}}</p>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <div class="colour-data p-3 rounded flexible">
            <p> <span class="font-weight-bold">Total Activos:</span>  ${{totalActive}}</p>
            <p><span class="font-weight-bold">Total Pasivos + Capital:</span> ${{totalPassive + totalCapital}}</p>
          </div>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col cols="12" lg="5">
          <h4 class="my-3" style="font-family: 'Quicksand', sans-serif;">Detalle de Cuentas</h4>
          <b-form-select class="mdl-textfield__input w-100" id="cuentas" name="cuentas" v-model="selected" required>
              <OptionsNuevaPartida v-for="cuenta in active_sub_accounts" :key="cuenta" v-bind:cuenta="cuenta"/>
           </b-form-select>
           <b-button v-on:click="show" variant="light" class=" my-2 btn">Ver transacciones</b-button>
        </b-col>
        <b-col cols="12" lg="7">
          <DetalleBalance v-bind:cuenta="detail"/>
        </b-col>
      </b-row>
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
      selected:String,
      detail:[],
      totalActive:Number,
      totalPassive:Number,
      totalCapital:Number
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
            this.detail=[]
            data["transactions"].forEach(element =>{
              this.detail.push(element)
            })
          })
          .catch(error =>{
            console.log(error)
          })
      }
  },
  created: async function (){
    this.totalActive =0
    this.totalPassive = 0
    this.totalCapital = 0
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

            this.totalActive += this.active['current_amount'];
            this.totalPassive += this.passive['current_amount'];
            this.totalPassive += this.taxToPay
            this.totalCapital += this.capital['current_amount']
            this.totalCapital += this.legalReserve
            this.totalCapital += this.netProfit
          })
          .catch(error =>{
            console.log(error)
          })

    

  }
}
</script>

<style  scoped>
.data{
  display:flex; 
  justify-content:space-between; 
  align-self: center;
}

.colour-data{
  background-color: #f45b69;
  color:#bbb;
  letter-spacing: 1px;
}

.flexible{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>