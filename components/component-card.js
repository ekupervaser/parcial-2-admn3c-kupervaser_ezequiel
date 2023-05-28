Vue.component('component-card', {
 
props: ["nombre", "especie", "raza", "edad", "sexo", "color", "tamanio", "nombreDueno", "emailDueno", "telefonoDueno", "infoAdicional"],

filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
},

    template: 
    `<li class="card">
    <h2>Información de la mascota</h2>
    <ul>
      <li><strong>Nombre:</strong> <span>{{nombre | capitalize}}</span></li>
      <li><strong>Especie:</strong> <span>{{especie | capitalize}}</span></li>
      <li><strong>Raza:</strong> <span>{{raza | capitalize}}</span></li>
      <li><strong>Edad:</strong> <span>{{edad | capitalize}}</span></li>
      <li><strong>Sexo:</strong> 
        <img v-if="sexo=='macho'" src="../img/masculino.png" alt="Macho"> 
        <img v-else src="../img/femenino.png" alt="Hembra"> 
      </li>
      <li><strong>Color:</strong> <span>{{color | capitalize}}</span></li>
      <li><strong>Tamaño:</strong> <span>{{tamanio | capitalize}}</span></li>
    </ul>
    <h2>Información del dueño</h2>
    <ul>
      <li><strong>Nombre del Dueño:</strong> <span>{{nombreDueno | capitalize}}</span></li>
      <li><strong>Email del Dueño:</strong> <span>{{emailDueno | capitalize}}</span></li>
      <li><strong>Teléfono del Dueño:</strong> <span>{{telefonoDueno | capitalize}}</span></li>
    </ul>
    <h2>Información adicional</h2>
    <p>{{infoAdicional}}</p>
  </li>
  `
    });