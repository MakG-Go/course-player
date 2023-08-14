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
