<template>
  <div id="publishTip">
    <article class="tipBox">
        <div class="bgBox">
          <img src="../../assets/img/publish-bg.png" alt="">
        </div>
        <p><span class="iconfont icon-success"></span>提交成功,等待系统添加</p>
        <router-link to="../myInfo">
　　　　<button type="button" name="button">返回个人中心</button>
   </router-link>
    </article>


  </div>
</template>
<script>
</script>
<style>
#publishTip .tipBox{
   margin-top: 20%;

}
#publishTip .tipBox .bgBox{
  width: 40%;
  margin-left: 30%;

}
#publishTip .tipBox p{
   text-align: center;
   width: 100%;
   font-family: "微软雅黑";
   font-size: .26rem;
   margin-top: .2rem;
}
#publishTip .tipBox p span{
   color: #36d7b6;
   margin-right: .1rem;
   font-size: .29rem;
}
#publishTip .tipBox .bgBox img{
  width: 100%;
}
#publishTip .tipBox button{
   text-align: center;
   width: 60%;
   font-family: "微软雅黑";
   background: #36d7b6;
   border-radius: 0.1rem;
   color: #fff;
   height: .68rem;
   line-height: .68rem;
   border: none;
   margin-left: 20%;
   margin-top: 0.56rem;
}
</style>
