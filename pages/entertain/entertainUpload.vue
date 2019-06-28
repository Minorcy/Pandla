<template>
	<view class="pages-content">
		<view class="btn-label">
			<button>酒吧相冊</button>
			<button>營業執照</button>
		</view>
		<view>
			<image :src= "barImg" @tap="uploadImg(2)"></image>
			<image :src= "licImg" @tap="uploadImg(3)"></image>
		</view>
	</view>
</template>

<script>
	import {getImgTemp, upLogo} from '../../api/api.js';
	export default {
		data() {
			return {
				barImg: '../../static/img/main/entertain/en-upload.svg',
				licImg: '../../static/img/main/entertain/en-upload.svg'
			}
		},
		methods: {
			uploadImg(type) {
				getImgTemp().then(data => {
					if(type == 2) this.barImg = data;
					if(type == 3) this.licImg = data;
				});
			}
		},
		onNavigationBarButtonTap() {
			if(this.barImg == '../../static/img/main/entertain/en-upload.svg') {
				uni.showToast({
					icon: 'none',
					title: '請上傳酒吧相冊圖片'
				});
			} else if(this.licImg == '../../static/img/main/entertain/en-upload.svg') {
				uni.showToast({
					icon: 'none',
					title: '請上傳營業執照圖片'
				});
			} else {
				upLogo(this.barImg, 2);
				upLogo(this.licImg, 3);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn-label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	button {
		width: 50%;
		border-radius: 0;
		background-color: #D1D1D6;
	}
	
	image {
		width: 50%;
		height: 375upx;
	}
</style>
