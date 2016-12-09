
<template lang="html">
  <div id="editMyself">
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
       <span class="iconfont icon-myInfo"></span>
         </router-link>
         </li> <li>
         <router-link to="/myCenter/editMyself">
         <span class="iconfont icon-editMyself active"></span>
         <p></p>
         </router-link>
         </li>
      </ul>
    </header>
    <article class="editContent">
        <section class="imgBox">
          <img  class="default-bg"src="../../assets/img/img-myself_1.jpg" alt="">
        </section>
        <section class="wordBox">
            <div class="default-head-box">
              <img  class="default-head"src="../../assets/img/img-attention_1.png" alt="">
            </div>
             <p class="myName">龙之谷</p>
             <h3 class="status">已认证</h3>
             <div class="about">
                <span>关注230 &nbsp&nbsp&nbsp&nbsp</span>
                <span>收藏46</span>
             </div>
        </section>
        <section class="essayBox">
          <div class="lineBox">
            <div class="top">
              <span class="bigdot"></span>
              <h2>推文</h2>
            </div>
            <div class="main">
              <ul>
                <li>
                  <p class="time">2016-08-06</p>
                  <div class="contentBox">
                    <p>文学是以语言文字为工具，形象形象形象文学是以语言文字为工具，形象形象形象文学是以语言文字为工具。</p>
                    <span class="triangle"></span>
                    <span class="smalldot"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </article>

    <router-view class="view"></router-view>
  </div>
</template>
<script>
</script>
