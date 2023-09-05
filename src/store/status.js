import { _SCORM2004 } from "@/scormApi/scormApi.js"
import { CONVERT } from "@/globals/Methods.js"
// import _SCORM from "@/scormApi/scorm.js"
// console.log(_SCORM)

export default {

    namespaced: true,

    state: {

        courceData: {
            pages: [],
            objectivs: [
            ]

        },

        start: false,
        API: _SCORM2004,

    },

    getters: {

        /** Посещение страниц */

        visit: (state) => state.courceData.pages,

        visitTotal: (state, getters, rootState, rootGetters) => rootGetters['header/menu'].length,

        checkVisit: (state) => (page) => state.courceData.pages.find(item => item.name === page),

        visitedAll: (state, getters) => state.courceData.pages.length === getters.visitTotal,

        /** Запуск курса */

        start: (state) => state.start,

        /** Получение последней страницы курса. ДЛЯ ScormAPI! */

        lastPage: (state) => state.API.getLastPage(),

        /** Получение выполнения цели */

        objectivs: (state) => state.courceData.objectivs,

        checkObjectivs(state) {
            return (object) => {
                return CONVERT(state.courceData.objectivs).find(item => item.id === object.id)
            }
        }



    },
    mutations: {

        addVisitPage(state, page) {

            state.courceData.pages.push({ name: page })
        },

        getStart(state) {
            state.start = true
            state.API.initialize()

            if (Object.values(state.API.getSaveData()).length > 0) {
                console.log('now')
                return state.courceData = state.API.getSaveData().courceData
            }

        },

        getExit(state) {

            state.API.saveData({ "courceData": state.courceData })
            state.API.terminate()

        },

        setLocation(state) {
            state.API.setLocation()
        },

        saveState(state) {
            state.API.saveData(state.courceData)
        },

        getScore(state, objective) {

            state.courceData.objectivs.push({ id: objective.id, score: objective.score })
            state.API.setScore(objective.score);

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

        checkCompleted({ commit, getters }) {
            if (getters.visitedAll) {
                commit('checkCompleted')
            }
        },
        setLocation({ commit }) {
            commit('setLocation')
        },

        saveState({ commit }) {
            commit("saveState")
        },

        getScore({ commit, getters }, objective) {

            if (!getters.checkObjectivs(objective)) {
                commit('getScore', objective)
            }
        }

    },
}