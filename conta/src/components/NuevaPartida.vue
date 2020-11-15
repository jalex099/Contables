<template>
  <div>
    <h2>Nueva Partida</h2>
    
      <b-button v-if="!bandera" variant="success" class="w-100 p-3 mx-3 my-3" @click="show">Agregar partida</b-button>
      <div v-if="bandera" class="w-100">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label w-100">
          <b-form-select class="mdl-textfield__input w-100" id="cuentas" name="cuentas" v-model="selected">
            <OptionsNuevaPartida v-for="cuenta in cuentas" :key="cuenta" v-bind:cuenta="cuenta"/>
          </b-form-select>
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </div>

        <!-- checked button for the debot or credit-->
        <div>
          <b-form-checkbox v-model="checked" name="check-button" switch>
            Debe / Haber <b>(Tipo: <span v-if="checked">Haber</span> <span v-if="!checked">Debe</span>)</b>
          </b-form-checkbox>
        </div>
        <b-row class="p-3">
           <b-col cols="2"><div class="my-auto"><span v-if="checked">Haber:</span> <span v-if="!checked">Debe:</span></div></b-col>
          <b-col cols="5"><b-form-input type="number" class="w-100 my-auto" v-model="mount"></b-form-input></b-col>
          <b-col cols="5"><span class="my-auto">Value: {{ text }}</span></b-col>
        </b-row>
        <b-row>
           <b-col><b-button variant="secondary" class="w-100 p-3 mx-3 my-3" @click="addCuenta">Añadir cuenta a partida</b-button></b-col>
          <b-col><b-button variant="success" class="w-100 p-3 mx-3 my-3" @click="addCuenta">Agregar cuenta</b-button></b-col>
        </b-row>
          
      </div>
      <div class="">{{debit}}</div>
      <div class="">{{credit}}</div>
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
      items: [{"nombre":"Javier", "edad":21},{"nombre":"Maria", "edad":22}],
      cuentas: [],
      bandera:Boolean,
      selected:"",
      mount:"",
      checked:false,
      debit: [],
      credit: []
    }
  },
  methods: {
    addCuenta(){
      //debit
      if(this.selected != "" && this.mount!= "" && !this.checked){
        this.debit.push({"_id": this.selected, "mount": this.mount});

        this.selected = "";
        this.mount = ""
      } 
      
      if(this.selected != "" && this.mount!= "" && this.checked){
        this.credit.push({"_id": this.selected, "mount": this.mount});

        this.selected = "";
        this.mount = ""
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
      
    }
  },
  created: function(){
    this.bandera = false;
    this.newName= "";
    this.newAge = 0
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  font-family: 'Quicksand', sans-serif;
}
</style>