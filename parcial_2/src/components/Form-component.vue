<template>
    <v-form @submit="submitForm">
        <v-container>
            <v-text-field v-model="nombre" label="Nombre del animal" id="animalName" name="animalName"></v-text-field>

            <v-text-field v-model="especie" label="Especie" id="species" name="species"></v-text-field>

            <v-text-field v-model="raza" label="Raza" id="breed" name="breed"></v-text-field>

            <v-text-field v-model="edad" label="Edad" id="age" name="age"></v-text-field>

            <v-select v-model="sexo" label="Sexo" id="sex" name="sex" :items="sexoOptions">
            </v-select>

            <v-text-field v-model="color" label="Color o patrón" id="color" name="color"></v-text-field>

            <v-select v-model="tamanio" label="Tamaño" id="size" name="size" :items="tamanioOptions">
            </v-select>

            <v-text-field v-model="nombreDueno" label="Nombre del dueño" id="ownerName" name="ownerName"></v-text-field>

            <v-text-field v-model="emailDueno" label="Correo electrónico del dueño" id="email" name="email"
                type="email"></v-text-field>

            <v-text-field v-model="telefonoDueno" label="Número de teléfono del dueño" id="phone" name="phone"
                type="tel"></v-text-field>

            <v-textarea v-model="infoAdicional" label="Información adicional" id="additionalInfo"
                name="additionalInfo"></v-textarea>

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
            sexoOptions: ["Hembra", "Macho"],
            tamanioOptions: ["Pequeño", "Mediano", "Grande"]
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
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
                infoAdicional: this.infoAdicional
            }

            this.$emit("actualizar-mensaje", newAnimal)
            this.setNewAnimal(newAnimal)
        },

        setNewAnimal: function (newAnimal) {
            // obtener de localstorage si existe o no listaAnimales
            let oldListAnimals = localStorage.getItem("listaAnimales")
            // Si tiene informacion
            if (oldListAnimals) {
                // transforma la lista en formato string en array 
                let arrayOldListAnimals = JSON.parse(oldListAnimals)
                // Inserta el nuevo animal en la lista vieja de animales
                arrayOldListAnimals.push(newAnimal)
                // Lo vuelve a seter en localstorage con el nuevo animal
                localStorage.setItem("listaAnimales", JSON.stringify(arrayOldListAnimals))
            } else {
                // Si no existe en localstorage la key de listaAnimales la crea y le agrega el nuevo animal en un array transformando en string
                localStorage.setItem("listaAnimales", JSON.stringify([newAnimal]))
            }
        },

    }   

};
</script>