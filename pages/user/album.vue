<template>
	<view class="album-page">
		<view class="list-box">
			<view v-for="(item,index) in dynInfo" :key="index" :class="{'active':item.active}" :data-index="index" @tap="previewPhoto(index)">
				<image :src="item.images" mode="aspectFill" lazy-load="true">
					<image src="../../static/img/user/delete.svg" mode="" class="delete" @tap.stop="deleteDyn(item.id,index)">
					</image>
					<view v-if="item.content==''">{{item.create_time |dateFormat()}}</view>
					<view v-if="item.content!=''">{{item.content}}</view>
			</view>
		</view>
		<view class="load">{{loadTxt}}</view>
	</view>
</template>

<script>
	import dateFtt from '@/common/utils/Date.js';
	import {
		getInfo,
		getDyn,
		checkIsCon,
		concern,
		getLastTime,
		getFans,
		deleteDyn

	} from '@/api/api.js';
	export default {
		data() {
			return {
				photoList: [],
				rows: 10,
				page: 1,
				isGet: true,
				loadTxt: "",
				dynInfo: [],
				uid: '',
				loadingCount: 9
			}
		},
		onLoad() {
			// uni.showLoading({
			// 	title:'加载中',
			// 	mask:true
			// })
			this.uid = uni.getStorageSync('USERS_KEY').id
			this.getPhoto();

			// setTimeout(()=>{
			// 	uni.hideLoading();
			// },500)
		},
		onReachBottom() {
			this.getPhoto();
		},
		methods: {
			/* 获取照片 */
			getPhoto() {
				if (!this.isGet) {
					return;
				}
				this.isGet = false;
				new Promise((success, error) => {
					if (this.page == 1) {
						uni.showLoading({
							title: '加載中',
							mask: true
						})
						getDyn(this.uid, 0).then(data => {
							// this.dynInfo = data;
							if (!data) {
								this.loadTxt = "暫無相片";
							}
							console.log(data)
							success(data);
						});
					} else {
						this.loadTxt = "正在加載中";
						getDyn(this.uid, this.loadingCount).then(data => {
							if (data == null) {
								this.loadTxt = "已加載全部相片";
								return
							}
							// this.dynInfo = this.dynInfo.concat(data);
							this.loadingCount += 9
							success(data);
							console.log(data)
						});
					}


				}).then((res) => {
					if (this.page == 1) {
						uni.hideLoading();
					}
					this.dynInfo = [...this.dynInfo, ...res];
					this.showImages();
				})
			},
			/* 显示照片 */
			showImages() {
				let index = 0;
				let show = () => {
					if (index < this.dynInfo.length) {
						this.$set(this.dynInfo[index], "active", true);
						index++;
					} else {
						clearInterval(interval);
						this.loadTxt = "上拉加载更多";
						this.page++;
						this.isGet = true;
						if (this.dynInfo.length < 8) {
							this.loadTxt = " ";
							console.log("1")
						}
					}
				}

				let interval = setInterval(() => {
					show();
				}, 100);
			},
			/* 预览照片 */
			previewPhoto(index) {
				let imgUrl = [];
				for (let i = 0; i < this.dynInfo.length; i++) {
					imgUrl.push(this.dynInfo[i].images)
				}
				// let index=e.currentTarget.dataset.index;
				// let list=this.photoList.map((item,index)=>{
				// 	return item.url;
				// });

				uni.previewImage({
					current: index,
					/* 传 Number H5 端出现不兼容 */
					urls: imgUrl
				});
			},
			deleteDyn(id, index) {
				var that = this
				uni.showModal({
					title: '',
					content: '確定刪除照片',
					confirmText: "確定",
					success: function(res) {
						if (res.confirm) {
							deleteDyn(id).then(data => {
								that.dynInfo.splice(index, 1)
							});
						}
					}
				});
			}

		},
		filters: {
			dateFormat(time) {
				time = Number(time)
				var date = new Date(time);
				return dateFtt("yyyy-MM-dd hh:mm:ss", date)
			}
		}
	}
</script>

<style lang="scss">
	.album-page {
		background-color: #eee;
		width: 100%;
	}

	.list-box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		align-content: flex-start;
		padding: 20upx 20upx 0 20upx;
		line-height: 30upx;
		font-size: 28upx;
		color: #333;

		&>view {

			width: 345upx;
			padding: 20upx;
			margin-bottom: 20upx;
			box-sizing: border-box;
			opacity: 0;
			transform: translateY(40upx);
			transition: all 0.3s ease-in-out 0s;

			&.active {
				opacity: 1;
				transform: translateY(0);
			}
		}

		image {
			width: 100%;
			height: 300upx;
			margin-bottom: 10upx;
			position: relative;
		}

		.delete {
			width: 20px;
			height: 20px;
			position: absolute;
			top: 10px;
			right: 10px;
			z-index: 9;

		}

	}

	.load {
		line-height: 80upx;
		text-align: center;
		font-size: 24upx;
		color: #999;
		padding-bottom: 20rpx;
	}
</style>
