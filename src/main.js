import { createApp } from 'vue'
import 'animate.css/animate.min.css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/scss/style.scss'
import 'virtual:svg-icons-register'
import router from "&/router/router.js"
import store from "@/store/index.js"
import gsapPlugin from "@/customPlugins/globalGsap"
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


// window.onbeforeunload = function (e) {
//     store.dispatch('status/getExit');

//     var message = "Are you sure you want to leave this page?";
//     e.returnValue = message;
//     return message;

// };
