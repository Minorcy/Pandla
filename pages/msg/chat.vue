<template>
	<view class="chat-page">
	<!-- 	<view class="tabbar">
			
		</view>
		<uni-nav-bar  left-icon="back" right-icon="bars" :title="title" fixed="true" color="000000"
		 background-color="#E1E1E1" @click-left="clickLeft()" @click-right="clickRight()"></uni-nav-bar> -->
		<view class="message-wrapper chat-list" :scroll-with-animation="true">
			<view class="message-item chat-list" id="chat-list" v-for="(msg,index) in msglist" :key="index">
				<view class="message-time" v-if="msg.type==='timeTag'"><text>{{msg.text}}</text></view>
				<view v-if="msg.type!='timeTag'">
					<view class="message-body  your-msg" v-if="msg.flow==='in'">
						<view class="rong-avatar">
							<img v-if="msg.type!='timeTag'" @tap="toUser()" :src="userInfos[to].avatar" class="rong-avatar-bd" mode="aspectFill">
						</view>
						<text class="left-triangle" v-if="msg.type !='image'"></text>
						<view class="message-text-your" :class="[msg.type =='image' ? 'nobg' : '']">
							<rich-text :nodes="msg.text|generateRichTextNode()" :class="[msg.type==='timeTag' ? 'user-time':'user-msg']"></rich-text>
							<view class="message-img your-img" v-if="msg.type =='image'" @tap="previewImage(msg.file.url)">
								<image :src="msg.file.url" v-if="msg.type =='image'" mode="aspectFill"></image>
							</view>
						</view>

					</view>
					<view class="message-body my-msg" v-if="msg.flow==='out'">
						<view class="message-text" :class="[msg.type =='image' ? 'nobg' : '']">
							<rich-text :nodes="msg.text|generateRichTextNode()" :class="[msg.type==='timeTag' ? 'user-time':'user-msg']"></rich-text>
							<view class="message-img" v-if="msg.type =='image'" @tap="previewImage(msg.file.url)">
								<image :src="msg.file.url" v-if="msg.type =='image'" mode="aspectFill"></image>
							</view>
						</view>

						<text class="right-triangle" v-if="msg.type !='image'"></text>
						<view class="rong-avatar">
							<img v-if="msg.type!='timeTag'" :src="myInfo.avatar" class="rong-avatar-bd" mode="aspectFill">
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- </view> -->

		<view class="foot">
			<chat-input @send-message="getInputMessage" @show="setScrollH" @foc="setScrollH" @sendImg="sendImg()" :to="to"></chat-input>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	
	import EmojiObj from '@/common/utils/emojimap.js';
	import chatInput from './yszyun-imchat-emoji/chatinput.vue';
	import util from '@/common/utils';
	import pageUtil from '@/common/utils/page';
	import {
		upload,
		getImgTemp,
		getInfo
	} from '../../api/api.js';
	var emoji = EmojiObj.emojiList.emoji
	export default {
		data() {
			return {
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				scrollTop: 0,
				sessionId: '',
				currSessionMsgs: '',
				title: ""
			}
		},
		components: {
			chatInput,
			uniNavBar
		},
		onLoad(option) {
			uni.showLoading({
				title: "加载中"
			})
			setTimeout(() => {
				this.scrollEnd()
			}, 500)
			this.sessionId = option.id
			// console.log(this.sessionId)
			setTimeout(() => {
				uni.hideLoading()
			}, 800)
		},
		computed: {
			userInfos() {
				var user = this.$store.state.userInfos
				return user
			},
			myInfo() {
				var myInfo = this.$store.state.myInfo
				return this.$store.state.myInfo
			},
			msglist() {
				let msgs = this.$store.state.currSessionMsgs
				// console.log(msgs)
				this.scrollEnd()
				return msgs
			},
			scene() {
				return util.parseSession(this.sessionId).scene
			},
			to() {
				return util.parseSession(this.sessionId).to
			},


		},
		mounted() {
			this.$store.dispatch('setCurrSession', this.sessionId)
			var user = this.userInfos[this.to]
			if (user.alias) {
				this.title = user.alias
				uni.setNavigationBarTitle({
					title:user.alias
				})
				return
			}
			this.title = user.nick
			uni.setNavigationBarTitle({
				title:user.nick
			})
		},
		created() {
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100); //像素
		},
		methods: {
			clickLeft(){
				uni.navigateBack({
					delta: 1
				})
			},
			clickRight(){
				uni.navigateTo({
					url: "chatSettings?id=" + this.to
				})
			},
			getInputMessage: function(message) { //获取子组件的输入数据
				this.sendTextMsg(message)
			},
			sendTextMsg(message) {
				this.$store.dispatch('sendMsg', {
					type: 'text',
					scene: "p2p",
					to: this.to,
					text: message.content
				})
				setTimeout(() => {
					this.scrollEnd()
				}, 500)
				uni.hideKeyboard()
			},
			sendImg() {
				var that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						uni.showLoading({
							title: '发送中...',
						})
						that.$store.dispatch('sendFileMsg', {
							scene: "p2p",
							to: that.to,
							fileInput: res.tempFilePaths
						})
					}
				});
				uni.hideKeyboard()
			},
			scrollEnd: function() {
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 9999999999,
						duration: 0
					});
				}, 500)

			},
			setScrollH: function() {
				var query = uni.createSelectorQuery();
				let footh = query.select('.foot');
				//console.log('fh',footh);
				const res = uni.getSystemInfoSync();
				this.style.pageHeight = res.windowHeight;
				this.$nextTick(function() {
					footh.fields({
						size: true
					}, data => {
						footh = data.height;
						// console.log('fh', data.height);
						this.style.contentViewHeight = res.windowHeight - footh; //像素
					}).exec();
					// console.log('contentViewHeight', this.style.contentViewHeight);
				})

			},
			toUser() {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + this.to
				});
			},
			previewImage(url) {
				var imgSrc = []
				this.msglist.filter(item => {
					if (item.file) {
						imgSrc.push(item.file.url)
						return item
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
				return richTextNode
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: "chatSettings?id=" + this.to
			})
		},
		onHide() {
			uni.hideKeyboard()
		},
		onBackPress() {
			uni.hideKeyboard()
		},
		filters: {
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
	.tabbar{
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
		left: 0upx;
		bottom: -1px;
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
		background-color: #3387FF;
		padding: 16rpx;
		box-sizing: border-box;
		word-wrap: break-word;
		overflow: hidden;
		font-size: 32rpx;
		line-height: 48rpx;

	}

	.message-img {}

	.message-img image {
		max-width: 100%;
		max-height: 100%;

	}

	.your-img {
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

	.right-triangle {
		height: 0px;
		width: 0px;
		border-width: 20rpx;
		border-style: solid;
		border-color: transparent transparent transparent #3387FF;
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
