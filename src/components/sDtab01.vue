<template lang="html">
 <section class="tabContent" id="sDtab01">
      <div class="contentTop">
          <!-- 复选下拉框没写 占位 -->
        <div class="allFruits">全部成果</div>
          <p class="citedNum">被引次数：<span>{{infos.citedTotalNum}}</span></p>
      </div>
      <ul class="contentMain">
        <li class="contentItem">
          <div class="wordsCon">
               <p class="coreCon">坚持正确方向创新方法手段 提高新闻舆论传播力引导力</p>
               <p class="eachCitedNum">被引用次数：3</p>
               <p class="authorItem">习近平：《资源节约与环保》</p>
          </div>
          <ul class="userBtns clrfix">
             <li><span class="iconfont icon-remark"></span>评论</li>
             <li :class="active2" @click="remLight()"><span class="iconfont icon-recommendBtn"></span>推荐</li>
             <li><span class="iconfont icon-share"></span>分享</li>
             <li :class="active4" @click="colLight()"><span class="iconfont icon-collect"></span>收藏</li>
          </ul>
        </li>
      </ul>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      infos: [],
      active2: {
        'active': false
      },
      active4: {
        'active': false
      }
    }
  },
  methods: {
    // 推荐和收藏高亮
    remLight: function () {
    //  console.log(this.active2.active)
      this.active2.active = !this.active2.active
    },
    colLight: function () {
    //  console.log(this.active4.active)
      this.active4.active = !this.active4.active
    }
  },
  mounted () {
    // 先获取假数据
    axios.get('/static/mock-data/scholarDetail.json')
    .then((response) => {
      var userID = document.location.href
      var arr = userID.split('/')
      userID = arr[arr.length - 1]
      for (var scholarInfo in response.data) {
      //  console.log(response.data[scholarInfo])
        if (response.data[scholarInfo].userID === userID) {
          this.infos = response.data[scholarInfo]
        //  console.log(this.infos)
        }
      }
    })
    .then((error) => console.log(error))
  }
}
</script>

<style lang="css">
</style>
