<template>
	<view class="introduce">
		<image src="http://47.244.27.153/images/image/pandla.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		onLoad() {
			var pages = getCurrentPages(); //当前页面栈
			if (pages.length > 1) {  
			    var beforePage = pages[pages.length - 2]; //获取上一个页面实例对象  
			    beforePage.$vm.noDot(); //触发父页面中的方法change()  
			}
			uni.setStorageSync('USERS_DOT', true)
		}
	}
</script>

<style scoped>
	.introduce {
		background-color: #FFFFFF;
		width: 100%;
		box-sizing: border-box;
		
	}
	image{
		width: 100%;
		height: 100%;
		vertical-align:bottom
	}
	

</style>
