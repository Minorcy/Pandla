<template>
	<view class="pages-content">
		<view class="focus-data">
			<image class="focus-img-focus" src="../../static/img/main/focus.svg"></image>
			<p class="focus-label-num">原力值</p>
			<text class="focus-data-num">{{assetInfo.balance | toFixed(4)}}</text>
			<p class="focus-data-freeze">未釋放原力: {{assetInfo.notFree | toFixed(4)}}</p>
		</view>
		<view class="focus-notice">
			<p class="focus-label-introduction">{{assetInfo.title}}</p>
			<p class="focus-label-context">{{assetInfo.context}}</p>
		</view>
		<view class="focus-label-list">
			<text class="pan-label-budget" :style="{color: budgetText}" @tap="changeList('budget')">獲取原力記錄</text>
			<text>|</text>
			<text class="pan-label-task" :style="{color: taskText}" @tap="changeList('task')">任務獲取原力</text>
		</view>
		<view class="focus-list">
			<ul class="focus-list-ul"  v-for="(item, index) in listInfo" :key="index">
				<li class="focus-list-li" v-if="labelList == 'budget'">
					<view>
						<p class="focus-list-action">{{item.action}}</p>
						<text class="focus-list-time">{{item.createTime}}</text>
					</view>
					<view>
						<p class="focus-list-number">{{item.type}} +{{item.number}}</p>
						<text class="focus-list-time">{{item.loseTime}}</text>
					</view>
				</li>
				<li class="focus-list-li"  v-if="labelList == 'task' && index == 0">
					<view>
						<p class="focus-list-action">星球注冊</p>
					</view>
					<view>
						<p class="focus-list-number">50個永久原力</p>
						<text class="focus-list-time">已完成</text>
					</view>
				</li>
				<li class="focus-list-li"  v-if="labelList == 'task'">
					<view>
						<p class="focus-list-action">{{item.name}}</p>
					</view>
					<view>
						<p class="focus-list-number">{{item.number}}個永久原力</p>
						<text class="focus-list-time" v-if="item.status == 1">已完成</text>
						<text class="focus-list-time" v-if="item.status == 0">未完成</text>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import {getForBalance, getForBill, checkForTaskList} from '../../api/api.js';
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
				getForBalance().then(data => {
					this.assetInfo = data;
				});
			},
			getBillData() {
				getForBill().then(data => {
					this.listInfo = '';
					this.listInfo = data;
					// console.log(this.listInfo);
				});
			},
			getTaskData() {
				checkForTaskList().then(data => {
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
			this.getBillData()
		}
	}
</script>

<style lang="scss" scoped>
	.pages-content {
		background-color: #EFEFF4;
		width: 100%;
	}
	
	.focus {
		&-data {
			width: 100%;
			background: -webkit-linear-gradient(to right, #000000, #979797); /* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(to right, #000000, #979797); /* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(to right, #000000, #979797); /* Firefox 3.6 - 15 */
			background: linear-gradient(to right, #000000, #979797); /* 标准的语法 */
			
			&-num {
				display: block;
				font-size: 40upx;
				padding: 40upx 0 40upx 20upx;
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
				font-size: 25upx;
				color: #CD2626;
			}
		}
		
		&-img-focus {
			width:50upx;
			height: 50upx;
			padding: 15upx;
			float: left;
		}
	}
</style>
