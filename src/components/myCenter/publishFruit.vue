<template>
  <div id="publishFruit">
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
    <article class="fruitIntro">
      <ul>
        <li>
          <span class="iconfont icon-write"></span>
          <p>字段一：</p>
          <input type="text" name="" value="" placeholder="单行输入">
        </li>
        <li>
          <span class="iconfont icon-write"></span>
          <p>字段二：</p>
          <input type="text" name="" value="" placeholder="单行输入">
        </li>
        <li>
          <span class="iconfont icon-write"></span>
          <p>字段三：</p>
            <input type="text" name="" value="" placeholder="单行输入">
        </li>
        <li>
            <span class="iconfont icon-write"></span>
            <p>字段四：</p>
            <input type="text" name="" value="" placeholder="单行输入">
          </li>
      </ul>
      <button type="button" name="button" class="confirmPunish">确认提交</button>

    </article>


  </div>
</template>
<script>
</script>
<style>
#publishFruit .fruitIntro{
  margin-top: .75rem;
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
