<template>
	<view class="page">
		<view class="top">
			<text>郵箱：<text class="blue">doc@pandla.io</text></text>
			<text>Facebook：<text class="blue">Pandla Planet</text></text>
			<text>微信公眾號：<text class="blue">PANDLA</text></text>
		</view>
		<view class="img">
			<image src="../../static/img/user/contact.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.top text .blue {
		color: #4A90E2;
		display: inline-block;
	}
	
	.top {
		margin-top: 20px;
	}
	
	.top text {
		display: block;
		font-size: 14px;
	}
	.img{
		width: 50%;
		margin: 30px 0;
	}
	.img image{
		width: 150px;
	
	}
</style>
