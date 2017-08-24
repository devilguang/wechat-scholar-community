<template lang="html">
    <div id="recommendDetail">
        <section class="top">
            <span class="whichField">{{fieldChoose}}</span>
            <div class="selectBtn">
                <span class="iconfont icon-choose"></span>
                <span class="word" @click="selectBtn">筛选</span>
            </div>
        </section>

        <section id="selectBox" v-show='selectShow'>
            <div class="chooseArea">
                <h3>选择查看领域</h3>
                <ul class="fieldBox clrfix">
                    <li @click="selectField(fieldItem,index)" class="fieldItem" v-for="(fieldItem,index) in fieldItems"
                        :class="{active:fieldActive == index}">{{fieldItem.fieldName}}
                    </li>
                </ul>
            </div>
        </section>


        <section class="recommendBox">
            <ul class="contentMain">
                <li class="contentItem" v-for="(recommendItem,index) in recommendItems">
                    <div class="wordsCon">
                        <p class="coreCon">{{recommendItem.bookTitle}}</p>
                        <p class="authorItem"><span class="authorTit">作者：</span><span class="authorName">李瑞，胡勇军</span>
                        </p>
                        <p class="abstractItem"><span class="abstractTit">摘要：</span><span class="abstractCon">三十功名尘与土，八千里路云和月。莫等闲白了少年头，空故今日之责任，不在他人而全在我少年。少年智则国智少年富则国富少年强则</span>
                        </p>
                        <p class="eachCitedNum">被引用次数：<span>3</span></p>
                    </div>
                    <ul class="userBtns clrfix">
                        <li><span class="iconfont icon-remark"></span><span class="word">评论</span></li>
                        <li @click="recommend(recommendItem,index)" :class="{active:recommendItem.recommendActive}">
                            <span class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
                        <li><span class="iconfont icon-share"></span><span class="word">分享</span></li>
                        <li @click="collect(recommendItem,index)" :class="{active:recommendItem.collectActive}"><span
                                class="iconfont icon-collect"></span><span class="collectWord word">收藏</span></li>
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
    var num = 0
    export default {
        data () {
            return {
                recommendItems: [],
                fieldItems: [
                    {
                        fieldName: '全部'
                    }, {
                        fieldName: '作物学'
                    }, {
                        fieldName: '园艺学'
                    }, {
                        fieldName: '兽医学'
                    }, {
                        fieldName: '畜牧学'
                    }, {
                        fieldName: '植被保护'
                    }, {
                        fieldName: '农业资源与环境'
                    }
                ],
                fieldActive: '',
                fieldChoose: '全部',
                selectShow: false
            }
        },
        methods: {
            selectBtn: function () {
                this.selectShow = !this.selectShow
            },
            selectField: function (item, index) {
                this.fieldActive = index
                this.fieldChoose = item.fieldName
            },
            recommend: function (item, index) {
                if ((typeof item.recommendActive) === 'undefined') {
                    Vue.set(this.recommendItems[index], 'recommendActive', true)
                } else {
                    item.recommendActive = !item.recommendActive
                }
            },
            collect: function (item, index) {
                num = index
                if ((typeof item.collectActive) === 'undefined') {
                    Vue.set(this.recommendItems[index], 'collectActive', true)
                } else {
                    item.collectActive = !item.collectActive
                }
                if (item.collectActive === true) {
                    // item.innerHTML = '已收藏'
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
                Vue.set(this.recommendItems[num], 'collectActive', true)
                document.getElementsByClassName('collectWord')[num].innerHTML = '已收藏'
            },
            confirm: function () {
                document.getElementById('cancelCollectBox').style.display = 'none'
                Vue.set(this.recommendItems[num], 'collectActive', false)
            }
        },
        mounted () {
            axios.get('../../../static/mock-data/userInfo.json')
                .then((response) => {
                    // 先模拟用一个用户的信息
                    this.userInfo = response.data[0]
                    this.recommendItems = this.userInfo.collect
                })

        }
    }
</script>

<style lang="css">
    #selectBox {
        position: fixed;
        top: .78rem;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: rgba(0, 0, 0, 0.28) !important;
    }

    #selectBox .chooseArea {
        padding: .24rem .29rem .17rem .29rem;
        box-sizing: border-box;
        background: #fff;
    }

    #selectBox .chooseArea h3 {
        color: #9c9c9c;
        line-height: .6rem;
        font-size: .26rem;
        font-weight: normal;
    }

    #selectBox .chooseArea .fieldBox .fieldItem {
        float: left;
        line-height: .71rem;
        font-size: .26rem;
        color: #000;
        margin: 0 0.18rem;
    }

    #selectBox .chooseArea .fieldBox .fieldItem.active {
        color: #ffb656;
    }

    #recommendDetail .top {
        position: fixed;
        top: 0;
        width: 100%;
        height: .78rem;
        background: #fff;
        padding: 0 .29rem;
        box-sizing: border-box;
        border-bottom: 1px solid #f2f2f2;
    }

    #recommendDetail .top .whichField {
        font-size: .24rem;
        color: #000;
        line-height: .78rem;
    }

    #recommendDetail .top .selectBtn {
        font-size: .24rem;
        height: .4rem;
        padding: 0 .18rem;
        box-sizing: border-box;
        float: right;
        line-height: .4rem;
        color: #fff;
        background: #36d7b6;
        margin-top: .19rem;
        border-radius: 0.08rem;
    }

    #recommendDetail .top .selectBtn .icon-choose, #recommendDetail .top .selectBtn .word {
        font-size: .24rem;
    }

    #recommendDetail .recommendBox {
        margin-bottom: 0.9rem;
        margin-top: .78rem;
    }

    #recommendDetail .recommendBox .contentMain .contentItem {
        padding-top: .17rem;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: 0.2rem;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .wordsCon {
        margin: 0 0.15rem;
        padding: 0 .29rem;
        box-sizing: border-box;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .wordsCon .coreCon {
        font-size: .28rem;
        color: #000;
        line-height: .4rem;
        font-family: "微软雅黑";
    }

    #recommendDetail .recommendBox .contentMain .contentItem .wordsCon .eachCitedNum {
        font-size: .18rem;
        color: #858585;
        line-height: .4rem;
        margin-bottom: 0.1rem;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .wordsCon .eachCitedNum span {
        color: #ffb656;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .wordsCon .authorItem {
        font-size: .22rem;
        color: #000;
        line-height: .4rem;
        margin-bottom: 0.04rem;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .wordsCon .abstractItem {
        font-size: .22rem;
        color: #5c5c5c;
        line-height: .4rem;
        margin-bottom: 0.05rem;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .wordsCon .authorItem .authorName {
        color: #ffb656;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .userBtns {
        height: .6rem;
        background: #fff;
        border-top: 1px solid #ddd;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .userBtns li {
        width: 24.7%;
        float: left;
        font-size: .25rem;
        line-height: .6rem;
        padding: 0 2%;
        box-sizing: border-box;
        text-align: center;
        border-right: 1px solid #ddd;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .userBtns li.active {
        color: #43dabb;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .userBtns li:nth-of-type(4) {
        border-right: none;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .userBtns li .iconfont {
        float: left;
        font-size: .4rem;
        margin: 0 0.02rem 0 0.06rem;
    }

    #recommendDetail .recommendBox .contentMain .contentItem .userBtns li .word {
        font-size: .25rem;
        float: left;
    }
</style>
