<template>
    <div id="scholarResult">
        <h4>为您检索的结果如下：</h4>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
            class="scholarList">
            <li class="scholarItem clrfix" v-for="item in items" @click="toDetail(item.scholar_unique)">
                <!-- <router-link :to="{ path: 'scholarResult/scholarDetail', query: { ID: item.userID }}"> -->
                <!-- <router-link :to="{ name: 'detail', params: { link: item.link }}"> -->
                <div class="scholarHead">
                    <img v-if="item.head_photo_url && item.head_photo_url.length > 0"
                         :src="'http://120.55.191.189:9000/v1/userInfo/headPhoto?filePath=' + item.head_photo_url">
                    <img v-else :src="baseImg" alt="">
                </div>
                <div class="scholarInfos">
                    <div class="scholarTitle">
                        <span class="scholarName">{{item.scholar_name}}</span>
                        <span class="scholarStatus">未认证</span>
                    </div>
                    <p class="scholarPosition">{{item.org_name}}</p>
                    <p class="scholarCited">发文量：{{item.ach_all_num}}</p>
                    <p class="scholarDir">领域方向：
                        <span>{{item.subject ? item.subject.join(', ') : ''}}</span>
                    </p>
                </div>
                <span class="moreBtn iconfont icon-more"></span>
                <!-- </router-link> -->
            </li>
        </ul>
        <span class="noData" v-show="items.length>0?false:true">暂无数据...</span>
    </div>
</template>

<script>
    import qs from 'querystring'

    export default {
        name: 'scholarDetail',
        data() {
            return {
                items: [],
                pageNum: 1,
                queryScholar: {},
                q: '*:*',
                type: 'wd',
                baseImg:'../../static/img/img-scholar_1.png',
                barFlag:true
            }
        },
        components:{

        },
        methods: {
            //  点击进学者详情页
            toDetail: function (scholar_unique) {
                let scholarInfo = {
                    scholarUnique: scholar_unique,
                    type: this.type
                }
                this.$store.dispatch('saveScholarInfo', scholarInfo)
                this.$router.push({
                    name: 'detail'
                })
            },
            loadMore: function () {
                this.busy = true;
                let solrQuery = {
                    "q": "*:*",
                    "wt": "json",
                    "fl": "scholar_unique,scholar_name,org_name,subject,ach_all_num,head_photo_url",
                    "indent": "off",
                    "defType": "edismax",
                    "mm": "75%",
                    "rows": 10,
                    "start": 0
                }
                let solrQueryWechat = {
                    "q": "*:*",
                    "wt": "json",
                    "fl": "SCHOLAR_UNIQUE,SCHOLAR_NAME,ORG_NAME,AREA,ACH_ALL_NUM",
                    "indent": "off",
                    "defType": "edismax",
                    "mm": "75%",
                    "rows": 10,
                    "start": 0
                }
                let keymap = {
                    SCHOLAR_UNIQUE: 'scholar_unique',
                    SCHOLAR_NAME: 'scholar_name',
                    ORG_NAME: 'org_name',
                    AREA: 'subject',
                    ACH_ALL_NUM: 'ach_all_num'
                }
                if (this.type == 'wd') {
                    var q = '';
                    if (this.queryScholar.scholarName != '') {
                        q += 'scholar_name:"' + this.queryScholar.scholarName + '"'
                    }
                    if (this.queryScholar.insName != '') {
                        q += ' and org_name:' + this.queryScholar.insName
                    }
                    solrQuery.q = q
                    solrQuery.start = (this.pageNum - 1) * 10;
                    this.$http.post('/indexWD/scholar/select', qs.stringify(solrQuery))
                        .then((result) => {
                            this.barFlag = false
                            var count = result.data.response.numFound
                            // console.log('count = ' + count)
                            if (count == 0) {
                                this.type = 'server'
                                q = ''
                                if (this.queryScholar.scholarName != '') {
                                    q += 'SCHOLAR_NAME:"' + this.queryScholar.scholarName + '"'
                                }
                                if (this.queryScholar.insName != '') {
                                    q += ' and ORG_NAME:' + this.queryScholar.insName;
                                }
                                solrQueryWechat.q = q
                                solrQueryWechat.start = solrQuery.start
                                this.$http.post('/indexServer/scholar_info/select', qs.stringify(solrQueryWechat))
                                    .then((result) => {
                                        var wechatSolrCount = result.data.response.numFound
                                        // console.log('wechatSolrCount = ' + wechatSolrCount)
                                        var server_docs = [];
                                        if (wechatSolrCount > 0) {
                                            _(result.data.response.docs).forEach(function (doc) {
                                                doc['AREA'] = doc.AREA.split('/')
                                                server_docs.push(_.mapKeys(doc, function (value, key) {
                                                    return keymap[key]
                                                }))
                                            })
                                        }
                                        this.items.push(...server_docs)
                                        this.pageNum++
                                        this.busy = false
                                    })
                            } else {
                                _(result.data.response.docs).forEach(function (doc) {
                                    doc.org_name = '武汉大学' + doc.org_name
                                })
                                this.items.push(...result.data.response.docs)
                                this.pageNum++;
                                this.busy = false;
                            }
                        })
                } else {
                    q = ''
                    if (this.queryScholar.scholarName != '') {
                        q += 'SCHOLAR_NAME:"' + this.queryScholar.scholarName + '"'
                    }
                    if (this.queryScholar.insName != '') {
                        q += ' and ORG_NAME:' + this.queryScholar.insName
                    }
                    solrQueryWechat.q = q
                    solrQueryWechat.start = solrQuery.start
                    this.$http.post('/indexServer/scholar_info/select', qs.stringify(solrQueryWechat))
                        .then((result) => {
                            var wechatSolrCount = result.data.response.numFound
                            // console.log('wechatSolrCount = ' + wechatSolrCount)
                            var server_docs = []
                            if (wechatSolrCount > 0) {
                                _(result.data.response.docs).forEach(function (doc) {
                                    doc['AREA'] = doc.AREA.split('/')
                                    server_docs.push(_.mapKeys(doc, function (value, key) {
                                        return keymap[key]
                                    }))
                                })
                            }
                            this.items.push(...server_docs)
                            this.pageNum++
                            this.busy = false
                        })
                }
            }
        },
        mounted() {
            this.queryScholar = this.$store.state.queryScholar
        }
    }
</script>
<style lang="css">
    .noData{
        display: block;
        text-align: center;
        margin-top:100px;
    }
</style>
