import _SCORM from "@/scormApi/scormApi.js"


export default {

    namespaced: true,

    state: {
        visitedPages: [],
        start: false,
        API: _SCORM,
    },

    getters: {

        start: (state) => state.start,

        visit: (state) => state.visitedPages,

        visitTotal: (state, getters, rootState, rootGetters) => rootGetters['header/menu'].length,

        checkVisit: (state) => (page) => state.visitedPages.find(item => item.name === page),

        visitedAll: (state, getters) => state.visitedPages.length === getters.visitTotal,

        lastPage: (state) => state.API.getLastPage()


    },
    mutations: {
        addVisitPage(state, page) {
            state.visitedPages.push({ name: page })
        },

        getStart(state) {
            state.start = true
            state.API.initialize()

        },
        getExit(state) {

            state.API.terminatSCORM()

        },
        setLocation(state) {

            state.API.setLocation()
        },
        setStatusCompleted(state) {

            state.API.setStatusCompleted()
        },

        saveState(state) {
            state.API.saveData(state)
        }

    },

    actions: {
        addVisitPage({ commit, getters }, page) {

            if (!getters.checkVisit(page) && page != undefined) {
                commit('addVisitPage', page)
            }
        },
        getStart({ commit }) {
            commit('getStart')
        },

        getExit({ commit }) {

            commit('getExit')
        },

        setStatusCompleted({ commit, getters }) {
            if (getters.visitedAll) {
                commit('setStatusCompleted')
            }
        },
        setLocation({ commit }) {
            commit('setLocation')
        },

        saveState({ commit }) {
            commit("saveState")
        }

    },
}