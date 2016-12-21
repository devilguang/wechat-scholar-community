<template lang="html">
 <section class="tabContent" id="sDtab01">
      <div class="contentTop">
          <!-- 复选下拉框没写 占位 -->
        <div class="allFruits">全部成果</div>
          <p class="citedNum">被引次数：<span>{{infos.cite}}</span></p>
      </div>
      <ul class="contentMain">
        <li class="contentItem" v-for="detailItem in detailItems" >
          <div class="wordsCon">
               <p class="coreCon">{{detailItem.title}}</p>
               <p class="eachCitedNum">被引用次数：{{detailItem.cites}}</p>
               <p class="authorItem">{{detailItem.docAuthors}}：{{detailItem.source}}</p>
          </div>
          <ul class="userBtns clrfix">
             <li><span class="iconfont icon-remark"></span>评论</li>
             <li :class="active2" @click="remLight(index)"><span class="iconfont icon-recommendBtn"></span>推荐</li>
             <li><span class="iconfont icon-share"></span>分享</li>
             <li :class="active4" @click="colLight()"><span class="iconfont icon-collect"></span>收藏</li>
          </ul>
        </li>
      </ul>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  props: [
    'detailItems',
    'infos'
  ],
  data () {
    return {
      active2: {
        'active': false
      },
      active4: {
        'active': false
      },
      index: {
      }
    }
  },
  methods: {
    // 推荐和收藏高亮
    remLight: function (index) {
      console.log(222)
    //  console.log(this.active2.active)
      this.active2.active = !this.active2.active
    },
    colLight: function () {
    //  console.log(this.active4.active)
      this.active4.active = !this.active4.active
    }
  },
  mounted () {

  }
}
</script>
<style lang="css">
</style>
