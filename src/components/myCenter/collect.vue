<template>
    <div id="collect">
        <section class="collectBox">
            <ul class="contentMain">
                <li class="contentItem" v-for="(collectItem,index) in collectItems">
                    <div class="wordsCon" @click="gotoDetails(collectItem,index)">
                        <p class="coreCon">{{collectItem.achTitle}}</p>
                        <p class="authorItem"><span class="authorTit">作者：</span><span
                                class="authorName">{{collectItem.achAuthor ? '' : collectItem.achAuthor}}</span>
                        </p>
                        <p class="abstractItem"><span class="abstractTit">摘要：</span><span class="abstractCon"></span>
                        </p>
                        <p class="eachCitedNum">被引用次数：<span></span></p>
                    </div>
                    <ul class="userBtns clrfix">
                        <li @click="gotoDetails(collectItem,index)"><span class="iconfont icon-remark"></span><span class="word">评论</span></li>
                        <li @click="recommend(collectItem,index)" :class="{active:collectItem.isLike}"><span
                                class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
                        <li><span class="iconfont icon-share"></span><span class="word">分享</span></li>
                        <li @click="collect(collectItem,index)" class="active"><span
                                class="iconfont icon-collect"></span><span class="collectWord word">已收藏</span></li>
                    </ul>
                    <section id="cancelCollectBox" v-if="showFlag" style="background: rgba(0,0,0,0.05)">
                        <div class="alertBox">
                            <p class="tip">
                                <span class="iconfont icon-warn"></span>
                                <span class="tipWord">您确定要取消收藏吗?</span>
                            </p>
                            <div class="operate">
                                <span class="cancel" @click="cancel">取消</span>
                                <span class="confirm" @click="confirm(collectItem)">确定</span>
                            </div>
                        </div>
                    </section>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    import axios from 'axios'
    import {mapGetters} from 'vuex'
    import Vue from 'vue'
    var num = 0
    export default {
        data () {
            return {
                collectItems: [],
                showFlag: false,
            }
        },
        computed: {
            ...mapGetters([
                'getUserInfo',
                'getDatatype'
            ])
        },
        methods: {
            //点赞接口
            recommend (item, index) {
                console.log(item)
                if(item.isLike == true){ //取消点赞
                    this.$set(item,'isLike',false)
                    this.$axios({
                        method: 'delete',
                        url: '/v1/weChat/achLikes',
                        data: {
                            achUniques: [item.achUnique],
                            dataType:this.getDatatype.type
                        }
                    })
                }else{
                    this.$set(item,'isLike',true)
                    this.$axios({
                        method: 'post',
                        url: '/v1/weChat/achLike',
                        data: {
                            achUnique: item.achUnique,
                            dataType: this.getDatatype.type
                        }
                    })
                }
            },
            //收藏
            collect(item, index) {
                this.showFlag = true
            },
            // 取消收藏弹框按钮
            cancel: function () {
                this.showFlag = false
            },
            // 点击确定
            confirm (item){
                console.log(item.achUnique)
                this.showFlag = false
                this.$axios({
                    method: 'delete',
                    url: '/v1/weChat/achFavorites',
                    data: {
                        achUniques: [item.achUnique]
                    }
                }).then((res) => {
                    this.collectList()
                })
            },
            //查看是否有点赞
            thumbUp(){
                let achUnique = []
                this.collectItems.forEach((item) => {
                    achUnique.push(item.achUnique)
                })
                this.$axios({
                    method: 'post',
                    url: '/v1/weChat/userToAch',
                    data: {
                        achUniques: achUnique
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
                    this.collectItems.forEach((item) => {
                        userIndex.forEach((index) => {
                            this.$set(this.collectItems[index], 'isLike', true)
                        })
                    })
                    this.collectItems.forEach((item) => {
                        collectIndex.forEach((index) => {
                            this.$set(this.collectItems[index], 'isFavorite', true)
                        })
                    })
                })
            },
            collectList(){
                let userId = JSON.parse(localStorage.getItem('userInfo')).id
                this.$axios.get('/v1/weChat/achFavorites', {
                    params: {
                        userId: userId,
                    }
                }).then((res) => {
                    this.collectItems = res.data.data
                    this.$store.commit('SET_SCHOLARLIST',res.data.data)
                    this.thumbUp()
                })
            },
            gotoDetails(item,index){ //跳转详情页
                let q = {
                    type:item.dataType,
                    scholarUnique:item.achUnique
                }
                this.$store.dispatch('saveScholarInfo',q);
                this.$router.push({
                    path:'/findBook/bookResult/bookDetail'
                })
                localStorage.setItem('index',index)
            }
        },
        mounted(){
            this.collectList()
        }
    }
</script>
<style scoped="true">
    #collect .collectBox {
        margin-bottom: 0.9rem;
    }
    #collect .collectBox .contentMain .contentItem {
        padding-top: .17rem;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: 0.2rem;
    }

    #collect .collectBox .contentMain .contentItem .wordsCon {
        margin: 0 0.15rem;
        padding: 0 .29rem;
        box-sizing: border-box;
    }

    #collect .collectBox .contentMain .contentItem .wordsCon .coreCon {
        font-size: .28rem;
        color: #000;
        line-height: .4rem;
        font-family: "微软雅黑";
    }

    #collect .collectBox .contentMain .contentItem .wordsCon .eachCitedNum {
        font-size: .18rem;
        color: #858585;
        line-height: .4rem;
        margin-bottom: 0.1rem;
    }

    #collect .collectBox .contentMain .contentItem .wordsCon .eachCitedNum span {
        color: #ffb656;
    }

    #collect .collectBox .contentMain .contentItem .wordsCon .authorItem {
        font-size: .22rem;
        color: #000;
        line-height: .4rem;
        margin-bottom: 0.04rem;
    }

    #collect .collectBox .contentMain .contentItem .wordsCon .abstractItem {
        font-size: .22rem;
        color: #5c5c5c;
        line-height: .4rem;
        margin-bottom: 0.05rem;
    }

    #collect .collectBox .contentMain .contentItem .wordsCon .authorItem .authorName {
        color: #ffb656;
    }

    #collect .collectBox .contentMain .contentItem .userBtns {
        height: .6rem;
        background: #fff;
        border-top: 1px solid #ddd;
    }

    #collect .collectBox .contentMain .contentItem .userBtns li {
        width: 24.7%;
        float: left;
        font-size: .25rem;
        line-height: .6rem;
        padding: 0 2%;
        box-sizing: border-box;
        text-align: center;
        border-right: 1px solid #ddd;
    }

    #collect .collectBox .contentMain .contentItem .userBtns li.active {
        color: #43dabb;
    }

    #collect .collectBox .contentMain .contentItem .userBtns li:nth-of-type(4) {
        border-right: none;
    }

    #collect .collectBox .contentMain .contentItem .userBtns li .iconfont {
        float: left;
        font-size: .4rem;
        margin: 0 0.02rem 0 0.06rem;
    }

    #collect .collectBox .contentMain .contentItem .userBtns li .word {
        font-size: .25rem;
        float: left;

    }
</style>
