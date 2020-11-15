<template>
  <div>
    <h2>Nueva Partida</h2>

    <button v-if="!bandera" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="show">
      Crear Partida
    </button>
      <div v-if="bandera">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <b-form-select class="mdl-textfield__input" id="cuentas" name="cuentas" v-model="selected">

      <b-button v-if="!bandera" variant="success" class="w-100 p-3 mx-3 my-3" @click="show">Agregar partida</b-button>
      <div v-if="bandera" class="w-100">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label w-100">
          <b-form-select class="mdl-textfield__input w-100" id="cuentas" name="cuentas" v-model="selected">

            <OptionsNuevaPartida v-for="cuenta in cuentas" :key="cuenta" v-bind:cuenta="cuenta"/>
          </b-form-select>
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </div>
        <b-row>
           <b-col><div class="mb-2">Debe:</div></b-col>
          <b-col cols="8"><b-form-input type="number" class="w-100" v-model="text"></b-form-input></b-col>
          <b-col><div class="mt-2">Value: {{ text }}</div></b-col>
        </b-row>

        
        
          <b-button variant="success" class="w-50" @click="addName">Agregar cuenta</b-button>

        <b-row>
           <b-col><b-button variant="secondary" class="w-100 p-3 mx-3 my-3" @click="addName">Añadir cuenta a partida</b-button></b-col>
          <b-col><b-button variant="success" class="w-100 p-3 mx-3 my-3" @click="addName">Agregar cuenta</b-button></b-col>
        </b-row>
          

      </div>
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
      text:""
    }
  },
  methods: {
    addName(){
      if(this.newName != "" && this.newAge!= ""){
        this.items.push({"nombre": this.newName, "edad": this.newAge});

        this.newName = "";
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