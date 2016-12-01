import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 开启debug模式
Vue.config.debug = true

Vue.use(VueRouter)

// 定义组件, 也可以像教程之前教的方法从别的文件引入
import findScholar from './components/findScholar.vue'
import findBook from './components/findBook.vue'
import recommend from './components/recommend.vue'
import login from './components/login.vue'
import scholarResult from './components/scholarResult.vue'
import scholarDetail from './components/scholarDetail.vue'
import bookDetail from './components/bookDetail.vue'

// 创建一个路由器实例
// 并且配置路由规则
var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
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
      path: '/findScholar/scholarResult/scholarDetail/:userID',
      component: scholarDetail
    },
    {
      path: '/findBook',
      component: findBook
    },
    {
      name: 'bookDetail',
      path: '/findBook/bookDetail/:bookID',
      component: bookDetail
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/login',
      component: login
    }
  ]
})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

console.log(app)
