<template lang="html">
 <section class="tabContent" id="sDtab03">
     <ul>
       <li class="instituteItem clrfix" v-for="instituteItem in instituteItems">
         <span class="iconfont icon-house"></span>
         <p class="insPlace">{{instituteItem.organName}}({{instituteItem.achCount}})</p>
       </li>
     </ul>
  </section>
</template>

<script>
export default {
  props: [
    'instituteItems'
  ],
  ready () {
    console.log(this.instituteItems)
  }
}
</script>
<style lang="css">
#sDtab03{
  padding: .22rem;
  box-sizing: border-box;
  margin-bottom: 0.9rem;
}
#sDtab03 ul .instituteItem{
  background: #fff;

  margin: 0.14rem 0 ;
  border-radius: 0.1rem;
}
#sDtab03 ul .instituteItem .icon-house{
   color: #ffc320;
   font-size: .42rem;
   float: left;
   margin-left: 0.1rem;
   margin-right: 0.05rem;
   line-height: .56rem;
   height: 100%;
   display: block;

  }
#sDtab03 ul .instituteItem .insPlace{
     color: #000;
     font-size: .26rem;
     line-height: .56rem;
     width: 88%;
     display: block;
     float: left;
}

</style>
