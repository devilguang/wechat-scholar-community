<template lang="html">
    <section class="tabContent" id="sDtab01">
        <!--div class="contentTop"-->
            <!-- 复选下拉框没写 占位 -->
            <!--div class="allFruits">全部成果</div -->
            <!--p class="citedNum"><span>{{infos.cite ? '被引次数：' + infos.cite : ''}}</span></p-->
        <!-- /div -->
        <indicator-bar v-if="barFlag" style="margin-top: 30px"></indicator-bar>
        <ul v-if="type == 'wd'" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
            class="contentMain">
            <li class="contentItem" v-for="(detailItem,index) in detailItems" >
                <div class="wordsCon" @click="showDetails(detailItem,index)">
                    <p class="coreCon">{{detailItem.title}}</p>
                    <p class="authorItem">{{detailItem.pub_name}} {{detailItem.yvip || detailItem.py}}</p>
                    <!-- <p class="authorItem">{{detailItem.author.length > 0 ? detailItem.author.join(';').substring(0, 45) + '...' : ''}}</p> -->
                    <p class="eachCitedNum">被引次数：{{detailItem.cite_count||CITE_COUNT.length > 0 ? detailItem.cite_count[0] : '-'}}</p>
                </div>
                <ul class="userBtns clrfix">
                    <li style="font-size:0.23rem" @click="discuss(detailItem,index)"><span class="iconfont icon-remark" style="font-size: 0.35rem"></span>评论</li>
                    <li style="font-size:0.23rem" @click="recommend(detailItem,index)" :class="{active:detailItem.isLike?detailItem.isLike:false}">
                        <span class="iconfont icon-recommendBtn" style="font-size: 0.35rem"></span>推荐
                    </li>
                    <li style="font-size:0.23rem"><span class="iconfont icon-share" style="font-size: 0.35rem"></span>分享</li>
                    <li style="font-size:0.23rem" @click="collect(detailItem,index)" :class="{active:detailItem.isFavorite?detailItem.isFavorite:false}">
                        <span class="iconfont icon-collect" style="font-size: 0.35rem"></span>{{detailItem.isFavorite? '已收藏':'收藏'}}
                    </li>
                </ul>
            </li>
        </ul>
        <ul v-if="type == 'server'" class="contentMain">
            <li class="contentItem" v-for="(detailItem,index) in docItems" >
                <div class="wordsCon">
                    <p class="coreCon">{{detailItem.title}}</p>
                    <p class="authorItem">{{detailItem.docAuthors}}</p>
                    <p class="authorItem">{{detailItem.source}} {{detailItem.ym}}</p>
                    <p class="eachCitedNum">被引次数：{{detailItem.cites}}</p>
                </div>
                <ul class="userBtns clrfix">
                    <li style="font-size:0.23rem" ><span class="iconfont icon-remark" style="font-size: 0.35rem"></span>评论</li>
                    <li style="font-size:0.23rem" @click="recommend(detailItem,index)" :class="{active:detailItem.isLike?detailItem.isLike:false}">
                        <span class="iconfont icon-recommendBtn" style="font-size: 0.35rem"></span>推荐
                    </li>
                    <li style="font-size:0.23rem"><span class="iconfont icon-share" style="font-size: 0.35rem"></span>分享</li>
                    <li style="font-size:0.23rem" :class="{active:detailItem.isFavorite?detailItem.isFavorite:false}">
                        <span class="iconfont icon-collect" style="font-size: 0.35rem"></span>{{detailItem.isFavorite? '已收藏':'收藏'}}
                    </li>
                </ul>
            </li>
        </ul>
        <section id="cancelCollectBox" v-show="showFlag" style="background: rgba(0,0,0,0.1)" >
                <div class="alertBox">
                    <p class="tip">
                        <span class="iconfont icon-warn"></span>
                        <span class="tipWord">您确定要取消收藏吗?</span>
                    </p>
                    <div class="operate">
                        <span class="cancel" @click="showFlag= false">取消</span>
                        <span class="confirm" @click="confirm()">确定</span>
                    </div>
                </div>
             </section>
    </section>
</template>
<script>
    import qs from 'querystring'
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    import indicatorBar from '../views/indicator.vue'
    export default {
        data() {
            return {
                detailItems: [],
                pageNum: 1,
                isLike: '',
                showFlag:false,
                meassage:'收藏',
                ach_unique:'',
                index:'',
                barFlag: true,
                type: 'server'
            }
        },
        props: [
            'docItems'
        ],
        components:{
            indicatorBar
        },
        computed:{
            ...mapGetters([
                'getDatatype'
            ])
        },
        methods: {
            recommend(item, index) { // 点赞
                if(item.isLike == true){
                    this.$set(item,'isLike',false)
                    this.$axios({
                        method: 'delete',
                        url: '/v1/weChat/achLikes',
                        data: {
                            achUniques: [item.ach_unique],
                            dataType:this.getDatatype.type
                        }
                    })
                }else{
                    this.$set(item,'isLike',true)
                    this.$axios({
                        method: 'post',
                        url: '/v1/weChat/achLike',
                        data: {
                            achUnique: item.ach_unique,
                            dataType: this.getDatatype.type
                        }
                    })
                }
            },
            // 收藏
            collect(item, index) {
                this.index = index
                this.ach_unique = item.ach_unique
                this.$store.commit('SET_ACHUNIQUE',item.ach_unique)
                if(item.isFavorite){  //取消收藏
                    this.showFlag = true
                }else{
                    this.$axios({
                        method: 'post',
                        url: '/v1/weChat/achFavorite',
                        data: {
                            "achUnique": item.ach_unique,
                            "title": item.title,
                            "achType": item.ach_type,
                            "dataType":this.getDatatype.type
                             }
                        }).then((res)=>{
                        this.$set(item,'isFavorite',true)
                        this.showFlag = false
                    })
                }
            },
            confirm(){  //取消收藏
                this.$axios({
                    method: 'delete',
                    url: '/v1/weChat/achFavorites',
                    data: {
                        achUniques: [this.ach_unique],
                    }
                }).then((res) => {
                    this.showFlag = false
                    this.$set(this.detailItems[this.index],'isFavorite',false)
                })
            },
            loadMore () {
                if (this.$store.state.scholarInfo.type == 'wd') {
                    this.busy = true;
                    var solrQuery = {
                        "q": "*:*",
                        "wt": "json",
                        "fl": "",
                        "indent": "off",
                        "rows": 10,
                        "start": 0,
                    }
                    solrQuery.start = (this.pageNum - 1) * 10;
                    solrQuery.q = 'claims:"' + this.$store.state.scholarInfo.scholarUnique + '"';
                    this.$http.post('/indexWD/achievement/select', qs.stringify(solrQuery))
                        .then((response) => {
                            this.barFlag = false
                            this.detailItems.push(...response.data.response.docs)
                            this.pageNum++
                            this.busy = false
                            let arr = []
//                            this.$store.
                            this.detailItems.forEach((item,index) =>{
                                arr.push(item.ach_unique)
                            })

                            //  用户对成果的操作记录
                            this.$axios({
                                method:'post',
                                url:'/v1/weChat/userToAch',
                                data:{
                                    achUniques:arr
                                }
                            }).then((res)=>{
                                let array = res.data.data
                                let userIndex = []
                                let collectIndex = []
                                array.forEach((item,index)=> {
                                    if(item.isLike ===1){
                                        userIndex.push(index)
                                    }
                                    if(item.isFavorite ===1){
                                        collectIndex.push(index)
                                    }
                                })
                                this.detailItems.forEach((item)=>{
                                    userIndex.forEach((index)=> {
                                        this.$set(this.detailItems[index],'isLike',true)
                                    })
                                })
                                this.detailItems.forEach((item)=>{
                                    collectIndex.forEach((index)=> {
                                        this.$set(this.detailItems[index],'isFavorite',true)
                                    })
                                })
                            })

                        })
                } else {
                    let solrQueryWechat = {
                        "q": "*:*",
                        "wt": "json",
                        "fl": "TITLE,PUB_NAME_CH,CITE_COUNT,PY,GROUP_AU,ACH_UNIQUE",
                        "indent": "off",
                        "rows": 10,
                        "start": 0
                    }
                    let keymap = {
                        TITLE: 'title',
                        PUB_NAME_CH: 'pub_name',
                        CITE_COUNT: 'cite_count',
                        PY: 'py',
                        GROUP_AU: 'author',
                        ACH_UNIQUE:'ach_unique'
                    }
                    solrQueryWechat.start = (this.pageNum - 1) * 10;
                    solrQueryWechat.q = 'scholar_info_id:"' + this.$store.state.scholarInfo.scholarUnique + '"';
                    this.$http.post('/indexServer/scholar_paper/select', qs.stringify(solrQueryWechat))
                        .then((result) => {
                            this.barFlag = false
                            var server_docs = []
                            _(result.data.response.docs).forEach(function (doc) {
                                doc = _.mapKeys(doc, function (value, key) {
                                    return keymap[key]
                                })
                                var cite_count = []
                                if (doc['cite_count']){
                                    cite_count.push(doc['cite_count'])
                                }
                                doc['cite_count'] = cite_count
                                server_docs.push(doc)
                            })
                            this.detailItems.push(...server_docs)
                            this.pageNum++
                            this.busy = false
                            let arr = []
                            this.detailItems.forEach((item,index) =>{
                                arr.push(item.ach_unique)
                            })
                            //  用户对成果的操作记录
                            this.$axios({
                                method:'post',
                                url:'/v1/weChat/userToAch',
                                data:{
                                    achUniques:arr
                                }
                            }).then((res)=>{
                                let array = res.data.data
                                let userIndex = []
                                let collectIndex = []
                                array.forEach((item,index)=> {
                                    if(item.isLike ===1){
                                        userIndex.push(index)
                                    }
                                    if(item.isFavorite ===1){
                                        collectIndex.push(index)
                                    }
                                })
                                this.detailItems.forEach((item)=>{
                                    userIndex.forEach((index)=> {
                                        this.$set(this.detailItems[index],'isLike',true)
                                    })
                                })
                                this.detailItems.forEach((item)=>{
                                    collectIndex.forEach((index)=> {
                                        this.$set(this.detailItems[index],'isFavorite',true)
                                    })
                                })
                            })
                        })
                }
            },
            //进入文献详情
            showDetails(item,index){
                localStorage.setItem('index',index)
                this.$store.commit('SET_SCHOLARLIST',this.detailItems)
                this.$store.commit('SET_ACHUNIQUE',item.ach_unique)
                this.$router.push({
                    path:'/findBook/bookResult/bookDetail'
                })
            },
            discuss(item,index){
                this.$store.commit('SET_SCHOLARLIST',this.detailItems)
                this.$store.commit('SET_ACHUNIQUE',item.ach_unique)
                this.$store.commit('SET_REVIEW',true)
                this.$router.push({
                    path:'/findBook/bookResult/bookDetail'
                })
            }
        },
        mounted() {
            this.type = this.$store.state.scholarInfo.type;
            if (this.type == 'server') {
                this.barFlag = false
            }
        }
    }
</script>
<style lang="css">

</style>
