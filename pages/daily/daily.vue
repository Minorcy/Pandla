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
							<image class="avatar" :src="item.portrait"  @tap="userInfo()"></image>
							<image 
								class="folllow"
								src="../../static/img/main/daily/follow.svg" 
								@tap="userFollow()" 
								v-if="item.following == 0 && item.isOwn == 0">
							</image>
						</view>
						<view>
							<p>{{item.name}}</p>
							<p>{{item.location}}</p>
						</view>
						<!-- <image class="img-option" src="../../static/img/main/daily/option.svg"></image> -->
						<view @change.stop="behaviour()">
							<image class="btn-behaviour" src="../../static/img/main/daily/option.svg" @tap="behaviour()"/>
							<ul v-if="beStatus == true">
								<li value="cancel">取消关注</li>
								<li value="report">舉報用戶</li>
								<li value="shield">屏蔽用戶</li>
							</ul>
						</view>
						
					</view>
					<!-- 功能栏 -->
					<view class="option-section">
						<image src="../../static/img/main/daily/love.svg"></image>
						<p>{{item.like_count}}</p>
						<image src="../../static/img/main/logo.svg"></image>
						<p>{{item.force}}</p>
						<image src="../../static/img/main/daily/comment.svg"></image>
						<p>{{item.com_count}}</p>
					</view>
					<view class="block">{{item.commentContent}}</view>
					<!-- 日志内容 -->
					<view class="img-hold">
						<image class="img-daily" :src="item.images" mode="aspectFill" lazy-load="true"></image>
					</view>
					<!-- 日志评论 -->
					<view class="daily-seciton">
						<image src="../../static/img/main/daily/tag.svg"></image>
						<text class="dailyContent" v-if="item.isOwn == 1">{{item.content}}</text>
						<text class="dailyContent" v-else-if="item.isOwn == 0 && item.following == 1">{{item.content}}</text>
						<text class="remind" v-else-if="item.following == 0 && item.isOwn == 0">需要關注才能看到對方的日志内容</text>
						<text class="remind" v-else-if="item.following == 0">需要關注才能看到對方的日志内容</text>
					</view>
					<view class="comment-section" v-for="(ite, ind) in commentInfo" :key="ind">
						<p>
							
							<text>{{ite[ind].name}}:</text>
							<text>{{ite[ind].content}}</text>
						</p>
						<p>
							<text>{{ite[ind].replyName}}:</text>
							<text>{{ite[ind].replyContent}}</text>
						</p>
					</view>
				</swiper-item>
			</swiper>
			
		</view>
		<!-- 评论栏 -->
		<view class="input-section">
			<input v-model="commContent" placeholder="   添加評論" />
			<button class="primary" hover-class="hover-primary" @tap="addComm()">發送</button>
		</view>
	</view>
</template>

<script>
	import barrage from '../../components/barrage.vue';
	import {findAllDyn, getImgTemp, getComment, addComment, concern} from '../../api/api.js';
	
	export default {
		components: {
			barrage
		},
		data() {
			return {
				dynInfo: '',
				commentInfo: '',
				following: false,
				did: 0,
				uid: 0,
				beStatus: false,
				commContent: ''
				
				// dailyInfo: [{
				// 	avatar: '../../static/img/main/daily/avatar3.svg',
				// 	name: 'King',
				// 	country: 'Japan',
				// 	follow: 254,
				// 	focus: 48,
				// 	comment: 129,
				// 	dailyImg: '../../static/img/main/daily/dailyImg3.png',
				// 	dailyContent: 'Let my smile melt your heart',
				// 	commentPerson: 'Joson :',
				// 	commentContent: '优雅的生活',
				// 	replyPerson: '@Joson :',
				// 	replyContent: '你也可以'
				// }],
			}
		},
		methods: {
			goBack() {
				uni.switchTab({
					url: "../main/main"
				});
			},
			publishDyn() {
				getImgTemp().then(data => {
					this.$store.commit('setImgTemp', data);
					console.log(this.$store.state.imgTemp);
					uni.navigateTo({
						url: 'publish'
					});
				});
			},
			userFollow() {
				let type = 0;
				if(this.following == false) {
					type = 1;
					concern(type, this.did).then(data => {
						this.following = true;
					})
				}
				// else this.following = false;
			},
			userInfo() {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + this.uid
				});
			},
			findDyn() {
				findAllDyn().then(data => {
					this.dynInfo = data;
					this.did = this.dynInfo[0].id;
					this.uid = this.dynInfo[0].uid;
					getComment(this.did).then(data => {
						// if(data == 0) this.commentInfo.content = '0';
						this.commentInfo = data;
						console.log(this.commentInfo);
					});
				});
				
			},
			swiperChange(e) {
				// console.log(e.detail.current);
				this.did = this.dynInfo[e.detail.current].id;
				this.uid = this.dynInfo[e.detail.current].uid;
				getComment(this.did).then(data => {
					this.commentInfo = data;
					// console.log(this.commentInfo);
				});
			},
			addComm() {
				// console.log(this.did);
				addComment(this.commContent, this.did).then(data => {
					getComment(this.did).then(data => {
						this.commentInfo = data;
						// console.log(this.commentInfo);
					});
				});
				
				// this.commContent = '';
			},
			behaviour() {
				if(this.beStatus == false) this.beStatus = true;
				else if(this.beStatus == true) this.beStatus = false;
				// console.log(this.beStatus);
			}
		},
		onShow() {
			this.findDyn();
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
		height: 67%;
	}
	
	.img-daily {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		margin-top: 50upx;
		width: 100%;
		height: 100%;
		z-index: 1000;
		
	}

	/* 评论 */
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
	
	.comment-section {
		font-size: 25upx;
		margin: 10upx 0 10upx 30upx;
	}
	
	.comment-section p {
		font-size: 25upx;
		margin-top: 10upx;
	}
	
	.comment-section p text:nth-child(1) {
		margin-right: 10upx;
		color: #888484;
	}
	
	.input-section {
		position: absolute;
		width: 100%;
		height: 65upx;
		margin: 0 auto;
		bottom: 10upx;
		color: #000000;
		background: #B7B7B7;
		border-radius: 50upx;
		font-size: 30upx;
	}
	
	.input-section input {
		width: 80%;
		height: 65upx;
		vertical-align: middle;
		float: left;
	}
	
	.input-section button {
		margin: 0;
		width: 20%;
		padding-right: 20upx;
		float: right;
		margin-top: -20upx;
		font-size: 35upx;
		color: #000000;
	}
	
	swiper {
		width: 100%;
		height: 1200upx;
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
	
	.block {
	  position:absolute;
	  /* other decorate style */
	  animation:barrage 5s infinite linear 0s;
	  width: 20%;
	  font-size: 30upx;
	  opacity: 0;
	  z-index: 1500;
	}
</style>
