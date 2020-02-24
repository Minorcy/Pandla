<template>
	<view class="conn-page ">
		<text class="no-list" v-if="!systemList.length">暫無信息提示</text>
		<view class="list-item" v-for="(item,index) in systemList" :key="index">
			<image src="../../../static/img/msg/system.svg" mode="widthFix" class="item-img"></image>
			<view class="list-item-right" >
				<view class="item-userInfo">
					<text class="name">星球总部</text>
					<text class="content">{{item.context}}</text>
				</view>
				<view class="item-log" v-if="item.image">
				<image :src="item.image" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		upStatus,
		upSysStatus
	} from "@/api/api.js"
	export default {
		data(){
			return{
				systemList:''
			}
		},
		
		methods: {
			changeStatus() {
				upSysStatus().then(data => {
					this.$store.state.pushMsg.pushSystemMsg[0].id = 0
				this.$store.dispatch('getSystemMsg')
				})
			}
		},
		onLoad() {
			this.systemList = this.$store.state.pushMsg.pushSystemMsg
			console.log(this.systemList)
			this.changeStatus()
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
		sheight: 120px;
		box-sizing: border-box;
		display: flex;
		margin-bottom: 10px;

	}

	.item-img {
		width: 100rpx;
		height: 100rpx;
		margin-right: 20px;
		box-sizing: border-box;
		display: flex;
		align-self: center;
		
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
		line-height: 1.5;
		padding: 5px 0;
	}

	.item-userInfo .name {
		display: block;
		font-weight: 700;
		font-size: 16px;
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
</style>

