<template lang="html">
  <div id="interactNews">
    <ul>
      <li class="clrfix">
        <div class="tipLeft">
           <img src="../../assets/img/img-scholar_1.png" alt="">
        </div>
        <div class="tipRight">
          <p><span class="sb1">莫言</span><span class="sb2">关注了我</span></p>
          <h3 class="time">1天前</h3>
          <button class="attentionHe"><span class="iconfont icon-attentionBtn"></span>关注他</button>

        </div>
      </li>
      <li class="clrfix">
        <div class="tipLeft">
          <img src="../../assets/img/img-scholar_1.png" alt="">
        </div>
        <div class="tipRight">
          <p><span class="sb1">张晓热</span><span class="sb2">评论了我的文章</span></p>
          <h3 class="time">2016-08-26</h3>
        </div>
        <p class="commitCon">哈哈！我终于可以看到原文啦，完整看完了。 觉得很棒！赞</p>
        <div class="essayBox">
          <p class="title">文学是以语言文字为工具</p>
          <p class="brief">三十功名尘与土，八千里路云和月。莫等闲白了少年头，空故今日之责任不在他人而全在我少年。</p>
        </div>
      </li>
      <li class="clrfix">
        <div class="tipLeft">
          <img src="../../assets/img/img-scholar_1.png" alt="">
        </div>
        <div class="tipRight">
          <p><span class="sb1">张晓热</span><span class="sb2">推荐了我的文章</span></p>
          <h3 class="time">2016-08-26</h3>
        </div>
        <div class="essayBox">
          <p class="title">文学是以语言文字为工具</p>
          <p class="brief">三十功名尘与土，八千里路云和月。莫等闲白了少年头，空故今日之责任不在他人而全在我少年。</p>
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
#interactNews{
  font-family: "微软雅黑"
}
#interactNews ul li{
   border-bottom: 1px solid #e4e4e4;
   padding: .19rem 0;
   box-sizing: border-box;
}
#interactNews ul li .tipLeft{
  float: left;
  width: .62rem;
  height: 100%;
}
#interactNews ul li .tipLeft img{
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
#interactNews ul li .tipRight{
  margin-left: .81rem;
  font-size: .24rem;
  color: #000;
  position: relative;
}
#interactNews ul li .tipRight .sb1{
  color: #ffb656;
}
#interactNews ul li .tipRight .sb2{
  color: #000;
}
#interactNews ul li .tipRight .time{
  color: #b2b2b2;
  font-weight: normal;
  font-size: .16rem;
  line-height: .45rem;
}
#interactNews ul li .tipRight .attentionHe{
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
#interactNews ul li .tipRight .attentionHe .icon-attentionBtn{
  color: #9c9c9c;
  font-size: .24rem;
}
#interactNews ul li .commitCon{
  font-size: .24rem;
  color: #000;
  line-height: .34rem;
  margin-bottom: 0.1rem;
}
#interactNews ul li .essayBox{
background: #eee;
padding: .11rem .2rem ;
box-sizing: border-box;
}
#interactNews ul li .essayBox .title{
 font-size: .21rem;
 color: #000;
 line-height: .36rem;
}
#interactNews ul li .essayBox .brief{
font-size: .17rem;
color: #646464;
line-height: .36rem;
}


</style>
