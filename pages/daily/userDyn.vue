<template>
	<view class="daily-page">
		<view class="top">
			<image class="camera" @tap="back()" src="/static/img/msg/back.svg"></image>
		</view>
		<swiper class="swiper" :vertical="true" @change="changeCurrent" :current="current" @transition="transitioning"
		 @animationfinish='animationfinish'>

			<swiper-item v-for="(item, idx) in dynInfo" :key="idx" class="swiper-item" :style="{backgroundImage: 'url('+item.images+')'}">
				<view class="header">
					<view :class="{ avatar: isActive }">
					</view>
				</view>
				<view v-if="Math.abs(index-idx)<=1" class="item-box">
					<view class="cover-view-left">
						<view class="left-view location" @tap="toMap(item.lat,item.lng,item.location)" v-if="item.location.length != 0">
							<image src="../../static/img/daily/location.svg" class="location-img"></image>
							<text class="left-text-location">{{item.location}}</text>
						</view>
						<view class="left-view name">
							<text class="left-text" @click.stop="userInfo(item.uid)">@{{item.name}}</text>
						</view>
						<view class="left-view ">
							<text class="left-text" v-if="item.isOwn == 1">{{item.content}}</text>
							<text class="left-text" v-else-if="item.following == 1 && item.isOwn == 0">{{item.content}}</text>
							<text class="left-text gray" v-else-if="item.following == 0 && item.isOwn == 0">需要關注才能看到對方的日志内容</text>
							<text class="left-text gray" v-else-if="item.following == 0">需要關注才能看到對方的日志内容</text>
						</view>
					</view>
					<view class="cover-view-right">
						<view class="user-info">
							<image :src="item.portrait" class="avater avater-img" mode="aspectFill" lazy-load @click.stop="userInfo(item.uid)"></image>
							<image src="../../static/img/main/daily/follow.svg" class="avater-folllow" @tap.stop="userFollow(item.uid,index)"
							 v-if="!item.following && item.isOwn == 0"></image>
						</view>
						<view class="right-box" @click.stop="likePerson(item.isOwn,item.id,index)">
							<image :src="item.isLike?'../../static/img/daily/like.svg':'../../static/img/daily/unlike.svg'" class="img"></image>
							<text class="right-text">{{item.like_count}}</text>
						</view>
						<view class="right-box" @click.stop="tapMsg(item.id,item.com_count)">
							<image src="../../static/img/daily/pinglun.svg" class="img"></image>
							<text class="right-text">{{item.com_count}}</text>
						</view>
						<view class="right-box" @click="showDoomm">
							<image :src="showBullet?'../../static/img/daily/danmu.svg':'../../static/img/daily/danmuoff.svg'" class="img"></image>
							<text class="right-text">弹幕</text>
						</view>
						<view class="right-box">
							<image src="../../static/img/daily/pan.svg" class="img"></image>
							<text class="right-text">{{item.pan}}</text>
						</view>
						<view class="right-box behaviour">
							<image class="btn-behaviour" @tap="behaviour()" src="../../static/img/main/daily/option.svg"></image>
						</view>
					</view>
				</view>

			</swiper-item>
		</swiper>
		<l-barrage ref="lBarrage" v-if="showBullet"></l-barrage>
		
			<comm v-if="showComment" :commentInfo='commentInfo' :commCount='commCount' @hidComm="hidComm" @addComm='addComm' @replyComm="replyComm" @nextReplyComm = "nextReplyComm" @deleteComm="deleteComm" @deleteReply ="deleteReply"></comm>
		
	</view>
</template>
<script>
	const device = uni.getSystemInfoSync();
	import compressImage from '@/common/utils/compressImage.js';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import comm from '@/components/comments.vue'
	import lBarrage from '@/components/l-barrage/l-barrage.vue'
	import {
		findAllDyn,
		getImgTemp,
		getComment,
		addComment,
		concern,
		like,
		likeCount,
		getBullet,
		getReply,
		createCom,
		reply,
		checkIsCon,
		deleteComm,
		deleteReply,
		checkMeAllDyn
	} from '@/api/api.js';
	export default {
		components: {
			uniPopup,
			comm,
			lBarrage
		},
		data() {
			return {
				current:0,
				sysheight: 0,
				dynInfo: '',
				uid: '',
				did: '',
				cid: '',
				parentId:'',
				toid:'',
				likeNumber: 0,
				height: '667px',
				index: 0,
				width: '',
				oldIndex: 0,
				commentInfo: [],
				moreComment: [],
				commCount: 0,
				addType: "comm",
				pageCount: 10,
				flag: true,
				flog: true,
				isActive: false,
				showBullet: true,
				showComment:false
			}
		},
		created() {
			//#ifdef APP-PLUS
			plus.screen.lockOrientation("portrait-primary")
			//#endif
			this.sysheight = uni.getSystemInfoSync().windowHeight
			this.height = `${this.sysheight}px`
			let width = uni.getSystemInfoSync().windowWidth
			this.width = `${width}px`
		},
		onTabItemTap() {
			this.refresh += 1
			setTimeout(() => {
				this.refresh = 0
			}, 800);
			if (this.refresh == 2) {
				this.findDyn()
				this.refresh = 0
			}

		},
		onLoad(option) {
			this.current = option.index
			this.findDyn(option.id)
		},
		methods: {
			findDyn(id) {
				checkMeAllDyn(id).then(data => {
					this.dynInfo = data
					console.log(data)
					this.uid = data[0].uid
					this.index = 0
					this.did = data[0].id
					this.flag = true
				})
			},
			toMap(lat, lng, location) {
				if (lat == "" && lng == "" && location == "") {
					return
				}
				uni.openLocation({
					latitude: Number(lat),
					longitude: Number(lng),
					name: location,
					success: function(e) {
						console.log(e);
					}
				});
			},
			userFollow(id, index) {
				concern(1, id).then(data => {
					this.dynInfo[index].following = 1
				});
			},
			userInfo(id) {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + id
				});
			},
			changeCurrent(e) {
				this.did = this.dynInfo[e.detail.current].id
				this.likeNumber = 0
				this.getAllBullet()
				this.uid = this.dynInfo[e.detail.current].uid
				checkIsCon(this.dynInfo[e.detail.current].uid).then(data => {
					// console.log(data)
					if (data) {
						this.dynInfo[e.detail.current].following = 1
					} else if (data == 0) {
						this.dynInfo[e.detail.current].following = 0
					}
				})
			},
			animationfinish(e) {
				this.index = e.detail.current
			},
			transitioning(e) {
				// if (this.index == 0) {
				// 	if (e.detail.dy < -100 && this.flog) {
				// 		uni.showLoading({
				// 			title: "加载中"
				// 		})
				// 		this.flog = false
				// 		this.findDyn()
				// 		setTimeout(() => {
				// 			uni.hideLoading()
				// 			this.flog = true
				// 		}, 1000)
				// 	}
				// }
				// if (this.index + 1 == this.pageCount) {
				// 	if (e.detail.dy > 100 && this.flag) {
				// 		if (this.flag) {
				// 			this.flag = false
				// 			uni.showLoading({
				// 				title: "加载中"
				// 			})
				// 			this.loadFindDyn()
				// 			setTimeout(() => {
				// 				uni.hideLoading()
				// 				this.flag = true
				// 			}, 1000)
				// 		}
				// 	}
				// }
			},
			loadFindDyn() {
				findAllDyn(this.pageCount).then(data => {
					this.pageCount += data.length
					this.dynInfo = [...this.dynInfo, ...data]
					if (data.length == 0) {
						uni.showToast({
							icon: 'none',
							title: '没有更多数据了'
						});
					}
				})
			},

			likePerson(isOwn, did, index) {
				// console.log(isOwn, did, index)
				if (isOwn == 1) {
					uni.showToast({
						icon: 'none',
						title: '不可以給自己點贊哦'
					});
				} else {
					this.likeNumber++;
					like(did, 1).then(data => {
						// console.log(data)
						this.isActive = true
						likeCount(did).then(data => {
							// console.log(data)
							this.dynInfo[index].isLike = 1
							this.dynInfo[index].like_count = data
							this.dynInfo[index].pan = data / 10
							uni.showToast({
								icon: 'none',
								title: '點贊了' + this.likeNumber + '次'
							});

							var timer = setTimeout(() => {
								clearTimeout(timer);
								this.isActive = false
							}, 1500)
						})
					});
					this.isActive = false

				}
			},
			tapAvater() {
				uni.showToast({
					icon: 'none',
					title: `点击索引为${this.index}的头像`
				})
			},
			tapMsg(did, count) {
				this.showComment = !this.showComment
				// this.$refs.popup.open()
				// uni.hideTabBar()
				this.commCount = count
				// did = Number(did)
				getComment(did).then(data => {
					console.log(data)
					if (!data) {
						this.commentInfo = []
					}else{
						data.filter(item => {
							item.moreComment = false
							item.showComment = false
							getReply(item.id).then(data => {
								if (data) {
									item.moreComment = data
								} 
							})
						})
						setTimeout(()=>{
							this.commentInfo = data
							console.log(data)
						},200)
					}
				});
			},
			hidComm() {
				this.showComment = !this.showComment
				this.commentInfo = ''
				uni.showTabBar()
			},
			addComm(commContent) {
				if (this.addType == 'reply') {
					reply(this.cid, commContent, 0,this.toid).then(data => {
						this.addType = 'comm'
						getComment(this.did).then(data => {
							data.filter(item => {
								item.moreComment = false
								item.showComment = true
								getReply(item.id).then(data => {
									if (data) {
										item.moreComment = data
									} 
								})
							})
							setTimeout(()=>{
								this.commentInfo = data
							},200)
						});
					});
				} else if(this.addType == 'comm') {
					createCom(this.did,commContent).then(data => {
						console.log(data)
						getComment(this.did).then(data => {
							this.commCount += 1
							this.addType = 'comm'
							this.dynInfo[this.index].com_count += 1
							data.filter(item => {
								item.moreComment = false
								item.showComment = true
								getReply(item.id).then(data => {
									if (data) {
										item.moreComment = data
									} 
								})
							})
							setTimeout(()=>{
								this.commentInfo = data
							},200)
						});
						this.getAllBullet()
					});
				}else if(this.addType == 'nextReply'){
					reply(this.cid, commContent, this.parentId,this.toid).then(data => {
						this.addType = 'comm'
						getComment(this.did).then(data => {
							data.filter(item => {
								item.moreComment = false
								item.showComment = true
								getReply(item.id).then(data => {
									if (data) {
										item.moreComment = data
									} 
								})
							})
							setTimeout(()=>{
								this.commentInfo = data
							},200)
						});
					});
				}
			},
			replyComm(index) {
				this.addType = 'reply';
				this.cid = this.commentInfo[index].id;
				this.toid =  this.commentInfo[index].uid
				
			},
			nextReplyComm(iem1,iem2,iem3){
				this.addType = "nextReply"
				this.cid = iem1
				this.parentId = iem2
				this.toid = iem3
			},
			deleteComm(ite1,ite2,ind){
				var uid = uni.getStorageSync('USERS_KEY').id
				var that = this
				if(ite2 == uid){
					uni.showModal({
						title: '',
						content: '確定刪除評論',
						confirmText: "確定",
						success: function(res) {
							if (res.confirm) {
								deleteComm(ite1).then(data=>{
									that.commentInfo.splice(ind,1)
								})
							}
						}
					});
				}
			},
			deleteReply(iem1,iem2,ind,idx){
				var uid = uni.getStorageSync('USERS_KEY').id
				var that = this
				if(iem2 == uid){
					uni.showModal({
						title: '',
						content: '確定刪除評論',
						confirmText: "確定",
						success: function(res) {
							if (res.confirm) {
								deleteReply(iem1).then(data=>{
									that.commentInfo[ind].moreComment.splice(ind,1)
								})
							}
						}
					});	
				}
			},
			getAllBullet() {
				if (!this.showBullet) {
					return
				}
				getBullet(this.did).then(data => {
					var bulletList = data.content;
					this.$refs.lBarrage.start(data.content)
				});
			},
			showDoomm() {
				this.showBullet = !this.showBullet
				if (this.showBullet) {
					this.getAllBullet()
				}
			},
			tapShare() {
				uni.showToast({
					icon: 'none',
					title: `分享索引为${this.index}的视频`
				})
			},
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			publishDyn() {
				var that = this
				uni.chooseImage({
					sourceType: ["camera", "album"],
					sizeType: ['original'],
					count: 1,
					success: async (res) => {
						const tempFilePaths = res.tempFilePaths;
						let tempPathList = [];
						for (let i = 0; i < tempFilePaths.length; i++) {
							const path = tempFilePaths[i];
							const src = await that.compressImageHandler(path)
							tempPathList.push(src);
						}
						that.$store.commit('setImgTemp', tempPathList[0]);
						// // console.log(this.$store.state.imgTemp);
						uni.navigateTo({
							url: 'crop'
						});
					}
				})

			},
			async compressImageHandler(src) {
				console.log('platform===' + device.platform)
				const tempPath = await compressImage(src, device.platform);
				console.log('tempPath-----' + tempPath);
				return tempPath
			},
			behaviour() {
				var that = this
				uni.showActionSheet({
					itemList: ['取消關注', '屏蔽用戶', '舉報用戶'],
					success: function(res) {
						// console.log('选中了第' + (res.tapIndex) + '个按钮');
						if (res.tapIndex == 0) {
							if (that.dynInfo[that.index].following == 0) {
								uni.showToast({
									icon: 'none',
									title: '暫未關注該用戶'
								});
								return
							}
							uni.showModal({
								title: '',
								content: '確定取消關注',
								confirmText: "確定",
								success: function(res) {
									if (res.confirm) {
										concern(2, that.uid).then(data => {
											that.dynInfo[that.index].following = 0
										})
									} else if (res.cancel) {
										// console.log('用户点击取消');
									}
								}
							});
						};
						if (res.tapIndex == 1) {
							uni.showModal({
								title: '',
								content: '屏蔽用戶',
								confirmText: "確定",
								success: function(res) {
									if (res.confirm) {
										// console.log('用户点击确定');
									} else if (res.cancel) {
										// console.log('用户点击取消');
									}
								}
							});
						}
						if (res.tapIndex == 2) {
							var userInfo = {
								did: that.did,
								id: that.uid,
								name: that.dynInfo[that.index].name,
								avatar: that.dynInfo[that.index].portrait
							}
							uni.showModal({
								title: '',
								content: '舉報用戶',
								confirmText: "確定",
								success: function(res) {
									if (res.confirm) {
										// console.log('用户点击确定');
										uni.navigateTo({
											url: "/pages/msg/report?userInfo=" + JSON.stringify(userInfo)
										})
									} else if (res.cancel) {
										// console.log('用户点击取消');
									}
								}
							});
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			}

		}

	}
</script>
<style scoped>
	.daily-page {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #000000;
	}

	.top {
		position: absolute;
		top: 5px;
		left: 15px;
		width: 49px;
		height: 60px;
		padding-top: var(--status-bar-height);
		margin: 10px 0px 0 0;
		z-index: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.top image {
		position: relative;
		width: 25px;
		height: 25px;
		margin: 2px auto;
		padding: 0 5px;
	}

	.top image::after {

		content: "";

		position: absolute;

		top: -10px;

		left: -10px;

		right: -10px;

		bottom: -10px;

	}

	.swiper {
		width: 100%;
		height: 100%;
		flex: 1;
		background-color: #000;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
		position: relative;
		flex: 1;
		background-repeat: no-repeat;
		background-position: 100% center;
		background-size: 100%;
	}

	.swiper-item::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-image: linear-gradient(transparent, #000);
		/* opacity: 0.3; */
		filter: opacity(30%);
		z-index: 1;
	}

	.video {
		flex: 1;
	}

	.item-box {
		width: 100%;
		flex: 1;
	}

	.cover-view-center {
		position: absolute;
		justify-content: center;
		align-items: center;
		opacity: 0.1;
		z-index: 999;
	}

	.cover-view-left {
		position: absolute;
		margin-left: 20upx;
		bottom: 24upx;
		z-index: 9999;
		font-size: 12px;
		color: #FFFFFF;
		//#ifndef APP-PLUS-NVUE
		word-wrap: break-word;
		/* white-space: pre-wrap;
		text-overflow: ellipsis;
		overflow: hidden; */
		//#endif
	}

	.cover-view-left .location {
		width: max-content;
		background-color: rgba(0, 0, 0, .3);
		display: flex;
		border-radius: 10rpx;
		flex-direction: row;
		align-items: center;
		font-size: 10px;
		padding: 5rpx 10rpx;
	}

	.location .location-img {
		display: inline-block;
		width: 15px;
		height: 15px;
		margin-right: 20rpx;
	}

	.cover-view-left .name {
		font-size: 12px;
		font-weight: 700;
		width: max-content;
	}

	.right-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 30upx 0;
	}

	.behaviour {
		margin-top: 0;
	}

	.btn-behaviour {
		width: 20px;
		height: 20px;
	}

	.left-view {
		word-wrap: break-word;
		font-size: 12px
	}

	.left-text {
		font-size: 12px;
		color: #FFFFFF;
	}

	.left-text-location {
		font-size: 10px;
	}

	.avater {
		border-radius: 50upx;
		border-color: #fff;
		border-style: solid;
		border-width: 2px;
		margin-bottom: 110rpx;
	}

	.cover-view-right {
		position: absolute;
		top: 300upx;
		right: 20upx;
		font-size: 12px;
		z-index: 9999;
	}

	.right-text-avater {
		position: absolute;
		font-size: 14px;
		top: 80upx;
		left: 30upx;
		height: 40upx;
		width: 40upx;
		background-color: #DD524D;
		color: #FFFFFF;
		border-radius: 50%;
		text-align: center;
		line-height: 40upx;
		z-index: 9999;
	}

	.user-info {
		position: relative;
	}

	.avater-icon {
		height: 40upx;
		width: 40upx;
		color: #fff;
		background-color: #DD524D;
		border-radius: 50%;
		position: absolute;
		left: 30upx;
		top: -20upx;
	}

	.avater-img {
		height: 90upx;
		width: 90upx;
		opacity: 0.9;
	}

	.avater-folllow {
		position: absolute;
		bottom: 50%;
		left: 50%;
		width: 15px;
		height: 15px;
		margin-left: -7.5px;
		z-index: 2;
	}

	.right-text {
		text-align: center;
		font-size: 12px;
		color: #FFFFFF;
		line-height: 1.5;
		font-weight: 700;
	}

	.img {
		height: 50upx;
		width: 50upx;
		opacity: 0.9;
		margin: auto;
	}

	.header {
		position: absolute;
		width: 200px;
		height: 200px;
		top: 50%;
		left: 50%;
		margin-left: -100px;
		margin-top: -100px;
	}

	.avatar {
		width: 170px;
		height: 170px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -93px;
		margin-top: -93px;
		// border: #6b5e5e solid 8px;
		// opacity: 0.6;
		// border-radius: 9999px;
		// -webkit-transform: scale(1.05);
		// -ms-transform: scale(1.05);
		// transform: scale(1.05);
		// -webkit-animation: pulse-data-v-592699c8 2s linear 1;
		// animation: pulse-data-v-592699c8 2s linear 1;
	}

	@-webkit-keyframes pulse {
		to {
			opacity: 0;
			-webkit-transform: scale(1.2);
		}
	}

	@keyframes pulse {
		to {
			opacity: 0;
			transform: scale(1.1);
		}
	}

	.avatar::before,
	.avatar::after {
		-webkit-animation: pulse 2s linear 1;
		animation: pulse 2s linear 1;
		border: #e7a7a6 solid 8px;
		border-radius: 9999px;
		box-sizing: border-box;
		content: ' ';
		height: 140%;
		left: -20%;
		opacity: 0.4;
		position: absolute;
		top: -20%;
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
		width: 140%;
		z-index: 1;
	}

	.avatar::after {
		-webkit-animation-delay: 0.5s;
		animation-delay: 0.5s;
	}
</style>
