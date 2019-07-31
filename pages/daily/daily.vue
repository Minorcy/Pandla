<!-- 请配合后端接口重新将日志页面进行组件化，分离所有点赞，评论等功能 -->
<template>
	<view class="page">
		<!-- 顶部导航栏 -->
		<view class="header">
			<image class="back" src="../../static/img/main/back.svg" @tap="goBack()"></image>
			<image class="logo" src="../../static/img/main/logo.svg" @tap="gotic()"></image>
			<image class="camera" src="../../static/img/main/daily/camera.svg" @tap="publishDyn()"></image>
		</view>
		<hr>
		<!-- <barrage /> -->
		<!-- 用户信息栏 -->
		<view class="user-section" @tap="hid()">
			<swiper vertical="true" @change="swiperChange">
				<swiper-item v-for="(item, index) in dynInfo" :key="index">
					<view class="userInfo">
						<view>
							<image class="avatar" :src="item.portrait" @tap="userInfo()" mode="aspectFill"></image>
							<image class="folllow" src="../../static/img/main/daily/follow.svg" @tap="userFollow()" v-if="item.following == 0 && item.isOwn == 0  && following == false">
							</image>
						</view>
						<view>
							<p>{{item.name}}</p>
							<p>{{item.location}}</p>
						</view>
						<!-- <image class="img-option" src="../../static/img/main/daily/option.svg"></image> -->
						<view @change.stop="behaviour()">
							<picker @change="bindPickerChange" :value="pickIndex" :range="array" v-if="item.isOwn == 0">
								<image class="btn-behaviour" src="../../static/img/main/daily/option.svg" @tap="behaviour()" />
								<!-- <view class="uni-input">{{array[index]}}</view> -->
							</picker>
						</view>

					</view>
					<!-- 功能栏 -->
					<view class="option-section">
						<image src="../../static/img/main/daily/love.svg" @tap="likePerson(item.isOwn)"></image>
						<p>{{like}}</p>
						<image src="../../static/img/main/logo.svg"></image>
						<p>{{like/10}}</p>
						<image src="../../static/img/main/daily/comment.svg" @tap.stop="showComm"></image>
						<p>{{item.com_count}}</p>
					</view>
					<view class="block">{{item.commentContent}}</view>
					<!-- 弹幕 -->
					<view class="block-bullet" ref="bullet" @beforeEnter="beforeEnter" @enter='enter'>
						<text v-for="(buItem, buIndex) in bulletList" :key="buIndex" style="display: block;">{{buItem}}</text>
					</view>
					<!-- 日志图片 -->
					<view class="img-hold" ref="img">
						<image class="img-daily" :src="item.images" mode="aspectFill" lazy-load="true"></image>
					</view>
					<!-- 日志内容 -->
					<view class="daily-seciton">
						<image src="../../static/img/main/daily/tag.svg"></image>
						<text class="dailyContent" v-if="item.isOwn == 1">{{item.content}}</text>
						<text class="dailyContent" v-else-if="item.isOwn == 0 && item.following == 1">{{item.content}}</text>
						<text class="remind" v-else-if="item.following == 0 && item.isOwn == 0">需要關注才能看到對方的日志内容</text>
						<text class="remind" v-else-if="item.following == 0">需要關注才能看到對方的日志内容</text>
					</view>
				</swiper-item>
				<!-- <uni-load-more :loadingType="loading"></uni-load-more> -->
			</swiper>
		</view>

		<!-- 評論 -->
		<view class="comment-section" v-if="showComment" @touchmove.stop.prevent="moveHandle">
			<view class="comment-section-top">
				<text>{{commCount}}条评论</text>
				<image src="../../static/img/daily/X.svg" @tap.stop="hidComm()"></image>
			</view>
			<scroll-view class="comment" scroll-y="true">
				<view scroll-y="true" class="comment-section-details" v-for="(ite, ind) in commentInfo" :key="ind">
					<view class="comment-section-comm" @tap="replyComm(ite.id, ite.name, ite.uid)">
						<view class="comm-ite">
							<image class="ite-portrait" :src="ite.portrait" mode="aspectFill"></image>
							<view class="ite-name-content">
								<text class="ite-name">{{ite.name}}:</text>
								<text class="ite-content">{{ite.content}}</text>
								<text class="ite-create_time">{{ite.create_time}}</text>
							</view>
						</view>
						<p class="comment-section-reply" v-if="ite.replyName != '' && ite.replyContent != ''">
							<text class="color">作者 </text>
							<text>: {{ite.replyContent}}</text>
						</p>
					</view>


				</view>

				<view class="input-section">
					<input v-model="commContent" :placeholder="commplaceholder" />
					<button class="primary" hover-class="hover-primary" :disabled="disabled" @tap="addComm()">發送</button>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	
	import formatDate from '../../common/js/date.js';
	import throttle from "../../common/js/utils.js"
	import {
		findAllDyn,
		getImgTemp,
		getComment,
		addComment,
		concern,
		like,
		likeCount,
		getBullet,
		reply
	} from '../../api/api.js';

	const MAX_DM_COUNT = 6;
	const CHANNEL_COUNT = 10;
	export default {
		
		data() {
			return {
				dynInfo: '',
				commentInfo: '',
				bulletList: '',
				following: false,
				did: 0, // 日志id
				uid: 0, // 用户id
				cid: 0, // 评论用户id
				like: 0,
				beStatus: false,
				commCount: '',
				commContent: '',
				commplaceholder: '為保證用戶隱私，只可以看自己的評論',
				addType: '', // 发送按钮请求不同接口
				array: ['取消關注', '屏蔽用戶', '舉報用戶'],
				pickIndex: 0,
				likeNumber: 0,
				showComment: false,
				count: 10,
				loading: 1,
				flog: true,
				time: '',
				disabled:false
			}
		},
		methods: {
			// 日志详情
			findDyn(loadTime) {
				findAllDyn(0).then(data => {
					// if (this.dynInfo.length == data.length) {
					// 	uni.showToast({
					// 		title: '已是最新',
					// 		duration: 2000
					// 	});
					// }
					this.dynInfo = data
					this.commCount = data[0].com_count

					// this.likeNumber = 0; //重置点赞次数
					// 第一个特殊，因为需要滑动后才能监听到swiperChange，所以第一个直接赋值
					if (loadTime == 1) {
						this.did = this.dynInfo[0].id;
						this.uid = this.dynInfo[0].uid;
					}
					// 获取弹幕
					getBullet(this.did).then(data => {
						this.bulletList = data.content;
					});
					likeCount(this.did).then(data => {
						this.like = data;
					})
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 800);
			},
			//下拉刷新
			loadFindDyn() {
				findAllDyn(this.count).then(data => {
					this.count += 10
					this.dynInfo = this.dynInfo.concat(data)
					console.log(this.dynInfo)
				})
			},
			// 返回
			goBack() {
				uni.switchTab({
					url: "../main/main"
				});
			},
			// gotic(){
			// 	uni.navigateTo({
			// 		url: "./topicDetails"
			// 	});
			// },
			// 发表日志
			publishDyn() {
				getImgTemp().then(data => {
					this.$store.commit('setImgTemp', data);
					console.log(this.$store.state.imgTemp);
					uni.navigateTo({
						url: 'publish'
					});
					this.findDyn(1);
				});
			},
			// 关注用户
			userFollow() {
				if (this.following == false) {
					concern(1, this.uid).then(data => {
						this.following = true;
						this.findDyn(2);
					});
				} else this.following = false;
			},
			// 举报功能等实现
			bindPickerChange(e) {
				// console.log('picker发送选择改变，携带值为', e.target.value);
				this.pickIndex = e.target.value;
				if (e.target.value == 0) { //取消关注
					this.following = false;
					console.log(this.uid);
					concern(2, this.uid).then(data => {
						this.findDyn();
					});
				}
			},
			//
			behaviour() {
				if (this.beStatus == false) this.beStatus = true;
				else if (this.beStatus == true) this.beStatus = false;
				// console.log(this.beStatus);
			},
			// 用户详情
			userInfo() {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + this.uid
				});
			},
			// 点赞
			likePerson(isOwn) {
				if (isOwn == 1) {
					uni.showToast({
						icon: 'none',
						title: '不可以給自己點贊哦'
					});
				} else {
					// like(this.did, 1);
					// this.findDyn(2);
					this.likeNumber++;
					uni.showToast({
						icon: 'none',
						title: '點贊了' + this.likeNumber + '次'
					});
					// let likeTime = 5;
					// let timeCount = setInterval(() => {
					// 	likeTime --;
					// 	console.log('likeTime:' + likeTime);
					// 	if(likeTime < 1) {
					// 		clearInterval(timeCount);
					// 		console.log('likeNumber:' + this.likeNumber);
					// 		like(this.did, this.likeNumber);
					// 		this.findDyn(2);
					// 	}
					// }, 1000);
					like(this.did, 1).then(data=>{
						likeCount(this.did).then(data => {
							this.like = data 
						})
					});	
				}
			},
			// endLike() {
			// 	uni.showToast({
			// 		icon: 'none',
			// 		title: '结束触摸，点击了' + this.likeNumber + '次'
			// 	});
			// },
			hid() {
				if (!this.flog) {
					this.showComment = false
				}
			},
			// 展示评论
			showComm() {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
				getComment(this.did).then(data => {
					this.commentInfo = data;
					console.log(this.commentInfo);
				});
				this.flog = false
			},
			hidComm() {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
			},
			moveHandle() {},
			// 获取swiper滚动后日志值
			swiperChange(e) {
				this.following = false; // 重置关注按钮状态
				this.showComment = false; // 重置评论样式
				this.addType = ''; // 重置发送按钮类型
				this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
				this.commentInfo = '' // 清空评论
				// console.log(e.detail.current);
				this.likeNumber = 0;
				this.did = this.dynInfo[e.detail.current].id;
				this.uid = this.dynInfo[e.detail.current].uid;
				this.commCount = this.dynInfo[e.detail.current].com_count;
				//获取点赞数
				likeCount(this.did).then(data => {
					this.like = data
				})
				// 获取弹幕
				getBullet(this.did).then(data => {
					this.bulletList = data.content;
				});

				if (e.detail.current + 1 == this.count) {
					console.log("上拉")
					this.loading = 2
					this.loadFindDyn()
				}
				if (e.detail.current == 0) {
					this.findDyn(1);
					
				}
			},
			// 评论
			addComm() {
				// console.log(this.did);
				this.disabled = true
				if (this.commContent != '') {
					if (this.addType == 'reply') {
						console.log('刚刚是回复');
						// console.log('cid' + this.cid);
						// console.log('commContent' + this.commContent);
						reply(this.cid, this.commContent).then(data => {
							this.findDyn(2);
							this.addType = ''; // 重置发送按钮类型
							this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
							this.disabled = false
						});
					} else {
						console.log('刚刚是評論');
						addComment(this.commContent, this.did).then(data => {
							getComment(this.did).then(data => {
								this.commentInfo = data;
								this.commContent = '';
								this.addType = ''; // 重置发送按钮类型
								this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
								this.disabled = false
							});
							// 获取弹幕
							getBullet(this.did).then(data => {
								this.bulletList = data.content;
							});
							//
							this.findDyn(2)
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

		},
		onLoad() {
			this.findDyn(1);
			uni.showLoading({
				title: '加载中',
			});
		},
		onShow() {
			this.findDyn(1);
			uni.showLoading({
				title: '加载中',
			});
		},
		onReachBottom() {
			console.log("onReachBottom")
		},   
		onPullDownRefresh() {
			this.loadFindDyn();
			setTimeout(function() {
				//初始化数据
				uni.stopPullDownRefresh(); //停止下拉刷新
			}, 1000);
		},
	}
</script>

<style scoped="true">
	.page {
		/* 	margin-top: -2upx;
		overflow: hidden;
		color: #EFEFF4;
		background: #000000;
		border-top: solid;
		border-width: 2upx;
		box-sizing: border-box;
		width: 100%;
		border-top-color: #4CD964; */
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
		color: #EFEFF4;
		background: #000000;

	}

	/* 导航栏 */
	.header {
		display: flex;
		flex-direction: row;
		margin-top: 80upx;
	}

	.back {
		width: 38upx;
		height: 38upx;
		margin: 4upx 0 0 20upx;
	}

	.camera {
		width: 48upx;
		height: 48upx;
		margin: 4upx 20upx 0 0;
	}

	.logo {
		justify-content: center;
		width: 90%;
		height: 50upx;
	}

	/* 用户功能栏 */
	.user-section {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/* 功能栏 */
	.option-section {
		width: 50upx;
		position: absolute;
		margin: 40upx 0 0 50upx;
		font-size: 25upx;
		text-align: center;
		z-index: 1500;
		color: rgba(255, 255, 255);
		text-shadow: 0 0 5px #696969;

	}

	.option-section image {
		width: 60upx;
		height: 60upx;
		margin-top: 30upx;
	}

	.option-section p {
		padding-left: 4upx;
		font-size: 16px;
		text-align: center;

	}

	/* 用户信息栏 */
	.userInfo {
		display: flex;
		flex-direction: row;
		margin: 15upx 0 0 25upx;
	}

	.avatar {
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
	}

	.folllow {
		position: absolute;
		width: 30upx;
		height: 150upx;
		margin: 15upx 0 0 -30upx;
	}

	.userInfo view {
		margin: 10upx 15upx;
		line-height: 32upx;
		font-size: 30upx;
	}

	.userInfo p:nth-child(2) {
		margin-top: 10upx;
		font-size: 25upx;
		color: #9E9E9E;
	}

	.btn-behaviour {
		width: 30upx;
		height: 50upx;
		position: absolute;
		float: right;
		right: 30upx;
	}

	ul {
		position: absolute;
		right: 20upx;
		margin-top: 40upx;
		margin-bottom: 20upx;
		font-size: 20upx;
		z-index: 1500;
	}

	li {
		list-style: none;
		margin-top: 20upx;
		background-color: transperant;
		color: #FFFFFF;
	}

	/* 日志图片 */
	.img-hold {
		box-sizing: border-box;
		width: 100%;
		height: 70%;
	}

	.img-daily {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 99;

	}

	/* 日志内容 */
	.daily-seciton image {
		width: 42upx;
		height: 42upx;
		padding: 20upx;
		float: left;
	}

	.remind {
		font-size: 25upx;
		line-height: 72upx;
		color: #888484;
	}

	.dailyContent {
		font-size: 25upx;
		line-height: 72upx;
		color: #EFEFF4;
	}


	/* 评论内容区域 */
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
	}

	.comment-section::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.comment-section .comment-section-top {
		width: 95%;
		height: 30px;
		position: fixed;
		box-sizing: border-box;
		text-align: center;
		margin: 0 auto;
		color: #ffffff;
		font-size: 14px;
		background-color: #000000;
	}

	.comment-section-top image {
		width: 15px;
		height: 15px;
		float: right;
		right: 10px;
	}

	.comment {
		margin-top: 30px;
		width: 100%;
		height: 100%;
	}

	.comment-section-details {
		width: 100%;

	}

	.comment-section-comm {
		margin-bottom: 10px;
	}

	.comm-ite {
		display: flex;
		align-items: flex-end;
	}

	.ite-portrait {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		flex-shrink: 0;
		margin: 5px;
		align-self: end;

	}

	.ite-name-content {
		box-sizing: border-box;
		padding: 5px;
		color: #ffffff;
		flex-wrap: wrap;
		flex-grow: 1;
		font-size: 14px;
	}

	.ite-name {
		display: block
	}

	.ite-content {
		word-wrap: break-word;
	}

	.ite-create_time {
		float: right;
	}

	.comment-section-reply {
		padding: 5px 5px 5px 30px;
		color: #ffffff;
		font-size: 14px
	}

	.color {
		color: #e64340;
		font-size: 14px;
	}

	.input-section {
		position: fixed;
		width: 100%;
		height: 65upx;
		margin: 0 auto;
		bottom: 0;
		left: 0;
		color: #000000;
		background-color: #B7B7B7;
		border-radius: 50upx;
		font-size: 30upx;
	}


	.input-section input {
		width: 77%;
		height: 65upx;
		line-height: 65upx;
		vertical-align: middle;
		float: left;
		padding-left: 20upx;
	}

	.input-section button {
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










	swiper {
		width: 100%;
		height: 100%;
	}

	swiper-item {
		width: 100%;
		height: 1200upx;
	}

	hr {
		margin-top: 10upx;
		height: 3upx;
		border: none;
		background-color: #4CD964;
	}

	/* 弹幕 */
	.block-bullet {
		position: absolute;
		/* other decorate style */
		animation: barrage 7s infinite linear 0s;
		width: 120%;
		font-size: 30upx;
		opacity: 0;
		z-index: 999;
	}

	.block-bullet>text {
		margin: 50upx;
		color: #FFFFFF;
	}

	@keyframes barrage1 {
		from {
			left: 100%;
			transform: translate3d(0, 50upx, 0);
			opacity: 1;
		}

		to {
			left: 0;
			transform: translate3d(-100%, 50upx, 0);
			opacity: 1;
		}
	}
</style>
