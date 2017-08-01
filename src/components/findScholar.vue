<template>
  <div id="findScholar" style="height:100vh;background:#fff">
    <div class="searchImg"><img src="../assets/img/img-search-bg.png"></div>
    <form class="searchForm">
      <fieldset>
        <legend>学者查询</legend>
        <div class="searchFormGroup">
          <label>姓名（必填）</label>
          <input type="text" v-model="scholarName" :value="scholarName" placeholder="请输入学者姓名"/>
        </div>
        <div class="searchFormGroup">
          <label>机构</label>
          <input type="text" v-model="insName" :value="insName" placeholder="请填写尽量详细化" disabled="disabled"/>
        </div>
        <!-- <router-link to="/findScholar/scholarResult"> -->
        <p class="searchFormSubmit" @click="search">开始查询</p>
        <!-- </router-link> -->
      </fieldset>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'findScholar',
    data () {
      return {
        scholarName: '',
        insName: "武汉大学",
        scholarList: [],
        infos: {
//          birthday:null,
//          createrName:null,
//          headPhotoUrl:null,
//          id:"5ff69112-1753-4aea-8a2d-3ac8f69700f9",
//          idcreaterName:null,
//          isDelete: null,
//          isUsable:"0",
//          loginName:"obZo-v2o7yef7tqYIYveKwNKySok",
//          mail:null,
//          name :"ä¸å±ï½æçdevil",
//          nickName:"ä¸å±ï½æçdevil",
//          openId:"obZo-v2o7yef7tqYIYveKwNKySok",
//          password:null,
//          phone:null,
//          roleId:null,
//          scholarUnique:null,
//          sex:"男",
//          userType: "1"
        }
      }
    },
    methods: {

      search(){
        if (this.scholarName == '') {
          alert("请输入学者姓名")
          return
        }

//        return
//        this.$http.post('/query/gatherScholarItem', qs.stringify({
//          scholar: this.scholarName,
//          organ: this.insName
//        }))
//          .then((response) => {
//            console.log(response)
//            window.sessionStorage.setItem('data', JSON.stringify(response))
//            this.$router.push({
//              path: '/findScholar/scholarResult'
//            })
//          })
      },
      getQueryString(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return ''
      },
      local(key, value) {
        if (value == null) {
          value = localStorage.getItem(key) + "";
          if (value == 'null' || value == 'undefined' || value == '') return '';
          return value;
        }
        localStorage.setItem(key, value);
      },
    },
    mounted () {
      let openId = this.local('openId')
      let code = this.getQueryString('code')
      if (openId) {
        this.$router.push({
          path: '/findScholar'
        })
      }
      if (code) {
        this.$http.get('/v1/weChat/getUserInfo/' + code).then((res) => {
          let openId = res.data.data.openId
          this.local('openId',openId)
          this.$store.commit('SET_USERINFO', res.data.data)
        })
      } else {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8115bea15b8d7d1a&redirect_uri=http://mobile.subject.net.cn&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
      }
    },

  }
</script>
