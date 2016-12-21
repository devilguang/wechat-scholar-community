<template>
  <div id="publishFruit">
    <article class="fruitIntro">
      <ul>
        <li>
          <span class="iconfont icon-write"></span>
          <p>文献标题：</p>
          <input type="text" name="" value="" placeholder="单行输入">
        </li>
        <li>
          <span class="iconfont icon-write"></span>
          <p>作者：</p>
          <input type="text" name="" value="" placeholder="单行输入">
        </li>
        <li>
          <span class="iconfont icon-write"></span>
          <p>出版源：</p>
            <input type="text" name="" value="" placeholder="单行输入">
        </li>
        <li>
            <span class="iconfont icon-write"></span>
            <p>发布时间：</p>
            <input type="text" name="" value="" placeholder="单行输入">
          </li>
      </ul>
      <button type="button" name="button" class="confirmPunish" @click="publishTip">确认提交</button>

    </article>


  </div>
</template>
<script>
export default {
  methods: {
    publishTip: function () {
      this.$router.push({
        path: '/myCenter/management/publishTip'
      })
    }
  }
}
</script>
<style>

#publishFruit .fruitIntro{
  margin-top: 30%;
  padding: .34rem .29rem 0;
}
#publishFruit .fruitIntro ul{
  box-sizing: border-box;
}
#publishFruit .fruitIntro ul li{
  height: .66rem;
  background: #fff;
  border-radius: 0.1rem;
  margin-bottom: .27rem;
  border: 1px solid #e9e9eb;
}
#publishFruit .fruitIntro ul li span{
  display: block;
  float: left;
  color: #46dabc;
  height: .66rem;
  margin-left: .2rem;
  margin-right: 0.1rem;
  line-height: .66rem;
}
#publishFruit .fruitIntro ul li p{
  float: left;
  line-height: .66rem;
  font-size: .24rem;
  color:#000;
}
#publishFruit .fruitIntro ul li input{
  float: left;
  line-height: .64rem;
  border: none;
  font-size: .23rem;
  color: #c8c8c8;
}
#publishFruit .fruitIntro .confirmPunish{
  width: 100%;
  height: .7rem;
  background: #36d7b6;
  line-height: .7rem;
  color: #fff;
  text-align: center;
  border: none;
  margin-top: 0.12rem;
  border-radius: 0.1rem;
}
</style>
