import _SCORM from "@/scormApi/scormApi.js"
import { CONVERT } from "@/globals/Methods.js"

export default {

    namespaced: true,

    state: {

        courceData: (() => {
            if (Object.values(_SCORM.getSaveData()).length > 0) {
                return _SCORM.getSaveData()
            }
            else {
                return {
                    pages: [],
                    varebles: {},
                    objectivs: [
                    ]
                }
            }
        })(),


        start: false,
        API: _SCORM,
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

        },

        getExit(state) {
            state.API.saveData(state)
            state.API.terminate()

        },
        setLocation(state) {

            state.API.setLocation()
        },

        setStatusCompleted() {
            state.API.setStatusCompleted()
        },

        saveState(state) {
            state.API.saveData(state)
        },

        getScore(state, objective) {

            state.courceData.objectivs.push({ id: objective.id, raw: objective.score })

            state.API.checkData(CONVERT(state.courceData.objectivs))
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
        },

        getScore({ commit, getters }, objective) {

            if (!getters.checkObjectivs(objective)) {
                commit('getScore', objective)
            }
        }

    },
}