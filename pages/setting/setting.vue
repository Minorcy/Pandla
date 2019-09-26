<template>
	<view class="setting">
		<view class="item" @tap="toIntroduce()">
			<text>關於PANDLA</text>
		</view>
		<view class="item">
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
		<view class="item">
			<text>聯繫我們</text>
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
			toIntroduce() {
				uni.navigateTo({
					url: "introduce"
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
			eliminate(){
				var that = this
				uni.showModal({
					title: '',
					content: '确定清除缓存',
					success: function(res) {
						if (res.confirm) {
							// uni.removeStorage({
							//     key: 'storage_key',
							//     success: function (res) {
							//         console.log('success');
							//     }
							// });
							that.$store.state.nim.deleteAllLocalMsgs()
						} else if (res.cancel) {
							console.log('用户点击取消');
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
