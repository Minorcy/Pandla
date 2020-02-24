<template>
	<view class="notice-page">
		<uni-collapse accordion="true">
			<uni-collapse-item v-for="(item,index) in noticeMsg" :key='index' :title="item.context" :open ="item.isOpen">
				<view style="padding: 30upx;" v-if="index != 0">
					{{item.context}}
				</view>
				<view class="img" v-if="index == 0">
					<image src="../../static/img/notice/01.png" mode="widthFix"></image>
					<image src="../../static/img/notice/02.png" mode="widthFix"></image>
					<image src="../../static/img/notice/03.png" mode="widthFix"></image>
					<image src="../../static/img/notice/04.png" mode="widthFix"></image>
					<image src="../../static/img/notice/05.png" mode="widthFix"></image>
					<view class="bottom">
						<text>郵箱：<text class="blue">doc@pandla.io</text></text>
						<text>Facebook： <text class="blue">Pandla Planet</text></text>
						<text>微信公眾號：<text class="blue">PANDLA</text></text>
					</view>
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
	
</template>

<script>
	import {
		getIndexBulletin
	} from '@/api/api.js'
	import uniCollapse from "@/components/uni-collapse/uni-collapse"
	import uniCollapseItem from "@/components/uni-collapse-item/uni-collapse-item"
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				noticeMsg: ''
			}
		},
		onLoad(option) {
			getIndexBulletin().then(data => {
				this.noticeMsg = data
				this.noticeMsg.filter(item=>{
					item.isOpen = false
				})
				this.noticeMsg[option.index].isOpen = true
			})
		}
	}
</script>

<style>
	.notice-page {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	text {
		font-size: 14px
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.img {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.img image {
		display: block;
		width: 100%;
		height: 100%;
	}

	.bottom text .blue {
		color: #4A90E2;
		display: inline-block;
	}

	.bottom {
		margin-bottom: 20px;
	}

	.bottom text {
		display: block;
		font-size: 14px;
	}
</style>
