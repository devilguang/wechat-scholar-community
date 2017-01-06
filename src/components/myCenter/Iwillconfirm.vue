<template>
  <div id="Iwillconfirm">
    <article class="toConfirmContent">
      <div class="bgBox">
        <img src="../../assets/img/confirm-bg.png" alt="">
      </div>
        <div class="confirmBox">
          <div class="emailBox itemBox">
            <span class="iconfont icon-email"></span>
            <input type="text" name="" value="" placeholder="请输入您的邮箱地址">
          </div>
          <p class="confirmTip">请使用您所在机构的邮箱认证，163、QQ等个人邮箱不可用</p>
          <button type="button" name="button" class="submitBtn" @click='publish'>提交</button>
        </div>

    </article>


  </div>
</template>
<script>
export default {
  methods: {
    publish: function () {
      this.$router.push({
        path: '/myCenter/sendemail'
      })
    }
  }
}
</script>
<style>
#Iwillconfirm .toConfirmContent .bgBox{
  width: 100%;
  padding: 1rem 26% 0.5rem;
  box-sizing: border-box;
}
#Iwillconfirm .toConfirmContent .bgBox img{
  width: 100%;
  height: 100%;
}
#Iwillconfirm .toConfirmContent .confirmBox .confirmTip{
  height: .46rem;
  line-height: .46rem;
  font-size: .2rem;
  color: #9d9c9c;
  box-sizing: border-box;
  margin-top: .2rem;
  margin-bottom: 0.3rem;
}
#Iwillconfirm .toConfirmContent .confirmBox{
 padding: 0 .77rem 0 ;
 box-sizing: border-box;
}
#Iwillconfirm .toConfirmContent .confirmBox .itemBox{
  height: .68rem;
  background: #fff;
  margin-top:  .24rem;
  line-height: .68rem;
}
#Iwillconfirm .toConfirmContent .confirmBox .itemBox span{
  margin: 0 .2rem 0 .23rem;
  color: #bdbdbd;
  display: block;
  float: left;
}
#Iwillconfirm .toConfirmContent .confirmBox .itemBox input{
  color:#dad7d7;
  font-size: .25rem;
  border: none;
  display: block;
  float: left;
  line-height: .68rem;
  width: 80%;
}
#Iwillconfirm .toConfirmContent .confirmBox .submitBtn{
  height: .75rem;
  background: #36d7b6;
  color: #fff;
  line-height: .75rem;
  text-align: center;
  border: none;
  width: 100%;
  border-radius: 0.08rem;
  margin-top: 0.3rem;
}


</style>
