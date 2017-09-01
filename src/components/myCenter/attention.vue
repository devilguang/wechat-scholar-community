<template>
    <div id="attention" style="padding-bottom: 50px">
        <ul class="attentionBox" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <li class="scholarItem clrfix" v-for="item in attentionList" @click="attention(item)">
                <div class="scholarHead"><img src="../../assets/img/img-scholar_1.png"></div>
                <div class="scholarInfos">
                    <div class="scholarTitle">
                        <span class="scholarName">{{item.scholarName}}</span>
                        <!--<span class="scholarStatus"></span>  是否被认证过-->
                    </div>
                    <p class="scholarPosition"></p>
                    <p class="scholarCited">被引数：</p>
                    <p class="scholarDir">研究方向：<span>{{item.area=='null'? '':item.area}}</span></p>
                </div>
                <span class="moreBtn iconfont icon-more"></span>
            </li>
        </ul>
        <div  style="text-align: center;margin-top: 40%" v-show="attentionList.length == 0">您还没添加任何关注哦</div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'attention',
        data(){
          return{
            attentionList:[],
            showFlag:false,
            busy:false,
            pageNum:1
          }
        },
        computed:{
            ...mapGetters([
                'getDatatype'
            ])
        },
        methods: {
            attention(item){
                let q = {
                    type:item.dataType,
                    scholarUnique:item.scholarUnique
                }
                this.$store.dispatch('saveScholarInfo',q);
                this.$router.push({
                    name: 'detail'
                })
            },
            loadMore(){
                this.busy = true
                this.$axios.get('/v1/weChat/scholarAttentions',{params:{
                    pageIndex:this.pageNum,
                    pageSize:10
                }}).then((res)=>{
                    let attentionList = res.data.data
                    if(res.data.data.length > 0){
                        attentionList.forEach((item,index)=> {
                            this.attentionList.push(item)
                        })
                    }else{
                        return
                    }
                    this.busy = false
                    this.pageNum++
                })
            }
        },
        mounted(){

        }
    }
</script>
<style>

</style>
