<template>
    <div id="findBook" style="height:100vh;background:#fff">
        <div class="searchImg"><img src="../assets/img/img-search-bg.png"></div>
        <form class="searchForm">
            <fieldset>
                <legend>文献查询</legend>
                <div class="searchFormGroup">
                    <label>文献名称</label>
                    <input type="text" v-model="bookName" :value="bookName" placeholder="请输入文献名称"/>
                </div>
                <p class="searchFormSubmit" @click="searchBook">搜索</p>
            </fieldset>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'
    import qs from 'querystring'
    export default {
        data () {
            return {
                bookName: '',
                bookList: [],
                num: '',
                queryAch: {}
            }
        },
        methods: {
            searchBook: function () {
                var that = this
                let queryAch = {achTitle: this.bookName, isNewQuery: true}
                this.$store.dispatch('saveSearchAchQuery', queryAch)
                this.$router.push({
                    path: '/findBook/bookResult'
                })
            }
        },
        mounted () {
        }
    }

</script>
<style>
    #findBook .searchImg {
        width: 100%;
        padding: 0.5rem 15% 0.25rem;
        box-sizing: border-box;
    }

    #findBook .searchImg img {
        width: 100%;
        height: auto;
    }

    #findBook .searchForm fieldset {
        border: none;
    }

    #findBook .searchForm fieldset legend {
        display: none;
    }

    #findBook .searchFormGroup {
        height: 1.2rem;
        margin-bottom: 0.1rem;
    }

    #findBook .searchFormGroup label {
        font-size: 0.18rem;
        margin: 0.2rem 0;
        display: block;
    }

    #findBook .searchFormGroup input {
        border: 1px solid #36d7b6;
        width: 100%;
        border-radius: 0.08rem;
        height: 0.7rem;
        text-indent: 0.22rem;
    }

    #findBook .searchFormSubmit {
        padding: 0 0.5rem;
        box-sizing: border-box;
        width: 100%;
        height: 0.8rem;
        background: #36d7b6;
        border: none;
        margin-top: .36rem;
        border-radius: 0.08rem;
        color: #ffffff;
        line-height: .8rem;
        text-align: center;
    }
</style>
