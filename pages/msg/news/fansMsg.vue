<template>
	<view class="fans-page ">
		<text class="no-list" v-if="!fnasList.length">暫無信息提示</text>
		<view class="list-item" v-for="(item,index) in fnasList" :key="index">
			<image :src="item.portrait" mode="aspectFill" class="item-img" @tap="userInfo(item.uid)"></image>
			<view class="list-item-right">
				<view class="item-userInfo">
					<text class="name">{{item.username}}</text>
					<text class="content">{{item.content}}</text>
					<text class="time">{{item.date}}</text>
				</view>
				<view class="btn" @tap="unFollow(item.uid,index)">
					<image src="../../../static/img/daily/follow.svg" mode="widthFix" v-if="item.isLike == 0"></image>
					<image src="../../../static/img/daily/fans.svg" mode="widthFix" v-if="item.isLike == 1"></image>
					<image src="../../../static/img/daily/mutual.svg" mode="widthFix" v-if="item.isLike == 2"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		upStatus,
		concern,
		getFollow
	} from "@/api/api.js"
	export default {
		data() {
			return {
				followList: '',
				fnasList: ''
			}
		},

		methods: {
			userInfo(id) {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + id
				});
			},
			unFollow(id, index) {
				if (this.fnasList[index].isLike) {
					return
				}
				concern(1, id).then(data => {
					this.fnasList[index].isLike = 1
					console.log(this.fnasList[index].isLike)
				})

			},
			changeStatus(type) {
				const reg = /^((?!取消).)*$/
				upStatus(type).then(data => {
					// console.log(data)
					this.$store.state.pushMsg.pushFansMsg[0].id = 0
					this.$store.dispatch('getFansMsg')
				})
				getFollow().then(data => {
					this.followList = data;
					// console.log(this.followList)
					var arr1 = this.followList
					var arr2 = this.fnasList
					var arr = arr2.map(item1 => {
						item1.isLike = 0; //先设置所有的状态为0
						arr1.map(item2 => { //再判断有相同项的状态为1
							if (item2.id == item1.uid) {
								if (!reg.exec(item1.content)) {
									item1.isLike = 1
								} else {
									item1.isLike = 2;
								}

							}
						})
						return item1;
					})

					this.fnasList = arr
				})



			}
		},
		onLoad() {
			this.fnasList = this.$store.state.pushMsg.pushFansMsg
			this.changeStatus(4)
		},
		onShow() {
			this.changeStatus(4)
		}
	}
</script>

<style scoped>
	.fans-page {
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
		height: 70px;
		margin-bottom: 10px;
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
		flex: 1;
		border-bottom: 1px solid rgba(220, 220, 220, 0.5);
		display: flex;
		justify-content: space-between;
	}

	.item-userInfo {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		line-height: 1.5;
		padding: 10px 0;
	}

	.item-userInfo .name {
		display: block;
		font-size: 14px;
		color: #4A4A4A;
		line-height: 1.5;
	}

	.item-userInfo .content {
		display: block;
		font-size: 14px;
		color: #9B9B9B;
		line-height: 1.5;
	}

	.item-userInfo .time {
		display: block;
		font-size: 12px;
		color: #4A4A4A;
		line-height: 1.5;
	}

	.item-log {
		width: 75px;
		display: flex;
		align-items: center;
	}

	.item-log image {
		width: 71px;
		height: 71px;
	}

	.btn {

		width: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn image {
		width: 100px;
	}
</style>
