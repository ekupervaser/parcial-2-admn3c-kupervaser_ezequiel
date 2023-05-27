Vue.component('component-form', {
    data: function() {
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
        }
    },

    props: ["getAnimalsList"],

    methods: {
        submitForm: function (event) {
            event.preventDefault();
            
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

            this.setNewAnimal(newAnimal)
            this.getAnimalsList()
        },

        setNewAnimal: function (newAnimal) {
            // obtener de localstorage si existe o no listaAnimales
           let oldListAnimals = localStorage.getItem("listaAnimales")
          // Si tiene informacion
           if(oldListAnimals) {
            // transforma la lista en formato string en array 
           let arrayOldListAnimals= JSON.parse(oldListAnimals)
           // Inserta el nuevo animal en la lista vieja de animales
           arrayOldListAnimals.push(newAnimal)
            // Lo vuelve a seter en localstorage con el nuevo animal
            localStorage.setItem("listaAnimales",  JSON.stringify(arrayOldListAnimals))
        }else {
            // Si no existe en localstorage la key de listaAnimales la crea y le agrega el nuevo animal en un array transformando en string
            localStorage.setItem("listaAnimales",  JSON.stringify([newAnimal]))
            }
        }
    },

    template: 
    `<div>
    <form action="">
    <label for="animalName">Nombre del animal:</label>
    <input type="text" id="animalName" name="animalName" v-model="nombre" />

    <label for="species">Especie:</label>
    <input type="text" id="species" name="species"  v-model="especie"/>

    <label for="breed">Raza:</label>
    <input type="text" id="breed" name="breed" v-model="raza"/>

    <label for="age">Edad:</label>
    <input type="text" id="age" name="age" v-model="edad"/>

    <label for="sex">Sexo:</label>
    <select id="sex" name="sex" v-model="sexo">
      <option value="macho">Macho</option>
      <option value="hembra">Hembra</option>
    </select>

    <label for="color">Color o patrón:</label>
    <input type="text" id="color" name="color" v-model="color"/>

    <label for="size">Tamaño:</label>
    <select id="size" name="size" v-model="tamanio">
      <option value="chico">Pequeño</option>
      <option value="mediano">Mediano</option>
      <option value="grande">Grande</option>
    </select>

    <label for="ownerName">Nombre del dueño:</label>
    <input type="text" id="ownerName" name="ownerName"  v-model="nombreDueno"/>

    <label for="email">Correo electrónico del dueño:</label>
    <input type="email" id="email" name="email"  v-model="emailDueno"/>

    <label for="phone">Número de teléfono del dueño:</label>
    <input type="tel" id="phone" name="phone"  v-model="telefonoDueno"/>

    <label for="additionalInfo">Información adicional:</label>
    <textarea id="additionalInfo" name="additionalInfo" v-model="infoAdicional"></textarea>

    <button type="submit" @click="submitForm($event)">Registrar</button>
  </form>
  </div>
  `
});