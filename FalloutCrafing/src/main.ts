import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import AutoComplete from 'primevue/autocomplete';
import FloatLabel from 'primevue/floatlabel';
import ItemInputField from './views/ItemInputField.vue';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
})

app.component('AutoComplete', AutoComplete)
app.component('FloatLabel', FloatLabel)
app.component('ItemInputField', ItemInputField)

app.mount('#app')
