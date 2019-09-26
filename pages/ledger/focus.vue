<template>
	<view class="focus-page">
		<view class="focus-data">
			<view class="focus-top">
				<view class="focus-data-info">
					<text>我的原力</text>
					<text class="num">{{assetInfo.balance | toFixed(4)}}</text>
				</view>
				<view class="btn" @tap="singIn()" :class="signed == true ? 'signed' : ' ' ">
					<text v-if="!signed">签到</text>
					<text v-if="signed" class="color">已签到</text>
				</view>
			</view>
			<view class="focus-bottom">
				<text class="title">連續簽到獲得更多魔法原力</text>
				<view class="sign">
					<view v-for="(item,index) in sing" :key="index" :class="item.isSigned == true ? 'sing-in' : ' ' ">
						<text v-if="!item.isSigned">{{item.value}}</text>
						<image src="../../static/img/main/signed.svg" mode="" v-if="item.isSigned"></image>
					</view>
				</view>
			</view>

		</view>
		<view class="focus-notice">
			<p class="focus-label-introduction">原力簡介</p>
			<p class="focus-label-context">{{assetInfo.context}}</p>
		</view>
		<!-- <view class="sign">
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
		</view> -->
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
						<image src="/static/img/main/lnvalid.svg" mode="" v-if="item.status == 1"></image>
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
		signin,
		checkSignToday
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
						isSigned: false
					},
					{
						value: "+2",
						title: "第二天",
						isSigned: false
					},
					{
						value: "+3",
						title: "第三天",
						isSigned: false
					},
					{
						value: "+5",
						title: "第四天",
						isSigned: false
					},
					{
						value: "+5",
						title: "第五天",
						isSigned: false
					},
					{
						value: "+10",
						title: "第六天",
						isSigned: false
					},
					{
						value: "+10",
						title: "第七天",
						isSigned: false
					},
				],
				singDay: "",
				force: '',
				signed: false
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
				console.log(this.signed)
				if (this.signed) {
					return
				}
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
							this.signed = true
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
						this.signed = true
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
						case 7:
							this.force = 1
							break

					}
					this.show()
				})
			},
			show() {
				if (this.singDay == 7) {
					if (!this.signed) {
						this.singDay = 0
					}
				}
				switch (this.singDay) {
					case 0:
						this.sing[0].value = "+1"
						this.sing[0].isSigned = false
						this.sing[1].value = "+2"
						this.sing[1].isSigned = false
						this.sing[2].value = "+3"
						this.sing[2].isSigned = false
						this.sing[3].value = "+5"
						this.sing[3].isSigned = false
						this.sing[4].value = "+5"
						this.sing[4].isSigned = false
						this.sing[5].value = "+10"
						this.sing[5].isSigned = false
						this.sing[6].value = "+10"
						this.sing[6].isSigned = false
						break
					case 1:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						break
					case 2:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						break
					case 3:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						break
					case 4:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						this.sing[3].value = "√"
						this.sing[3].isSigned = true
						break
					case 5:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						this.sing[3].value = "√"
						this.sing[3].isSigned = true
						this.sing[4].value = "√"
						this.sing[4].isSigned = true
						break
					case 6:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						this.sing[3].value = "√"
						this.sing[3].isSigned = true
						this.sing[4].value = "√"
						this.sing[4].isSigned = true
						this.sing[5].value = "√"
						this.sing[5].isSigned = true
						break
					case 7:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						this.sing[3].value = "√"
						this.sing[3].isSigned = true
						this.sing[4].value = "√"
						this.sing[4].isSigned = true
						this.sing[5].value = "√"
						this.sing[5].isSigned = true
						this.sing[6].value = "√"
						this.sing[6].isSigned = true
						break
				}



			}
		},
		onLoad() {
			checkSignToday().then(data => {
				console.log(data)
				if (data == 1) {
					this.signed = true
				} else if (data == 0) {
					this.signed = false
					console.log(this.signed)
				}

			})
			this.getBalanceData();
			this.getBillData()
			this.getSigninMsg()
		}
	}
</script>

<style lang="scss" scoped>
	.focus-page {
		background-color: #EFEFF4;
		width: 100%;

	}

	.focus {
		&-data {
			width: 97%;
			border-radius: 8px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			margin: 0 auto;
			padding: 10px;
			background-color: #131D21;
			color: #FFFFFF;

			.focus-top {
				display: flex;
				justify-content: space-between;
			}

			.focus-data-info text {
				display: block;
				font-size: 14px;
			}

			.focus-data-info .num {
				display: block;
				font-size: 18px;
			}

			.btn {
				width: 94px;
				height: 30px;
				border-radius: 15px;
				border: 1px solid rgba(211, 211, 211, 1);
				display: flex;
				justify-content: center;
				align-content: center;
			}

			.btn text {
				line-height: 30px;
				display: block;
				font-size: 14px;
				text-align: center;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				letter-spacing: 2px;
			}

			.color {
				color: #131D21 !important;
			}

			.focus-bottom {
				margin-top: 20px;

				.title {

					height: 20px;
					font-size: 14px;
					font-family: PingFangSC;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 30px;
				}

				.sign {
					margin: 10px 0;
					display: flex;
					justify-content: space-around;

					view {
						width: 40px;
						height: 40px;
						border: 1px solid #FFFFFF;
						background: rgba(255, 255, 255, 1);
						border-radius: 50%;
						color: #4A4A4A;
						display: flex;
						justify-content: center;
						align-items: center;

						image {
							width: 40px;
							height: 40px;
							border-radius: 50%;
							overflow: hidden;
						}
					}
				}
			}
		}

		&-notice {
			.focus-label-context {
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
				padding: 5px;
				font-size: 16px;
				border-bottom: 1upx solid #979797;
			}

			&-context {
				padding: 5px;
				font-size: 14px;
				line-height: 1.5;
			}


			&-list {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 30upx;
				padding: 40upx 100upx;
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

	.list-right {
		position: relative;

		image {
			position: absolute;
			top: 0;
			right: 15px;
			width: 60px;
			height: 50px;
		}

		p {
			display: flex;
			justify-content: flex-end;
		}
	}

	.sing-in {
		background: #131D21 !important;
		color: #FFFFFF !important;
		border: none !important;
	}

	.signed {
		background-color: #D3D3D3 !important;
		color: #000000 !important;
	}

	.pan-list-load {
		background-color: #EFEFF4;

	}
</style>
