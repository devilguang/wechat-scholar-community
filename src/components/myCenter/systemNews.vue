<template lang="html">
  <div id="systemNews">
    <ul class="systemNewsBox">
      <li class="clrfix systemNewsItem">
       <div class="left">
         <div class="iconBox">
           <span class="iconfont icon-bell"></span>
         </div>
       </div>
       <div class="right">
         <p class="systemTitle">系统消息</p>
         <p class="newsTime">2016-12-27</p>
         <p class="mainInfo">您于10月28日认证为<span>“张世飞”</span>学者 已认证通过，您可自行管理您的成果了</p>
       </div>
      </li>
      <li class="clrfix systemNewsItem">
       <div class="left">
         <div class="iconBox">
           <span class="iconfont icon-bell"></span>
         </div>
       </div>
       <div class="right">
         <p class="systemTitle">系统消息</p>
         <p class="newsTime">2016-12-27</p>
         <p class="mainInfo">您于10月28日认证为<span>“文献标题”</span>您可自行管理您的成果了</p>
       </div>
      </li>
      <li class="clrfix systemNewsItem">
         <div class="left">
           <div class="iconBox">
             <span class="iconfont icon-bell"></span>
           </div>
         </div>
         <div class="right">
           <p class="systemTitle">系统消息</p>
           <p class="newsTime">2016-12-27</p>
           <p class="mainInfo">您于10月28日认证为<span>“张世飞”</span>学者 已认证通过，您可自行管理您的成果了</p>
         </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#systemNews .systemNewsBox .systemNewsItem{
padding: 0.18rem 0 0.16rem 0;
box-sizing: border-box;
border-bottom: 1px solid #e1e1e1;
}
#systemNews .systemNewsBox .systemNewsItem .left{
 margin-right: .18rem;
 float: left;
}
#systemNews .systemNewsBox .systemNewsItem .left .iconBox{
  width: .63rem;
  height: .63rem;
  background:  #36d7b6;
  border-radius: .06rem;

}
#systemNews .systemNewsBox .systemNewsItem .left .iconBox span{
  color: #fff;
  text-align: center;
  font-size: .38rem;
  display: block;
  height: .63rem;
  line-height: .63rem;
}
#systemNews .systemNewsBox .systemNewsItem .right{
float: left;
width: 80%;
}
#systemNews .systemNewsBox .systemNewsItem .right .systemTitle{
  font-size: .23rem;
  color: #000;
  line-height: .4rem;
}
#systemNews .systemNewsBox .systemNewsItem .right .newsTime{
  font-size: .23rem;
  color: #cecece;
  line-height: .38rem;
}
#systemNews .systemNewsBox .systemNewsItem .right .mainInfo{
  font-size: .23rem;
  color: #000;
  line-height: .38rem;
}
#systemNews .systemNewsBox .systemNewsItem .right .mainInfo span{
 color: #ffb656;
}

</style>
