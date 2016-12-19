<template>
 <div id="chooseFieldDetail">
   <h1>选择学科领域</h1>
     <p class="tit">您已选择<span class="checkedSbj">农学</span>,请继续选择详细领域</p>
     <ul class="secondSbj clrfix">
       <li class="secondItem">作物学</li>
       <li>作物学</li>
       <li>物学</li>
       <li>作物学</li>
       <li>物学</li>
       <li>物学</li>
       <li>作物学</li>
       <li>作物学</li>
       <li>作物学</li>
       <li>作物学</li>
    </ul>
     <div class="btnBox">
       <router-link to="../chooseField">
         <button type="button" name="button" class="preBtn">上一步</button>
       </router-link>
        <router-link to="/chooseFieldDetail">
          <button type="button" name="button" class="nextBtn">下一步</button>
        </router-link>
    </div>
 </div>
</template>
<script>
export default {
  methods: {
    changeColor: function (subjectItem) {
      subjectItem.isChecked = !subjectItem.isChecked
      if (subjectItem.isChecked) {
        console.log(subjectItem.subjectName)
      }
    },
    pre: function () {
      window.location.href = '../chooseField'
    },
    next: function () {
      window.location.href = ''
    }
  }
}
</script>
<style media="screen">
#chooseFieldDetail h1{
  width: 100%;
  height: .78rem;
  background: #424951;
  font-size: .26rem;
  color: #fff;
  text-align: center;
  line-height: .78rem;
  font-family: "宋体";
}
#chooseFieldDetail .tit{
  color: #000;
  font-size: .24rem;
  line-height: .6rem;
   margin-left: 0.3rem;
}
#chooseFieldDetail .tit .checkedSbj{
  color: #36d7b6;
  font-size: .24rem;
  line-height: .4rem;

}
#chooseFieldDetail .secondSbj{
  padding-top: .2rem;
  padding-left: .3rem;
  box-sizing: border-box;
}
#chooseFieldDetail .secondSbj li{
  height: .56rem;
  border: 1px solid #f4b039;
  background: #fff;
  border-radius: 0.1rem;
  color:#f4b039;
  text-align: center;
  line-height: .56rem;
  font-size: .24rem;
  float: left;
  padding: 0 .46rem;
  margin-right: .3rem;
  margin-bottom: .34rem;
}
#chooseFieldDetail .secondSbj li.active{
  background: #f4b039;
  color:#fff;
}
#chooseFieldDetail .btnBox{
 width: 100%;
 background: pink;
 padding: 0 0.6rem;
 box-sizing: border-box;
 border: none;
 margin-top: 0.1rem;
}
#chooseFieldDetail .btnBox .preBtn,#chooseFieldDetail .btnBox .nextBtn{
  border-radius: 0.05rem;
  background: #ffb656;
 float: left;
 border: none;
 width: 1.8rem;
 height: .6rem;
 line-height: .6rem;
 color: #fff;
 font-size: .26rem;
}
#chooseFieldDetail .btnBox .nextBtn{
 float: right;
 }
</style>
