<template>
  <div id="Iwillconfirm">
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
    <article class="toConfirmContent">
        <p class="confirmTip">请提供您所在的机构邮箱，我们将发送验证邮件</p>
        <div class="confirmBox">
          <div class="emailBox itemBox">
            <span class="iconfont icon-email"></span>
            <input type="text" name="" value="" placeholder="请输入您的邮箱地址">
          </div>
          <div class="telBox itemBox">
            <span class="iconfont icon-tel"></span>
            <input type="text" name="" value="" placeholder="请输入您的手机号">
          </div>
          <button type="button" name="button" class="submitBtn">提交</button>
        </div>

    </article>


  </div>
</template>
<script>
</script>
<style>
#Iwillconfirm .toConfirmContent{
  margin-top: 0.75rem;
}
#Iwillconfirm .toConfirmContent .confirmTip{
  height: .59rem;
  background: #e9e9e9;
  line-height: .59rem;
  font-size: .2rem;
  color: #9d9c9c;
  text-align: center;
}
#Iwillconfirm .toConfirmContent .confirmBox{
 padding: .14rem .77rem 0 ;
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
