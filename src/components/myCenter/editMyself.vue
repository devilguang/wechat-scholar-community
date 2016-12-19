
<template lang="html">
  <div id="editMyself">
    <header>
      <ul class="clrfix">
        <li>
          <router-link to="/myCenter/myInfo">
            <span class="iconfont icon-myInfo"></span>
          </router-link>
        </li>
        <li>
         <router-link to="/myCenter/scholarCircle">
         <span class="iconfont icon-scholarCircle"></span>
         </router-link>
         </li>
        <li>
         <router-link to="/myCenter/myApply">
        <span class="iconfont icon-myApply"></span>
         </router-link>
         </li>
          <li>
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
                <li>
                  <p class="time">2016-08-06</p>
                  <div class="contentBox">
                    <p>文学是以语言文字为工具，形象形象形象文学是以语言文字为工具，形象形象形象文学是以语言文字为工具。</p>
                    <span class="triangle"></span>
                    <span class="smalldot"></span>
                  </div>
                </li>
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
<style>
#editMyself .editContent{
margin-top: 1.1rem;
margin-bottom:.88rem;
}
#editMyself .editContent .imgBox{
 width: 100%;
 height: 1.79rem;

}
#editMyself .editContent .imgBox .default-bg{
 width: 100%;
}
#editMyself .editContent .wordBox{
 height: 2.22rem;
 background: #fff;
 position: relative;
 padding-top: .7rem;
 box-sizing: border-box;
}
#editMyself .editContent .wordBox .default-head-box{
 position: absolute;
 left: 50%;
 margin-left: -.68rem;
 width: 1.36rem;
 height: 1.36rem;
 top: -.68rem;
 color: #36d7b6;
 background: #fff;
 border-radius: 50%;
 box-sizing: border-box;
}
#editMyself .editContent .wordBox .default-head-box .default-head{
 width: 1.26rem;
 border-radius: 50%;
 margin-top: 0.05rem;
 margin-left: 0.05rem;
}
#editMyself .editContent .wordBox .myName{
 text-align: center;
 color: #36d7b6;
 font-size: .3rem;
 line-height: .4rem;
}
#editMyself .editContent .wordBox .status{
  background: #ffb656;
  width: .9rem;
  height: .26rem;
  border-radius: .3rem;
  color: #fff;
  line-height: .26rem;
  text-align: center;
  font-weight: nomal;
  font-size: .16rem;
  position: relative;
  left: 50%;
  margin-top: .06rem;
  margin-left: -.45rem;
}
#editMyself .editContent .wordBox .about{
color: #9c9c9c;
font-size: .19rem;
text-align: center;
margin-top: 0.12rem;
}
#editMyself .editContent .essayBox{
padding: 0.23rem .29rem 0 ;
box-sizing: border-box;
}
#editMyself .editContent .essayBox .lineBox{
border-left: 1px solid #fad4a3;
}
#editMyself .editContent .essayBox .lineBox .top{
position: relative;
}
#editMyself .editContent .essayBox .lineBox .top .bigdot{
background: #ffb656;
width: .22rem;
height: .22rem;
border-radius: 50%;
display: block;
position: absolute;
left: -0.11rem;
}
#editMyself .editContent .essayBox .lineBox .top h2{
font-size: .26rem;
color: #000;
font-weight: normal;
margin-left: 0.2rem;
}
#editMyself .editContent .essayBox .lineBox .main ul li{
margin-top: .36rem;
margin-left: 0.33rem;
}
#editMyself .editContent .essayBox .lineBox .main ul li .time{
font-size: .18rem;
color: #b0b0b1;
line-height: .38rem;
}
#editMyself .editContent .essayBox .lineBox .main ul li .contentBox{
background: #fff;
padding: 0.15rem;
box-sizing: border-box;
position: relative;
}
#editMyself .editContent .essayBox .lineBox .main ul li .contentBox p{
font-size: .22rem;
color: #000;
line-height: .34rem;
}
#editMyself .editContent .essayBox .lineBox .main ul li .contentBox .triangle{
  position: absolute;
  left: -0.18rem;
  top: 50%;
  margin-top: -0.19rem;
  width:0;
  height:0;
  border-bottom: 0.19rem solid transparent;
  border-top:0.19rem solid transparent;
  border-right:.19rem solid #fff;
}
#editMyself .editContent .essayBox .lineBox .main ul li .contentBox .smalldot{
  position: absolute;
  left: -0.4rem;
  top: 50%;
  margin-top: -0.065rem;
  display: block;
  border-radius: 50%;
  background: #ffb656;
  width: .13rem;
  height: .13rem;
}
</style>
