<template lang="html">
  <div id="chooseField" style="height:100vh;background:#fff">
    <h1>选择学科领域</h1>
     <ul class="subjectList clrfix">
       <li @click="changeColor(subjectItem)" v-for="subjectItem in subjectItems" v-bind:class="{active:subjectItem.isChecked}">{{subjectItem.subjectName}}</li>
     </ul>
     <router-link to="/chooseField/chooseFieldDetail">
       <input type="button" name="" value="下一步" class="next">
     </router-link>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      subjectItems: [
        {
          subjectName: '哲学',
          isChecked: false
        }, {
          subjectName: '经济学',
          isChecked: false
        }, {
          subjectName: '法学',
          isChecked: false
        }, {
          subjectName: '教育学',
          isChecked: false
        }, {
          subjectName: '文学',
          isChecked: false
        }, {
          subjectName: '历史学',
          isChecked: false
        }, {
          subjectName: '理学',
          isChecked: false
        }, {
          subjectName: '工学',
          isChecked: false
        }, {
          subjectName: '农学',
          isChecked: false
        }, {
          subjectName: '军事学',
          isChecked: false
        }, {
          subjectName: '医学',
          isChecked: false
        }, {
          subjectName: '管理学',
          isChecked: false
        }
      ]
    }
  },
  methods: {
    changeColor: function (subjectItem) {
      subjectItem.isChecked = !subjectItem.isChecked
      if (subjectItem.isChecked) {
        console.log(subjectItem.subjectName)
      }
    },
    next: function () {
      console.log(123)
      window.location.href = 'chooseField/chooseFieldDetail'
    }
  }
}
</script>
<style media="screen">
  #chooseField h1{
    width: 100%;
    height: .78rem;
    background: #424951;
    font-size: .26rem;
    color: #fff;
    text-align: center;
    line-height: .78rem;
    font-family: "宋体";
  }
  #chooseField .subjectList{
    padding-top: .36rem;
    padding-left: .3rem;
    box-sizing: border-box;
  }
  #chooseField .subjectList li{
    height: .56rem;
    border: 1px solid #36d7b6;
    background: #fff;
    border-radius: 0.1rem;
    color:#36d7b6;
    text-align: center;
    line-height: .56rem;
    font-size: .24rem;
    float: left;
    padding: 0 .46rem;
    margin-right: .3rem;
    margin-bottom: .34rem;
  }
  #chooseField .subjectList li.active{
    background: #36d7b6;
    color:#fff;
  }
  #chooseField input{
    height: .8rem;
    background: #36d7b6;
    color: #fff;
    line-height: .8rem;
    border: none;
    border-radius: 0.1rem;
    display: block;
    width: 90%;
    margin: 0 0.29rem;
    box-sizing: border-box;
  }
</style>
