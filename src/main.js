import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import Vuex from 'vuex';
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'

Vue.use(VueLodash, lodash)
Vue.use(Vuex)
// 开启debug模式
Vue.config.debug = true
// 调用VueRouter
Vue.use(VueRouter)
Vue.use(infiniteScroll)
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

// 创建一个路由器实例
// 并且配置路由规则
var router = new VueRouter({
    mode: 'history',
    base: __dirname,
    history: false,
    hashbang: true,
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
            component: scholarDetail
        },
        {
            path: '/findBook',
            component: findBook
        },
        {
            path: '/findBook/bookResult',
            component: bookResult
        },
        {
            name: 'bookDetail',
            path: '/findBook/bookResult/bookDetail/:bookID',
            component: bookDetail
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
            component: myInfo
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
        }
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
        scholarInfo: {}
    },
    mutations: {
        queryScholarBySolr (state, queryScholar) {
            state.queryScholar = queryScholar;
        },
        findScholarByUnique (state, scholarInfo) {
            state.scholarInfo = scholarInfo;
        }
    },
    actions: {
        saveQueryScholar: function (context, queryScholar) {
            context.commit('queryScholarBySolr', queryScholar)
        },
        saveScholarInfo: function (context, scholarInfo) {
            context.commit('findScholarByUnique', scholarInfo)
        }
    }
})

const app = new Vue({
    store,
    router: router,
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
                console.log(item)
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
// 判断是否登录
Vue.prototype.loginJudge = function () {
    if (!window.sessionStorage.getItem('userName')) {
        window.alert('请您先登录!')
        this.$router.push({
            path: '/mockLogin'
        })
        return true
    } else {
        return false
    }
}
