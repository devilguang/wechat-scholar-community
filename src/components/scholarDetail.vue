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
                            <img v-if="infos.headPhotoUrl && infos.headPhotoUrl.length > 0"
                                 :src="'http://120.55.191.189:9000/v1/userInfo/headPhoto?filePath=' + infos.headPhotoUrl">
                            <img v-else :src="baseImg" alt="">
                        </div>
                    </div>
                    <div class="topRight">
                        <span class="attention" id="attentionBtn" @click="attention()"
                              v-if="this.isAttention!==1">+关注</span>
                        <span class="attention" @click="metFlag=true" v-else>已关注</span>
                    </div>
                </div>
                <p class="scholarAbout clrfix">{{infos.scholarName}}
                    <span class="scholarUniverse">{{infos.orgName}}</span>
                </p>
                <p class="scholarMarjor">领域方向：
                    <span>{{infos.area}}</span>
                </p>
                <!--<show-meassge v-if="true" meassage="关注成功" v-on:listenToChild="showMsgChild"></show-meassge>-->
            </div>

            <!-- 详情数字部分 -->
            <div class="numBox">
                <ul class="clrfix">
                    <li class="outcomN">
                        <span>{{infos.achAllNum || '-'}}</span>
                        <p>成果数</p>
                    </li>
                    <li class="citedN">
                        <span>{{infos.allCitedNum || '-'}}</span>
                        <p>被引数</p>
                    </li>
                    <li class="followerN">
                        <span>-</span>
                        <p>关注者</p>
                    </li>
                    <li class="HN">
                        <span>{{infos.h || '-'}}</span>
                        <p>H指数</p>
                    </li>
                </ul>
            </div>
        </article>
        <!-- 详情页选项卡部分 -->
        <article class="tabBox">
            <ul class="tabTop clrfix" id="zxq">
                <li @click='tabToggle(tab01Text)' :class="{active: activeName == tab01Text || activeFirst}">
                    <span class="iconfont icon-research"></span>
                    <span class="tabTitle">科研成果</span>
                </li>
                <li @click='tabToggle(tab02Text)' :class="{active: activeName == tab02Text}">
                    <span class="iconfont icon-cooperate"></span>
                    <span class="tabTitle">合作者</span>
                </li>
                <li @click="tabToggle(tab03Text)" :class="{active: activeName == tab03Text}">
                    <span class="iconfont icon-institution"></span>
                    <span class="tabTitle">合作机构</span>
                </li>
            </ul>
            <!-- 选项卡部分页面在component体现  -->
            <component :is='currentView' keep-alive :infos="infos" :partnerItems="partnerItems"
                       :instituteItems="instituteItems"></component>
        </article>
        <section id="cancelAttentionBox" v-show="metFlag">
            <div class="alertBox">
                <p class="tip">
                    <span class="iconfont icon-warn"></span>
                    <span class="tipWord">您确定要取消关注吗?</span>
                </p>
                <div class="operate">
                    <span class="cancel"    @click="cancel">取消</span>
                    <span class="confirm"   @click="confirm">确定</span>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Vue from 'vue'
    import sDtab01 from './sDtab01'
    import sDtab02 from './sDtab02'
    import sDtab03 from './sDtab03'
    import qs from 'querystring'
    import {mapGetters} from 'vuex'
    export default {
        name: 'scholarDetail',
        data() {
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
                instituteItems: [],
                baseImg: '../../static/img/img-scholar_1.png',
                barFlag: true,
                isAttention: '',
                metFlag: false
            }
        },
        components: {
            sDtab01,
            sDtab02,
            sDtab03,
        },
        computed: {
            ...mapGetters([
                'getDatatype',
                'getAchunique'
            ])
        },
        methods: {
            //查询学者是否被关注
            userToScholarUnique(){
                this.$axios.get('/v1/weChat/userToScholarUnique/' + this.infos.scholarUnique).then((res) => {
                    this.isAttention = res.data.data.isAttention
                })
            },

            // 选项卡切换
            tabToggle: function (tabText) {
                this.currentView = tabText
                this.activeFirst = false
                this.activeName = tabText
            },
            // 加关注
            attention () {
                this.$axios({
                    method: 'post',
                    url: '/v1/weChat/scholarAttention',
                    data: {
                        'scholarUnique': this.infos.scholarUnique,
                        'scholarName': this.infos.scholarName,
                        'area': this.infos.area,
                        'dataType': this.getDatatype.type
                    }
                }).then((res)=>{
                    this.isAttention = 1
                })
            },
            approve () {
                // 已登录已完善
                this.$router.push({
                    path: '../../../myCenter/Iwillconfirm'
                })
            },
            cancel () {
                let attentionBtn = document.getElementById('attentionBtn')
                attentionBtn.innerHTML = '已关注'
                document.getElementById('cancelAttentionBox').style.display = 'none'
            },
            confirm (){ //取消关注
                this.$axios({
                    method: 'delete',
                    url: '/v1/weChat/scholarAttentions',
                    data: {
                        scholarUniques: [this.infos.scholarUnique]
                    }
                }).then((res) => {
                    if (res.data.errno == 0) {
                        this.isAttention = 0
                        this.metFlag = false
                    }
                })
            },
            pullScholarFromWD() {
                this.$http.get('/v1/scholar/' + this.$store.state.scholarInfo.scholarUnique, {})
                    .then((response) => {
                        this.infos = response.data.data.scholar
                        this.userToScholarUnique()
                        // this.detailItems = response.data.scholar.cnkiDetailLists
                        this.partnerItems = response.data.data.cooperatorslist.slice(0, 10)
//                         this.instituteItems = response.scholar.cnkiOrgansList
                    })
            },
            pullScholarFromServer() {
                let solrQueryWechat = {
                    "q": "*:*",
                    "wt": "json",
                    "fl": "SCHOLAR_UNIQUE,SCHOLAR_NAME,ORG_NAME,AREA,ACH_ALL_NUM,ALL_CITED_NUM,H_EXPONENT",
                    "indent": "off",
                    "rows": 1,
                    "start": 0
                }
                let keymap = {
                    SCHOLAR_UNIQUE: 'scholar_unique',
                    SCHOLAR_NAME: 'scholarName',
                    ORG_NAME: 'orgName',
                    AREA: 'area',
                    ACH_ALL_NUM: 'achAllNum',
                    ALL_CITED_NUM: 'allCitedNum',
                    H_EXPONENT: 'h'
                }
                solrQueryWechat.q = 'SCHOLAR_UNIQUE:"' + this.$store.state.scholarInfo.scholarUnique + '"';
                this.$http.post('/indexServer/scholar_info/select', qs.stringify(solrQueryWechat))
                    .then((response) => {
                        this.barFlag = false
                        this.infos = _.mapKeys(response.data.response.docs[0], function (value, key) {
                            return keymap[key]
                        })
                        this.userToScholarUnique()
                        // this.detailItems = response.data.scholar.cnkiDetailLists
                        // this.partnerItems = response.data.cooperatorslist.slice(0, 10)
                        // this.instituteItems = response.scholar.cnkiOrgansList
                    }).then((error) => {
                })
            },
            pullCoper() {
                let solrQueryCoper = {
                    "q": "*:*",
                    "wt": "json",
                    "fl": "COOPERATOR_NAME,COOPER_ORG_NAME",
                    "indent": "off",
                    "rows": 10,
                    "start": 0
                }
                let keymapCoper = {
                    COOPERATOR_NAME: 'cooperatorName',
                    COOPER_ORG_NAME: 'cooperOrgName'
                }
                solrQueryCoper.q = 'scholar_info_id:"' + this.$store.state.scholarInfo.scholarUnique + '"';
                this.$http.post('/indexServer/scholar_coper/select', qs.stringify(solrQueryCoper))
                    .then((result) => {
                        var server_docs = []
                        _(result.data.response.docs).forEach(function (doc) {
                            server_docs.push(_.mapKeys(doc, function (value, key) {
                                return keymapCoper[key]
                            }))
                        })
                        // this.detailItems = response.data.scholar.cnkiDetailLists
                        this.partnerItems = server_docs.slice(0, 10)
                        // this.instituteItems = response.scholar.cnkiOrgansList
                    }).then((error) => {
                })
            },
            pullCoorgan() {
                let solrQueryCoorgan = {
                    "q": "*:*",
                    "wt": "json",
                    "fl": "COOPER_ORG_NAME,COOPER_NUM",
                    "indent": "off",
                    "rows": 10,
                    "start": 0
                }

                let keymapCoporgan = {
                    COOPER_ORG_NAME: 'organName',
                    COOPER_NUM: 'achCount'
                }
                solrQueryCoorgan.q = 'scholar_info_id:"' + this.$store.state.scholarInfo.scholarUnique + '"';
                this.$http.post('/indexServer/scholar_coorgan/select', qs.stringify(solrQueryCoorgan))
                    .then((result) => {
                        var server_docs = []
                        _(result.data.response.docs).forEach(function (doc) {
                            server_docs.push(_.mapKeys(doc, function (value, key) {
                                return keymapCoporgan[key]
                            }))
                        })
                        this.instituteItems = server_docs.slice(0, 10)
                    })
            }
        },
        mounted() {
            console.log(this.getDatatype)
            if (this.$store.state.scholarInfo.type == 'wd') {
                this.pullScholarFromWD()
            } else {
                this.pullScholarFromServer()
                this.pullCoper()
                this.pullCoorgan()

            }

        }
    }

</script>
<style>
    #zxq {
        display: flex;
    }

    #zxq li {
        flex: 1
    }
</style>
