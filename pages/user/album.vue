<template>
	<view class="pages-content">
		<scroll-view scroll-y="ture" class="scroll">
			<view class="dynInfo">
				<image :lazy-load="true" :src="item.images" mode="aspectFill" v-for="(item, index) in dynInfo" @tap="preview(index)"
				 :key="index"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		getAlbum,
		deleteDyn
	} from '../../api/api.js';

	export default {
		data() {
			return {
				dynInfo: '',
				imgUrl:[]
			}
		},
		methods: {
			getDynInfo() {
				getAlbum().then(data => {
				
					this.dynInfo = data;
				
					
					for (let i = 0; i < this.dynInfo.length; i++) {
						this.imgUrl[i] = this.dynInfo[i].images;
					}
					
				
				});
			},
			preview(index) {
				
				// console.log(imgUrl)
				// uni.previewImage({
				// 	itemList: ['保存圖片', '刪除', "取消"],
				// 	current: index,
				// 	urls: imgUrl,
				// });
				
				let uid = []
				for (let i = 0; i < this.dynInfo.length; i++) {
					uid[i] = this.dynInfo[i].id;
				}
				// console.log(uid)
				uni.previewImage({
					urls: this.imgUrl,
					current: index,
					longPressActions: {
						itemList: ['刪除'],
						success: function(data) {
							// console.log(uid[data.index])
							deleteDyn(uid[data.index]).then(data=>{
								uni.showToast({
									icon: 'none',
									title: '刪除成功'
								});
								uni.navigateTo({
									url: 'album'
								})
								this.getDynInfo()
							})
						},
						fail: function(err) {	
							console.log(err.errMsg);
						}
					}
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
	.scroll {
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
