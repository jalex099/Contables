<template>
  <div>
    <div v-for="item in items" :key="item">
      <h2>{{item.nombre}}</h2>
      <h6>{{item.edad}}</h6>
    </div>
    <h2>Nueva Partida</h2>
    
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="sample3" v-model="newName">
      <label class="mdl-textfield__label" for="sample3" >name...</label>
      <button @click="addName">AddName</button>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="sample3" v-model="newAge">
      <label class="mdl-textfield__label" for="sample3">Text...</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NuevaPartida',
  data: ()=>{
    return{
      items: [{"nombre":"Javier", "edad":21},{"nombre":"Maria", "edad":22}]
    }
  },
  methods: {
    addName(){
      if(this.newName != "" && this.newAge!= ""){
        this.items.push({"nombre": this.newName, "edad": this.newAge});

        this.newName = "";
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  font-family: 'Quicksand', sans-serif;
}
</style>