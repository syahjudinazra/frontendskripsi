import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import './assets/main.css'
import './assets/styles.css'

// library.add(faUserSecret)

// createApp(App)
// .component('font-awesome-icon', FontAwesomeIcon)
// .mount('#app')

const app = createApp(App)

app.use(router)

app.mount('#app')

