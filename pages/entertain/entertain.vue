<template>
	<view class="pages-content">
		<view class="introduce" v-if="isShow">
			<image src="../../static/img/login/back.png" mode="widthFix" class="back" @tap="remove()"></image>
			<image src="../../static/img/welfare/entertain-bg.png" mode="widthFix"></image>
		</view>
		<view class="no-list" v-if="!isShow && !barInfo.length">
			<text>暫無酒吧入駐</text>
		</view>
		<scroll-view scroll-y v-if="!isShow">
			<view v-for="(item, index) in barInfo" :key="index" class="lits-item">
				<view class="bg" :style="{backgroundImage: 'url('+item.picture+')'}" ></view>
				<view class="item-group"  @tap="navigatorParam(item.id)">
					<image class="logo" :src='item.logo'></image>
					<text>{{item.name}}</text>
					<view class="location">
						<image class="map" src="../../static/img/welfare/map.svg" />
						<text>{{item.location}}</text>
					</view>
				</view>
				
			</view>
		</scroll-view>
		
		<navigator url="entertainApplication">
			<image class="entry" src="../../static/img/welfare/entry.svg" />
		</navigator>
	</view>
</template>

<script>
	import {
		getBenfitList,
		setBar,
		upLogo,
		getBarList
	} from '../../api/api.js';

	export default {
		data() {
			return {
				isShow:true,
				location: '',
				barInfo: '',
				itemStr: '',
				picture: ""
			}
		},
		methods: {
			remove(){
				this.isShow = false
			},
			getBarListData() {
				getBarList("广州市").then(data => {
					this.barInfo = data;
					this.barInfo.map(item=>{
						item.picture = item.picture.split(",")[0]
					})
					console.log(this.barInfo)
					
				});
			},
			navigatorParam(item) {
				console.log(item)
				uni.navigateTo({
					url: 'entertainDetail?id='+item
				});
			},
			
		},
		filters:{
			splitImg(picture){
				var arr = ''
				return arr[0] = picture.split(",")
			}
		},
		onLoad() {
			// let _this = this;
			// uni.getLocation({
			// 	geocode:true,
			// 	success(res) {
			// 		_this.location = res.address.city;
			// 		console.log('城市' + _this.location);
			// 		_this.getBarListData(_this.location);
			// 		// console.log(JSON.stringify(res));
			// 	}
			// });
			this.getBarListData();
		},
		onBackPress() {
			uni.switchTab({
				url: '/pages/main/main'
			});
		}
	}
</script>

<style scoped>
	.pages-content {
		width: 100%;
	}
	.introduce{
		width: 100%;
		position: relative;
	}
	.back{
		position: absolute;
		top: 5px;
		left: 5px;
		width: 50px;
		height: 50px;
		z-index: 10;
	}
	.no-list{
		margin: 30px auto 0;
		width: 100%;
		text-align: center;
		line-height: 1.5;
		font-size: 16px;
		color: #4A4A4A;
		font-weight: 700;
		}
	.lits-item{
		position: relative;
		width: 100%;
		height: 122px;
		color: #FFFFFF;
		margin-top: 10px;
	}
	.item-group {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		z-index: 9;
		background-color: rgba(0,0,0,.5);
	}
	.item-group text{
		font-size: 14px;
		color: #FFFFFF;
		line-height: 1.5;
		text-align: center;
	}
	.item-group .location{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bg{
		border: 1px solid #000000;
		position: absolute;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center;
		filter: blur(3px);
		z-index: 1;
	}
	.logo {
		width: 100upx;
		height: 100upx;
		margin: 20upx auto 20upx auto;
		border-radius: 50%;
	}
	.map {
		width: 30upx;
		height: 20upx;
		margin-right: 10upx;
	}

	.entry {
		width: 100px;
		height: 100px;
		position: fixed;
		bottom: 50upx;
		right: 20upx;
		z-index: 10;
	}

	scroll-view {
		height: 100%;
	}

	image {
		width: 100%;
	}

	

	
</style>
