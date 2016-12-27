<template lang="html">
  <div id="management">
    <article class="managementCon">
      <div class="magBtns">
        <div class="allSelBox">
          <input type="checkbox" name="" value="" @click="checkedAll" v-model="checked"><span>全选</span>
        </div>
        <button type="button" name="button" class="submitFruit" @click="add()">添加</button>
        <h3 class="del" @click="deleteBtn">删除</h3>
      </div>
      <ul class="fruitList">
        <li class="fruitItem" v-for="checkb in checkboxData">
          <div class="selBox">
            <input type="checkbox" name="" v-model='checkboxModel' :value='checkb.id' class="checkBox">
          </div>
          <p class="fruitTit">{{checkb.fruitTit}}</p>
          <div class="foot">
            <span>莫言 —— </span><span> 出版物—— 2001</span>
          </div>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
export default {
  methods: {
    deleteBtn: function () {
      var fruitList = document.getElementsByClassName('fruitList')[0]
      var fruitItem = fruitList.getElementsByClassName('fruitItem')
      for (var i = 0; i < fruitItem.length; i++) {
        for (var j = 0; j < this.checkboxModel.length; j++) {
          if (fruitItem[i].getElementsByClassName('checkBox')[0].getAttribute('value') === this.checkboxModel[j]) {
            fruitItem[i].parentNode.removeChild(fruitItem[i])
          }
        }
      }
      this.checkboxModel = []
    },
    checkedAll: function () {
      var _this = this
      if (this.checked) { // 实现反选
        _this.checkboxModel = []
      } else { // 实现全选
        _this.checkboxModel = []
        _this.checkboxData.forEach(function (item) {
          _this.checkboxModel.push(item.id)
        })
      }
      console.log(_this.checkboxModel)
    },
    add: function () {
      this.$router.push({
        path: 'management/publishFruit'
      })
    }
  },
  watch: { // 深度 watcher
    'checkboxModel': {
      handler: function (val, oldVal) {
        if (this.checkboxModel.length === this.checkboxData.length) {
          this.checked = true
        } else {
          this.checked = false
        }
      },
      deep: true
    }
  },
  data () {
    return {
      checkboxData: [{
        id: '1',
        fruitTit: '1语言教育与文化教育的并行名称语言教育与文化教育的并行名称语言教育与文化教育的并行名称'
      }, {
        id: '2',
        fruitTit: '2语言教育与文化教育的并行名称语言教育与文化教育的并行名称语言教育与文化教育的并行名称'
      }, {
        id: '3',
        fruitTit: '3语言教育与文化教育的并行名称语言教育与文化教育的并行名称语言教育与文化教育的并行名称'
      }, {
        id: '4',
        fruitTit: '4语言教育与文化教育的并行名称语言教育与文化教育的并行名称语言教育与文化教育的并行名称'
      }, {
        id: '5',
        fruitTit: '5语言教育与文化教育的并行名称语言教育与文化教育的并行名称语言教育与文化教育的并行名称'
      }, {
        id: '6',
        fruitTit: '6语言教育与文化教育的并行名称语言教育与文化教育的并行名称语言教育与文化教育的并行名称'
      }, {
        id: '7',
        fruitTit: '7语言教育与文化教育的并行名称语言教育与文化教育的并行名称语言教育与文化教育的并行名称'
      }],
      checkboxModel: [],
      checked: ''
    }
  }
}
</script>
<style media="screen">
#management .managementCon{
  margin-top: .05rem;
  margin-bottom: .9rem;
  padding: 0.1rem 0.29rem 0 ;
  box-sizing: border-box;
}

#management .managementCon .magBtns{
  height: 0.9rem;

}
#management .managementCon .magBtns .allSelBox{
  height: 100%;
  float: left;
}
#management .managementCon .magBtns .allSelBox input{
  width: .28rem;
  border-radius: 0.08rem;
  line-height: .89rem;
  display: block;
  float: left;
  height: 0.8rem;
  margin-right: 0.1rem;
}
#management .managementCon .magBtns .allSelBox span{
  font-size: .26rem;
  line-height: .8rem;
  display: block;
  float: left;
}
#management .managementCon .magBtns .del,#management .managementCon .magBtns .submitFruit{
   width: .88rem;
  height: 0.4rem;
border-radius: 0.1rem;
  background: #36d7b6;
  float: right;
  font-size: .24rem;
  font-weight: normal;
  color: #fff;
  font-family: "微软雅黑";
  line-height: .4rem;
  text-align: center;
  margin-top: 0.22rem;
  margin-left: 0.2rem;
}
#management .managementCon .magBtns .submitFruit{

  border: none;
  float: right;
}
#management .managementCon .fruitList .fruitItem{
    height: 1.03rem;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 0.15rem;
}
#management .managementCon .fruitList .fruitItem .selBox{
    float: left;
    height: 100%;
    margin-right: 0.1rem;
    margin-top: 0.07rem
}
#management .managementCon .fruitList .fruitItem .selBox input{
    width: .28rem;
    display: block;
}
#management .managementCon .fruitList .fruitItem .fruitTit{
  font-size: .28rem;
  color: #000;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding-right: 0.2rem;
    box-sizing: border-box;
    font-family: "微软雅黑";
}
#management .managementCon .fruitList .fruitItem .foot{
  height: .6rem;
}
#management .managementCon .fruitList .fruitItem .foot span{
  font-size: .2rem;
  line-height: .6rem;
  height: .6rem;

}
</style>
