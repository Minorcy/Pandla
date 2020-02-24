<template>
	<view class="chat-page">
		<view class="message-wrapper chat-list" :scroll-with-animation="true" :style="{paddingBottom:paddingBottom+'px'}">
			<view class="message-item chat-list" id="chat-list" v-for="(msg,index) in msglist" :key="index">
				<view class="message-time" v-if="msg.timeShow != 0"><text>{{msg.time|dateFormat()}}</text></view>
				<view>
					<view class="message-body  your-msg" v-if="msg.from.id==userInfos.id">
						<view class="rong-avatar">
							<img @tap="toUser()" :src="userInfos.avatar" class="rong-avatar-bd" mode="aspectFill">
						</view>
						<text class="left-triangle" v-if="msg.type !=3"></text>
						<view class="message-text-your" :class="[msg.type === 3 ? 'nobg' : '']">
							<rich-text space="nbsp" :nodes="msg.message|generateRichTextNode()" v-if="msg.type !=3" class="rich"></rich-text>
							<view class="message-img your-img" v-if="msg.type ==3" @tap="previewImage(msg.message)">
								<image :src="msg.message" v-if="msg.type ==3" mode="widthFix"></image>
							</view>
						</view>

					</view>
					<view class="message-body my-msg" v-if="msg.from.id==myInfo.id">
						<view class="message-text" :class="[msg.type === 3 ? 'nobg' : '']">
							<rich-text space="nbsp" :nodes="msg.message|generateRichTextNode()" v-if="msg.type !=3" class="rich"></rich-text>
							<view class="message-img" v-if="msg.type ==3" @tap="previewImage(msg.message)">
								<image :src="msg.message" v-if="msg.type ==3" mode="widthFix"></image>
							</view>
						</view>

						<text class="right-triangle" v-if="msg.type !=3"></text>
						<view class="rong-avatar">
							<img :src="myInfo.portrait" class="rong-avatar-bd" mode="aspectFill" alt="头像">
						</view>
					</view>
				</view>
			</view>
		</view>


		<view class="foot">
			<chat-input @sendMsg="getInputMessage" @show="show()" @sendImg="sendImg()" @foc = "foc"></chat-input>
		</view>
	</view>
</template>

<script>
	import chatInput from './yszyun-imchat-emoji/chatinput.vue';
	import EmojiObj from '@/common/utils/emojimap.js';
	import util from '@/common/utils';
	import pageUtil from '@/common/utils/page';
	import {
		uploadPictures,
		getImgTemp,
		getInfo,
		chatUserInfo,
		currentSession,
		sendMessage
	} from '../../api/api.js';
	var emoji = EmojiObj.emojiList.emoji
	export default {
		data() {
			return {
				sessionId: '',
				currSessionMsgs: '',
				title: "",
				userInfos: '',
				myInfo: '',
				msglist: '',
				paddingBottom: 50

			}
		},
		components: {
			chatInput,
		},
		onLoad(option) {
			var that = this
			this.sessionId = option.id
			this.userInfo()
			this.myInfo = uni.getStorageSync('USERS_KEY')
			uni.$on('onMsg' + option.id, function(data) {
				that.getMsg(data)
			})
		},
		methods: {
			interval: function(time1, time2) {
				var stime = Date.parse(new Date(time1));
				var etime = Date.parse(new Date(time2));
				var usedTime = etime - stime;
				var minutes = Math.floor(usedTime / (60 * 1000)) //计算相差分钟数
				console.log(minutes)
				if (minutes > 5) {
					return true
				} else if (minutes < 5) {
					return false
				}
			},
			userInfo() {
				uni.showLoading({
					title: "加載中"
				})
				setTimeout(() => {
					uni.hideLoading()
				}, 2000);
				chatUserInfo(this.sessionId).then(data => {
					if(!data){
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: '该用户未注册，暂不能聊天'
						});
						return
					}
					this.userInfos = data
					this.msgList()
					uni.setNavigationBarTitle({
						title: this.userInfos.name
					})
					
					
				})
				
			},
			msgList() {
				// currentSession(this.userInfos.id, this.myInfo.id).then(data => {
				// 	console.log(data)
				// 	if(!data){
				// 		setTimeout(() => {
				// 			uni.pageScrollTo({
				// 				scrollTop: 9999999999,
				// 				duration: 0
				// 			});
				// 			this.setSessinolist()
				// 		}, 300);
				// 		uni.hideLoading()
				// 		return
				// 	}
				// 	uni.setStorageSync("msg"+this.userInfos.id,data)
					
				// 	this.msglist = data
				// 	setTimeout(() => {
				// 		uni.pageScrollTo({
				// 			scrollTop: 9999999999,
				// 			duration: 0
				// 		});
				// 		this.setSessinolist()
				// 	}, 300);
				// 	uni.hideLoading()
				// })
				this.msglist=uni.getStorageSync("msg"+this.userInfos.id)
				if(!this.msglist){
					uni.hideLoading()
					this.msglist = []
					return
				}
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 999999999,
						duration:0
					});
					this.setSessinolist()
				}, 300);
				uni.hideLoading()
			},
			getInputMessage(message) { //获取子组件的输入数据
				this.paddingBottom = 50
				var that = this
				sendMessage(that.userInfos.id, message, 1).then(data => {
					if (!data) {
						return
					}
					that.msglist.push({
						from: {
							id: that.myInfo.id,
							avatar: that.myInfo.portrait,
							name: that.myInfo.name
						},
						message: message,
						to: {
							id: that.userInfos.id,
							avatar: that.userInfos.avatar,
							name: that.userInfos.name
						},
						time: new Date().getTime(),
						type: 1,
						lastMsgShow: 0
					})
					uni.setStorageSync("msg"+that.userInfos.id,that.msglist)
					setTimeout(() => {
						uni.pageScrollTo({
							scrollTop: 9999999999,
							duration: 0
						});
						
						that.setSessinolist()
					}, 200)
				})
			},
			sendImg() {
				var that = this
				getImgTemp().then(data => {
					uni.showLoading({
						title: "加载中"
					})
					setTimeout(() => {
						uni.hideLoading()
					}, 2000);
					// console.log(data)
					uploadPictures(data).then(data => {
						sendMessage(that.userInfos.id, data, 3).then(data => {
							if (!data) {
								return
							}
							that.msglist.push({
								from: {
									id: that.myInfo.id,
									avatar: that.myInfo.portrait,
									name: that.myInfo.name
								},
								message: data,
								to: {
									id: that.userInfos.id,
									avatar: that.userInfos.avatar,
									name: that.userInfos.name
								},
								time: new Date().getTime(),
								type: 3,
								lastMsgShow: 0
							})
							uni.setStorageSync("msg"+that.userInfos.id,that.msglist)
							uni.hideLoading()
							setTimeout(() => {
								uni.pageScrollTo({
									scrollTop: 9999999999,
									duration: 0
								});
								this.setSessinolist()
							}, 200)
						})

					})
				})
			},
			getMsg(data) {
				this.msglist.push(data)
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 9999999999,
						duration: 0
					});
				}, 200)
			
			},
			scrollEnd: function() {
				uni.pageScrollTo({
					scrollTop: 9999999999,
					duration: 0
				});
			},
			show() {
				this.paddingBottom = 300
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 9999999999,
						duration: 0
					});
				}, 300)
			},
			foc(){
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 9999999999,
						duration: 300
					});
				}, 800)
			},
			setScrollH: function() {

			},
			toUser() {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + this.sessionId
				});
			},
			previewImage(url) {
				var imgSrc = []
				this.msglist.filter(item => {
					if (item.type == 3) {
						imgSrc.push(item.message)
					}
				})
				var index = imgSrc.indexOf(url)
				uni.previewImage({
					urls: imgSrc,
					current: index,
					longPressActions: {
						itemList: ['保存图片'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			moveHandle() {},
			setSessinolist() {
				var that = this
				var session = uni.getStorageSync('updateSessionList')
				var msg = that.msglist.slice(-1)
				if(msg.length!=0){
					var lastmsg = JSON.parse(JSON.stringify(msg))
					lastmsg = lastmsg[0]
					lastmsg.lastMsgShow = 0
					if (lastmsg.to.id == that.sessionId) {
						lastmsg.from = {
							id: that.userInfos.id,
							avatar: that.userInfos.avatar,
							name: that.userInfos.name
						}
						lastmsg.lastMsgShow = 0
					}
				}else{
					return
				}
				var has = false
				var idx = 0
				if (session.length == 0) {
					var session = []
					session.unshift(lastmsg)
					uni.setStorageSync('updateSessionList', session)
					uni.$emit('updateSessionList', session)
					return
				}
				session.filter((item, index) => {
					if (item.from.id == that.sessionId) {
						has = true
						idx = index
					}
				})
				if (has) {
					session.splice(idx, 1, lastmsg)
					var arr = session[0]
					session[0] = lastmsg
					session[idx] = arr
					uni.setStorageSync('updateSessionList', session)
					uni.$emit('updateSessionList', session)
					return
				}
				session.unshift(lastmsg)
				uni.setStorageSync('updateSessionList', session)
				uni.$emit('updateSessionList', session)
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: "chatSettings?userInfo=" + JSON.stringify(this.userInfos)
			})
		},
		onBackPress() {
			uni.hideKeyboard()
			this.setSessinolist()
		},
		onShow() {
			chatUserInfo(this.sessionId).then(data => {
				this.userInfos = data
				uni.setNavigationBarTitle({
					title: this.userInfos.name
				})

			})
		},
	
		filters: {
			dateFormat(time) {
				time = Number(time)
				return util.formatDate(time, true)
			},
			generateRichTextNode(text) {
				let tempStr = text
				let richTextNode = []
				let leftBracketIndex = tempStr.indexOf('[')
				let rightBracketIndex = tempStr.indexOf(']')
				let countOfWord = 0
				Array.from(tempStr).map(item => {
					if (item != '[' && item != ']') {
						countOfWord++
					}
				})
				if (leftBracketIndex == -1 || rightBracketIndex == -1 || countOfWord == 0) { //没有emoji
					richTextNode.push({
						type: 'text',
						text: tempStr
					})
					return richTextNode
				}
				while (tempStr.length != 0) {
					leftBracketIndex = tempStr.indexOf('[')
					rightBracketIndex = tempStr.indexOf(']')
					if (leftBracketIndex == 0) { // 开头是[
						rightBracketIndex = tempStr.indexOf(']')
						if (rightBracketIndex == -1) {
							richTextNode.push({
								type: 'text',
								text: tempStr
							})
							tempStr = ''
						} else {
							let emojiName = tempStr.slice(0, rightBracketIndex + 1)
							if (emoji[emojiName]) { // 有效emoji
								richTextNode.push({
									name: 'img',
									attrs: {
										width: '30rpx',
										height: '30rpx',
										src: emoji[emojiName].img
									}
								})
							} else { //无效emoji
								richTextNode.push({
									type: 'text',
									text: emojiName
								})
							}
							tempStr = tempStr.substring(rightBracketIndex + 1, tempStr.length)
						}
					} else { // 开头不是[
						if (leftBracketIndex == -1) { // 最后全是文字
							richTextNode.push({
								type: 'text',
								text: tempStr.slice(0, tempStr.length)
							})
							tempStr = ''
						} else {
							richTextNode.push({
								type: 'text',
								text: tempStr.slice(0, leftBracketIndex)
							})
							tempStr = tempStr.substring(leftBracketIndex, tempStr.length + 1)
						}
					}
				}
				// console.log(richTextNode)
				return richTextNode
			}
		}
	}
</script>

<style>
	.chat-page {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		background-color: #F3F4F6;
	}

	.tabbar {
		height: var(--status-bar-height);
		width: 100%;
		box-sizing: border-box;
		z-index: 99;
		position: absolute;
		top: 0;
		background-color: #E1E1E1;
	}

	.foot {
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
	}

	.record-chatting-item-img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 100%;
		display: inline-block;
	}

	.message-wrapper {
		box-sizing: border-box;
		width: 100%;
		padding-bottom: 50px;
		padding-top: 10rpx;
	}

	.message-item {
		display: block;
	}

	.message-time {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.message-time text {
		background: #D6D6D6;
		border-radius: 8rpx;
		font-size: 24rpx;
		color: #fff;
		padding: 4rpx 10rpx;
	}

	.message-body {
		width: 100%;
		padding: 20rpx 20rpx;
		box-sizing: border-box;
	}

	.my-msg {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		color: #fff;

	}

	.your-msg {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: #222;
	}

	.rong-avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		display: inline-block;
		overflow: hidden;
	}

	.rong-avatar img {
		width: 80rpx;
		height: 80rpx;
		overflow: hidden;
	}

	.message-text {
		max-width: 70%;
		border-radius: 8rpx;
		background-color: #24b82f;
		padding: 16rpx;
		box-sizing: border-box;
		word-wrap: break-word;
		overflow: hidden;
		font-size: 32rpx;
		line-height: 48rpx;

	}

	.message-text rich-text div {
		vertical-align: middle
	}

	.message-img {}

	.message-img image {
		max-width: 100% !important;
		max-height: 300px !important;
		/* max-height: 100%; */

	}

	.your-img image {
		border: 5px solid #CCCCCC;
	}

	.message-text-your {
		max-width: 70%;
		border-radius: 8rpx;
		background-color: #fff;
		padding: 16rpx;
		box-sizing: border-box;
		word-wrap: break-word;
		overflow: hidden;
		font-size: 32rpx;
		line-height: 48rpx;

	}

	.rich {
		vertical-align: middle
	}

	.right-triangle {
		height: 0px;
		width: 0px;
		border-width: 20rpx;
		border-style: solid;
		border-color: transparent transparent transparent #24b82f;
		margin-top: 20rpx;

	}

	.left-triangle {
		height: 0px;
		width: 0px;
		border-width: 20rpx;
		border-style: solid;
		border-color: transparent #fff transparent transparent;
		margin-top: 20rpx;

	}

	.nobg {
		background: transparent;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
</style>
