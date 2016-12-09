<template lang="html">
  <div id="personalCenter">
    <h1>快速注册</h1>
    <article class="regBox">
      <form class="regMain" method="post">
          <p><span>手机号</span><input type="text" name=""  placeholder="请输入11位手机号" class="userTel"></p>
          <p><span>密码</span><input type="password" name="" placeholder="设置登录密码，不少于6位" class="userPsw"></p>
          <span class="regTip">将给您发送6位数的验证码短信</span>
          <input type="button" name="" value="下一步" class="next" v-on:click="sendCode">
      </form>
    </article>
  </div>
</template>

<script>
var userTel = document.getElementsByClassName('userTel')
var userPsw = document.getElementsByClassName('userPsw')
import axios from 'axios'
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendCode: function () {
      if (!(/^1[34578]\d{9}$/.test(userTel[0].value))) {
        window.alert('手机格式不正确，请重新输入')
      } else if (userPsw[0].value.length < 6) {
        window.alert('请输入长度大于六位的密码')
      } else {
        // 发送验证码
        axios.post('/static/mock-data/getCode.php', { userTel: 'userTel[0].value', userPsw: 'userPsw[0].value' })
        .then(function (response) {
          console.log('saved successfully')
        })
        .catch(function (error) {
          console.log(error)
          // 先把页面发送验证码之后的跳转动作写在error里面 因为不会写成功返回请求的文件 先假装成功跳转可以进行下一步
          window.location.href = 'codeInput'
        })
        console.log(userTel[0].value)
        console.log(userPsw[0].value)
        window.alert('验证码已发送')
      }
    }
  }
}
</script>
