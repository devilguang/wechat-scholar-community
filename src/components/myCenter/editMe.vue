<template lang="html">
  <div id="editMe">
    <form class="editBox">
        <section class="imgBox eachBox clrfix">
          <p>
            <img  v-if="momentInfo.headPhotoUrl&&momentInfo.headPhotoUrl.length>0" :src="'http://120.55.191.189:9000/v1/userInfo/headPhoto?filePath='+momentInfo.headPhotoUrl">
            <img  v-else :src="defaultImg">
          </p>
          <span class="resend" style="color: #36d7b6">重新上传></span>
        </section>
        <section class="weixinBox eachBox clrfix" style="background:gainsboro" >
            <p>微信号</p>
            <input  v-model="momentInfo.nickName" type="text"  size="30" disabled="disabled" style="background:gainsboro">
        </section>

        <section class="nameBox eachBox clrfix" :style="{'border-bottom-color':activeColor1}">
           <p>学者名*</p>
          <input  v-model="momentInfo.scholarName" type="text" size="30" @focus="activeColor1 = '#36d7b6'" @blur="activeColor1=''">
        </section>

        <section class="instituteBox eachBox clrfix" :style="{'border-bottom-color':activeColor2}">
          <p>机构*</p>
          <input  v-model="momentInfo.orgName" type="text"   size="30" @focus="activeColor2 = '#36d7b6'" @blur="activeColor2=''">
        </section>

        <section class="dirBox eachBox clrfix" :style="{'border-bottom-color':activeColor3}">
          <p>领域方向*</p>
          <input v-model="momentInfo.area" type="text"   size="30" @focus="activeColor3 = '#36d7b6'"  @blur="activeColor3=''">
        </section>

        <section class="statusBox eachBox clrfix" style="background:gainsboro">
          <p>认证状态</p>
          <span>{{momentInfo.status}}</span>
        </section>

        <section class="emailBox eachBox clrfix" :style="{'border-bottom-color': activeColor4}">
          <p>邮箱</p>
          <input v-model="momentInfo.main" type="text"  size="30" @focus="activeColor4 = '#36d7b6'"  @blur="activeColor4=''">
        </section>

        <section class="telBox eachBox clrfix" :style="{'border-bottom-color':activeColor5}">
          <p>手机号</p>
          <input v-model="momentInfo.phone" type="text" size="30" @focus="activeColor5 = '#36d7b6'"  @blur="activeColor5=''">
        </section>

        </form>
    <article class="btnBox clrfix">
      <button type="button" name="button" class="back" @click="back()">返回</button>
      <button type="button" name="button" class="confirmChange" @click="confirmChange()">确认修改</button>
    </article>
    <message-box v-if="showFlag" meassage="带*号的为必填项" v-on:listenToChild="showMsgChild"></message-box>
  </div>
</template>
<script>
import messageBox from '../diaLog.vue'
export default {
  data () {
    return {
        momentInfo: {
            nickName:'',
            scholarName:'',
            orgName:'',
            area:'',
            status:'',
            mail:'',
            phone:'',
            headPhotoUrl:''
        },
        defaultImg:'../../static/img/img-scholar_1.png',
        dataFlag:false,
        activeColor1:'',
        activeColor2:'',
        activeColor3:'',
        activeColor4:'',
        activeColor5:'',
        showFlag:false
    }
  },
  components:{
      messageBox
  },
  methods: {
   showMsgChild(){
       this.showFlag = false
   },
    confirmChange () {
        if(!this.momentInfo.scholarName||!this.momentInfo.orgName||!this.momentInfo.area){
            this.showFlag = true
            return
        }else{
            this.$axios({
                method:'patch',
                url:'/v1/weChat/userInfo',
                data:{
                    "phone": this.momentInfo.phone,
                    "mail":this.momentInfo.mail,
                    "scholarName": this.momentInfo.scholarName,
                    "orgName": this.momentInfo.orgName,
                    "area":this.momentInfo.area
                }
            }).then((res)=>{
                this.$router.push({
                    path:'/myCenter/myInfo'
                })
            })
        }
    },
    getUserInformation(){
        this.$axios.get('/v1/weChat/userInfo').then((res)=>{
            let {nickName,scholarName,orgName,area,status,mail,phone,headPhotoUrl} = res.data.data;
            Object.assign(this.momentInfo,{nickName,scholarName,orgName,area,status,mail,phone,headPhotoUrl})
            if(res.data.data.isAuth){
                this.momentInfo.status ='已认证'
            }else{
                this.momentInfo.status ='未认证'
            }
        })
    },
    back () {
      this.$router.push({
        path: './myInfo'
      })
    }
  },
  mounted () {
    this.getUserInformation()
  }
}
</script>
<style>
section{
  border-bottom:1px solid #f5f5f5;
}
#editMe .editBox{
  margin-bottom: .9rem;
  padding-top:0.3rem;
  box-sizing: border-box;
}
#editMe .editBox .eachBox{
  border-bottom: 1px solid #ccc;
  padding: 0.15rem 0.34rem;
  box-sizing: border-box;
}
#editMe .editBox .eachBox p{
  float: left;
  font-size: .28rem;
}
#editMe .editBox .eachBox input{
  color: #000;
  font-size: .26rem;
  text-align: right;
}
#editMe .editBox .imgBox p{
  width: 1.25rem;
}
#editMe .editBox .imgBox p img{
  width: 100%;
}
#editMe .editBox .imgBox{
  position: relative;
}

#editMe .editBox .imgBox .resend{
  float: right;
  bottom: 0;
  position: absolute;
  right: 0.3rem;
    top:.8rem;
   color: #000;
   font-size: .26rem;
}
#editMe .editBox .statusBox{
   position: relative;

}
#editMe .editBox .statusBox span{
   position: absolute;
   top:.15rem;
   right: .39rem;
   font-size: .26rem;
   color: #000;
}
#editMe .editBox .eachBox input{
  border: none;
  float: right;
  background: #f5f5f5;
}
#editMe .btnBox{
  padding: 0 22%;
  box-sizing: border-box;
}
#editMe .btnBox button{
  border: none;
  background: #36d7b6;
  border-radius: 0.1rem;
  padding: 0 0.3rem;
  color: #fff;
  height: .68rem;
  line-height: .68rem;
  font-size: .26rem;
}
#editMe .btnBox .back{
   float: left;
}
#editMe .btnBox .confirmChange{
  float: right;
}
.active{
    border-color:#36d7b6
}
</style>
