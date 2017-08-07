import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 全局状态管理器
const store = new Vuex.Store({
    state: {  //定义了应用状态的数据结构，同样可以在这里设置默认的初始状态
        queryScholar: {},
    },
    mutations: { //调用 mutations 是唯一允许更新应用状态的地方
        QUERY_SCHOLAR (state, q) {
            state.queryScholar['q'] = q
        },
    },
    actions: { //定义提交触发更改信息的描述
        LOGIN_IN({commit}){

        },
        saveQueryScholar: function (context, q) {
            context.commit('QUERY_SCHOLAR', q)
        }
    },
    getters: state => {
        console.log(state.queryScholar)
        return state.queryScholar
    }
})
