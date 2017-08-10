<template>
    <div id="collect">
        <section class="collectBox">
            <ul class="contentMain">
                <li class="contentItem" v-for="(collectItem,index) in collectItems">
                    <div class="wordsCon">
                        <p class="coreCon">{{collectItem.achTitle}}</p>
                        <p class="authorItem"><span class="authorTit">作者：</span><span class="authorName">{{collectItem.achAuthor?'':collectItem.achAuthor}}</span>
                        </p>
                        <p class="abstractItem"><span class="abstractTit">摘要：</span><span class="abstractCon"></span>
                        </p>
                        <p class="eachCitedNum">被引用次数：<span></span></p>
                    </div>
                    <ul class="userBtns clrfix">
                        <li><span class="iconfont icon-remark"></span><span class="word">评论</span></li>
                        <li @click="recommend(collectItem,index)" :class="{active:collectItem.recommendActive}"><span
                                class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
                        <li><span class="iconfont icon-share"></span><span class="word">分享</span></li>
                        <li @click="collect(collectItem,index)" class="active"><span
                                class="iconfont icon-collect"></span><span class="collectWord word">已收藏</span></li>
                    </ul>
                </li>
            </ul>
        </section>
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
    import axios from 'axios'
    import {mapGetters} from 'vuex'
    import Vue from 'vue'
    var num = 0
    export default {
        data () {
            return {
                collectItems:[],
            }
        },
        computed: {
            ...mapGetters([
                'getUserInfo',
                'getDatatype'
            ])

        },
        methods: {
            recommend: function (item, index) {
                if ((typeof item.recommendActive) === 'undefined') {
                    Vue.set(this.collectItems[index], 'recommendActive', true)
                } else {
                    item.recommendActive = !item.recommendActive
                }
            }
            ,
            collect: function (item, index) {
                num = index
                if ((typeof item.collectActive) === 'undefined') {
                    Vue.set(this.collectItems[index], 'collectActive', true)
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
            }
            ,
            // 取消收藏弹框按钮
            cancel: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
                Vue.set(this.collectItems[num], 'collectActive', true)
                document.getElementsByClassName('collectWord')[num].innerHTML = '已收藏'
            }
            ,
            confirm: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
                Vue.set(this.collectItems[num], 'collectActive', false)
            }
        },
        mounted(){
//                console.log(this.getDatatype.type)
                this.$axios.get('/v1/weChat/achFavorites',{
                    params: {
                        userId: '58805440-b163-4b49-8ce2-6f9bbc6995d1',
                    }
                }).then((res)=>{
                    this.collectItems = res.data.data
//                    let achArr = []
//                    let achUniqueArr =  res.data.data
//                    achUniqueArr.forEach((item) =>{
//                        achArr.push(item.achUnique)
//                    })
//                    this.$axios.get('/v1/weChat/achievement',{params:{achUnique:achArr}}).then((res)=>{
//                        console.log(res)
//                    })

                })
        }
    }

</script>
<style>
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
