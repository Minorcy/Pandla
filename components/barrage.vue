<template>
	<view>
		<view class="page-body">
			<view class="page-section">
				<video id="myVideo" src="http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4" @error="videoErrorCallback"
				 :danmu-list="danmuList" enable-danmu danmu-btn controls autoplay></video>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view>
							<view class="uni-label">弹幕内容</view>
						</view>
						<view class="uni-list-cell-db">
							<input @blur="bindInputBlur" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
						</view>
					</view>
				</view>
				<view class="btn-area">
					<button @tap="bindSendDanmu" class="page-body-button" formType="submit">發送弹幕</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'video',
				src: '',
				inputValue: '',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				]
			}
		},
		onReady: function(res) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			bindInputBlur: function(e) {
				this.inputValue = e.target.value
			},
			bindButtonTap: function() {
				var that = this
				uni.chooseVideo({
					sourceType: ['album', 'camera'],
					maxDuration: 60,
					camera: ['front', 'back'],
					success: function(res) {
						this.src = res.tempFilePath
					}
				})
			},
			bindSendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.inputValue,
					color: this.getRandomColor()
				})
			},
			videoErrorCallback: function(e) {
				console.log('视频错误信息:')
				console.log(e.target.errMsg)
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #131D21;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		top: 0;
		background-color: #131D21;
		z-index: 999;
	}

	.barrage-header-box {
		height: 82upx;
		width: 100%;
	}

	.barrage-header {
		position: fixed;
		left: 0;
		top: 0;
		height: 82upx;
		width: 100%;
		background-color: #131D21;
		border-bottom: 2upx solid #00D419;
	}




	//对应的css

	.fly {
		position: absolute;
		transform: translateX(10deg);
		animation: go .3s ease-in infinite;

	}

	@keyframes go {
		from {
			transform: translateX(100deg);
		}

		to {
			transform: translateX(100deg);
		}
	}
</style>
