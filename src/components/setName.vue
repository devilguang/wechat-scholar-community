<template lang="html">
  <div id="setName">
    <h1>设置昵称</h1>
    <article class="regBox">
      <form class="regMain" method="post">
          <h3>请填写昵称</h3>
          <p><span>昵称</span><input type="text" name=""  placeholder="请输入昵称" class="myName"></p>
            <input type="button" name="" value="下一步" class="next" @click="next" >
      </form>
    </article>
  </div>
</template>
<script>
var myName = document.getElementsByClassName('myName')
export default {
  data () {
    return {
    }
  },
  methods: {
    next: function () {
      // 提交昵称
      console.log(myName[0].value)
      window.location.href = 'chooseField'
    }
  }
}
</script>
<style media="screen">
#setName h1{
  width: 100%;
  height: .78rem;
  background: #424951;
  font-size: .26rem;
  color: #fff;
  text-align: center;
  line-height: .78rem;
  font-family: "宋体";
}
#setName h3{
  font-weight: normal;
  font-size: .24rem;
  margin-bottom: 0.2rem;
}
#setName .regBox{
  padding: .68rem .29rem 0 ;
  box-sizing: border-box;
}
#setName .regBox input{
  width: 100%;
  border: none;
}
#setName .regBox p{
  height: .87rem;
  position: relative;
  margin-bottom: 0.25rem;
}
#setName .regBox p span{
  position: absolute;
  display: block;
  height: .87rem;
  line-height: .87rem;
  text-align: center;
  color: #000;
  margin-left: .28rem;
  font-size: .26rem;
  margin-top: 0.03rem;
}
#setName .regBox p input{
  height: .87rem;
  text-indent: 1.33rem;
  color: #bbbbbb;
  border: 1px solid #e7e7e7;
  border-radius: 0.1rem;
}
#setName .regBox p .myname{
  border-radius: 0.1rem;
}

#setName .regBox .regTip{
  font-size: .24rem;
  color: #b8b8b8;
  margin: 1.11rem 0 .35rem 0;
  float: right;
  display: block;
}
#setName .regBox .regTip{
  margin: 0.5rem 0 .35rem 0;
}
#setName .regBox .next{
  height: .9rem;
  background: #36d7b6;
  color: #fff;
  line-height: .9rem;
  border: none;
  border-radius: 0.1rem;
}
</style>
