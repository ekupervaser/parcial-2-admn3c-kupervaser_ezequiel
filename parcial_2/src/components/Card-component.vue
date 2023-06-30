<template>
    <div class="d-flex align-center flex-column">

        <v-card>

                <v-card-title><span>Información de la mascota </span> </v-card-title>

            <v-card-text>
                <ul>
                    <li><strong>Nombre:</strong> <span>{{ nombre | capitalize }}</span></li>
                    <li><strong>Especie:</strong> <span>{{ especie | capitalize }}</span></li>
                    <li><strong>Raza:</strong> <span>{{ raza | capitalize }}</span></li>
                    <li><strong>Edad:</strong> <span>{{ edad | capitalize }}</span></li>
                    <li>
                        <strong>Sexo:</strong>
                        <span>
                            <v-icon v-if="sexo === 'Macho'" color="blue">mdi-gender-male</v-icon>
                            <v-icon v-else color="pink">mdi-gender-female</v-icon>
                            {{ sexo | capitalize }}
                        </span>
                    </li>
                    <li><strong>Color:</strong> <span>{{ color | capitalize }}</span></li>
                    <li><strong>Tamaño:</strong> <span>{{ tamanio | capitalize }}</span></li>
                </ul>
                <h2 class="subtitulo">Información del dueño</h2>
                <ul>
                    <li><strong>Nombre del Dueño:</strong> <span>{{ nombreDueno | capitalize }}</span></li>
                    <li><strong>Email del Dueño:</strong> <span>{{ emailDueno | capitalize }}</span></li>
                    <li><strong>Teléfono del Dueño:</strong> <span>{{ telefonoDueno | capitalize }}</span></li>
                </ul>
                <h2 class="subtitulo">Información adicional</h2>
                <p>{{ infoAdicional }}</p>
            </v-card-text>
        </v-card>
    </div>
</template>

  
<script>
export default {
    name: 'Card-component',
    props: {
        nombre: String,
        especie: String,
        raza: String,
        edad: String,
        sexo: String,
        color: String,
        tamanio: String,
        nombreDueno: String,
        emailDueno: String,
        telefonoDueno: String,
        infoAdicional: String
    },
    filters: {
        capitalize(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
};
</script>