<template lang="html">
  <div id="mydynamic"  style="height:100vh;background:#fff">
    <header>
      <ul class="clrfix">
        <li>
          <router-link to="/myCenter/myInfo">
            <span class="">我的</span>
          </router-link>
        </li>
        <li>
         <router-link to="/myCenter/dynamic">
         <span class="active">动态</span>
         <p></p>
         </router-link>
         </li>
        <li>
         <router-link to="/myCenter/myApply">
        <span class="">推荐</span>
         </router-link>
         </li>
          <li>
         <router-link to="/myCenter/talk">
         <span class="">唠嗑</span>
         </router-link>
         </li>
      </ul>
    </header>
    <article class="dynamicContent">
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
import myAttention from './myAttention.vue'
import myDynamic from './myDynamic.vue'
export default {
  data () {
    return {
      tab01Text: 'myAttention',
      tab02Text: 'myDynamic',
      currentView: 'myAttention',
      isChecked: true
    }
  },
  components: {
    myAttention: myAttention,
    myDynamic: myDynamic
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
<style media="screen">
#dynamic .dynamicContent{
  margin-top: 0.75rem;
}
#dynamic .dynamicContent{
  width: 100%;
  margin-top: 1.1rem;
  border-top: 1px solid #e4e4e5;
  padding: .27rem .29rem 0;
  box-sizing: border-box;
}
#dynamic .dynamicContent .tabBox{
  height: .68rem;
}
#dynamic .dynamicContent .tabBox p{
  width: 49.5%;
  float: left;
  text-align: center;
  line-height: .68rem;
  background: #bdbdbd;
  color: #fff;
  font-size: .26rem;
  margin-left: 0.01rem;
}
#dynamic .dynamicContent .tabBox p:hover{
  background: #36d7b6;

}
#dynamic .dynamicContent .tabBox p.active{
  background: #36d7b6;

}
#dynamic .dynamicContent .tabBox p:nth-of-type(1){
  border-radius: 0.08rem 0 0 0.08rem;
}
#dynamic .dynamicContent .tabBox .firstShow:link{
  background: #36d7b6;
}
#dynamic .dynamicContent .tabBox p:nth-of-type(2){
  border-radius:0  0.08rem  0.08rem 0;
}
</style>
