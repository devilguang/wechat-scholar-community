<template lang="html">
    <section class="tabContent" id="sDtab01">
        <!--div class="contentTop"-->
            <!-- 复选下拉框没写 占位 -->
            <!--div class="allFruits">全部成果</div -->
            <!--p class="citedNum"><span>{{infos.cite ? '被引次数：' + infos.cite : ''}}</span></p-->
        <!-- /div -->
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
            class="contentMain">
            <li class="contentItem" v-for="(detailItem,index) in detailItems">
                <div class="wordsCon">
                    <p class="coreCon">{{detailItem.title}}</p>
                    <p class="authorItem">{{detailItem.pub_name}} {{detailItem.yvip || detailItem.py}}</p>
                    <!-- <p class="authorItem">{{detailItem.author.length > 0 ? detailItem.author.join(';').substring(0, 45) + '...' : ''}}</p> -->
                    <p class="eachCitedNum">被引次数：{{detailItem.cite_count.length > 0 ? detailItem.cite_count[0] : '-'}}</p>
                </div>
                <ul class="userBtns clrfix">
                    <li><span class="iconfont icon-remark"></span>评论</li>
                    <li @click="recommend(detailItem,index)" :class="{active:detailItem.recommendActive}">
                        <span class="iconfont icon-recommendBtn"></span>推荐
                    </li>
                    <li><span class="iconfont icon-share"></span>分享</li>
                    <li @click="collect(detailItem,index)" :class="{active:detailItem.collectActive}">
                        <span class="iconfont icon-collect"></span>收藏
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
    import qs from 'querystring'

    export default {
        /*props: {
            'infos': {
                type: Object,
                default: () => {
                    return {
                        cite: ''
                    }
                }
            }
        },*/
        data() {
            return {
                detailItems: [],
                pageNum: 1
            }
        },
        methods: {
            // 推荐和收藏高亮
            recommend: function (item, index) {
                // set设置数据相应 增加data里面的 一个recommendActive 属性 可以控制高亮
                if ((typeof item.recommendActive) === 'undefined') {
                    Vue.set(this.detailItems[index], 'recommendActive', true)
                } else {
                    item.recommendActive = !item.recommendActive
                }
                // console.log(this.detailItems[index].recommendActive)
            },
            collect: function (item, index) {
                if ((typeof item.collectActive) === 'undefined') {
                    Vue.set(this.detailItems[index], 'collectActive', true)
                } else {
                    item.collectActive = !item.collectActive
                }
            },
            loadMore: function () {
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
                    solrQuery.q = 'claims:"' + this.$store.state.scholarUnique + '"';
                    this.$http.post('/solr/achievement/select', qs.stringify(solrQuery))
                        .then((response) => {
                            this.detailItems.push(...response.data.response.docs)
                            this.pageNum++
                            this.busy = false;
                        })
                        .then((error) => {
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
                                if (doc['cite_count']) {
                                    cite_count.push(doc['cite_count'])
                                }
                                doc['cite_count'] = cite_count
                                server_docs.push(doc)
                            })
                            this.detailItems.push(...server_docs)
                            this.pageNum++
                            this.busy = false;
                        }).then((error) => {
                    })
                }
            }
        },
        mounted() {

        }
    }
</script>
<style lang="css">

</style>
