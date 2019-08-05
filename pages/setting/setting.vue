<template>
	<view class="pages-content">
		<!-- <ul>
			<li v-for="(item, index) in settings" :key=index >
				<button
					class="btn-primary"
					hover-class="hover-primary" 
					:style="{background: item.specColor}" @tap="toIntroduce(index)">
					{{item.label}}
				</button>
			</li>
		</ul> -->
		<ul>
			<li title="" note="" class="btn-primary" @tap="toIntroduce()">關於PANDLA</li>
			<li title="" note=" " class="btn-primary">版本更新<text>公測建設1.0</text></li>
			<li title="" note="" class="btn-primary">清除緩存</li>
			<li title="" note="" class="btn-primary" @tap="totermsofservice()">服務條款</li>
			<li title="" note="" class="btn-primary" @tap="toPrivacypolicy()" >隱私政策</li>
			<li title="" note="" class="btn-primary">聯係我們 <text>media@pandla.io</text></li>

		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				}
		},
		methods: {
			toIntroduce() {
				uni.navigateTo({
					url: "introduce"
				});
			},
			totermsofservice(){
				uni.navigateTo({
					url: "/pages/reg/termsofservice"
				});	
			},
			toPrivacypolicy(){
				uni.navigateTo({
					url: "/pages/reg/Privacypolicy"
				});
				
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.pages-content {
		background-color: #131D21;
	}

	.btn-primary {
		width: 95%;
		text-align: left;
		margin-left: 10px;
		background-color: transparent;
		color: #EFEFF4;
		margin-top: 20upx;
		font-size: 14px;
		line-height: 35px
	}

	text {
		display: inline-block;
		float: right;
		color: #007aff
	}

	ul {
		box-sizing: border-box;
		margin: 0;
		padding: 5px;
	}

	li {
		padding: 1px;
		border-bottom: 1upx #EFEFF4 solid;
	}
</style>
