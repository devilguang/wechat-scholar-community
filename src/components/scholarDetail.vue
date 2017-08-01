<template>
 <div id="scholarDetail">
     <!-- 详情头部 -->
     <article class="detailTopBox clrfix">
       <div class="scholarHeader">
          <div class="headerTop clrfix">
            <div class="topLeft" @click="approve">
              <span class="scholarStatus">未认证</span>
            </div>
            <div class="topMiddle">
              <div class="imgBox">
                <img src="../assets/img/img-scholar_1.png" >
              </div>
            </div>
            <div class="topRight">
              <span class="attention" id="attentionBtn" @click="attention()">+关注</span>
            </div>
          </div>
        <p class="scholarAbout clrfix">{{infos.scholarName}}<span class="scholarUniverse">{{infos.organName}}{{$route.params.userID}}</span></p>
          <p class="scholarMarjor">领域方向：<span>{{infos.research}}</span></p>
        </div>

        <!-- 详情数字部分 -->
        <div class="numBox">

          <ul class="clrfix" >
            <li class="outcomN"><span>{{infos.achCount}}</span><p>成果数</p></li>
            <li class="citedN"><span>{{infos.cite}}</span><p>被引数</p></li>
            <li class="followerN"><span>{{infos.g}}</span><p>跟随着</p></li>
            <li class="HN"><span>{{infos.h}}</span><p>H指数</p></li>
          </ul>
        </div>
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
    <section id="cancelAttentionBox" style="display:none" >
         <div class="alertBox">
            <p class="tip">
              <span class="iconfont icon-warn"></span>
              <span class="tipWord">您确定要取消关注吗?</span>
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
      detailItems: [1,2,3],
      partnerItems: [4,5,6],
      instituteItems: [1,2,3]
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
      if (!this.loginJudge()) {
        // 已登录状态
        var attentionBtn = document.getElementById('attentionBtn')
        if (attentionBtn.innerHTML === '已关注') {
          document.getElementById('cancelAttentionBox').style.display = 'block'
        } else {
          window.alert('已关注')
          attentionBtn.innerHTML = '已关注'
        }
      } else {
        return
      }
    },
    approve: function () {
      if (!this.loginJudge()) {
        // 已登录未完善
        if (!window.localStorage.getItem('myData')) {
          // window.confirm('请先完善资料')
          if (window.confirm('请先完善资料')) {
            this.$router.push({
              path: '../../../myCenter/myInfo'
            })
          }
        } else {
          // 已登录已完善
          this.$router.push({
            path: '../../../myCenter/Iwillconfirm'
          })
          console.log('yiwanshan')
        }
      } else {
        return
      }
    },
    cancel: function () {
      var attentionBtn = document.getElementById('attentionBtn')
      attentionBtn.innerHTML = '已关注'
      document.getElementById('cancelAttentionBox').style.display = 'none'
    },
    confirm: function () {
      var attentionBtn = document.getElementById('attentionBtn')
      attentionBtn.innerHTML = '+关注'
      document.getElementById('cancelAttentionBox').style.display = 'none'
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
