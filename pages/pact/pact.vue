<template>
	<view class="main-pact-content">
		<hr>
		<view class="img-group">
			<image src="../../static/img/main/pact/bg1.svg" mode="aspectFit"></image>
			<view class="img-title">
				<p>星球公約</p>
				<p>由星球居民共同投票修訂</p>
			</view>
		</view>
		<view class="img-group">
			<image class="center-img" src="../../static/img/main/pact/bg2.svg" mode="aspectFit"></image>
			<p class="center-title">潘多拉星球是一個居民自治的星球，星球的產品和公約都由星球居民投票決定。作為星球的居民有權利和義務一起
			建設屬於我們美好的家園。</br>
			居民在每一次投票建設中，都會獲得星球原力值，增加星球通行證PAN弊的生產</p>
		</view>
		<p class="vote-title">投票列表</p>
		<view class="vote-list">
			<view v-for="(item, index) in voteList" :key="index" >
				<view class="vote-li" @tap="voteDetails(item.voteItem)">
					<text>{{item.voteItem}}</text><text>{{item.status}}</text>
					<p>投票可獲得{{item.focus}}個永久原力</p>
					<hr>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	export default {
		data() {
			return {
				voteList: [{
					voteItem: '關於定位社交的設計',
					status: '正在進行中',
					focus: '5'
				}, {
					voteItem: '公益基金的使用與監管',
					status: '已結束',
					focus: '8'
				}]
			}
		},
		methods: {
			...mapMutations(['setBarText']),
			voteDetails(voteItem) {
				uni.navigateTo({
					url: 'pactVoteDetail'
				})
				this.$store.state.voteItem = voteItem
			}
		}
	}
</script>

<style scoped="true">
	.main-pact-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #131D21;
		color: #EFEFF4;
	}
	
	.main-pact-content>hr {
		height:2upx;
		border:none;
		background-color: #4CD964;
	}

	.img-group {
		position: relative;
	}
	
	.img-title {
		position: absolute;
		bottom: 30upx;
		padding: 0 50upx;
	}
	
	.img-title p:nth-child(1) {
		font-size: 50upx;
		margin-bottom: 10upx;
	}
	
	.img-title p:nth-child(2) {
		font-size: 30upx;
	}
	
	.img-group image {
		width: 100%;
		height: 315upx;
	}
	
	.center-img {
		width: 100%;
		height: 250upx;
		margin-top: -40upx;
	}
	
	.center-title {
		position: absolute;
		top: 20upx;
		padding: 0 50upx;
		font-size: 25upx;
		line-height: 42upx;
	}
	
	.vote-title {
		margin: 50upx 50upx 0 50upx;
		font-size: 35upx;
	}
	
	.vote-list {
		margin: 0 50upx;
	}

	.vote-li {
		margin-top: 10upx;
		padding: 40upx 10upx;
		font-size: 30upx;
	}
	
	.vote-list text:nth-child(2) {
		float: right;
	}
	
	.vote-list view p {
		font-size: 20upx;
		color: #808080;
		margin-top: 5upx;
	}
	
	hr {
		margin-top: 5upx;
		height: 3upx;
		border: none;
		border-top: 3upx solid #C8C7CC;
	}
</style>
