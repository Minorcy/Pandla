<template>
	<view class="fans-page">
		<view class="status_bar">
		</view>
		<view class="tabbar">
			<view class="back" @tap="goBack()">
				<image src="../../static/img/user/follow/back.svg" mode=""></image>
			</view>
			<view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
				 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
			</view>
		</view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item>
				<scroll-view scroll-y class="folllow-list">
					<view class="no-list" v-if="followList.length==0">
						<text>你還沒關注他人</text>
					</view>
					<view class="list-item" v-for="(item,index) in followList " :key="item.id">
						<image :src="item.portrait" mode="aspectFill" class="item-img" lazy-load @tap="userInfo(item.id)" @error="imgError(index)"></image>
						<view class="list-item-right">
							<view class="item-userInfo">
								<text class="name">{{item.name}}</text>
								<text class="circles">{{item.age}}/{{item.stature}}/{{item.weight}}/{{item.acctType}}</text>
								<text class="address">{{item.site}}</text>
							</view>
							<view class="item-btn">
								<image src="../../static/img/user/follow/cancel.svg" mode="" @tap="unFollow(item.id,index)"></image>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<view class="no-list" v-if="fnasList.length==0">
					<text>你還沒有粉絲</text>
				</view>
				<scroll-view scroll-y class="folllow-list">
					<view class="list-item" v-for="(item,index) in fnasList " :key="item.id">
						<image :src="item.portrait" mode="aspectFill" class="item-img" lazy-load @tap="userInfo(item.id)" @error="imgError1(index)"></image>
						<view class="list-item-right">
							<view class="item-userInfo">
								<text class="name">{{item.name}}</text>
								<text class="circles">{{item.age}}/{{item.stature}}/{{item.weight}}/{{item.acctType}}</text>
								<text class="address">{{item.site}}</text>
							</view>
							<view class="item-btn">
								<image src="../../static/img/user/follow/follow.svg" mode="" @tap="follow(item.id,index)"></image>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y class="folllow-list">
					<view class="no-list" v-if="friendList.length==0">
						<text>你還沒有好友</text>
					</view>
					<view class="list-item" v-for="(item,index) in friendList " :key="item.id">
						<image :src="item.portrait" mode="aspectFill" class="item-img" lazy-load @tap="userInfo(item.id)"></image>
						<view class="list-item-right">
							<view class="item-userInfo">
								<text class="name">{{item.name}}</text>
								<text class="circles">{{item.age}}/{{item.stature}}/{{item.weight}}/{{item.acctType}}</text>
								<text class="address">{{item.site}}</text>
							</view>
							<view class="item-btn">
								<image src="../../static/img/user/follow/mutual.svg" mode="" @tap="unMutual(item.id,index)"></image>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import {
		getFollow,
		concern,
		getFans,
		upStatus
	} from '../../api/api.js';
	export default {

		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				tabBars: [{
					name: '關注',
					id: 'guanzhu'
				}, {
					name: '粉絲',
					id: 'tuijian'
				}, {
					name: '好友',
					id: 'tiyu'
				}],
				followList: '',
				fnasList: '',
				friendList: [],
			}
		},
		onLoad() {
			this.changeStatus(4)
			uni.showLoading({
				title: "加载中"
			})
			this.getInfo()
			setTimeout(()=>{
				uni.hideLoading()
			},2000)
		},
		methods: {
			changeStatus(type) {
				upStatus(type).then(data => {
					console.log(data)
				})
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			imgError(index){
				this.followList[index].portrait = '../../static/img/error/defaultAvatar.png'
			},
			imgError1(index){
				this.fnasList[index].portrait = '../../static/img/error/defaultAvatar.png'
			},
			getInfo() {
				getFollow().then(data => {
					this.followList = data;
					console.log(this.followList)
					getFans().then(data => {
						this.fnasList = data;
						console.log(data);
						this.getFriend()
						uni.hideLoading()
					});
					
				});


			},
			getFriend() {
				var arr1 = this.followList
				var arr2 = this.fnasList
				this.friendList = this.repeat(arr1, arr2)
				var arr3 = this.friendList

				this.fnasList = arr2.filter(item => {
					let idList = arr3.map(v => v.id)
					return !idList.includes(item.id)
				})
			},
			repeat(arr1, arr2) {
				return arr1.filter(element1 => arr2.some(element2 => element1.id === element2.id))
			},

			userInfo(id) {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + id
				});
			},
			unFollow(id, index) {
				var that = this
				uni.showModal({
					title: '',
					content: '確定不再關注對方',
					confirmText: "確定",
					success: function(res) {
						if (res.confirm) {
							concern(2, id).then(data => {
								that.followList.splice(index, 1)
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			unMutual(id, index) {
				var that = this
				uni.showModal({
					title: '',
					content: '確定不再關注對方',
					confirmText: "確定",
					success: function(res) {
						if (res.confirm) {
							concern(2, id).then(data => {
								that.friendList.splice(index, 1)
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			follow(id, index) {
				concern(1, id).then(data => {
					this.fnasList.splice(index, 1)
					this.getInfo()
				});
			},
			loadMore(e) {
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingText = '没有更多了';
					return;
				}
				for (let i = 1; i <= 10; i++) {
					this.newsitems[e].data.push(tpl['data' + Math.floor(Math.random() * 5)]);
				}
			},
			async changeTab(e) {
				let index = e.target.current;

				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;

				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
			},

		}
	}
</script>

<style>
	.fans-page {
		width: 100%;
		background-color: #FFFFFF;
	}

	.status_bar {
		position: fixed;
		top: 0;
		height: var(--status-bar-height);
		width: 100%;
		z-index: 99;
		background-color: #E1E1E1;
	}

	.tabbar {
		position: sticky;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		white-space: nowrap;
		background-color: #E1E1E1;
		border-bottom: 1px solid #c8c7cc;
		line-height: 44px;
		height: 44px;
		z-index: 999;
	}

	.back {
		position: absolute;
		top: 15px;
		left: 25px;
		width: 15px;
		height: 15px;
		color: #000000;
		display: inline-block;

	}

	.back image {
		width: 15px;
		height: 15px;
		display: block;
	}

	.uni-swiper-tab {
		margin: 0 auto;
		width: 70%;
		display: flex !important;
		justify-content: space-between !important;
		height: 44px !important;
		border: none;

	}

	.active {
		color: #007AFF !important;
	}

	.swiper-tab-list {
		font-size: 15px;
		width: 75px;
		display: inline-block;
		text-align: center;
		color: #555;
		line-height: 44px;
	}

	.swiper-box {
		padding-top: var(--status-bar-height);
		flex: 1;
		box-sizing: border-box;
		width: 100%;
		height: calc(100% - 44px);

	}

	.folllow-list {
		width: 100%;
		height: 100%;
		padding: 0px 10px 0 10px;
		box-sizing: border-box;
		background-color: #fff;
		box-sizing: border-box
	}

	.list-item {
		width: 100%;
		height: 80px;
		padding: 10px;
		box-sizing: border-box;
		display: flex;

	}

	.item-img {
		width: 100rpx;
		height: 100rpx;
		margin-right: 30px;
		box-sizing: border-box;
		display: flex;
		align-self: center;
		border-radius: 100%;
	}

	.list-item-right {
		flex: 1;
		border-bottom: 1px solid rgba(220, 220, 220, 0.5);
		display: flex;
		justify-content: space-between;
	}

	.item-userInfo {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.item-userInfo .name {
		max-width: 150px;
		font-size: 14px;
		color: #4A4A4A;
		line-height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.item-userInfo .circles {
		max-width: 150px;
		font-size: 12px;
		color: #9B9B9B;
		line-height: 17px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.item-userInfo .address {
		max-width: 150px;
		font-size: 14px;
		color: #4A4A4A;
		line-height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.item-btn {
		width: 75px;
		display: flex;
		align-items: center;
	}

	.item-btn image {
		width: 75px;
		height: 35px;
	}
	.no-list{
		width: 60%;
		margin: 200rpx auto;
		text-align: center;
	}
	.no-list text{
		font-size: 16px;
		font-weight: 700;
		text-align: center;
		line-height: 1.5;
	}
</style>
