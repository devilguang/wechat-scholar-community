<template>
    <div id="bookDetail" style="height:100%;background:#fff">
        <article class="bookContent">
            <!--//{{$route.params.bookID}}-->
            <p class="bookTitle">{{infosList.title}}</p>
            <p class="bookOrigin"><span
                    class="iconfont icon-link"></span><span>来源 — — </span><span>{{infosList.PUB_NAME_CH?infosList.PUB_NAME_CH:infosList.pub_name}}</span></p>
            <p class="bookBrief">
                <span>{{infosList.ach_type}}</span><span>— — 《期刊名》 — —</span><span>(刊号)</span></p>
            <p class="abstract">
                <span>摘要</span><span>{{infosList.ab.length > 200 ? infosList.ab.substr(0, 200) + '...' : infosList.ab}}</span>
            </p>
            <p class="publicOrg"><span> 出版源</span><span>{{infosList.punishOrg}}</span></p>
            <p class="keyword"><span>关键词</span><span>{{infosList.keywords_q}}</span></p>
            <p class="cited"><span>被引量</span><span>{{infosList.cite_count}}</span></p>
        </article>
        <ul class="userBtns clrfix">
            <li @click="comments"><span class="iconfont icon-remark" :class="{cActive:commentsFlag}"></span><span
                    :class="{cActive:commentsFlag}">评论</span></li>
            <li @click="recommend" :class="{active:remActive}"><span
                    class="iconfont icon-recommendBtn"></span><span>推荐</span></li>
            <li><span class="iconfont icon-share"></span><span>分享</span></li>
            <li @click="collect" :class="{active:colActive}"><span class="iconfont icon-collect"></span><span
                    class="collectWord">收藏</span></li>
        </ul>
        <article class="commitArea" v-show="commentsFlag">
            <textarea name="talk" class="writeArea" placeholder="输入内容" v-model="clearItem"></textarea>
            <button type="button" name="button" class="pubulishBtn" @click="publishCommit">发布</button>
        </article>

        <article class="commitContent">
            <ul class="commitItems">
                <li class="commitItem" v-for="commitItem in sliceShow">
                    <div class="top clrfix">
                        <div class="left">
                            <img src="../assets/img/img-public_1.jpg" alt="">
                        </div>
                        <div class="right">
                            <p class="name">{{commitItem.user.name}}</p>
                            <span class="time">发布时间 {{commitItem.createDate}}</span>
                        </div>
                    </div>
                    <p class="mainContent">{{commitItem.content}}</p>
                </li>
            </ul>
            <h4 class="loadMore" @click="showMore" v-show="showFlag">点击加载更多</h4>
        </article>
        <article class="originBox">
            <h3>全部来源</h3>
            <ul>
                <li class="clrfix">
                    <span class="iconfont icon-link"></span><span>{{infosList.pub_name}}</span>
                </li>
            </ul>
        </article>
        <article class="literature">
            <div class="tabBox">
                <p @click='tabToggle(tab01Text)' :class="{active: activeName == tab01Text || activeFirst}">相似文献</p>
                <p @click='tabToggle(tab02Text)' :class="{active: activeName == tab02Text}">参考文献</p>
                <p @click='tabToggle(tab03Text)' :class="{active: activeName == tab03Text}">引证文献</p>
            </div>
            <component :is='currentView' keep-alive></component>
        </article>
        <section id="cancelCollectBox" style="display:none">
            <div class="alertBox">
                <p class="tip">
                    <span class="iconfont icon-warn"></span>
                    <span class="tipWord">您确定要取消收藏吗?</span>
                </p>
                <div class="operate">
                    <span class="cancel" @click="cancel">取消</span>
                    <span class="confirm" @click="confirm">确定</span>
                </div>
            </div>
        </section>
        <transition name="fade">
            <bounced-out v-show="dataFlag" meassage="输入内容不能为空" v-on:listenToChild="showMsgChild"></bounced-out>
        </transition>
    </div>
</template>
<script>
    import axios from 'axios'
    import docuSimilar from './docuSimilar'
    import docuReference from './docuReference'
    import docuQuote from './docuQuote'
    import {mapGetters} from 'vuex'
    import bouncedOut from './diaLog.vue'
    import qs from 'querystring'
    import Vue from 'vue'
    export default {
        name: 'bookDetail',
        data () {
            return {
                infosList: {
                    title: '',
                    author: '',
                    ab: '',
                    punishOrg: '',
                    keywords_q: '',
                    cite_count: '',
                    ach_type: '',
                    ach_unique: '',
                    pub_name:''
                },
                infos: [],
                remActive: false,
                colActive: false,
                tab01Text: 'docuSimilar',
                tab02Text: 'docuReference',
                tab03Text: 'docuQuote',
                currentView: 'docuSimilar',
                activeName: 'tab01Text',
                activeFirst: true,
                showFlag: true,
                clearItem: '',    //评论的内容
                index: '',
                showNumber: 5,
                commitItems: [],
                isLike: '',
                commentsFlag: false,
                message: 'hello world',
                dataFlag: false,
            }
        },
        computed: {
            sliceShow(){
                return this.commitItems.slice(0, this.showNumber)
            },
            ...mapGetters([
                'getDatatype',
                'getAchunique',   //获取到标识符查看详情
            //  'getAchunique'
            ])
        },
        components: {
            docuSimilar: docuSimilar,
            docuReference: docuReference,
            docuQuote: docuQuote,
            bouncedOut
        },
        methods: {
            showMsgChild(data){
                this.dataFlag = data
            },
            showMore(){
                this.showFlag = false
                this.showNumber = this.commitItems.length
            },
            // 点击评论
            comments(){
                if (this.commentsFlag == false) {
                    this.commentsFlag = true
                } else {
                    this.commentsFlag = false
                }
            },
            // 点赞
            recommend () {
                if (this.isLike == 1) { //已经点赞
                    this.$axios({
                        method: 'delete',
                        url: '/v1/weChat/achLikes',
                        data: {
                            achUniques: [this.infosList.ach_unique],
                            dataType: this.getDatatype.type
                        }
                    }).then((res) => {
                        this.remActive = false
                        this.isLike = 0
                    })
                } else {
                    this.$axios({
                        method: 'post',
                        url: '/v1/weChat/achLike',
                        data: {
                            achUnique: this.infosList.ach_unique,
                            dataType: this.getDatatype.type
                        }
                    }).then((res) => {
                        this.remActive = true
                        this.isLike = 1
                    })
                }
            },
            // 收藏成果
            collect(){
                if (this.colActive == false){
                    this.$axios({
                        method: 'post',
                        url: '/v1/weChat/achFavorite',
                        data: {
                            "achUnique": this.infosList.ach_unique,
                            "title": this.infosList.title,
                            "achType": this.infosList.ach_type,
                            "dataType": this.getDatatype.type
                        }
                    }).then((res) => {
                        this.colActive = true
                        document.getElementsByClassName('collectWord')[0].innerHTML = '已收藏'
                    })
                } else {
                    this.colActive = false
                    document.getElementById('cancelCollectBox').style.display = 'block'
                }
            },
            // 发表评论
            publishCommit () {
                // 获取当前时间
                let myDate = new Date()
                let localtime = myDate.toLocaleString().split('/').join('-')
                if (this.clearItem === '') {
                    this.dataFlag = true
                    return
                } else {
                    this.$axios({
                        method: 'post',
                        url: '/v1/weChat/achComment',
                        data: {
                            achUnique: this.infosList.ach_unique,
                            achTitle: this.infosList.title,
                            content: this.clearItem,
                        }
                    }).then((res) => {
                        this.getContent()
                        this.commentsFlag = false
                    })
                    this.clearItem = ''
                }
            },
            // 获取评论内容
            getContent(){
                this.commitItems = []
                this.$axios.get('/v1/weChat/achComments', {
                    params: {
                        'field[]': 'achUnique',
                        'value[]': this.infosList.ach_unique,
                    }
                }).then((res) => {
                    this.commitItems = res.data.data
                    if (this.commitItems.length <= 5) {
                        this.showFlag = false
                    } else {
                        this.showFlag = true
                    }
                })
            },
            //查看是否有收藏 和点赞
            collectionList(){
                let achUniques = []
                achUniques.push(this.infosList.ach_unique)
                this.$axios({
                    method: 'post',
                    url: '/v1/weChat/userToAch',
                    data: {
                        achUniques: achUniques
                    }
                }).then((res) => {
                    let isFavorite = res.data.data[0].isFavorite
                    let isLike = res.data.data[0].isLike
                    this.isLike = isLike
                    if (isFavorite == 1) { //已收藏
                        this.colActive = true
                        document.getElementsByClassName('collectWord')[0].innerHTML = '已收藏'
                    } else {
                        document.getElementsByClassName('collectWord')[0].innerHTML = '收藏'
                    }
                    if (isLike == 1) {  //已点赞
                        this.remActive = true
                    } else {
                        this.remActive = false
                    }
                })
            },
            // 选项卡切换
            tabToggle: function (tabText) {
                this.currentView = tabText
                this.activeFirst = false
                this.activeName = tabText
            },
            // 取消收藏弹框按钮
            cancel: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
                document.getElementsByClassName('collectWord')[0].innerHTML = '已收藏'
                this.colActive = true
            },
            confirm () {
                this.$axios({
                    method: 'delete',
                    url: '/v1/weChat/achFavorites',
                    data: {
                        achUniques: [this.infosList.ach_unique],
                        dataType: this.getDatatype.type
                    }
                }).then((res) => {
                    this.colActive = false
                    document.getElementById('cancelCollectBox').style.display = 'none'
                    document.getElementsByClassName('collectWord')[0].innerHTML = '收藏'
                })
            },
        },
        mounted () {
            if (this.getDatatype.type == "wd") {
                this.index = localStorage.getItem('index')
                let scholarList = this.$store.state.scholarsList[this.index]
                console.log(scholarList)
                this.infosList.title = scholarList.title || scholarList.achTitle
                this.infosList.ach_type = scholarList.ach_type || scholarList.achType
                this.infosList.author = scholarList.author.join(';')
                this.infosList.ab = scholarList.ab
                this.infosList.punishOrg = scholarList.punishOrg
                this.infosList.keywords_q = scholarList.keywords_q
                this.infosList.cite_count = scholarList.cite_count.join(" ")
                this.infosList.ach_unique = scholarList.ach_unique
                this.getContent()
                this.collectionList()
            } else {
//                let ach_unique = this.getAchunique
                let ach_unique = this.getDatatype.scholarUnique
                console.log(ach_unique,1010)
                let solrQuery1 = {
                    "q": "ach_unique:"+ach_unique ,
                    "wt": "json",
                    "fl": "",
                    "indent": "on",
                    "defType": "edismax",
                    "mm": "75%",
                    "sort": ''
                }
                let solrQuery2 = {
                    "q": "ACH_UNIQUE:"+ach_unique,
                    "wt": "json",
                    "fl": "",
                    "indent": "on",
                    "defType": "edismax",
                    "mm": "75%",
                    "sort": ''
                }
                this.$http.post('/indexPaperServer/achievement/select', qs.stringify(solrQuery1)).then((res) => {
                    console.log(res,1)
                    if (res.data.response.docs.length > 0) {
                        this.infos = res.data.response.docs[0]
                        let {title, author, ab, punishOrg, keywords_q, cite_count, ach_type} = this.infos;
                        author = author.join(',')
                        cite_count = cite_count.join(" ")
                        Object.assign(this.infosList, {title, author, ab, punishOrg, keywords_q, cite_count, ach_type})
                        this.getContent()
                        this.collectionList()
                    } else {
                        this.$http.post('/indexServer/scholar_paper/select', qs.stringify(solrQuery2)).then((res) => {
                            console.log(res,2)
                            this.infos = res.data.response.docs[0]
                            this.infosList.title = this.infos.TITLE
                            this.infosList.author = this.infos.GROUP_AU
                            this.infosList.ab = ''
                            this.infosList.punishOrg = ''
                            this.infosList.keywords_q = ''
                            this.infosList.cite_count = this.infos.CITE_COUNT
                            this.infosList.ach_type = ''
                            this.infosList.ach_unique = this.infos.ACH_UNIQUE
                            this.infosList.pub_name = this.infos.PUB_NAME_CH
                            this.getContent()
                            this.collectionList()
                        })
                    }
                })
            }
            if (this.$store.state.review) {
                this.commentsFlag = true
            } else {
                this.commentsFlag = false
            }
        }
    }
</script>
<style>
    .cActive {
        color: #36d7b6;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
