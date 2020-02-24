<template>
	<div class="daily-page">
		<view class="top" @tap="back()" >
			<image class="camera" src="/static/img/msg/back.svg"></image>		
		</view>
		<view class="swiper-item" :style="{backgroundImage: 'url('+dynInfo.images+')'}">
			<view class="header">
				<view :class="{ avatar: isActive }">
				</view>
			</view>
			
				<comm v-if="showComment" :commentInfo='commentInfo' :commCount='commCount' @hidComm="hidComm" @addComm='addComm' @replyComm="replyComm" @nextReplyComm = "nextReplyComm"></comm>
			
			<div class="item-box">
				<view class="cover-view-left">
					<view class="left-view location" @tap="toMap(dynInfo.lat,dynInfo.lng,dynInfo.location)" v-if="dynInfo.location">
						<image src="../../../static/img/daily/location.svg" class="location-img"></image>
						<text class="left-text-location">{{dynInfo.location}}</text>
					</view>
					<view class="left-view name">
						<text class="left-text">@{{dynInfo.name}}</text>
					</view>
					<view class="left-view ">
						<text class="left-text" v-if="dynInfo.isOwn == 1">{{dynInfo.content}}</text>
						<text class="left-text" v-if="dynInfo.following == 0 && dynInfo.isOwn == 0">{{dynInfo.content}}</text>
					</view>
				</view>
				<view class="cover-view-right">
					<view class="user-info">
						<image :src="dynInfo.portrait" class="avater avater-img" mode="aspectFill" lazy-load></image>
						<image src="../../../static/img/main/daily/follow.svg" class="avater-folllow" v-if="!dynInfo.following && dynInfo.isOwn == 0"></image>
					</view>
					<image :src="dynInfo.isLike?'../../../static/img/daily/like.svg':'../../../static/img/daily/unlike.svg'" class="img"
					 @click.stop="likePerson(dynInfo.isOwn,dynInfo.id)"></image>
					<text class="right-text">{{dynInfo.like_count}}</text>
					<image src="../../../static/img/daily/pinglun.svg" class="img" @click.stop="tapMsg(dynInfo.id,dynInfo.com_count)"></image>
					<text class="right-text">{{dynInfo.com_count}}</text>
					<image src="../../../static/img/daily/danmu.svg" class="img"></image>
					<text class="right-text">弹幕</text>
					<image src="../../../static/img/daily/pan.svg" class="img"></image>
					<text class="right-text">{{dynInfo.pan}}</text>
				</view>
			</div>
		</view>
	</div>
</template>
<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import comm from '@/components/comments.vue'
	import lBarrage from '@/components/l-barrage/l-barrage.vue'
	import {
		getDynInfo,
		findAllDyn,
		getImgTemp,
		getComment,
		addComment,
		concern,
		like,
		likeCount,
		getBullet,
		createCom,
		reply,
		getReply,
		checkIsCon
	} from '@/api/api.js';
	export default {
		components: {
			uniPopup,
			comm,
			lBarrage
		},
		data() {
			return {
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
				commCount: 0,
				addType: "comm",
				pageCount: 10,
				flag: true,
				flog: true,
				isActive: false,
				showComment:false
			}
		},
		methods: {
			getDyn(id) {
				getDynInfo(id).then(data => {
					console.log(data)
					this.dynInfo = data[0]

				})
			},
			back(){
				uni.navigateBack({
					delta: 1
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
			likePerson(isOwn, did) {
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
							this.dynInfo.isLike = 1
							this.dynInfo.like_count = data
							this.dynInfo.pan = data / 10
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
			tapMsg(did, count) {
				this.showComment =!this.showComment
				// uni.hideTabBar()
				this.commCount = count
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
				this.showComment =!this.showComment
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
							this.commentInfo = data;
							this.commCount += 1
							this.addType = 'comm'
							this.dynInfo[this.index].com_count += 1
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
			getAllBullet() {
			},

		},
		onLoad(option) {
			this.did = option.did
			this.cid = uni.getStorageSync('USERS_KEY').id
			this.getDyn(option.did)
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
		padding-top: var(--status-bar-height);
		background-color: #000000;
	}

	.top {
		position: absolute;
		top: 10px;
		right: 8px;
		width: 24px;
		height: 24px;
		padding-top: var(--status-bar-height);
		margin: 2px 10px 0 0;
		z-index: 1;
	}

	.btn-behaviour {
		width: 30upx;
		height: 50upx;
	}

	.top image {
		margin-top: 10px;
		width: 20px;
		height: 20px;
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
	}

	.video {
		flex: 1;
	}

	.item-box {
		flex: 1;
	}

	.cover-view-center {
		position: absolute;
		justify-content: center;
		align-items: center;
		opacity: 0.1;
		z-index: 1;
	}

	.cover-view-left {
		position: absolute;
		margin-left: 20upx;

		bottom: 24upx;
		z-index: 1;
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
		background-color: rgba(0, 0, 0, .3);
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 10px;
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
	}

	.left-view {
		margin-bottom: 20upx;
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
		//#ifndef APP-PLUS-NVUE
		display: flex;
		flex-direction: column;
		//#endif
		z-index: 1;
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
		z-index: 1;
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
		z-index: 1;
	}

	.right-text {
		text-align: center;
		font-size: 12px;
		color: #FFFFFF;
		margin-bottom: 50upx;
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
