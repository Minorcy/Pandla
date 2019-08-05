<template>
	<view class="pages-content">
		<view class="barImg">
			<text>營業執照</text>
			<image :src="barImg" @tap="uploadImg(1)" mode="aspectFit"></image>
		</view>
		<view class="licImg">
			<text>環境照片</text>
			<image :src="licImg1" @tap="uploadImg(2)" mode="aspectFit"></image>
			<image :src="licImg2" @tap="uploadImg(3)" mode="aspectFit"></image>
			<image :src="licImg3" @tap="uploadImg(4)" mode="aspectFit"></image>
			<image :src="licImg4" @tap="uploadImg(5)" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	import {
		getImgTemp,
		upload,
		setBar
	} from '../../api/api.js';
	export default {
		data() {
			return {
				barImg: '../../static/img/main/entertain/en-upload.svg',
				licImg1: '../../static/img/main/entertain/en-upload.svg',
				licImg2: '../../static/img/main/entertain/en-upload.svg',
				licImg3: '../../static/img/main/entertain/en-upload.svg',
				licImg4: '../../static/img/main/entertain/en-upload.svg',
				barInfo: {}
			}
		},
		methods: {
			uploadImg(type) {
				getImgTemp().then(data => {
						if (type == 1) {
							upload(data).then(data => {
								this.barInfo.license = data
								this.barImg = data;
							})
						}
						if (type == 2) {
							upload(data).then(data => {
								this.barInfo.picture = data
								this.licImg1 = data;
							})

						}
						if (type == 3) {
							upload(data).then(data => {
								this.barInfo.picture1 = data
								this.licImg2 = data;
							})
						}
						if (type == 4) {
							upload(data).then(data => {
								this.barInfo.picture2 = data								
								this.licImg3 = data;
							})
						}
						if (type == 5) {
							
							upload(data).then(data => {
								this.barInfo.picture3 = data								
								this.licImg4 = data;
							})
						}


					})

				}
		
	},
	onNavigationBarButtonTap() {
			if (this.barImg == '../../static/img/main/entertain/en-upload.svg') {
				uni.showToast({
					icon: 'none',
					title: '請上傳環境相圖片'
				});
			} else if (this.licImg == '../../static/img/main/entertain/en-upload.svg') {
				uni.showToast({
					icon: 'none',
					title: '請上傳營業執照圖片'
				});
			} else {
				console.log(this.barInfo)
				setBar(this.barInfo).then(data => {
					uni.showToast({
						icon: 'none',
						title: '上传成功,請等待審核'
					})
					setTimeout(function() {
						uni.navigateTo({
							url: 'entertain'
						});
					}, 2000)
				})

			}
		},

		onLoad(options) {
			this.barInfo = JSON.parse(options.barInfo)
			console.log(this.barInfo)
		}
	}
</script>

<style lang="scss" scoped>
	view text {
		display: block
	}

	image {
		width: 50%;
		height: 375upx;
	}

	.barImg {
		text {
			text-align: center;
			font-size: 18px;
			margin: 5px;
		}

		image {
			width: 100%
		}
	}

	.licImg {
		text {
			text-align: center;
			font-size: 18px;
			margin: 5px;
		}

		image {}
	}
</style>
