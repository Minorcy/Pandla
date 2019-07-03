<template>
	<view class="pages-content">
		<scroll-view scroll-y>
			<view v-for="(item, index) in barInfo" :key="index">
				<view class="item-group" :url="'entertainDetail?itemStr=' + itemStr" @tap="navigatorParam(item)">
					<image class="logo" :src='item.logo'></image>
					<p>{{item.name}}</p>
					<p>
						<image class="map" src="../../static/img/main/entertain/map.svg" />
						{{item.location}}</p>
				</view>
				<hr>
			</view>
		</scroll-view>
		<navigator url="entertainApplication">
			<image class="entry" src="../../static/img/main/entertain/entry.svg" />
		</navigator>
	</view>
</template>
 
<script>
	import {getBarList, setBar, upLogo} from '../../api/api.js';
	
	export default {
		data() {
			return {
				location: '',
				barInfo: '',
				itemStr: ''
			}
		},
		methods: {
			getBarListData() {
				getBarList(this.location).then(data => {
					this.barInfo = data;
				});
			},
			navigatorParam(item) {
				this.itemStr = JSON.stringify(item);
				uni.navigateTo({
					url: 'entertainDetail?itemStr=' + this.itemStr

				});
			}
		},
		onLoad() {
			this.getBarListData();
		}
	}
</script>

<style scoped>
	.pages-content {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.item-group {
		width: 100%;
		height: 350upx;
		background-color: #777777;
		display: flex;
		flex-direction: column;
	}
	
	.item-group p:nth-child(2){
		font-weight: bold;
	}
	
	.item-group p:nth-child(3){
		font-size: 25upx;
	}
	
	.logo {
		width: 100upx;
		height: 100upx;
		margin: 50upx auto 20upx auto;
		border-radius: 50%;
	}
	
	.map {
		width: 30upx;
		height: 20upx;
		margin-right: 10upx;
	}
	
	.entry {
		width: 150upx;
		position: fixed;
		bottom: 50upx;
		right: 20upx;
	}

	scroll-view {
		height: 100%;
	}
	
	image {
		width: 100%;
		height: 150upx;
		margin-top: 20upx;
		justify-content: center;
	}
	
	p {
		width: 100%;
		margin-top: 10upx;
		text-align: center;
	}
	
	hr {
		height: 3upx;
		border: none;
		border-top: 3upx solid #000000;
	}
</style>
