<template>
    <view class="pages-content">
		<scroll-view scroll-y="ture"  class="scroll">
			<view class="dynInfo">
				<image
					:lazy-load="true"
					:src="item.images"
					mode="aspectFill"
					v-for="(item, index) in dynInfo"
					@tap="preview(index)"
					:key="index"
					></image>
			</view>
		</scroll-view>
    </view>
</template>

<script>
   
	import {getAlbum} from '../../api/api.js';

    export default {
		data() {
			return {
				dynInfo: '',
			}
		},
        methods: {
			getDynInfo() {
				getAlbum().then(data => {
					// console.log(data);
					this.dynInfo = data;
					// console.log(this.dynInfo);
				});
			},
			preview(index) {
				let imgUrl = []
				for(let i =0 ;i<this.dynInfo.length;i++){
					imgUrl[i] = this.dynInfo[i].images;
				}
				// console.log(imgUrl)
				uni.previewImage({
					current:index,
					urls: imgUrl,
				});
				}
			
        },
		onLoad(option) {
			this.uid = option.uid;
		},
		onShow() {
			this.getDynInfo();
		}
    }
</script>

<style scoped="true">
	.scroll{
		height: 100%;
		width: 100%;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-y: scroll;
	}
	/* 动态列表 */
	.dynInfo {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		margin-top: 50upx;
		padding: 1upx;
	}
	
	.dynInfo image {
		width: 31%;
		height: 250upx;
		padding: 5upx;
		margin: 5upx;
	} 
	
	.btn-con {
		position: absolute;
		width: 400upx;
		height: 100upx;
		left: 0;
		right: 0;
		margin-left: auto; 
		margin-right: auto; 
		bottom: 50upx;
	}
</style>
