<template>
    <div id="app">
        <footer>
            <ul class=" ">
                <li @click="navTab(nav01Text)" :class="{active: activeName == nav01Text || activeFirst}">
                    <router-link to="/findScholar">
                        <span class="iconfont icon-findS "></span>
                        <span class="nav-title ">找人</span>
                        <span></span>
                    </router-link>
                </li>
                <li @click="navTab(nav02Text)" :class="{active: activeName == nav02Text}">
                    <router-link to="/findBook">
                        <span class="iconfont icon-findB"></span>
                        <span class="nav-title">找文献</span>
                    </router-link>
                </li>
                <li @click="navTab(nav03Text)" :class="{active: activeName == nav03Text}">
                    <router-link to="/recommend">
                        <span class="iconfont icon-recommend"></span>
                        <span class="nav-title">定制推荐</span>
                    </router-link>
                </li>
                <li @click="navTab(nav04Text)" :class="{active: activeName == nav04Text}">
                    <span class="iconfont icon-person"></span>
                    <span class="nav-title">个人中心</span>
                </li>
            </ul>
        </footer>
        <router-view class="view"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data: function () {
            return {
                nextPage: '',
                nav01Text: 'nav01',
                nav02Text: 'nav02',
                nav03Text: 'nav03',
                nav04Text: 'nav04',
                currentView: 'nav01',
                activeName: 'nav01Text',
                activeFirst: true,
                navItems: [
                    {
                        navName: '找人',
                        isChecked: false
                    }, {
                        navName: '找文献',
                        isChecked: false
                    }, {
                        navName: '定制推荐',
                        isChecked: false
                    }, {
                        navName: '个人中心',
                        isChecked: false
                    }
                ]
            }
        },
        computed: {},
        methods: {
            navTab: function (navText) {
                this.currentView = navText
                this.activeFirst = false
                this.activeName = navText
                // this.isChecked = !this.isChecked
                // console.log(this.navItems[1])
                // 到个人中心页面
                if (navText === this.nav04Text) {
//                if (!window.sessionStorage.getItem('userName')) {
//                    this.$router.push({
//                        path: '/mockLogin'
//                    })
//                } else {
                    this.$router.push({
                        path: '/myCenter/myInfo'
                    })
//                }
                }
            }
        },
        mounted(){
            this.nextPage = window.location.href.substr(window.location.href.lastIndexOf('/'))
            if (this.nextPage === '/findBook') {
                this.activeName = this.nav02Text
                this.activeFirst = false
            }
            if (this.nextPage === '/recommend') {
                this.activeName = this.nav03Text
                this.activeFirst = false
            }
            if (this.nextPage === '/' || this.nextPage === '/findScholar') {
                this.activeName = this.nav01Text
                this.activeFirst = false
            }
            if (this.nextPage === '/myCenter/myInfo') {
                this.activeName = this.nav04Text
                this.activeFirst = false
            }

        }
    }
</script>
<style scroped src='./assets/css/base.css'></style>
<style scroped src='./assets/css/style.css'></style>
<!-- <script type="text/javascript" srcstore./js/instorex.js'></script>-->
