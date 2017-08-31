<template>
    <div id="loadingBar">
        <div><i class="fa fa-spinner fa-3x fa-pulse"></i><p>加载中</p></div>
    </div>
</template>
<script>
    export default{
        name:'loadingBar',
        data(){
            return{

            }
        }
    }

</script>
<style scoped="true">
    #loadingBar{
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        z-index: 10;
        text-align: center;
        background: #ffffff;
    }
    i{
        color: #36d7b6;
    }
    #loadingBar div{
        margin-top: 50%;
        font-size: 16px;
        color: #000;
    }
</style>