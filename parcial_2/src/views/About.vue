<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h1>Acerca de nuestra web de registro de animales domésticos</h1>
          <img src="../assets/about-us.jpg" alt="Imagen de animales domésticos" class="imagen">
          <p>Bienvenido a nuestra página de registro de animales domésticos. En esta plataforma, puedes registrar a tus queridas mascotas y llevar un seguimiento de su información de manera fácil y conveniente.</p>
          <p>Facilitamos el proceso de registro y mantenemos un historial actualizado de los datos importantes de tus mascotas, como su nombre, raza, fecha de nacimiento, vacunas y más. Nuestro objetivo es ayudarte a mantener a tus animales domésticos seguros y saludables.</p>
          <p>También proporcionamos recordatorios y alertas para las fechas de vacunación y visitas al veterinario, para que nunca te olvides de cuidar de tus mascotas. Además, puedes acceder a esta plataforma desde cualquier dispositivo, lo que te brinda comodidad y flexibilidad.</p>
          <p>Estamos comprometidos con el bienestar de los animales y la tranquilidad de sus dueños. Esperamos que disfrutes de nuestra web de registro de animales domésticos y encuentres útil todas las funcionalidades que ofrecemos.</p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  .imagen {
    width: 100%;
    max-height: 400px;
    margin-bottom: 16px;
  }
  
  p {
    margin-bottom: 16px;
  }
  </style>
  