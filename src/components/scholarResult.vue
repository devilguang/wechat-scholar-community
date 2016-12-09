<template>
 <div id="scholarResult">
  <h4>为您检索的结果如下：</h4>
  <ul class="scholarList">
    <li class="scholarItem" v-for="item in items">
      <!-- <router-link :to="{ path: 'scholarResult/scholarDetail', query: { ID: item.userID }}"> -->
      <router-link :to="{ name: 'detail', params: { userID: item.userID }}">
        <div class="scholarHead"><img src="../assets/img/img-scholar_1.png" > </div>
         <div class="scholarInfos">
           <div class="scholarTitle">
         		<span class="scholarName">{{item.userName}}</span>
   	        <span class="scholarStatus">{{item.userStatus}}</span>
            </div>
          	<p class="scholarPosition">{{item.userPosition}}</p>
            <p class="scholarCited">被引数：{{item.userCitedNum}}</p>
            <p class="scholarDir">研究方向：{{item.userDir}}</p>
          </div>
          <span class="moreBtn iconfont icon-more"></span>
      </router-link>
      </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'scholarDetail',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    // 先获取假数据
    axios.get('/static/mock-data/scholarResult.json')
    .then((response) => {
      console.log(response)
      this.items = response.data
    })
    .then((error) => console.log(error))
  }
}
</script>
