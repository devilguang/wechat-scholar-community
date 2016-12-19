<template lang="html">
  <div id="myDynamic">
    <ul>
      <li class="clrfix">
        <div class="tipLeft">
           <span class="iconfont icon-flower"></span>
        </div>
        <div class="tipRight">
          <p><span class="sb1">莫言</span>关注了<span class="me">我</span></p>
          <h3 class="time">1天前</h3>
          <button class="attentionHe"><span class="iconfont icon-attentionBtn"></span>关注他</button>
        </div>
      </li>
      <li class="clrfix">
        <div class="tipLeft">
           <span class="iconfont icon-flower"></span>
        </div>
        <div class="tipRight">
          <p><span class="sb1">莫言</span>评论了我的文章<span class="me">《发现物理学》</span></p>
          <h3 class="time">1天前</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#myDynamic ul li{
   height:1.08rem;
   border-bottom: 1px solid #e4e4e4;
   padding: .19rem 0;
   box-sizing: border-box;
}
#myDynamic ul li .tipLeft{
  float: left;
  width: .62rem;
  height: 100%;
}
#myDynamic ul li .tipLeft span{
  display: block;
  width: .62rem;
  height: .62rem;
  border-radius: 50%;
  background: #bbb;
  color: #fff;
  font-size: .4rem;
  line-height: .62rem;
  text-align: center;
}
#myDynamic ul li .tipRight{
  margin-left: .81rem;
  font-size: .24rem;
  color: #000;
  position: relative;
}
#myDynamic ul li .tipRight sb1,#myDynamic ul li .tipRight me{
  color: #ff6363;
}
#myDynamic ul li .tipRight .time{
  color: #b2b2b2;
  font-weight: normal;
  font-size: .16rem;
  line-height: .45rem;
}
#myDynamic ul li .tipRight .attentionHe{
  position: absolute;
  right: 0.1rem;
  top: 0;
  background: none;
  border: none;
  width: 1.18rem;
  height: .42rem;
  border: 1px solid #ffbb61;
  border-radius: 0.21rem;
  float: right;
  color:#ffbb61;
  font-size: .18rem;
  line-height: .42rem;
}
#myDynamic ul li .tipRight .attentionHe .icon-attentionBtn{
  color: #9c9c9c;
  font-size: .24rem;
}


</style>
