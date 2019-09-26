<template>
	<view class="footheight">
		<view class="footer">
			<view class="footer-center">
				<input class="input-text" type="text" v-model="inputValue" @focus="foc" :focus="focus"></input>
			</view>
			<view class="footer-right" @tap="sendMessge">
				<view id='msg-type'>发送</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "chat-input",
		data() {
			return {
				inputValue: '',
				showPannel: false,
				focus: false
			}
		},

		methods: {
			startRecognize: function() {
				var options = {};
				var that = this;
				options.engine = 'iFly';
				that.inputValue = "";
				plus.speech.startRecognize(options, function(s) {
					console.log(s);
					that.inputValue += s;
				}, function(e) {
					console.log("语音识别失败：" + e.message);
				});
			},
			sendMessge: function() {
				var that = this;
				if (that.inputValue.trim() == '') {

					that.inputValue = '';
				} else {

					//点击发送按钮时，通知父组件用户输入的内容
					this.$emit('send-message', that.inputValue);
					that.inputValue = '';
					this.showPannel = false
				}
			},

			foc() {
				this.showPannel = false
				this.$emit('foc')
			},
		}
	}
</script>

<style>
	.footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 80upx;
		min-height: 80upx;
		border-top: solid 1px #bbb;
		overflow: hidden;
		padding: 5upx;
		background-color: #fafafa;
	}
	.footer-center{
		
	}
	.footer-center input {
		width: 82%;
		height: 30px;
		line-height: 30px !important;
		box-sizing: border-box;
		color: #4A4A4A;
		test-align:left;
		border: 1px solid #999;
		border-radius: 30upx;
		padding: 5px 5px 5px 10px;
	}
	
	.footer .footer-right {
		display: block;
		width: 15%;
		font-size: 16px;
		color: #4A4A4A;
		height: 30px;
		padding: 5px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
