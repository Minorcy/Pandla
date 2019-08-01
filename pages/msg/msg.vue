<template>
	<view class="page">
		<hr>
		<view class="top">
			<view class="img">
				<image src="../../static/img/topic/communication.svg" mode="widthFix"></image>
			</view>
			<view class="top-text">
				<text>
					#點對點通訊，我們會為星球居民提供兩種通訊方式：
					一種、是普通免費的即時通訊，類似微信，blued的通訊方式
					一種、是需要支付兩個EOS的區塊鏈點對點通訊區塊鏈技術的點對點通訊，用戶在自己設備上运行节点接入網絡，點對點實時互聯，通訊內容只有掌握私鑰的人才能查看，平台和第三方不會紀錄，查看、儲存任何信息。作為星球居民妳會選擇哪一種通訊方式請告訴我們
					<text decode="true" class="right">預計上線時間:&nbsp;&nbsp;建設中</text>
				</text>
			</view>
		</view>
		<view class="user-section">
			<view class="user-item" v-for="(item,index) in topicList" :key="index">
				<view class="user">
					<image :src="item.poto" mode="aspectFill" @tap="toUser(item.uid)"></image>
					<text>{{item.name}}</text>
				</view>
				<view class="content">
					<text class="content-text" decode="true"><text class="content-title" decode="true">#點對點通訊 &nbsp;&nbsp;</text>
						{{item.content}}</text>
				</view>
				<view class="option">
					<view class="comm-item" @tap="showComm(item.id,index)">
						<image src="../../static/img/topic/comment.svg" mode=""></image>
						<text>{{item.commCount}}</text>
					</view>
					<view class="like-item" @tap="usTopicLike(item.id,index)">
						<image :src="item.isLike ==1 ? likeimg :unlikeimg"></image>

						<text>{{item.likeCount}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="comment-section" v-if="showComment">
			<view class="comment-section-top">
				<text>{{commCont}}条评论</text>
				<image src="../../static/img/daily/X.svg" @tap.stop="hidComm()"></image>
			</view>
			<scroll-view class="comment" scroll-y="true">
				<view class="nocomm" v-if="!commList.length"><text>暂无评论和回复,快来抢沙发吧!</text></view>
				<view scroll-y="true" class="comment-section-details" v-for="(ite, ind) in commList" :key="ind">
					<view class="comment-section-comm">
						<view class="comm-ite">
							<image class="ite-portrait" :src="ite.portrait" mode="aspectFill" @tap="replyComm(ite.name, ite.uid ,ite.id)"></image>
							<view class="ite-name-content">
								<text class="ite-name" @tap="replyComm( ite.name, ite.id)">{{ite.name}}:</text>
								<text class="ite-content">{{ite.content}}</text>
								<text class="ite-create_time">{{ite.createTime}}</text>
							</view>
						</view>
						<p class="comment-section-reply" v-if="ite.reply != ''" v-for="(it,idx) in ite.reply" :key="idx">
							<text class="color">作者</text>
							<text>: {{it.content}}</text>
						</p>
					</view>
				</view>
				<view class="input-section">
					<input v-model="commContent" :placeholder="commplaceholder" />
					<button class="primary" hover-class="hover-primary" @tap="addComm()">發送</button>
				</view>
			</scroll-view>
		</view>
		<view class="publish" @tap.stop="publishDyn()">
			<image src="../../static/img/topic/publish.svg" mode=""></image>
		</view>
		<view class="load" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	import {
		checkTopicList,
		getLikeNumber,
		topicLike,
		topicComment,
		getAllComment,
		topicReply,
		getReply
	} from '../../api/api.js';
	export default {
		data() {
			return {
				topicList: '',
				likeCount: "",
				commCont: 0,
				showComment: false,
				commContent: '',
				commplaceholder: '為保證用戶隱私，只可以看自己的評論',
				likeimg: "../../static/img/topic/like.svg",
				unlikeimg: "../../static/img/topic/fabulous.svg",
				islike: false,
				commList: '',
				replyList: '',
				addType: '',
				topicId: '',
				topicRid: '',
				commIndex: '',
				height: "",
				pageSize:10,
				loadMoreText: "上拉加载更多",
				showLoadMore: false,
			}
		},
		methods: {
			toUser(id) {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + id
				});
			},
			publishDyn() {
				uni.navigateTo({
					url: '../publish/publish?tid=' + 4
				});
			},
			getTopicList() {
				checkTopicList(4, 0).then(data => {
					this.topicList = data
					console.log(data)
				})

			},
			usTopicLike(id, index) {
				if (this.topicList[index].isLike !== 1) {
					this.topicList[index].isLike = 1
					this.topicList[index].likeCount += 1
					console.log(this.topicList[1].isLike)
					topicLike(id).then(data => {
						getLikeNumber(id).then(data => {
							console.log(data)
							this.likeCount = data.likeCount
						})
					});
					console.log(index)

				}

			},
			showComm(id, index) {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
				let cid
				getAllComment(id).then(data => {
					this.commList = data
					this.commCont = data.length
					console.log(data)
				})
				this.topicId = id
				this.commIndex = index
			},
			hidComm() {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
				this.commContent = ''
				this.commList = ''
				this.commCont = 0
			},
			addComm() {
				if (this.commContent == "") {
					uni.showToast({
						icon: 'none',
						title: '请输入评论'
					});
				} else if (this.addType == 'reply') {
					topicReply(this.topicRid, this.commContent).then(data => {
						console.log("reply")
						getAllComment(this.topicId).then(data => {
							this.commList = data
							console.log(this.commList)
							this.commCont = data.length
							this.addType = ''; // 重置发送按钮类型
							this.commContent = ''
							uni.showToast({
								icon: 'none',
								title: '回復成功'
							})
							this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
							this.topicList[this.commIndex].commCount += 1
						})
					})
				} else {
					topicComment(this.topicId, this.commContent).then(data => {
						getAllComment(this.topicId).then(data => {
							this.commList = data
							this.commCont = data.length
						})
					})
					uni.showToast({
						icon: 'none',
						title: '回復成功'
					})
					this.commContent = ''
					this.addType = ''; // 重置发送按钮类型
					this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
					this.topicList[this.commIndex].commCount += 1
				}
			
			},
			replyComm(name, id,  rid) {
				if (id != uni.getStorageSync('USERS_KEY').id) {
					this.commplaceholder = '@' + name;
					this.addType = 'reply';
					this.topicRid = rid
				} else {
					uni.showToast({
						icon: 'none',
						title: '不能自己回復自己哦'
					})
				}
			},
			

		},
		onPullDownRefresh() {
			console.log("onPullDownRefresh")
			setTimeout(function() {
				uni.startPullDownRefresh()
			}, 300)
		},
		onReachBottom() {
			checkTopicList(4,this.pageSize).then(data=>{
				this.pageSize+=10;
				if(!data){
					this.showLoadMore= true
					this.loadMoreText =  "没有更多数据了!"
					return
				}
				this.showLoadMore = true;
				this.topicList = this.topicList.concat(data)
			})
		},
		
		onLoad() {
			this.getTopicList()
			uni.getSystemInfo({
				success: function(res) {
					console.log(res.windowHeight);
					this.height = res.windowHeight
				}
			});
		},
		onShow() {
			this.getTopicList()
		}
	}
</script>
<style lang="scss" scoped>
	.page {
		// position: absolute;
		// top: 0;
		// right: 0;
		// bottom: 0;
		// left: 0;
		width: 100%;
	
		
		// -webkit-overflow-scrolling: touch;
		// overflow-scrolling: touch;
		// overflow-y: scroll;

		hr {
			position: fixed;
			margin-top: 5px;
			height: 2px;
			border: none;
			background-color: #4CD964;
			top: -5px;
			width: 100%;
			z-index: 10;
		
		}

		::-webkit-scrollbar {
			width: 0;
			height: 0;
			color: transparent;
		}

		.top {
			margin-top: 1px;
			width: 100%;
			margin-bottom: 10px;

			.img {
				width: 100%;

				image {
					width: 100%;
				}
			}

			.top-text {
				color: #cdcdcd;
				padding: 10px;
				font-size: 14px;
				line-height: 25px;

				text {
					display: block;
					color: #cdcdcd !important;
				}

				.right {
					position: relative;
					left: 47%;
					color: #067ee8 !important;
					width: 55%;
					text-align: center;

				}
			}

		}

		.user-section {
			.user-item {
				position: relative;
				background-color: #fff;
				padding: 5px 10px;
				margin-bottom: 5px;

				.user {
					background-color: #fff;
					padding: 5px 10px;

					image {
						width: 50px;
						height: 50px;
						border-radius: 50%;
						vertical-align: middle;
					}

					text {
						color: #000;
						margin-left: 5px;
						font-size: 16px;
						vertical-align: middle;
					}
				}

				.content {
					background-color: #fff;
					padding: 5px 10px;

					.content-title {
						display: inline-block;
						color: #0087ff;
						font-size: 16px;
					}

					.content-text {
						display: inline-block;
						color: #000;
						font-size: 16px;
						text-align: justify;
						text-justify: newspaper;
						word-break: break-all;

					}
				}

				.option {
					height: 30px;
					background-color: #fff;
					padding: 5px 10px;

					.comm-item {
						float: left;

						image {
							width: 25px;
							height: 25px;
							vertical-align: middle;
						}

						text {
							margin-left: 5px;
							font-size: 16px;
							color: #000;
							vertical-align: middle;
						}
					}

					.like-item {
						float: right;

						image {
							width: 25px;
							height: 25px;
							vertical-align: middle;
						}

						text {
							font-size: 16px;
							color: #000;
							margin: 0 5px;
							vertical-align: middle;
						}
					}
				}
			}
		}

		.publish {
			position: fixed;
			bottom: 0px;
			left: 50%;
			margin-left: -20px;
			text-align: center;

			image {
				width: 30px;
				height: 30px;
			}
		}

		.comment-section {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 60%;
			box-sizing: border-box;
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
				width: 95%;
				height: 30px;
				position: fixed;
				text-align: center;
				box-sizing: border-box;
				color: #ffffff;
				font-size: 14px;
				margin: 0 auto;
				background-color: #000000;

				image {
					width: 15px;
					height: 15px;
					float: right;
					right: 10px;
				}
			}

			.comment {
				margin-top: 30px;
				width: 100%;
				height: 100%;

				.nocomm {
					margin-left: 70px;
					margin-top: 50px;
					color: #ffffff;

				}

				.comment-section-details {
					width: 100%;


					.comment-section-comm {
						margin-bottom: 10px;

						.comm-ite {
							display: flex;
							align-items: flex-end;

							.ite-portrait {
								width: 40px;
								height: 40px;
								border-radius: 50%;
								margin: 5px;
								align-self: end;
								flex-shrink: 0;
							}

							.ite-name-content {
								box-sizing: border-box;
								padding: 5px;
								color: #ffffff;
								flex-wrap: wrap;
								flex-grow: 1;
								font-size: 14px;
								line-height: 20px;

								.ite-name {
									display: block;
									color: #B7B7B7;
								}

								.ite-content {
									word-wrap: break-word;
								}

								.ite-create_time {
									float: right;
									font-size: 12px;
								}
							}
						}

						.comment-section-reply {
							padding: 5px 5px 5px 30px;
							color: #ffffff;
							font-size: 14px;

							.color {
								color: #e64340;
								font-size: 14px;
							}
						}
					}

				}

				.input-section {
					position: fixed;
					width: 100%;
					height: 65upx;
					margin: 0 auto;
					bottom: 0;
					left: 0;
					box-sizing: border-box;
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
		.load{
			width: 100%;
			height: 20px;
			color: #fff;
			font-size: 16px;
			text-align: center;
			line-height: 20px;
			}
	}
</style>
