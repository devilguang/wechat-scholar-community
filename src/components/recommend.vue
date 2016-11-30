<template>
 <div id="recommend">
   <section class="clrfix">
   <p class="comTip">我们还不知道您的兴趣领域<br/>实时精准获取专属学术资讯</p>
   <a class="recommendBtn" href="http://www.baidu.com">定制</a>
   </section>
   <ul class="recommendList">
     <li class="recommendItem" v-for="recommendItem in recommendList" >
       <h3 class="rem-title">{{recommendItem.remTitle}}<a class="rem-more iconfont icon-more" href="javascipt:;"></a></h3>
       <div class="rem-content">
          <p class="rem-author rem-style">作者：{{recommendItem.remAuthor}}</p>
          <p class="rem-institution rem-style">机构：{{recommendItem.remInstitution}}</p>
          <p class="rem-cited rem-style">被引数:{{recommendItem.remCitedNum}}</p>
          <p class="rem-intro"><span>简介：</span>{{recommendItem.remIntro}}</p>
       </div>
     </li>
   </ul>
 </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'recommend',
  data () {
    return {
      recommendList: []
    }
  },
  mounted () {
    // 先获取假数据
    axios.get('/static/mock-data/recommend.json')
    .then((response) => {
      console.log(response)
      this.recommendList = response.data
    })
    .then((error) => console.log(error))
  }
}
</script>
