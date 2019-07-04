<template>
	<view class="pages-content">
		<view class="input-section">
			<image :src="imgTemp" mode="aspectFill"/>
			<input v-model="dynContent" placeholder="写下你这刻的想法~~~" />
		</view>
		<view class="option-section">
			<button class="primary" hover-class="hover-primary">
				<image src="../../static/img/main/entertain/map.svg"></image>
				{{location}}
			</button>
			<button class="primary" hover-class="hover-primary">
				<image src="../../static/img/main/daily/user.png"></image>
				{{showType}}
			</button>
			<button class="primary" hover-class="hover-primary">
				<image src="../../static/img/main/daily/aite.svg"></image>
				{{remain}}
			</button>
		</view>
	</view>
</template>

<script>
	import {upload, createDyn} from '../../api/api.js';
	export default {
		data() {
			return {
				imgTemp: this.$store.state.imgTemp,
				dynContent: '',
				location: '所在位置',
				showType: '誰可以看',
				remain: '提醒誰看'
			}
		},
		onNavigationBarButtonTap() {
			upload(this.imgTemp).then(data => {
				if(data != '') {
					createDyn(this.dynContent).then(data => {
						if(data) {
							uni.navigateBack({
								delta: 1
							});
						}
					});
				}
			});
		}
	}
</script>

<style scoped>
	.input-section{
		width: 100%;
		height: 600upx;
		margin-top: 40upx;
		font-size: 30upx;
		padding: 20upx;
	}
	
	.option-section {
		display: flex;
		flex-direction: column;
		padding: 20upx;
		border-top: 1upx solid #4CD964;
	}
	
	.option-section image {
		width: 40upx;
		height: 40upx;
		margin: 20upx 10upx 0 0;
	}
	
	.primary {
		justify-content: flex-start;
		margin: 20upx 0;
		border-bottom: 1upx solid #4CD964;
	}
	
	image {
		width: 350upx;
		height: 350upx;
		margin-bottom: 50upx;
	}
</style>
