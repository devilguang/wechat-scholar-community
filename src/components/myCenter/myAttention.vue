<template lang="html">
  <div id="myAttention">
    <ul>
      <li class="clrfix">
        <div class="tipLeft">
           <span class="iconfont icon-flower"></span>
        </div>
        <div class="tipRight">
          <p><span class="sb1">莫言</span>关注了<span class="sb2">周邦鑫</span></p>
          <h3 class="time">1天前</h3>
        </div>
      </li>
      <li class="clrfix">
        <div class="tipLeft">
           <span class="iconfont icon-flower"></span>
        </div>
        <div class="tipRight">
          <p><span class="sb1">莫言</span>关注了<span class="sb2">周邦鑫</span></p>
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
#myAttention ul li{
   height:1.08rem;
   border-bottom: 1px solid #e4e4e4;
   padding: .19rem 0;
   box-sizing: border-box;
}
#myAttention ul li .tipLeft{
  float: left;
  width: .62rem;
  height: 100%;
}
#myAttention ul li .tipLeft span{
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
#myAttention ul li .tipRight{
  margin-left: .81rem;
  font-size: .24rem;
  color: #000;
}
#myAttention ul li .tipRight sb1,#myAttention ul li .tipRight sb2{
  color: #ff6363;
}
#myAttention ul li .tipRight .time{
  color: #b2b2b2;
  font-weight: normal;
  font-size: .16rem;
  line-height: .45rem;
}


</style>
