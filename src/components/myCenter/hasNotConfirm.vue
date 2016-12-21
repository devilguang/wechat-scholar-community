<template>
  <div id="hasNotConfirm">
    <h1><span class="iconfont icon-back" @click="back"></span>我的成果</h1>
    <section class="notConfirm">
         <img src="../../assets/img/img-waiting_2.png" alt="">
         <p class="notConfirmTip">您还未认领自己的学术作品，试着搜索 您的姓名找到自己的成果吧</p>
         <router-link to="../findScholar">
         <button type="button" name="button" class="scholarSearchBtn">学者搜索</button>
       </router-link>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
#hasNotConfirm h1{
  width: 100%;
  height: .78rem;
  background: #424951;
  font-size: .26rem;
  color: #fff;
  text-align: center;
  line-height: .78rem;
  font-family: "宋体";
  position: relative;
}
#hasNotConfirm h1 span{
  float: left;
  position: absolute;
  left: 0.18rem;
  font-size: .36rem;
}
#hasNotConfirm .notConfirm {
    padding: 1rem 10% 0;
    box-sizing: border-box;
}
#hasNotConfirm .notConfirm img{
  width: 50%;
  margin-left: 25%;
}
#hasNotConfirm .notConfirm .notConfirmTip{
  font-size: .27rem;
  font-family: "微软雅黑";
  line-height: .42rem;
  text-align: center;
  margin-top: 0.35rem;
}
#hasNotConfirm .notConfirm .scholarSearchBtn{
  background: #36d7b6;
  height: .7rem;
  font-size: .3rem;
  color: #fff;
  line-height: .7rem;
  text-align: center;
  border:none;
  width: 100%;
  margin-top: 0.55rem;
  border-radius: 0.12rem;
}
</style>
