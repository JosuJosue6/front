import { createApp } from 'vue'
import App from './App.vue'

//COnfiguracion del router
import router from './router/router.js'

createApp(App).use(router).mount('#app')
