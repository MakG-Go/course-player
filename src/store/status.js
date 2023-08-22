
import SCORM_2004 from "@/ScormApi/ScormApi.js"


export default {
    namespaced: true,
    state: {
        visitedPages: [],
        start: false,
        API: SCORM_2004
    },
    getters: {
        getApi: (state) => state.API,
        start: (state) => state.start,
        visit: (state) => state.visitedPages,
        visitTotal: (state, getters, rootState, rootGetters) => rootGetters['header/menu'].length,
        checkVisit: (state) => (page) => state.visitedPages.some(item => item.name === page),
        visitedAll: (state, getters) => state.visitedPages.length === getters.visitTotal


    },
    mutations: {
        addVisitPage(state, page) {
            state.visitedPages.push({ name: page })
        },
        getStart(state) {
            state.start = true
            state.API.initializeSCORM()
            state.API.setEntry();
        },
        getExit(state) {
            state.API.terminatSCORM()
        },
        setLocation(state) {
            state.API.setLocation()
        },
        setStatusCompleted(state) {
            state.API.setStatusCompleted()
        }
    },

    actions: {
        addVisitPage({ commit, getters }, page) {

            if (!getters.checkVisit(page)) {
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
        }



    },
}
