<template>
	<view class="pages-content">
		<view class="box">
			<loading></loading>
			<text>頁面正在建設中
				程序員小哥哥正在努力</text>
		</view>
	</view>
</template>

<script>
	import loading from '../../components/loading8.vue'
	export default{
		components:{
			loading
		}
	}
</script>

<style>
	.box{
		position: relative;
		margin: 10px auto;
		width: 100%;
		height: 40%;
		
	}
	text{
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 16px;
		text-align: center;
	}
</style>
