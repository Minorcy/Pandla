<template>
    <view class="pages-content">
		<ul>
			<li v-for="(item, index) in settings" :key=index>
				<button class="btn-primary" hover-class="hover-primary">{{item.label}}</button>
			</li>
		</ul>
    </view>
</template>

<script>
    export default {
		data() {
			return {
				settings: [{
					label: '關於PANDLA'
				}, {
					label: '版本更新'
				}, {
					label: '清除緩存'
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn-primary {
		width: 100%;
		text-align: left;
		background-color: transparent;
		color: #EFEFF4;
		margin-top: 20upx;
	}
	
	ul {
		margin: 0;
		padding: 0;
	}
	
	li {
		border-bottom:1upx #EFEFF4 solid;
	}
</style>
