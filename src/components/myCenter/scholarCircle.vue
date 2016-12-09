<template lang="html">
  <div id="scholarCircle" style="height:100vh;background:#fff">
    <header>
      <ul class="clrfix">
        <li @click="next" class="abc" id="test">
         <router-link to="/myCenter/scholarCircle">
         <span class="iconfont icon-scholarCircle active"></span>
         <p></p>
         </router-link>
         </li>
        <li>
         <router-link to="/myCenter/myApply">
        <span class="iconfont icon-myApply"></span>
         </router-link>
         </li> <li>
         <router-link to="/myCenter/myInfo">
       <span class="iconfont icon-myInfo"></span>
         </router-link>
         </li> <li>
         <router-link to="/myCenter/editMyself">
         <span class="iconfont icon-editMyself"></span>
         </router-link>
         </li>
      </ul>
    </header>
    <article class="circleContent">
      <ul class="circleLists">
        <li class="circleList">
          <section class="circleTop clrfix">
            <img src="../../assets/img/img-attention_1.png" alt="">
            <p class="name">安妮宝贝</p>
            <p class="publicTime">发布时间 ： 2016-12-06 14:07</p>
            <span class="iconfont icon-beliked"></span><span class="belikedNum">123</span>
          </section>
          <section class="essayBegin">
            <a href="javascript:;">
              <img src="../../assets/img/img-attention_2.png" alt="">
              <p class="essayFirst">文学是以语言文字为工具，形象形象形象学是以语言文字为工具，形学是以语言文字为工具，形学是以语言文字为工具，形</p>
            </a>
          </section>
          <section class="commitTitle">
            <span class="commitNum">共2312条评论</span>
            <span class="iconfont icon-recommendBtn"></span>
          </section>
          <section class="commitBox">
            <ul>
              <li>
                <span class="observerName">莫言:</span>
                <p class="observerContent">为广大学生提供最新、最全、最实用的文学名著作品与资料本站有丰富的诗歌</p>
              </li>
              <li>
                <span class="observerName">莫言:</span>
                <p class="observerContent">为广大学生提供最新、最全、最实用的文学名著作品与资料本站有丰富的诗歌</p>
              </li>
            </ul>
            <div class="commitInput">
              <input type="text" name="" value="" placeholder="评论" class="remark">
              <span class="iconfont icon-observerRemark"></span>
            </div>
          </section>
        </li>
      </ul>
    </article>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    next: function () {
      console.log(123)
    }
  }
}
</script>
