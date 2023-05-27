Vue.component('component-card', {
 
props: ["nombre", "especie", "raza", "edad", "sexo", "color", "tamanio", "nombreDueno", "emailDueno", "telefonoDueno", "infoAdicional"],

    template: 
    `<li class="card">
    <h2>Información de la mascota</h2>
    <ul>
      <li><strong>Nombre:</strong> <span>{{nombre}}</span></li>
      <li><strong>Especie:</strong> <span>{{especie}}</span></li>
      <li><strong>Raza:</strong> <span>{{raza}}</span></li>
      <li><strong>Edad:</strong> <span>{{edad}}</span></li>
      <li><strong>Sexo:</strong> 
      <img v-if="sexo=='macho'" src="../img/masculino.png" alt="Macho"> 
      <img v-else src="../img/femenino.png" alt="Hembra"> 
      
      <span>{{sexo}}</span></li>
      <li><strong>Color:</strong> <span>{{color}}</span></li>
      <li><strong>Tamaño:</strong> <span>{{tamanio}}</span></li>
    </ul>
    <h2>Información del dueño</h2>
    <ul>
      <li><strong>Nombre del Dueño:</strong> <span>{{nombreDueno}}</span></li>
      <li><strong>Email del Dueño:</strong> <span>{{emailDueno}}</span></li>
      <li><strong>Teléfono del Dueño:</strong> <span>{{telefonoDueno}}</span></li>
    </ul>
    <h2>Información adicional</h2>
    <p>{{infoAdicional}}</p>
  </li>
  `
    });