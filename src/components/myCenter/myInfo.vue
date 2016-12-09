<template lang="html">
  <div id="myInfo"  style="height:100vh;background:#fff">
    <header>
      <ul class="clrfix">
        <li>
         <router-link to="/myCenter/scholarCircle">
         <span class="iconfont icon-scholarCircle"></span>
         </router-link>
         </li>
        <li>
         <router-link to="/myCenter/myApply">
        <span class="iconfont icon-myApply"></span>
         </router-link>
         </li> <li>
         <router-link to="/myCenter/myInfo">
       <span class="iconfont icon-myInfo active"></span>
       <p></p>
         </router-link>
         </li> <li>
         <router-link to="/myCenter/editMyself">
         <span class="iconfont icon-editMyself"></span>
         </router-link>
         </li>
      </ul>
    </header>
    <article class="myInfoContent">
      <section class="tabBox">
        <p @click='tabToggle(tab01Text)' v-bind:class="{active:isChecked}">我的关注</p>
        <p @click='tabToggle(tab02Text)'>我的动态</p>
      </section>
        <!-- 选项卡部分页面在component体现 -->
      <component :is='currentView' keep-alive></component>
        <!-- 如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数 -->

    </article>
  </div>
</template>
<script>
import attention from './attention.vue'
import dynamic from './dynamic.vue'
export default {
  data () {
    return {
      tab01Text: 'attention',
      tab02Text: 'dynamic',
      currentView: 'attention',
      isChecked: true
    }
  },
  components: {
    attention: attention,
    dynamic: dynamic
  },
  methods: {
    tabToggle: function (tabText) {
      this.currentView = tabText
      this.isChecked = false
      console.log(this.isChecked)
    }
  }
}
</script>
