<template>
	<view class="header">
		<image class="logo" src="../../static/img/logo.png"></image>
		<text class="slogan">{{slogan}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ["slogan"]
	}
</script>

<style scoped="true">
	.header {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	
	.logo {
		width: 160upx;
		height: 150upx;
		display: block;
		margin: 0 auto;
	}
	
	.slogan {
		color: #EFEFF4;
		font-size: 60upx;
		text-align: center;
	}
</style>
