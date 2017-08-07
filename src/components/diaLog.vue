<template>
    <div id="diaLog">
        <div class="dialog-wrap">
            <div class="title">学术麦圈</div>
            <p class="meassgae">{{meassage}}</p>
            <div class="dialog-footer" @click="confirm">确认</div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'diaLog',
        props: ["meassage"],
        methods: {
            confirm(){
                this.$emit('listenToChild', false)
            }
        }
    }
</script>
<style scoped="true">
    #diaLog {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title {
        padding-top: 10px;
        font-size: 18px;
        font-weight: bold;
    }

    .dialog-wrap {
        width: 4.5rem;
        height: 2rem;
        text-align: center;
        border-radius: 13px;
        background: #ffffff;
        position: relative;
    }

    .meassgae {
        padding-top: 10px;
        padding-bottom: 15px;
        font-family: "Microsoft Yahei", "Droid Sans Fallback", "Arial", "Helvetica", "sans-serif", "宋体";
    }

    .dialog-footer {
        width: 100%;
        height: 0.7rem;
        border-top: 1px solid #cccccc;
        box-sizing: border-box;
        line-height: 0.7rem;
        color: #36d7b6;
        font-size: 17px;
        font-weight: 600;
        position: absolute;
        bottom: 0;
        border-bottom-right-radius: 13px;
        border-bottom-left-radius: 13px;
    }

    .dialog-footer:active {
        background: rgba(0, 0, 0, 0.2);
        color: #ffffff;
    }
    .pointer {
        pointer-events: none;
    }
</style>