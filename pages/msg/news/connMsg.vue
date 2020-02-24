<template>
	<view class="conn-page ">
		<text class="no-list" v-if="!connList.length">暫無信息提示</text>
		<view class="list-item" v-for="(item,index) in connList" :key="index">
			<image :src="item.portrait" mode="aspectFill" class="item-img" @tap="toUserInfo(item.uid)"></image>
			<view class="list-item-right" @tap="toDetails(item.did,item.logImg)">
				<view class="item-userInfo">
					<text class="name">{{item.username}}</text>
					<text class="content">{{item.content}}</text>
					<text class="time"><text v-if="item.type == 3">评论了你</text><text v-if="item.type == 5">回复了你</text>{{item.date}}</text>
				</view>
				<view class="item-log">
					<image :src="item.logImg" mode="aspectFill" v-if="item.logImg"></image>
					<image src="../../../static/img/msg/deleted.svg" mode="aspectFill" v-if="!item.logImg"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		upStatus
	} from "@/api/api.js"
	export default {
		computed: {
			connList() {
				var list = this.$store.state.pushMsg.pushConnMsg
				// var arr = this.$store.state.pushConnMsg
				// var res = new Array();
				// for (var i = arr.length-1; i >= 0; i--) {
				//             res.push(arr[i]);
				//         }
				//         arr = res;
				// console.log(list)
				return list
			}
		},
		methods: {
			toUserInfo(id) {
				uni.navigateTo({
					url: "../../daily/userInfo?uid=" + id
				})
			},
			toDetails(did, img) {
				if (!img) {
					uni.showToast({
						icon: 'none',
						title: '动态已删除'
					});
					return
				}
				uni.navigateTo({
					url: "details?did=" + did
				})
			},
			changeStatus(type) {
				upStatus(type).then(data => {
					console.log(data)
					this.$store.state.pushMsg.pushConnMsg[0].id = 0
					this.$store.dispatch('getConnMsg')
					
				})
			}
		},
		onLoad() {
			this.changeStatus(3)
			
		}
	}
</script>

<style scoped>
	.conn-page {
		width: 100%;
		background-color: #FFFFFF;
		padding: 10px;
		box-sizing: border-box;
	}

	.no-list {
		font-size: 16px;
		text-align: center;
		line-height: 1.5;
		color: #4A4A4A;
		display: block;
		margin: 80px auto;
	}

	.folllow-list {
		width: 100%;
		padding: 64px 10px 0 10px;
		box-sizing: border-box;
		background-color: #fff;
		// min-height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
		box-sizing: border-box
	}

	.list-item {
		width: 100%;
		min-height: 100px;
		box-sizing: border-box;
		display: flex;

	}

	.item-img {
		width: 100rpx;
		height: 100rpx;
		margin-right: 20px;
		box-sizing: border-box;
		display: flex;
		align-self: center;
		border-radius: 100%;
	}

	.list-item-right {
		max-width: 80%;
		flex: 1;
		border-bottom: 1px solid rgba(220, 220, 220, 0.5);
		display: flex;
		justify-content: space-between;
	}

	.item-userInfo {
		max-width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		line-height: 1.5;
		padding: 10px 0;
		word-wrap: break-word;
	}

	.item-userInfo .name {
		display: block;
		font-size: 14px;
		color: #4A4A4A;
		line-height: 1.5;
		word-wrap: break-word;
	}

	.item-userInfo .content {
		display: block;
		font-size: 14px;
		color: #9B9B9B;
		line-height: 1.5;
		word-wrap: break-word;
	}

	.item-userInfo .time {
		display: block;
		font-size: 12px;
		color: #4A4A4A;
		line-height: 1.5;
		word-wrap: break-word;
	}

	.item-log {
		width: 75px;
		display: flex;
		align-items: center;
	}

	.item-log image {
		width: 71px;
		height: 71px;
		border-radius: 5px;
	}
</style>
