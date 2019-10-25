<template>
	<view class="passport">
		<view class="passport-wrapper">
			<view class="top">
				<text>PASSPORT</text>
			</view>
			<view class="passport-content">
				<image :src="userInfo.portrait" mode="aspectFill"></image>
				<view class="content-right">
					<view class="info">
						<view class="info-left">
							<text>昵稱</text>
							<text>{{userInfo.name}}</text>
							<text>
								移民星球日期
							</text>
							<text>
								{{userInfo.createTime }}
							</text>
						</view>
						<view class="info-right">
							<text>角色</text>
							<text>{{userInfo.acctType}}</text>
						</view>
					</view>
					<view class="card">
						<view class="bar-code">
							<tki-barcode ref="barcode" :val="val" format="code39" />
						</view>
						<text>ID:</text>
						<text>U{{userInfo.id}}</text>
					</view>
				</view>
				<image src="../../static/img/passport/passport.png"  class="seal"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {findByID} from '@/api/api.js'
	import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
	export default {
		components: {
			tkiBarcode
		},
		data() {
			return {
				userInfo: '',
				val: "",
				opations: {
					width: 4,
					height: 4,
					displayValue: false,

				}
			}
		},
		onLoad() {
			this.val = uni.getStorageSync('USERS_KEY').id.toString()
			findByID().then(data => {
				console.log(data)
				data.createTime = data.createTime.substr(0,10)
				this.userInfo = data
				
			})
		}

	}
</script>

<style>
	.passport {
		width: 100%;
		background-color: white;
	}

	.passport-wrapper {
		box-sizing: border-box;
		width: 97%;
		margin: 0 auto;
		height: 220px;
		border-radius: 10px;
		border: 2px solid rgba(19, 29, 33, 1);
	}

	.top {
		width: 100%;
		height: 51px;
		background: rgba(19, 29, 33, 1);
		overflow: hidden;
		display: flex;
		flex-direction: row-reverse;
		box-sizing: border-box;
		padding: 5px 10px;
	}
	.top text {
		display: block;
		height: 40px;
		font-size: 34px;
		font-weight: 300;
		color: rgba(255, 255, 255, 1);
		line-height: 40px;
		letter-spacing: 2px;
	}

	.passport-content {
		position: relative;
		box-sizing: border-box;
		display: flex;
		width: 100%;
		height: 161px;
		padding: 10px;
	}
.passport-content .seal{
	position: absolute;
	width: 100px;
	height: 100px;
	bottom: 5px;
	right: 0px;
	z-index: 9;
}
	.passport-content image {
		width: 105px;
		height: 138px;
		margin-right: 20px;
	}

	.content-right {
		height: 90px;
		width: 55%;
	}

	.info {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.info text {
		display: block;
		font-size: 14px;
		line-height: 1.5;
	}

	.info-left text:nth-child(2) {
		margin-bottom: 10px;
	}

	.info-left text:nth-child(2n+1) {
		color: #9B9B9B;
		font-size: 12px;
	}

	.info-right text:nth-child(2n+1) {
		color: #9B9B9B;
		font-size: 12px;
	}

	.info-right {
		margin-left: 20px;
	}

	.info-right text {
		text-align: center;
	}

	.card {
		padding: 10px 10px 10px 0;

	}

	.card text:nth-child(1) {
		font-size: 14px;
		color: #9B9B9B;
	}

	.bar-code {
		width: 100%;
		height: 20px;
		overflow: hidden;
	}
</style>
