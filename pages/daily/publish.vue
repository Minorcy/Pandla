<template>
	<view class="publish-page">
			<view class="textarea">
			<textarea v-model="dynContent" placeholder="寫下你這刻的想法~~~" />
			</view>
			<view class="img">
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
			<view class="bottom">
				<text>不允許發裸露和涉及政治的內容，搬運內容被原創者舉報將會被降級</text>
			</view>
		
	</view>
</template>

<script>
	
	import {
		upload,
		createDyn,
		getImgTemp,
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
				flog: true
			}
		},
		methods: {
			toLocation() {
				var that = this
				uni.chooseLocation({
					success: function(res) {
						that.address = res.name
						that.location = res.name
						that.latitude =res.latitude
						that.longitude =res.longitude
					}
				});
			}
		},
		onNavigationBarButtonTap() {
			if (!this.flog) {
				return
			}
			this.flog = false
			setTimeout(()=>{
				this.flog = true
			},5000)
			console.log(this.latitude,this.longitude)
			upload(this.imgTemp).then(data => {
				// console.log(data)
				if (data != '') {
					createDyn(this.dynContent, data,this.address,this.latitude,this.longitude).then(data => {
						if (data) {
							const that = this;
							var pages = getCurrentPages(); //当前页面栈  
							if (pages.length > 1) {  
							    var beforePage = pages[pages.length - 3]; //获取上一个页面实例对象  
							    beforePage.$vm.findDyn(); //触发父页面中的方法change()  this.findDyn()
							 }  
							uni.switchTab({
							    url: '/pages/daily/daily'
							});
						}
						
					});
				}
				
			});
		},
		
	}
</script>

<style scoped>
	.publish-page{
		width: 100%;
		
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
	.textarea {
		width: 100%;
		box-sizing: border-box;
		height: 100px;
		font-size: 30upx;
		padding: 20upx;
		position: relative;
	}
textarea{
	width: 100%;
	height: 100%;
}
	.img image {
		padding: 20upx;
		width: 360upx;
		height: 360upx;
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
	.bottom{
		width: 100%;
		margin-top: 100rpx;
		padding: 10px;
		box-sizing: border-box;
	}
	.bottom text{
		color: #CCCCCC;
	}
</style>
