<template>
  <div id="findBook">
    <article class="searchTop">
      <input type="text" name="" value="" placehoder="请输入搜索内容">
      <span class="searchBtn iconfont icon-searchBtn"></span>
      <div class="selectBtn">
        <span class="iconfont icon-select"></span>
      </div>
    </article>
    <article class="findTip clrfix">
      <div class="findLogo">
        <span class="iconfont icon-flower"></span>
      </div>
      <p>找到与balbala相关的文献共201条找到与balbala相</p>
    </article>
    <article class="bookList">
      <ul class="clrfix">
        <li class="bookListItem" v-for="bookListItem in bookList">
          <router-link :to="{ name: 'bookDetail', params: { bookID: bookListItem.bookID }}">
          <p class="bookTitle">{{bookListItem.bookName}}</p>
          <p class="bookBrief"><span class="author">{{bookListItem.author}}</span><span> —— 《{{bookListItem.journalName}}》 —— </span><span>{{bookListItem.journalNum}}(刊号)</span></p>
          <p class="abstract"><span>摘要:</span><span>{{bookListItem.abstract}}</span></p>
          </router-link>
          <ul class="userBtns clrfix">
             <li class="clrfix"><span class="iconfont icon-remark" v-on:click="test(bookList[index])"></span><span class="word">评论</span></li>
             <li><span class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
             <li class="clrfix"><span class="iconfont icon-share"></span><span class="word">分享</span></li>
             <li ><span class="iconfont icon-collect"></span><span class="word">收藏</span></li>
          </ul>
        </li>
      </ul>
    </article>
    <!-- <article class="searchContent">
      <p class="bookTitle">空间钢结构的应用与发展</p>
      <p class="bookOrigin"><span class="iconfont icon-link"></span><span>来源</span><span>维普</span></p>
      <p class="bookBrief"><span>莫言</span><span>《期刊名》</span><span>2002(刊号)</span></p>
      <p class="abstract"><span>摘要</span><span>三十功名尘与土，八千里路云和月。莫等闲白了少年头，空故今日之责任，不在他人而全在我少年。少年智则国智少年富则国富少年强则国强，少年独立则国独立少年自由泽国自由少年进步则国进步少年胜于欧洲则国胜于欧洲</span></p>
      <p class="publicOrg"><span> 出版源</span><span>同济大学医学与管理学院，2009</span></p>
      <p class="keyWord"><span>关键词</span><span>小说家讲坛，作家，文学创作</span></p>
      <p class="cited"><span>被引量</span><span>123</span></p>
   </article> -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'bookList',
  data: function () {
    return {
      zxq: 'singledog',
      bookList: []
    }
  },
  methods: {
    // 推荐和收藏高亮
    test: function (index) {
      console.log(index)
    }
  },
  mounted () {
    // 先获取假数据
    axios.get('/static/mock-data/bookList.json')
    .then((response) => {
      console.log(response)
      this.bookList = response.data
    })
    .then((error) => console.log(error))
  }
}
</script>
<style>
</style>
