import { courseMenu, courseGlossary, courceDownload } from "&/courseData/menuData"

export default {
    namespaced: true,
    state: {
        open: false,
        menu: courseMenu(),
        glossary: courseGlossary(),
        downloads: courceDownload()

    },
    getters: {
        menu: (state) => state.menu.routs,
        glossary: (state) => state.glossary.data,
        downloads: (state) => state.downloads.data,
        menuState: (state) => state.open,
        curentPage: (state) => (name) => state.menu.routs.findIndex((el) => el.pageRoute === name)

    },
    mutations: {
        toggleMenu(state) {
            state.open = !state.open
        },
    },

    actions: {
        toggleMenu({ commit }) {
            commit('toggleMenu')
        },
    },
}

