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
      <li><span class="iconfont icon-remark"></span><span>评论</span></li>
      <li @click="recommend" :class="{active:remActive}"><span class="iconfont icon-recommendBtn"></span><span>推荐</span></li>
      <li><span class="iconfont icon-share"></span><span>分享</span></li>
      <li @click="collect" :class="{active:colActive}"><span class="iconfont icon-collect"></span><span class="collectWord">收藏</span></li>
   </ul>
   <article class="commitArea">
      <textarea name="talk" class="writeArea" placeholder="输入内容"></textarea>
      <button type="button" name="button" class="pubulishBtn">发布</button>
   </article>

   <article class="commitContent">
     <ul class="commitItems">
       <li class="commitItem">
         <div class="top clrfix">
           <div class="left">
             <img src="../assets/img/img-public_1.jpg" alt="">
           </div>
           <div class="right">
             <p class="name">姓名</p>
             <span class="time">发布时间 2016-11-10 13:03</span>
           </div>
         </div>
         <p class="mainContent">文学是以语言文字为工具，形象形象形象文学是以语言文字为工具，形象形象形象文学是以语言。</p>
       </li>
       <li class="commitItem">
         <div class="top clrfix">
           <div class="left">
             <img src="../assets/img/img-public_1.jpg" alt="">
           </div>
           <div class="right">
             <p class="name">姓名</p>
             <span class="time">发布时间 2016-11-10 13:03</span>
           </div>
         </div>
         <p class="mainContent">文学是以语言文字为工具，形象形象形象文学是以语言文字为工具，形象形象形象文学是以语言。</p>
       </li>
     </ul>
     <h4 class="loadMore">点击加载更多</h4>
   </article>
   <article class="originBox">
     <h3>全部来源</h3>
     <ul >
       <li v-for="where in infos.allOrg"  class="clrfix"><span class="iconfont icon-link"></span><span>{{where.eachOrg}}</span></li>
    </ul>
   </article>
   <article class="literature">
     <div class="tabBox">
       <p @click='tabToggle(tab01Text)' :class="{active: activeName == tab01Text || activeFirst}">相似文献</p>
       <p @click='tabToggle(tab02Text)' :class="{active: activeName == tab02Text}">参考文献</p>
       <p @click='tabToggle(tab03Text)' :class="{active: activeName == tab03Text}">引证文献</p>
     </div>
     <component :is='currentView' keep-alive></component>
   </article>
   <section id="cancelCollectBox" style="display:none">
        <div class="alertBox">
           <p class="tip">
             <span class="iconfont icon-warn"></span>
             <span class="tipWord">您确定要取消收藏吗?</span>
           </p>
           <div class="operate">
             <span class="cancel" @click="cancel">取消</span>
             <span class="confirm"@click="confirm">确定</span>
           </div>
        </div>
   </section>
  </div>
</template>
<script>
import axios from 'axios'
import docuSimilar from './docuSimilar'
import docuReference from './docuReference'
import docuQuote from './docuQuote'
export default {
  name: 'bookDetail',
  data () {
    return {
      infos: [],
      remActive: false,
      colActive: false,
      tab01Text: 'docuSimilar',
      tab02Text: 'docuReference',
      tab03Text: 'docuQuote',
      currentView: 'docuSimilar',
      activeName: 'tab01Text',
      activeFirst: true
    }
  },
  components: {
    docuSimilar: docuSimilar,
    docuReference: docuReference,
    docuQuote: docuQuote
  },
  methods: {
    recommend: function () {
      this.remActive = !this.remActive
    },
    collect: function () {
      this.colActive = !this.colActive
      if (this.colActive) {
        document.getElementsByClassName('collectWord')[0].innerHTML = '已收藏'
      }
      if (!this.colActive) {
        document.getElementById('cancelCollectBox').style.display = 'block'
      }
    },
    // 选项卡切换
    tabToggle: function (tabText) {
      this.currentView = tabText
      console.log(tabText)
      this.activeFirst = false
      this.activeName = tabText
    },
    // 取消收藏弹框按钮
    cancel: function () {
      document.getElementById('cancelCollectBox').style.display = 'none'
      document.getElementsByClassName('collectWord')[0].innerHTML = '已收藏'
      this.colActive = true
    },
    confirm: function () {
      document.getElementById('cancelCollectBox').style.display = 'none'
      document.getElementsByClassName('collectWord')[0].innerHTML = '收藏'
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
