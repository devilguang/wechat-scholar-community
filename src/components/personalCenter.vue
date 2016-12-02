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
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendCode: function () {
      window.alert('验证码已发送')
    }
  }
}

</script>
