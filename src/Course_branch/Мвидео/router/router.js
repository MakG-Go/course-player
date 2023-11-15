
import { createRouter, createWebHashHistory } from "vue-router"
import tutorial from '&/views/Tutorial.vue'

import page_1 from '&/views/pages/Page_1.vue'
import page_2 from '&/views/pages/Page_2.vue'

import { gsap } from 'gsap';



const routes = [
    { path: '/', name: 'tutorial-page', component: tutorial, props: true },

    { path: '/page_1', name: 'page_1', component: page_1, props: true },

    { path: '/page_2', name: 'page_2', component: page_2, props: true },


]

export default createRouter({
    history: createWebHashHistory(),
    routes,
    base: '/',

    /** Для скролла до элемента из меню */

    scrollBehavior(to, from, savedPosition) {
        let checkFrom = from.fullPath.split('#').slice(0, 1).join()
        let checkTo = to.path
        let time, headerHeight

        checkFrom === checkTo ? time = 0 : time = 1050
        window.innerWidth > 1024 ? headerHeight = 100 : headerHeight = 75

        let tl_1 = gsap.timeline({
            defaults: {
                ease: "Sine.easeOut",
            },
        });
        let container = document.querySelector('.js-global-scroll')

        if (to.hash) {
            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    let el = document.getElementById(to.hash.substring(1))
                    resolve(
                        tl_1.to(container, {
                            scrollTop: el.offsetTop - headerHeight,
                            duration: 1,
                        })
                    )
                }, time)
            })

        } else {
            return tl_1.to(container, {
                scrollTop: 0,
                duration: 0.1,
            });;
        }
    },
})

