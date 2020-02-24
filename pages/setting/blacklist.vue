<template>
	<view class="page">
		<text class="no-list" v-if="!blacklist.length">暫無拉黑的用戶</text>
		<view class="list-item" v-for="(item,index) in blacklist" :key="index">
			<image :src="item.portrait" mode="aspectFill" class="item-img" @tap="toUserInfo(item.uid)"></image>
			<view class="list-item-right" @tap="toUserInfo(item.uid)">
				<view class="item-userInfo">
					<text class="name">{{item.name}}</text>
					<text class="circles">{{item.age}}/{{item.stature}}/{{item.weight}}/{{item.status}}</text>
					<text class="address">{{item.site}}</text>
				</view>
				<view class="item-btn" @tap.stop="noblack(item.blackId,index)">
					<image src="../../static/img/user/noblack.svg"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getInfo,
		queryBlackList,
		checkBlacklist,
		removeBlacklist
	} from "@/api/api.js"
	export default {
		data() {
			return {
				blacklist: [],
				list:''
			}
		},

		
		methods: {
			getInfo(){
				this.list.filter(item => {
					getInfo(item.fromid).then(data => {
						console.log(data)
						data.blackId = item.id
						this.blacklist.push(data)
					})
				})
			},
			toUserInfo(id) {
				uni.navigateTo({
					url: "../../daily/userInfo?uid=" + id
				})
			},
			noblack(id,index){
				this.blacklist.splice(index,1)
				removeBlacklist(id).then(data=>{
					uni.showToast({
						icon: 'none',
						title: data.msg
					});
				})
			}
			
		},
		onLoad() {
			var id = uni.getStorageSync("USERS_KEY").id
			checkBlacklist(id).then(data=>{
				this.list = data
				if(data){
					this.getInfo()
				}
			})
		}
	}
</script>

<style scoped>
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
		height: 100px;

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

	.item-btn {
		width: 75px;
		display: flex;
		align-items: center;
	}
	
	.item-btn image {
		width: 75px;
		height: 35px;
	}
</style>
