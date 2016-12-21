<template>
  <div id="findBook" style="height:100vh;background:#fff">
        <div class="searchImg"><img src="../assets/img/img-search_bg.jpg"></div>
 		<form class="searchForm">
 			<fieldset>
 				<legend>学者查询</legend>
 				<div class="searchFormGroup">
 					<label>文献名称</label>
 					<input type="text" v-model="bookName" :value="bookName" placeholder="请输入文献名称"/>
 				</div>
         <div class="searchFormSubmit" @click="searchBook">
           <a ><input class="submitBtn" value="搜索"></a>
         </div>

 			</fieldset>
 		</form>
 </div>
  <!-- <div id="findBook">
    <article class="searchTop">
      <input type="text" name="" value="" placehoder="请输入搜索内容" :value="bookName" v-model="bookName">
      <span class="searchBtn iconfont icon-searchBtn" @click="searchBook"></span>
    </article>
    <article class="findTip clrfix">
      <div class="findLogo">
        <span class="iconfont icon-flower" ></span>
      </div>
      <p>找到与"{{bookName}}"相关的文献共{{num}}条</p>
    </article>
    <article class="bookList">
      <ul class="clrfix">
        <li class="bookListItem" v-for="bookListItem in bookList"> -->
          <!-- <router-link :to="{ name: 'bookDetail', params: { bookID: bookListItem.bookID }}"> -->
          <!-- <p class="bookTitle">{{bookListItem.title}}</p>
          <p class="bookBrief"><span class="author">{{bookListItem.docAuthors}}</span><span> —{{bookListItem.qikanName}}— </span><span>{{bookListItem.ym}}(刊号)</span></p>
          <p class="abstract"><span>摘要:</span><span>{{bookListItem.ab}}</span></p> -->
          <!-- </router-link> -->
          <!-- <ul class="userBtns clrfix">
             <li class="clrfix"><span class="iconfont icon-remark" v-on:click="test(bookList[index])"></span><span class="word">评论</span></li>
             <li><span class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
             <li class="clrfix"><span class="iconfont icon-share"></span><span class="word">分享</span></li>
             <li ><span class="iconfont icon-collect"></span><span class="word">收藏</span></li>
          </ul>
        </li>
      </ul>
    </article>

  </div> -->
</template>
<script>
import axios from 'axios'
import qs from 'querystring'
export default {
  data () {
    return {
      bookName: '',
      bookList: [],
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
        window.sessionStorage.setItem('data', JSON.stringify(response))
        this.$router.push({
          path: '/findBook/bookResult'
        })
      })
      .then((error) => console.log(error))
    }
  },
  mounted () {
  }
}

</script>
<style>
#findBook .searchImg{
	width: 100%;
	padding:0.5rem 15% 0.25rem;
	box-sizing: border-box;
}
#findBook .searchImg img{
    width: 100%;
    height: auto;
}
#findBook .searchForm fieldset{
    border: none;
}
#findBook .searchForm fieldset legend{
	display: none;
}
#findBook .searchFormGroup{
	height: 1.2rem;
	padding:0 0.5rem;
	margin-bottom: 0.1rem;
}
#findBook .searchFormGroup label{
	font-size: 0.18rem;
	margin: 0.2rem 0;
	display: block;
}
#findBook .searchFormGroup input{
	border:1px solid #36d7b6;
	width: 100%;
	border-radius: 0.08rem;
	height: 0.7rem;
	text-indent: 0.22rem;
}
#findBook .searchFormSubmit{
 padding: 0 0.5rem;
 box-sizing: border-box;

}
 #findBook .searchFormSubmit input{
	width: 100%;
	height: 0.8rem;
	background: #36d7b6;
	border: none;
	margin:0 auto;
	border-radius: 0.08rem;
	color: #ffffff;
	margin-top: 0.3rem;
}
#findBook .submitBtn{
	text-align: center;
}
</style>
