<template>
	<view class="seek-page">
		<view>
			<luPopupWrapper ref="luPopupWrapper" type="top" top="44px" transition="slider" backgroundColor="#fff" height="auto"
			 width="100%" popupId="1">
				<view class="popup-list">
					<text v-for="(item,index) in array" :key="index" @tap="setScope(item)">{{item}}公里</text>
				</view>
			</luPopupWrapper>
		</view>
		<view class="search">
			<view class="input-box">
				<input type="text" placeholder="請輸入關鍵字" maxlength="200" v-model="searchValue" />
				<image src="../../static/img/msg/search.svg" @tap="search()"></image>
			</view>
		</view>
		<view class="no-nearby" v-if="nearbyInfo.length == 0">
			<text>附近暫無居民,請點擊右上角擴大範圍</text>
		</view>
		<view class="nearby-list">
			<view class="nearby-item" v-for="(item,index) in nearbyInfo" :key="index">
				<view class="item-img" @tap="toUserInfo(item.uid,item.scope)">
					<image :src="item.portrait" mode="aspectFill"></image>
					<view class="mask">
						<text>{{item.scope | toFixed(2)}}km</text>
					</view>
				</view>
				<view class="item-name">
					<text>{{item.name}}</text>
				</view>
				<view class="item-title">
					<text @tap="updateLab(item.uid)">@{{item.lable}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import luPopupWrapper from "@/components/lu-popup-wrapper/lu-popup-wrapper.vue";
	import {
		debounce
	} from "@/common/js/utils";
	import {
		checkNearbyPerson,
		updateLab
	} from "@/api/api.js"
	export default {
		components: {
			luPopupWrapper
		},
		data() {
			return {
				searchValue: '',
				tga: '',
				popupWrapper: true,
				array: ["10", "50", ">100"],
				scope: 10,
				longitude: '',
				latitude: '',
				nearbyInfo: ''
			}
		},

		methods: {
			setScope(index) {
				this.scope = index
				checkNearbyPerson(this.longitude, this.latitude, this.scope, this.tga).then(data => {
					this.nearbyInfo = data
					uni.setStorageSync("nearbyInfo", data)
					// console.log(data)
				})
				this.popupWrapper = true
				this.close()
			},
			toUserInfo(id, distance) {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + id + "&distance=" + distance
				});
			},
			updateLab(uid) {
				let myid = uni.getStorageSync("USERS_KEY").id
				if (myid != uid) {
					return
				}
				uni.redirectTo({
					url: "tga"
				});
			},
			search() {
				var that = this
				var list = uni.getStorageSync("nearbyInfo")
				// console.log(list)
				var match = new RegExp("(" + that.searchValue + ")", "img");
				var searchlist = []
				list.forEach(v => {
					if (match.test(v.name)) {
						searchlist.push(v);
					}
					if (match.test(v.lable)) {
						searchlist.push(v);
					}
				});
				if (searchlist.length == 0) {
					uni.showToast({
						icon: 'none',
						title: "暫無搜索結果"
					});
					return
				}
				that.nearbyInfo = []
				that.nearbyInfo = that.repeat(searchlist)


			},
			repeat: function(oldArr) {
				var allArr = []
				for (var i = 0; i < oldArr.length; i++) {
					var flag = true;
					for (var j = 0; j < allArr.length; j++) {
						if (oldArr[i].uid == allArr[j].uid) {
							flag = false;
						};
					};
					if (flag) {
						allArr.push(oldArr[i]);
					};
				};
				return allArr
			},
			show: function() {
				this.$refs.luPopupWrapper.show();
			},
			close: function() {
				this.$refs.luPopupWrapper.close();
			},

		},
		onNavigationBarButtonTap() {
			if (this.popupWrapper == true) {
				this.popupWrapper = false
				this.show()

			} else if (this.popupWrapper == false) {
				this.popupWrapper = true

				this.close()
			}


		},
		onLoad(option) {
			if (option.tga) {
				this.tga = option.tga
			}

			if (this.tga != "") {
				uni.setStorageSync("tga", this.tga)
			}
			uni.showLoading({
			    title: '加载中'
			});
			var that = this
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					that.longitude = res.longitude
					console.log('当前位置的纬度：' + res.latitude);
					that.latitude = res.latitude
					
					checkNearbyPerson(that.longitude, that.latitude, that.scope, that.tga).then(data => {
						that.nearbyInfo = data
						uni.setStorageSync("nearbyInfo", data)
						// console.log(data)
						uni.hideLoading();
					})
				},
				fail() {
					uni.showToast({
						icon: 'none',
						title: "获取定位权限失败"
					});
					uni.hideLoading();
				}
			});

			
		},
		onPullDownRefresh() {
			this.nearbyInfo = ""
			var that = this
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					// console.log('当前位置的经度：' + res.longitude);
					that.longitude = res.longitude
					// console.log('当前位置的纬度：' + res.latitude);
					that.latitude = res.latitude
					
					checkNearbyPerson(that.longitude, that.latitude, that.scope, that.tga).then(data => {
						that.nearbyInfo = data
						uni.setStorageSync("nearbyInfo", data)
						// console.log(data)
					})
				}
			});
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 800)
		}
	}
</script>

<style lang="scss" scoped>
	.seek-page {
		width: 100%;
		background-color: #FFFFFF;

		.popup-list {
			display: flex;
			justify-content: center;
			flex-direction: column;
			width: 100%;
			z-index:99;
			text {
				box-sizing: border-box;
				padding: 5px;
				width: 100%;
				display: block;
				font-size: 14px;
				line-height: 20px;
				text-align: center;
				border-bottom: 1px solid #000000;
				
			}
		}

		.search {
			.input-box {
				width: 95%;
				margin: 10px auto;
				height: 30px;
				position: relative;
				line-height: 30px;
				border:1px solid #CCCCCC;
				border-radius: 15px;
				padding: 0 0 0 5px ;
				overflow:hidden;
				image {
					width: 20px;
					height: 20px;
					display: inline-block;
					position: absolute;
					top: 5px;
					right: 10px;
				}

				input {
					display: inline-block;
					height: 30px;
					width: 80%;
					background: #ffffff;
					line-height: 30px;
					margin-left: 10px;
					font-size: 16px;
					border-radius: 10px;
					text-decoration: none;
					outline: none;
				}

				text {
					position: absolute;
					top: 0;
					right: 0;
					color: #000000;
					font-size: 16px;
					line-height: 30px;
					width: 35px;
					text-align: center;
					height: 30px;
				}
			}
		}

		.no-nearby {
			margin: 100px auto;
			text-align: center;

			text {

				font-size: 16px;
				line-height: 30px;
			}
		}

		.nearby-list {
			width: 100%;
			padding: 10px;
			overflow-x: hidden;
			overflow-y: scroll;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;

			.nearby-item {
				width: 50%;
				padding: 10px;
				box-sizing: border-box;
				border: 1px solid #979797;
				display: flex;
				justify-content: center;
				flex-direction: column;

				.item-img {
					margin: 0px auto;
					position: relative;
					border-radius: 50%;
					overflow: hidden;

					image {
						width: 120px;
						height: 120px;
						border-radius: 50%;
						overflow: hidden;
						display: block;
					}

					.mask {
						position: absolute;
						bottom: 0;
						left: 50%;
						margin-left: -50%;
						width: 100%;
						height: 40px;
						background-color: rgba(0, 0, 0, 0.6);
						text-align: center;

						text {
							font-size: 14px;
							color: #FFFFFF;
							text-align: center;
							line-height: 40px;
						}
					}
				}

				.item-name {
					display: block;
					color: #000000;
					font-size: 14px;
					line-height: 22px;

					text {
						display: block;
						text-align: center;
					}
				}

				.item-title {
					display: block;
					font-size: 12px;
					color: #8E8E93;
					line-height: 22px;

					text {
						display: block;
						text-align: center;
					}
				}
			}
		}
	}
	.nearby-list .nearby-item{
		// border-bottom: none;
		// border-right: none;
		 margin:0px -1px -1px 0px;

	}
</style>
