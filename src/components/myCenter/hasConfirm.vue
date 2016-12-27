<template>
  <div id="hasConfirm">
    <div class="top">
      <p class="fruitMag" @click="fruitMag" ><span class="iconfont icon-choose"></span>成果管理</p>
    </div>
    <div class="fruitTip">
      <div class="flowerBox">
        <span class="iconfont icon-flower"></span>
      </div>
      <p>共找到121条成果记录</p>
    </div>
    <section class="hasConfirmBox">
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
        </li>  <li class="contentItem">
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
          </li>  <li class="contentItem">
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
            </li>  <li class="contentItem">
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
#hasConfirm .top{
  height: .79rem;
  background: #36d7b6;
}
#hasConfirm .top .tit{
  height: .58rem;
  display: block;
  line-height: .58rem;
  float: left;
  font-size: .28rem;
  margin-top: 0.06rem;

}
#hasConfirm .top .fruitMag{
  width: 1.74rem;
  height: .46rem;
  background: #fff;
  color: #ffb656;
  line-height: .46rem;
  font-size: .26rem;
  padding: 0 .19rem;
  box-sizing: border-box;
  float: right;
  border-radius: 0.08rem;
  margin: .16rem  .29rem  0 0 ;
}
#hasConfirm .top .fruitMag span{
  color: #ffb656;
  font-size: .24rem;
}
#hasConfirm .fruitTip{
 height:.95rem;
 background: #f5f5f9;
 border-bottom: 1px solid #e8e8ea;
 padding: .21rem 0 0 .29rem;
 box-sizing: border-box;
}
#hasConfirm .fruitTip .flowerBox{
  background: #bbb;
  width: .58rem;
  height: .58rem;
  border-radius: 50%;
  float: left;
  margin-right: .19rem;
}
#hasConfirm .fruitTip .flowerBox span{
color: #fff;
line-height: .58rem;
text-align: center;
font-size: .46rem;
width: .58rem;
display: block;
}
#hasConfirm .fruitTip p{
  font-size: .22rem;
  color: #000;
  line-height: .58rem;
}
#hasConfirm .hasConfirmBox{
  padding: .1rem .29rem 0 ;
  margin-bottom: .9rem;
  box-sizing: border-box;
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
