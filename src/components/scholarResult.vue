<template>
 <div id="scholarResult">
  <h4>为您检索的结果如下：</h4>
  <ul class="scholarList">
    <li class="scholarItem clrfix" v-for="item in items" @click="toDetail(item.link)">
      <!-- <router-link :to="{ path: 'scholarResult/scholarDetail', query: { ID: item.userID }}"> -->
      <!-- <router-link :to="{ name: 'detail', params: { link: item.link }}"> -->
        <div class="scholarHead"><img src="../assets/img/img-scholar_1.png" > </div>
         <div class="scholarInfos">
           <div class="scholarTitle">
         		<span class="scholarName">{{item.scholarName}}</span>
   	        <span class="scholarStatus">未认证</span>
            </div>
          	<p class="scholarPosition">{{item.organName}}</p>
            <p class="scholarCited">被引数：{{item.achCount}}</p>
            <p class="scholarDir">领域方向：<span>{{item.research}}</span></p>
          </div>
          <span class="moreBtn iconfont icon-more"></span>
      <!-- </router-link> -->
      </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
import qs from 'querystring'
export default {
  name: 'scholarDetail',
  data () {
    return {
      items: []
    }
  },
  methods: {
  //  点击进学者详情页
    toDetail: function (linkUrl) {
      // console.log(linkUrl)
      axios.post('http://localhost/query/gatherScholarDetail', qs.stringify({
        link: linkUrl
      }))
      .then((response) => {
        window.sessionStorage.setItem('scDetail', JSON.stringify(response))
        console.log(response)
        this.$router.push({
          name: 'detail', params: { link: linkUrl }
        })
      })
      .then((error) => console.log(error))
    }
  },
  mounted () {
    var scResult = JSON.parse(window.sessionStorage.getItem('data'))
    // console.log(scResult)
    this.items = scResult.data
  }
}
</script>
