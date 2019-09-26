<template>
	<view class="passport">
		<view class="passport-wrapper">
			<view class="top">
				<text>潘多拉星球永久居民</text>
			</view>
			<view class="passport-content">
				<image :src="userInfo.portrait" mode="aspectFill"></image>
				<view class="content-right">
					<view class="info">
						<view class="info-left">
							<text>昵称</text>
							<text>{{userInfo.name}}</text>
							<text>
								移民星球日期
							</text>
							<text>
								{{userInfo.createTime | formatDate }}
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
						<text>u{{userInfo.id}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
	import dateFormat from '@/common/utils/Date.js'
	export default {
		components: {
			tkiBarcode
		},
		data() {
			return {
				userInfo: '',
				val: "",
				// opations: {
				// 	height: 8,
				// 	displayValue: false
				// },
				opations: {
					width: 4,
					height: 4,
					displayValue: false,

				}
			}
		},
		filters: {
			formatDate(time) {
				// let date = new Date(time);
				// console.log(date)
				// return dateFormat.formatDate(date, "yyyy.MM.dd");
				// formatDate
				// console.log(time)
				// var now = new Date(time),
				// 	y = now.getFullYear(),
				// 	m = now.getMonth() + 1,
				// 	d = now.getDate();
				// return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) ;
				// // + now.toTimeString().substr(0, 8);
				return time.substr(0,10)
			}

		},

		onLoad() {
			this.userInfo = uni.getStorageSync('USERS_KEY')
			this.val = this.userInfo.id.toString()
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
		text-align: center;
		overflow: hidden;
	}

	.top text {
		margin: 10px 20px;
		display: block;
		width: 342px;
		height: 28px;
		font-size: 20px;
		font-weight: 300;
		color: rgba(255, 255, 255, 1);
		line-height: 28px;
		letter-spacing: 18px;
	}

	.passport-content {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		height: 161px;
		padding: 10px;
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
