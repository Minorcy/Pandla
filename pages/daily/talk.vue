<template>
	<view class="page">
		<view class="header">
			<image class="back" src="../../static/img/main/back.svg" @tap="goBack()"></image>
			<image class="logo" src="../../static/img/main/logo.svg"></image>
			<image class="camera" src="../../static/img/main/daily/camera.svg" @tap="publishDyn()"></image>
		</view>
		<hr>
		<view class="title">
			<text>    123131313123123123112131</text>
		</view>
		<view class="img">
			<image src="../../static/img/daily/1.png"></image>
			<image src="../../static/img/daily/2.png"></image>
			<image src="../../static/img/daily/3.png"></image>
			<image src="../../static/img/daily/4.png"></image>
		</view>
		<button class="but" type="primary" @tap="goDaily()">查看日志</button>
	</view>
</template>

<script>
	export default {
		methods: {
			goDaily() {
				uni.navigateTo({
					url: "./daily"
				});
			}
		},
		onReachBottom() {
			console.log("1111")
		}
	}
</script>

<style>
	.page {
		width: 100%;
		height: 100%;
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
		hr {
		margin-top: 10upx;
		height: 3upx;
		border: none;
		background-color: #4CD964;
	}

	.title {
		color: #FFFFFF;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
	}

	image {
		width: 100%;
		height: 100px;
		margin: 5px 0;
	}

	.but {
		margin-top: 20px;
	}
</style>
