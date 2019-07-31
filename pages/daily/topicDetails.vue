<template>
	<view class="page">
		<scroll-view ref=scroll :scroll-top="scrollTop" scroll-y="true" class="scroll" @scrolltolower="scrolltolower()"
		 @scrolltoupper="scrolltoupper" scroll-with-animation="true">
			<view class="top">
				<view class="top-item">
					<image src="../../static/img/default.png" mode=""></image>
					<view class="content">
						<text class="title">#星球建设#</text>
						<text class="count">阅读: 222 讨论: 2222</text>
					</view>
				</view>
				<text class="text">邀请你看《pandla星球介绍》点击链接观看, 不负好时光上腾讯视频看热门大剧.星球建设星球建设星球建设星球建设。</text>
			</view>


			<view class="user-section" v-for="(item, index) in dynInfo" :key="index">
				<view class="user">
					<view class="left">
						<image :src="item.portrait" class="avatar" @tap="userInfo(item.id)"></image>
						<image class="folllow" src="../../static/img/main/daily/follow.svg" @tap="userFollow(item.id)" v-if="item.following == 0 && item.isOwn == 0 && following == false"></image>
						<text class="name">{{item.name}}</text>
					</view>

					<view @change.stop="behaviour(item.id)" class="right">
						<picker @change="bindPickerChange" :value="pickIndex" :range="array" v-if="item.isOwn == 0">
							<image class="btn-behaviour" src="../../static/img/main/daily/option.svg" @tap="behaviour(item.id)" />
						</picker>
					</view>

				</view>
				<view class="content">
					<image :src="item.images" mode="widthFix"></image>
					<text>#星球建设#</text>
					<text>{{item.content}}</text>
				</view>
				<view class="option">
					<view class="">
						<text>{{item.like_count}}</text>
					</view>
					<view class="">
						<text>{{item.pan}}</text>
					</view>
					<view class="">
						<text @tap.stop="showComm(item.id)">{{item.com_count}}</text>
					</view>
				</view>
			</view>
			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>

		</scroll-view>
		<view class="comment-section" v-if="showComment">
			<view class="comment-section-top">
				<text>条评论</text>
				<image src="../../static/img/daily/X.svg" @tap.stop="hidComm()"></image>
			</view>
			<scroll-view class="comment"  scroll-y="true">
				<view scroll-y="true" class="comment-section-details" v-for="(ite, ind) in commentInfo" :key="ind">
					<view class="comment-section-comm" @tap="replyComm(ite.id, ite.name, ite.uid)">
						<view class="comm-ite">
							<image class="ite-portrait" :src="ite.portrait" mode="aspectFill"></image>
							<view class="ite-name-content">
								<text class="ite-name">{{ite.name}}</text>
								<text class="ite-content">{{ite.content}}</text>
								<!-- <text class="ite-create_time">{{ite.create_time}}</text> -->
							</view>
						</view>
						<p class="comment-section-reply" v-if="ite.replyName != '' && ite.replyContent != ''">
							<text>@{{ite.replyName}}回复{{ite.name}}:</text>
							<text>{{ite.replyContent}}</text>
						</p>
					</view>
			
			
				</view>
			
				<view class="input-section">
					<input v-model="commContent" :placeholder="commplaceholder" />
					<button class="primary" hover-class="hover-primary" @tap="addComm()">發送</button>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import loading from "../../components/loading/loading.vue"
	import formatDate from '../../common/js/date.js';
	import throttle from "../../common/js/utils.js"
	import {
		findAllDyn,
		getImgTemp,
		getComment,
		addComment,
		concern,
		like,
		getBullet,
		reply
	} from '../../api/api.js';
	export default {
		components: { //2注册组件
			
			loading
		},
		data() {
			return {
				dynInfo: '',
				commentInfo: '',
				following: false,
				scrollTop: 0,
				beStatus: false,
				array: ['取消關注', '屏蔽用戶', '舉報用戶'],
				pickIndex: 0,
				uid: 0, // 用户id
				count: 10,
				loadingText: '加载中...',
				loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				showComment: false,
				commContent: '',
				commplaceholder: '為保證用戶隱私，只可以看自己的評論',
				
			}
		},
		methods: {
			findDyn() {
				this.loadingType = 0;
				uni.showNavigationBarLoading();
				findAllDyn("").then(data => {
					this.dynInfo = data
					console.log(data)
				})
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
			},
			userInfo(id) {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + id
				});
			},
			userFollow(id) {
				if (this.following == false) {
					concern(1, id).then(data => {
						this.following = true;
					});
				}
			},
			behaviour(id) {
				if (this.beStatus == false) this.beStatus = true;
				else if (this.beStatus == true) this.beStatus = false;
				this.uid = id
				// console.log(this.uid)
				// console.log(this.beStatus);
			},
			// 举报功能等实现
			bindPickerChange(e) {
				console.log(e.target.value)
				if (e.target.value == 0) { //取消关注
					this.following = false;
					concern(2, this.uid).then(data => {
						console.log("quxiao")

					});
				}
			},
			showComm(id) {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
				getComment(id).then(data => {
					this.commentInfo = data;
					// console.log(this.commentInfo);
				});
				this.flog = false
			},
			hidComm(){
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
			},
			addComm() {
				// console.log(this.did);
				if (this.commContent != '') {
					if (this.addType == 'reply') {
						console.log('刚刚是回复');
						// console.log('cid' + this.cid);
						// console.log('commContent' + this.commContent);
						reply(this.cid, this.commContent).then(data => {
							this.findDyn(2);
							this.addType = ''; // 重置发送按钮类型
							this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
						});
					} else {
						console.log('刚刚是評論');
						addComment(this.commContent, this.did).then(data => {
							getComment(this.did).then(data => {
								this.commentInfo = data;
								this.commContent = '';
								// this.time = formatDate( Date.now());
								console.log(this.time)
								// console.log(this.commentInfo);
							});
							// 获取弹幕
							getBullet(this.did).then(data => {
								this.bulletList = data.content;
							});
							//
							this.findDyn()
						});
					}
				}

			},
			// 回复评论
			replyComm(cid, name, comUid) {
				if (comUid != uni.getStorageSync('USERS_KEY').id) {
					this.commplaceholder = '@' + name;
					this.addType = 'reply';
					this.cid = cid;
				} else {
					uni.showToast({
						icon: 'none',
						title: '不能自己回復自己哦'
					})
				}
			},
			scrolltoupper() {
				uni.showLoading({
					title: '加载中',
				});
				this.findDyn()
				setTimeout(function() {
					uni.hideLoading();
				}, 1000);
			},
			scrolltolower() {
				this.loadingType = 1;
				uni.showNavigationBarLoading();
				findAllDyn(this.count).then(data => {
					this.dynInfo = this.dynInfo.concat(data);
					console.log(this.dynInfo)
					this.count += 10
					console.log(this.count)
				})
				uni.hideNavigationBarLoading()
			}
		},

		onLoad() {
			this.findDyn()
		},
		onReady() {},
		onNavigationBarButtonTap() {
			console.log("1")
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;

		::-webkit-scrollbar {
			width: 0;
			height: 0;
			color: transparent;
		}

		// width: 100%;
		// height: 100%;
		// overflow-y: auto;
		// -webkit-overflow-scrolling: touch;
		.top {
			margin: 10px;
			margin-bottom: 30px;

			.top-item {
				display: flex;
				flex-direction: row;

				image {
					width: 100px;
					height: 100px;
					flex-grow: 0;
				}

				.content {
					line-height: 35px;
					flex-grow: 6;

					.title {
						font-weight: 700;
					}

					.text {
						font-size: 14px
					}

					.count {
						font-size: 14px
					}
				}
			}

			.text {
				color: #ffffff;
				padding: 5px;
				font-size: 14px;
				text-indent: 5px;
			}
		}

		.user-section {
			width: 100%;
			margin-bottom: 20px;

			.user {
				padding: 5px;
				display: flex;
				justify-content: space-between;

				.left {
					padding: 5px;

					.avatar {
						width: 50px;
						height: 50px;
						border-radius: 100%;
						display: inline-block;
						vertical-align: middle;
					}

					.folllow {
						position: absolute;
						width: 30upx;
						height: 150upx;
						margin: 15upx 0 0 -30upx;
					}

					.name {
						padding-left: 5px;
						font-size: 16px;
						color: #ffffff;
						vertical-align: middle;
					}
				}

				.right {
					.btn-behaviour {
						margin-top: 15px;
						right: 10px;
						width: 15px;
						height: 25px;
					}
				}
			}

			.content {
				padding: 0;

				image {
					width: 100%;
				}

				text {
					display: inline-block;
					padding: 5px;
					font-size: 16px;
				}
			}
		}

		.option {
			display: flex;
			justify-content: space-between;

			view {
				width: 30%;
				text-align: center;

				text {
					font-size: 16px;
					color: #ffffff;
					text-align: center;
				}
			}

		}
	}

	.scroll {
		width: 100%;
		height: 100%;
		-webkit-overflow-scrolling: touch;
	}

	.comment-section {
		position: fixed;
		bottom: 0;
		width: 355px;
		height: 50%;
		padding: 10px 10px 32px 10px;
		font-size: 16px;
		z-index: 300;
		background-color: #000000;
		border-radius: 36upx 36upx 0 0;
		overflow: hidden;
		::-webkit-scrollbar {
			width: 0;
			height: 0;
			color: transparent;
		}

		.comment-section-top {
			width: 355px;
			height: 30px;
			position: fixed;
			text-align: center;
			color: #ffffff;
			font-size: 14px;
			z-index: 301;
			background-color: #000000;
			image {
				width: 15px;
				height: 15px;
				float: right;
				right: 5px;
			}
		}
		
		.comment{
			margin-top: 30px;
			width: 355px;
			height: 100%;
			.comment-section-details {
				width: 355px; 
				
				height: 100%;
				
				.comment-section-comm {
					margin-bottom: 10px;
			
					.comm-ite {
						display: flex;
						align-items: flex-end;
			
						.ite-portrait {
							width: 40px;
							height: 40px;
							border-radius: 50%;
							flex-grow: 0;
							margin: 5px;
						}
			
						.ite-name-content {
							padding-left: 5px;
							color: #ffffff;
							flex-wrap: wrap;
							flex-grow: 1;
							font-size: 14px;
							.ite-name {
								display: block
							}
						}
					}
			
					.comment-section-reply {
						padding: 10px;
						color: #ffffff;
						font-size: 14px
					}
				}
			
			}
			
			.input-section {
				position: fixed;
				width: 375px;
				height: 65upx;
				margin: 0 auto;
				bottom: 0;
				left: 0;
				color: #000000;
				background-color: #B7B7B7;
				border-radius: 50upx;
				font-size: 30upx;
			
				input {
					width: 77%;
					height: 65upx;
					line-height: 65upx;
					vertical-align: middle;
					float: left;
					padding-left: 20upx;
				}
			
				button {
					position: absolute;
					margin: 0;
					padding: 0;
					right: 0;
					width: 20%;
					padding-right: 40upx;
					float: right;
					margin-top: -10upx;
					font-size: 35upx;
					color: #000000;
				}
			}
		}
	}

	// .comment-section-details {
	// 	width: 100%;
	// 	padding: 10upx 20upx;
	// 	height: 100upx;
	// }
	// 
	// button {
	// 	z-index: 999;
	// }
	// 
	// .comment-section-comm {
	// 	display: flex;
	// 	align-items: flex-end;
	// 	padding: 20upx 10upx 0 10upx;
	// }
	// 
	// .ite-name-content {
	// 	width: 450upx;
	// 	// overflow: hidden;
	// 	flex-wrap: wrap;
	// 	// text-overflow: ellipsis;
	// 	// white-space: nowrap;
	// }
	// 
	// .ite-portrait {
	// 	margin-top: 20upx;
	// 	width: 60upx;
	// 	height: 60upx;
	// 	border-radius: 50%;
	// }
	// .ite-name {
	// 	color: #979797;
	// 	font-size: 24upx;
	// 	margin-left: 5px;
	// 	flex-grow: 0;
	// }
	// .ite-content {
	// 	color: #979797;
	// 	font-size: 24upx;
	// 	margin-left: 5px;
	// 	flex-grow: 1;
	// }
	// .ite-create_time {
	// 	color: #979797;
	// 	font-size: 24upx;
	// 	flex-grow: 3;
	// 	
	// }
	// .comment-section-reply{
	// 	height: 100upx;
	// 	width: 100%;
	// 	line-height: 100upx;
	// 	margin-left: 10upx;
	// }
	// 
	// 
	// /* 评论 */
	// .input-section {
	// 	position: fixed;
	// 	width: 100%;
	// 	height: 65upx;
	// 	margin: 0 auto;
	// 	bottom: 0;
	// 	color: #000000;
	// 	background-color: #B7B7B7;
	// 	border-radius: 50upx;
	// 	font-size: 30upx;
	// }
	// 
	// .input-section input {
	// 	width: 77%;
	// 	height: 65upx;
	// 	line-height: 65upx;
	// 	vertical-align: middle;
	// 	float: left;
	// 	padding-left: 20upx;
	// }
	// 
	// .input-section button {
	// 	position: absolute;
	// 	margin: 0;
	// 	padding: 0;
	// 	right: 0;
	// 	width: 20%;
	// 	padding-right: 40upx;
	// 	float: right;
	// 	margin-top: -10upx;
	// 	font-size: 35upx;
	// 	color: #000000;
	// }
</style>
