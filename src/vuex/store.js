import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 全局状态管理器
const store = new Vuex.Store({
    state: {
        queryScholar: {}
    },
    mutations: {
        QUERY_SCHOLAR (state, q) {
            state.queryScholar['q'] = q
        }
    },
    actions: {
        saveQueryScholar: function (context, q) {
            context.commit('QUERY_SCHOLAR', q)
        }
    },
    getters: state => {
        console.log(state.queryScholar)
        return state.queryScholar
    }
})