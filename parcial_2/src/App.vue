<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <v-img alt="Logo Animalfy" class="shrink mr-2" contain src="../src/assets/animal-logo.png"
          transition="scale-transition" width="40" />

        <h1 class="text-h5 bold font-weight-bold">
          Animalfy
        </h1>
      </div>
    </v-app-bar>

    <v-main>
      <HeaderComponent></HeaderComponent>
      <FormComponent :mensaje="mensaje" @actualizar-mensaje="actualizarMensaje"></FormComponent>
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

      <FooterComponent></FooterComponent>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from './components/Header-component';
import FooterComponent from './components/Footer-component';
import FormComponent from './components/Form-component';
import CardComponent from './components/Card-component';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CardComponent,
  },

  data: () => ({
    animalsList: [],
    mensaje: "Hola desde el padre"
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
