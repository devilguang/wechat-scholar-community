<template>
    <div id="attention">
        <ul class="attentionBox">
            <li class="scholarItem clrfix" v-for="item in attentionList">
                <div class="scholarHead"><img src="../../assets/img/img-scholar_1.png"></div>
                <div class="scholarInfos">
                    <div class="scholarTitle">
                        <span class="scholarName"></span>
                        <span class="scholarStatus"></span>
                    </div>
                    <p class="scholarPosition">中共浙江省委书记</p>
                    <p class="scholarCited">被引数：100</p>
                    <p class="scholarDir">研究方向：<span>中共党史</span></p>
                </div>
                <span class="moreBtn iconfont icon-more"></span>
            </li>
            <!--<li class="scholarItem clrfix">-->
                <!--<div class="scholarHead"><img src="../../assets/img/img-scholar_1.png"></div>-->
                <!--<div class="scholarInfos">-->
                    <!--<div class="scholarTitle">-->
                        <!--<span class="scholarName">习近平</span>-->
                        <!--<span class="scholarStatus">未认证</span>-->
                    <!--</div>-->
                    <!--<p class="scholarPosition">中共浙江省委书记</p>-->
                    <!--<p class="scholarCited">被引数：100</p>-->
                    <!--<p class="scholarDir">研究方向：<span>中共党史</span></p>-->
                <!--</div>-->
                <!--<span class="moreBtn iconfont icon-more"></span>-->
            <!--</li>-->
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'attention',
        data(){
          return{
            attentionList:[]
          }
        },
        methods: {

        },
        mounted(){
            this.$axios.get('/v1/weChat/scholarAttentions',{params:{

            }}).then((res)=>{
                console.log(res)
            })
        }
    }
</script>
<style>

</style>
