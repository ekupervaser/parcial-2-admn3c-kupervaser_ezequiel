<template>
    <div>
        <NavbarComponent></NavbarComponent>
        <v-app><v-main>
            <router-view></router-view>
        </v-main></v-app>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import NavbarComponent from './components/Navbar-component.vue'
import FooterComponent from './components/Footer-component.vue';

export default {
  name: 'App',

  components: {
    NavbarComponent,
    FooterComponent,
  }
}
</script>

<style>

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.boton {
    text-decoration: none;
    color: white;
}
</style>