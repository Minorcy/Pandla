<template>
	<view class="pages-content">
		<view class="pan-data">
			<image class="pan-img-pan" src="../../static/img/main/pan.png"></image>
			<p class="pan-label-num">PAN幣數量</p>
			<text class="pan-data-num">{{assetInfo.balance | toFixed(4)}}</text>
			<text class="pan-label-deal">交易 ></text>
			<p class="pan-data-freeze">凍結數量: {{assetInfo.freeze | toFixed(4)}}</p>
		</view>
		<view class="pan-notice">
			<p class="pan-label-introduction">{{assetInfo.title}}</p>
			<p class="pan-label-context">{{assetInfo.context}}</p>
		</view>
		<view class="pan-label-list">
			<text class="pan-label-budget" :style="{color: budgetText}" @tap="changeList('budget')">收支記錄</text>
			<text>|</text>
			<text class="pan-label-task" :style="{color: taskText}" @tap="changeList('task')">任務獲取</text>
		</view>
		<view class="pan-list">
			<ul class="pan-list-ul" v-for="(item, index) in listInfo" :key="index">
				<li class="pan-list-li" v-if="labelList == 'budget'">
					<view>
						<p class="pan-list-action">{{item.action}}</p>
						<text class="pan-list-time">{{item.create_time}}</text>
					</view>
					<text class="pan-list-number">{{item.status}}{{item.number}}</text>
				</li>
				<li class="pan-list-li"  v-if="labelList == 'task' && index == 0">
					<view>
						<p class="pan-list-action">星球注冊</p>
					</view>
					<view>
						<p class="pan-list-number">10個PAN幣</p>
						<text class="pan-list-time">已完成</text>
					</view>
				</li>
				<li class="pan-list-li"  v-if="labelList == 'task'">
					<view>
						<p class="pan-list-action">{{item.name}}</p>
					</view>
					<view>
						<p class="pan-list-number">{{item.number}}個PAN幣</p>
						<text class="pan-list-time" v-if="item.status == 1">已完成</text>
						<text class="pan-list-time" v-if="item.status == 0">未完成</text>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import {getBalance, getBill, checkTaskList} from '../../api/api.js';
	export default {
		data() {
			return {
				assetInfo: '',
				listInfo: '',
				labelList: 'budget',
				budgetText: 'black',
				taskText: 'gray'
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
					this.listInfo = '';
					this.listInfo = data;
					// console.log(this.listInfo);
				});
			},
			getTaskData() {
				checkTaskList().then(data => {
					this.listInfo = '';
					this.listInfo = data;
					// console.log(this.listInfo);
				});
			},
			changeList(chooseItem) {
				if(chooseItem == 'budget') {
					this.labelList = 'budget';
					this.budgetText = 'black';
					this.taskText = 'gray';
					this.getBillData();
				} else {
					this.labelList = 'task';
					this.budgetText = 'gray';
					this.taskText = 'black';
					this.getTaskData();
				}
			}
		},
		onLoad() {
			this.getBalanceData();
			this.getBillData();
		}
	}
</script>

<style lang="scss" scoped>
	.pages-content {
		width: 100%;
		background-color: #EFEFF4;
	}
	
	.pan {
		&-data {
			width: 100%;
			background: -webkit-linear-gradient(to right, #000000, #979797); /* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(to right, #000000, #979797); /* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(to right, #000000, #979797); /* Firefox 3.6 - 15 */
			background: linear-gradient(to right, #000000, #979797); /* 标准的语法 */
			
			&-num {
				display: block;
				font-size: 40upx;
				padding: 20upx 0 0 20upx;
			}
			
			&-freeze {
				font-size: 25upx;
				padding: 20upx;
				clear: both;
				background: -webkit-linear-gradient(to right, #424A4D, #979797); /* Safari 5.1 - 6.0 */
				background: -o-linear-gradient(to right, #424A4D, #979797); /* Opera 11.1 - 12.0 */
				background: -moz-linear-gradient(to right, #424A4D, #979797); /* Firefox 3.6 - 15 */
				background: linear-gradient(to right, #424A4D, #979797); /* 标准的语法 */
			}
		}
		
		&-label {
			&-num {
				font-size: 30upx;
				border-bottom: 1upx solid #FFFFFF;
				padding: 20upx;
			}
			
			&-deal {
				float: right;
				margin-right: 20upx;
				font-size: 30upx;
			}
			
			&-introduction {
				font-size: 35upx;
				border-bottom: 1upx solid #979797;
			}
			
			&-context {
				font-size: 25upx;
				line-height: 45upx;
			}
			
			&-list {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 30upx;
				padding: 50upx 100upx;
				color: #000000;
			}
			
			&-budget {
				
			}
			
			&-task {
				
			}
		}
		
		&-notice {
			background-color: #EFEFF4;
			color: #000000;
			padding: 30upx;
			border-bottom: 1upx solid #979797;
		}
		
		&-list {
			border-top: 1upx solid #979797;
			font-size: 35upx;
			color: #000000;
			
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
				color: #CD2626;
				font-size: 30upx;
			}
		}
		
		&-img-pan {
			width:50upx;
			height: 50upx;
			padding: 15upx;
			float: left;
		}
	}
</style>
