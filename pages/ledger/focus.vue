<template>
	<view class="pages-content">
		<view class="focus-data">
			<image class="focus-img-focus" src="../../static/img/main/focus.svg"></image>
			<p class="focus-label-num">原力值</p>
			<text class="focus-data-num">{{assetInfo.balance | toFixed(4)}}</text>
			<p class="focus-data-freeze">未釋放原力: {{assetInfo.notFree | toFixed(4)}}</p>
		</view>
		<view class="focus-notice">
			<p class="focus-label-introduction">原力簡介</p>
			<p class="focus-label-context">{{assetInfo.context}}</p>
		</view>
		<view class="sign">
			<view class="sign-top">
				<text class="left">連續簽到獲得更多魔法原力</text>
				<text class="right" @tap="singIn()">簽到</text>
			</view>
			<view class="sign-bottom">
				<view v-for="(item,index) in sing" :key="index">
					<text :class="item.isShow == true ? 'sing-in' : ' ' ">{{item.value}}</text>
					<text>{{item.title}}</text>
				</view>

			</view>
		</view>
		<view class="focus-label-list">
			<text class="pan-label-budget" :style="{color: budgetText}" @tap="changeList('budget')">獲取原力記錄</text>
			<text>|</text>
			<text class="pan-label-task" :style="{color: taskText}" @tap="changeList('task')">任務獲取原力</text>
		</view>
		<view class="focus-list">
			<ul class="focus-list-ul" v-for="(item, index) in listInfo" :key="index">
				<li class="focus-list-li" v-if="labelList == 'budget'">
					<view>
						<p class="focus-list-action">{{item.action}}</p>
						<text class="focus-list-time">{{item.createTime}}</text>
					</view>
					<view class="list-right">
						<p class="focus-list-number">{{item.type}} +{{item.number}}</p>
						<text class="focus-list-time">{{item.loseTime}}</text>
					</view>
				</li>
				<li class="focus-list-li" v-if="labelList == 'task' && index == 0">
					<view>
						<p class="focus-list-action">星球注冊</p>
					</view>
					<view>
						<p class="focus-list-number">50個永久原力</p>
						<text class="focus-list-time">已完成</text>
					</view>
				</li>
				<li class="focus-list-li" v-if="labelList == 'task'">
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
			<button class="pan-list-load" @tap="loadMore()" v-if="labelList == 'budget' && isShow != true ">點擊查看更多</button>
		</view>
	</view>
</template>

<script>
	import {
		getForBalance,
		getForBill,
		checkForTaskList,
		signinMsg,
		signin
	} from '../../api/api.js';
	export default {
		data() {
			return {
				assetInfo: '',
				listInfo: '',
				labelList: 'budget',
				budgetText: 'black',
				taskText: 'gray',
				pageSize: 10,
				isShow: false,
				sing: [{
						value: "+1",
						title: "第一天",
						isShow: false
					},
					{
						value: "+2",
						title: "第二天",
						isShow: false
					},
					{
						value: "+3",
						title: "第三天",
						isShow: false
					},
					{
						value: "+5",
						title: "第四天",
						isShow: false
					},
					{
						value: "+5",
						title: "第五天",
						isShow: false
					},
					{
						value: "+10",
						title: "第六天",
						isShow: false
					},
					{
						value: "+10",
						title: "第七天",
						isShow: false
					},
				],
				singDay: "",
				force: ''
			}
		},
		methods: {
			getBalanceData() {
				getForBalance().then(data => {
					this.assetInfo = data;
				});
			},
			getBillData() {
				getForBill(0).then(data => {
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
				if (chooseItem == 'budget') {
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
			},
			loadMore() {
				getForBill(this.pageSize).then(data => {
					if (data == null) {
						this.isShow = true;
						return
					}
					this.listInfo = this.listInfo.concat(data);
					this.pageSize += 10
				});
			},
			singIn() {
				if (this.singDay == 7) {
					this.singDay = 0
					signin(this.force, this.singDay + 1).then(data => {
						if (data != null) {
							console.log(data)
							this.show();
							this.getSigninMsg()
							uni.showToast({
								icon: 'none',
								title: '簽到成功'
							})
							this.getBillData();
							this.getBalanceData()
						}
					})
				}
				signin(this.force, this.singDay + 1).then(data => {
					if (data != null) {
						console.log(data)
						this.show();
						this.getSigninMsg()
						uni.showToast({
							icon: 'none',
							title: '簽到成功'
						})
						this.getBillData();
						this.getBalanceData()
					}
				})

			},
			getSigninMsg() {
				signinMsg().then(data => {
					console.log(data)
					this.singDay = data
					switch (data) {
						case 0:
							this.force = 1
							break
						case 1:
							this.force = 2
							break
						case 2:
							this.force = 3
							break
						case 3:
							this.force = 5
							break
						case 4:
							this.force = 5
							break
						case 5:
							this.force = 10
							break
						case 6:
							this.force = 10
							break

					}
					this.show()
				})
			},
			show() {
				switch (this.singDay) {
					case 0:
						this.sing[0].value = "+1"
						this.sing[0].isShow = false
						this.sing[1].value = "+2"
						this.sing[1].isShow = false
						this.sing[2].value = "+3"
						this.sing[2].isShow = false
						this.sing[3].value = "+5"
						this.sing[3].isShow = false
						this.sing[4].value = "+5"
						this.sing[4].isShow = false
						this.sing[5].value = "+10"
						this.sing[5].isShow = false
						this.sing[6].value = "+10"
						this.sing[6].isShow = false
						break
					case 1:
						this.sing[0].value = "√"
						this.sing[0].isShow = true
						break
					case 2:
						this.sing[0].value = "√"
						this.sing[0].isShow = true
						this.sing[1].value = "√"
						this.sing[1].isShow = true
						break
					case 3:
						this.sing[0].value = "√"
						this.sing[0].isShow = true
						this.sing[1].value = "√"
						this.sing[1].isShow = true
						this.sing[2].value = "√"
						this.sing[2].isShow = true
						break
					case 4:
						this.sing[0].value = "√"
						this.sing[0].isShow = true
						this.sing[1].value = "√"
						this.sing[1].isShow = true
						this.sing[2].value = "√"
						this.sing[2].isShow = true
						this.sing[3].value = "√"
						this.sing[3].isShow = true
						break
					case 5:
						this.sing[0].value = "√"
						this.sing[0].isShow = true
						this.sing[1].value = "√"
						this.sing[1].isShow = true
						this.sing[2].value = "√"
						this.sing[2].isShow = true
						this.sing[3].value = "√"
						this.sing[3].isShow = true
						this.sing[4].value = "√"
						this.sing[4].isShow = true
						break
					case 6:
						this.sing[0].value = "√"
						this.sing[0].isShow = true
						this.sing[1].value = "√"
						this.sing[1].isShow = true
						this.sing[2].value = "√"
						this.sing[2].isShow = true
						this.sing[3].value = "√"
						this.sing[3].isShow = true
						this.sing[4].value = "√"
						this.sing[4].isShow = true
						this.sing[5].value = "√"
						this.sing[5].isShow = true
						break
					case 7:
						this.sing[0].value = "√"
						this.sing[0].isShow = true
						this.sing[1].value = "√"
						this.sing[1].isShow = true
						this.sing[2].value = "√"
						this.sing[2].isShow = true
						this.sing[3].value = "√"
						this.sing[3].isShow = true
						this.sing[4].value = "√"
						this.sing[4].isShow = true
						this.sing[5].value = "√"
						this.sing[5].isShow = true
						this.sing[6].value = "√"
						this.sing[6].isShow = true
						break
				}
			}
		},
		onLoad() {
			this.getBalanceData();
			this.getBillData()
			this.getSigninMsg()
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
			width: 99%;
			border-radius: 8px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			margin: 0 auto;
			background-color: #131D21;

			&-num {
				display: block;
				font-size: 40upx;
				padding: 40upx 0 0upx 20upx;
			}

			&-freeze {
				font-size: 14px;
				padding: 20upx;
				clear: both;
			}
		}
		&-notice{
			.focus-label-context{
				font-size: 14px;
				color: #888
			}
		}
		&-label {
			&-num {
				font-size: 14px;
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
				font-size: 30upx;
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
				font-size: 14px;
			}

			&-time {
				font-size: 12px;
				color: #979797;
				float: right;
			}

			&-number {
				font-size: 14px;
				color: #CD2626;
			}
		}

		&-img-focus {
			width: 50upx;
			height: 50upx;
			padding: 15upx;
			float: left;
		}
	}
	.list-right{
		
		p{
			display: flex;
			justify-content: flex-end;
		}
	}

	.sign {
		width: 100%;
		height: 100px;

		.sign-top {
			display: flex;
			justify-content: space-between;

			.left {
				margin: 14px;
				font-size: 14px;
				color: #8E8E93;
				line-height: 24px;
			}

			.right {
				margin: 13px 30px 0 0;
				width: 61px;
				height: 23px;
				text-align: center;
				background: linear-gradient(296deg, rgba(19, 29, 33, 1) 0%, rgba(116, 116, 116, 1) 100%);
				border-radius: 12px;
				font-size: 14px;
				line-height: 21px;
			}
		}

		.sign-bottom {
			margin-top: 10px;
			display: flex;
			justify-content: space-around;
			font-size: 10px;
			box-sizing: border-box;

			view {
				width: 30px;
				display: flex;
				flex-direction: column;

				text:nth-child(1) {
					width: 30px;
					height: 30px;
					font-size: 16px;
					line-height: 30px;
					background: #131D21;
					border-radius: 50%;
					text-align: center
				}

				text:nth-child(2) {
					margin-top: 10px;
					font-size: 10px;
					font-weight: 400;
					color: #8E8E93;
					line-height: 11px;
					text-align: center
				}

			}

			.sing-in {
				background: #8E8E93 !important;

			}
		}
	}

	.pan-list-load {
		background-color: #EFEFF4;
		;
	}
</style>
