<template lang="html">
  <div id="editMe">
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
    <form class="editBox">
        <section class="imgBox eachBox clrfix">
          <p><img src="../../assets/img/img-scholar_1.png" alt=""></p>
          <span class="resend">重新上传></span>
        </section>
        <section class="weixinBox eachBox clrfix">
          <p>微信号</p>
            <input  v-model="weixinname" type="text" onkeydown="this.onkeyup();" onkeyup="this.size=(this.value.length>4?this.value.length:8);" size="8" v-bind:value="weixinname">
          </section>
        <section class="nameBox eachBox clrfix">
          <p>学者名</p>
          <input  v-model="selfname" type="text" onkeydown="this.onkeyup();" onkeyup="this.size=(this.value.length>2?this.value.length*2:4);" size="4" v-bind:value="selfname">
       </section>
        <section class="instituteBox eachBox clrfix">
          <p>机构</p>
          <input  v-model="insititute" type="text" onkeydown="this.onkeyup();" onkeyup="this.size=(this.value.length>7?this.value.length*2:14);" size="14" v-bind:value="insititute">

        </section>
        <section class="dirBox eachBox clrfix">
          <p>领域方向</p>
          <input v-model="dir" type="text" onkeydown="this.onkeyup();" onkeyup="this.size=(this.value.length>9?this.value.length*2:18);" size="17" :value="dir">

      </section>
        <section class="statusBox eachBox clrfix">
          <p>认证状态</p>
          <span>{{status}}</span>
        </section>
        <section class="emailBox eachBox clrfix">
          <p>邮箱</p>
          <input v-model="email" type="text" onkeydown="this.onkeyup();" onkeyup="this.size=(this.value.length>19?this.value.length:19);" size="19" :value="email">

        </section>
        <section class="telBox eachBox clrfix">
          <p>手机号</p>
          <input v-model="tel" type="text" onkeydown="this.onkeyup();" onkeyup="this.size=(this.value.length>12?this.value.length:12);" size="12" :value="tel">
        </section>
        <section class="pswBox eachBox clrfix">
          <p>密码</p>
          <input  v-model="psw" type="password" onkeydown="this.onkeyup();" onkeyup="this.size=(this.value.length>12?this.value.length:10);" size="12" :value="psw">
          </section>
    </form>
    <article class="btnBox clrfix">
      <router-link to="../myCenter/myInfo">
        <button type="button" name="button" class="back" >返回</button>
      </router-link>
      <button type="button" name="button" class="confirmChange" @click="confirmChange()">确认修改</button>
    </article>

  </div>
</template>
<script>
export default {
  data () {
    return {
      weixinname: '凉风微澜',
      selfname: '李瑞',
      insititute: '北京中医药大学',
      dir: '针灸推拿学 临床医学',
      status: '已认证',
      email: '305649323@qq.com',
      tel: '13896664872',
      psw: '13131131'
    }
  },
  methods: {
    confirmChange: function () {
      console.log('微信名：' + this.weixinname)
      console.log('学者名:' + this.selfname)
      console.log('机构:' + this.insititute)
      console.log('研究方向:' + this.dir)
      console.log('状态:' + this.status)
      console.log('邮件:' + this.email)
      console.log('手机：' + this.tel)
      console.log('密码：' + this.psw)
      // 提交表单内容
    }
  }
}
</script>
<style>
#editMe .editBox{
  margin-top: .75rem;
  margin-bottom: .9rem;
  padding-top:0.3rem;
  box-sizing: border-box;
}
#editMe .editBox .eachBox{
  border-bottom: 1px solid #ccc;
  padding: 0.15rem 0.34rem;
  box-sizing: border-box;
}
#editMe .editBox .eachBox p{
  float: left;
  font-size: .28rem;
}
#editMe .editBox .eachBox input{
  color: #000;
  font-size: .26rem;
}
#editMe .editBox .imgBox p{
  width: 1.25rem;
}
#editMe .editBox .imgBox p img{
  width: 100%;
}
#editMe .editBox .imgBox{
  position: relative;
}
#editMe .editBox .imgBox .resend{
  float: right;
  bottom: 0;
  position: absolute;
  right: 0.6rem;
   top:.8rem;
   color: #000;
   font-size: .26rem;
}
#editMe .editBox .statusBox{
   position: relative;

}
#editMe .editBox .statusBox span{
   position: absolute;
   top:.15rem;
   right: .59rem;
   font-size: .26rem;
   color: #000;
}
#editMe .editBox .eachBox input{
  border: none;
  float: right;
  background: #f5f5f5;
}
#editMe .btnBox{
  padding: 0 22%;
  box-sizing: border-box;
}
#editMe .btnBox button{
  border: none;
  background: #36d7b6;
  border-radius: 0.1rem;
  padding: 0.05rem 0.15rem;
  color: #fff;
  font-size: .26rem;
}
#editMe .btnBox .back{
   float: left;
}
#editMe .btnBox .confirmChange{
  float: right;
}
</style>
