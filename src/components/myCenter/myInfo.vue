<template lang="html">
  <div id="myInfo"  style="height:100vh;background:#f5f5f9">
    <header>
      <ul class="clrfix">
        <li>
          <router-link to="/myCenter/myInfo">
            <span class="active">我的</span>
            <p></p>
          </router-link>
        </li>
        <li>
         <router-link to="/myCenter/dynamic">
         <span class="">动态</span>
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
    <article class="myInfoContent">
         <section class="myConfirm">
            <div class="left">
              <img  class="default-bg" src="../../assets/img/img-scholar_1.png" alt="">
              <router-link to="/myCenter/Iwillconfirm">
                <div class="Iapprove" >
                  <span class="IwillConfirm iconfont icon-iapprove"></span>我要认证
                </div>
              </router-link>
            </div>
            <div class="right">
               <div class="title clrfix">
                 <span class="weixinName">凉风微澜</span>
                 <span class="status">未认证</span>
               </div>
                 <p class="institution">机构：<span>未知</span></p>
                <p class="direction">研究方向：<span>未知</span></p>
                <router-link to="/myCenter/editMe">
                  <a href="javascript:;"  class="editMyself" >>>编辑个人信息</a>
                </router-link>
            </div>
         </section>
         <!-- 未认证时 -->
         <section class="notConfirm" hidden>
                  <img src="../../assets/img/img-waiting_2.png" alt="">
                  <p class="notConfirmTip">您还未认领自己的学术作品，试着搜索 您的姓名找到自己的成果吧</p>
                  <button type="button" name="button" class="scholarSearchBtn">学者搜索</button>
         </section>
         <!-- 认证过后的列表页 -->
         <section class="hasConfirm">
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
         </section>
    </article>
  </div>
</template>
<script>
export default{
  methods: {
  }
}
</script>
<style>
#myInfo{
  margin-bottom: 0.9rem;
}
#myInfo .myInfoContent .myConfirm{
	 padding: .37rem .29rem ;
   box-sizing: border-box;
   background: #fff;
   height: 2.4rem;
}
#myInfo .myInfoContent .myConfirm .left img{
	 width: 1.25rem;
}
#myInfo .myInfoContent .myConfirm .left{
	 float: left;
}
#myInfo .myInfoContent .myConfirm .left .Iapprove{
	width:1.35rem;
	height: .42rem;
	border:1px solid #a1ecdd;
	border-radius: 0.07rem;
	color: #5eddc1;
	font-size: .18rem;
	line-height: .42rem;
	text-align: center;
  margin-top: 0.05rem;
  margin-left: -0.06rem;
}
#myInfo .myInfoContent .myConfirm .left .Iapprove span{
	color: #ffc320;
	font-size: .18rem;
	margin: 0 0.03rem;
}
#myInfo .myInfoContent .myConfirm .right{
  margin-left: 1.46rem;
}
#myInfo .myInfoContent .myConfirm .right .title span{
  color: #000;
  font-size: .3rem;
  float: left;
}
#myInfo .myInfoContent .myConfirm .right .title .weixinName{
  margin-top: 0.03rem;
}
#myInfo .myInfoContent .myConfirm .right .title{
  height: 0.36rem;
  margin-bottom: 0.08rem;
  margin-top: 0.05rem;
}
#myInfo .myInfoContent .myConfirm .right .title .status{
  background: #9c9c9c;
  width: .8rem;
  height: 0.36rem;
  color:#fff;
  line-height: 0.36rem;
  text-align: center;
  font-size: 0.22rem;
  border-radius: 0.05rem;
  display: block;
  float: left;
  margin-left: 0.26rem;
  margin-bottom: 0.06rem;
}
#myInfo .myInfoContent .myConfirm .right p{
  color: #000;
  font-size: .26rem;
  line-height: .38rem;
}
#myInfo .myInfoContent .myConfirm .right .editMyself{
  float: right;
  color: #ababab;
}
#myInfo .myInfoContent .notConfirm {
    padding: .7rem 10% 0;
    box-sizing: border-box;
}
#myInfo .myInfoContent .notConfirm img{
  width: 50%;
  margin-left: 25%;
}
#myInfo .myInfoContent .notConfirm .notConfirmTip{
  font-size: .27rem;
  line-height: .42rem;
  text-align: center;
  margin-top: 0.15rem;
}
#myInfo .myInfoContent .notConfirm .scholarSearchBtn{
  background: #36d7b6;
  height: .7rem;
  font-size: .3rem;
  color: #fff;
  line-height: .7rem;
  text-align: center;
  border:none;
  width: 100%;
  margin-top: 0.15rem;
  border-radius: 0.12rem;
}
#myInfo .myInfoContent .hasConfirm{
  padding: .1rem .29rem 0 ;
  box-sizing: border-box;
}
#myInfo .myInfoContent .hasConfirm .top{
  height: .68rem;
}
#myInfo .myInfoContent .hasConfirm .top .tit{
  height: .58rem;
  display: block;
  line-height: .58rem;
  float: left;
  font-size: .28rem;
  color: #36d7b6;
  border-bottom: 1px solid #36d7b6;
}
#myInfo .myInfoContent .hasConfirm .top .fruitMag{
  float: right;
  height: .52rem;
  display: block;
  line-height: .52rem;
  padding: 0 0.1rem;
  border: 1px solid #a8a8a8;
  color: #000;
  margin-top: 0.05rem;
  font-size: .22rem;
  text-align: center;
  border-radius: 0.1rem;
}
#myInfo .hasConfirm .contentMain .contentItem{
   padding-top: .17rem;
   box-sizing: border-box;
   background: #fff;
   margin-top: 0.1rem;
   margin-bottom: 0.2rem;
}
#myInfo .hasConfirm .contentMain .contentItem .wordsCon{
	  margin: 0 0.15rem;
}
#myInfo .hasConfirm .contentMain .contentItem .wordsCon .coreCon{
   font-size: .24rem;
   color: #000;
   line-height: .4rem;

}
#myInfo .hasConfirm .contentMain .contentItem .wordsCon .eachCitedNum{
   font-size: .18rem;
   color: #949499;
   line-height: .4rem;
}
#myInfo .hasConfirm .contentMain .contentItem .wordsCon .authorItem{
   font-size: .22rem;
   color: #949499;
   line-height: .4rem;
   margin-bottom: 0.1rem;
}
#myInfo .hasConfirm .contentMain .contentItem .userBtns{
  height: .6rem;
  background: #fff;
  border-top: 1px solid #ddd;
}
#myInfo .hasConfirm .contentMain .contentItem .userBtns li{
  width: 18.7%;
  float: left;
  font-size: .25rem;
  line-height: .6rem;
  padding: 0 3%;
  border-right: 1px solid #ddd;
}

#myInfo .hasConfirm .contentMain .contentItem .userBtns li:nth-of-type(4){
 border-right: none;
}
#myInfo .hasConfirm .contentMain .contentItem .userBtns li span{
	float: left;
	font-size: .4rem;
}
</style>
