<template>
	<view class="pages-content" scroll-y="true">
		<view class="pan-data">
			<view class="pan-top">
				<view class="pan-left">
					<text>我的資產PAN</text>
					<text>{{assetInfo.balance | toFixed(4)}}</text>
					<text>≈</text>
				</view>
				<view class="pan-right">
					<text>冻结資產PAN</text>
					<text>{{assetInfo.freeze | toFixed(4)}}</text>
				</view>
			</view>
			<view class="pan-bottom">
				<text>星球居民达到200万 用户获得的PAN可以在二级市场流通交易</text>
				<text decode="true">交易&gt;</text>
			</view>
		</view>
		<view class="pan-notice">
			<p class="pan-label-introduction">{{assetInfo.title}}</p>
			<p class="pan-label-context">{{assetInfo.context}}</p>
			<view class="invite">
				
			</view>
		</view>
		<!-- <view class="pan-label-list">
			<text class="pan-label-budget" :style="{color: budgetText}" @tap="changeList('budget')">收支記錄</text>
			<text>|</text>
			<text class="pan-label-task" :style="{color: taskText}" @tap="changeList('task')">任務獲取</text>
		</view> -->
		<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
			<block v-for="(menuTab,index) in menuTabs" :key="index">
				<view class="menu-one-view" v-bind:id="'tabNum'+index" @tap.stop="swichMenu(index)">
					<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
						<view class="menu-one-txt">{{menuTab.name}}</view>
					</view>
				</view>
			</block>
		</scroll-view>

		<view class="pan-list">


			<ul class="pan-list-ul" v-for="(item, index) in listInfo" :key="index">
				<li class="pan-list-li" v-if="labelList == 'budget'">
					<view>
						<p class="pan-list-action">{{item.action}}</p>
						<text class="pan-list-time">{{item.create_time}}</text>
					</view>
					<text class="pan-list-number">{{item.status}}{{item.number}}</text>
				</li>
				<!-- <li class="pan-list-li"  v-if="labelList == 'task' ">
					<view>
						<p class="pan-list-action">星球注冊</p>
					</view>
					<view>
						<p class="pan-list-number">10個PAN幣</p>
						<text class="pan-list-time">已完成</text>
					</view>
				</li> -->
				<li class="pan-list-li" v-if="labelList == 'task'">
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
			<ul class="pan-list-ul">
				<li class="pan-list-li" v-if="labelList == 'task' ">
					<view>
						<p class="pan-list-action">星球注冊</p>
					</view>
					<view>
						<p class="pan-list-number">10個PAN幣</p>
						<text class="pan-list-time">已完成</text>
					</view>
				</li>
			</ul>
			<button class="pan-list-load" @tap="loadMore()" v-if="isShow && labelList == 'budget' && isShow ==true">點擊查看更多</button>
		</view>

	</view>
</template>

<script>
	import {
		getBalance,
		getBill,
		checkTaskList
	} from '../../api/api.js';

	export default {
		data() {
			return {
				assetInfo: '',
				listInfo: '',
				labelList: 'budget',
				// budgetText: 'black',
				// taskText: 'gray',
				menuTabs: [{
					name: '收支記錄'
				}, {
					name: '任務獲取'
				}],
				scrollLeft: 0,
				currentTab: 0,
				isShow: true,
				loadingType: 10
			}
		},
		
		methods: {
			getBalanceData() {
				getBalance(0).then(data => {
					this.assetInfo = data;
				});
			},
			getBillData() {
				getBill("0").then(data => {
					this.listInfo = '';
					console.log(this.listInfo)
					this.listInfo = data.splice(0, 10);
					console.log(this.listInfo);
				});
			},
			getTaskData() {
				checkTaskList().then(data => {
					this.listInfo = '';
					console.log(this.listInfo)
					this.listInfo = data;
					console.log(this.listInfo);
				});
			},
			swichMenu: async function(current) {
				if (this.currentTab == current) {
					return false;
				}
				if (current == 1) {
					this.currentTab = current;
					this.labelList = 'task';
					this.listInfo = '';
					this.getTaskData();
					console.log(current)
				} else {
					this.currentTab = current;
					this.labelList = 'budget';
					this.listInfo = '';
					this.getBillData();
					console.log(current)
				}
			},
			// changeList(chooseItem) {
			// 	if(chooseItem == 'budget') {
			// 		this.labelList = 'budget';
			// 		this.budgetText = 'black';
			// 		this.taskText = 'gray';
			// 		this.getBillData();
			// 	} else {
			// 		this.labelList = 'task';
			// 		this.budgetText = 'gray';
			// 		this.taskText = 'black';
			// 		this.getTaskData();
			// 	}
			// }
			loadMore() {
				getBill(this.loadingType).then(data => {
					if(data == null){
						this.isShow = false
						return
					}
					this.listInfo = this.listInfo.concat(data)
					this.loadingType += 10
					console.log(this.listInfo)
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
	.pages-content {
		width: 100%;
		background-color: #EFEFF4;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-y: scroll;
	}

	.pan {
		&-data {
			width: 99%;
			border-radius: 8px;
			box-sizing: border-box;
			margin: 0 auto;
			background-color: #131D21;

			.pan-top {
				width: 100%;
				height: 85px;
				padding: 10px 8px 8px 8px;
				display: flex;
				justify-content: space-between;

				

				.pan-left {
					text:nth-child(1) {
						font-size: 14px;
						line-height: 20px;
					}

					text:nth-child(2) {
						font-size: 20px;
						line-height: 27px;
					}

					text-align: center;

					text {
						margin-left: 21px;
						display: block;
						line-height: 20px;
					}
				}

				.pan-right {
					margin-right: 51px;

					text:nth-child(1) {
						font-size: 14px;
						line-height: 20px;
					}

					text:nth-child(2) {
						font-size: 20px;
						line-height: 27px;
					}

					text-align: center;

					text {
						display: block;
						line-height: 20px;
					}
				}
			}

			.pan-bottom {
				width: 100%;
				height: 30px;
				background: rgba(255, 255, 255, 0.2);
				text-align: center;

				text:nth-child(1) {
					font-size: 12px;
					color: #B6B6B6;
				}

				text:nth-child(2) {
					font-size: 14px;
					margin-left: 5px;
				}
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

			&-budget {}

			&-task {}
		}

		&-notice {
			background-color: #EFEFF4;
			color: #000000;
			padding: 30upx;
			border-bottom: 1upx solid #979797;
			.invite {
				
			}
		}

		&-list {
			border-top: 1upx solid #979797;
			font-size: 35upx;
			color: #000000;
			-webkit-overflow-scrolling: touch;
			overflow-scrolling: touch;
			overflow-y: scroll;
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
			width: 50upx;
			height: 50upx;
			padding: 15upx;
			float: left;
		}

		&-load {
			background-color: transparent;
			color: #EFEFF4;
			text-decoration: underline;
			font-size: 25upx;
			padding-top: 50upx;
		}
	}

	.top-menu-view {
		display: flex;
		text-align: center;
		white-space: nowrap;
		font-size: 30upx;
		width: 100%;
		background-color: #EFEFF4;
		height: 112upx;
		line-height: 112upx;
		/* 在这里设置导航条高度 */
		border-bottom: 2upx solid #eee;
		color: #000000
	}

	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		width: 50%;
	}

	.menu-one-view:first-child::after {
		content: "|";
		position: absolute;
		width: 1px;
		height: 10px;
		// background-color: #000000;
		right: 49%;
		top: 0;
	}

	.top-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;


	}

	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		text-align: center;
		font-size: 30upx;
		color: #979797;
	}
	.pan-list-load{
		background-color: #EFEFF4;;
	}
</style>
