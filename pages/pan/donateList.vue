<template>
	<view class="pages-content">
		<ul>
			<li v-for="(item, index) in donateList" :key=index>
				<image :src="item.portrait" />
				<text>{{item.name}}</text>
				<text :style="{color: textColor[index]}">{{item.number}}</text>
			</li>
		</ul>
	</view>
</template>

<script>
	import {getPollTop} from '../../api/api.js';
	export default {
		data() {
			return {
				donateList: '',
				textColor: ['#4CD964', '#4CD964', '#4CD964']
			}
		},
		methods: {
			getDonateList() {
				getPollTop().then(data => {
					this.donateList = data;
				});
			}
		},
		onLoad() {
			this.getDonateList();
		}
	}
</script>

<style scoped>
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 50upx;
		font-size: 30upx;
	}
	
	li {
		list-style: none;
		border-bottom: solid 1upx #4CD964;
		margin-top: 30upx;
	}
	
	li text:nth-child(3) {
		float: right;
		
	}
	
	li text:nth-child(2) {
		position: absolute;
	}
	
	text {
		margin: 20upx 0 0 20upx;
	}
	
	image {
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
	}
</style>
