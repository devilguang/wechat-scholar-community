<template lang="html">
  <div id="myApply" style="height:100vh;background:#fff">
    <header>
      <ul class="clrfix">
        <li>
         <router-link to="/myCenter/scholarCircle">
         <span class="iconfont icon-scholarCircle"></span>
         </router-link>
         </li>
        <li>
         <router-link to="/myCenter/myApply">
        <span class="iconfont icon-myApply active"></span>
        <p></p>
         </router-link>
         </li> <li>
         <router-link to="/myCenter/myInfo">
       <span class="iconfont icon-myInfo"></span>
         </router-link>
         </li> <li>
         <router-link to="/myCenter/editMyself">
         <span class="iconfont icon-editMyself"></span>
         </router-link>
         </li>
      </ul>
    </header>
    <article class="applyContent">

    </article>

    <router-view class="view"></router-view>
  </div>
</template>
<script>
</script>
