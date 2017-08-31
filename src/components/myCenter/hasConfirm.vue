<template>
    <div id="hasConfirm">
        <div class="top">
            <p class="fruitMag" @click="fruitMag"><span class="iconfont icon-manegement"></span>成果管理</p>
        </div>

        <div class="fruitTip">
            <div class="flowerBox">
                <span class="iconfont icon-flower"></span>
            </div>
            <p>共找到121条成果记录</p>
        </div>
        <section class="hasConfirmBox">
            <!--<indicator-bar v-if="showFlag" style="margin-top: 30px;"></indicator-bar>-->
            <ul class="contentMain">
                <li class="contentItem" v-for="(myFruitItem,index) in myFruitItems">
                    <div class="wordsCon">
                        <p class="coreCon">{{myFruitItem.bookTitle}}</p>
                        <p class="authorItem"><span class="authorTit">作者：</span><span class="authorName">李瑞，胡勇军</span>
                        </p>
                        <p class="abstractItem"><span class="abstractTit">摘要：</span><span class="abstractCon">三十功名尘与土，八千里路云和月。莫等闲白了少年头，空故今日之责任，不在他人而全在我少年。少年智则国智少年富则国富少年强则</span>
                        </p>
                        <p class="eachCitedNum">被引用次数：<span>3</span></p>
                    </div>
                    <ul class="userBtns clrfix">
                        <li><span class="iconfont icon-remark"></span><span class="word">评论</span></li>
                        <li @click="recommend(myFruitItem,index)" :class="{active:myFruitItem.recommendActive}"><span
                                class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
                        <li><span class="iconfont icon-share"></span><span class="word">分享</span></li>
                        <li @click="collect(myFruitItem,index)" :class="{active:myFruitItem.collectActive}"><span
                                class="iconfont icon-collect"></span><span class="collectWord">收藏</span></li>
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
    import Vue from 'vue'
    import indicatorBar from '../../views/indicator.vue'
    var num = 0
    export default {
        data () {
            return {
                myFruitItems: [],
                showFlag:true
            }
        },
        components: {
            indicatorBar
        },
        methods: {
            fruitMag: function () {
                this.$router.push({
                    path: 'management'
                })
            },
            recommend: function (item, index) {
                if ((typeof item.recommendActive) === 'undefined') {
                    Vue.set(this.myFruitItems[index], 'recommendActive', true)
                } else {
                    item.recommendActive = !item.recommendActive
                }
            },
            collect: function (item, index) {
                num = index
                if ((typeof item.collectActive) === 'undefined') {
                    Vue.set(this.myFruitItems[index], 'collectActive', true)
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
            cancel: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
                Vue.set(this.myFruitItems[num], 'collectActive', true)
                document.getElementsByClassName('collectWord')[num].innerHTML = '已收藏'
            },
            confirm: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
                Vue.set(this.myFruitItems[num], 'collectActive', false)
            }
        },
        mounted () {
            axios.get('../../../static/mock-data/userInfo.json')
                .then((response) => {
                    this.showFlag = false
                    console.log(response.data)
                    // 先模拟用一个用户的信息
                    this.userInfo = response.data[0]
                    this.myFruitItems = this.userInfo.myFruit
                }).then((error) => console.log(error))
        }
    }
</script>
<style>
    #hasConfirm .top {
        height: .79rem;
        background: #fff;
    }

    #hasConfirm .top .tit {
        height: .58rem;
        display: block;
        line-height: .58rem;
        float: left;
        font-size: .28rem;
        margin-top: 0.06rem;

    }

    #hasConfirm .top .fruitMag {
        width: 1.74rem;
        height: .46rem;
        background: #36d7b6;
        color: #fff;
        line-height: .46rem;
        font-size: .26rem;
        padding: 0 .19rem;
        box-sizing: border-box;
        float: right;
        border-radius: 0.08rem;
        margin: .16rem .29rem 0 0;
    }

    #hasConfirm .top .fruitMag span {
        color: #fff;
        font-size: .24rem;
    }

    #hasConfirm .fruitTip {
        height: .95rem;
        background: #f5f5f9;
        border-bottom: 1px solid #e8e8ea;
        padding: .21rem 0 0 .29rem;
        box-sizing: border-box;
    }

    #hasConfirm .fruitTip .flowerBox {
        background: #bbb;
        width: .58rem;
        height: .58rem;
        border-radius: 50%;
        float: left;
        margin-right: .19rem;
    }

    #hasConfirm .fruitTip .flowerBox span {
        color: #fff;
        line-height: .58rem;
        text-align: center;
        font-size: .46rem;
        width: .58rem;
        display: block;
    }

    #hasConfirm .fruitTip p {
        font-size: .22rem;
        color: #000;
        line-height: .58rem;
    }

    #hasConfirm .hasConfirmBox {
        margin-bottom: 0.9rem;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem {
        padding-top: .17rem;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: 0.2rem;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon {
        margin: 0 0.15rem;
        padding: 0 .29rem;
        box-sizing: border-box;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .coreCon {
        font-size: .28rem;
        color: #000;
        line-height: .4rem;
        font-family: "微软雅黑";
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .eachCitedNum {
        font-size: .18rem;
        color: #858585;
        line-height: .4rem;
        margin-bottom: 0.1rem;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .eachCitedNum span {
        color: #ffb656;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .authorItem {
        font-size: .22rem;
        color: #000;
        line-height: .4rem;
        margin-bottom: 0.04rem;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .abstractItem {
        font-size: .22rem;
        color: #5c5c5c;
        line-height: .4rem;
        margin-bottom: 0.05rem;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .wordsCon .authorItem .authorName {
        color: #ffb656;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns {
        height: .6rem;
        background: #fff;
        border-top: 1px solid #ddd;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li {
        width: 24.7%;
        float: left;
        font-size: .25rem;
        line-height: .6rem;
        padding: 0 2%;
        box-sizing: border-box;
        text-align: center;
        border-right: 1px solid #ddd;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li.active {
        color: #36d7b6;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li:nth-of-type(4) {
        border-right: none;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li span {
        float: left;
        font-size: .4rem;
        margin: 0 0 0 0.06rem;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li span:nth-of-type(1) {
        float: left;
        width: .34rem;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li .collectWord {
        font-size: .24rem;
    }

    #hasConfirm .hasConfirmBox .contentMain .contentItem .userBtns li .word {
        font-size: .25rem;
        float: left;
    }
</style>
