import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

// createApp(App).mount('#app')
createApp(App).use(store).use(router).mount('#app')

