<template>
	<view class="pages-content" scroll-y="true">
		<view class="top-section" v-if="!created">
			<image src="../../static/img/invite/top.svg" mode="widthFix"></image>
		</view>
		<view class="invite-section" v-if="!created">
			<view class="invite-top">
				<view class="left">
					<text class="count">{{inviteCount}}</text>
					<text class="text">邀请人数</text>
				</view>
				<view class="middle">
					<text class="count">{{valiDation}}</text>
					<text class="text">通过验证人数</text>
				</view>
				<view class="right">
					<text class="count">{{panCount}}</text>
					<text class="text">获得PAN币</text>
				</view>
			</view>
			<view class="invite"  @tap="createPoster()">
				<text class="invite-title">邀请码</text>
				<text class="invite-content">{{inviteCode}}</text>
			</view>
			<view class="invite-text">
				<text>為防止惡意註冊,用戶需要完成公益捐贈以及關注10個用戶,點讚達到100系統才會判斷是真用戶。</text>
			</view>
		</view>
		<view class="pan-section" v-if="!created">
			<view class="pan-item">
				<image src="../../static/img/invite/PAN.svg" mode=""></image>
				<text>每邀請1位可獲得10個PAN幣</text>
				<text>前5位好友</text>
			</view>
			<view class="pan-item">
				<image src="../../static/img/invite/PAN.svg" mode=""></image>
				<text>每邀請1位可獲得20個PAN幣</text>
				<text>前6-10位好友</text>
			</view>
			<view class="pan-item">
				<image src="../../static/img/invite/PAN.svg" mode=""></image>
				<text>每邀請1位可獲得30個PAN幣</text>
				<text>前11-20位好友</text>
			</view>
			<view class="pan-item">
				<image src="../../static/img/invite/PAN.svg" mode=""></image>
				<text>每邀請1位可獲得50個PAN幣</text>
				<text>前21-100位好友</text>
			</view>
			<view class="pan-text">
				<text>越早期的用戶越容易獲得PAN幣,隨著星球用戶的增漲獲取PAN幣的難度會越大,PAN幣的價值也會隨著應用場景和居民增長而上升。
				</text>
			</view>
		</view>
		<view class="bottom-section" v-if="!created">
			<text class="first">
				星球很多模塊都在建設中，需要大家一起參與星球的建設。謝謝!
			</text>
			<text>
				首批登陸的星球居民可以通過:
			</text>
			<text>
				<text class="color">尋找軟件BUG，提意見，邀請好友，投票，發日誌</text>等參與星球技術團隊一起建設潘多拉星球
			</text>
			<text>您可以通過郵件或者關注我們微信公眾號與我們聯繫</text>
			<text>郵箱地址:<text class="color">media@pandla.io</text></text>
			<text>微信公眾號:<text class="color">PANDLA</text></text>
		</view>
		<view class="poster" v-if="created">
			<wm-poster imgSrc="http://47.244.27.153/images/static/img/poster/poster.png" :QrSrc="createImg" class="pan-poster"
			 @success="saveImg" @tap='save'>
			</wm-poster>
		</view>
	</view>
</template>

<script>
	import {
		invList
	} from '../../common/js/json.js';
	import wmPoster from "../..//components/wm-poster/wm-poster.vue";
	import QR from "../../common/js/wxqrcode.js";
	import {
		pathToBase64,
		base64ToPath
	} from '../../common/js/image.js';
	import {
		getBill,
		getCountPan,
		passValidation,
		getinviteCount,
		getInvCode
	} from '../../api/api.js';

	export default {
		data() {
			return {
				inviteCode: '',
				panCount: 0 ,
				inviteCount: 0,
				valiDation: 0,
				createImg: '',
				created: false,
				imgSrc:''
			}
		},
		components: {
			wmPoster
		},
		methods: {
			getInvData() {
				// invList().then(data => {
				// 	this.listInfo = data;
				// 	// console.log(this.listInfo);
				// });

				getInvCode().then(data => {
					this.inviteCode = data;
					// console.log(data)
				});
				passValidation().then(data => {
					// console.log(data)
					if(data == null){
						this.valiDation = 0
					}else{this.valiDation = data}
					
					
				})
				getCountPan().then(data => {
					this.panCount = data
				})
				getinviteCount().then(data => {
					this.inviteCount = data
				})
			},
			createPoster() {
				let URL = 'http://pandla.io/images/register.html?invCode=' + this.inviteCode;
				let img = QR.createQrCodeImg(URL, {
					size: parseInt(300) //二维码大小  
				});
				base64ToPath(img).then(path => {
					// console.log(path);
					this.createImg = path;
				}).catch(error => {
					console.error("error===>", error)
				});
				this.created = true;
				// this.$refs.qrcode._makeCode()
			},
			saveImg(res) {
				this.imgSrc = res.tempFilePath
			},
			save() {
				// uni.saveImageToPhotosAlbum({
				// 	filePath: res.tempFilePaths,
				// 	success: function () {
				// 		uni.showToast({
				// 		title: "图片保存成功",
				// 		icon: "none"
				// 		});
				// 		console.log('save success');
				// 	},
				// 	fail:function(e) {
				// 		uni.showToast({
				// 		title: "图片保存失败",
				// 		icon: "none"
				// 		});
				// 	}
				// });
				var arr = []
				arr[0] = this.imgSrc,
					uni.previewImage({
						urls: arr,
						// longPressActions: {
						// 	itemList: ["保存相冊"],
						// 	success: function(data) {
						// 		uni.showToast({
						// 		title: "图片保存成功",
						// 		icon: "none"
						// 		});
						// 	},
						// 	fail: function(err) {
						// 		console.log(err.errMsg);
						// 	}
						// }
					});
					}

		},
		onLoad() {
			this.getInvData()
		}
	}
</script>


<style lang="scss" scoped>
	.pages-content {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-y: scroll;

		.top-section {
			image {
				width: 98%;
				padding: 5px;
			}
		}

		.invite-section {

			.invite-top {
				width: 100%;
				margin-top: 10px;
				color: #d1d1d1;
				display: flex;
				justify-content: space-around;
				line-height: 24px;

				text {
					font-size: 16px;
					display: block;
					text-align: center
				}

				.left {
					position: relative;
					width: 25%;
					height: 50px;
					text-align: center;

					.count {
						font-size: 20px;
					}

					.text {
						font-size: 14px;
					}
				}

				.left::after {
					content: '';
					width: 2px;
					height: 40px;
					position: absolute;
					top: 5px;
					right: -12px;
					background-color: #d1d1d1;
				}

				.middle {
					position: relative;
					width: 25%;
					height: 50px;
					text-align: center;

					.count {
						font-size: 20px;
					}

					.text {
						font-size: 14px;
					}
				}

				.middle::after {
					content: '';
					width: 2px;
					height: 40px;
					position: absolute;
					top: 5px;
					right: -22px;
					background-color: #d1d1d1;
				}

				.right {
					width: 25%;
					height: 50px;
					text-align: center;

					.count {
						font-size: 20px;
					}

					.text {
						font-size: 14px;
					}
				}
			}

			.invite {
				display: block;
				width: 90%;
				height: 40px;
				margin: 20px auto;
				color: #d1d1d1;
				background: url('http://47.244.27.153/images/static/img/Invitation.svg') no-repeat;
				background-size: contain;

				.invite-title {
					margin-left: 30px;
					font-size: 16px;
				}

				.invite-content {
					margin-left: 65px;
					font-size: 20px;
					line-height: 38px;
				}
			}

			.invite-text {
				padding: 0 20px 20px 20px;
				font-size: 14px;
				color: #d1d1d1;
				line-height: 20px;
				letter-spacing: 2px;
			}
		}

		.pan-section {
			width: 98%;
			margin: 0 auto;
			border-radius: 5%;
			box-sizing: border-box;
			background: url("http://47.244.27.153/images/static/img/kuang.svg");
			// background-image: url("~@/static/img/invite/kuang.svg") no-repeat;
			background-position: 100% 82%;

			.pan-item {
				display: inline-block;
				width: 44%;
				height: 100px;
				padding: 10px;

				image {
					text-align: center;
					width: 50px;
					height: 50px;
					margin-left: 59px;
				}

				text {
					display: block;
					font-size: 12px;
					text-align: center;
					color: #000
				}
			}

			.pan-text {
				width: 100%;
				box-sizing: border-box;
				padding: 10px;

				text {
					padding: 10px;
					font-size: 15px;
					color: #000;
					line-height: 20px;
					letter-spacing: 2px;
				}
			}

		}

		.bottom-section {
			padding: 10px;

			text {
				display: block;
				font-size: 16px;
				line-height: 24px;
				color: #d1d1d1;
			}

			.first {
				color: #fff;
			}

			.color {
				display: inline-block;
				color: #007aff;
			}
		}
	}
</style>
