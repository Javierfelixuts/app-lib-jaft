import FormLib from './components/FormLib.vue'

export default {
    install: (app, options) => {
        //Assí se llamará en el componente cuando lo llames
        app.component("form-lib-jaft", FormLib)
    }
}