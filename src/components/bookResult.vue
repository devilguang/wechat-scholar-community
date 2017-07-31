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
                    <span :class="{active: activeWay == about}" @click="chooseSort(about)">按相关性</span>
                    <span :class="{active: activeWay == cite}" @click="chooseSort(cite)">按被引量</span>
                    <span :class="{active: activeWay == timeDown}" @click="chooseSort(timeDown)">按时间降序</span>
                </section>
            </article>
        </article>
        <article class="bookList">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
                class="clrfix">
                <li class="bookListItem" v-for="(bookListItem,index) in bookList" @click="toBookDetail()">
                    <!-- <router-link :to="{ name: 'bookDetail', params: { bookID: bookListItem.bookID }}"> -->
                    <p class="bookTitle">{{bookListItem.title}}</p>
                    <p class="bookBrief"><span class="author">{{bookListItem.author && bookListItem.author.length > 0 ? bookListItem.author.join(',') : ''}}</span><span> —{{bookListItem.yvip}}</span><span></span>
                    </p>
                    <p v-if="bookListItem.ab" class="abstract"><span>摘要:</span><span>{{bookListItem.ab}}</span></p>
                    <!-- </router-link> -->
                    <ul class="userBtns clrfix">
                        <li class="clrfix"><span class="iconfont icon-remark"></span><span class="word">评论</span></li>
                        <li @click="recommend(bookListItem,index)" :class="{active:bookListItem.recommendActive}"><span
                                class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
                        <li class="clrfix"><span class="iconfont icon-share"></span><span class="word">分享</span></li>
                        <li @click="collect(bookListItem,index)" :class="{active:bookListItem.collectActive}"><span
                                class="iconfont icon-collect"></span><span class="collectWord word">收藏</span></li>
                    </ul>
                </li>
            </ul>
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
    </div>
</template>


<script>
    import Vue from 'vue'
    import qs from 'querystring'

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
                six: 'six',
                five: 'five',
                four: 'four',
                activeTime: '',
                about: 'about',
                cite: 'cite',
                timeDown: 'timeDown',
                activeWay: '',
                pageNum: 1,
                queryAch: {}
            }
        },
        methods: {
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
            toBookDetail: function () {
                if (!this.loginJudge()) {
                    this.$router.push({
                        path: '/findBook/bookResult/bookDetail/1'
                    })
                } else {
                    return
                }
            },
            recommend: function (item, index) {
                // set设置数据相应 增加data里面的 一个recommendActive 属性 可以控制高亮
                if ((typeof item.recommendActive) === 'undefined') {
                    Vue.set(this.bookList[index], 'recommendActive', true)
                } else {
                    item.recommendActive = !item.recommendActive
                }
            },
            collect: function (item, index) {
                num = index
                if ((typeof item.collectActive) === 'undefined') {
                    Vue.set(this.bookList[index], 'collectActive', true)
                } else {
                    item.collectActive = !item.collectActive
                }
                if (item.collectActive === true) {
                    // item.innerHTML = '已收藏'
                    console.log(item)
                    document.getElementsByClassName('collectWord')[index].innerHTML = '已收藏'
                }
                if (item.collectActive === false) {
                    document.getElementsByClassName('collectWord')[index].innerHTML = '收藏'
                    document.getElementById('cancelCollectBox').style.display = 'block'
                }
            },
            // 取消收藏弹框按钮
            cancel: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
                Vue.set(this.bookList[num], 'collectActive', true)
                document.getElementsByClassName('collectWord')[num].innerHTML = '已收藏'
            },
            confirm: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
                Vue.set(this.bookList[num], 'collectActive', false)
            },
            loadMore: function () {
                let solrQuery = {
                    "q": "*:*",
                    "wt": "json",
                    "fl": "",
                    "indent": "off",
                    "defType": "edismax",
                    "mm": "75%",
                    "rows": 10,
                    "start": 0
                }
                if (this.queryAch.achTitle && this.queryAch.achTitle != '') {
                    solrQuery.q = 'allfields:"' + this.queryAch.achTitle + '"'
                } else {
                    solrQuery.q = '*:*'
                }

                solrQuery.start = (this.pageNum - 1) * 10
                this.$http.post('/indexPaperServer/achievement/select', qs.stringify(solrQuery))
                    .then((result) => {
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
                    }).then((error) => console.log(error))
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
</style>
