<template>
	<view class="pages-content" scroll-y="true">
		<view class="top-wrapper">
			<view class="asset">
				<view class="asset-left">
					<p>我的資產PAN幣</p>
					<text class="balance">{{propInfo.balance | toFixed(4)}}</text>
					<text class="asset-rmb">≈{{ this.rmb | toFixed(4)}} USTD<text class="dollar"> (美元)</text></text>
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
					<image src="../../static/img/pan/IXX.svg" mode="" @tap="toIxx()"></image>
				</view>
			</view>
		</view>
		<view class="text-wrapper">
			<view class="title">
				<text>點擊註冊IXX交易所可以獲得10个PAN幣</text>
			</view>
			<view class="text">
				<text>新加坡IXX數字資產交易所是潘多拉星球戰，也是潘多拉星球的超節點，用戶可以在IXX交易所查看PAN的價格走勢，<text class="black">當潘多拉星球居民達到200萬時，用戶可以將自己獲得的PAN在IXX交易所進行流通交易</text></text>
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
		checkTaskList,
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
				red: false,
				assetInfo: '',
				listInfo: '',
				labelList: 'budget',
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
			getBalanceData() {
				getBalance(0).then(data => {
					this.assetInfo = data;
				});
			},
			getBillData() {
				getBill("0").then(data => {
					this.listInfo = '';
					// 、console.log(this.listInfo)
					this.listInfo = data.splice(0, 10);
					// console.log(this.listInfo);
				});
			},
			getTaskData() {
				checkTaskList().then(data => {
					this.listInfo = '';
					// console.log(this.listInfo)
					this.listInfo = data;
					// console.log(this.listInfo);
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
					// console.log(current)
				} else {
					this.currentTab = current;
					this.labelList = 'budget';
					this.listInfo = '';
					this.getBillData();
					// console.log(current)
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
					if (data == null) {
						this.isShow = false
						return
					}
					this.listInfo = this.listInfo.concat(data)
					this.loadingType += 10
					// console.log(this.listInfo)
				});
			},
			toIxx() {
				uni.navigateTo({
					url: "ixx"
				})

			}
		},
		onLoad() {
			this.getBalanceData();
			this.getBillData();
			this.getMyIndex();
			this.getChang()
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
			width: 95%;
			border-radius: 8px;
			box-sizing: border-box;
			margin: 0 auto;
			background-color: #131D21;

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

			.invite {}

			.pan-label-context {
				font-size: 14px;
				color: #888;
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
				font-size: 14px;
			}

			&-time {
				font-size: 12px;
				color: #979797;
				float: right;
			}

			&-number {
				color: #CD2626;
				font-size: 14px;
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
		border-bottom: 2upx solid #979797;
		color: #000000;
		border-top: 2upx solid #979797;
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
		top: 14px;
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

	.pan-list-load {
		background-color: #EFEFF4;
		;
	}

	.top-wrapper {
		width: 97%;
		padding: 10px;
		margin: 0 auto;
		margin-top: 5px;
		box-sizing: border-box;
		height: 185px;
		background: rgba(19, 29, 33, 1);
		border-radius: 5px;
		color: #FFFFFF;
		font-size: 14px;
	}

	.asset {
		width: 100%;
		height: 53%;
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
	.dollar{
		font-size: 12px;
		color: #CCCCCC;
		display: inline-block !important;
	}
	.asset-left .balance {
		font-size: 20px;
		line-height: 30px;
	}

	.asset-right {
		padding: 5px;
		width: 40%;
		display: flex;
		flex-direction: column;
		text-align: center;
		
	}

	.panData {
		width: 100%;
		height: 40%;
	}

	.data {
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
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
		border-top: 1px solid #4A4A4A;
		display: flex;
		flex-direction: row-reverse;
	}

	.bottom image {
		margin-top: 10px;
		width: 94px;
		height: 30px;
		padding: 0 5px;
		border-radius: 15px;
	

	}

	.text-wrapper {

		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		line-height: 1.5;
	}

	.text-wrapper .title {
		width: 100%;
		padding-bottom: 6px;
		border-bottom: 1px solid #979797;
	}

	.text-wrapper .title text {
		font-size: 16px;
		font-weight: 400;
		color: #000000;
	}

	.text-wrapper .text {
		width: 100%;
		padding-bottom: 10px;
	}

	.text-wrapper text {
		font-size: 12px;
		color: #9B9B9B;
	}

	.text-wrapper .black {
		color: #000000;
	}
</style>
