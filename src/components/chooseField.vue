<template lang="html">
  <div id="chooseField">
    <div class="top">
      <span class="iconfont icon-beliked"></span>
      <span class="tip">请选择需推荐的领域</span>
    </div>
     <ul class="subjectItems clrfix">
       <li class="subjectItem" v-for="(subjectItem,index) in subjectItems">
          <p class="title"><span class="verticleString"></span><span class="subjectName">{{subjectItem.subjectName}}</span></p>
          <ul class="subjectBox clrfix">
            <li  v-for="(subName,subindex) in subjectItem.subNames " class="eachSubject" @click="changeStyle(subName,subindex,index)" :class="{active:subName.chooseActive}"><span class="eachName">{{subName.eachName}}<span class="iconfont icon-success"></span></span></li>
          </ul>
       </li>
       <!-- <li @click="changeColor(subjectItem)" v-for="subjectItem in subjectItems" v-bind:class="{active:subjectItem.isChecked}">{{subjectItem.subjectName}}</li> -->
     </ul>
     <div class="afterChoose">
       <p class="tip">可选择<span>5</span>个领域,你已选择<span>{{choosedNum}}</span>个</p>
        <button @click="next">下一步</button>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
var choosedNum = 0
export default {
  data () {
    return {
      subjectItems: [{
        subjectName: '哲学',
        subNames: [{
          eachName: '作物学'
        }, {
          eachName: '园艺学'
        }, {
          eachName: '畜牧学'
        }, {
          eachName: '兽医学'
        }, {
          eachName: '作物学'
        }, {
          eachName: '植被保护'
        }, {
          eachName: '农业资源与环境'
        }]
      }, {
        subjectName: '经济学',
        subNames: [{
          eachName: '1作物学'
        }, {
          eachName: '2园艺学'
        }, {
          eachName: '3畜牧学'
        }, {
          eachName: '4兽医学'
        }, {
          eachName: '5作物学'
        }, {
          eachName: '6植被保护'
        }, {
          eachName: '7农业资源与环境'
        }]
      }, {
        subjectName: '法学',
        subNames: [{
          eachName: '8作物学'
        }, {
          eachName: '9园艺学'
        }, {
          eachName: '10畜牧学'
        }, {
          eachName: '11兽医学'
        }, {
          eachName: '12作物学'
        }, {
          eachName: '13植被保护'
        }, {
          eachName: '14农业资源与环境'
        }]
      }, {
        subjectName: '教育学',
        subNames: [{
          eachName: '1作物学'
        }, {
          eachName: '2园艺学'
        }, {
          eachName: '3畜牧学'
        }, {
          eachName: '4兽医学'
        }, {
          eachName: '5作物学'
        }, {
          eachName: '6植被保护'
        }, {
          eachName: '7农业资源与环境'
        }]
      }, {
        subjectName: '文学',
        subNames: [{
          eachName: '1作物学'
        }, {
          eachName: '2园艺学'
        }, {
          eachName: '3畜牧学'
        }, {
          eachName: '4兽医学'
        }, {
          eachName: '5作物学'
        }, {
          eachName: '6植被保护'
        }, {
          eachName: '7农业资源与环境'
        }]
      }, {
        subjectName: '历史学',
        subNames: [{
          eachName: '1作物学'
        }, {
          eachName: '2园艺学'
        }, {
          eachName: '3畜牧学'
        }, {
          eachName: '4兽医学'
        }, {
          eachName: '5作物学'
        }, {
          eachName: '6植被保护'
        }, {
          eachName: '7农业资源与环境'
        }]
      }, {
        subjectName: '理学',
        subNames: [{
          eachName: '1作物学'
        }, {
          eachName: '2园艺学'
        }, {
          eachName: '3畜牧学'
        }, {
          eachName: '4兽医学'
        }, {
          eachName: '5作物学'
        }, {
          eachName: '6植被保护'
        }, {
          eachName: '7农业资源与环境'
        }]
      }],
      choosedNum:'0',
      fileArr:[],
      checked:true
    }
  },
  methods: {
    changeStyle (item, subindex, index) {
      if ((typeof item.chooseActive) === 'undefined') {
        Vue.set(this.subjectItems[index].subNames[subindex], 'chooseActive', true)
        if (choosedNum < 5) {
          choosedNum++
        }
      } else {
        item.chooseActive = !item.chooseActive
        if (item.chooseActive && choosedNum < 5) {
          choosedNum++
        } else if (!item.chooseActive && choosedNum >= 1) {
          choosedNum--
        } else if (!item.chooseActive) {
          choosedNum = 0
        }
      }
      if (this.choosedNum === 5 && item.chooseActive) {
        item.chooseActive = false
        window.alert('最多选择5个')
      }
      this.choosedNum = choosedNum
    },
    next: function () {
        this.choosedNum = '0'
        choosedNum = 0
      this.$router.push({
        path: '/recommendDetail'
      })
    }
  },
    mounted(){
        this.choosedNum = '0'
        choosedNum = 0
    }
}
</script>
<style media="screen">
#chooseField .top{
  height: .65rem;
  background: #f5f5f9;
  padding-left: .29rem;
  box-sizing: border-box;
}
#chooseField .top .icon-beliked{
  color: #feaf16;
  font-size: .28rem;
  line-height: .65rem;
  margin-right: .1rem;
}
#chooseField .top .tip{
  color: #323232;
  font-size: .22rem;
  line-height: .65rem;
}
#chooseField .top .tip span{
color: #feaf16;
}
#chooseField .subjectItems{
  margin-bottom: 2.32rem;
}
#chooseField .subjectItems .subjectItem{
  border-top: 1px solid #d6d6d7;
  border-bottom: 1px solid #d6d6d7;
  margin-bottom: .32rem;
}
#chooseField{
  margin-bottom: .9rem;
}
#chooseField .subjectItems .subjectItem .title{
  border-bottom:1px solid #ebebeb;
  height: .54rem;
  background: #fff;
 }
 #chooseField .subjectItems .subjectItem .title .verticleString{
   border-left: 3px solid #36d7b6;
   height: .32rem;
  margin:0 .09rem 0 .42rem;
margin-top: 0.11rem;
  display: block;
  float: left;
  }
  #chooseField .subjectItems .subjectItem .title .subjectName{
  color: #000;
  font-size: .24rem;
line-height: .54rem;
   display: block;
   float: left;
   font-family: "微软雅黑";
 }
 #chooseField .subjectItems .subjectItem .subjectBox{
 padding: .18rem .44rem;
 box-sizing: border-box;
 background: #fff;
}
#chooseField .subjectItems .subjectItem .subjectBox .eachSubject{
float: left;
height: .71rem;
padding: 0.19rem .11rem 0 0.11rem;
box-sizing: border-box;
}
#chooseField .subjectItems .subjectItem .subjectBox .eachSubject .eachName{
  position: relative;
  height: .41rem;
  border-radius: 0.08rem;
  padding: 0 .2rem;
  display: block;
  line-height: .41rem;
  color: #36d7b6;
  background: #fff;
  font-size: .22rem;
  border: 1px solid #36d7b6;
}
#chooseField .subjectItems .subjectItem .subjectBox .eachSubject.active .eachName{
  background: #36d7b6;
  color: #fff;
}
#chooseField .subjectItems .subjectItem .subjectBox .eachSubject .icon-success{
display: none;
}
#chooseField .subjectItems .subjectItem .subjectBox .eachSubject.active .icon-success{
display: block;
position: absolute;
right: -0.14rem;
top: -0.18rem;
color: #feaf16;
z-index: 3;
}

#chooseField .afterChoose{
 height: 1.12rem;
 position: fixed;
 bottom:.9rem;
 width: 100%;
 border-top: 1px solid #cdcdcd;
 border-bottom:  1px solid #cdcdcd;
 background: #fff;
 padding:  0 .55rem  0 .29rem;
 box-sizing: border-box;
}
#chooseField .afterChoose .tip{
font-size: .2rem;
line-height: 1.12rem;
color: #8e8e8e;
float: left;
}
#chooseField .afterChoose .tip span{
color: #feaf16;
}
#chooseField .afterChoose button{
border: none;
width: 1.68rem;
height: .59rem;
line-height: .59rem;
text-align: center;
color: #fff;
background: #36d7b6;
float: right;
border-radius: .09rem;
margin-top: .27rem;
}



</style>
