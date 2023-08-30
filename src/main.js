import { createApp } from 'vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/scss/style.scss'

import router from "&/router/router.js"
import store from "@/store/index.js"
import gsapPlugin from "@/scripts/globalGsap"
import App from '@/App.vue'

import PerfectScrollbar from 'vue3-perfect-scrollbar'



createApp(App)
    .use(PerfectScrollbar, {
        watchOptions: true,
        options: {
            suppressScrollX: true
        }
    })
    .use(gsapPlugin)
    .use(router)
    .use(store)

    .mount('#app')
