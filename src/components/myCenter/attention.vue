<template lang="html">
  <div id="attention">
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
#attention ul li{
   height:1.08rem;
   border-bottom: 1px solid #e4e4e4;
   padding: .19rem 0;
   box-sizing: border-box;
}
#attention ul li .tipLeft{
  float: left;
  width: .62rem;
  height: 100%;
}
#attention ul li .tipLeft span{
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
#attention ul li .tipRight{
  margin-left: .81rem;
  font-size: .24rem;
  color: #000;
}
#attention ul li .tipRight sb1,#attention ul li .tipRight sb2{
  color: #ff6363;
}
#attention ul li .tipRight .time{
  color: #b2b2b2;
  font-weight: normal;
  font-size: .16rem;
  line-height: .45rem;
}


</style>
