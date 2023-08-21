import { LMS } from "./LMSAPI.js"
import SCORM_2004 from "./SCORM_2004_API.js"
import { SCORM } from 'pipwerks-scorm-api-wrapper';

console.log(SCORM)
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
        }

    },
}
