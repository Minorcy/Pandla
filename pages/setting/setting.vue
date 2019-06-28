<template>
    <view class="pages-content">
		<ul>
			<li v-for="(item, index) in settings" :key=index>
				<button
					class="btn-primary"
					hover-class="hover-primary" 
					:style="{background: item.specColor}">
					{{item.label}}
				</button>
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
				}, {
					label: '服務條款'
				}, {
					label: '隱私政策'
				}, {
					label: '全球招募超級節點',
					specColor: '-webkit-linear-gradient(left, #033A3A, #032F06)'
				}, {
					label: '聯係我們',
					specColor: '-webkit-linear-gradient(left, #033A3A, #032F06)'
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
