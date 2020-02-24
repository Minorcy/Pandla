<!-- <template>
	<view class="user-page">
		<view class="userInfo">
			<image class="avatar" src="../../static/img/user/upload.png" v-if="userInfo.portrait == null"></image>
			<image class="portrait" :lazy-load="true" :src="userInfo.portrait" @tap="checkImg(userInfo.portrait)" mode="aspectFill" @error="imgError()"
			 v-else />
			<text class="user-name">{{userInfo.name}}</text>
			<text>{{userInfo.age}}/{{userInfo.stature}}cm/{{userInfo.weight}}kg/{{userInfo.acctType}}</text>
			<text>{{userInfo.signature}}</text>
		</view>
		<view class="statusInfo">
			<view>
				<image src="../../static/img/main/daily/time.svg"></image>
				<text>{{lastTime}}</text>
			</view>
			<view>
				<image src="../../static/img/welfare/map.svg"></image>
				<text v-if="distance"> {{distance | toFixed(2)}}km</text>
				<text v-if="!distance">未知</text>
			</view>
			<view>
				<image src="../../static/img/main/daily/country.svg"></image>
				<text>{{userInfo.site}}</text>
			</view>
		</view>
		<view class="no-dyInfo" v-if="isShow">
			<text class="gray">暫無相片</text>
		</view>
		<view class="dynInfo">
			<view class="dynInfo-item" v-for="(item, index) in dynInfo" :key="index" :class="{'active':item.active}">
				<image :src="item.images" mode="aspectFill" @tap="preview('dyn', index)" lazy-load="true"></image>
			</view>
		</view>
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
		deleteDyn,
		getToUserLocation,
		getDistance
	} from '../../api/api.js';

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
				loadingCount: 9,
				flog: false,
				isShow:false
			}
		},
		methods: {
			imgError() {
				this.userInfo.portrait = '../../static/img/error/defaultAvatar.png'
			},
			getUserInfo() {
				getInfo(this.uid).then(data => {
					this.userInfo = data;
					if (this.userInfo.signature == null || this.userInfo.signature == '') {
						this.userInfo.signature = '這家夥很懶，還沒有簽名';
					}
					this.userInfo.site = this.getArea(this.userInfo.site)
					// console.log(data)
				});
				getDyn(this.uid, 0).then(data => {
					console.log(data)
					this.dynInfo = data;
					if (!data) {
						this.isShow = true
						return
					}
					let index = 0;
					let show = () => {
						if (index < this.dynInfo.length) {
							this.$set(this.dynInfo[index], "active", true);
							index++;
						} else {
							clearInterval(interval);
						}
					}
					let interval = setInterval(() => {
						show();
					}, 100);
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
					url: '/pages/msg/testChat?id=' + this.uid,

				})
			},
			checkImg(src){
				var imgUrl = []
				imgUrl.push(src)
				uni.previewImage({
					urls: imgUrl
				});
			},
			preview(type, index) {
				let imgUrl = [];
				for (let i = 0; i < this.dynInfo.length; i++) {
					imgUrl.push(this.dynInfo[i].images)
				}
				if (type == 'por') imgUrl = [this.userInfo.portrait];
				if (type == 'dyn') imgUrl = imgUrl;
				uni.previewImage({
					current: index,
					urls: imgUrl,
				});
			},
			downCallback(mescroll) {
				console.log("2")
			},
			upCallback(mescroll) {
				mescroll.endSuccess();
				mescroll.endErr();
				console.log("1")
			},
			 getArea: function(str) {
			    let area = {}
			    let index11 = 0
			    let index1 = str.indexOf("省")
			    if (index1 == -1) {
			      index11 = str.indexOf("自治区")
			      if (index11 != -1) {
			        area.Province = str.substring(0, index11 + 3)
			      } else {
			        area.Province = str.substring(0, 0)
			      }
			    } else {
			      area.Province = str.substring(0, index1 + 1)
			    }
			 
			    let index2 = str.indexOf("市")
			    if (index11 == -1) {
			      area.City = str.substring(index11 + 1, index2 + 1)
			    } else {
			      if (index11 == 0) {
			        area.City = str.substring(index1 + 1, index2 + 1)
			      } else {
			        area.City = str.substring(index11 + 3, index2 + 1)
			      }
			    }
			 
			    let index3 = str.lastIndexOf("区")
			    if (index3 == -1) {
			      index3 = str.indexOf("县")
			      area.Country = str.substring(index2 + 1, index3 + 1)
			    } else {
			      area.Country = str.substring(index2 + 1, index3 + 1)
			    }
			    return area.City;
			  }
		},
		onReachBottom() {
			if (this.dynInfo.length < 9) {
				return
			}
			if (this.flog) {
				return
			}
			uni.showLoading({
				title: '加载中'
			});
			getDyn(this.uid, this.loadingCount).then(data => {
				console.log(data)
				if (!data) {
					clearInterval(interval);
					uni.hideLoading();
					this.flog = true
					// console.log("没有了")
					return
				}
				this.dynInfo = this.dynInfo.concat(data);
				let index = this.loadingCount;
				let show = () => {
					if (index < this.dynInfo.length) {
						this.$set(this.dynInfo[index], "active", true);
						index++;
					} else {
						clearInterval(interval);
					}
				}
				let interval = setInterval(() => {
					show();
				}, 100);
				if (!data) {
					clearInterval(interval);
					uni.hideLoading();
					return
				}
				uni.hideLoading();
				this.loadingCount += 9
				console.log(this.dynInfo)
			});
		},
		onLoad(option) {
			var that = this
			this.uid = option.uid;
			this.getUserInfo();
			this.getIsCon()
			var isMeid = uni.getStorageSync("USERS_KEY").id
			if (this.uid == isMeid) {
				this.isMe = false
				uni.setNavigationBarTitle({
					title: "我的主頁"
				});
			}
			getToUserLocation(this.uid).then(data=>{
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
				        // console.log('当前位置的经度：' + res.longitude);
				        // console.log('当前位置的纬度：' + res.latitude);
						getDistance(data.lat,data.lng,res.latitude,res.longitude).then(data=>{
							// console.log(data)
							that.distance = data
						})
				    },
					fail() {
						uni.showToast({
							icon: 'none',
							title: "獲取定位權限失敗"
						})
					}
				});
			})
				
			
			
		},
		filters: {
			stringifyDate(datetime) {
				datetime = Number(datetime)
				return util.formatDate(datetime, true)
			}
		}
	}
</script>

<style scoped>
	body,
	page {
		background-color: #FFFFFF;
		width: 100%;

	}

	.user-page {
		background-color: #FFFFFF;
		width: 100%;
		/* -webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
	 overflow-y: scroll; */
	}

	.userInfo {
		height: 172px;
		position: relative;
		display: flex;
		flex-direction: column;
		margin-top: 40upx;
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

	.more {
		display: block;
		margin: 10px auto;
		padding: 5px;

		text-align: center;
		line-height: 1.5;
		font-size: 12px;
		color: #4A4A4A;
		border: 1px solid #CCCCCC;
		border-radius: 10px;
	}

	.dynInfo-item {
		width: 31%;
		height: 250upx;
		padding: 5upx;
		margin: 5upx;
		position: relative;
		opacity: 0;
		transform: translateY(40upx);
		transition: all 0.3s ease-in-out 0s;




	}

	.active {
		opacity: 1;
		transform: translateY(0);
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
		background-color: rgba(255, 255, 255, 0.5);
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
 -->
 
 
 
 
 
 <template>
 	<view class="user-page">
 		<view class="userInfo">
 			<image class="avatar" src="../../static/img/user/upload.png" v-if="userInfo.portrait == null"></image>
 			<image class="portrait" :lazy-load="true" :src="userInfo.portrait" @tap="checkImg(userInfo.portrait)" mode="aspectFill" @error="imgError()"
 			 v-else />
 			<text class="user-name">{{userInfo.name}}</text>
 			<text>{{userInfo.age}}/{{userInfo.stature}}cm/{{userInfo.weight}}kg/{{userInfo.acctType}}</text>
 			<text>{{userInfo.signature}}</text>
 		</view>
 		<view class="statusInfo">
 			<view>
 				<image src="../../static/img/main/daily/time.svg"></image>
 				<text>{{lastTime}}</text>
 			</view>
 			<view>
 				<image src="../../static/img/welfare/map.svg"></image>
 				<text v-if="distance"> {{distance | toFixed(2)}}km</text>
 				<text v-if="!distance">未知</text>
 			</view>
 			<view>
 				<image src="../../static/img/main/daily/country.svg"></image>
 				<text>{{userInfo.site}}</text>
 			</view>
 		</view>
 		<view class="no-dyInfo" v-if="isShow">
 			<text class="gray">暫無相片</text>
 		</view>
 		<view class="dynInfo">
 			<view class="dynInfo-item" v-for="(item, index) in dynInfo" :key="index" :class="{'active':item.active}">
 				<image :src="item.images" mode="aspectFill" @tap="toDetails(index)" lazy-load="true"></image>
 			</view>
 		</view>
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
 		deleteDyn,
 		getToUserLocation,
 		getDistance,
		checkMeAllDyn
 	} from '../../api/api.js';
 
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
 				loadingCount: 9,
 				flog: false,
 				isShow:false
 			}
 		},
 		methods: {
 			imgError() {
 				this.userInfo.portrait = '../../static/img/error/defaultAvatar.png'
 			},
 			getUserInfo() {
 				getInfo(this.uid).then(data => {
 					this.userInfo = data;
 					if (this.userInfo.signature == null || this.userInfo.signature == '') {
 						this.userInfo.signature = '這家夥很懶，還沒有簽名';
 					}
 					this.userInfo.site = this.getArea(this.userInfo.site)
 					// console.log(data)
 				});
 				checkMeAllDyn(this.uid).then(data => {
 					console.log(data)
 					this.dynInfo = data;
 					if (!data) {
 						this.isShow = true
 						return
 					}
 					let index = 0;
 					let show = () => {
 						if (index < this.dynInfo.length) {
 							this.$set(this.dynInfo[index], "active", true);
 							index++;
 						} else {
 							clearInterval(interval);
 						}
 					}
 					let interval = setInterval(() => {
 						show();
 					}, 100);
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
 					url: '/pages/msg/chat?id=' + this.uid,
 
 				})
 			},
 			checkImg(src){
 				var imgUrl = []
 				imgUrl.push(src)
 				uni.previewImage({
 					urls: imgUrl
 				});
 			},
 			preview(type, index) {
 				let imgUrl = [];
 				for (let i = 0; i < this.dynInfo.length; i++) {
 					imgUrl.push(this.dynInfo[i].images)
 				}
 				if (type == 'por') imgUrl = [this.userInfo.portrait];
 				if (type == 'dyn') imgUrl = imgUrl;
 				uni.previewImage({
 					current: index,
 					urls: imgUrl,
 				});
 			},
			toDetails(index){
				uni.navigateTo({
					url:"userDyn?id="+this.uid+"&index="+index
				})
			},
 			downCallback(mescroll) {
 				console.log("2")
 			},
 			upCallback(mescroll) {
 				mescroll.endSuccess();
 				mescroll.endErr();
 				console.log("1")
 			},
 			getArea: function(str) {
 			    let area = {}
 			    let index11 = 0
 			    let index1 = str.indexOf("省")
 			    if (index1 == -1) {
 			      index11 = str.indexOf("自治区")
 			      if (index11 != -1) {
 			        area.Province = str.substring(0, index11 + 3)
 			      } else {
 			        area.Province = str.substring(0, 0)
 			      }
 			    } else {
 			      area.Province = str.substring(0, index1 + 1)
 			    }
 			 
 			    let index2 = str.indexOf("市")
 			    if (index11 == -1) {
 			      area.City = str.substring(index11 + 1, index2 + 1)
 			    } else {
 			      if (index11 == 0) {
 			        area.City = str.substring(index1 + 1, index2 + 1)
 			      } else {
 			        area.City = str.substring(index11 + 3, index2 + 1)
 			      }
 			    }
 			 
 			    let index3 = str.lastIndexOf("区")
 			    if (index3 == -1) {
 			      index3 = str.indexOf("县")
 			      area.Country = str.substring(index2 + 1, index3 + 1)
 			    } else {
 			      area.Country = str.substring(index2 + 1, index3 + 1)
 			    }
 			    return area.City;
 			  }
 		},
 		onReachBottom() {
 		
 		},
 		onLoad(option) {
 			var that = this
 			this.uid = option.uid;
 			this.getUserInfo();
 			this.getIsCon()
 			var isMeid = uni.getStorageSync("USERS_KEY").id
 			if (this.uid == isMeid) {
 				this.isMe = false
 				uni.setNavigationBarTitle({
 					title: "我的主頁"
 				});
 			}
 			getToUserLocation(this.uid).then(data=>{
 				uni.getLocation({
 				    type: 'wgs84',
 				    success: function (res) {
 				        // console.log('当前位置的经度：' + res.longitude);
 				        // console.log('当前位置的纬度：' + res.latitude);
 						getDistance(data.lat,data.lng,res.latitude,res.longitude).then(data=>{
 							// console.log(data)
 							that.distance = data
 						})
 				    },
 					fail() {
 						uni.showToast({
 							icon: 'none',
 							title: "獲取定位權限失敗"
 						})
 					}
 				});
 			})
 				
 			
 			
 		},
 		filters: {
 			stringifyDate(datetime) {
 				datetime = Number(datetime)
 				return util.formatDate(datetime, true)
 			}
 		}
 	}
 </script>
 
 <style scoped>
 	body,
 	page {
 		background-color: #FFFFFF;
 		width: 100%;
 
 	}
 
 	.user-page {
 		background-color: #FFFFFF;
 		width: 100%;
 		/* -webkit-overflow-scrolling: touch;
 		overflow-scrolling: touch;
 	 overflow-y: scroll; */
 	}
 
 	.userInfo {
 		height: 172px;
 		position: relative;
 		display: flex;
 		flex-direction: column;
 		margin-top: 40upx;
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
 
 	.more {
 		display: block;
 		margin: 10px auto;
 		padding: 5px;
 
 		text-align: center;
 		line-height: 1.5;
 		font-size: 12px;
 		color: #4A4A4A;
 		border: 1px solid #CCCCCC;
 		border-radius: 10px;
 	}
 
 	.dynInfo-item {
 		width: 31%;
 		height: 250upx;
 		padding: 5upx;
 		margin: 5upx;
 		position: relative;
 		opacity: 0;
 		transform: translateY(40upx);
 		transition: all 0.3s ease-in-out 0s;
 
 
 
 
 	}
 
 	.active {
 		opacity: 1;
 		transform: translateY(0);
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
 		background-color: rgba(255, 255, 255, 0.5);
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
 