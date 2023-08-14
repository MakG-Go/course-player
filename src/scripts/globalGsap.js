import { gsap } from 'gsap';
/** Плагин для глобальной видимости gsap */
export default {
    install: (app) => {
        app.config.globalProperties.$gsap = gsap;
    },
};