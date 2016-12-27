<template lang="html">
  <div id="mydynamic"  style="height:100vh;background:#fff">
    <article class="dynamicContent">
      <section class="tabBox">
        <p @click='tabToggle(tab01Text)' :class="{active: activeName == tab01Text || activeFirst}">互动消息</p>
        <p @click='tabToggle(tab02Text)' :class="{active: activeName == tab02Text}">系统消息</p>
      </section>
        <!-- 选项卡部分页面在component体现 -->
      <component :is='currentView' keep-alive></component>
        <!-- 如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数 -->

    </article>
  </div>
</template>
<script>
import interactNews from './interactNews.vue'
import systemNews from './systemNews.vue'
export default {
  data () {
    return {
      tab01Text: 'interactNews',
      tab02Text: 'systemNews',
      currentView: 'interactNews',
      activeName: 'tab01Text',
      activeFirst: true
    }
  },
  components: {
    interactNews: interactNews,
    systemNews: systemNews
  },
  methods: {
    tabToggle: function (tabText) {
      this.currentView = tabText
      this.activeFirst = false
      this.activeName = tabText
    }
  }
}
</script>
<style media="screen">
#mydynamic .dynamicContent{
  width: 100%;
  border-top: 1px solid #e4e4e5;
  padding: .27rem .29rem 0;
  box-sizing: border-box;
  margin-bottom: .9rem;
}
#mydynamic .dynamicContent .tabBox{
  height: .68rem;
}
#mydynamic .dynamicContent .tabBox p{
  width: 49.5%;
  float: left;
  text-align: center;
  line-height: .68rem;
  background: #bdbdbd;
  color: #fff;
  font-size: .26rem;
  margin-left: 0.01rem;
}
#mydynamic .dynamicContent .tabBox p:hover{
  background: #36d7b6;

}
#mydynamic .dynamicContent .tabBox p.active{
  background: #36d7b6;

}
#mydynamic .dynamicContent .tabBox p:nth-of-type(1){
  border-radius: 0.08rem 0 0 0.08rem;
}
#mydynamic .dynamicContent .tabBox .firstShow:link{
  background: #36d7b6;
}
#mydynamic .dynamicContent .tabBox p:nth-of-type(2){
  border-radius:0  0.08rem  0.08rem 0;
}
</style>
