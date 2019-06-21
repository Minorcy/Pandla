<template>
	<view class="token">
		<image class="token-icon" src="../../static/img/main/token.png"></image>
		<p class="tokenValue">{{tokenValue}}</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ["tokenValue"]
	}
</script>

<style>
	.token {
		width: 128upx;
		height: 128upx;
		float: left;
	}
	
	.token-icon {
		width: 48upx;
		height: 48upx;
	}
	
	.tokenValue {
		margin-left: -15upx;
		font-size: 25upx;
	}
</style>
