import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from './components/layouts/TheHeader.vue';
const { createVuetify } = Vuetify
const vuetify = createVuetify()

const app = createApp(App);
app.component('the-header', TheHeader);

app.mount('#app');



app.use(vuetify).mount('#app')