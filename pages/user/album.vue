<template>
	<view class="user-page">
		<view class="userInfo">
			<image class="avatar" src="../../static/img/user/upload.png" v-if="userInfo.portrait == null" mode="aspectFill"></image>
			<image class="portrait" :src="userInfo.portrait" @tap="preview('por')" mode="aspectFill" v-else />
			<text class="info-name">{{userInfo.name}}</text>
			<text class="info-content">{{userInfo.age}}/{{userInfo.stature}}cm/{{userInfo.weight}}kg</text>
			<text>{{userInfo.signature}}</text>
		</view>
		<view class="statusInfo">
			<view>
				<image src="../../static/img/main/daily/time.svg"></image>
				<text>{{lastTime}}</text>
			</view>

			<view>
				<image src="../../static/img/main/daily/country.svg"></image>
				<text>{{userInfo.site}}</text>
			</view>
		</view>
		<text class="no-dyInfo" v-if="!dynInfo.length">你还没有照片,赶紧去发动态吧!</text>
		<view class="dynInfo">
			<view class="dynInfo-item" v-for="(item, index) in dynInfo" :key="index">
				<image :src="item.images" mode="aspectFill" @tap="preview('dyn', index)" lazy-load="true"></image>
				<view v-if="!isMe" class="delete" @tap="deleteDyn(item.id,index)"><image src="../../static/img/user/delete.svg" mode=""></image></view>
			</view>
		</view>
		<!-- <view class="loading-btn">
			<text>点击查看更多</text>
		</view> -->
		<view class="btn" v-if="isMe">
			<view class="btn-follow" @tap="follow()">
				<image src="../../static/img/daily/follow.svg" mode="widthFix" v-if="isFollow == 0"></image>
				<image src="../../static/img/daily/fans.svg" mode="widthFix" v-if="isFollow == 1"></image>
				<image src="../../static/img/daily/mutual.svg" mode="widthFix" v-if="isFollow == 2"></image>
			</view>
			<view class="btn-msg" @tap="enterChat()">
				<image src="../../static/img/daily/msg.svg" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '@/common/utils'
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import {
		getInfo,
		getDyn,
		checkIsCon,
		concern,
		getLastTime,
		getFans,
		deleteDyn

	} from '@/api/api.js';

	export default {
		data() {
			return {
				userInfo: '',
				dynInfo: '',
				statusInfo: '',
				uid: '',
				distance: '',
				isFollow: 0,
				isMe: true,
				lastTime: '',
				fnasList: '',
				loadingCount:9
			}
		},
		methods: {
			getUserInfo() {
				getInfo(this.uid).then(data => {
					this.userInfo = data;
					if (this.userInfo.signature == null || this.userInfo.signature == '') {
						this.userInfo.signature = '這家夥很懶，還沒有簽名';
					}
					// console.log(data)
				});
				getDyn(this.uid, 0).then(data => {
					this.dynInfo = data;
					// console.log(data)
				});
				getLastTime(this.uid).then(data => {
					if (data == '') {
						this.lastTime = "一天前"
						return
					}
					
					this.lastTime = util.formatDate(Number(data), true)
				});
				getFans().then(data => {
					this.fnasList = data;
					// console.log(data);
				});

			},
			deleteDyn(id, index) {
				var that = this
				uni.showModal({
					title: '',
					content: '确定删除照片',
					success: function(res) {
						if (res.confirm) {
							deleteDyn(id).then(data => {
								that.dynInfo.splice(index, 1)
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			getIsCon() {
				checkIsCon(this.uid).then(data => {
					this.isFollow = data
					// console.log(this.isFollow)
				})
			},
			follow() {
				if (this.isFollow == 1) {
					concern(2, this.uid)
					this.isFollow = 0

				} else if (this.isFollow == 0) {
					concern(1, this.uid)
					for (let i = 0, leng = this.fnasList.length; i < leng; i++) {
						if (this.fnasList[i].id == this.uid) {
							this.isFollow = 2
							return
						}
					}
					this.isFollow = 1
				}
			},
			enterChat() {
				uni.navigateTo({
					url: '/pages/msg/chat?id=' + `p2p-${this.uid}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			preview(type, index) {
				let imgUrl = [];
				for (let i = 0; i < this.dynInfo.length; i++) {
					imgUrl.push(this.dynInfo[i].images)
				}
				if (type == 'por') imgUrl = [this.userInfo.portrait];
				if (type == 'dyn') imgUrl = imgUrl;
				// uni.previewImage({
				// 	current:index,
				// 	urls: imgUrl,
				// 	longPressActions: {
				// 		itemList: ["保存相冊"],
				// 		success: function(data) {
				// 			console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				// 		},
				// 		fail: function(err) {
				// 			console.log(err.errMsg);
				// 		}
				// 	}
				// });

				uni.previewImage({
					current: index,
					urls: imgUrl,
				});
			}
		},
		onReachBottom() {
			if(this.dynInfo.length < 9 ){
				return
			}
			uni.showLoading({
			    title: '加载中'
			});
			getDyn(this.uid, this.loadingCount).then(data => {
				this.dynInfo = this.dynInfo.concat(data) ;
				uni.hideLoading();
				this.loadingCount += 9
				console.log(this.dynInfo)
			});
		},
		onLoad(option) {
			// console.log(option.uid);
			this.uid = option.uid;


			// console.log(option.distance)
			var isMeid = uni.getStorageSync("USERS_KEY").id
			if (this.uid == isMeid) {
				this.isMe = false
				uni.setNavigationBarTitle({
					title: "我的主頁"
				});
			}
		},
		filters: {
			stringifyDate(datetime) {
				datetime = Number(datetime)
				return util.formatDate(datetime, true)
			}
		},
		onShow() {
			this.getUserInfo();
			this.getIsCon()
		}
	}
</script>

<style scoped>
	.user-page {
		background-color: #FFFFFF;
		width: 100%;
	}

	.userInfo {
		height: 172px;
		position: relative;
		display: flex;
		flex-direction: column;
		margin-top: 50upx;
		color: #000000;

	}

	.no-dyInfo {
		width: 80%;
		display: block;
		font-size: 16px;
		color: #4A4A4A;
		line-height: 1.5;
		padding: 10px;
		margin: auto;
		text-align: center;
	}

	.portrait {
		width: 80px;
		height: 80px;
		margin: 0 auto;
		border-radius: 50%;
		overflow: hidden;
	}

	.avatar {
		width: 80px;
		height: 80px;
		margin: 0 auto;
		border-radius: 50%;
	}

	/* .userInfo::after {
		content: "";
		position: absolute;
		width: 90px;
		height: 90px;
		top: 50%;
		left: 50%;
		box-sizing: border-box;
		margin-top: -91px;
		margin-left: -45px;
		border: 1px solid#CCCCCC;
		border-radius: 50%;
	} */

	.userInfo text {
		font-size: 14px;
		text-align: center;
		margin: 5upx 0 5upx 0;
	}

	.userInfo .user-name {
		font-size: 12px;
	}

	/* 状态 */
	.statusInfo {
		display: flex;
		height: 30px;
		justify-content: space-around;
		margin: 40upx 5px;
		background-color: #8E8E93;
	}

	.statusInfo view {
		/* height: 30px; */
		background-color: #8E8E93;
		border-radius: 5upx;
		padding: 5px 5px;
		/* vertical-align:middle; */
		/* line-height: 30px; */
		display: flex;
		align-items: center;
	}

	.statusInfo image {
		width: 25upx;
		height: 25upx;

		/* float: left;
		top: 2px; */
	}

	.statusInfo text {
		color: #F0F0F0;
		font-size: 24upx;
		/* margin-left: 10upx;
		 float: right; */
	}

	/* 动态列表 */
	.dynInfo {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		background-color: #FFFFFF;
		padding-top: 10px;
		padding-bottom: 100px;
	}

	.dynInfo-item {
		width: 31%;
		height: 250upx;
		padding: 5upx;
		margin: 5upx;
		position: relative;
	}

	.dynInfo-item image {
		width: 100%;
		height: 250upx;
		/* padding: 5upx;
		margin: 5upx; */

	}

	.dynInfo-item .delete {
		position: absolute;
		width: 16px;
		height: 16px;
		top: 4px;
		right: 4px;
		z-index: 9;
		font-size: 14px;
		text-align: center;
		line-height: 15px;
		color: #000000;
		
	}
	.delete image{
		width: 16px;
		height: 16px;
	}
	.btn {
		position: fixed;
		width: 100%;
		height: 80upx;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		bottom: 50upx;
		display: flex;
		justify-content: space-around;
	}

	.btn view {
		display: inline-block;
		width: 30%;
		height: 100%;
	}

	.btn view image {
		width: 100%;
	}
</style>
