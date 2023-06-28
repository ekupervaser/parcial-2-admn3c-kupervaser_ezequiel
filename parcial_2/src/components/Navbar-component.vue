<template>
        <div>
            <v-app-bar app color="secondary" dark>
      <v-toolbar-title>
        Animalfy
      </v-toolbar-title>
      <v-spacer></v-spacer>

 
      <router-link class="v-btn v-btn--text boton" to="/">Home</router-link>
      <router-link class="v-btn v-btn--text boton" to="/about">About</router-link>

<!--     <div class="d-flex align-center">
      <v-img alt="Logo Animalfy" class="shrink mr-2" contain src="../src/assets/animal-logo.png"
        transition="scale-transition" width="40" />
    </div> -->
  </v-app-bar>
        </div>
  </template>

<script>
export default {
  name: 'Navbar-component'
}
</script>