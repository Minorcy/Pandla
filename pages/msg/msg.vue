<template>
	<view class="page">
		<view class="msg-tab">
			<view class="msg-communication">
				<uniBadge text="5" type="error" class= "comm-badge"></uniBadge>
				<image src="../../static/img/msg/msg.svg"></image>
				<text>通訊</text>
			</view>
			<view class="msg-Fabulous">
				<uniBadge text="5" type="error" class= "fab-badge"></uniBadge>
				<image src="../../static/img/msg/msg-zan.svg"></image>
				<text>讚</text>
			</view>
			<view class="msg-fans">
				<uniBadge text="5" type="error" class= "fans-badge"></uniBadge>
				<image src="../../static/img/msg/msg-fans.svg"></image>
				<text>粉絲</text>
			</view>
			<view class="msg-comment">
				<uniBadge text="5" type="error" class= "comment-badge"></uniBadge>
				<image src="../../static/img/msg/msg-comment.svg"></image>
				<text>評論和@</text>
			</view>
		</view>
		<view class="msg-search">
			<view class="input-box">
				<image src="../../static/img/msg/search.svg"></image>
				<input type="text" placeholder="查詢" maxlength="200" />
			</view>
		</view>
		<view class="msg-commlist">
			<uni-swipe-action :options="options" @tap="bindClick">
				<view class="list-item">
					<view class="item-img">
						<image src="http://47.244.27.153/images/2019/07/30/1564484682777693.JPG" mode="widthFix"></image>
					</view>
					<view class="item-content" @tap="enterChat">
						<view class="user">
							<text class="user-name">哈哈</text>
							<text class="user-time">09:20</text>
						</view>
						<view class="text">
							<text class="text-distance">[0.07km]</text>
							<text class="text-content">通讯功能</text>
						</view>
					</view>
				</view>
			</uni-swipe-action>

			<view class="list-item">
				<view class="item-img">
					<image src="http://47.244.27.153/images/2019/07/30/1564484682777693.JPG" mode="widthFix"></image>
				</view>
				<view class="item-content">
					<view class="user">
						<text class="user-name">哈哈</text>
						<text class="user-time">09:20</text>
					</view>
					<view class="text">
						<text class="text-distance">[0.07km]</text>
						<text class="text-content">通讯功能通讯功能通讯功能通讯功能通讯功能通讯功能通讯功能</text>
					</view>
				</view>
			</view>



			<view class="list-item">
				<view class="item-img">
					<image src="http://47.244.27.153/images/2019/07/30/1564484682777693.JPG" mode="widthFix"></image>
				</view>
				<view class="item-content">
					<view class="user">
						<text class="user-name">哈哈</text>
						<text class="user-time">09:20</text>
					</view>
					<view class="text">
						<text class="text-distance">[0.07km]</text>
						<text class="text-content">通讯功能</text>
					</view>
				</view>
			</view>


		</view>



	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue";
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		data() {
			return {
				options: [{
					text: '刪除',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
			}
		},
		components: {
			uniSwipeAction,
			uniBadge
		},
		methods: {
			enterChat(e) {
				uni.navigateTo({
					url: 'chat',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			bindClick() {
				console.log('用户点击刪除');
			},
			pickerChange(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
			}
		},
		onPullDownRefresh() {
			console.log("onPullDownRefresh")
			setTimeout(function() {
				uni.startPullDownRefresh()
			}, 500)
		},
		onNavigationBarButtonTap() {
			uni.showActionSheet({
				itemList: ['忽略未读提醒', '清空聊天列表', '提醒设置'],
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
							content: '确定忽略未读提醒',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					};
					if (res.tapIndex == 1) {
						uni.showModal({
							title: '',
							content: '确定清空聊天列表',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
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
				position: relative;

				// view{
				// 	position: absolute
				// }
				
				.comm-badge {
					position: absolute;
					top: -10px;
					left: 16%;
					z-index: 10;
				}
				.fab-badge {
					position: absolute;
					top: -10px;
					left: 40%;
					z-index: 10;
				}
				.fans-badge {
					position: absolute;
					top: -10px;
					left: 65%;
					z-index: 10;
				}
				.comment-badge {
					position: absolute;
					top: -10px;
					left: 89%;
					z-index: 10;
				}

				view image {
					width: 40px;
					height: 40px;
				}

				view text {
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

			&-commlist {
				width: 100%;
				padding: 10px;
				box-sizing: border-box;

				.list-item {
					display: flex;
					flex-direction: row;
					align-items: center;

					.item-img {
						flex-grow: 0;

						image {
							width: 50px;
							height: 50px;
							border-radius: 50%;
						}
					}

					.item-content {
						max-width: 306px;
						font-size: 16px;
						padding: 10px;
						flex-grow: 1;
						overflow: hidden;

						.user {

							align-items: stretch;
							color: #777;

							&-name {
								text-align: left;
								font-weight: 700;
								color: #000;
							}

							&-time {
								float: right;
								text-align: right;
							}
						}

						.text {
							margin-top: 5px;
							color: #777;
							font-size: 14px;
							overflow: hidden;
							text-overflow: ellipsis;

							&-distance {}

							&-content {
								white-space: nowrap;
								text-overflow: ellipsis;
								word-break: break-all;
								overflow: hidden;
							}
						}
					}
				}
			}
		}
	}
</style>
