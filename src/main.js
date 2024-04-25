import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.mount('#app')

import 'primevue/resources/themes/soho-dark/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-dark-green/theme.css'

import Button from "primevue/button"
app.component('Button', Button);

import InputText from 'primevue/inputtext';
app.component('InputText', InputText);

import Dropdown from 'primevue/dropdown';
app.component('Dropdown', Dropdown);

import Card from 'primevue/card';
app.component('Card', Card);

import Listbox from 'primevue/listbox';
app.component('Listbox', Listbox);

import Menubar from 'primevue/menubar';
app.component('Menubar', Menubar)

import Rating from 'primevue/rating';
app.component('Rating', Rating)

import Tooltip from 'primevue/tooltip';
app.directive('tooltip', Tooltip);

