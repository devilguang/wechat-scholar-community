<template>
 <div id="scholarDetail">
     <!-- 详情头部 -->
     <article class="detailTopBox clrfix">
        <div class="scholarHead">
          <!-- <img v-bind:src="infos.imgUrl" > -->
          <img src="../assets/img/img-scholar_1.png" >
        </div>
         <div class="scholarBrief">
               <div class="scholarTitle clrfix">
                  <span class="scholarName">{{infos.scholarName}}</span>
                  <span class="scholarStatus">未认证</span>
               </div>
               <p class="scholarUniverse">{{infos.organName}}{{$route.params.userID}}</p>
               <p class="scholarMarjor">专业方向：<span>{{infos.research}}</span></p>
               <button class="attention" id="attentionBtn" @click="attention()">+关注</button>
               <router-link to="/myCenter/Iwillconfirm">
                 <div class="IApprove"><span class="iconfont icon-iapprove"></span>我要认证</div>
               </router-link>
          </div>
     </article>
     <!-- 详情数字部分 -->
     <article class="numBox">
        <ul class="clrfix" >
          <li class="outcomN"><span>{{infos.achCount}}</span><p>成果数</p></li>
          <li class="citedN"><span>{{infos.cite}}</span><p>被引数</p></li>
          <li class="followerN"><span>{{infos.g}}</span><p>跟随着</p></li>
          <li class="HN"><span>{{infos.h}}</span><p>H指数</p></li>
        </ul>
     </article>
     <!-- 详情页选项卡部分 -->
     <article class="tabBox">
        <ul class="tabTop clrfix" id="zxq"  >
           <li  @click='tabToggle(tab01Text)' :class="{active: activeName == tab01Text || activeFirst}"><span class="iconfont icon-research"></span><span class="tabTitle">科研成果</span></li>
           <li  @click='tabToggle(tab02Text)' :class="{active: activeName == tab02Text}"><span class="iconfont icon-cooperate"></span><span class="tabTitle">合作者</span></li>
           <li  @click="tabToggle(tab03Text)" :class="{active: activeName == tab03Text}"><span class="iconfont icon-institution"></span><span class="tabTitle">合作机构</span></li>
       </ul>
       <!-- 选项卡部分页面在component体现 -->
      <component :is='currentView' keep-alive  :infos="infos" :partnerItems="partnerItems" :instituteItems="instituteItems" :detailItems="detailItems" ></component>

     </article>
</div>
</template>
<script>
import sDtab01 from './sDtab01'
import sDtab02 from './sDtab02'
import sDtab03 from './sDtab03'
// import axios from 'axios'
// import qs from 'querystring'
export default {
  name: 'scholarDetail',
  data () {
    return {
      tab01Text: 'sDtab01',
      tab02Text: 'sDtab02',
      tab03Text: 'sDtab03',
      currentView: 'sDtab01',
      activeName: 'tab01Text',
      activeFirst: true,
      infos: [],
      detailItems: [],
      partnerItems: [],
      instituteItems: []
    }
  },
  components: {
    sDtab01: sDtab01,
    sDtab02: sDtab02,
    sDtab03: sDtab03
  },
  methods: {
    // 选项卡切换
    tabToggle: function (tabText) {
      this.currentView = tabText
      console.log(tabText)
      this.activeFirst = false
      this.activeName = tabText
    },
    // 加关注
    attention: function () {
      var attentionBtn = document.getElementById('attentionBtn')
      if (attentionBtn.innerHTML === '已关注') {
        attentionBtn.innerHTML = '+关注'
      } else {
        window.alert('已关注')
        attentionBtn.innerHTML = '已关注'
      }
    }
  },
  mounted () {
    var scDetail = JSON.parse(window.sessionStorage.getItem('scDetail'))
    console.log(scDetail)
    this.infos = scDetail.data
    this.detailItems = scDetail.data.cnkiDetailLists
    this.partnerItems = scDetail.data.cnkiAuthorsList
    this.instituteItems = scDetail.data.cnkiOrgansList

    // console.log(this.$route.params.link)
    // axios.post('http://localhost/query/gatherScholarDetail', qs.stringify({link: this.$route.params.link})).then((response) => {
    //   console.log(response.data)
    //   this.infos = response.data
    //   this.detailItems = response.data.cnkiDetailLists
    //   this.partnerItems = response.data.cnkiAuthorsList
    //   this.instituteItems = response.data.cnkiOrgansList
    //   console.log(this.partnerItems)
    // }).then((error) => console.log(error))
  }
}

</script>
