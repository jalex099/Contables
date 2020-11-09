<template>
  <div>
    <h2>Nueva Partida</h2>
    <button v-if="!bandera" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="show">
      Crear Partida
    </button>
      <div v-if="bandera">
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
        
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="sample3" v-model="newAge">
          <label class="mdl-textfield__label" for="sample3">Text...</label>
        </div>
        
          <button @click="addName">AddName</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'NuevaPartida',
  props:{
    par: Array
  },
  data: ()=>{
    return{
      items: [{"nombre":"Javier", "edad":21},{"nombre":"Maria", "edad":22}],
      cuentas: [],
      bandera:Boolean
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