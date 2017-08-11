<template>
    <div id="bookResult">
        <article class="searchTop">
            <input type="text" name="" value="" placehoder="请输入搜索内容" v-model="queryAch.achTitle"
                   :value="queryAch.achTitle">
            <span class="searchBtn iconfont icon-searchBtn" @click="searchBook"></span>
        </article>
        <article>
            <article class="findTip clrfix">
                <div class="findLogo">
                    <span class="iconfont icon-flower"></span>
                </div>
                <p>找到相关的文献共{{num}}条</p>
                <div class="choose" @click="choose">
                    <span class="iconfont icon-choose"></span><span>筛选</span>
                </div>
            </article>

            <article id="mainChoose" class="chooseBox" v-show="chooseShow">
                <section class="selectBox clrfix ">
                    <p>年限:</p>
                    <span :class="{active: activeTime == nolimit}" @click="chooseTime(nolimit)">时间不限</span>
                    <span :class="{active: activeTime == six}" @click="chooseTime(six)">2016至今</span>
                    <span :class="{active: activeTime == five}" @click="chooseTime(five)">2015至今</span>
                    <span :class="{active: activeTime == four}" @click="chooseTime(four)">2014至今</span>
                </section>
                <section class="sortBox clrfix">
                    <p>排序:</p>
                    <span :class="{active: activeWay == normal}" @click="chooseSort(normal)">按相关性</span>
                    <span :class="{active: activeWay == cite}" @click="chooseSort(cite)">按被引量</span>
                    <span :class="{active: activeWay == timeDown}" @click="chooseSort(timeDown)">按时间降序</span>
                </section>
            </article>
        </article>
        <article class="bookList">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
                class="clrfix">
                <li class="bookListItem" v-for="(bookListItem,index) in bookList">
                    <!-- <router-link :to="{ name: 'bookDetail', params: { bookID: bookListItem.bookID }}"> -->
                    <div @click="showMinute(bookListItem.ach_unique,index)">
                        <p class="bookTitle">{{bookListItem.title}}</p>
                        <p class="bookBrief"><span
                                class="author">{{bookListItem.author && bookListItem.author.length > 0 ? bookListItem.author.join(',') : ''}}</span><span> —{{bookListItem.yvip}}</span><span></span>
                        </p>
                    </div>
                    <p v-if="bookListItem.ab" class="abstract">
                        <span>摘要:</span><span>{{bookListItem.ab.length > 200 ? bookListItem.ab.substring(0, 190) + '...' : bookListItem.ab}}</span>
                    </p>
                    <!-- </router-link> -->
                    <ul class="userBtns clrfix">
                        <li class="clrfix"><span class="iconfont icon-remark"></span><span
                                class="word" @click="showMinute(bookListItem.ach_unique,index)">评论</span></li>
                        <li @click="recommend(bookListItem,index)"
                            :class="{active:bookListItem.isLike?bookListItem.isLike:false}"><span
                                class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
                        <li class="clrfix"><span class="iconfont icon-share"></span><span class="word">分享</span></li>
                        <li @click="collect(bookListItem,index)"
                            :class="{active:bookListItem.isFavorite?bookListItem.isFavorite:false}"><span
                                class="iconfont icon-collect"></span><span class="collectWord word">收藏</span></li>
                    </ul>
                    <section id="cancelCollectBox" style="display:none">
                        <div class="alertBox">
                            <p class="tip">
                                <span class="iconfont icon-warn"></span>
                                <span class="tipWord">您确定要取消收藏吗?</span>
                            </p>
                            <div class="operate">
                                <span class="cancel" @click="cancel">取消</span>
                                <span class="confirm" @click="confirm(bookListItem,index)">确定</span>
                            </div>
                        </div>
                    </section>
                </li>

            </ul>
        </article>

        <!--<loading-bar v-if="showFlag"></loading-bar>-->
    </div>
</template>
<script>
    import Vue from 'vue'
    import qs from 'querystring'
//    import loadingBar from './loadingBar.vue'
    var num = 0
    export default {
        name: 'scholarDetail',
        data () {
            return {
                bookList: [],
                bookName: '',
                num: '',
                chooseShow: false,
                nolimit: 'nolimit',
                six: '2016',
                five: '2015',
                four: '2014',
                activeTime: '',
                about: 'about',
                cite: 'total_cite_count',
                timeDown: 'py',
                activeWay: '',
                pageNum: 1,
                normal: '',
                queryAch: {},
                showFlag: true
            }
        },
        computed: {},
        components: {
//            loadingBar
        },

        methods: {
//            查看是否有收藏和点赞
            collectionList(){
                let achUniques = []
                this.bookList.forEach((item) => {
                    achUniques.push(item.ach_unique)
                })
                this.$axios({
                    method: 'post',
                    url: '/v1/weChat/userToAch',
                    data: {
                        achUniques: achUniques
                    }
                }).then((res) => {
                    let array = res.data.data
                    let userIndex = []
                    let collectIndex = []
                    array.forEach((item, index) => {
                        if (item.isLike === 1) {
                            userIndex.push(index)
                        }
                        if (item.isFavorite === 1) {
                            collectIndex.push(index)
                        }
                    })
                    this.bookList.forEach((item) => {
                        userIndex.forEach((index) => {
                            this.$set(this.bookList[index], 'isLike', true)
                        })
                    })
                    this.bookList.forEach((item) => {
                        collectIndex.forEach((index) => {
                            this.$set(this.bookList[index], 'isFavorite', true)
                            document.getElementsByClassName('collectWord')[index].innerHTML = '已收藏'
                        })
                    })
                })
            },
            searchBook: function () {
                this.bookList = []
                this.queryAch.isNewQuery = true;
                this.loadMore()
            },
            // 控制筛选模块显示隐藏
            choose: function () {
                this.chooseShow = !this.chooseShow
            },
            // 选择筛选内容
            chooseTime: function (time) {
                this.activeTime = time
            },
            chooseSort: function (way) {
                this.activeWay = way
            },
            // 进入文献详情
            showMinute(ach_unique, index) {
                localStorage.setItem('typeof','文献')
                this.$store.commit('SET_ACHUNIQUE',ach_unique)
                localStorage.setItem('index', index)
                if (localStorage.getItem('openId')) {
                    this.$store.commit('SET_SCHOLARLIST', this.bookList)
                    this.$router.push({
                        path: '/findBook/bookResult/bookDetail'
                    })
                } else {
                    return
                }
            },
            recommend (item, index) {
                if (item.isLike == true) {
                    this.$set(item, 'isLike', false)
                    this.$axios({
                        method: 'delete',
                        url: '/v1/weChat/achLikes',
                        data: {
                            achUniques: [item.ach_unique],
                            dataType: "server"
                        }
                    })
                } else {
                    this.$set(item, 'isLike', true)
                    this.$axios({
                        method: 'post',
                        url: '/v1/weChat/achLike',
                        data: {
                            achUnique: item.ach_unique,
                            dataType: "server"
                        }
                    })
                }
            },
            collect (item, index) { //收藏
                if(item.isFavorite){  //
                    document.getElementById('cancelCollectBox').style.display = 'block'
                }else{
                    this.$axios({    //收藏
                        method: 'post',
                        url: '/v1/weChat/achFavorite',
                        data: {
                            "achUnique": item.ach_unique,
                            "title": item.title,
                            "achType": item.ach_type,
                            "dataType":"server"
                        }
                    }).then((res)=>{
                        document.getElementsByClassName('collectWord')[index].innerHTML = '已收藏'
                        this.$set(this.bookList[index], 'isFavorite', true)
                    })
                }
            },

            // 取消收藏弹框按钮
            cancel: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
//                document.getElementsByClassName('collectWord')[num].innerHTML = '已收藏'
            },
//        点击确定取消收藏
            confirm(bookListItem,index) {
                this.$axios({
                    method: 'delete',
                    url: '/v1/weChat/achFavorites',
                    data: {
                        achUniques: [bookListItem.ach_unique],
                        dataType: "server"
                    }
                }).then((res) => {
                    document.getElementsByClassName('collectWord')[index].innerHTML = '收藏'
                    document.getElementById('cancelCollectBox').style.display = 'none'
                    this.$set(this.bookList[index], 'isFavorite', false)
                })
            },
            loadMore () {
                let solrQuery = {
                    "q": "*:*",
                    "wt": "json",
                    "fl": "",
                    "indent": "off",
                    "defType": "edismax",
                    "mm": "75%",
                    "rows": 10,
                    "start": 0,
                    "sort": ''
                }
                if (this.queryAch.achTitle && this.queryAch.achTitle != '') {
                    solrQuery.q = 'allfields:"' + this.queryAch.achTitle + '"'
                } else {
                    solrQuery.q = '*:*'
                }
                if (this.activeTime != '') {
                    solrQuery.q += ' and py:[' + this.activeTime + ' TO *]'
                }
                if (this.activeWay && this.activeWay != '') {
                    solrQuery.sort = this.activeWay + ' asc'
                }
                solrQuery.start = (this.pageNum - 1) * 10
                this.$http.post('/indexPaperServer/achievement/select', qs.stringify(solrQuery))
                    .then((result) => {
                        this.showFlag = false
                        this.num = result.data.response.numFound
                        if (this.num > 0) {
                            if (this.queryAch.isNewQuery) {
                                this.bookList = []
                                this.bookList.push(...result.data.response.docs)
                                this.queryAch.isNewQuery = false
                            } else {
                                this.bookList.push(...result.data.response.docs)
                            }
                            this.pageNum++
                        }
                        this.busy = false
                        this.collectionList()  //用户操作记录
                    })
            }
        },
        mounted () {
            this.queryAch = this.$store.state.queryAch

        }
    }
</script>
<style media="screen">
    #mainChoose {
        position: fixed !important;
        top: 0rem;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: rgba(0, 0, 0, 0.28);
    }

    .searchTop input {
        background: #ffffff;
    }
</style>
