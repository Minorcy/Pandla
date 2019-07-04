<template>
	<view class="pages-content">
		<view class="pan-group">
			<view class="pan-data">
				<p class="pan-data-pan">我的資產(PAN幣)</p>
				<p class="pan-data-bal">{{assetInfo.balance | toFixed(4)}}</p>
				<view class="pan-data-link">
					<text class="pan-data-link-item">區塊鏈地址</text>
					<text>|</text>
					<text class="pan-data-link-item">資金密碼</text>
				</view>
			</view>
		</view>
		
		<view class="pan-list">
			<p class="pan-list-label">交易記錄</p>
			<ul class="pan-list-ul" v-for="(item, index) in listInfo" :key="index">
				<li class="pan-list-li">
					<view>
						<p class="pan-list-action">{{item.action}}</p>
						<text class="pan-list-time">{{item.create_time}}</text>
					</view>
					<text class="pan-list-number">{{item.status}}{{item.number}}</text>
				</li>
				
			</ul>
			<button class="pan-list-load">點擊查看更多</button>
		</view>
	</view>
</template>

<script>
	import {getBalance, getBill} from '../../api/api.js';
		export default {
			data() {
				return {
					assetInfo: '',
					listInfo: '',
				}
			},
			methods: {
				getBalanceData() {
					getBalance().then(data => {
						this.assetInfo = data;
					});
				},
				getBillData() {
					getBill().then(data => {
						this.listInfo = data;
						// console.log(this.listInfo);
					});
				}
			},
			onLoad() {
				this.getBalanceData();
				this.getBillData();
			}
		}
</script>

<style lang="scss" scoped>
	.pan {
		&-group {
			margin: 50upx 50upx 0 50upx;
			border-radius: 10upx;
			overflow: hidden;
		}
		&-data {
			padding: 20upx;
			border: 5upx solid;
			border-bottom: none;
			border-radius: 10upx;
			border-image: -webkit-linear-gradient(left, #03D5C7, #73AE0F) 50 50;
			border-image: -o-linear-gradient(right, #03D5C7, #73AE0F);
			border-image: -moz-linear-gradient(right, #03D5C7, #73AE0F);
			border-image: liner-gradient(#03D5C7, #73AE0F);
		
			&-pan {
				font-size: 25upx;
			}
			
			&-bal {
				margin: 20upx 0 40upx 0;
				font-size: 45upx;
			}
			
			&-link {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 50upx;
				font-size: 25upx;
				
				
				&-item {
					color: #007AFF;
					text-decoration: underline;
				}
			}
		}
		
		&-list {
			border: 1upx solid #979797;
			border-radius: 10upx;
			margin: -5upx 20upx;
			font-size: 35upx;
			
			&-label {
				padding: 20upx;
			}
			
			&-ul {
				padding: 0 50upx;
			}
			
			&-li {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 20upx 0;
				border-bottom: 1upx solid #979797;
			}
			
			&-action {
				font-size: 30upx;
			}
			
			&-time {
				font-size: 25upx;
				color: #979797;
			}
			
			&-number {
				color: #EFEFF4;
				font-size: 30upx;
			}
			
			&-load {
				background-color: transparent;
				color: #EFEFF4;
				text-decoration: underline;
				font-size: 25upx;
				padding-top: 50upx;
			}
		}
	}
</style>
