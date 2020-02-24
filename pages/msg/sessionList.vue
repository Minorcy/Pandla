<template>
	<view class="page">
		<view class="msg-tab">
			<view class="msg-communication">
				<uniBadge :text="msgNum" type="error" class="comm-badge" v-if="msgNum!='0'"></uniBadge>
				<image src="../../static/img/msg/msg.svg"></image>
				<text>通訊</text>
			</view>
			<view class="msg-Fabulous">
				<uniBadge :text="likeNum" type="error" class="fab-badge" v-if="likeNum!='0'"></uniBadge>
				<image src="../../static/img/msg/msg-zan.svg" @tap="toLikeMsg()"></image>
				<text>讚</text>
			</view>
			<view class="msg-fans">
				<uniBadge :text="fnasNum" type="error" class="fans-badge" v-if="fnasNum!='0'"></uniBadge>
				<image src="../../static/img/msg/msg-fans.svg" @tap="toFans()"></image>
				<text>粉絲</text>
			</view>
			<view class="msg-comment">
				<uniBadge :text="connNum" type="error" class="comment-badge" v-if="connNum!='0'"></uniBadge>
				<image src="../../static/img/msg/msg-comment.svg" @tap="toConnMsg()"></image>
				<text>評論和@</text>
			</view>
		</view>


		<view class="recentchat-wrapper">
			<uni-swipe-action class="swipedelete-wrapper" :options="options" @tap="deleteSystem()" v-if="systemList.length && systemShow">
				<view class="recentchat-item" hover-class="recentchat-item-hover" @tap="toSystem">
					<image class="recentchat-item-img" src="../../static/img/msg/system.svg" role="img" mode="aspectFill">
					</image>
					<view class="recentchat-item-right">
						<view class="recentchat-item-top">
							<text class="recentchat-item-title">
								星球总部
							</text>
							<text class="recentchat-item-time">
								{{systemTime}}
							</text>
						</view>
						<view class="recentchat-item-bottom">
							<view style="display:flex;align-items:center;">
								<text class="recentchat-item-status">
								</text>
								<text class="recentchat-item-desc" :style="{maxWidth:250+'px'}">
									{{systemList[0].context}}
								</text>
							</view>
							<!-- <view class="recentchat-item-unread" v-if="systemList.unread != 0">{{systemList.unread}}</view> -->
						</view>
					</view>
				</view>
			</uni-swipe-action>
			<uni-swipe-action class="swipedelete-wrapper" :options="options" @tap="bindClick(item.from.id,index)" v-for="(item,index) in sessionlist"
			 :key="index">
				<view class="recentchat-item" hover-class="recentchat-item-hover" @tap="enterChat(item.from.id,index)">
					<image class="recentchat-item-img" :src="item.from.avatar" role="img" mode="aspectFill">
					</image>
					<view class="recentchat-item-right">
						<view class="recentchat-item-top">
							<text class="recentchat-item-title">
								{{item.from.name}}
							</text>
							<text class="recentchat-item-time">
								{{item.time|dateFormat()}}
							</text>
						</view>
						<view class="recentchat-item-bottom">
							<view style="display:flex;align-items:center;">
								<text class="recentchat-item-status">
									<!-- [距离] -->
								</text>
								<text class="recentchat-item-desc" v-if='item.type!=3'>
									{{item.message}}
								</text>
								<text class="recentchat-item-desc" v-if='item.type==3'>
									[图片信息]
								</text>
							</view>
							<view class="recentchat-item-unread" v-if="item.lastMsgShow != 0">{{item.lastMsgShow || ''}}</view>
							<view class="disturbing-box" v-if="item.disturbing">
								<image src="../../static/img/msg/disturbing.svg" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</uni-swipe-action>

		</view>


	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue";
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	import util from '@/common/utils'
	import config from '@/common/configs'
	import store from '@/store/'
	import {
		mapState,
		mapActions,
		mapMutations
	} from 'vuex';
	import {
		registerWyAccount,
		getInfo
	} from "@/api/api.js"
	export default {
		data() {
			return {
				delSessionId: null,
				options: [{
					text: '刪除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				targetId: '', // 你要给谁发送消息 目标ID
				showDatas: [], // 初始化信息
				convrList: "",
				systemTime: '',
				systemShow: true,
				sessionlist: [],
				msgNum: ''
			}
		},
		components: {
			uniSwipeAction,
			uniBadge
		},
		computed: {
			connNum() {
				if (!this.$store.state.pushMsg) {
					return "0"
				}
				if (this.$store.state.pushMsg.pushConnMsg.length == 0) {
					return "0"
				}
				var num = this.$store.state.pushMsg.pushConnMsg.filter(function(item) {
					return item.status == "1";
				})
				num = num.length

				return num.toString()
			},
			fnasNum() {
				if (!this.$store.state.pushMsg) {
					return "0"
				}
				if (this.$store.state.pushMsg.pushFansMsg.length == 0) {
					return "0"
				}
				var num = this.$store.state.pushMsg.pushFansMsg.filter(function(item) {
					return item.status == "1";
				})
				num = num.length
				return num.toString()
			},
			likeNum() {
				if (!this.$store.state.pushMsg) {
					return "0"
				}
				if (this.$store.state.pushMsg.pushLikeMsg.length == 0) {
					return "0"
				}
				var num = this.$store.state.pushMsg.pushLikeMsg.filter(function(item) {
					return item.status == "1";
				})
				num = num.length
				return num.toString()
			},
			systemList() {
				var that = this
				if (!this.$store.state.pushMsg) {
					return "0"
				}
				var num = []
				num = this.$store.state.pushMsg.pushSystemMsg.filter(function(item) {
					return item.isRed == "0";
				})
				var length = num.length
				var list = []
				list = this.$store.state.pushMsg.pushSystemMsg
				list.unread = length
				if (num == '') {
					return list
				}
				if (length != 0) {
					num.unread = length
				}
				that.systemShow = true
				return num
			}
		},
		methods: {
			enterChat(id,index) {
				uni.navigateTo({
					url: '/pages/msg/chat?id=' + id,
				})
				this.sessionlist[index].lastMsgShow = 0
			},
			toSystem() {
				uni.navigateTo({
					url: "./news/system"
				})
			},
			queryInfo(id) {
				getInfo(id).then(data => {
					return data
				})

			},
			bindClick(id, index) {
				this.sessionlist = JSON.parse(JSON.stringify(this.sessionlist))
				console.log(this.sessionlist);
				this.sessionlist.splice(index, 1)
				uni.setStorageSync('updateSessionList', this.sessionlist)
			},
			deleteSystem() {
				this.systemShow = false;
			},
			pickerChange(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
			},
			toTset() {
				uni.navigateTo({
					url: "test"
				})
			},
			toReceive() {
				uni.navigateTo({
					url: "Receive"
				})
			},
			toConnMsg() {
				uni.navigateTo({
					url: "./news/connMsg"
				})
			},
			toFans() {
				uni.navigateTo({
					url: "./news/fansMsg"
				})
			},
			toLikeMsg() {
				uni.navigateTo({
					url: "./news/likeMsg"
				})
			},
			deleteAllLocalMsgsDone(error, obj) {
				console.log(error);
				console.log(obj);
				console.log('删除所有本地消息' + (!error ? '成功' : '失败'));
			},
			...mapActions(["searchUsers", "getConnMsg", "getFansMsg", "getLikeMsg"]),

		},
		onPullDownRefresh() {
			this.$store.dispatch('getConnMsg')
			this.$store.dispatch('getFansMsg')
			this.$store.dispatch('getLikeMsg')
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 800)
		},
		onNavigationBarButtonTap() {
			var that = this
			uni.showActionSheet({
				itemList: ['忽略未讀提醒', '清空聊天列表', '提醒設置'],
				success: function(res) {
					console.log('选中了第' + (res.tapIndex) + '个按钮');
					if (res.tapIndex == 2) {
						uni.navigateTo({
							url: '/pagesA/settingChat/settingChat'
						});
					}
					if (res.tapIndex == 0) {
						uni.showModal({
							title: '',
							content: '確定忽略未讀提醒',
							confirmText: "確定",
							success: function(res) {
								if (res.confirm) {
									that.msgNum = '0'
									that.sessionlist.filter(item => {
										item.lastMsgShow = 0
									})
									uni.setStorageSync('updateSessionList', that.sessionlist)
								} else if (res.cancel) {

								}
							}
						});
					};
					if (res.tapIndex == 1) {
						uni.showModal({
							title: '',
							content: '確定清空聊天列表',
							confirmText: "確定",
							cancelColor: '#007AFF',
							confirmColor: '#007AFF',
							success: function(res) {
								if (res.confirm) {
									that.msgNum = '0'
									that.sessionlist = []
									uni.setStorageSync('updateSessionList', [])
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
				},
				fail: function(res) {
					console.log(res.errMsg);
				}
			});

		},
		onLoad() {
			var that = this
			var disturbingList = store.state.noDisturbingList
			this.systemTime = util.formatDate(new Date, true)
			this.sessionlist = uni.getStorageSync('updateSessionList')
			if (this.sessionlist) {
				that.sessionlist.filter(item => {
					item.disturbing = false
					if (disturbingList.indexOf(item.from.id) > -1) {
						item.lastMsgShow = 0
						item.disturbing = true
						// console.log(item)
					}
				})
				var num = 0
				for (var i = 0; i < that.sessionlist.length; i++) {
					num += Number(that.sessionlist[i].lastMsgShow)
				}
				that.msgNum = num.toString()
				
			}
			
			uni.$on('updateSessionList', function(data) {
				// that.sessionlist =[]
				var disturbingList = store.state.noDisturbingList
				// console.log(disturbingList)
				var msg = JSON.parse(JSON.stringify(data))
				// that.sessionlist = JSON.parse(JSON.stringify(data))
				msg.filter(item => {
					item.disturbing = false
					if (disturbingList.indexOf(item.from.id) > -1) {
						item.lastMsgShow = 0
						item.disturbing = true
					
					}
				})
				var num = 0
				for (var i = 0; i < msg.length; i++) {
					num += Number(msg[i].lastMsgShow)
				}
				that.msgNum = num.toString()
				setTimeout(function() {
					that.sessionlist = msg
				}, 500);
			})
		},
		onShow() {
			uni.removeTabBarBadge({
				index: 1,
			})
		},
		filters: {
			dateFormat(time) {
				time = Number(time)
				return util.formatDate(time, true)
			}
		}

	}
</script>

<style lang="scss" scoped>
	.page {
		width: 100%;
		background: #fff;

		.msg {
			&-tab {
				margin-top: 20px;
				display: flex;
				justify-content: space-around;

				view {
					position: relative;
					width: 60px;
				}

				.comm-badge {
					position: absolute;
					top: -10px;
					right: -5px;
					z-index: 10;

				}

				.fab-badge {
					position: absolute;
					top: -10px;
					right: -5px;
					z-index: 10;
				}

				.fans-badge {
					position: absolute;
					top: -10px;
					right: -5px;
					z-index: 10;
				}

				.comment-badge {
					position: absolute;
					top: -10px;
					right: -5px;
					z-index: 10;
				}

				image {
					margin-left: 10px;
					width: 40px;
					height: 40px;
				}

				text {
					font-size: 14px;
					display: block;
					text-align: center
				}
			}

			&-search {
				width: 100%;
				margin: 20px 0 20px 0;

				.input-box {
					width: 90%;
					margin: 0 auto;
					height: 30px;
					position: relative;

					image {
						width: 20px;
						height: 20px;
						display: inline-block;
						position: absolute;
						top: 5px;
						left: 5px;
					}

					input {
						display: block;
						height: 30px;
						background: #e1e1e1;
						line-height: 30px;
						padding-left: 30px;
						font-size: 16px;
						border-radius: 10px;
						text-decoration: none;
						outline: none;
					}
				}
			}
		}
	}

	// .system-message {
	// 	border-top: 1px solid #CCCCCC;
	// 		margin-top: 20px;
	// 	width: 100%;
	// 	padding: 0 22rpx;
	// 	box-sizing: border-box;
	// 	background-color: #fff;
	// 	// min-height: 100%;
	// 	overflow-x: hidden;
	// 	overflow-y: scroll;
	// 	box-sizing: border-box
	// }

	.recentchat-wrapper {
		border-top: 1px solid #CCCCCC;
		margin-top: 20px;
		width: 100%;
		padding: 0 22rpx;
		box-sizing: border-box;
		background-color: #fff;
		// min-height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
		box-sizing: border-box
	}

	.recentchat-wrapper:first-child {
		border-top: 1px solid rgba(220, 220, 220, 0.5);
	}

	.no-recent {
		width: 100%;
		position: fixed;
		top: 20%;
		color: #ccc;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: -20rpx;
	}

	.no-recent-image {
		width: 550rpx;
		height: 200rpx;
		margin-bottom: 40rpx;
	}

	.no-recent-text {
		width: 100%;
		text-align: center;
	}

	.recentchat-item {
		width: 100%;
		height: 132rpx;
		padding: 20rpx 28rpx 20rpx 0;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid rgba(220, 220, 220, 0.5);
	}

	// .recentchat-img {
	// 	width: 100rpx;
	// 	height: 100rpx;
	// 	margin-right: 24rpx;
	// 	box-sizing: border-box;
	// 	display: flex;
	// 	align-self: center;
	// }

	.recentchat-item-img {
		width: 100rpx;
		height: 100rpx;
		margin-right: 24rpx;
		box-sizing: border-box;
		display: flex;
		align-self: center;
		border-radius: 100%;
	}

	.recentchat-item-right {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: space-around;
	}

	.recentchat-item-right .recentchat-item-message {
		font-size: 28rpx;
		color: #ccc;
		word-break: break-all;
	}

	.recentchat-item-top {
		align-self: flex-start;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 44rpx;
		line-height: 44rpx;
		font-size: 36rpx;
	}

	.recentchat-item-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		font-size: 28rpx;
		color: #9B9B9B;
		height: 44rpx;
		line-height: 44rpx;
	}

	.recentchat-item-bottom .recentchat-item-desc {
		max-width: 400rpx;
		overflow: hidden;
		display: inline-block;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.max-desc {
		max-width: 243px !important;
	}

	.recentchat-item-bottom .recentchat-item-unread {
		background: #F43530;
		border-radius: 18rpx;
		width: 52rpx;
		height: 36rpx;
		line-height: 36rpx;
		text-align: center;
		font-size: 22rpx;
		color: #fff;
	}

	.disturbing-box image {
		width: 15px;
		height: 15px;
	}

	.recentchat-item-top .recentchat-item-title {
		overflow: hidden;
		max-width: 330rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 32rpx;
	}

	.recentchat-item-top .recentchat-item-time {
		font-size: 24rpx;
		color: #9B9B9B;
	}
</style>
