<template>
    <div id="findScholar" style="height:100vh;background:#fff">
        <div class="searchImg">
            <img src="../assets/img/img-search-bg.png">
        </div>
        <form class="searchForm">
            <fieldset>
                <legend>学者查询</legend>
                <div class="searchFormGroup">
                    <label>姓名（必填）</label>
                    <input type="text" v-model="scholarName" :value="scholarName" placeholder="请输入学者姓名"/>
                </div>
                <div class="searchFormGroup">
                    <label>机构</label>
                    <input type="text" v-model="insName" :value="insName" placeholder="请填写尽量详细化"/>
                </div>
                <!-- <router-link to="/findScholar/scholarResult"> -->
                <p class="searchFormSubmit" @click="search">开始查询</p>
                <!-- </router-link> -->
            </fieldset>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'querystring'
    import infiniteScroll from 'vue-infinite-scroll'
    export default {
        name: 'findScholar',
        data () {
            return {
                scholarName: '',
                insName: "",
                scholarList: [],
                infos: {}
            }
        },
        methods: {
            search () {
                if (this.scholarName == '') {
                    alert("请输入学者姓名")
                    return
                }
                // defType=edismax&indent=on&mm=75%&q=scholar_name:"乐江"%20and%20org_name:"基础医学院"&wt=json

                let queryScholar = this
                this.$store.dispatch('saveQueryScholar', queryScholar);
                this.$router.push({
                    path: '/findScholar/scholarResult'
                })
            },
            getQueryString(name){
                var reg = new RegExp("(^|&)"    + name + "=([^&]*)(&|$)", "i");
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
            this.$axios.get('/v1/weChat/token/'+openId).then((res)=>{
                let token = res.data.token
                this.$store.commit('SET_TOKEN',token)
            })
            let code = this.getQueryString('code')
            if (openId) return
//            if (code) {
//                this.$axios.get('/v1/weChat/getUserInfo/' + code).then((res) => {
//                    let openId = res.data.data.openId
//
//                    this.local('openId', openId)
//                    this.$store.commit('SET_USERINFO', res.data.data)
//                })
//            } else {
//                window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8115bea15b8d7d1a&redirect_uri=http://mobile.subject.net.cn&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
//            }
        }
    }

</script>
