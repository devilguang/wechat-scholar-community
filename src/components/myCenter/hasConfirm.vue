<template>
  <div id="hasConfirm">
    <section class="hasConfirmBox">
      <div class="top">
        <span class="tit">共26条成果记录</span>
          <p class="fruitMag" @click="fruitMag" >成果管理</p>
      </div>
      <ul class="contentMain">
        <li class="contentItem">
          <div class="wordsCon">
               <p class="coreCon">坚持正确方向创新方法手段 提高新闻舆论传播力引导力</p>
               <p class="eachCitedNum">被引用次数：3</p>
               <p class="authorItem">习近平：《资源节约与环保》</p>
          </div>
          <ul class="userBtns clrfix">
             <li><span class="iconfont icon-remark"></span>评论</li>
             <li><span class="iconfont icon-recommendBtn"></span>推荐</li>
             <li><span class="iconfont icon-share"></span>分享</li>
             <li><span class="iconfont icon-collect"></span>收藏</li>
          </ul>
        </li>

      </ul>
    </section>

  </div>
</template>
<script>
export default {
  methods: {
    fruitMag: function () {
      this.$router.push({
        path: 'management'
      })
    }
  }
}
</script>
<style>

#hasConfirm .hasConfirmBox{
  padding: .1rem .29rem 0 ;
  box-sizing: border-box;
}
#hasConfirm .hasConfirmBox .top{
  height: .68rem;
}
#hasConfirm .hasConfirmBox .top .tit{
  height: .58rem;
  display: block;
  line-height: .58rem;
  float: left;
  font-size: .28rem;
  margin-top: 0.06rem;

}
#hasConfirm .hasConfirmBox .top .fruitMag{
  float: right;
  height: .52rem;
  display: block;
  line-height: .52rem;
  padding: 0 0.1rem;
  border: 1px solid #a8a8a8;
  color: #000;
  margin-top: 0.05rem;
  font-size: .22rem;
  text-align: center;
  border-radius: 0.1rem;
}
#hasConfirm .hasConfirmBox .top a{
  color: pink !important;
}
#hasConfirm .hasConfirmBox .contentMain .contentItem{
   padding-top: .17rem;
   box-sizing: border-box;
   background: #fff;
   margin-top: 0.1rem;
   margin-bottom: 0.2rem;
}
#hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon{
	  margin: 0 0.15rem;
}
#hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .coreCon{
   font-size: .24rem;
   color: #000;
   line-height: .4rem;

}
#hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .eachCitedNum{
   font-size: .18rem;
   color: #949499;
   line-height: .4rem;
}
#hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .authorItem{
   font-size: .22rem;
   color: #949499;
   line-height: .4rem;
   margin-bottom: 0.1rem;
}
#hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns{
  height: .6rem;
  background: #fff;
  border-top: 1px solid #ddd;
}
#hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li{
  width: 18.7%;
  float: left;
  font-size: .25rem;
  line-height: .6rem;
  padding: 0 3%;
  border-right: 1px solid #ddd;
}

#hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li:nth-of-type(4){
 border-right: none;
}
#hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li span{
	float: left;
	font-size: .4rem;
}
</style>
