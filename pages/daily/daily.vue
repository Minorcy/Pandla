<<<<<<< HEAD
<!-- 请配合后端接口重新将日志页面进行组件化，分离所有点赞，评论等功能 -->
<template>
	<view class="pages-content">
		<!-- 顶部导航栏 -->
		<view class="header">
			<image class="back" src="../../static/img/main/back.svg" @tap="goBack()"></image>
			<image class="logo" src="../../static/img/main/logo.svg"></image>
			<image class="camera" src="../../static/img/main/daily/camera.svg" @tap="publishDyn()"></image>
		</view>
		<hr>
		<!-- <barrage /> -->
		<!-- 用户信息栏 -->
		<view class="user-section">
			<swiper vertical="true" @change="swiperChange">
				<swiper-item v-for="(item, index) in dynInfo" :key="index">
					<view class="userInfo">
						<view>
							<image
								class="avatar"
								:src="item.portrait" 
								@tap="userInfo()"
								mode="aspectFill"></image>
							<image 
								class="folllow"
								src="../../static/img/main/daily/follow.svg" 
								@tap="userFollow()" 
								v-if="item.following == 0 && item.isOwn == 0  && following == false">
							</image>
						</view>
						<view>
							<p>{{item.name}}</p>
							<p>{{item.location}}</p>
						</view>
						<!-- <image class="img-option" src="../../static/img/main/daily/option.svg"></image> -->
						<view @change.stop="behaviour()">
							<picker @change="bindPickerChange" :value="pickIndex" :range="array" v-if="item.isOwn == 0">
								<image class="btn-behaviour" src="../../static/img/main/daily/option.svg" @tap="behaviour()"/>
								<!-- <view class="uni-input">{{array[index]}}</view> -->
							</picker>
						</view>
						
					</view>
					<!-- 功能栏 -->
					<view class="option-section">
						<image src="../../static/img/main/daily/love.svg" @tap="likePerson(item.isOwn)"></image>
						<p>{{item.like_count}}</p>
						<image src="../../static/img/main/logo.svg"></image>
						<p>{{item.pan}}</p>
						<image src="../../static/img/main/daily/comment.svg" @tap="showComm"></image>
						<p>{{item.com_count}}</p>
					</view>
					<view class="block">{{item.commentContent}}</view>
					<!-- 弹幕 -->
					<view class="block-bullet">
						<text v-for="(buItem, buIndex) in bulletList" :key="buIndex">{{buItem}}</text>
					</view>
					<!-- 日志图片 -->
					<view class="img-hold">
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
			</swiper>
		</view>
		
		<!-- 評論 -->
		<scroll-view class="comment-section" v-if="showComment">
			<!-- 评论 -->
			<view scroll-y="true" class="comment-section-details" v-for="(ite, ind) in commentInfo" :key="ind">
				<!-- <view v-for="(iteItem, indIndex) in ite" :key="indIndex"> -->
					<view class="comment-section-comm" @tap="replyComm(ite.id, ite.name, ite.uid)">
						<image class="ite-portrait" :src="ite.portrait" mode="aspectFill"></image>
						<view class="ite-name-content">
							<text class="ite-name">{{ite.name}}：</text>
							<text class="ite-content">{{ite.content}}</text>
						</view>
						
						<text class="ite-create_time">{{ite.create_time}}</text>
					</view>
					<p class="comment-section-comm" v-if="ite.replyName != '' && ite.replyContent != ''">
						<text>@{{ite.replyName}}:</text>
						<text>{{ite.replyContent}}</text>
					</p>
				<!-- </view> -->
			</view>
			<!-- 评论栏 -->
			<view class="input-section">
				<input v-model="commContent" :placeholder="commplaceholder" />
				<button class="primary" hover-class="hover-primary" @tap="addComm()">發送</button>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import barrage from '../../components/barrage.vue';
	import {findAllDyn,
		getImgTemp,
		getComment,
		addComment,
		concern,
		like,
		getBullet,
		reply} from '../../api/api.js';
	
	export default {
		components: {
			barrage
		},
		data() {
			return {
				dynInfo: '',
				commentInfo: '',
				bulletList: '',
				following: false,
				did: 0,	// 日志id
				uid: 0,	// 用户id
				cid: 0, // 评论用户id
				beStatus: false,
				commContent: '',
				commplaceholder: '  為保證用戶隱私，只可以看自己的評論',
				addType: '', // 发送按钮请求不同接口
				array: ['取消關注', '屏蔽用戶', '舉報用戶'],
				pickIndex: 0,
				likeNumber: 0,
				showComment: false
			}
		},
		methods: {
			// 日志详情
			findDyn(loadTime) {
				findAllDyn().then(data => {
					this.dynInfo = data;
					// this.likeNumber = 0; //重置点赞次数
					// 第一个特殊，因为需要滑动后才能监听到swiperChange，所以第一个直接赋值
					if(loadTime == 1) {
						this.did = this.dynInfo[0].id;
						this.uid = this.dynInfo[0].uid;
					}
					// 获取弹幕
					getBullet(this.did).then(data => {
						this.bulletList = data.content;
					});
				});
			},
			// 返回
			goBack() {
				uni.switchTab({
					url: "../main/main"
				});
			},
			// 发表日志
			publishDyn() {
				getImgTemp().then(data => {
					this.$store.commit('setImgTemp', data);
					console.log(this.$store.state.imgTemp);
					uni.navigateTo({
						url: 'publish'
					});
				});
			},
			// 关注用户
			userFollow() {
				if(this.following == false) {
					concern(1, this.uid).then(data => {
						this.following = true;
						this.findDyn(2);
					});
				}
				// else this.following = false;
			},
			// 举报功能等实现
			bindPickerChange(e) {
				// console.log('picker发送选择改变，携带值为', e.target.value);
				this.pickIndex = e.target.value;
				if(e.target.value == 0) { //取消关注
					this.following = false;
					console.log(this.uid);
					concern(2, this.uid).then(data => {
						this.findDyn();
					});
				}
			},
			//
			behaviour() {
				if(this.beStatus == false) this.beStatus = true;
				else if(this.beStatus == true) this.beStatus = false;
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
				if(isOwn == 1) {
					uni.showToast({
						icon: 'none',
						title: '不可以給自己點贊哦'
					});
				} else {
					like(this.did, 1);
					this.findDyn(2);
					// this.likeNumber++;
					// uni.showToast({
					// 	icon: 'none',
					// 	title: '點贊了' + this.likeNumber + '次'
					// });
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
				}
			},
			endLike() {
				uni.showToast({
					icon: 'none',
					title: '结束触摸，点击了' + this.likeNumber + '次'
				});
			},
			// 展示评论
			showComm() {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
				getComment(this.did).then(data => {
					this.commentInfo = data;
					// console.log(this.commentInfo);
				});
			},
			// 获取swiper滚动后日志值
			swiperChange(e) {
				this.following = false; // 重置关注按钮状态
				this.showComment = false; // 重置评论样式
				this.addType = ''; // 重置发送按钮类型
				this.commplaceholder = '  為保證用戶隱私，只可以看自己的評論'; // 清除占位符
				this.commentInfo = '' // 清空评论
				
				// console.log(e.detail.current);
				this.did = this.dynInfo[e.detail.current].id;
				this.uid = this.dynInfo[e.detail.current].uid;
				// 获取弹幕
				getBullet(this.did).then(data => {
					this.bulletList = data.content;
				});
			},
			// 评论
			addComm() {
				// console.log(this.did);
				if(this.commContent != '') {
					if(this.addType == 'reply') {
						console.log('刚刚是回复');
						// console.log('cid' + this.cid);
						// console.log('commContent' + this.commContent);
						reply(this.cid, this.commContent).then(data => {
							this.findDyn(2);
							this.addType = ''; // 重置发送按钮类型
							this.commplaceholder = '  為保證用戶隱私，只可以看自己的評論'; // 清除占位符
						});
					} else {
						console.log('刚刚是評論');
						addComment(this.commContent, this.did).then(data => {
							getComment(this.did).then(data => {
								this.commentInfo = data;
								this.commContent = '';
								// console.log(this.commentInfo);
							});
							// 获取弹幕
							getBullet(this.did).then(data => {
								this.bulletList = data.content;
							});
						});
					}
				}
			},
			// 回复评论
			replyComm(cid, name, comUid) {
				if(comUid != uni.getStorageSync('USERS_KEY').id) {
					this.commplaceholder = '@' + name;
					this.addType = 'reply';
					this.cid = cid;
				} else {
					uni.showToast({
						icon: 'none',
						title: '不能自己回復自己哦'
					})
				}
			}
		},
		onShow() {
			this.findDyn(1);
		},
		onPullDownRefresh() { //监听下拉刷新动作
			console.log('onPullDownRefresh');
			// 这里获取数据
			this.findDyn(1);
			setTimeout(function() {
				//初始化数据
				uni.stopPullDownRefresh(); //停止下拉刷新
			}, 1000);
		}
	}
</script>

<style scoped="true">
	.pages-content {
		margin-top: -2upx;
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
		margin: 50upx 0 0 50upx;
		font-size: 25upx;
		text-align: center;
		z-index: 1500;
		color: rgba(255,255,255);
		text-shadow:0 0 5px #696969;
	}
	
	.option-section image {
		width: 40upx;
		height: 40upx;
		margin-top: 50upx;
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
		right: 50upx;
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
		width: 100%;
		height: 77%;
	}
	
	.img-daily {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 1000;
		
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
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 50%;
		font-size: 30upx;
		z-index: 3000;
		background-color: #000000;
		border-radius: 50upx;
	}
	
	.comment-section-details {
		padding: 10upx 20upx;
	}
	
	button {
		z-index: 4000;
	}
	
	.comment-section-comm {
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 20upx;
	}
	
	.ite-name-content {
		width: 350upx;
		overflow: hidden;
	}
	
	.ite-name {
		color: #979797;
	}
	
	.ite-portrait {
		width: 45upx;
		height: 45upx;
		border-radius: 50%;
	}
	
	.ite-create_time {
		color: #979797;
		font-size: 25upx;
	}
	
	/* 评论 */
	.input-section {
		position: absolute;
		width: 100%;
		height: 65upx;
		margin: 0 auto;
		bottom: 0;
		color: #000000;
		background: #B7B7B7;
		border-radius: 50upx;
		font-size: 30upx;
	}
	
	.input-section input {
		width: 100%;
		height: 65upx;
		vertical-align: middle;
		padding-left: 20upx;
		float: left;
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
		border:none;
		background-color: #4CD964;
	}
	
	/* 弹幕 */
	.block-bullet {
		position:absolute;
		/* other decorate style */
		animation:barrage 7s infinite linear 0s;
		width: 120%;
		font-size: 30upx;
		opacity: 0;
		z-index: 1500;
	}
	
	.block-bullet>text {
		margin: 50upx;
		color: #FFFFFF;
	}
	
	@keyframes barrage{
	   from {
		 left:100%;
		 transform:translate3d(0,50upx,0);
		 opacity: 1;
	   }
	   to {
		 left:0;
		 transform:translate3d(-100%,50upx,0);
		 opacity: 1;
	   }
	}
=======
<!-- 请配合后端接口重新将日志页面进行组件化，分离所有点赞，评论等功能 -->
<template>
	<view class="pages-content">
		<!-- 顶部导航栏 -->
		<view class="header">
			<image class="back" src="../../static/img/main/back.svg" @tap="goBack()"></image>
			<image class="logo" src="../../static/img/main/logo.svg"></image>
			<image class="camera" src="../../static/img/main/daily/camera.svg" @tap="publishDyn()"></image>
		</view>
		<hr>
		<!-- <barrage /> -->
		<!-- 用户信息栏 -->
		<view class="user-section">
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
						<p>{{item.like_count}}</p>
						<image src="../../static/img/main/logo.svg"></image>
						<p>{{item.pan}}</p>
						<image src="../../static/img/main/daily/comment.svg" @tap="showComm"></image>
						<p>{{item.com_count}}</p>
					</view>
					<view class="block">{{item.commentContent}}</view>
					<!-- 弹幕 -->
					<view class="block-bullet">
						<text v-for="(buItem, buIndex) in bulletList" :key="buIndex">{{buItem}}</text>
					</view>
					<!-- 日志图片 -->	
					<view class="img-hold">
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
			</swiper>
		</view>

		<!-- 評論 -->
		<scroll-view class="comment-section" v-if="showComment">
			<!-- 评论 -->
			<view scroll-y="true" class="comment-section-details" v-for="(ite, ind) in commentInfo" :key="ind">
				<!-- <view v-for="(iteItem, indIndex) in ite" :key="indIndex"> -->
				<view class="comment-section-comm" @tap="replyComm(ite.id, ite.name, ite.uid)">
					<image class="ite-portrait" :src="ite.portrait" mode="aspectFill"></image>
					<view class="ite-name-content">
						<text class="ite-name">{{ite.name}}：</text>
						<text class="ite-content">{{ite.content}}</text>
					</view>

					<text class="ite-create_time">{{ite.create_time}}</text>
				</view>
				<p class="comment-section-comm" v-if="ite.replyName != '' && ite.replyContent != ''">
					<text>@{{ite.replyName}}:</text>
					<text>{{ite.replyContent}}</text>
				</p>
				<!-- </view> -->
			</view>
			<!-- 评论栏 -->
			<view class="input-section">
				<input v-model="commContent" :placeholder="commplaceholder" />
				<button class="primary" hover-class="hover-primary" @tap="addComm()">發送</button>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import barrage from '../../components/barrage.vue';
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
		components: {
			barrage
		},
		data() {
			return {
				dynInfo: '',
				commentInfo: '',
				bulletList: '',
				following: false,
				did: 0, // 日志id
				uid: 0, // 用户id
				cid: 0, // 评论用户id
				beStatus: false,
				commContent: '',
				commplaceholder: '  為保證用戶隱私，只可以看自己的評論',
				addType: '', // 发送按钮请求不同接口
				array: ['取消關注', '屏蔽用戶', '舉報用戶'],
				pickIndex: 0,
				likeNumber: 0,
				showComment: false
			}
		},
		methods: {
			// 日志详情
			findDyn(loadTime) {
				findAllDyn().then(data => {
					this.dynInfo = data;
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
				});
			},
			// 返回
			goBack() {
				uni.switchTab({
					url: "../main/main"
				});
			},
			// 发表日志
			publishDyn() {
				getImgTemp().then(data => {
					this.$store.commit('setImgTemp', data);
					console.log(this.$store.state.imgTemp);
					uni.navigateTo({
						url: 'publish'
					});
				});
			},
			// 关注用户
			userFollow() {
				if (this.following == false) {
					concern(1, this.uid).then(data => {
						this.following = true;
						this.findDyn(2);
					});
				}
				// else this.following = false;
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
					like(this.did, 1);
					this.findDyn(2);
					// this.likeNumber++;  
					// uni.showToast({
					// 	icon: 'none',
					// 	title: '點贊了' + this.likeNumber + '次'
					// });
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
				}
			},
			endLike() {
				uni.showToast({
					icon: 'none',
					title: '结束触摸，点击了' + this.likeNumber + '次'
				});
			},
			// 展示评论
			showComm() {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
				getComment(this.did).then(data => {
					this.commentInfo = data;
					// console.log(this.commentInfo);
				});
			},
			// 获取swiper滚动后日志值
			swiperChange(e) {
				this.following = false; // 重置关注按钮状态
				this.showComment = false; // 重置评论样式
				this.addType = ''; // 重置发送按钮类型
				this.commplaceholder = '  為保證用戶隱私，只可以看自己的評論'; // 清除占位符
				this.commentInfo = '' // 清空评论

				// console.log(e.detail.current);
				this.did = this.dynInfo[e.detail.current].id;
				this.uid = this.dynInfo[e.detail.current].uid;
				// 获取弹幕
				getBullet(this.did).then(data => {
					this.bulletList = data.content;
				});
			},
			// 评论
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
							this.commplaceholder = '  為保證用戶隱私，只可以看自己的評論'; // 清除占位符
						});
					} else {
						console.log('刚刚是評論');
						addComment(this.commContent, this.did).then(data => {
							getComment(this.did).then(data => {
								this.commentInfo = data;
								this.commContent = '';
								// console.log(this.commentInfo);
							});
							// 获取弹幕
							getBullet(this.did).then(data => {
								this.bulletList = data.content;
							});
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
			}
		},
		onShow() {
			this.findDyn(1);
		},
		onPullDownRefresh() { //监听下拉刷新动作
			console.log('onPullDownRefresh');
			// 这里获取数据
			this.findDyn(1);
			setTimeout(function() {
				//初始化数据
				uni.stopPullDownRefresh(); //停止下拉刷新
			}, 1000);
		}
	}
</script>

<style scoped="true">
	.pages-content {
		margin-top: -2upx;
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
		margin: 50upx 0 0 50upx;
		font-size: 25upx;
		text-align: center;
		z-index: 1500;
		color: rgba(255, 255, 255);
		text-shadow: 0 0 5px #696969;
	}

	.option-section image {
		width: 40upx;
		height: 40upx;
		margin-top: 50upx;
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
		right: 50upx;
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
		width: 100%;
		height: 77%;
	}

	.img-daily {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 1000;

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
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 50%;
		font-size: 30upx;
		z-index: 3000;
		background-color: #000000;
		border-radius: 50upx;
	}

	.comment-section-details {
		padding: 10upx 20upx;
	}

	button {
		z-index: 4000;
	}

	.comment-section-comm {
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 20upx;
	}

	.ite-name-content {
		width: 350upx;
		overflow: hidden;
	}

	.ite-name {
		color: #979797;
	}

	.ite-portrait {
		width: 45upx;
		height: 45upx;
		border-radius: 50%;
	}

	.ite-create_time {
		color: #979797;
		font-size: 25upx;
	}

	/* 评论 */
	.input-section {
		position: absolute;
		width: 100%;
		height: 65upx;
		margin: 0 auto;
		bottom: 0;
		color: #000000;
		background: #B7B7B7;
		border-radius: 50upx;
		font-size: 30upx;
	}

	.input-section input {
		width: 100%;
		height: 65upx;
		vertical-align: middle;
		float: left;
	}

	.input-section button {
		position: absolute;
		margin: 0;
		padding: 0;
		right: 0;
		width: 20%;
		padding-right: 20upx;
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
		z-index: 1500;
	}

	.block-bullet>text {
		margin: 50upx;
		color: #FFFFFF;
	}

	@keyframes barrage {
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
>>>>>>> accb13a6f75e392a4e96ff7fd343a7b8b3c35bb9
</style>
