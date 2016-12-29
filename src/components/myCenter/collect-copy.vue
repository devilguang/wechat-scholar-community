<template>
  <div id="collect">
    <section class="collectBox">
      <ul class="contentMain">
        <li class="contentItem" v-for="(collectItem,index) in collectItems">
          <div class="wordsCon">
               <p class="coreCon">{{collectItem.bookTitle}}</p>
               <p class="authorItem"><span class="authorTit">作者：</span><span class="authorName">李瑞，胡勇军</span></p>
               <p class="abstractItem"><span class="abstractTit">摘要：</span><span class="abstractCon">三十功名尘与土，八千里路云和月。莫等闲白了少年头，空故今日之责任，不在他人而全在我少年。少年智则国智少年富则国富少年强则</span></p>
               <p class="eachCitedNum">被引用次数：<span>3</span></p>
          </div>
          <ul class="userBtns clrfix">
            <li><span class="iconfont icon-remark"></span><span class="word">评论</span></li>
            <li @click="recommend(collectItem,index)" :class="{active:collectItem.recommendActive}"><span class="iconfont icon-recommendBtn"></span><span class="word">推荐</span></li>
            <li><span class="iconfont icon-share"></span><span class="word">分享</span></li>
            <li @click="collect(collectItem,index)" :class="{active:collectItem.collectActive}"><span class="iconfont icon-collect"></span><span class="collectWord word">收藏</span></li>
          </ul>
        </li>
      </ul>
    </section>

    <section id="cancelCollectBox" style="display:none">
         <div class="alertBox">
            <p class="tip">
              <span class="iconfont icon-warn"></span>
              <span class="tipWord">您确定要取消收藏吗?</span>
            </p>
            <div class="operate">
              <span class="cancel" @click="cancel">取消</span>
              <span class="confirm"@click="confirm">确定</span>
            </div>
         </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
var collectStatus = null
export default {
  data () {
    return {
      collectItems: []
    }
  },
  methods: {
    recommend: function (item, index) {
      if ((typeof item.recommendActive) === 'undefined') {
        Vue.set(this.collectItems[index], 'recommendActive', true)
      } else {
        item.recommendActive = !item.recommendActive
      }
    },
    collect: function (item, index) {
      window.event.cancelBubble = true
      if ((typeof item.collectActive) === 'undefined') {
        Vue.set(this.collectItems[index], 'collectActive', true)
      } else {
        item.collectActive = !item.collectActive
      }
      if (item.collectActive === true) {
        // item.innerHTML = '已收藏'
        console.log(item)
        document.getElementsByClassName('collectWord')[index].innerHTML = '已收藏'
      }
      if (item.collectActive === false) {
        document.getElementsByClassName('collectWord')[index].innerHTML = '收藏'
        document.getElementById('cancelCollectBox').style.display = 'block'
      }
      collectStatus = window.event.target
    },
    // 取消收藏弹框按钮
    cancel: function () {
      document.getElementById('cancelCollectBox').style.display = 'none'
      console.log(collectStatus)
    },
    confirm: function () {
      document.getElementById('cancelCollectBox').style.display = 'none'
    }
  },
  mounted () {
    axios.get('../../../static/mock-data/userInfo.json')
    .then((response) => {
      console.log(response.data)
      // 先模拟用一个用户的信息
      this.userInfo = response.data[0]
      this.collectItems = this.userInfo.collect
    }).then((error) => console.log(error))
  }
}

</script>
<style>
/*取消收藏弹框*/
#cancelCollectBox{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top:0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.28);
}
#cancelCollectBox .alertBox{
  position: absolute;
  width: 80%;
  height: 2.54rem;
  background: #fff;
  border-radius: .1rem;
  position: absolute;
  left: 10%;
  top:30%;
}
#cancelCollectBox .alertBox .tip{
margin-top: .8rem;
text-align: center;
}
#cancelCollectBox .alertBox .tip .iconfont{
color: #f7b55e;
}
#cancelCollectBox .alertBox .tip .tipWord{
font-size: .28rem;
font-family: "微软雅黑";
}
#cancelCollectBox .alertBox .operate{
height: .9rem;
position: absolute;
bottom:0;
border-top: 1px solid #eee;
width: 100%;
}
#cancelCollectBox .alertBox .operate span{
line-height: .9rem;
color: #000;
font-size: .28rem;
font-family: "微软雅黑";
text-align: center;
display: block;
float: left;
width: 49.5%;
}
#cancelCollectBox .alertBox .operate .cancel{
 border-right: 1px solid #eee;
}
#collect .collectBox{
   margin-bottom: 0.9rem;
}
#collect .collectBox .contentMain .contentItem{
   padding-top:.17rem;
   box-sizing: border-box;
   background: #fff;
   margin-bottom: 0.2rem;
}
#collect .collectBox .contentMain .contentItem .wordsCon{
	  margin: 0 0.15rem;
    padding: 0 .29rem ;
    box-sizing: border-box;
}
#collect .collectBox .contentMain .contentItem .wordsCon .coreCon{
   font-size: .28rem;
   color: #000;
   line-height: .4rem;
   font-family: "微软雅黑";
}
#collect .collectBox .contentMain .contentItem .wordsCon .eachCitedNum{
   font-size: .18rem;
   color: #858585;
   line-height: .4rem;
   margin-bottom: 0.1rem;
}
#collect .collectBox .contentMain .contentItem .wordsCon .eachCitedNum span{
   color: #ffb656;
}
#collect .collectBox .contentMain .contentItem .wordsCon .authorItem{
   font-size: .22rem;
   color: #000;
   line-height: .4rem;
   margin-bottom: 0.04rem;
}
#collect .collectBox .contentMain .contentItem .wordsCon .abstractItem{
   font-size: .22rem;
   color: #5c5c5c;
   line-height: .4rem;
   margin-bottom: 0.05rem;
}
#collect .collectBox .contentMain .contentItem .wordsCon .authorItem .authorName{
  color: #ffb656;
}
#collect .collectBox .contentMain .contentItem .userBtns{
  height: .6rem;
  background: #fff;
  border-top: 1px solid #ddd;
}
#collect .collectBox .contentMain .contentItem .userBtns li{
  width: 24.7%;
  float: left;
  font-size: .25rem;
  line-height: .6rem;
  padding: 0 2%;
  box-sizing: border-box;
  text-align: center;
  border-right: 1px solid #ddd;
}
#collect .collectBox .contentMain .contentItem .userBtns li.active{
color: #43dabb;
}
#collect .collectBox .contentMain .contentItem .userBtns li:nth-of-type(4){
 border-right: none;
}
#collect .collectBox .contentMain .contentItem .userBtns li .iconfont{
	float: left;
	font-size: .4rem;
  margin: 0 0.02rem 0 0.06rem;
}
#collect .collectBox .contentMain .contentItem .userBtns li .word{
	font-size: .25rem;
  float: left;

}
</style>
