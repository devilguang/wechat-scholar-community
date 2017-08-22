import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import Vuex from 'vuex'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import VueAuthenticate  from 'vue-authenticate'

Vue.use(VueLodash, lodash)
Vue.use(Vuex)
// 开启debug模式
Vue.config.debug = true
Vue.config.productionTip = false
// 调用VueRouter
Vue.use(VueRouter)
Vue.use(infiniteScroll)
console.log(VueAuthenticate)
Vue.prototype.$axios = axios.create({baseURL: 'http://120.55.191.189:9000'});
Vue.prototype.$http = axios;

// const FETCH_DATA_PREFIX_URL = 'http://localhost/'
// 定义组件, 也可以像教程之前教的方法从别的文件引入
import findScholar from './components/findScholar.vue'
import findBook from './components/findBook.vue'
import recommend from './components/recommend.vue'
import mockLogin from './components/mockLogin.vue'
import scholarResult from './components/scholarResult.vue'
import bookResult from './components/bookResult.vue'
import scholarDetail from './components/scholarDetail.vue'
import bookDetail from './components/bookDetail.vue'

import codeInput from './components/codeInput.vue'
import setName from './components/setName.vue'
import chooseField from './components/chooseField.vue'
import recommendDetail from './components/recommendDetail.vue'
import scholarCircle from './components/myCenter/scholarCircle.vue'
import dynamic from './components/myCenter/dynamic.vue'
import editMyself from './components/myCenter/editMyself.vue'
import myApply from './components/myCenter/myApply.vue'
import talk from './components/myCenter/talk.vue'
import management from './components/myCenter/management.vue'
import editMe from './components/myCenter/editMe.vue'
import Iwillconfirm from './components/myCenter/Iwillconfirm.vue'

import myInfo from './components/myCenter/myInfo.vue'
import hasNotConfirm from './components/myCenter/hasNotConfirm.vue'
import hasConfirm from './components/myCenter/hasConfirm.vue'
import publishFruit from './components/myCenter/publishFruit.vue'
import publishTip from './components/myCenter/publishTip.vue'
import collect from './components/myCenter/collect.vue'
import attention from './components/myCenter/attention.vue'
import sendemail from './components/myCenter/sendemail.vue'
// import interactNews from './components/myCenter/interactNews.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    // history: false,
    // hashbang: true,
    routes: [
        {
            path: '/',
            component: findScholar
        },
        {
            path: '/findScholar',
            component: findScholar
        },
        {
            path: '/findScholar/scholarResult',
            component: scholarResult
        },
        {
            name: 'detail',
            path: '/findScholar/scholarResult/scholarDetail',
            component: scholarDetail,
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/findBook',
            component: findBook
        },
        {
            path: '/findBook/bookResult',
            component: bookResult,

        },
        {
            name: 'bookDetail',
            path: '/findBook/bookResult/bookDetail',
            component: bookDetail,
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/recommend',
            component: recommend
        },
        {
            path: '/mockLogin',
            component: mockLogin
        },
        {
            path: '/codeInput',
            component: codeInput
        },
        {
            path: '/setName',
            component: setName
        },
        {
            path: '/chooseField',
            component: chooseField
        },
        {
            path: '/recommendDetail',
            component: recommendDetail
        },
        {
            path: '/myCenter/scholarCircle',
            component: scholarCircle
        },
        {
            path: '/myCenter/myApply',
            component: myApply
        },
        {
            path: '/myCenter/myInfo',
            component: myInfo,
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/myCenter/hasNotConfirm',
            component: hasNotConfirm
        },
        {
            path: '/myCenter/hasConfirm',
            component: hasConfirm
        },
        {
            path: '/myCenter/editMyself',
            component: editMyself
        },
        {
            path: '/myCenter/dynamic',
            component: dynamic
        },
        {
            path: '/myCenter/talk',
            component: talk
        },
        {
            path: '/myCenter/management',
            component: management
        },
        {
            path: '/myCenter/management/publishTip',
            component: publishTip
        },
        {
            path: '/myCenter/management/publishFruit',
            component: publishFruit
        },
        {
            path: '/myCenter/collect',
            component: collect
        },
        {
            path: '/myCenter/attention',
            component: attention
        },
        {
            path: '/myCenter/editMe',
            component: editMe
        },
        {
            path: '/myCenter/Iwillconfirm',
            component: Iwillconfirm
        },
        {
            path: '/myCenter/sendemail',
            component: sendemail
        },

    ]
})

// const irsback = 'http://120.55.191.189:9000/v1';
// ajax传data编码问题
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。

// 全局状态管理器
const store = new Vuex.Store({
    state: {
        queryScholar: {},
        scholarInfo: {},
        scholarsList: {},  //学者列表
        queryAch: {},
        userInfo: {}, //登录用户的信息
        token: '',
        review: null,
        ach_unique: '',
    },
    mutations: {
        queryScholarBySolr (state, queryScholar) {
            state.queryScholar = queryScholar;
        },
        findScholarByUnique (state, scholarInfo) {
            state.scholarInfo = scholarInfo;
        },
        findAchByTitle (state, queryAch) {
            state.queryAch = queryAch;
        },
        SET_USERINFO(state, data){
            state.userInfo = data
            localStorage.setItem('userInfo',JSON.stringify(data))
        },
        SET_SCHOLARLIST(state, data){
            state.scholarsList = data
        },
        SET_TOKEN(state, token){
            state.token = token
            localStorage.setItem('token',token)
        },
        SET_REVIEW(state, review){
            state.review = review
        },
        SET_ACHUNIQUE(state, ach_unique){  //成果唯一标识符
            state.ach_unique = ach_unique
        }
    },
    actions:{   //定义的全局的方法  每个页面都可以调用
        saveQueryScholar: function (context, queryScholar) {
            context.commit('queryScholarBySolr', queryScholar)
        },
        saveScholarInfo: function (context, scholarInfo) {
            context.commit('findScholarByUnique', scholarInfo)
        },
        saveSearchAchQuery: function (context, queryAch) {
            context.commit('findAchByTitle', queryAch)
        },
        saveScholarsList: function (context, scholarsList) {
            context.commit('SET_SCHOLARLIST', scholarsList)
        },
        useAxiosGetToken(){

        }

    },
    getters: {
        getUserInfo:state=>{
            return (state.userInfo && state.userInfo.id) ? state.userInfo : JSON.parse(localStorage.getItem('userInfo'))
        },
        getDatatype: state => {
            return state.scholarInfo
        },
        getAchunique: state => {
            return state.ach_unique
        },
        getSholarlist: state => {
            return state.scholarsList
        },
    }
})

// const authUser = Vue.prototype.$auth = new VueAuthenticate(axios,{
//
//     baseUrl: 'http://120.55.191.189:9000',  //默认地址
//     tokenType: 'Bearer',                      //token 类型，会与 token 一同放在 http 头字段中发送
//     tokenHeader:'Authorization',             //请求时，携带 token 的http头字段
//     responseDataKey:'data',                  //接收 token 时，response 中存放 token 的地方
//     tokenName : 'token',                      //接收 token 时，response 中指向 token 的名字
//     //请求拦截器
//     bindRequestInterceptor (){
//         console.log("我是请求拦截器")
//         this.$http.interceptors.request.use((config) => {
//             if (this.isAuthenticated()) {
//                 config.headers['Authorization'] = [
//                     this.options.tokenType, this.getToken()
//                 ].join(' ')
//             } else {
//                 delete config.headers['Authorization']
//             }
//             return config
//         })
//     },
//     //应答拦截器
//     bindResponseInterceptor(){
//         console.log("我是应答拦截器")
//         this.$http.interceptors.response.use((response) => {
//             console.log(response,111)
//             let {errno,token} = response.data
//             if(errno==0&&token){
//                 this.setToken(response)
//             }
//             return response
//         })
//     }
// })

console.log(Vue)
// Vue.use(VueAuthenticate, {
//     bindRequestInterceptor: function () {
//         console.log(12312323213)
//         Vue.prototype.$axios.interceptors.request.use((config) => {
//             if (this.isAuthenticated()) {
//                 config.headers['Authorization'] = [
//                     this.options.tokenType, this.getToken()
//                 ].join(' ')
//             } else {
//                 delete config.headers['Authorization']
//             }
//             return config
//         })
//     },
//     bindResponseInterceptor: function () {
//         console.log(1010101010101010)
//         Vue.prototype.$axios.interceptors.response.use((response) => {
//             this.setToken(response)
//             return response
//         })
//     }
// })

//拦截器
Vue.prototype.$axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = 'Bearer ' + store.state.token;
        }
        return config
    }, err => {
        return Promise.reject(err);
    })
Vue.prototype.$axios.interceptors.response.use(
    response => {
        if(response.data.errno===6){
            let openId = localStorage.getItem('openId')
            Vue.prototype.$axios.get('/v1/weChat/token/' + openId).then((response) => {
                let token = response.data.token
                store.commit('SET_TOKEN',token)
            })
        }
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面

            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
const app = new Vue({
    store,
    router,
    //authUser,
    render: h => h(App)
}).$mount('#app')


var num = 0
export default {
    data() {
        return {
            collectItems: []
        }
    },
    methods: {
        recommend: function (item, index) {
            if ((typeof item.recommendActive) === 'undefined') {
                Vue.set(this.collectItems[index], 'recommendActive', true)
            } else {
                item.recommendActive = !item.recommendActive
            }
        },
        collect: function (item, index) {
            num = index
            if ((typeof item.collectActive) === 'undefined') {
                Vue.set(this.collectItems[index], 'collectActive', true)
            } else {
                item.collectActive = !item.collectActive
            }
            if (item.collectActive === true) {
                // item.innerHTML = '已收藏'
                // console.log(item)
                document.getElementsByClassName('collectWord')[index].innerHTML = '已收藏'
            }
            if (item.collectActive === false) {
                document.getElementsByClassName('collectWord')[index].innerHTML = '收藏'
                document.getElementById('cancelCollectBox').style.display = 'block'
            }
        },
        // 取消收藏弹框按钮
        cancel: function () {
            document.getElementById('cancelCollectBox').style.display = 'none'
            Vue.set(this.collectItems[num], 'collectActive', true)
            document.getElementsByClassName('collectWord')[num].innerHTML = '已收藏'
        },
        confirm: function () {
            document.getElementById('cancelCollectBox').style.display = 'none'
            Vue.set(this.collectItems[num], 'collectActive', false)
        }
    }
}


