<template>
 <div id="scholarDetail">
     <!-- 详情头部 -->
     <article class="detailTopBox">
        <div class="scholarHead"><img src="../assets/img/img-scholar_1.png" ><div class="IApprove"><span class="iconfont icon-iapprove"></span>我要认证</div> </div>
         <div class="scholarBrief">
               <button class="attention"><span class="iconfont icon-plus"></span>关注</button>
               <div class="scholarTitle clrfix">
                  <span class="scholarName">{{infos.userName}}</span>
                  <span class="scholarStatus">未认证</span>
               </div>
               <p class="scholarUniverse">武汉大学</p>
               <p class="scholarMarjor">专业方向：<span>经济学类 自动化类 轻工类</span></p>
               <p class="scholarField">研究领域：<span>人体解剖和组织胚胎学</span></p>
        </div>
     </article>
     <!-- 详情数字部分 -->
     <article class="numBox">
        <ul class="clrfix">
          <li class="outcomN"><span>123</span><p>成果数</p></li>
          <li class="citedN"><span>106</span><p>被引数</p></li>
          <li class="followerN"><span>63</span><p>跟随着</p></li>
          <li class="HN"><span>72</span><p>H指数</p></li>
        </ul>
     </article>
     <!-- 详情页选项卡部分 -->
     <article class="tabBox">
        <ul class="tabTop clrfix">
           <li class="active"><span class="iconfont icon-research"></span><span class="tabTitle">科研成果</span></li>
           <li><span class="iconfont icon-cooperate"></span><span class="tabTitle">合作者</span></li>
           <li><span class="iconfont icon-institution"></span><span class="tabTitle">合作机构</span></li>
       </ul>
        </section>
        <section class="tabContent">
            <div class="contentTop">
                <!-- 复选下拉框没写 占位 -->
                <div class="allFruits">全部成果</div>
                <p class="citedNum">被引次数：<span>3121</span></p>
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
     </article>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'scholarDetail',
  data () {
    return {
      infos: []
    }
  },
  mounted () {
    // 先获取假数据
    axios.get('/static/mock-data/scholarDetail.json')
    .then((response) => {
      console.log(response)
      this.infos = response.data
    })
    .then((error) => console.log(error))
  }
}
</script>
