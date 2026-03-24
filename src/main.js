import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import './styles/main.css'

const head = createHead()
const app = createApp(App)
app.use(router)
app.use(head)
app.mount('#app')