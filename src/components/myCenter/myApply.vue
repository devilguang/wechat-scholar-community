<template lang="html">
  <div id="myApply" style="height:100vh;background:#fff">
    <header>
      <ul class="clrfix">
        <li>
          <router-link to="/myCenter/myInfo">
            <span class="">我的</span>
          </router-link>
        </li>
        <li>
         <router-link to="/myCenter/dynamic">
         <span class="">动态</span>
         </router-link>
         </li>
        <li>
         <router-link to="/myCenter/myApply">
        <span class="active">推荐</span>
        <p></p>
         </router-link>
         </li>
          <li>
         <router-link to="/myCenter/talk">
         <span class="">唠嗑</span>
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
