<template>
	<view class="purse-page">
		<view class="top-wrapper">
			<view class="asset">
				<view class="asset-left">
					<p>我的資產PAN幣</p>
					<text class="balance">{{propInfo.balance | toFixed(4)}}</text>
					<text class="asset-rmb">≈{{ this.rmb | toFixed(4)}} USTD</text>
				</view>
				<view class="asset-right">
					<p>冻结PAN幣</p>
				</view>
			</view>
			<view class="panData">
				<view class="data">
					<p>PAN/USTD</p>
					<p :class="red == true ? 'red' : '' ">{{data1}}</p>
					<p :class="red == true ? 'red' : '' ">{{data2}}</p>
					<text class="data-24">24H{{data3}}</text>
				</view>
				<view class="bottom">
					<text>提幣</text>
					<text>|</text>
					<text>充幣</text>
				</view>
			</view>
		</view>
		<view class="introduce">
			<text class="introduce-title">星球用戶達到200萬時開啟提幣和充幣功能</text>
			<text class="introduce-content">
				<text>【PAN】是潘多拉星球發行的數字貨幣，也是潘多拉星球 唯一權益證明，基於EOS公鏈發行，恆定20億永不增發</text>

				<text>用戶行為即挖礦，越早起參與星球建設的用戶更容易獲得PAN幣，PAN幣的價值也會隨著星球居民和應用場景的增加而上升</text>

				<text>潘多拉星球居民可以根據自己持有PAN幣數量獲得星球盈利分潤</text>
			</text>
		</view>
	</view>
</template>

<script>
	import {
		getIndex,
		donate,
		getChange_24h
	} from '../../api/api.js';
	export default {
		data() {
			return {
				propInfo: '',
				data1: '+0.91%',
				data2: '0.082',
				data3: '89,893,708',
				panVlaue: '198,878',
				donateValue: '10',
				rmb: '',
				red: false
			}
		},
		methods: {
			getMyIndex() {
				getIndex().then(data => {
					this.propInfo = data;
					// 限制小数点后为4位
					// console.log(this.propInfo)
					// console.log(this.data2)

					this.rmb = this.propInfo.balance * this.data2
				})
			},
			getChang() {
				getChange_24h().then(data => {
					// console.log(data.data[0])
					this.data1 = data.data[0].change_24h
					// console.log(this.data1)
					if (this.data1 > 0) {
						this.data1 = "+" + this.data1
					} else {
						this.red = true
						this.data1 = this.data1
					}
					this.data3 = data.data[0].volume_24h
					this.data2 = data.data[0].current

				})

			},

		},
		onLoad() {
			this.getMyIndex();
			this.getChang()
		}
	}
</script>

<style lang="scss" scoped>
	.purse-page {
		width: 100%;
		background-color: #FFFFFF;
	}

	.top-wrapper {
		width: 97%;
		padding: 10px;
		margin: 0 auto;
		box-sizing: border-box;
		height: 212px;
		background: rgba(19, 29, 33, 1);
		border-radius: 5px;
		color: #FFFFFF;
		font-size: 14px;
	}

	.asset {
		width: 100%;
		height: 55%;
		display: flex;
		justify-content: space-between;
		align-content: flex-start;
	}

	.asset-left {
		padding: 5px;
		display: flex;
		flex-direction: column;
		text-align: center;
		line-height: 20px;
	}

	.asset-left .balance {
		font-size: 20px;
		line-height: 30px;
	}

	.asset-right {
		padding: 5px;
		margin-right: 65px;
	}

	.panData {
		width: 100%;
		height: 40%;
	}

	.data {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	.data>p:nth-child(2) {
		color: #4CD964;
		margin-bottom: 5upx;
		text-align: right;
	}

	.data>p:nth-child(3) {
		color: #4CD964;
		margin-bottom: 10upx;
		text-align: right;
	}

	.red {
		color: red !important;
	}

	.bottom {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
	}

	.bottom text {
		width: 30%;
		text-align: center;
		display: inline-block;
	}

	.introduce {
		padding: 10px;
		width: 100%;
		box-sizing: border-box;
	}

	.introduce-title {
		display: block;
		margin: 10px 0;
		font-size: 14px;
		line-height: 20px;
	}

	.introduce-content {
		font-size: 14px;
		color: #9B9B9B;
	}
	.introduce-content text{
		display: block;
		padding: 5px;
	}
</style>
