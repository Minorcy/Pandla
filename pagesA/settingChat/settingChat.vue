<template>
	<view class="settingChat" :style="{'min-height':height}">
		<view class="settingChat-wrapper padTop">
			<view class="settingChat-item">
				<text class="setting-text">声音</text>
				<switch :checked="false" @change="switch1Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">震动</text>
				<switch :checked="false" @change="switch2Change" style="transform:scale(0.7)" />
			</view>
		</view>
		<view class="settingChat-wrapper">
			<view class="settingChat-item">
				<text class="setting-text">系统提醒</text>
				<switch :checked="false" @change="switch1Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">私信提醒</text>
				<switch :checked="false" @change="switch2Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">被关注提醒</text>
				<switch :checked="false" @change="switch2Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">日志评论提醒</text>
				<switch :checked="false" @change="switch2Change" style="transform:scale(0.7)" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "settingChat",
		data() {
			return {
				height: "603px", //手机屏幕高度
			}
		},
		onReady() {
			uni.getSystemInfo({ //获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高
				success: (res) => {
					this.height = res.screenHeight + 'px';
					//this.headerTop = res.windowTop + 'px';
				}
			});
		},
		methods: {
			switch1Change(e) {
				console.log("search", e);
				
			},
			switch2Change(e) {
				console.log("search", e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.settingChat {
		width: 100%;
		background-color: #E1E1E1;
	}

	.padTop {
		padding-top: 20upx;
		margin-bottom: 20upx;

		.settingChat-item:nth-last-of-type(1) {
			border: none;
		}
	}

	.settingChat-wrapper {
		width: 100%;
		box-sizing: border-box;
		padding-left: 28upx;
		padding-bottom: 100upx;
		background-color: #ffffff;

		.settingChat-item {
			width: 100%;
			height: 90upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding-right: 28upx;
			border-bottom: 1upx solid #C7C7CC;

			.setting-text {
				font-size: 30upx;
				color: #5F5F5F;
			}

			.borderNone {
				border: none;
			}
		}
	}
</style>
