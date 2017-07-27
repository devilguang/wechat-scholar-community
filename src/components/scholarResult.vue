<template>
  <div id="scholarResult">
    <h4>为您检索的结果如下：</h4>
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="scholarList">
      <li class="scholarItem clrfix" v-for="item in items" @click="toDetail(item.scholar_unique)">
        <!-- <router-link :to="{ path: 'scholarResult/scholarDetail', query: { ID: item.userID }}"> -->
        <!-- <router-link :to="{ name: 'detail', params: { link: item.link }}"> -->
        <div class="scholarHead">
          <img v-if="item.head_photo_url && item.head_photo_url.length > 0" :src="'http://120.55.191.189:9000/v1/userInfo/headPhotoDownload?filePath=' + item.head_photo_url">
          <img v-else src="../assets/img/img-scholar_1.png">
        </div>
        <div class="scholarInfos">
          <div class="scholarTitle">
            <span class="scholarName">{{item.scholar_name}}</span>
            <span class="scholarStatus">未认证</span>
          </div>
          <p class="scholarPosition">{{item.org_name}}</p>
          <p class="scholarCited">发文量：{{item.ach_all_num}}</p>
          <p class="scholarDir">领域方向：
            <span>{{item.subject ? item.subject.join(', ') : ''}}</span>
          </p>
        </div>
        <span class="moreBtn iconfont icon-more"></span>
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
import qs from 'querystring'

export default {
  name: 'scholarDetail',
  data() {
    return {
      items: [],
      pageNum: 1,
      q: "*:*"
    }
  },
  methods: {
    //  点击进学者详情页
    toDetail: function (scholar_unique) {
      this.$http.get('/v1/scholar/' + scholar_unique, {})
        .then((response) => {
          window.sessionStorage.setItem('scDetail', JSON.stringify(response))
          console.log(response)
          this.$router.push({
            name: 'detail', params: { scholarUnique: scholar_unique }
          })
        })
        .then((error) => console.log(error))
    },
    loadMore: function () {
      this.busy = true;
      var solrQuery = {
        "q": "*:*",
        "wt": "json",
        "fl": "scholar_unique,scholar_name,org_name,subject,ach_all_num,head_photo_url",
        "indent": "off",
        "defType": "edismax",
        "mm": "75%",
        "rows": 10,
        "start": 0,
      }
      solrQuery.q = this.q;
      solrQuery.start = (this.pageNum - 1) * 10;
      this.$http.post('/solr/scholar/select', qs.stringify(solrQuery))
        .then((result) => {
          this.items.push(...result.data.response.docs);
          this.pageNum++;
          this.busy = false;
        })
        .then((error) => { })
    }
  },
  mounted() {
    var scResult = JSON.parse(window.sessionStorage.getItem('data'))
    this.q = scResult
  }
}
</script>
