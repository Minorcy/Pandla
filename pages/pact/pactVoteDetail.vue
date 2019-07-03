<template>
	<view class="pages-content">
		<view class="label-detail">
			<p class="label-info">{{labelList.info}}</p>
			<p class="label-focus">參與投票可獲得{{labelList.foces}}個永久原力值</p>
		</view>
		<button class="vote" hover-class="hover-primary" @tap="vote('1', voteList.status)" :disabled="btnStatus">
			<view class="vote-list-group">
				<p>支持開放</p>
				<image class="vote-img-succ" src="../../static/img/main/pact/success.svg" v-if="voteList.iswell == 1 &&  voteList.status == 1"></image>
			</view>
			<view>
				<text>{{voteList.accepet}}人</text>
				<text>{{voteList.accRatio}}%</text>
			</view>
		</button>
		<progress :percent="voteList.accRatio" stroke-width="2" active active-mode="forwards"/>
		<view class="vote-img-ava">
			<image :src="item" v-for="(item, index) in voteList.accPote" :key="index"></image>
		</view>

		<button class="vote" @tap="vote('0', voteList.status)" :disabled="btnStatus">
			<view class="vote-list-group">
				<p>不支持開放</p>
				<image class="vote-img-succ" src="../../static/img/main/pact/success.svg" v-if="voteList.iswell == 0 &&  voteList.status == 1"></image>
			</view>
			<view>
				<text>{{voteList.noAccepet}}人</text>
				<text>{{voteList.noaccRatio}}%</text>
			</view>
		</button>
		<progress :percent="voteList.noaccRatio" stroke-width="2" active active-mode="forwards"/>
		<view class="vote-img-ava">
			<image :src="item" v-for="(item, index) in voteList.noAccPote" :key="index"></image>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	import {toTreIndex, isVote, sysVote} from '../../api/api.js';
	
	export default {
		data() {
			return {
				labelList: '',
				voteList: '',
				voteId: this.$store.state.voteValue.voteId,
				btnStatus: (this.$store.state.voteValue.voteStatus == 0) ? true : false,
			}
		},
		methods: {
			treatyIndex() {
				toTreIndex().then(data => {
					this.labelList = data[0];
				});
				isVote(this.voteId).then(data => {
					this.voteList = data;
					this.voteList.accRatio = Math.round(this.voteList.accRatio);
					this.voteList.noaccRatio = Math.round(this.voteList.noaccRatio);
				});
			},
			vote(isSupport, voStatus) {
				if(voStatus) {
					uni.showToast({
						icon: 'none',
						title: '已投票'
					});
				} else {
					console.log('投了票')
					sysVote(this.voteId, isSupport);
					this.treatyIndex();
				}
			}
		},
		onLoad() {
			this.treatyIndex();
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: this.$store.state.voteValue.voteName
			});
			// console.log(this.$store.state.voteValue.voteId);
		}
	}
</script>

<style lang="scss" scoped>
	.pages-content {
		width: 100%;
		background-color: #EFEFF4;
		color: #000000;
		font-size: 30upx;
	}
	
	.label {
		&-detail {
			padding: 30upx 30upx 5upx 30upx;
			background-color: #FFFFFF;
			line-height: 60upx;
		}
		
		&-focus {
			font-size: 25upx;
			color: #979797;
			margin-top: 20upx;
		}
	}
	
	.vote {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		border-radius: 0;
		background-color: #FFFFFF;
		margin-top: 60upx;
		padding: 60upx;
		
		&-img {
			padding: 10upx 50upx;
			
			&-succ {
				margin: 15upx 0 0 30upx;
			}
		}
		
		&-list-group {
			display: flex;
			flex-direction: row;
		}
	}
	
	text {
		margin-left: 20upx;
	}
	
	image {
		width: 50upx;
		height: 50upx;
		margin: 20upx 5upx;
		border-radius: 50%;
	}
	
	button::after {
		border-radius: 0;
	}
	
	button[disabled] {
		color: #000000 !important;
		background: #CBCBCB !important;
	}
</style>
