<template>
	<view class="main-entertain-content">
		<hr class="green-hr">
		<view v-for="(item, index) in barInfo" :key="index">
			<navigator class="item-group" url="entertainDetail">
				<image :src='item.avatar'></image>
				<p>{{item.name}}</p>
				<p>
					<image class="map" src="../../static/img/main/entertain/map.svg" />
					{{item.localtion}}</p>
			</navigator>
			<hr>
		</view>
		<navigator url="entertainApplication">
			<image class="entry" src="../../static/img/main/entertain/entry.svg" />
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barInfo: [{
					avatar: '../../static/img/main/daily/avatar3.svg',
					name: 'Bannanaunion',
					localtion: '廣東省天河區天河南183號廣才大廈4棟901',
				}, {
					avatar: '../../static/img/main/daily/avatar2.svg',
					name: 'Star',
					localtion: '廣東省番禺區奧園城市天地3棟905'
				}]
			}
		},
		methods: {
			application() {
				
			}
		},
	}
</script>

<style scoped="true">
	.main-entertain-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #131D21;
		color: #EFEFF4;
	}
	
	.green-hr {
		height: 3upx;
		border: none;
		border-top: 3upx solid #4CD964;
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
	
	.map {
		width: 30upx;
		height: 20upx;
		margin-right: 10upx;
	}
	
	.entry {
		width: 150upx;
		position: absolute;
		bottom: 50upx;
		right: 20upx;
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
