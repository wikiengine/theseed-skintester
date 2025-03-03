import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Nuxt from './components/nuxt/Nuxt.vue'
import NuxtLink from './components/nuxt/NuxtLink.vue'

const app = createApp(App);

app.use(store);
app.use(router);
app.component("nuxt", Nuxt);
app.component("nuxt-link", NuxtLink);
app.mount("#app");