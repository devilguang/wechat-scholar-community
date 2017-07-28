<template>
	<div id="findScholar" style="height:100vh;background:#fff">
		<div class="searchImg">
			<img src="../assets/img/img-search-bg.png">
		</div>
		<form class="searchForm">
			<fieldset>
				<legend>学者查询</legend>
				<div class="searchFormGroup">
					<label>姓名（必填）</label>
					<input type="text" v-model="scholarName" :value="scholarName" placeholder="请输入学者姓名" />
				</div>
				<div class="searchFormGroup">
					<label>机构</label>
					<input type="text" v-model="insName" :value="insName" placeholder="请填写尽量详细化" />
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
import infiniteScroll from 'vue-infinite-scroll'

export default {
	data() {
		return {
			scholarName: '',
			insName: ''
		}
	},
	methods: {
		search: function () {
			// defType=edismax&indent=on&mm=75%&q=scholar_name:"乐江"%20and%20org_name:"基础医学院"&wt=json
			var q = '';
			if (this.scholarName != '') {
				q += 'scholar_name:"' + this.scholarName + '"';
			}
			if (this.insName != '') {
				q += ' and org_name:' + this.insName;
			}
			// window.sessionStorage.setItem('data', JSON.stringify(q))
            this.$store.dispatch('saveQueryScholar', q);
			this.$router.push({
				path: '/findScholar/scholarResult'
			})
		}
	},
	mounted() {
		// 先获取假数据
	}
}
</script>
