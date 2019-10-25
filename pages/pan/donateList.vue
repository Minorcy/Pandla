<template>
	<view class="donate-page" >
			<scroll-view scroll-y="true"  class="scroll" enable-back-to-top="true">
				<view class="ranking" v-if="!isShow">
					<text>您的捐贈數量: {{meRanking.number|toFixed(0)}}</text>
					<text>排名:{{meRanking.rownum}}</text>
				</view>
				<view class="ranking-none" v-if="isShow">
					<text>您的捐贈數量您還未捐贈，趕緊去捐贈吧！</text> 
				</view>
				<view class="list">
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
				flag: true,
				maxHeight: ""
			}
		},
		methods: {
			getDonateList() {
				getPollTop().then(data => {
					this.donateList = data;
				});
				getMeRanking().then(data => {
					if (!data) {
						this.isShow = true
						return
					}
					this.meRanking = data

				})
			}
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
		/* -webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-y: scroll; */
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.scroll{
		width: 100%;
		height: 100%;
	}
	.ranking {
		position: relative;
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
		padding: 10px 0;
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
