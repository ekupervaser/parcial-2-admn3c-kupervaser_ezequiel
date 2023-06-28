var app = new Vue({
    el: '#app-container',
    router,
    data: {
        animalsList: false,
        hideForm: true
    }, 

    methods: {
        getAnimalsList () {
        this.animalsList = JSON.parse(localStorage.getItem("listaAnimales"))
    },

    displayForm () {
        this.hideForm = !this.hideForm
    }

},

    mounted () {
            this.getAnimalsList()
    }
})