<template lang="html">
  <div id="talk" >
    <article class="commitArea">
       <textarea name="talk" class="writeArea" placeholder="输入内容"></textarea>
       <button type="button" name="button" class="pubulishBtn">发布</button>
    </article>
    <article class="talkContent">
      <ul class="talkLists">
        <li class="talkList">
          <section class="talkTop clrfix">
            <img src="../../assets/img/img-attention_1.png" alt="">
            <p class="name">安妮宝贝</p>
            <p class="publicTime">发布时间 ： 2016-12-06 14:07</p>
            <span class="iconfont icon-beliked"></span><span class="belikedNum">123</span>
          </section>
          <section class="essayBegin">
            <a href="javascript:;">
              <img src="../../assets/img/img-attention_2.png" alt="">
              <p class="essayFirst">文学是以语言文字为工具，形象形象形象学是以语言文字为工具，形学是以语言文字为工具，形学是以语言文字为工具，形</p>
            </a>
          </section>
          <section class="commitTitle">
            <span class="commitNum">共2312条评论</span>
            <span class="iconfont icon-recommendBtn" @click="like" :class="{active:likeStatus}"></span>
          </section>
          <section class="commitBox">
            <ul>
              <li>
                <span class="observerName">莫言:</span>
                <p class="observerContent">为广大学生提供最新、最全、最实用的文学名著作品与资料本站有丰富的诗歌</p>
              </li>
              <li>
                <span class="observerName">莫言:</span>
                <p class="observerContent">为广大学生提供最新、最全、最实用的文学名著作品与资料本站有丰富的诗歌</p>
              </li>
            </ul>
            <div class="commitInput">
              <input type="text" name="" value="" placeholder="评论" class="remark">
              <span class="iconfont icon-observerRemark"></span>
            </div>
          </section>
        </li>

      </ul>
    </article>
  </div>
</template>
<script>
export default{
  data () {
    return {
      likeStatus: false
    }
  },
  methods: {
    like: function () {
      this.likeStatus = !this.likeStatus
    }
  }
}
</script>
<style media="screen">
#talk{
  height: 100%;
  background: #fff;
}
#talk .commitArea{
  height: 1.98rem;
  padding: .33rem .29rem 0;
  box-sizing: border-box;
}
#talk .commitArea .writeArea{
width: 100%;
height: .81rem;
border: 1px solid #ffb656;
border-radius: .1rem;
resize: none;
font-size: .21rem;
color: #9c9c9c;
text-indent: .1rem;
line-height: .39rem;
}
#talk .commitArea .pubulishBtn{
width: .75rem;
height: .42rem;
background: #36d7b6;
color: #fff;
line-height: .42rem;
float: right;
border: none;
border-radius: 0.08rem;
font-size: .22rem;
text-align: center;
margin-top: .13rem;
}
#talk .talkContent .talkLists{
  width: 100%;
  border-top: 1px solid #f5f5f5;
  padding:0  .29rem 0;
  box-sizing: border-box;
  margin-bottom: .92rem;
}
#talk .talkContent .talkLists .talkList{
  border-bottom: 1px solid #ddd;
}
#talk .talkContent .talkLists li .talkTop img{
  width: .83rem;
  height: .83rem;
  float: left;
  margin-right:.34rem;
}
#talk .talkContent .talkLists li .talkTop{
  position: relative;
  margin-top: .3rem;
}
#talk .talkContent .talkLists li .talkTop .name{
  font-size: .27rem;
  color: #000;
  line-height: .41rem;
}
#talk .talkContent .talkLists li .talkTop .publicTime{
  font-size: .18rem;
  color: #9c9c9c;
  line-height: .4rem;
}
#talk .talkContent .talkLists li .talkTop .icon-beliked,#talk .talkContent .talkLists li .talkTop .belikedNum{
  position: absolute;
  right: 0.58rem;
  top: 0.1rem;
  color: #fe7b7b;
}
#talk .talkContent .talkLists li .talkTop .belikedNum{
  right: 0.08rem;
  color: #000;
}
#talk .talkContent .talkLists li .essayBegin{
  height: .87rem;
  background: #eee;
  padding: .07rem 0.09rem;
  box-sizing: border-box;
  margin-top: .11rem;
}
#talk .talkContent .talkLists li .essayBegin img{
  width: .73rem;
  float: left;
  margin-right: .14rem;
}
#talk .talkContent .talkLists .talkList .essayBegin .essayFirst{
float: left;
font-size: .24rem;
color: #000;
line-height: .73rem;
overflow: hidden;
width: 4.75rem;
height: .73rem;
}
#talk .talkContent .talkLists .talkList .commitTitle .commitNum{
  font-size: .18rem;
  color: #c4c4c4;
}
#talk .talkContent .talkLists .talkList .commitTitle .icon-recommendBtn{
  font-size: .4rem;
  color: #c4c4c4;
  float: right;
  margin-right: 0.2rem;
}
#talk .talkContent .talkLists .talkList .commitTitle .icon-recommendBtn.active{
  color: #36d7b6;
}
#talk .talkContent .talkLists .talkList .commitTitle{
  height: .64rem;
  line-height: .64rem;
}
#talk .talkContent .talkLists .talkList .commitBox ul li .observerName{
  height: .6rem;
  line-height: .6rem;
  color: #ffb656;
  font-size: .2rem;
}
#talk .talkContent .talkLists .talkList .commitBox ul li .observerContent{
  line-height: .35rem;
  color: #323232;
  font-size: .2rem;
}
#talk .talkContent .talkLists .talkList .commitBox .remark{
  height: .48rem;
  width: 100%;
  border: 1px solid #ecebeb;
  border-radius: 0.1rem;
  color: #a4a4a4;
  margin-top: .25rem;
  text-indent: 0.2rem;
}
#talk .talkContent .talkLists .talkList .commitBox .commitInput{
 position: relative;
 margin-bottom: 0.36rem;

}
#talk .talkContent .talkLists .talkList .commitBox .commitInput span{
 position: absolute;
 right: 0.1rem;
 top: 0.36rem;
 color: #ffb656;
 font-size: .26rem;
}
</style>
