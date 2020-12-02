<template>
  <div style="display:flex; justify-content:center">
    <b-jumbotron class="p-4 m-2 mr-4 ml-4" >
      <h1 class="display-4 text-center font-wheight-light">Que es Ackerman Services?</h1>
      
      <p style="font-size: 1.3rem">
        Ackerman Services es una empresa nacida en San Salvador dedicada a brindar asesoría técnica en DevOps y trabajo remoto, es un startup nacida en el año 2017 y que ha tenido un impacto significativo en el área de organización y manejo de equipos de trabajo para empresas desarrolladoras de software en el país.
      </p>

      <hr>

      <h1 class="display-4 text-center font-wheight-light">Funcionamiento del sitio</h1>
      
      <p style="font-size: 1.3rem">
        El sitio se encuentra dividido en varias secciones, cada una de estas secciones puede ser accedida desplegando 
        el menu que se encuentra en la parte superior del sitio, dichas secciones se detallan a continuacion:
      </p>

      <b-card-group columns>

        <b-card border-variant="dark" header="Asientos Contables" align="center" bg-variant="secondary" text-variant="white">
          <b-card-text>
            En esta seccion se muestran todas las cuentas y el saldo actual de cada una
          </b-card-text>
        </b-card>

        <b-card border-variant="dark" header="Balance General" align="center" bg-variant="secondary" text-variant="white">
          <b-card-text>
            En esta seccion se muestra el balance general de cada una de las cuentas
          </b-card-text>
        </b-card>

      </b-card-group>

      <hr>

      <h1 class="display-4 text-center font-wheight-light">Integrantes del Equipo</h1>
      
      <p class="text-center" style="font-size: 1.3rem">
        Erick Josue Saravia Aragon <br>
        Javier Alexander Morales Melara <br>
        Keny Lisbeth Chavez Torres <br>
        Adilman Isai Portillo Ceron <br>
        Edgar Antonio Reyes Ceron <br>
      </p>

    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: 'Informacion',
  created: 
     function () {
      window.document.title = "Información"
    },
  methods:{
 
  }
}
</script>
