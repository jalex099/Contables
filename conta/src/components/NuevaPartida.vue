<template>
  <div>
    <h2>Nueva Partida</h2>
    <button v-if="!bandera" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="show">
      Crear Partida
    </button>
      <div v-if="bandera">
<<<<<<< HEAD
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <b-form-select class="mdl-textfield__input" id="cuentas" name="cuentas" v-model="selected">
            <OptionsNuevaPartida v-for="cuenta in cuentas" :key="cuenta" v-bind:cuenta="cuenta"/>
          </b-form-select>
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </div>
        <b-row>
           <b-col><div class="mb-2">Debe:</div></b-col>
          <b-col cols="8"><b-form-input type="number" class="w-100" v-model="text"></b-form-input></b-col>
          <b-col><div class="mt-2">Value: {{ text }}</div></b-col>
        </b-row>
=======
        <div class="form-group">
          <label for="exampleFormControlSelect2">Elegir cuenta</label>
          <select class="form-control form-control-lg" id="cuentas" name="cuentas">
            <option></option>
            
            <option v-for="cuenta in cuentas" :key="cuenta" value="85">{{cuenta.name}}</option>
          </select>
        </div>
          <div class="form-group">
            <label for="debe">Debe</label>
            <input type="number" class="form-control w-50" id="debe" placeholder="Debe">
          </div>

        <div class="form-group">
            <label for="haber">Haber</label>
            <input type="number" class="form-control w-50" id="haber" placeholder="Haber">
          </div>

          <button type="button" class="btn btn-secondary btn-lg btn-block">Añadir Cuenta a Partida</button>
>>>>>>> 8ac1e5ecfbaf2c12370d50de7e2eaa68d7944743
        
        
          <b-button variant="success" class="w-50" @click="addName">Agregar cuenta</b-button>
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
      this.par.forEach(element => {
             element['sub_accounts'].forEach(elemen => {
               elemen['sub_accounts'].forEach(eleme => {
               this.cuentas.push(eleme)
             });
             });
             
           });
           this.bandera = true;
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