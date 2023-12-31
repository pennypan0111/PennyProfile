import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import VueSweetalert2 from 'vue-sweetalert2';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMedium , faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faBars , faXmark , faAngleRight, faAngleLeft, faCircleUp } from '@fortawesome/free-solid-svg-icons'
import VueAmazingUI from 'vue-amazing-ui'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'element-plus/dist/index.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-amazing-ui/css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import './assets/main.css'

import App from './App.vue'
import router from './router'

library.add(faMedium , faGithub , faBars, faXmark , faAngleRight , faAngleLeft , faCircleUp )

const app = createApp(App)

app.use(createPinia())
app.use(VueAmazingUI)
app.use(router)
app.use(ElementPlus)
app.use(VueSweetalert2)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
