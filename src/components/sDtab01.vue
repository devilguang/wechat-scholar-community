<template lang="html">
    <section class="tabContent" id="sDtab01">
        <!--div class="contentTop"-->
            <!-- 复选下拉框没写 占位 -->
            <!--div class="allFruits">全部成果</div -->
            <!--p class="citedNum"><span>{{infos.cite ? '被引次数：' + infos.cite : ''}}</span></p-->
        <!-- /div -->
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
            class="contentMain">
            <li class="contentItem" v-for="(detailItem,index) in detailItems" >
                <div class="wordsCon" @click="showDetails(index)">
                    <p class="coreCon">{{detailItem.title}}</p>
                    <p class="authorItem">{{detailItem.pub_name}} {{detailItem.yvip || detailItem.py}}</p>
                    <!-- <p class="authorItem">{{detailItem.author.length > 0 ? detailItem.author.join(';').substring(0, 45) + '...' : ''}}</p> -->
                    <p class="eachCitedNum">被引次数：{{detailItem.cite_count.length > 0 ? detailItem.cite_count[0] : '-'}}</p>
                </div>
                <ul class="userBtns clrfix">
                    <li @click="discuss(index)"><span class="iconfont icon-remark" ></span>评论</li>
                    <li @click="recommend(detailItem,index)" :class="{active:detailItem.isLike?detailItem.isLike:false}">
                        <span class="iconfont icon-recommendBtn"></span>推荐
                    </li>
                    <li><span class="iconfont icon-share"></span>分享</li>
                    <li @click="collect(detailItem,index)" :class="{active:detailItem.isFavorite?detailItem.isFavorite:false}">
                        <span class="iconfont icon-collect"></span>收藏
                    </li>
                </ul>
            </li>
        </ul>
        <!--<loading-bar v-if="barFlag"></loading-bar>-->
    </section>
</template>

<script>
    import qs from 'querystring'
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    //    import loadingBar from './loadingBar.vue'
    export default {
        data() {
            return {
                detailItems: [],
                pageNum: 1,
                isLike: '',
            }
        },
        components:{
//            loadingBar
        },
        computed:{
            ...mapGetters([
                'getDatatype'
            ])
        },
        methods: {
            // 推荐和收藏高亮
            recommend(item, index) {
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
            collect(item, index) {
                this.$set(item,'isFavorite',true)
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
                    console.log(res)
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
                            this.detailItems.push(...response.data.response.docs)
                            this.pageNum++
                            this.busy = false
                            let arr = []
                            this.detailItems.forEach((item,index) =>{
                                arr.push(item.ach_unique)
                            })
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
                        "fl": "TITLE,PUB_NAME_CH,CITE_COUNT,PY,GROUP_AU",
                        "indent": "off",
                        "rows": 10,
                        "start": 0
                    }
                    let keymap = {
                        TITLE: 'title',
                        PUB_NAME_CH: 'pub_name',
                        CITE_COUNT: 'cite_count',
                        PY: 'py',
                        GROUP_AU: 'author'
                    }
                    solrQueryWechat.start = (this.pageNum - 1) * 10;
                    solrQueryWechat.q = 'scholar_info_id:"' + this.$store.state.scholarInfo.scholarUnique + '"';
                    this.$http.post('/indexServer/scholar_paper/select', qs.stringify(solrQueryWechat))
                        .then((result) => {
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
                        }).then((error) => {
                    })
                }
            },
            showDetails(index){
                localStorage.setItem('index',index)
                this.$store.commit('SET_SCHOLARLIST',this.detailItems)
                this.$router.push({
                    path:'/findBook/bookResult/bookDetail'
                })
            },
            discuss(index){
                this.$store.commit('SET_REVIEW',true)
                this.$router.push({
                    path:'/findBook/bookResult/bookDetail'
                })
            }
        },
        mounted() {
        }
    }
</script>
<style lang="css">

</style>
