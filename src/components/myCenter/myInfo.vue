<template lang="html">
  <div id="myInfo"  style="height:100vh;background:#f5f5f9">
        <router-link to="/myCenter/editMe">
          <span  class="editMyself iconfont icon-editMe" ></span>
        </router-link>
        <article class="detailTopBox clrfix">
          <div class="scholarHeader">
             <div class="headerTop clrfix">
               <div class="topLeft">
                 <span class="scholarStatus" @click="toMyFruit">未认证</span>
               </div>
               <div class="topMiddle">
                 <div class="imgBox">
                   <img src="../../assets/img/img-scholar_1.png" >
                 </div>
               </div>
               <div class="topRight">
                 <span class="attention" id="attentionBtn" @click="attention()">+关注</span>
               </div>
             </div>

           <p class="scholarAbout clrfix">李静<span class="scholarUniverse">武汉大学</span></p>
             <p class="scholarMarjor">研究方向：<span>人体解剖和组织胚胎学</span></p>
           </div>

           <!-- 详情数字部分 -->
           <div class="numBox">
             <ul class="clrfix" >
               <li class="outcomN"><span>12</span><p>成果数</p></li>
               <li class="citedN"><span>3453</span><p>被引数</p></li>
               <li class="followerN"><span>33</span><p>跟随着</p></li>
               <li class="HN"><span>56</span><p>H指数</p></li>
             </ul>
           </div>
        </article>
         <section class="centerListBox">
           <ul class="centerLists">
             <li class="centerItem" @click="toMyFruit">
               <div class="underlineBox">
                 <div class="iconBox">
                   <span class="iconfont icon-myFruit"></span>
                 </div>
               <span class="centerTitle">我的成果</span>
               <span class="iconfont icon-enter-more"></span>
               </div>
            </li>
             <li class="centerItem" @click="toCollect">
               <div class="underlineBox">
                 <div class="iconBox">
                   <span class="iconfont icon-myCollect"></span>
                 </div>
                 <span class="centerTitle">我的收藏</span>
                 <span class="iconfont icon-enter-more"></span>
                 </div>
             </li>
             <li class="centerItem" @click="toAttention">
               <div class="iconBox">
                 <span class="iconfont icon-myAttention"></span>
               </div>
              <span  class="centerTitle">我的关注</span>
              <span class="iconfont icon-enter-more"></span>
             </li>
             <li class="centerItem" @click="toDynamic">
               <div class="iconBox">
                 <span class="iconfont icon-myDynamic"></span>
               </div>
               <span  class="centerTitle">动态</span>
               <span class="iconfont icon-enter-more"></span>

             </li>
             <li class="centerItem" @click="toTalk">
               <div class="iconBox">
                 <span class="iconfont icon-myTalk"></span>
               </div>
             <span  class="centerTitle">唠嗑</span>
             <span class="iconfont icon-enter-more"></span>
             </li>
           </ul>
         </section>

         <!-- 未认证时 -->
         <!-- <section class="notConfirm" hidden>
                  <img src="../../assets/img/img-waiting_2.png" alt="">
                  <p class="notConfirmTip">您还未认领自己的学术作品，试着搜索 您的姓名找到自己的成果吧</p>
                  <button type="button" name="button" class="scholarSearchBtn">学者搜索</button>
         </section> -->
         <!-- 认证过后的列表页 -->
         <!-- <section class="hasConfirm">
            <div class="top">
              <span class="tit">成果列表</span>
              <router-link to="/myCenter/management">
                <p class="fruitMag" >成果管理</p>
              </router-link>
            </div>
            <ul class="contentMain">
              <li class="contentItem">
                <div class="wordsCon">
                     <p class="coreCon">坚持正确方向创新方法手段 提高新闻舆论传播力引导力</p>
                     <p class="eachCitedNum">被引用次数：3</p>
                     <p class="authorItem">习近平：《资源节约与环保》</p>
                </div>
                <ul class="userBtns clrfix">
                   <li><span class="iconfont icon-remark"></span>评论</li>
                   <li><span class="iconfont icon-recommendBtn"></span>推荐</li>
                   <li><span class="iconfont icon-share"></span>分享</li>
                   <li><span class="iconfont icon-collect"></span>收藏</li>
                </ul>
              </li>

            </ul>
         </section> -->
    </article>
  </div>
</template>
<script>
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
export default{
  data () {
    return {
    // 控制是否认证切换页面
      isComfirm: false
    }
  },
  methods: {
    toMyFruit: function () {
      console.log(this.isComfirm)
      if (this.isComfirm) {
        this.$router.push({
          path: '/myCenter/hasNotConfirm'
        })
        console.log(this.$route)
      } else {
        this.$router.push({
          path: '/myCenter/hasConfirm'
        })
      }
    },
    toCollect: function () {
      this.$router.push({
        path: '/myCenter/collect'
      })
    },
    toAttention: function () {
      this.$router.push({
        path: '/myCenter/attention'
      })
    },
    toDynamic: function () {
      this.$router.push({
        path: '/myCenter/dynamic'
      })
    },
    toTalk: function () {
      this.$router.push({
        path: '/myCenter/talk'
      })
    }
  }
}
</script>
<style>
#myInfo{
  margin-bottom: 0.9rem;
}
#myInfo .editMyself{
  position: absolute;
  right: .29rem;
  top: .22rem;
  color: #fff;
  display: block;
  z-index: 1;
  font-size: .42rem;
}
#myInfo .centerListBox{
 padding: 0 .29rem;
 box-sizing: border-box;
}
#myInfo .centerListBox .centerLists .centerItem{
	height:.73rem;
  background: #fff;
  padding: 0 .26rem;
  box-sizing: border-box;
}
#myInfo .centerListBox .centerLists .centerItem .icon-enter-more{
  float: right;
  line-height: .7rem;
  color: #9c9c9c;
}
#myInfo .centerListBox .centerLists .iconBox{
float: left;
width: .55rem;
height: .55rem;
border-radius: 50%;
margin-top: .09rem;
margin-right: .19rem;
}
#myInfo .centerListBox .centerLists .iconBox span{
color: #fff;
font-size: .36rem;
text-align: center;
line-height: .55rem;
display: block;
}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(1){
border-radius: .1rem .1rem 0 0 ;
}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(3){
border-radius:0  0  .1rem .1rem;
margin-bottom: .17rem;
box-shadow: 0 0.05rem 0.1rem #ddd;
}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(4){
border-radius:.1rem .1rem;
margin-bottom: .17rem;
box-shadow: 0 0.05rem 0.1rem #ddd;
}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(5){
border-radius: .1rem;
box-shadow: 0 0.05rem 0.1rem #ddd;

}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(1) .iconBox{
background:#81b3ff;
}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(2) .iconBox{
background:#ffb374;
}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(3) .iconBox{
background:#ff6fab;
}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(4) .iconBox{
background:#5dd99f;
}
#myInfo .centerListBox .centerLists .centerItem:nth-of-type(5) .iconBox{
background:#5fcaf8;
}
#myInfo .centerListBox .centerLists .centerItem .centerTitle{
	display: block;
  float: left;
  line-height: .7rem;
  font-size: .24rem;
  color: #000;
  font-family: "微软雅黑";
}
#myInfo .centerListBox .centerLists .centerItem .underlineBox{
  border-bottom: 1px solid #e1e1e1;
  height:.7rem;
  line-height: .7rem;
}
#myInfo .centerListBox .centerLists .centerItem .underlineBox {
  border-bottom: 1px solid #e1e1e1;
  height:.7rem;
  line-height: .7rem;
}
</style>
