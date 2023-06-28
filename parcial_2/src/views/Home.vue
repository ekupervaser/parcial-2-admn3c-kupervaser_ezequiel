<template>
  <div>
      <HeaderComponent></HeaderComponent>
      <FormComponent @actualizar-mensaje="actualizarMensaje"></FormComponent>
      <div class="d-flex container flex-wrap justify-space-between" v-if="animalsList.length > 0">
         <CardComponent class="mb-3" v-for="(animal, index) in animalsList" :key="index"
        :nombre=animal.animalName
        :especie=animal.especie
        :raza=animal.raza
        :edad=animal.edad
        :sexo=animal.sexo
        :color=animal.color
        :tamanio=animal.tamanio
        :nombre-dueno=animal.nombreDueno
        :email-dueno=animal.emailDueno
        :telefono-dueno=animal.telefonoDueno
        :info-adicional=animal.infoAdicional
         ></CardComponent>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/Header-component';
import FormComponent from '../components/Form-component';
import CardComponent from '../components/Card-component';

export default {
  name: 'HomePage',

  components: {
    HeaderComponent,
    FormComponent,
    CardComponent,
  },

  data: () => ({
    animalsList: []
  }),
  methods: {
    actualizarMensaje(nuevoAnimal) {
      this.animalsList = [...this.animalsList, nuevoAnimal];
    },

    getAnimalsList () {
        this.animalsList = JSON.parse(localStorage.getItem("listaAnimales"))
  }},

  mounted () {
    this.getAnimalsList()
  }
};
</script>
