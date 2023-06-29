<template>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Animalfy - Ezequiel Kupervaser</strong>
      </v-col>
    </v-footer>
  </template>

<script>
export default {
    name: 'Footer-component'
}
</script>

<style>
.footer-container {
    display: flex;
}
</style>