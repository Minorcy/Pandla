<template>
	<view class="footheight">
		<view class="footer">
			<view class="footer-center">
				<input class="input-text" type="text" v-model="inputValue" @input='input' @focus.stop="foc" :focus="focus" @confirm="sendMessge"
				 @blur.stop='blur' confirm-type="done" confirm-hold="true" maxlength="-1" ></input>
			</view>
			<view class="footer-emotion" @tap="show">
				<image src="/static/img/msg/chat/emoji.svg" mode=""></image>
			</view>
			<view class="footer-photo" @tap="sendImg()" v-if="!sendShow">
				<image src="/static/img/msg/chat/photo.svg" mode=""></image>
			</view>
			<view class="footer-right" @click.prevent="sendMessge()" v-if="sendShow">
				<view>
					<text id='msg-type'>發送</text>
				</view>
			</view>
		</view>
		<emotion @sendEmji="sendEmji" v-if="showPannel"></emotion>
	</view>
</template>

<script>
	import Emotion from './Emotion/ChatEmoji.vue'
	export default {
		name: "chat-input",
		components: {
			Emotion
		},
		props: {
			to: {
				type: String,
			}
		},
		data() {
			return {
				inputValue: '',
				showPannel: false,
				focus: false,
				sendShow: false
			}
		},
		methods: {
			sendMessge: function() {
				var that = this;
				if(this.inputValue == ""){
					uni.showToast({
						title:"请输入聊天内容",
						icon:"none"
					})
					return
				}
				//点击发送按钮时，通知父组件用户输入的内容
				this.$emit('sendMsg', that.inputValue);
				this.inputValue = "";
				this.showPannel = false
				this.sendShow = false
				setTimeout(()=>{
					this.inputValue = "";
					this.showPannel = false
					this.sendShow = false
				},100)
			},
			sendImg() {
				this.$emit('sendImg')
			},
			show() {
				this.sendShow = true
				this.showPannel = !this.showPannel;
				this.$emit('show')
			},
			foc() {
				this.sendShow = true
				this.showPannel = false
				this.$emit('foc')
				
			},
			input() {
				this.sendShow = true
				if (this.inputValue.length == 0) {
					this.sendShow = false
				} else {
					this.sendShow = true
				}
			},
			blur() {
				if (this.inputValue.length == 0) {
					this.sendShow = false
				} else {
					this.sendShow = true
				}
			},
			emojiCLick(e) {
				let val = e.detail
				// 单击删除按钮，，删除emoji
				if (val == '[删除]') {
					let lastIndex = this.data.inputValue.lastIndexOf('[')
					if (lastIndex != -1) {
						this.setData({
							inputValue: this.data.inputValue.slice(0, lastIndex)
						})
					}
					return
				}
				if (val[0] == '[') { // emoji
					this.setData({
						inputValue: this.data.inputValue + val
					})
				} else { //大图
					this.sendBigEmoji(val)
				}
			},
			/**
			 * emoji点击发送
			 */
			emojiSend(e) {
				let val = this.inputValue
				// this.sendRequest(val)
				// this.setData({
				//   emojiFlag: false
				// })
			},
			sendEmji(key) {
				this.inputValue += key
			},
			handleEmotion(i) {
				this.inputValue += i

			},
		}
	}
</script>

<style>
	.footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100upx;
		min-height: 80upx;
		border-top: solid 1px #bbb;
		overflow: hidden;
		padding: 5px;
		box-sizing: border-box;
		background-color: #fafafa;
	}

	.footer-left {
		width: 80upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer-right {
		z-index: 10;
		width: 100upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #1482D1;
	}

	.footer-right view {
		width: 100%;
		height: 60upx;
		background-color: #24b82f;
		text-align: center;
		border-radius: 4px;
	}

	.footer-right text {
		text-align: center;
		font-size: 14px;
		color: #FFFFFF;
		line-height: 60upx;
	}

	.footer-emotion {
		margin: 0 5px;
		width: 60upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;

	}
	.footer-emotion image{
		width: 25px;
		height: 25px;
		margin: auto;
	}
	.footer-photo image{
		width: 25px;
		height: 25px;
		margin: auto;
		}

	.footer-photo {
		margin-right: 5px;
		position: relative;
		width: 60upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}



	.footer-center {
		flex: 1;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer-center .input-text {
		flex: 1;
		background: #fff;
		border: solid 1upx #ddd;
		padding: 10upx !important;
		font-family: verdana !important;
		overflow: hidden;
		border-radius: 15upx;
	}


	@font-face {
		  font-family: 'iconfont';  /* project id 1300994 */
		  src: url('//at.alicdn.com/t/font_1300994_8ze28wi2075.eot');
		  src: url('//at.alicdn.com/t/font_1300994_8ze28wi2075.eot?#iefix') format('embedded-opentype'),
		  url('//at.alicdn.com/t/font_1300994_8ze28wi2075.woff2') format('woff2'),
		  url('//at.alicdn.com/t/font_1300994_8ze28wi2075.woff') format('woff'),
		  url('//at.alicdn.com/t/font_1300994_8ze28wi2075.ttf') format('truetype'),
		  url('//at.alicdn.com/t/font_1300994_8ze28wi2075.svg#iconfont') format('svg');
	}
	

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 18px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.footer-emotion .icon-face:before {
		content: "\e663";
		font-size: 40upx;
	}

	.footer-photo .icon-face:before {
		content: "\e655";
		font-size: 40upx;
	}
</style>
