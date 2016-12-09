<template>
<div id="app">
  <footer>
    <ul class="clrfix">
      <li>
       <router-link to="/findScholar">
       <span class="iconfont icon-findS active"></span>
       <span class="nav-title active">找人</span >
       </router-link>
       </li>
      <li>
       <router-link to="/findBook">
      <span class="iconfont icon-findB"></span>
       <span class="nav-title">找文献</span>
       </router-link>
       </li> <li>
       <router-link to="/recommend">
     <span class="iconfont icon-recommend"></span>
       <span class="nav-title">定制推荐</span>
       </router-link>
       </li> <li>
       <router-link to="/personalCenter">
       <span class="iconfont icon-person"></span>
       <span class="nav-title">个人中心</span>
       </router-link>
       </li>
    </ul>
  </footer>
  <router-view class="view"></router-view>
  </div>
</template>
<script>
</script>
<style scroped src='./assets/css/base.css'></style>
<style scroped src='./assets/css/style.css'></style>
<!-- <script type="text/javascript" src='./js/index.js'></script>-->
<script type="text/javascript" src='./assets/js/jquery-1.9.1.min.js'></script>
