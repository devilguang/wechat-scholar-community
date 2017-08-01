import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store =  new Vuex.Store({
  state: { //定义了应用状态的数据结构，同样可以在这里设置默认的初始状态
    openId: '',
    userInfo:{}, //登录用户的信息
    name:''
  },
  actions:{ //定义提交触发更改信息的描述
    LOGIN_IN({commit}){

    }
  },
  mutations: { //调用 mutations 是唯一允许更新应用状态的地方
    //查询学者列表
    SET_USERINFO(state,data){
      state.userInfo = data
      localStorage.setItem('userInfo',JSON.stringify(data))
    },
    SET_NAME(state,name){
      state.name = name
    }
  },
  getters:{   // Getters 允许组件从 Store 中获取数据
      getUserInfo(state){
          return state.userInfo || localStorage.getItem('userInfo')
      }
  }
})
export default store
