<template>
  <div id="bookDetail" style="height:100%;background:#fff">
  
    <article class="bookContent">
      <p class="bookTitle">{{infos.bookTitle}}{{$route.params.bookID}}</p>
      <p class="bookOrigin"><span class="iconfont icon-link"></span><span>来源 — — </span><span>{{infos.bookOrg}}</span></p>
      <p class="bookBrief"><span>{{infos.bookAuthor}}</span><span>— — 《期刊名》 — —</span><span>{{infos.bookTime}}(刊号)</span></p>
      <p class="abstract"><span>摘要</span><span>{{infos.abstract}}</span></p>
      <p class="publicOrg"><span> 出版源</span><span>{{infos.punishOrg}}</span></p>
      <p class="keyword"><span>关键词</span><span>{{infos.keyword}}</span></p>
      <p class="cited"><span>被引量</span><span>{{infos.citedNum}}</span></p>
   </article>
   <ul class="userBtns clrfix">
      <li class=""><span class="iconfont icon-remark"></span><span>评论</span></li>
      <li><span class="iconfont icon-recommendBtn"></span><span>推荐</span></li>
      <li><span class="iconfont icon-share"></span><span>分享</span></li>
      <li><span class="iconfont icon-collect"></span><span>收藏</span></li>
   </ul>
   <article class="originBox">
     <h3>全部来源</h3>
     <ul >
       <li v-for="where in infos.allOrg"  class="clrfix"><span class="iconfont icon-link"></span><span>{{where.eachOrg}}</span></li>
    </ul>
   </article>
   <article class="literature">
     <div class="tabBox">
       <p class="active">相似文献</p>
       <p>参考文献</p>
       <p>引证文献</p>
     </div>
     <div class="literatureCon">
       <ul>
         <li>
           <p class="literTitle">空间钢结构的应用和发展</p>
           <p class="literAuthor"><span>莫言</span><span>— — 《丰乳肥臀》 — —</span><span>2002(刊号)</span></p>
         </li>
         <li>
           <p class="literTitle">空间钢结构的应用和发展</p>
           <p class="literAuthor"><span>莫言</span><span>— — 《丰乳肥臀》 — —</span><span>2002(刊号)</span></p>
         </li>
       </ul>
     </div>

   </article>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'bookDetail',
  data () {
    return {
      infos: []
    }
  },
  mounted () {
    // 先获取假数据
    axios.get('/static/mock-data/bookDetail.json')
    .then((response) => {
      var bookID = document.location.href
      var arr = bookID.split('/')
      bookID = arr[arr.length - 1]
      console.log(bookID)
      console.log(response.data)
      for (var eachbook in response.data) {
        console.log(response.data[eachbook])
        if (response.data[eachbook].bookID === bookID) {
          this.infos = response.data[eachbook]
          console.log(this.infos)
        }
      }
    })
    .then((error) => console.log(error))
  }
}
</script>
<style>
</style>
