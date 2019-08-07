<template>
	<view class="m-item" :id="'message'+id">
		<view class="m-left">
			<image class="head_icon" src="http://47.244.27.153/images/2019/07/30/1564484682777693.JPG" v-if="message.user=='home'"
			 ></image>
		</view>
		<view class="m-content">
			<view class="m-content-head" :class="{'m-content-head-right':message.user=='customer'}">
				<view :class="'m-content-head-'+message.user">{{message.content}} </view>
			</view>
		</view>
		<view class="m-right">
			<image class="head_icon" src="http://47.244.27.153/images/2019/07/30/1564484682777693.JPG" v-if="message.user=='customer'"
			></image>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				abosultPaht: "../../"
			}
		},
		props: ['message', 'id'],
		computed: mapState(['user'])
	}
</script>

<style lang="scss" scoped>
	.m-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		font-size: 16px;
		margin-top: 10px;
		.m-left {
			display: flex;
			width: 50px;
			justify-content: center;
			align-items: flex-start;
			
			image {
				width: 40px;
				height: 40px;
				border-radius: 50%;
			}
		}

		.m-content {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: center;
			word-break: break-all;
			
			.m-content-head-home:before {
				border: 15px solid transparent;
				border-right: 15px solid #1482d1;
				left: -20px;
				width: 0;
				height: 0;
				position: absolute;
				content: ' '
			}
			
			.m-content-head-customer {
				border: 1px white solid;
				background: white;
				border-radius: 10px;
				padding: 10px;
			}
			
			.m-content-head-customer:after {
				border: 15px solid transparent;
				border-left: 15px solid white;
				top: 10px;
				right: -20px;
				width: 0;
				height: 0;
				position: absolute;
				content: ' '
			}
			.m-content-head {
				position: relative;
			}
			
			.m-content-head-right {
				display: flex;
				justify-content: flex-end;
				color: black;
			}
			
			.m-content-head-home {
				text-align: left;
				background: #1482d1;
				border: 1px #1482d1 solid;
				border-radius: 10px;
				padding: 10px;
				color: white;
			}
		}

		.m-right {
			display: flex;
			width: 50px;
			justify-content: center;
			align-items: flex-start;
			image {
				width: 40px;
				height: 40px;
				border-radius: 50%;
			}
		}
	}

	

	
</style>
