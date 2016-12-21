<template>
 <div id="bookResult">
   <article class="searchTop">
     <input type="text" name="" value="" placehoder="请输入搜索内容" v-model="bookName" :value="bookName" >
     <span class="searchBtn iconfont icon-searchBtn" @click="searchBook"></span>
   </article>
   <article class="findTip clrfix">
     <div class="findLogo">
       <span class="iconfont icon-flower" ></span>
     </div>
      <p>找到相关的文献共{{num}}条</p>
      <button type="button" name="button" class="sort">排序</button>
      <button type="button" name="button" class="select">筛选</button>

   </article>
   <article class="bookList">
     <ul class="clrfix">
       <li class="bookListItem" v-for="bookListItem in bookList">
         <!-- <router-link :to="{ name: 'bookDetail', params: { bookID: bookListItem.bookID }}"> -->
         <p class="bookTitle">{{bookListItem.title}}</p>
         <p class="bookBrief"><span class="author">{{bookListItem.docAuthors}}</span><span> —{{bookListItem.qikanName}}— </span><span>{{bookListItem.ym}}(刊号)</span></p>
         <p class="abstract"><span>摘要:</span><span>{{bookListItem.ab}}</span></p>
         <!-- </router-link> -->
         <ul class="userBtns clrfix">
           <li class="clrfix"><span class="iconfont icon-remark" v-on:click="test(bookList[index])"></span><span class="word">评论</span></li>
           <li><span class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
           <li class="clrfix"><span class="iconfont icon-share"></span><span class="word">分享</span></li>
           <li ><span class="iconfont icon-collect"></span><span class="word">收藏</span></li>
         </ul>
       </li>
     </ul>
   </article>
</div>
</template>
<script>
import axios from 'axios'
import qs from 'querystring'
export default {
  name: 'scholarDetail',
  data () {
    return {
      bookList: [],
      bookName: '',
      num: ''
    }
  },
  methods: {
    searchBook: function () {
      var that = this
      axios.post('http://localhost/query/gatherAchs', qs.stringify({
        p: '1',
        title: that.bookName
      }))
      .then((response) => {
        console.log(response)
        this.bookList = response.data
        this.num = this.bookList.length
      })
      .then((error) => console.log(error))
    }
  },
  mounted () {
    var bookResult = JSON.parse(window.sessionStorage.getItem('data'))
    this.bookList = bookResult.data
    this.num = this.bookList.length
  }
}
</script>
