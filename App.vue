<script>
	import {
		getWyToken
	} from "@/api/api.js"
	import {
		mapState,
		mapActions
	} from "vuex"
	export default {
		data() {
			return {
				connNumber: 0,
				fnsNumber: 0,
				likeNumber: 0,
				systemNumber: 0,
				msgNumber: 0
			}
		},
		watch: {
			'$store.state.pushMsg.pushFansMsg': function() {
				if (this.$store.state.pushMsg.pushFansMsg.length == 0) {
					return
				}
				var num = this.$store.state.pushMsg.pushFansMsg.filter(function(item) {
					return item.status == "1";
				})
				num = num.length
				this.fnsNumber = num.toString()
				this.setTabBarBadge()
			},
			'$store.state.pushMsg.pushConnMsg': function() {
				if (this.$store.state.pushMsg.pushConnMsg.length == 0) {
					return
				}
				var num = this.$store.state.pushMsg.pushConnMsg.filter(function(item) {
					return item.status == "1";
				})
				num = num.length
				this.connNumber = num.toString()
				this.setTabBarBadge()
			},
			'$store.state.pushMsg.pushSystemMsg': function() {
				if (this.$store.state.pushMsg.pushSystemMsg.length == 0) {
					return
				}
				var num = this.$store.state.pushMsg.pushSystemMsg.filter(function(item) {
					return item.isRed == "0";
				})
				num = num.length
				this.systemNumber = num.toString()
				this.setTabBarBadge()
			},
			'$store.state.pushMsg.pushLikeMsg': function() {
				if (this.$store.state.pushMsg.pushLikeMsg.length == 0) {
					return
				}
				var num = this.$store.state.pushMsg.pushLikeMsg.filter(function(item) {
					return item.status == "1";
				})
				num = num.length
				this.likeNumber = num.toString()
				this.setTabBarBadge()
			},

			'$store.state.sessionlist': function() {
				var msgNum = 0
				let sessionlist = this.$store.state.sessionlist.filter(item => {
					msgNum += item.unread
				})
				this.msgNumber = msgNum
				this.setTabBarBadge()
			}

		},


		onLaunch: function() {
			var users_key = uni.getStorageSync("USERS_KEY").token
			if (users_key) {
				this.checkOpenGPSServiceByAndroid()
				this.$store.dispatch('getConnMsg')
				this.$store.dispatch('getFansMsg')
				this.$store.dispatch('getLikeMsg')
				this.$store.dispatch('getSystemMsg')
				setInterval(() => {
					this.$store.dispatch('getConnMsg')
					this.$store.dispatch('getFansMsg')
					this.$store.dispatch('getLikeMsg')
					this.$store.dispatch('getSystemMsg')
				}, 2000)
				getWyToken().then(data => {
					let uid = data.uid;
					let sdktoken = data.wyToken
					uni.setStorageSync('uid', uid)
					uni.setStorageSync('sdktoken', sdktoken)
					this.connect()
				})
			}

		},
		updated() {
			// 提交sdk连接请求
			var users_key = uni.getStorageSync("USERS_KEY").token
			if (users_key) {
				this.$store.dispatch('connect')
				this.$store.dispatch('updateRefreshState')
			}
		},
		onShow: function() {
			// uni.setTabBarBadge({
			// 	index: 1,
			// 	text: '9'
			// })

		},
		onHide: function() {
			// console.log('App Hide');

		},
		mounted() {

			this.$request.interceptors.response(res => {
				if (res) {
					if (res.data.status && res.data.status.code != 200) {
						// uni.showToast({
						// 	title: res.data.status.message,
						// 	icon: "none",
						// 	duration: 2000
						// });
					}
					if (res.statusCode != 200) {
						// uni.showToast({
						// 	title: res.data.status.message,
						// 	icon: "none",
						// 	duration: 2000
						// });
					}
					if (res.statusCode == 401) { //退出登录
						console.log("token失效");
					}
				}
				return res;
			})
		},
		methods: {
			...mapActions(["connect"]),
			checkOpenGPSServiceByAndroid() {
				let system = uni.getSystemInfoSync(); // 获取系统信息
				if (system.platform === 'android') { // 判断平台
					var context = plus.android.importClass("android.content.Context");
					var locationManager = plus.android.importClass("android.location.LocationManager");
					var main = plus.android.runtimeMainActivity();
					var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
					if (!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {
						uni.showModal({
							title: '提示',
							content: '请打开定位服务功能',
							showCancel: false, // 不显示取消按钮
							success() {
								if (!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {
									var Intent = plus.android.importClass('android.content.Intent');
									var Settings = plus.android.importClass('android.provider.Settings');
									var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
									main.startActivity(intent); // 打开系统设置GPS服务页面
								} else {
									console.log('GPS功能已开启');
								}
							}
						});
					}
				}
			},
			setTabBarBadge() {
				var num = 0
				num = Number(this.fnsNumber) + Number(this.connNumber) + Number(this.likeNumber) + Number(this.systemNumber) + this
					.msgNumber
				num = num.toString()
				if (num == 0) {
					return
				}
				if (num == 'NaN') {
					return
				}
				uni.setTabBarBadge({
					index: 1,
					text: num
				})
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = 'http://pandla.io/images/static/bell.mp3';
				innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
				innerAudioContext.onError((res) => {
					console.log(res.errMsg);
					console.log(res.errCode);
				});
			},
			...mapActions(["getConnMsg", "getFansMsg", "getLikeMsg"])
		}
	}
</script>
<style>
	@import url("./components/m-icon/m-icon.css");
</style>
<style>
	@import './common/uni.css';
</style>
<style>
	/*每个页面公共css */
	/* uni-app默认全局使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。如不使用flex布局，请删除或注释掉本行。*/
	body,
	page {
		max-width: 100%;
		min-height: 100%;
		display: flex;
		background: #131D21;
		/* overflow: hidden; */
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* li样式 */
	li {
		list-style: none;
	}

	/* 按钮样式 */
	.btn-row {
		padding: 50upx;
	}

	button {
		font-size: 14px;
	}


	button[disabled] {
		color: #9E9E9E !important;
		/* background: #000000 !important; */
	}

	button.primary {
		display: flex;
		justify-content: flex-end;
		background-color: transparent;
		position: relative;
		margin-right: 0;
		padding-right: 0;
		color: #EFEFF4;
		border: none;
	}

	button.hover-primary {
		opacity: 0.5;
	}

	.verCode {
		background: transparent;
		color: #EFEFF4;
		font-size: 25upx;
		width: 30%;
		text-align: right;
		padding: 0;
		margin: 0;
	}

	/* 链接 */
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		font-size: 25upx;
		margin-left: 10upx;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	/* .content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #000000;
		padding: 20upx;
		color: #EFEFF4;
	} */
	.page {
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		background-color: #FFFFFF;
		display: block;
	}

	.main-content {
		width: 100%;
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 20upx;
		margin-top: 40upx;
		background: #131D21;
		box-sizing: border-box;
		color: #EFEFF4;
	}

	.pages-content {
		width: 100%;
		box-sizing: border-box;
		padding: 10PX;
		display: flex;
		flex: 1;
		flex-direction: column;
		color: #4A4A4A;
		background: #FFFFFF;


	}

	/* 输入框 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
		padding-left: 10upx;

	}

	.input-group {
		padding: 50upx;
		font-size: 30upx;
		/* background-color: #000000; */
		margin-top: 40upx;
		position: relative;
		color: #4A4A4A;
		text-decoration: none
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		margin-top: 40upx;
		text-decoration: none
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 10upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 15upx;
		line-height: 50upx;
	}
</style>
