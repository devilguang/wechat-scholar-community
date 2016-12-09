<template lang="html">
  <div id="codeInput">
    <h1>手机号验证</h1>
    <article class="regBox">
      <form class="regMain" method="post">
          <p><span>验证码</span><input type="text" name=""  placeholder="请输入验证码" class="putCode"></p>
          <span class="regTip" @click="reGet">重新获取(<span class="leftTime">{{timer}}</span>秒)</span>
          <input type="button" name="" value="下一步" class="next" @click="next" >
      </form>
    </article>
  </div>
</template>
<script>
var putCode = document.getElementsByClassName('putCode')
export default {
  data () {
    return {
      timer: 60,       // 默认倒数30秒
      stop: false,   // 默认是停止的，但界面加载之后会变成false
      Interval: null  // setInterval的对象
    }
  },
  methods: {
    reGet: function () {
      // 重新获取验证码
      this.timer = 60
      window.alert('重新发送')
    },
    next: function () {
      // 填完验证码后执行的动作 假设验证码是1234
      if (putCode[0].value === '1234') {
        window.location.href = 'setName'
      } else {
        window.alert('验证码错误')
      }
    }
  },
  created: function () {
  //  console.log(this.timer)
    var that = this
    setInterval(function () {
      if (that.timer <= 0) {
        that.timer = 0
      } else {
        that.timer--
      // console.log(that.timer)
      }
    }, 1000)
  }
}
</script>
