<script>
	import store from '@/store/'
	import sockect from "@/common/websocket.js"
	export default {
		data() {
			return {
				connNumber: 0,
				fnsNumber: 0,
				likeNumber: 0,
				systemNumber: 0,
				msgNumber: 0,
				interval: ''
			}
		},
		watch: {
			'$store.state.pushMsg.pushFansMsg': function() {
				if (!this.$store.state.pushMsg) {
					return
				}
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
				if (!this.$store.state.pushMsg) {
					return
				}
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
				if (!this.$store.state.pushMsg) {
					return
				}
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
				if (!this.$store.state.pushMsg) {
					return
				}
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
		onLaunch() {
			this.checkArguments(); // 检测启动参数 // 这是默认的监听参数 也就是应用初始化的时候监听  
			var users_key = uni.getStorageSync("TOKEN_KEY");
			if (!users_key) {
				return
			}
			// 监听后台恢复 这是利用5+的方式 处理 APP进入后台后 再进入到APP前台时参数监听  
			plus.globalEvent.addEventListener('newintent', (e)=>{  
			            this.checkArguments(); // 检测启动参数  
			});
		},
		onShow() {
			var id = uni.getStorageSync("USERS_KEY").id;
			var open = this.$store.state.is_open_socket;
			if (!open && id) {
				sockect.connectSocketInit()
			}
			this.interval = setInterval(() => {
				var users_key = uni.getStorageSync("TOKEN_KEY");
				if (!users_key) {
					clearInterval(this.interval);
					return
				}
				this.$store.dispatch('getConnMsg')
				this.$store.dispatch('getFansMsg')
				this.$store.dispatch('getLikeMsg')
				this.$store.dispatch('getSystemMsg')
			}, 2000)
		},
		onHide() {
			var open = this.$store.state.is_open_socket;
			if (open) {
				sockect.closeSocket()
			}
			clearInterval(this.interval);
		},
		methods: {
			
			setTabBarBadge() {
				var users_key = uni.getStorageSync("TOKEN_KEY")
				if (!users_key) {
					return
				}
				var num = 0
				num = Number(this.fnsNumber) + Number(this.connNumber) + Number(this.likeNumber) + Number(this.systemNumber) + this
					.msgNumber
				num = num.toString()
				// console.log(num)
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
				var voice = this.$store.state.defaultSettings.voice
				if (!voice) {
					return
				}
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = 'http://pandla.io/images/static/bell.mp3';
				innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
				innerAudioContext.onError((res) => {
					console.log(res);
				});
			},
			checkArguments() {  
			            if (plus.runtime.launcher == 'shortcut') {  
			                // 通过快捷方式启动，iOS平台表示通过3D Touch快捷方式，Android平台表示通过桌面快捷方式启动  
			                try {  
			                    var cmd = JSON.parse(plus.runtime.arguments);  
			                    console.log('Shortcut-plus.runtime.arguments: ' + plus.runtime.arguments);  
			                    var type = cmd && cmd.type;  
			                    // 可以自行根据type 处理 你的业务逻辑  
			
			                    setTimeout(r => {  
			                        switch (type) {  
			                            case 'share':  
			                                uni.navigateTo({
			                                    url: '/pages/strategy/strategy'  
			                                });  
			                                break;  
			                            case 'about':  
			                                uni.navigateTo({
			                                    url: '/pages/setting/introduce'  
			                                });  
			                                break;  
			                 
			                        }  
			                    }, 800);  
			
			                    console.log(JSON.stringify(cmd));  
			                } catch (e) {  
			                    console.log('Shortcut-exception: ' + e);  
			                }  
			            }  
			        },  
		}
	}
</script>
<style>
	@import url("./components/m-icon/m-icon.css");
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
		/* background: #131D21; */
		/* overflow: hidden; */
	}

	uni-tabbar {
		border: none;
	}

	.uni-modal {
		border-radius: 15px;
	}

	.uni-modal__ft {
		color: #007AFF !important;
	}

	.gray {
		color: #9B9B9B !important;
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
		padding: 10px 10px 0 10px;
		margin-top: 40upx;
		/* background: #131D21; */
		box-sizing: border-box;
		color: #EFEFF4;
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
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

	.comment-section {
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		font-size: 16px;
		z-index: 999;
		background-color: #000000;
		border-radius: 18px 18px 0 0;
		overflow: hidden;
	}
	.noComm{
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 100%;
		font-size: 12px;
		color: #808080;
		line-height: 1.5;
	}
	
	 .comment-section-top {
		width: 95%;
		height: 30px;
		box-sizing: border-box;
		text-align: center;
		display: block;
		margin: 0 auto;
		margin-top: 10px;
		color: #ffffff;
		font-size: 14px;
		line-height: 30px;
		background-color: #000000;
	}
	.img-box{
		position: absolute;
		top: 15px;
		right: 15px;
		width: 20px;
		height: 20px;
	}
	.img-box .img{
		width: 15px;
		height: 15px;
	}
	.img-box .img::after{
		content: "";
		position: absolute;
		top: -10px;
		left: -10px;
		right: -10px;
		bottom: -10px;
	}
	.comment {
		width: 100%;
		height: 90%;
		padding: 10px 10px 40px 10px;
		box-sizing: border-box;
	}
	.comment-section-details {
		width: 100%;
	
	}
	.comment-section-comm {
		margin-bottom: 10px;
	}
	.comm-ite {
		display: flex;
		align-items: flex-end;
	}
	.ite-portrait {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		flex-shrink: 0;
		margin: 5px;
		align-self: end;
	}
	.ite-name-content {
		max-width: 90%;
		box-sizing: border-box;
		padding: 5px;
		color: #ffffff;
		flex-wrap: wrap;
		flex-grow: 1;
		font-size: 12px;
	}
	.ite-name {
		display: block
	}
	.ite-content {
		word-wrap: break-word;
		font-size: 14px;
	}
	.ite-create_time {
		float: right;
		font-size: 12px;
	}
	.more{
		margin: 5px 0px 5px 55px;
		font-size: 12px;
		padding: 5px 0;
		color: #FFFFFF;
	}
	.more text{
		text-indent:0.5em;
		display: inline-block;
		text-decoration: underline;
	}
	.read-more{
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
	}
	.more-iem{
		width: 89%;
		display: flex;
		align-items: flex-end;
	}
	.more-iem image{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		flex-shrink: 0;
		margin: 5px;
		align-self: end;
	}
	.more-info{
		max-width: 91%;
		box-sizing: border-box;
		padding: 5px 5px 0 5px;
		color: #ffffff;
		flex-wrap: wrap;
		flex-grow: 1;
		font-size: 12px;
	}
	.info-name{
		display: block
	}
	.info-content{
		word-wrap: break-word;
		font-size: 14px;
	}
	.info-content-name{
		color: #999;
	}
	.info-createTime{
		float: right;
		font-size: 12px;
	}
	.input-section {
		box-sizing: border-box;
		position: fixed;
		width: 100%;
		height: 100rpx;
		padding: 10upx !important;
		bottom: 0px;
		left: 0;
		color: #4A4A4A;
		background-color: #FFFFFF;
		font-size: 14px;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
	
	}
	.input-section-input {
		width: 82%;
		height: 40px;
		line-height: 40px !important;
		box-sizing: border-box;
		color: #4A4A4A;
		test-align: left;
		vertical-align: middle;
		border: 1px solid #999;
		border-radius: 15upx;
		padding: 5px 5px 5px 10px;
	}
	.input-section-button {
		display: block;
		width: 15%;
		font-size: 16px;
		color: #4A4A4A;
		height: 40px;
		padding: 5px 0 5px 5px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.fade-enter-active{
		transition: opacity .5s
		}
	.fade-leave-active {
		transition: opacity .5s;
		opacity: 0
	}
	.fade-enter{
		opacity: 0
	}
</style>
