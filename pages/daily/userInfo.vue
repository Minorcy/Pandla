<template>
    <view class="pages-content">
		<view class="userInfo">
			<image class="avatar" src="../../static/img/user/upload.svg" v-if="userInfo.portrait == null"></image>
			<image class="portrait"
				:src="userInfo.portrait"
				@tap="preview('por')"
				mode="aspectFill"
				v-else/>
			<p>{{userInfo.name}}</p>
			<p>{{userInfo.age}}/{{userInfo.stature}}cm/{{userInfo.weight}}kg</p>
			<p>{{userInfo.signature}}</p>
		</view>
		<view class="statusInfo">
			<view>
				<image src="../../static/img/main/daily/time.svg"></image>
				<text>16分鐘</text>
			</view>
			<view>
				<image src="../../static/img/main/entertain/map.svg"></image>
				<text>0.5km</text>
			</view>
			<view>
				<image src="../../static/img/main/daily/country.svg"></image>
				<text>香港</text>
			</view>
		</view>
		<view class="dynInfo">
			<image
				:src="item"
				mode="aspectFill"
				v-for="(item, index) in dynInfo"
				:key="index"
				@tap="preview('dyn')"></image>
		</view>
		<image class="btn-con" src="../../static/img/main/daily/connect.svg"></image>
    </view>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
	import {getInfo,getDyn} from '../../api/api.js';

    export default {
		data() {
			return {
				userInfo: '',
				dynInfo: '',
				statusInfo: '',
				uid: ''
			}
		},
        methods: {
			getUserInfo() {
				getInfo(this.uid).then(data => {
					this.userInfo = data;
				});
				getDyn(this.uid).then(data => {
					this.dynInfo = data.resp;
					// console.log(this.dynInfo);
				});
			},
			preview(type) {
				let imgUrl = [];
				if(type == 'por') imgUrl = [this.userInfo.portrait];
				if(type == 'dyn') imgUrl = this.dynInfo;
				uni.previewImage({
					urls: imgUrl,
					longPressActions: {
						itemList: [],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
        },
		onLoad(option) {
			// console.log(option.uid);
			this.uid = option.uid;
		},
		onShow() {
			this.getUserInfo();
		}
    }
</script>

<style scoped="true">
	.userInfo {
		display: flex;
		flex-direction: column;
		margin-top: 50upx;
	}
	
	.portrait {
		width: 150upx;
		height: 150upx;
		margin: 0 auto;
		margin-bottom: 30upx;
		border-radius: 100%;
	}
	
	.avatar {
		width: 150upx;
		height: 150upx;
		margin: 0 auto;
		margin-bottom: 30upx;
	}
	
	.userInfo p {
		font-size: 25upx;
		text-align: center;
		margin: 5upx 0 5upx 0;
	}
	
	.userInfo p:nth-child(2) {
		font-size: 40upx;
	}
	
	/* 状态 */
	.statusInfo {
		display:  flex;
		justify-content: space-between;
		padding: 40upx 100upx;
	}
	
	.statusInfo view {
		background-color: #8E8E93;
		border-radius: 5upx;
		padding: 5upx 30upx;
	}
	
	.statusInfo image {
		width: 25upx;
		height: 25upx;
		float: left;
	}
	
	.statusInfo text {
		font-size: 20upx;
		margin-left: 10upx;
		float: right;
	}
	
	/* 动态列表 */
	.dynInfo {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		margin-top: 50upx;
		padding: 1upx;
	}
	
	.dynInfo image {
		width: 31%;
		height: 250upx;
		padding: 5upx;
		margin: 5upx;
	} 
	
	.btn-con {
		position: absolute;
		width: 400upx;
		height: 100upx;
		left: 0;
		right: 0;
		margin-left: auto; 
		margin-right: auto; 
		bottom: 50upx;
	}
</style>
