<template>
	<view class="header">
		<image class="logo" src="../../static/img/login/logo.svg"></image>
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
		width: 70px;
		height: 65px;
		display: block;
		margin: 0 auto;
	}
	.logo image{
		width: 100%;
	}
	
	.slogan {
		color: #EFEFF4;
		font-size: 60upx;
		text-align: center;
	}
</style>
