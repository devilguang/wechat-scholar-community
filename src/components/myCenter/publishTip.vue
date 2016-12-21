<template>
  <div id="publishTip">
    <article class="tipBox">
        <p>提交成功,等待系统添加</p>
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
   margin-top: 50%
}
#publishTip .tipBox p{
   text-align: center;
   width: 100%;
   font-family: "微软雅黑";
   font-size: .3rem;
   margin-top: 2rem;
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
   margin-top: 0.76rem;
}
</style>
