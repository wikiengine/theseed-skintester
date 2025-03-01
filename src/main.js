import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import Nuxt from "./components/nuxt/Nuxt.vue";
import NuxtLink from "./components/nuxt/NuxtLink.vue"

const app = createApp(App);

app.use(store);
app.component("Nuxt", Nuxt);
app.component("NuxtLink", NuxtLink);
app.mount("#app")
