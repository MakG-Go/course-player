
import { _SCORMV } from "@/globals/Methods"
import { _CONVERT } from "@/globals/Methods.js"
import { ALL_VISIT } from "@/globals/Const.js"


export default {

    namespaced: true,

    state: {

        courceData: {
            pages: [],
            objectivs: [
            ],
            variations: {},
            totalVisit: ALL_VISIT,

        },

        start: false,
        API: _SCORMV(),

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

        lastPage: (state) => state.API.getLastPage() || state.courceData.lastPage,

        /** Получение выполнения цели */

        objectivs: (state) => state.courceData.objectivs,

        checkObjectivs: (state) => (object) => _CONVERT(state.courceData.objectivs).some(item => item.id === object.id),

        /** Восстановление изначальных API Objectivs */

        restorAPIobjectivs: (state) => state.API.getRestoreObjectivs(),

        /** Получение значения кастомных переменных из API */

        variations: (state) => state.courceData.variations,

        checkVariations: (state) => (oGlobal) => state.courceData.variations.some(item => item.name === oGlobal.name)


    },

    mutations: {

        /** Добавляем просмотренные страницы */

        addVisitPage(state, page) {

            state.courceData.pages.push({ name: page });

        },

        /** Старт курса */

        getStart(state) {

            state.start = true
            state.API.initialize()

            if (Object.values(state.API.getSaveData()).length > 0) {
                console.log('now');
                return state.courceData = state.API.getSaveData().courceData
            }

        },

        getExit(state) {

            state.API.saveData({ "courceData": state.courceData });

        },

        /** Сохраняем текущюю страницу в suspend_data */

        setLocation(state, { totalVisit, location }) {

            state.courceData.totalVisit = totalVisit;

            state.courceData.lastPage = state.API.setLocation(location);
        },

        /** Сохранение state.courceData в suspend_data */

        saveState(state) {

            state.API.saveData({ "courceData": state.courceData });
        },

        /** Отправка и проверка objectivs*/

        setScore(state, objective) {

            if (!state.courceData.objectivs.some(item => item.id === objective.id)) {
                state.courceData.objectivs.push({ id: objective.id, score: objective.score });
            }
            else {
                state.courceData.objectivs.forEach(el => {
                    el.id === objective.id && objective.score > el.score ? el.score = objective.score : ''
                });
            }

            state.API.setScore(state.courceData.objectivs);
            state.API.saveData({ "courceData": state.courceData });

        },

        /** Создание т редактирование глобальных переменных в API */

        setVariations(state, oGlobal) {

            state.courceData.variations[oGlobal.name] = oGlobal.value;
        },

        /** Проверка на просмотр всех страниц */

        checkTotalVisit(state) {

            state.API.checkTotalVisit()
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

        setLocation({ commit, getters }, location) {

            let totalVisit

            ALL_VISIT ? totalVisit = true : totalVisit = getters.visitedAll

            commit('setLocation', { totalVisit, location })
        },

        checkTotalVisit({ commit }) {
            commit("checkTotalVisit")
        },

        saveState({ commit }) {

            commit('saveState')
        },

        setScore({ commit, getters }, objective) {



            commit('setScore', objective)

        },

        setVariations({ commit }, oGlobal) {
            commit('setVariations', oGlobal)
        }
    },
}