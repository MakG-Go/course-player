import { SCORM } from 'pipwerks-scorm-api-wrapper';
import { ScormApi } from "@/ScormData/api.js"
SCORM.version = "2004"

export default {
    namespaced: true,
    state: {
        visitedPages: [],
        start: false
    },
    getters: {
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
            SCORM.init()
            SCORM.set(ScormApi.Initialize())
            SCORM.set(ScormApi.GetValue("cmi.score.raw"))
            SCORM.set(ScormApi.SetValue("cmi.location", window.location.href))
            SCORM.set(ScormApi.GetValue("cmi.location"))
            SCORM.set(ScormApi.SetValue("cmi.objectives.1.score.min", 80))


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
