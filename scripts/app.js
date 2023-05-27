var app = new Vue({
    el: '#app-container',
    data: {
        animalsList: false
    }, 

    methods: {
        getAnimalsList () {
        this.animalsList = JSON.parse(localStorage.getItem("listaAnimales"))
    }},

    mounted () {
            this.getAnimalsList()
    }
})