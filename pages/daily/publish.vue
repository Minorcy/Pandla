<template>
	<view class="publish-page">
		<view class="input-section">
			<input v-model="dynContent" placeholder="写下你这刻的想法~~~" />
			<image :src="imgTemp" mode="aspectFill" />
		</view>
		<view class="option-section">
			<view>
				<image src="../../static/img/daily/publish/map.svg"></image>
				<text @tap="toLocation">{{location}}</text>
			</view>
			<view>
				<image src="../../static/img/daily/publish/user.svg"></image>
				<text>{{showType}}</text>
			</view>
			<view>
				<image src="../../static/img/daily/publish/aite.svg"></image>
				<text>{{remain}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		upload,
		createDyn
	} from '../../api/api.js';
	export default {
		data() {
			return {
				imgTemp: this.$store.state.imgTemp,
				dynContent: '',
				address:'',
				latitude:'',
				longitude:'',
				location: '所在位置',
				showType: '誰可以看',
				remain: '提醒誰看',
				flog: false
			}
		},
		methods: {
			toLocation() {
				// uni.navigateTo({
				// 	url:"location"
				// })
				var that = this
				uni.chooseLocation({
					success: function(res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						that.address = res.name
						that.location = res.name
						that.latitude =res.latitude
						that.longitude =res.longitude
					}
				});
			}
		},
		onNavigationBarButtonTap() {
			if (this.flog) {
				return
			}
			this.flog = true
			console.log(this.latitude,this.longitude)
			
			upload(this.imgTemp).then(data => {
				// console.log(data)
				if (data != '') {
					createDyn(this.dynContent, data,this.address,this.latitude,this.longitude).then(data => {
						if (data) {
							uni.redirectTo({
								url: 'daily'
							});
						}
						this.flog = false
					});
				}

			});
		}
	}
</script>

<style scoped>
	.publish-page{
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
	.input-section {
		width: 100%;
		box-sizing: border-box;
		height: 600upx;
		font-size: 30upx;
		padding: 20upx;
		position: relative;
	}

	.input-section image {
		position: absolute;
		bottom: 0;
		left: 10px;
	}

	.option-section {
		display: flex;
		flex-direction: column;
		padding: 20upx;
		border-top: 1upx solid #999;
	}

	.option-section image {
		display: inline-block;
		width: 40upx;
		height: 40upx;
		margin: 20upx 10upx 0 0;
		margin-right: 20px;
	}

	.option-section view {
		display: flex;
		flex-direction: row;
		align-items: end;
		margin: 10px;

	}

	.option-section view text {
		display: inline-block;
		font-size: 16px;
		width: 85%;
		border-bottom: 1px solid #CCCCCC;
		line-height: 1.5;
		padding: 5px;


	}

	image {
		width: 350upx;
		height: 350upx;
		margin-bottom: 50upx;
	}
</style>
