<template>
	<view class="daliy-page" @touchmove="handletouchmove" @touchstart="handletouchstart" @touchend="handletouchend" 
	 :style="{position:position}">
		<view class="top">
			<image class="camera" @tap="publishDyn()" src="../../static/img/main/daily/camera.svg"></image>
			<image class="btn-behaviour" @tap="behaviour()" src="../../static/img/main/daily/option.svg"></image>
		</view>
		<view class="swiper-wrapper" >
			<swiper vertical="true" @change="swiperChange" @transition="transitioning"  :current="currentIndex" @tap="double">
				<swiper-item v-for="(item,index) in dynInfo" :key="index" :style="{backgroundImage: 'url('+item.images+')'}">
					<view class="swiper-item" >
						<view class="header" v-if="heartAnimation.display" :style="{top:heartAnimation.top+'px',left:heartAnimation.left+'px'}">
							<image :animation="animationData" src="../../static/img/main/daily/like.svg" mode=""></image>
						</view>
						<view class="item-user">
							<view class="user-img">
								<image class="img-avatar" @tap="userInfo(item.uid)" :src="item.portrait" mode="aspectFill"></image>
								<image class="img-folllow" @tap="userFollow(item.uid,index)" v-if="!item.following && item.isOwn == 0" src="../../static/img/main/daily/follow.svg"></image>
							</view>
							<view class="user-info">
								<text class="info-name">{{item.name}}</text>
								<text class="info-location" @tap="toMap(item.lat,item.lng,item.location)">{{item.location}}</text>
							</view>
						</view>
						<view class="block-bullet">
							<text v-for="(item, buIndex) in bulletList" :key="buIndex" :class="doomm == true ? 'doomm' : ''" :style="{'animation-duration': item.time+'s','top':item.top+'px'}">{{item.text}}</text>
						</view>
						<view class="daily-seciton" v-if="item.content.length">
							<image src="../../static/img/main/daily/tag.svg"></image>
							<text class="dailyContent" v-if="item.isOwn == 1">{{item.content}}</text>
							<text class="dailyContent" v-else-if="item.isOwn == 0 && item.following == 1">{{item.content}}</text>
							<text class="remind" v-else-if="item.following == 0 && item.isOwn == 0">需要關注才能看到對方的日志内容</text>
							<text class="remind" v-else-if="item.following == 0">需要關注才能看到對方的日志内容</text>
						</view>
						<!-- <view >
							<canvas canvas-id="mycanvas" class="canvas" />
							<image src="../../static/images/heart_button.png" class="heart" @tap="onClickImage" :style="style_img"></image>
						</view> -->

						<view class="option-section">
							<view class="option-like">
								<image src="../../static/img/main/daily/unlike.svg" @tap="likePerson(item.isOwn,item.id,index)" v-if="item.isLike==0"
								 mode=""></image>
								<image src="../../static/img/main/daily/like.svg" :class=" animation == true ? 'heartAnimation' : ''" @tap="likePerson(item.isOwn,item.id,index)"
								 v-if="item.isLike!=0" mode=""></image>
								<!-- <view class="header" :class=" animation == true ? 'is-active' : ''" @tap="likePerson(item.isOwn,item.id,index)"
								  v-if="item.isLike!=0" mode=""></view> -->
								<text>{{item.like_count}}</text>
							</view>
							<view class="option-conn">
								<image src="../../static/img/main/daily/conn.svg" mode="" v-if="item.com_count == 0" @tap="showComm(item.id)"></image>
								<image src="../../static/img/main/daily/conning.svg" mode="" v-if="item.com_count != 0" @tap="showComm(item.id)"></image>
								<text>{{item.com_count}}</text>
							</view>
							<view class="option-barrage">
								<image src="../../static/img/main/daily/on.svg" mode="" v-if="doomm" @tap.stop="showDoomm"></image>
								<image src="../../static/img/main/daily/off.svg" mode="" v-if="!doomm" @tap.stop="showDoomm"></image>
								<text>弹幕</text>
							</view>
							<view class="option-pan">
								<image src="../../static/img/main/daily/PAN.svg" mode=""></image>
								<text>{{item.pan}}</text>
							</view>

						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 評論 -->
		<view class="comment-section" v-if="showComment" @touchmove.stop.prevent="moveHandle" :style="{height: height}">
			<view class="comment-section-top">
				<text>{{commCount}}条評論</text>
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
								<text class="ite-create_time">{{ite.create_time|stringifyDate}}</text>
							</view>
						</view>
						<p class="comment-section-reply" v-if="ite.replyName != '' && ite.replyContent != ''">
							<text class="color">作者 </text>
							<text>: {{ite.replyContent}}</text>
						</p>
					</view>
				</view>
			</scroll-view>
			<view class="input-section">
				<input v-model="commContent" :placeholder="commplaceholder" @blur="blur" @focus="focus" adjust-position="false" />
				<button :disabled="disabled" @tap="addComm()">發送</button>
				<!-- <chatInput @sendMessge="addComm"></chatInput> -->
			</view>
		</view>
		 <image-cropper :src="tempFilePath" @confirm.stop="confirm" @cancel.stop="cancel"></image-cropper>
	</view>
</template>

<script>
	import chatInput from "@/components/chatinput.vue"
	import ImageCropper from "@/components/invinbg-image-cropper/invinbg-image-cropper.vue";
	import util from '@/common/utils'
	import {
		findAllDyn,
		getImgTemp,
		getComment,
		addComment,
		concern,
		like,
		likeCount,
		getBullet,
		reply,
		checkIsCon
	} from '../../api/api.js';
	export default {
		data() {
			return {
				currentIndex: 0,
				dynInfo: '',
				uid: '',
				did: '',
				cid: '',
				index: "",
				likeNumber: 0,
				animation: false,
				showComment: false,
				bulletList: [],
				doomm: true,
				commCount: 0,
				commentInfo: '',
				commplaceholder: '為保證用戶隱私，只可以看自己的評論',
				commContent: "",
				disabled: false,
				addType: "",
				count: 10,
				height: "60%",
				position: "absolute",
				flag: 0,
				text: '',
				lastX: 0,
				lastY: 0,
				click: 0,
				heartAnimation: {
					active: false,
					top: '',
					left: '',
					display: false
				},
				animationData: "",
				tempFilePath: '',
			}
		},
		components: {
			chatInput,
			ImageCropper
		},
		methods: {
			heart() {

			},
			double(e) {
				this.click += 1
				// console.log(this.click)
				setTimeout(() => {
					this.click = 0
				}, 350)
				if (this.click == 2) {
					console.log('双击', e)
					this.heartAnimation.display = true
					this.heartAnimation.top = e.detail.y - 50
					this.heartAnimation.left = e.detail.x - 50
					var animationMiddleHeaderItem = wx.createAnimation({
						duration: 400, // 以毫秒为单位  
						timingFunction: 'ease-out'
					});
					// animationMiddleHeaderItem.opacity(0.5).scale(0.9).step()
					animationMiddleHeaderItem.opacity(0.6).scale(0.6).step()
					// animationMiddleHeaderItem.opacity(0.5).scale(0.9).step()
					animationMiddleHeaderItem.opacity(0).scale(0.4).step()

					// animationMiddleHeaderItem.opacity(0.6).scale(0.5,0.5).step();
					this.animationData = animationMiddleHeaderItem.export()
					setTimeout(() => {
						this.heartAnimation.display = false
					}, 1000);
					console.log(this.dynInfo[this.index].isOwn, this.did, this.index)
					this.likePerson(this.dynInfo[this.index].isOwn, this.did, this.index)

				}
			},
			handletouchmove: function(event) {
				// console.log(event)
				if (this.flag !== 0) {
					return;
				}
				let currentX = event.touches[0].pageX;
				let currentY = event.touches[0].pageY;
				let tx = currentX - this.lastX;
				let ty = currentY - this.lastY;
				let text = '';
				this.mindex = -1;
				//左右方向滑动
				if (Math.abs(tx) > Math.abs(ty)) {
					if (tx < 0) {
						text = '向左滑动';
						// console.log("向左滑动");

						this.flag = 1;
						//  this.getList();  //调用列表的方法
					} else if (tx > 30) {
						text = '向右滑动';
						// console.log("向右滑动");
						// uni.navigateTo({
						// 	url: '/pages/daily/daily',
						// 	animationType: 'pop-out',
						// 	animationDuration: 200
						// });
						uni.switchTab({
							url: '/pages/main/main'
						});
						this.flag = 2;
					}
				}
				//上下方向滑动
				else {
					if (ty < 0) {
						text = '向上滑动';
						this.flag = 3;
						//  this.getList();  //调用列表的方法
					} else if (ty > 0) {
						text = '向下滑动';
						this.flag = 4;
					}
				}

				//将当前坐标进行保存以进行下一次计算
				this.lastX = currentX;
				this.lastY = currentY;
				this.text = text;
			},
			handletouchstart: function(event) {
				// console.log(event)
				this.lastX = event.touches[0].pageX;
				this.lastY = event.touches[0].pageY;
			},
			handletouchend: function(event) {
				this.flag = 0;
				this.text = '没有滑动';
			},
			blur() {
				this.height = "60%"
				this.position = "absolute"
			},
			focus() {
				this.height = "30%"
				this.position = "fixed"
			},
			transitioning() {
				// console.log(e)
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
			findDyn() {
				findAllDyn(0).then(data => {
					this.dynInfo = data
					this.uid = data[0].uid
					this.index = 0
					this.did = data[0].id

					this.getAllBullet()
				})
			},
			loadFindDyn() {
				findAllDyn(this.count).then(data => {
					this.count += data.length
					this.dynInfo = this.dynInfo.concat(data)
					if (data.length == 0) {
						uni.showToast({
							icon: 'none',
							title: '没有更多数据了'
						});
					}
				})
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
			likePerson(isOwn, did, index) {
				console.log(isOwn, did, index)
				if (isOwn == 1) {
					uni.showToast({
						icon: 'none',
						title: '不可以給自己點贊哦'
					});
				} else {
					this.likeNumber++;
					like(did, 1).then(data => {
						// console.log(data)
						this.animation = true
						likeCount(did).then(data => {
							// console.log(data)
							this.dynInfo[index].isLike = 1
							this.dynInfo[index].like_count = data
							this.dynInfo[index].pan = data / 10
							uni.showToast({
								icon: 'none',
								title: '點贊了' + this.likeNumber + '次'
							});
						})
					});
					this.animation = false

				}
			},
			getAllBullet() {
				this.bulletList = []
				getBullet(this.did).then(data => {
					// bulletList = data.content;
					var len = data.content.length
					if (len == 0) {
						return
					}
					for (let i = 0; i < len; i++) {
						this.bulletList.push(new Doomm(data.content[i], parseInt(Math.random() * 500, 10), Math
							.ceil(Math.random() * (10 - 3 + 1) + 3),
						));
					}
				});

				var i = 0;
				class Doomm {
					constructor(text, top, time, color) {
						this.text = text;
						this.top = top;
						this.time = time;

						this.display = true;
						this.id = i++;

					}
				}
				// console.log(this.bulletList)

			},
			showDoomm() {
				(this.doomm == true) ? (this.doomm = false) : (this.doomm = true);
			},
			showComm(did) {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
				getComment(did).then(data => {
					this.commentInfo = data;
					this.commCount = data.length
					// console.log(this.commentInfo);
				});
				// this.flog = false
			},
			hidComm() {
				(this.showComment == true) ? (this.showComment = false) : (this.showComment = true);
				// this.loadFindDyn()
				this.commentInfo = ''
				this.commCount = 0
				this.commContent = ''
				this.disabled = false
			},
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
			addComm() {
				this.disabled = true
				if (this.commContent != '') {
					if (this.addType == 'reply') {
						console.log('刚刚是回复');
						reply(this.cid, this.commContent).then(data => {
							// console.log(data)
							if (data == null) {
								uni.showToast({
									icon: 'none',
									title: '只能回復一次哦'
								});
								this.addType = '';
								this.commContent = '';
								this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
								this.disabled = false
								return
							}
							getComment(this.did).then(data => {
								this.commentInfo = data;
								this.addType = ''; // 重置发送按钮类型
								this.commContent = '';
								this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
								this.disabled = false
								this.commCount = data.length
								this.dynInfo[this.index].com_count = data.length
							});
						});
					} else {
						console.log('刚刚是評論');
						addComment(this.commContent, this.did).then(data => {
							getComment(this.did).then(data => {
								this.commentInfo = data;
								this.commCount = data.length
								this.commContent = '';
								this.addType = ''; // 重置发送按钮类型
								this.commplaceholder = '為保證用戶隱私，只可以看自己的評論'; // 清除占位符
								this.disabled = false
								this.dynInfo[this.index].com_count = data.length
							});
							// // 获取弹幕
							this.getAllBullet()
						});
					}
				}
				uni.hideKeyboard()

			},
			publishDyn() {
				getImgTemp().then(data => {
					this.tempFilePath = data
					
					// this.$store.commit('setImgTemp', data);
					// // console.log(this.$store.state.imgTemp);
					
				});
			},
			confirm(e) {
			    this.tempFilePath = ''
				this.$store.commit('setImgTemp', e.detail.tempFilePath);
			     uni.navigateTo({
			     	url: 'publish'
			     });
			},
			cancel(){
				this.tempFilePath = ''
			},
			moveHandle() {},
			swiperChange(e) {
				// console.log(e)
				 this.tempFilePath = ''
				
				this.did = this.dynInfo[e.detail.current].id
				this.likeNumber = 0
				this.index = e.detail.current
				this.uid = this.dynInfo[e.detail.current].uid
				checkIsCon(this.dynInfo[e.detail.current].uid).then(data => {
					// console.log(data)
					if (data) {
						this.dynInfo[e.detail.current].following = 1
					} else if (data == 0) {
						this.dynInfo[e.detail.current].following = 0
					}
				})
				this.getAllBullet()
				if (e.detail.current + 1 == this.count) {
					setTimeout(() => {
						uni.showLoading({
							title: "加载中"
						})
						this.loadFindDyn()
					}, 500)

					setTimeout(() => {
						uni.hideLoading()
					}, 1500)
				}
				if (e.detail.current == 0) {
					setTimeout(() => {
						this.findDyn();
					}, 2000)
				}
			},
			goChange() {
				this.item_id = 'slide1';
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
			

		},
		filters: {
			stringifyDate(datetime) {
				datetime = Number(datetime)
				return util.formatDate(datetime, true)
			}
		},
		onBackPress() {
			uni.switchTab({
				url: '/pages/main/main'
			});
		},
		onLoad() {
			this.cid = uni.getStorageSync('USERS_KEY').id
			this.findDyn()
			this.ctx = uni.createCanvasContext('mycanvas')
		}
		// onShow() {
		// 	this.cid = uni.getStorageSync('USERS_KEY').id
		// 	this.findDyn()
		// }
	}
</script>


<style>
	@import './icons.css'
</style>
<style lang="scss" scoped>
	body,
	page {
		background-color: #000000;
	}


	.daliy-page {
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
		top: 5px;
		right: 10px;
		width: 24px;
		height: 24px;
		padding-top: var(--status-bar-height);
		margin: 2px 10px 0 0;
		z-index: 2;
	}

	.btn-behaviour {
		width: 30upx;
		height: 50upx;
	}

	.top image {
		width: 24px;
		height: 24px;
	}

	.swiper-wrapper {
		width: 100%;
		height: 100%;
	}

	swiper {
		width: 100%;
		height: 100%;
	}

	swiper-item {
		// background-image: url('http://47.244.27.153/images/2019/09/02/1567393283671093.webp');
		background-repeat: no-repeat;
		background-position: 100% center;
		background-size: 100%;
	}

	.header {
		position: absolute;
		width: 100px;
		height: 100px;
	}

	.header image {
		width: 100px;
		height: 100px;

	}

	.item-user {
		position: absolute;
		width: 65%;
		height: 50px;
		top: 6px;
		left: 20px;
		box-sizing: border-box;
		display: flex;

	}

	.user-img {
		box-sizing: border-box;
		margin-right: 10px;
		display: flex;
		align-self: center;
		border-radius: 100%;
		position: relative;

	}

	.user-img .img-avatar {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		overflow: hidden;
		z-index: 2;
	}

	.user-img::after {
		width: 45px;
		height: 45px;
		content: "";
		border: 1px solid #00D419;
		border-radius: 100%;

		position: absolute;
		top: -5px;
		left: -5px;

	}

	.user-img .img-folllow {
		position: absolute;
		bottom: -5px;
		right: -5px;
		width: 15px;
		height: 15px;
		z-index: 2;
	}

	.user-info {
		font-size: 14px;
		color: #FFFFFF;
		line-height: 1.5;
		padding: 5px;
	}

	.user-info .info-rname {
		display: block;
	}

	.user-info .info-location {
		display: block;
		font-size: 12px;
		color: #9E9E9E;
		word-wrap: break-word;
	}

	.daily-seciton {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		position: absolute;
		bottom: 12%;
		left: 0;
		display: flex;
		align-items: flex-start;
	}

	.daily-seciton image {
		width: 42upx;
		height: 42upx;
		padding: 20upx;
		float: left;
		display: block;
	}

	.daily-seciton text {
		max-width: 85%;
		display: block;
		font-size: 14px;
		line-height: 1.5;
		color: #ccc;
		margin-top: 10px;
		word-wrap: break-word;
	}

	.block-bullet {
		position: absolute;
		top: 10%;
		left: 0;
		width: 120%;
		font-size: 30upx;
		opacity: 1;
		z-index: 999;
	}

	.block-bullet>text {
		color: #FFFFFF;
		font-size: 18px;
		position: absolute;
		visibility: hidden;
		white-space: nowrap;
	}

	.option-section {
		box-sizing: border-box;
		padding: 10px;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 73px;
		// background:rgba(0,0,0,0.39899999999999997);
	}

	.option-section::after {
		content: "";
		width: 100%;
		height: 73px;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: -1;
	}

	.option-section view {
		width: 30px;
		height: 50px;
		margin: 5px 10px;
		z-index: 1;
		display: flex;
		flex-direction: column;
	}

	.option-section view image {
		margin: 0 auto;
		width: 25px;
		height: 25px;
	}

	.option-section view text {
		text-align: center;
		height: 17px;
		font-size: 12px;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 17px;
	}

	.option-like {
		float: left;
	}

	.option-conn {
		float: left;
	}

	.option-barrage {
		float: left;
	}

	.option-pan {
		float: right;
	}

	.comment-section {
		position: fixed;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		font-size: 16px;
		z-index: 300;
		background-color: #000000;
		border-radius: 18px 18px 0 0;
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
		box-sizing: border-box;
		text-align: center;
		display: block;
		margin: 0 auto;
		margin-top: 10px;
		color: #ffffff;
		font-size: 14px;
		line-height: 30px;
		background-color: #000000;
	}

	.comment-section-top image {
		width: 15px;
		height: 15px;
		position: absolute;
		top: 15px;
		right: 15px;
	}

	.comment {
		width: 100%;
		height: 90%;
		padding: 10px 10px 40px 10px;
		box-sizing: border-box;
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
		max-width: 85%;
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
		box-sizing: border-box;
		position: fixed;
		width: 100%;
		height: 50px;
		bottom: 0;
		left: 0;
		color: #4A4A4A;
		padding: 5px 5px;
		background-color: #FFFFFF;
		font-size: 14px;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
	}


	.input-section input {
		width: 82%;
		height: 40px;
		line-height: 40px !important;
		box-sizing: border-box;
		color: #4A4A4A;
		test-align: left;
		vertical-align: middle;
		border: 1px solid #999;
		border-radius: 30upx;
		padding: 5px 5px 5px 10px;
	}

	.input-section button {
		display: block;
		width: 15%;
		font-size: 16px;
		color: #4A4A4A;
		height: 40px;
		padding: 5px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	uni-button:after {
		border: none;
	}

	.doomm {
		-webkit-animation-name: barrage;
		animation-name: barrage;
		-webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
		animation-timing-function: ease-in
	}

	@keyframes barrage {
		from {

			transform: translateX(375px);
			visibility: visible;
		}

		to {

			transform: translateX(-100%);
			visibility: visible;
		}
	}


	/* .option-like .header{
		width: 100px!important;
		    height: 100px !important;
		    background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
		    background-position: 0 0;
		    cursor: pointer;
		    -webkit-transition: background-position 1s steps(28);
		    transition: background-position 1s steps(28);
		    -webkit-transition-duration: 0s;
		    transition-duration: 0s;
		}
	.is-active {
	    -webkit-transition-duration: 1s;
	    transition-duration: 1s;
	    background-position: -2800px 0;
	} */

	.heartAnimation {

		-webkit-animation-name: rubberBand;
		animation-name: rubberBand;
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
		-webkit-animation-timing-function: steps(28);
		animation-timing-function: steps(28);

	}

	@-webkit-keyframes rubberBand {
		from {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}

		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			-webkit-transform: scale3d(0.95, 1.05, 1);
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			-webkit-transform: scale3d(1.05, 0.95, 1);
			transform: scale3d(1.05, 0.95, 1);
		}

		to {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}

	@keyframes rubberBand {
		from {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}

		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			-webkit-transform: scale3d(0.95, 1.05, 1);
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			-webkit-transform: scale3d(1.05, 0.95, 1);
			transform: scale3d(1.05, 0.95, 1);
		}

		to {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}


	/* .heart {
		position: absolute;
		width: 100px;
		height: 100px;
		background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
		background-position: 0 0;
		cursor: pointer;
		-webkit-transition: background-position 1s steps(28);
		transition: background-position 1s steps(28);
		-webkit-transition-duration: 0s;
		transition-duration: 0s;
	}

	.heart.active {
		-webkit-transition-duration: 1s;
		transition-duration: 1s;
		background-position: -2800px 0;
	} */

	.canvas {
		background: transparent;
		width: 90px;
		height: 400px;
		position: fixed;
		right: 20px;
		bottom: 60px;
		z-index: 99;
	}
	.canvas image{
		width: 100%;
		height: 100%;
	}
	/* transform下面的属性是为了让动画看上去更自然 */
	.heart {
		position: fixed;
		right: 45px;
		bottom: 30px;
		width: 40px;
		height: 40px;
		transform: scale(1);
		-webkit-transform: scale(1);
		-webkit-transition: ease all;
		-moz-transition: ease all;
		transition: ease all;
		-webkit-transition-duration: 700ms;
		-moz-transition-duration: 700ms;
		transition-duration: 700ms;
	}
</style>
