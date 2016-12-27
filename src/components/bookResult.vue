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
    <div class="choose" @click="choose">
     <span class="iconfont icon-choose"></span><span>筛选</span>
    </div>
</article>

 <article class="chooseBox" v-show="chooseShow" >
     <section class="selectBox clrfix">
       <p>年限:</p>
       <span :class="{active: activeTime == nolimit}" @click="chooseTime(nolimit)">时间不限</span>
       <span :class="{active: activeTime == six}" @click="chooseTime(six)">2016至今</span>
       <span :class="{active: activeTime == five}"  @click="chooseTime(five)">2015至今</span>
       <span :class="{active: activeTime == four}" @click="chooseTime(four)">2014至今</span>
     </section>


       <section class="sortBox clrfix">
       <p>排序:</p>
       <span :class="{active: activeWay == about}" @click="chooseSort(about)">按相关性</span>
       <span :class="{active: activeWay == cite}" @click="chooseSort(cite)">按被引量</span>
       <span :class="{active: activeWay == timeDown}" @click="chooseSort(timeDown)">按时间降序</span>
     </section>
    </section>
</article>



   <article class="bookList">
     <ul class="clrfix">
       <li class="bookListItem" v-for="(bookListItem,index) in bookList" >
         <!-- <router-link :to="{ name: 'bookDetail', params: { bookID: bookListItem.bookID }}"> -->
         <p class="bookTitle">{{bookListItem.title}}</p>
         <p class="bookBrief"><span class="author">{{bookListItem.docAuthors}}</span><span> —{{bookListItem.qikanName}}— </span><span>{{bookListItem.ym}}(刊号)</span></p>
         <p class="abstract"><span>摘要:</span><span>{{bookListItem.ab}}</span></p>
         <!-- </router-link> -->
         <ul class="userBtns clrfix">
           <li class="clrfix"><span class="iconfont icon-remark"></span><span class="word">评论</span></li>
           <li @click="recommend(bookListItem,index)" :class="{active:bookListItem.recommendActive}"><span class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
           <li class="clrfix"><span class="iconfont icon-share"></span><span class="word">分享</span></li>
           <li @click="collect(bookListItem,index)" :class="{active:bookListItem.collectActive}"><span class="iconfont icon-collect"></span><span class="word">收藏</span></li>
         </ul>
       </li>
     </ul>
   </article>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import qs from 'querystring'
export default {
  name: 'scholarDetail',
  data () {
    return {
      bookList: [],
      bookName: '',
      num: '',
      chooseShow: false,
      nolimit: 'nolimit',
      six: 'six',
      five: 'five',
      four: 'four',
      activeTime: '',
      about: 'about',
      cite: 'cite',
      timeDown: 'timeDown',
      activeWay: ''
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
    },
    // 控制筛选模块显示隐藏
    choose: function () {
      this.chooseShow = !this.chooseShow
      console.log(this.sortShow)
    },
    // 选择筛选内容
    chooseTime: function (time) {
      this.activeTime = time
    },
    chooseSort: function (way) {
      this.activeWay = way
    },
    recommend: function (item, index) {
      // set设置数据相应 增加data里面的 一个recommendActive 属性 可以控制高亮
      if ((typeof item.recommendActive) === 'undefined') {
        Vue.set(this.bookList[index], 'recommendActive', true)
      } else {
        item.recommendActive = !item.recommendActive
      }
    },
    collect: function (item, index) {
      if ((typeof item.collectActive) === 'undefined') {
        Vue.set(this.bookList[index], 'collectActive', true)
      } else {
        item.collectActive = !item.collectActive
      }
    }
  },
  mounted () {
    var bookResult = JSON.parse(window.sessionStorage.getItem('data'))
    this.bookList = bookResult.data
    this.num = this.bookList.length
  }
}
</script>
