<template lang="html">
 <section class="tabContent" id="sDtab01">
      <div class="contentTop">
          <!-- 复选下拉框没写 占位 -->
        <div class="allFruits">全部成果</div>
          <p class="citedNum">被引次数：<span>{{infos.cite}}</span></p>
      </div>
      <ul class="contentMain">
        <li class="contentItem" v-for="(detailItem,index) in detailItems" >
          <div class="wordsCon">
               <p class="coreCon">{{detailItem.title}}</p>
               <p class="eachCitedNum">被引用次数：{{detailItem.cites}}</p>
               <p class="authorItem">{{detailItem.docAuthors}}：{{detailItem.source}}</p>
          </div>
          <ul class="userBtns clrfix">
             <li><span class="iconfont icon-remark"></span>评论</li>
             <li  @click="recommend(detailItem,index)" :class="{active:detailItem.recommendActive}"><span class="iconfont icon-recommendBtn"></span>推荐</li>
             <li><span class="iconfont icon-share"></span>分享</li>
             <li  @click="collect(detailItem,index)" :class="{active:detailItem.collectActive}"><span class="iconfont icon-collect"></span>收藏</li>
          </ul>
        </li>
      </ul>
  </section>
</template>

<script>
// import axios from 'axios'
import Vue from 'vue'
export default {
  props: [
    'detailItems',
    'infos'
  ],
  data () {
    return {

    }
  },
  methods: {
    // 推荐和收藏高亮
    recommend: function (item, index) {
      // set设置数据相应 增加data里面的 一个recommendActive 属性 可以控制高亮
      if ((typeof item.recommendActive) === 'undefined') {
        Vue.set(this.detailItems[index], 'recommendActive', true)
      } else {
        item.recommendActive = !item.recommendActive
      }
      console.log(this.detailItems[index].recommendActive)
    },
    collect: function (item, index) {
      if ((typeof item.collectActive) === 'undefined') {
        Vue.set(this.detailItems[index], 'collectActive', true)
      } else {
        item.collectActive = !item.collectActive
      }
    }
  },
  mounted () {

  }
}
</script>
<style lang="css">
</style>
