<template>
	<view class="pages-content">
		<view class="img-group">
			<image src="../../static/img/main/pact/bg1.svg" mode="aspectFit"></image>
			<view class="img-title">
				<p>{{labelList.title}}</p>
				<p>由星球居民共同投票修訂</p>
			</view>
		</view>
		<view class="img-group">
			<image class="center-img" src="../../static/img/main/pact/bg2.svg" mode="aspectFit"></image>
			<p class="center-title">{{labelList.context}}</p>
		</view>
		<p class="vote-title">投票列表</p>
		<view class="vote-list">
			<view v-for="(item, index) in voteList" :key="index" >
				<view class="vote-li" @tap="voteDetails(item.name, item.id, item.status)">
					<text>{{item.name}}</text>
					<text v-if="item.status == 0">已結束</text>
					<text v-else>正在進行中</text>
					<p>投票可獲得{{item.foces}}個永久原力</p>
					<hr>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	import {toTreIndex} from '../../api/api.js';
	
	export default {
		data() {
			return {
				voteList: '',
				labelList: ''
			}
		},
		methods: {
			...mapMutations(['setBarText']),
			voteDetails(voteName, voteId, voteStatus) {
				let voteValue = {voteName: voteName, voteId: voteId, voteStatus: voteStatus}
				this.setBarText(voteValue);
				uni.navigateTo({
					url: 'pactVoteDetail'
				});
			},
			treatyIndex() {
				toTreIndex().then(data => {
					this.voteList = data;
					this.labelList = data[0];
				});
			}
		},
		onLoad() {
			this.treatyIndex();
		}
	}
</script>

<style scoped="true">
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
