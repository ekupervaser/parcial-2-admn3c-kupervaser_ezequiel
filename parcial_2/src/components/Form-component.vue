<template>
    <v-form @submit.prevent="submitForm" ref="form">
      <v-container>
        <v-text-field v-model="nombre" label="Nombre del animal" id="animalName" name="animalName" :rules="nombreRules"></v-text-field>
  
        <v-text-field v-model="especie" label="Especie" id="species" name="species" :rules="especieRules"></v-text-field>
  
        <v-text-field v-model="raza" label="Raza" id="breed" name="breed" :rules="razaRules"></v-text-field>
  
        <v-text-field v-model="edad" label="Edad" id="age" name="age" :rules="edadRules"></v-text-field>
  
        <v-select v-model="sexo" label="Sexo" id="sex" name="sex" :items="sexoOptions" :rules="sexoRules"></v-select>
  
        <v-text-field v-model="color" label="Color o patrón" id="color" name="color" :rules="colorRules"></v-text-field>
  
        <v-select v-model="tamanio" label="Tamaño" id="size" name="size" :items="tamanioOptions" :rules="tamanioRules"></v-select>
  
        <v-text-field v-model="nombreDueno" label="Nombre del dueño" id="ownerName" name="ownerName" :rules="nombreDuenoRules"></v-text-field>
  
        <v-text-field v-model="emailDueno" label="Correo electrónico del dueño" id="email" name="email" type="email" :rules="emailDuenoRules"></v-text-field>
  
        <v-text-field v-model="telefonoDueno" label="Número de teléfono del dueño" id="phone" name="phone" type="tel" :rules="telefonoDuenoRules"></v-text-field>
  
        <v-textarea v-model="infoAdicional" label="Información adicional" id="additionalInfo" name="additionalInfo"></v-textarea>
  
        <v-btn type="submit" color="primary">Registrar</v-btn>
      </v-container>
    </v-form>
  </template>
  
  <script>
  export default {
    name: 'Form-component',
    data() {
      return {
        nombre: '',
        especie: '',
        raza: '',
        edad: '',
        sexo: '',
        color: '',
        tamanio: '',
        nombreDueno: '',
        emailDueno: '',
        telefonoDueno: '',
        infoAdicional: '',
        sexoOptions: ['Hembra', 'Macho'],
        tamanioOptions: ['Pequeño', 'Mediano', 'Grande'],
        nombreRules: [(v) => !!v || 'El nombre es requerido'],
        especieRules: [(v) => !!v || 'La especie es requerida'],
        razaRules: [(v) => !!v || 'La raza es requerida'],
        edadRules: [(v) => !!v || 'La edad es requerida'],
        sexoRules: [(v) => !!v || 'El sexo es requerido'],
        colorRules: [(v) => !!v || 'El color es requerido'],
        tamanioRules: [(v) => !!v || 'El tamaño es requerido'],
        nombreDuenoRules: [(v) => !!v || 'El nombre del dueño es requerido'],
        emailDuenoRules: [
          (v) => !!v || 'El correo electrónico es requerido',
          (v) => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido',
        ],
        telefonoDuenoRules: [(v) => !!v || 'El número de teléfono es requerido'],
      };
    },
    methods: {
      submitForm() {
        this.$refs.form.validate().then((valid) => {
          if (valid) {
            // Lógica para enviar el formulario
            let newAnimal = {
              animalName: this.nombre,
              especie: this.especie,
              raza: this.raza,
              edad: this.edad,
              sexo: this.sexo,
              color: this.color,
              tamanio: this.tamanio,
              nombreDueno: this.nombreDueno,
              emailDueno: this.emailDueno,
              telefonoDueno: this.telefonoDueno,
              infoAdicional: this.infoAdicional,
            };
  
            this.$emit('actualizar-mensaje', newAnimal);
            this.setNewAnimal(newAnimal);
          }
        });
      },
  
      setNewAnimal(newAnimal) {
        // Lógica para almacenar el nuevo animal
      },
    },
  };
  </script>
  