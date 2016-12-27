<template>
 <div id="findScholar" style="height:100vh;background:#fff">
       <div class="searchImg"><img src="../assets/img/img-search-bg.png"></div>
		<form class="searchForm">
			<fieldset>
				<legend>学者查询</legend>
				<div class="searchFormGroup">
					<label>姓名（必填）</label>
					<input type="text" v-model="scholarName" :value="scholarName" placeholder="请输入学者姓名"/>
				</div>
				<div class="searchFormGroup">
					<label>机构</label>
					<input type="text" v-model="insName" :value="insName" placeholder="请填写尽量详细化"/>
				</div>
        <!-- <router-link to="/findScholar/scholarResult"> -->
          <p class="searchFormSubmit" @click="search">开始查询</p>
        <!-- </router-link> -->
			</fieldset>
		</form>
</div>
</template>
<script>
import axios from 'axios'
import qs from 'querystring'
export default {
  data () {
    return {
      scholarName: '',
      insName: ''
    }
  },
  methods: {
    search: function () {
      console.log(123)
      var that = this
      console.log(this.scholarName)
      axios.post('http://localhost/query/gatherScholarItem', qs.stringify({
        scholar: that.scholarName,
        organ: that.insName
      }))
      .then((response) => {
        console.log(response)
        window.sessionStorage.setItem('data', JSON.stringify(response))
        this.$router.push({
          path: '/findScholar/scholarResult'
        })
      })
      .then((error) => console.log(error))
    }
  },
  mounted () {
    // 先获取假数据
  }
}
</script>
