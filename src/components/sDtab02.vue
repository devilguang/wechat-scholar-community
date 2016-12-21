<template lang="html">
 <section class="tabContent" id="sDtab02" >
     <ul>
       <li class="partnerItem" v-for="partnerItem in partnerItems">
          <div class="top clrfix">
              <img src="../assets/img/img-scholar_1.png">
              <span class="name">{{partnerItem.author}}</span>
          </div>
          <p>机构:&nbsp{{partnerItem.organName}}</p>
       </li>
     </ul>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  props: [
    'partnerItems'
  ],
  ready () {
    console.log(this.partnerItems)
  }
}
</script>
<style lang="css">
#sDtab02{
  padding: .22rem;
  box-sizing: border-box;
  margin-bottom: 0.9rem;
}
#sDtab02 ul .partnerItem{
  background: #fff;
  margin: 0.14rem 0 ;
  border-radius: 0.1rem;
}
#sDtab02 ul .partnerItem{
  background: #fff;
  margin: 0.14rem 0 ;
  border-radius: 0.1rem;
  padding: 0.08rem 0.15rem;
}
#sDtab02 ul .partnerItem .top img{
 width: .56rem;
 height: .56rem;
 border-radius: 50%;
 float: left;
}
#sDtab02 ul .partnerItem .top .name{
 color:#ffc320;
 font-size: .28rem;
 line-height: .56rem;
 height: .56rem;
 display: block;
 float: left;
 margin-left: 0.15rem;
}
#sDtab02 ul .partnerItem p{
 color:#8f8f94;
 font-size: .26rem;
 margin-top: 0.1rem;

}




</style>
