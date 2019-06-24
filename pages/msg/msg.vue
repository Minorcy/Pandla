<template>
	<view class="chat-box" :style="{'min-height':height}">
		<view class="header-box">
			<view class="search-box" :style="{'top':headerTop}">
				<view class="search-input">
					<text class="m-icon m-icon-search"></text>
					<input type="text" placeholder="查询" placeholder-style="color:#CBCBCB;font-size:25upx;font-weight:400;" class="input"
					 v-model="searchValue" />
				</view>
			</view>
		</view>
		<view class="chat-wrapper">
			<view class="chat-item" v-for="(item,index) in 3" :key="index">
				<view class="logo-box">
					<image src="" class="logo"></image>
				</view>
				<view class="item-details">
					<view class="item-title">
						<text class="name">靓仔</text>
						<text class="time">18:59</text>
					</view>
					<view class="item-content">
						<text class="distance">[0.05Km]</text>
						<text class="chat-content">Hello Wrod</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "chat",
		data() {
			return {
				height: "603px", //手机屏幕高度
				searchValue: "", //搜索值
				headerTop: "", //头部高度
			}
		},
		components: {

		},
		onReady() {
			uni.getSystemInfo({ //获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高
				success: (res) => {
					console.log("res", res);
					this.height = res.screenHeight + 'px';
					this.headerTop = res.windowTop + 'px';
				}
			});
		},
		onNavigationBarButtonTap(e) {
			uni.showActionSheet({
				itemList: ['忽略未读提醒', '清空聊天列表', '提醒设置'],
				success: function(res) {
					console.log('选中了第' + (res.tapIndex) + '个按钮');
				},
				fail: function(res) {
					console.log(res.errMsg);
				}
			});
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	.chat-box {
		width: 100%;
	}

	.chat-wrapper {
		width: 100%;

		.chat-item {
			width: 100%;
			height: 174upx;
			box-sizing: border-box;
			padding-left: 28upx;
			padding-top: 40upx;
			display: flex;

			.logo-box {
				margin-right: 26upx;

				.logo {
					width: 120upx;
					height: 120upx;
					border-radius: 50%;
					background-color: #f5f5f5;
				}
			}

			.item-details {
				flex: 1;
				height: 100%;
				border-bottom: 1upx solid #979797;

				.item-title {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.name {
						font-size: 32upx;
						font-weight: 600;
						color: #000;
					}

					.time {
						margin-right: 24upx;
						font-size: 24upx;
						color: #A5A6B2;
					}
				}

				.item-content {
					margin-top: 20upx;
					font-size: 26upx;
					color: #8B8B8B;
				}
			}
		}
	}

	.search-box {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 66;
		width: 100%;
		box-sizing: border-box;
		padding: 28upx 40upx;

		.search-input {
			width: 100%;
			height: 60upx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #f4f4f4;
			border-radius: 40upx;
			position: relative;

			.m-icon-search {
				position: absolute;
				left: 10upx;
				color: #CBCBCB;
				font-size: 40upx;
			}

			.input {
				width: 100%;
				height: 60upx;
				line-height: 60upx;
				box-sizing: border-box;
				border: none;
				background: none;
				padding-left: 10upx;
				font-size: 24upx;
				padding-left: 60upx;
			}
		}
	}

	.chat-box {
		width: 100%;
		background-color: #fff;
	}

	.chat-wrapper {
		width: 100%;
	}

	.header-box {
		width: 100%;
		height: 120upx;
	}
</style>
