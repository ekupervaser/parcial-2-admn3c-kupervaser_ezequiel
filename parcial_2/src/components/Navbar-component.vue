<template>
        <div>
            <v-app-bar app color="secondary" dark>
              <div class="d-flex align-center">
      <v-img alt="Logo Animalfy" class="shrink mr-2 margen-derecho" contain src="../assets/animal-logo.png"
        transition="scale-transition" width="40" />

      </div>
      <v-toolbar-title class="bold">
        Animalfy
      </v-toolbar-title>
      <v-spacer></v-spacer>


      <router-link class="v-btn v-btn--text boton margen-derecho" to="/">Home</router-link>
      <router-link class="v-btn v-btn--text boton" to="/about">About</router-link>

  </v-app-bar>
        </div>
  </template>

<script>
export default {
  name: 'Navbar-component'
}
</script>