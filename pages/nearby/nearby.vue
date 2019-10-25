<template>
	<view class="seek-page">
		<view>
			<uni-popup ref="popup" type="top">
				<form @reset="reset">
					<view class="popup-item">
							<view class="example-title">距离</view>
							<view class="tag-view">
								<view class="">
									<uni-tag :inverted="distance[0].inverted" text="10km" type="default" @click="setDistance(0)" />
								</view>
								<view class="">
									<uni-tag :inverted="distance[1].inverted" text="50km" type="default" @click="setDistance(1)" />
								</view>
								<view class="">
									<uni-tag :inverted="distance[2].inverted" text=">100km" type="default" @click="setDistance(2)" />
								</view>
							</view>
						</view>
						<view class="popup-item">
							<view class="example-title">排列方式</view>
							<view class="tag-view">
								<view class="">
									<uni-tag :inverted="arrangement" text="列表模式" type="default" @click="setArrangement" />
								</view>
								<view class="">
									<uni-tag :inverted="!arrangement" text="单图模式" type="default" @click="setArrangement" />
								</view>
							</view>
						</view>
						<view class="popup-item">
							<view class="example-title">角色</view>
							<view class="tag-view role">
								<view class="">
									<uni-tag :inverted="character[0].inverted" text="0" type="default" @click="setCharacter(0)" />
								</view>
								<view class="">
									<uni-tag :inverted="character[1].inverted" text="0.5" type="default" @click="setCharacter(1)" />
								</view>
								<view class="">
									<uni-tag :inverted="character[2].inverted" text="1" type="default" @click="setCharacter(2)" />
								</view>
								<view class="">
									<uni-tag :inverted="character[3].inverted" text="0.5偏0" type="default" @click="setCharacter(3)" />
								</view>
								<view class="">
									<uni-tag :inverted="character[4].inverted" text="0.5偏1" type="default" @click="setCharacter(4)" />
								</view>
								<view class="">
									<uni-tag :inverted="character[5].inverted" text="S" type="default" @click="setCharacter(5)" />
								</view>
								<view class="">
									<uni-tag :inverted="character[6].inverted" text="M" type="default" @click="setCharacter(6)" />
								</view>
								<view class="">
									<uni-tag :inverted="character[7].inverted" text="其他" type="default" @click="setCharacter(7)" />
								</view>
							</view>
						</view>
						<view class="popup-item">
							<view class="example-title">年龄</view>
							<!-- <view class="input-box">
								<input value="" type="number" v-model="ageRange.min" />
								<text>－</text>
								<input value="" type="number" v-model="ageRange.max" @blur="reasonable(1)" />
							</view> -->
							<view class="slider-box">
								<text>18</text>
								<slider name="slider" block-size='20' value="18" @change="sliderChange1" min="18" max="70" show-value block-color="#CCCCCC" />
							</view>
						</view>
						<view class="popup-item">
							<view class="example-title">体重(kg)</view>
							<!-- <view class="input-box">
								<input value="" type="number" v-model="weightRange.min" />
								<text>－</text>
								<input value="" type="number" v-model="weightRange.max" @blur="reasonable(2)" />
							</view> -->
							<view class="slider-box">
								<text>40</text>
								<slider  name="slider" block-size='20' value='40' @change="sliderChange2" min="40" max="200" show-value block-color="#CCCCCC" />
							</view>
						</view>
						<view class="popup-item">
							<view class="example-title">身高(cm)</view>
							<!-- <view class="input-box">
								<input value="" type="number" v-model="heightRange.min" />
								<text>－</text>
								<input value="" type="number" v-model="heightRange.max" @blur="reasonable(3) " />
							</view> -->
							<view class="slider-box">
								<text>150</text>
								<slider  name="slider" block-size='20' value="150" @change="sliderChange3" min="150" max="220" show-value block-color="#CCCCCC" />
							</view>
						</view>
						<view class="popup-item">
							<view class="determine">
								<button type="default" form-type="reset" class="reset">重置</button>
								<button @click="closePopup" class="confirm">确定</button>
							</view>
						</view>
					
				</form>
				</uni-popup>
		</view>
		<view class="search">
			<view class="input-box">
				<input type="text" placeholder="請輸入關鍵字" maxlength="200" v-model="searchValue" />
				<image src="../../static/img/msg/search.svg" @tap="search()"></image>
			</view>
		</view>
		<view class="no-nearby" v-if="nearbyInfo.length == 0">
			<text>{{remind}}</text>
		</view>
		<view :class="[arrangement?'column-list':'palace-list']">
			<view class="nearby-item" v-for="(item,index) in nearbyInfo" :key="index">
				<view class="item-img" @tap="toUserInfo(item.uid,item.scope)">
					<image :src="item.portrait" mode="aspectFill"></image>
					<view class="mask">
						<text>{{item.scope | toFixed(2)}}km</text>
					</view>
				</view>
				<view class="item-name">
					<text>{{item.name}}</text>
					<text v-if="arrangement">{{item.info}}</text>
				</view>
				<view class="item-title">
					<text @tap="updateLab(item.uid)">@{{item.lable}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import {
		debounce
	} from "@/common/js/utils";
	import {
		checkNearbyPerson,
		updateLab,
		getInfo
	} from "@/api/api.js"
	export default {
		components: {
			uniPopup,
			uniTag
		},
		data() {
			return {
				searchValue: '',
				tga: '',
				scope: 10,
				longitude: '',
				latitude: '',
				nearbyInfo: [],
				remind: "",
				distance: [{
					inverted: false,
					value: 10
				}, {
					inverted: true,
					value: 50
				}, {
					inverted: true,
					value: 100
				}],
				arrangement: false,
				character: [{
						inverted: true,
						value: 0
					}, {
						inverted: true,
						value: 0.5
					}, {
						inverted: true,
						value: 1
					}, {
						inverted: true,
						value: '0.5偏0'
					},
					{
						inverted: true,
						value: '0.5偏1'
					},
					{
						inverted: true,
						value: 'S'
					}, {
						inverted: true,
						value: 'M'
					}, {
						inverted: true,
						value: '其它'
					}
				],
				ageRange: {
					max: 70,
					min: 18
				},
				weightRange: {
					max: 200,
					min: 40
				},
				heightRange: {
					max: 220,
					min: 150
					
				},
				

			}
		},

		methods: {
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
			reasonable(idx) {
				if (idx == 1) {
					this.ageRange.min = Number(this.ageRange.min)
					this.ageRange.max = Number(this.ageRange.max)
					if (this.ageRange.min < 18 || this.ageRange.max > 70 || this.ageRange.min > this.ageRange.max) {
						uni.showToast({
							icon: 'none',
							title: "请输入合理的年龄范围（18~70）"
						});
					}
				}
				if (idx == 2) {
					this.weightRange.min = Number(this.weightRange.min)
					this.weightRange.max = Number(this.weightRange.max)
					if (this.weightRange.min < 40 || this.weightRange.max > 200 || this.weightRange.min > this.weightRange.max) {
						uni.showToast({
							icon: 'none',
							title: "请输入合理的体重范围（40~200kg）"
						});
					}
				}
				if (idx == 3) {
					this.heightRange.min = Number(this.heightRange.min)
					this.heightRange.max = Number(this.heightRange.max)
					if (this.heightRange.min < 150 || this.heightRange.max > 220 || this.heightRange.min > this.heightRange.max) {
						uni.showToast({
							icon: 'none',
							title: "请输入合理的年龄范围（150~220cm）"
						});
					}
				}
			},
			sliderChange1(e) {

				this.ageRange.max = e.detail.value
				console.log(this.ageRange)
			},
			sliderChange2(e) {

				this.weightRange.max = e.detail.value
			},
			sliderChange3(e) {

				this.heightRange.max = e.detail.value
			},
			reset() {
				this.distance = [{
					inverted: false,
					value: 10
				}, {
					inverted: true,
					value: 50
				}, {
					inverted: true,
					value: 100
				}]
				this.arrangement = false,
					this.character = [{
							inverted: true,
							value: 0
						}, {
							inverted: true,
							value: 0.5
						}, {
							inverted: true,
							value: 1
						}, {
							inverted: true,
							value: '0.5偏0'
						},
						{
							inverted: true,
							value: '0.5偏1'
						},
						{
							inverted: true,
							value: 'S'
						}, {
							inverted: true,
							value: 'M'
						}, {
							inverted: true,
							value: '其它'
						}
					],
					this.ageRange = {
						max: 70,
						min: 18
						
					},
					this.weightRange = {
						max: 200,
						min: 40
						
					},
					this.heightRange = {
						max: 220,
						min: 150
					
					}
				
			},
			openPopup() {
				this.$refs.popup.open()
			},
			closePopup() {
				this.nearbyInfo = []
				var chooses = []
				uni.showLoading({
					title: '加载中'
				});
				this.$refs.popup.close()
				for (var i = 0; i < this.character.length; i++) {
					if (!this.character[i].inverted) {
						chooses.push({
							type: 'acctType',
							value: this.character[i].value
						})
					}
				}
				const peopleFilters = {
					rangesFilter: function(products, ranges) {
						if (ranges.length === 0) {
							return products;
						} else {
							/**
							 * 循环多个区间条件，
							 * 每种区间类型应该只有一个，
							 * 比如价格区间不会有1000-2000和4000-6000同时需要的情况
							 */
							for (let range of ranges) {
								// 多个不同类型区间是与逻辑，可以直接赋值给自身
								products = products.filter(function(item) {
									return item[range.type] >= range.min && item[range.type] <= range.max;
								});
							}
							return products;
						}
					},
					choosesFilter: function(products, chooses) {
						let tmpProducts = [];
						if (chooses.length === 0) {
							tmpProducts = products;
						} else {
							/**
							 * 选择类型条件是或逻辑，使用数组连接concat
							 */
							for (let choice of chooses) {
								tmpProducts = tmpProducts.concat(products.filter(function(item) {
									return item[choice.type].indexOf(choice.value) !== -1;
								}));
							}
						}
						return tmpProducts;
					}
				}
				let Conditions = {
					ranges: [{
							type: 'age',
							max: this.ageRange.max,
							min: this.ageRange.min
						},
						{
							type: 'stature',
							max: this.heightRange.max,
							min: this.heightRange.min
						},
						{
							type: 'weight',
							max: this.weightRange.max,
							min: this.weightRange.min
						}
					],
					chooses: chooses

				}
				console.log(Conditions)
				function doFilter(products, conditions) {
					// 根据条件循环调用筛选器里的方法
					for (var key in conditions) {
						// 判断是否有需要的过滤方法
						if (peopleFilters.hasOwnProperty(key + 'Filter') && typeof peopleFilters[key + 'Filter'] === 'function') {
							products = peopleFilters[key + 'Filter'](products, Conditions[key]);
						}
					}
					return products;
				}
				checkNearbyPerson(this.longitude, this.latitude, this.scope, this.tga).then(data => {
					if (data.length == 0) {
						this.remind = "附近暫無居民,請點擊右上角擴大範圍"
					}
					data.filter(item => {
						getInfo(item.uid).then(data => {
							var info = data.age + '/' + data.stature + '/' + data.weight + '/' + data.acctType
							item.info = info
							item.age = data.age
							item.stature = data.stature
							item.weight = data.weight
							item.acctType = data.acctType

						})
					})
					setTimeout(() => {
						let result = doFilter(data, Conditions);
						console.log(result);
						this.nearbyInfo = result
						if (this.nearbyInfo.length == 0) {
							this.remind = "暫無篩選結果"
						}
						uni.setStorageSync("nearbyInfo", data)
						uni.hideLoading();
					}, 200)
				})
			},
			setDistance(index) {
				for (var i = 0; i < this.distance.length; i++) {
					this.distance[i].inverted = true
				}
				this.distance[index].inverted = !this.distance[index].inverted
				this.scope = this.distance[index].value
			},
			setArrangement() {
				this.arrangement = !this.arrangement
			},
			setCharacter(index) {
				this.character[index].inverted = !this.character[index].inverted
			},


		},
		onNavigationBarButtonTap() {
			this.$refs.popup.open()

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
					// console.log('当前位置的经度：' + res.longitude);
					that.longitude = res.longitude
					// console.log('当前位置的纬度：' + res.latitude);
					that.latitude = res.latitude

					checkNearbyPerson(that.longitude, that.latitude, that.scope, that.tga).then(data => {
						if (data.length == 0) {
							that.remind = "附近暫無居民,請點擊右上角擴大範圍"

						}
						data.filter(item => {
							getInfo(item.uid).then(data => {
								var info = data.age + '/' + data.stature + '/' + data.weight + '/' + data.acctType
								item.info = info
								item.age = data.age
								item.stature = data.stature
								item.weight = data.weight
								item.acctType = data.acctType
							})
						})
						setTimeout(() => {
							that.nearbyInfo = data
							uni.setStorageSync("nearbyInfo", data)
							console.log(data)
							uni.hideLoading();
						}, 500)
					})
				},
				fail() {
					uni.hideLoading();
					// uni.showToast({
					// 	icon: 'none',
					// 	title: "获取定位权限失败"
					// });
					that.remind = "获取定位权限失败"
					// checkNearbyPerson(113.3352184296, 22.9913456029, that.scope, that.tga).then(data => {
					// 	if (data.length == 0) {
					// 		that.remind = "附近暫無居民,請點擊右上角擴大範圍"

					// 	}
					// 	data.filter(item => {
					// 		getInfo(item.uid).then(data => {
					// 			var info = data.age + '/' + data.stature + '/' + data.weight + '/' + data.acctType
					// 			item.info = info
					// 			item.age = data.age
					// 			item.stature = data.stature
					// 			item.weight = data.weight
					// 			item.acctType = data.acctType
					// 		})
					// 	})
					// 	setTimeout(() => {
					// 		that.nearbyInfo = data
					// 		uni.setStorageSync("nearbyInfo", data)
					// 		console.log(data)
					// 		uni.hideLoading();
					// 	}, 500)
					// })
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
						data.filter(item => {
							getInfo(item.uid).then(data => {
								var info = data.age + '/' + data.stature + '/' + data.weight + '/' + data.acctType
								item.info = info
								item.age = data.age
								item.stature = data.stature
								item.weight = data.weight
								item.acctType = data.acctType
							})
						})
						setTimeout(() => {
							that.nearbyInfo = data
							uni.setStorageSync("nearbyInfo", data)
						}, 500)
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

		.popup-item {
			width: 100%;
			overflow: hidden;
			margin-bottom: 5px;

			.example-title {
				font-size: 14px;
				color: #CCCCCC;
			}

			.tag-view {

				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
			}

			.role {
				// display: flex;
				// justify-content: space-between;
				// .uni-tag {
				// 	width: 80px;
				// 	margin: 0 25px 5px 0;
				// 	text-align: center;
				// 	display: flex;
				// 	justify-content: center;
				// }
			}

			.tag-view view {
				margin: 5px 10px 0 5px;

			}

			.input-box {
				margin: 5px 0;
				display: flex;
				align-items: center;

				input {
					width: 20%;
					height: 20px;
					display: inline-block;
					text-align: center;
					line-height: 20px;
					outline: none;
					border-radius: 3px;
					background-color: transparent;
					border: 1px solid #CCCCCC;

				}

				text {
					width: 10%;
					height: 20px;
					line-height: 20px;
					text-align: center;
				}
			}
		
			.slider-box{
				padding: 0 5px;
				display: flex;
				justify-content: space-between;
				slider{
					width: 85%;
				}
				text{
					color: #888888;
					padding: 10px 0px;
					line-height: 1.5;
					
				}
			}
		}

		.determine {
			margin-top: 10px;
			width: 100%;
			height: 30px;

			font-size: 14px;
			color: #000000;
			display: flex;
			justify-content: space-between;

			button {
				line-height: 30px;
				text-align: center;
				width: 45%;
				border-radius: 3px;
				background-color: #CCCCCC;
			}

			.confirm {}

			.reset {}
		}




		.search {
			.input-box {
				width: 95%;
				margin: 10px auto;
				height: 30px;
				position: relative;
				line-height: 30px;
				border: 1px solid #CCCCCC;
				border-radius: 15px;
				padding: 0 0 0 5px;
				overflow: hidden;

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

		.palace-list {
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

		.column-list {
			width: 100%;
			padding: 10px;
			overflow-x: hidden;
			overflow-y: scroll;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			padding-top: 0;

			.nearby-item {
				width: 100%;
				box-sizing: border-box;
				border: 1px solid #979797;
				display: flex;
				justify-content: center;
				flex-direction: column;
				position: relative;
				margin-bottom: 10px;

				.item-img {
					margin: 0px auto;
					height: 240px;
					overflow: hidden;
					width: 100%;

					image {
						width: 100% !important;
					}

					.mask {
						position: absolute;
						bottom: 0;
						left: 50%;
						margin-left: -50%;
						width: 100%;
						height: 30%;
						background-color: rgba(0, 0, 0, 0.6);

						text {
							font-size: 14px;
							color: #FFFFFF;
							float: right;
							margin-right: 10px;
							line-height: 40px;
						}
					}
				}

				.item-name {
					position: absolute;
					left: 10px;
					bottom: 15%;
					display: block;
					color: #FFFFFF;
					font-size: 14px;
					line-height: 22px;

					text {
						text-align: center;
						margin-right: 10px;
					}
				}

				.item-title {
					position: absolute;
					left: 10px;
					bottom: 5%;
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

	.nearby-list .nearby-item {
		// border-bottom: none;
		// border-right: none;
		margin: 0px -1px -1px 0px;

	}
</style>
