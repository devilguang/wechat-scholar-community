<template>
  <div id="sendemail">
    <article class="tipBox">
        <div class="bgBox">
          <img src="../../assets/img/publish-bg.png" alt="">
        </div>
        <p><span class="iconfont icon-success"></span>邮件发送成功，请登录此邮箱点击链接进行验证。</p>
        <router-link to="../myCenter/myInfo">
　　　　<button type="button" name="button">返回个人中心</button>
        </router-link>
    </article>


  </div>
</template>
<script>
</script>
<style>
#sendemail .tipBox{
   margin-top: 20%;

}
#sendemail .tipBox .bgBox{
  width: 40%;
  margin-left: 30%;

}
#sendemail .tipBox p{
   text-align: center;
   width: 100%;
   font-family: "微软雅黑";
   font-size: .26rem;
   margin-top: .2rem;
}
#sendemail .tipBox p span{
   color: #36d7b6;
   margin-right: .1rem;
   font-size: .29rem;
}
#sendemail .tipBox .bgBox img{
  width: 100%;
}
#sendemail .tipBox button{
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
