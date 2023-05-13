Vue.component('component-form', {
    data: function() {
        return {form: "Soy un form desde un componente"}
    },

    template: 
    `<form action="">
    <label for="animalName">Nombre del animal:</label>
    <input type="text" id="animalName" name="animalName" required />

    <label for="species">Especie:</label>
    <input type="text" id="species" name="species" required />

    <label for="breed">Raza:</label>
    <input type="text" id="breed" name="breed" />

    <label for="age">Edad:</label>
    <input type="text" id="age" name="age" />

    <label for="sex">Sexo:</label>
    <select id="sex" name="sex">
      <option value="male">Macho</option>
      <option value="female">Hembra</option>
      <option value="other">Otro</option>
    </select>

    <label for="color">Color o patrón:</label>
    <input type="text" id="color" name="color" />

    <label for="size">Tamaño:</label>
    <select id="size" name="size">
      <option value="small">Pequeño</option>
      <option value="medium">Mediano</option>
      <option value="large">Grande</option>
    </select>

    <label for="ownerName">Nombre del dueño:</label>
    <input type="text" id="ownerName" name="ownerName" required />

    <label for="email">Correo electrónico del dueño:</label>
    <input type="email" id="email" name="email" required />

    <label for="phone">Número de teléfono del dueño:</label>
    <input type="tel" id="phone" name="phone" required />

    <label for="additionalInfo">Información adicional:</label>
    <textarea id="additionalInfo" name="additionalInfo"></textarea>

    <button type="submit">Registrar</button>
  </form>`
});