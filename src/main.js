import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {md2} from "vuetify/blueprints";

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md2,
    theme: {
        defaultTheme: 'dark'
    }
})

createApp(App).use(vuetify).mount('#app')
