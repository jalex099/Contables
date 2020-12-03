<template>
  <b-row>
      <b-col cols="6" lg="2">
          <p>{{movement['description']}}</p>
      </b-col>
      <b-col cols="6" lg="2">
        <p>{{movement['date']}}</p>
      </b-col>
      <b-col cols="12" lg="8">
          Debe<ElementDiario v-bind:element="movement['debit']" class="element"/>
          Haber<ElementDiario v-bind:element="movement['credit']" class="element" style="background-color: #ddd"/>
          
      </b-col>
  </b-row>
</template>

<script>
import ElementDiario from '@/components/ElementDiario.vue'
export default {
  name: 'DetalleDiario',
  components:{
      ElementDiario
  },
  props:{
    movement:Array
  },
  data: ()=>{
      return{
          credit:[],
          debit:[],
          fields:['account_name','amount','type']
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flex-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.element{
    padding: 1rem 2rem;
    border-radius: 5px;
}
</style>