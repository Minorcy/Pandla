<template>
	<view class="settingChat">
		<view class="settingChat-wrapper">
			<view class="settingChat-item">
				<text class="setting-text">聲音</text>
				<switch :checked="voice" @change="switch1Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">震動</text>
				<switch :checked="shock" @change="switch2Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">系統提醒</text>
				<switch :checked="system" @change="switch3Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">私信提醒</text>
				<switch :checked="indirectly" @change="switch4Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">被關注提醒</text>
				<switch :checked="fans" @change="switch5Change" style="transform:scale(0.7)" />
			</view>
			<view class="settingChat-item">
				<text class="setting-text">日誌評論提醒</text>
				<switch :checked="log" @change="switch6Change" style="transform:scale(0.7)" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "settingChat",
		data() {
			return {
				voice: true,
				shock: true,
				system: true,
				indirectly: true,
				fans: true,
				log: true
			}
		},

		methods: {
			switch1Change(e) {
				this.$store.commit('setVoice', e.detail.value)
				this.voice = e.detail.value
			},
			switch2Change(e) {
				this.$store.commit('setShock', e.detail.value)
				this.shock = e.detail.value
			},
			switch3Change(e) {
				this.$store.commit('setSystem', e.detail.value)
				this.system = e.detail.value
			},
			switch4Change(e) {
				this.$store.commit('setIndirectly', e.detail.value)
				this.indirectly = e.detail.value
			},
			switch5Change(e) {
				this.$store.commit('setFans', e.detail.value)
				this.fans = e.detail.value
			},
			switch6Change(e) {
				this.$store.commit('setLog', e.detail.value)
				this.log = e.detail.value
			}
		},
		onLoad() {
			this.voice = this.$store.state.defaultSettings.voice
			this.shock = this.$store.state.defaultSettings.shock
			this.system = this.$store.state.defaultSettings.system
			this.indirectly = this.$store.state.defaultSettings.indirectly
			this.fans = this.$store.state.defaultSettings.fans
			this.log = this.$store.state.defaultSettings.log
		},
		onBackPress() {
			var defaultSettings={
				voice:this.voice,
				shock:this.shock,
				system :this.system,
				indirectly:this.indirectly,
				fans:this.fans,
				log:this.log
			}
			uni.setStorageSync('defaultSettings_key', defaultSettings);
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

		.settingChat-item:nth-last-of-type(1) {
			border: none;
		}
	}

	.settingChat-wrapper {
		width: 100%;
		box-sizing: border-box;
		padding-left: 28upx;
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
