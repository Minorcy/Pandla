<template>
	<view class="token-box">
		<view class="token" :class="{'animation-one':index%2==0,'animation-two':index%2!=0}">
			<image class="token-icon" src="../../static/img/main/token.png"></image>
		    <p class="tokenValue">{{tokenValue}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ["tokenValue","index"],
		mounted(){
			// console.log("index",this.index);
		}
	}
</script>

<style>
	.token-box{
		position: relative;
		width: 150upx;
		height: 150upx;
	}
	.token {
		position: absolute;
		z-index: 999;
		width: 128upx;
		height: 128upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.animation-one{
		-webkit-animation-name: bird;
		-webkit-animation-duration: 5s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-iteration-count: infinite;
		-moz-animation-name: bird;
		-moz-animation-duration: 5s;
		-moz-animation-timing-function: linear;
		-moz-animation-iteration-count: infinite;
		-o-animation-name: bird;
		-o-animation-duration: 5s;
		-o-animation-timing-function: linear;
		-o-animation-iteration-count: infinite;
		-ms-animation-name: bird;
		-ms-animation-duration: 5s;
		-ms-animation-timing-function: linear;
		-ms-animation-iteration-count: infinite;
		animation-name: bird;
		animation-duration: 5s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	.animation-two{
		-webkit-animation-name: bird;
		-webkit-animation-duration: 3s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-iteration-count: infinite;
		-moz-animation-name: bird;
		-moz-animation-duration: 3s;
		-moz-animation-timing-function: linear;
		-moz-animation-iteration-count: infinite;
		-o-animation-name: bird;
		-o-animation-duration: 3s;
		-o-animation-timing-function: linear;
		-o-animation-iteration-count: infinite;
		-ms-animation-name: bird;
		-ms-animation-duration: 3s;
		-ms-animation-timing-function: linear;
		-ms-animation-iteration-count: infinite;
		animation-name: bird;
		animation-duration: 3s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	.token-icon {
		width: 48upx;
		height: 48upx;
	}
	
	.tokenValue {
		margin-left: -15upx;
		font-size: 25upx;
	}
	@-webkit-keyframes bird{
     0% {
         -moz-transform: translate(0,0);
         -webkit-transform: translate(0,0);
         -o-transform: translate(0,0);
         -ms-transform: translate(0, 0);
         transform: translate(0,0);
     }
 
     25% {
         -moz-transform: translate(0,-10upx);
         -webkit-transform: translate(0,-10upx);
         -o-transform: translate(0,-10upx);
         -ms-transform: translate(0, -10upx);
         transform: translate(0,-10upx);
     }
     50% {
         -moz-transform: translate(0,-20upx);
         -webkit-transform: translate(0,-20upx);
         -o-transform: translate(0,-20upx);
         -ms-transform: translate(0, -20upx);
         transform: translate(0,-20upx);
     }
 
      75% {
         -moz-transform: translate(0,-10upx);
         -webkit-transform: translate(0,-10upx);
         -o-transform: translate(0,-10upx);
         -ms-transform: translate(0, -10upx);
         transform: translate(0,-10upx);
     }
 
      100% {
         -moz-transform: translate(0,0);
         -webkit-transform: translate(0,0);
         -o-transform: translate(0,0);
         -ms-transform: translate(0, 0);
         transform: translate(0,0);
     }
}
</style>
