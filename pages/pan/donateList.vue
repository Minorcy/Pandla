<template>
	<view class="donate-page">
		<!-- <view>
			<li v-for="(item, index) in donateList" :key='index'>
				<text>{{index+1}}</text>
				<image :src="item.portrait" mode="aspectFill" />
				<text>{{item.name}}</text>
				<text :style="{color: textColor[index]}">{{item.number|toFixed(0)}}</text>
			</li>
		</view> -->
		<view class="ranking" v-if="!isShow">
			<text>您的捐赠数量: {{meRanking.number|toFixed(0)}}</text>
			<text>排名:{{meRanking.rownum}}</text>
		</view>
		<view class="ranking-none" v-if="isShow">
			<text>您还未捐赠，赶紧去捐赠吧！</text>
		</view>
		<scroll-view class="list">
			<view class="list-item" v-for="(item, index) in donateList" :key='index'>
				<view class="item-info">
					<text :style="{color: textColor[index]}">{{index+1}}</text>
					<image :src="item.portrait" mode="aspectFill" />
					<text :style="{color: textColor[index]}" class="name">{{item.name}}</text>
				</view>
				<view class="number">
					<text :style="{color: textColor[index]}">{{item.number|toFixed(0)}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		getPollTop,
		getMeRanking
	} from '../../api/api.js';
	export default {
		data() {
			return {
				donateList: '',
				textColor: ['#ff0000', '#ff0000', '#ff0000'],
				meRanking: {},
				isShow: false,
				flag:true
			}
		},
		methods: {
			getDonateList() {
				getPollTop().then(data => {

					this.donateList = data.slice(0, 20);
				});
				getMeRanking().then(data => {

					if (!data) {
						this.isShow = true
						console.log("1")
						return
					}
					this.meRanking = data

				})
			}
		},
		onReachBottom() {
			if(!this.flag){
				return
			}
			getPollTop().then(data => {
				this.donateList = this.donateList.concat(data.slice(20));
				this.flag = false
			});
		},
		onLoad() {
			this.getDonateList();
		}
	}
</script>

<style scoped>
	.donate-page {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		background-color: #FFFFFF;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-y: scroll;
	}

	.ranking {
		position: sticky;
		top: 0px;
		width: 100%;
		padding: 10px 20px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		border: 1px solid #999999;
		border-radius: 20px;
		z-index: 110;
		background-color: #FFFFFF;
	}

	.ranking-none {
		width: 100%;
		padding: 10px 20px;
		text-align: center;
		line-height: 1.5;
		font-size: 14px;
		color: #4A4A4A;
	}

	.ranking text {
		text-align: center;
		line-height: 1.5;
		font-size: 14px;
		color: #4A4A4A;
	}

	.list {
		box-sizing: border-box;
		width: 100%;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 14px;
		color: #4A4A4A;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-y: scroll;
	}

	.list-item {
		padding: 5px;
		margin-bottom: 10px;
		border-bottom: 1px solid #999999;
		display: flex;
		justify-content: space-between;
	}

	.item-info {
		display: flex;
		align-items: center;
	}

	.list-item text {
		display: block;
		line-height: 1.5;
		text-align: center;
		margin: 0 10px;
	}

	.number {
		display: flex;
		align-items: center;
	}

	image {
		width: 72upx;
		height: 72upx;
		border-radius: 50%;

	}
</style>
