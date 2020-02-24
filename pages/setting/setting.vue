<template>
	<view class="setting">
		<view class="item" @tap="toIntroduce()">
			<text>關於PANDLA</text>
		</view>
		<view class="item" @tap="toApple()">
			<text>版本更新</text>
		</view>
		<view class="item" @tap="toBlacklist">
			<text>黑名單</text>
		</view>
		<view class="item" @tap="eliminate">
			<text >清除內存</text>
		</view>
		<view class="item" @tap="totermsofservice">
			<text >服務條款</text>
		</view>
		<view class="item" @tap="toPrivacypolicy">
			<text >隱私政策</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				}
		},
		methods: {
			toApple(){
				plus.runtime.openURL('https://apps.apple.com/us/app/pandla/id1473219750?l=zh&ls=1')
			},
			toIntroduce() {
				uni.navigateTo({
					url: "aboutPandla"
				});
			},
			toBlacklist(){
				uni.navigateTo({
					url: "blacklist"
				});
			},
			totermsofservice(){
				uni.navigateTo({
					url: "/pages/reg/termsofservice"
				});	
			},
			toPrivacypolicy(){
				uni.navigateTo({
					url: "/pages/reg/Privacypolicy"
				});
				
			},
			toContactUS(){
				uni.navigateTo({
					url: "contactUs"
				});
			},
			eliminate(){
				var that = this
				uni.showModal({
					title: '',
					content: '確定清除緩存',
					confirmText: "確定",
					success: function(res) {
						if (res.confirm) {
							
						} else if (res.cancel) {
							
						}
					}
				});
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.setting {
		width: 100%;
		background-color: #FFFFFF;
	}
	.item{
		width: 100%;
		height:40px;
		background-color: #F4F4F4;
		padding:  5px 10px;
		box-sizing: border-box;
		margin-bottom: 10px;
	}
	text{
		font-size: 14px;
		color: #4A4A4A;
		line-height: 1.5;
	}
	
</style>
