<template>
  <div class="container">
      <b-row>
        <b-col cols="12" md="7">
<<<<<<< HEAD
        <span class="my-4"><strong>{{description}}</strong></span>
=======
          <b-alert v-if="!banderaBalance" show variant="danger" style="font-size:2rem">La partida no esta balanceada</b-alert>
          <b-alert v-if="!banderaDescription" show variant="warning" style="font-size:2rem">Ingrese descripcion de partida</b-alert>
          <span class="my-4">Descripción: <strong>{{description}}</strong></span>
>>>>>>> a1c05638079f93b7e44cae118d97bd93f5f24bf5
        <hr>
          <div class="tblData">
            <b-row class="my-3 w-100">
              <b-col>
                <strong>TOTAL</strong>
              </b-col>
              <b-col>
                <span class="text-muted">Debe: {{totalDebit}}</span>
              </b-col>
              <b-col>
                <span class="text-muted">Haber: {{totalCredit}}</span>      
              </b-col>
            </b-row>
            <b-table striped hover :items="tableFormated"></b-table>
          </div>
        </b-col>

<!--  FORMULARIO PARA CREAR LA PARTIDA    -->
        <b-col cols="12" md="5">
<<<<<<< HEAD
          <b-button v-if="!bandera" variant="warning" class="w-100 p-3 mx-3 my-3" @click="show">Crear Partida</b-button>
=======
          <b-button v-if="!bandera" variant="success" class="w-100 p-3 mx-3 my-3 btnMine" @click="show">Crear Partida</b-button>
>>>>>>> a1c05638079f93b7e44cae118d97bd93f5f24bf5
          <div v-if="bandera" class="w-100">
            <div class="container">
              <b-row class="p-3">
                <b-col cols="12">
                  <span>Descripción:</span>
<<<<<<< HEAD
                  <b-form-input type="text" class="w-100 my-2" v-model="description" required></b-form-input>
=======
                  <b-form-input type="text" class="w-100 my-2" v-model="description" @keydown="verifyDescription"></b-form-input>
>>>>>>> a1c05638079f93b7e44cae118d97bd93f5f24bf5
                </b-col>
                <b-col cols="12">
                  <span>Cuenta:</span>
                  <b-form-select class="mdl-textfield__input w-100" id="cuentas" name="cuentas" v-model="selected" required>
                    <OptionsNuevaPartida v-for="cuenta in cuentas" :key="cuenta" v-bind:cuenta="cuenta"/>
                  </b-form-select>
<<<<<<< HEAD
                  <div class="my-3">Selected: <strong>{{ selected }}</strong></div>
                </b-col>
                <b-col cols="12" class="my-2">
                  <b-form-checkbox v-model="checked" name="check-button" switch>
                    Debe / Haber <b>(Tipo: <span v-if="checked">Haber</span> <span v-if="!checked">Debe</span>)</b>
                  </b-form-checkbox>
                </b-col>
                <b-col cols="2" class="my-2"><div class="my-auto"><span v-if="checked">Haber:</span> <span v-if="!checked">Debe:</span></div></b-col>
                <b-col cols="5" class="my-2"><b-form-input type="number" step=".01" class="w-100 my-auto" v-model.number="mount"></b-form-input></b-col>
                <b-col cols="5" class="my-2"><span class="my-auto">Monto: {{ text }}</span></b-col>
              </b-row>
            </div>
          
            <b-row>
              <b-col cols="12" md="6"><b-button variant="success" class="w-100 p-3 mx-3 my-3" @click="addCuenta">Añadir cuenta a partida </b-button></b-col>
              <b-col cols="12" md="6">
              <b-button variant="danger" class="w-100 p-3 mx-3 my-3" @click="deleteCuenta">Eliminar última cuenta</b-button>
              </b-col>
              <b-col cols="12">
                <b-button variant="dark" class="w-100 p-3 mx-3 my-3" @click="addPartida">Agregar Partida </b-button>
=======
                  <div class="my-3">_id: <strong>{{ selected }}</strong></div>
                </b-col>
                <b-col cols="12">
                  <b-form-checkbox v-model="checked" name="check-button" switch class="mb-3">
                    Debe / Haber <b>(Tipo: <span v-if="checked">Haber</span> <span v-if="!checked">Debe</span>)</b>
                  </b-form-checkbox>
                </b-col>
                <b-col cols="2"><div class="my-auto"><span v-if="checked">Haber:</span> <span v-if="!checked">Debe:</span></div></b-col>
                <b-col cols="5"><b-form-input type="number" step=".01" class="w-100 my-auto" v-model.number="mount"></b-form-input></b-col>
                <b-col cols="5"><span class="my-auto">Value: {{ text }}</span></b-col>
              </b-row>
            </div>
            <b-row class="p-3">
              <b-col cols="6"><b-button variant="secondary" class="w-100 p-3 mx-3 my-3" @click="addCuenta">Añadir cuenta a partida</b-button></b-col>
              <b-col cols="6">
              <b-button variant="secondary" class="w-100 p-3 mx-3 my-3" @click="deleteCuenta">Eliminar última cuenta</b-button>
              </b-col>
              <b-col cols="12">
                <b-button variant="success" class="w-100 p-3 mx-3 my-3 btnMine" @click="addPartida">Agregar Partida</b-button>
>>>>>>> a1c05638079f93b7e44cae118d97bd93f5f24bf5
              </b-col>
            </b-row>
          
          </div>
<<<<<<< HEAD
=======

          
>>>>>>> a1c05638079f93b7e44cae118d97bd93f5f24bf5
        </b-col>
      </b-row>
  </div>
</template>

<script>
import OptionsNuevaPartida from '@/components/OptionsNuevaPartida.vue'
export default {
  name: 'NuevaPartida',
  components:{
    OptionsNuevaPartida
  },
  props:{
    par: Array
  },
  data: ()=>{
    return{
      cuentas: [],
      bandera:Boolean,
      banderaBalance: Boolean,
      banderaDescription: Boolean,
      selected:String,
      mount:Number,
      description: String,
      checked:Boolean,
      debit: [],
      credit: [],
      totalDebit: Number,
      totalCredit:Number,
      tableFormated:[],
      dataSend:[],
      response:String
    }
  },
  methods: {
    verifyBalance(){
      if(this.totalDebit === this.totalCredit){
        this.banderaBalance = true;
      } else{
        this.banderaBalance = false;
      }
    },
    verifyDescription(){
      if(this.description != "" || this.description === " "){
        this.banderaDescription = true
      } else{
        this.banderaDescription = false
      }
    },
    addCuenta(){
      //debit
      if(this.selected != "" && this.mount!= "" && !this.checked){
        this.debit.push({"account_id": this.selected, "amount": this.mount});
        this.tableFormated.push({"account_id": this.selected,"Cuenta": document.querySelector('#cuentas').options[document.querySelector('#cuentas').selectedIndex].text, "Debe": this.mount, "Haber": 0})
        this.totalDebit += this.mount;
        this.selected = "";
        this.mount = "";
        this.verifyBalance();
      } 
      
      if(this.selected != "" && this.mount!= "" && this.checked){
        this.credit.push({"account_id": this.selected, "amount": this.mount});
        this.tableFormated.push({"account_id": this.selected,"Cuenta": document.querySelector('#cuentas').options[document.querySelector('#cuentas').selectedIndex].text, "Debe": 0, "Haber": this.mount})
        this.totalCredit+=this.mount;
        this.selected = "";
        this.mount = "";
        this.verifyBalance();

      }
    },
    show(){
      this.cuentas=[];
      if(this.par.length != 0){
          this.par.forEach(element => {
             element['sub_accounts'].forEach(elemen => {
               elemen['sub_accounts'].forEach(eleme => {
               this.cuentas.push(eleme)
             });
            });
             
           })
           this.bandera = true;
      }
      
    },

    addPartida(){
      if(this.description!=""){
<<<<<<< HEAD
        if(this.totalDebit === this.totalCredit && this.totalCredit!=0 && this.totalCredit!=0 ){ 
=======
        if(this.totalDebit === this.totalCredit && this.totalCredit!=0 && this.totalCredit!=0){ 
>>>>>>> a1c05638079f93b7e44cae118d97bd93f5f24bf5
          this.dataSend=({
            "description": this.description,
            "date": new Date(),
            "debit": this.debit,
            "credit": this.credit
          });

          const requestOptions= {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.dataSend)
          }

          fetch("https://sistemas-contables.herokuapp.com/v1/accounting-seat", requestOptions)
          .then(response => response.json())
          .then(data=>(console.log(data)))

        } else{
<<<<<<< HEAD
          alert("La partida no esta balanceada.")
        }
      } else{
        alert("Ingrese descripción.")
=======
          this.banderaBalance = false
        }
      } else{
        this.banderaDescription = false;
>>>>>>> a1c05638079f93b7e44cae118d97bd93f5f24bf5
      }
    },

    deleteCuenta(){
      if(!this.checked){
        //debito
        let deleted = this.debit.pop();
        this.tableFormated.pop(this.tableFormated.find(table => table.account_id===deleted.account_id));
        this.totalDebit-=deleted.amount;
      }

      if(this.checked){
        //credito
        let deleted = this.credit.pop();
        this.tableFormated.pop(this.tableFormated.find(table => table.account_id===deleted.account_id));
        this.totalCredit-=deleted.amount;
      }
    }
  },
  created: function(){
    this.bandera = false;
    this.selected= "";
    this.description = "";
    this.mount = 0;
    this.totalDebit =0;
    this.totalCredit =0;
    this.checked = false;
    this.banderaBalance = true;
    this.banderaDescription = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  font-family: 'Quicksand', sans-serif;
}

<<<<<<< HEAD
.tblData{
  width: 100%;
  overflow: auto;
=======
.btnMine{
  background: rgba(244, 91, 105,1); 
  border: none;
  transition: all 0.4s linear;
}
.btnMine:hover{
  border: none;
  letter-spacing: 2px;
>>>>>>> a1c05638079f93b7e44cae118d97bd93f5f24bf5
}
</style>