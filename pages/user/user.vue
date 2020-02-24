<template>
	<view class="user-page">
		<view class="userInfo">
			<image class="avatar" :src="avatar" @tap='uploadAvatar()' mode="aspectFill" @error="imgError()" />
			<p>{{userInfo.name}}</p>
			<p>{{userInfo.age}}/{{userInfo.stature}}cm/{{userInfo.weight}}kg/{{userInfo.acctType}}</p>
			<p>{{userInfo.signature}}</p>
		</view>
		<view class="panInfo">
			<view class="item-fans">
				<navigator url="followList">
					<p>{{socialInfo.fans}}</p>
					<p>關注</p>
				</navigator>
			</view>|
			<view class="item-focus">
				<navigator url="fansList">
					<p>{{socialInfo.conn}}</p>
					<p>人氣</p>
				</navigator>
			</view>|
			<view class="item-photo">
				<view @tap="touserInfo(userInfo.id)">
					<p>{{socialInfo.dynm}}</p>
					<p>相冊</p>
				</view>
			</view>|
			<view class="item-commune">
				<p>0</p>
				<p>公社</p>
			</view>
		</view>
		<view class="bag">
			<view @tap="toAsset()" class="left">
				<view class="dot" v-if="tokens.length>0">
				</view>
				<image src="../../static/img/user/wallet.svg" mode=""></image>
				<text>星球資產</text>
			</view>
			<view @tap="toPan()">
				<image src="../../static/img/user/gonyi1.svg" mode=""></image>
				<text>星球公益</text>
			</view>
		</view>
		<view class="invite">
			<view @click="toStrategy()">
				<image src="../../static/img/user/QR.svg" mode=""></image>
				<text>邀請好友移民星球</text>
			</view>
		</view>
		<view class="organization">
			<view @tap="toEntertain()" class="left">
				<image src="../../static/img/user/jiuba.svg" mode=""></image>
				<text>酒吧</text>
			</view>
			<view @tap="toWelfare()">
				<image src="../../static/img/user/gonyi.svg" mode=""></image>
				<text>公益組織</text>
			</view>
		</view>


		<view class="option" v-for="(item, index) in settings" :key="index">
			<navigator  :url="item.url">
				<view class="option-item">
					<image :src="item.src"></image>
					<text>{{item.label}}</text>
					<text v-if="item.expla" class="dot"></text>
				</view>
			</navigator>
		</view>
		<view class="btn-row">
			<view class="btn" @tap="bindLogout">退出登錄</view>
		</view>
	</view>

</template>

<script>
	import sockect from "@/common/websocket.js"
	import {
		mapState,
		mapActions,
		mapMutations
	} from 'vuex';
	import {
		findByID,
		getAllSocialInfo,
		upPicture,
		logout
	} from '../../api/api.js';
	export default {
		data() {
			return {
				tokens: [],
				userInfo: '',
				socialInfo: '',
				userId: uni.getStorageSync('USERS_KEY').id,
				avatar: '../../static/img/user/upload.png',
				settings: [{
						src: '../../static/img/user/introduce.svg',
						url: '../setting/introduce',
						label: '關於我們',
						expla: true
					}, {
						src: '../../static/img/user/strategy.svg',
						url: '../setting/strategy',
						label: '星球攻略',
						expla: ''
					},{
						src: '../../static/img/user/plantBase.svg',
						url: '../base/base',
						label: '招募節點',
						expla: ''
					},
					{
						src: '../../static/img/user/lianxi.svg',
						url: '../setting/contactUs',
						label: '聯繫我們',
					},
					{
						src: '../../static/img/user/option.svg',
						url: '../setting/setting',
						label: '設置',
						expla: ''
					}
				]
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		methods: {
			...mapMutations(['logout']),
			imgError() {
				this.avatar = '../../static/img/error/defaultAvatar.png'
				uni.showModal({
					title: '',
					content: '頭像加載失敗，請重新上傳頭像',
					confirmText: "確定"
				})
			},
			bindLogout() {
				let _this = this;
				uni.showModal({
					title: '',
					content: '點擊確定後退出',
					confirmText: "確定",
					success(res) {
						if (res.confirm) {
							uni.reLaunch({
								url: '../login/login'
							});
							_this.logout();
							logout()
							uni.removeStorageSync('USERS_KEY');
							uni.removeStorageSync('TOKEN_KEY');
							uni.removeStorageSync('USERS_DOT');
							sockect.closeSocket()
						}
					}
				});

			},
			getUserInfo() {
				findByID().then(data => {
					this.userInfo = data;
					this.avatar = data.portrait;
					if (this.userInfo.signature == null || this.userInfo.signature == '') {
						this.userInfo.signature = '這家夥很懶，還沒有簽名';
					}
				});
			},
			getSocialInfo() {
				getAllSocialInfo().then(data => {
					this.socialInfo = data;
				});
			},
			uploadAvatar() {
				var myInfo = uni.getStorageSync('USERS_KEY')
				upPicture(this.userId).then(data => {
					this.avatar = data.id;
					myInfo.portrait = data.id
					uni.setStorageSync('USERS_KEY', myInfo)
				});
			},
			touserInfo(id) {
				uni.navigateTo({
					url: 'album?uid=' + id
				});
			},
			toAsset() {
				uni.navigateTo({
					url: '/pages/ledger/asset'
				});
			},
			toPan() {
				uni.navigateTo({
					url: '/pages/pan/pan'
				});
			},
			toStrategy() {
				uni.navigateTo({
					url: '/pages/strategy/strategy'
				});
			},
			toEntertain() {
				uni.navigateTo({
					url: '/pages/entertain/entertain'
				});
			},
			toWelfare() {
				uni.navigateTo({
					url: '/pages/welfare/welfare'
				});
			},
			async getToken(Token) { //获取token
				let res = await this.api.homeToken(Token).getIndexPan();
				// console.log(res)
				if (res.data.status == 200) {
					this.tokens = res.data.data
				}else if(res.data.status == 404){
					this.tokens = ''
				}
			},
			noDot(){
				this.settings[0].expla = false
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:"update"
			})
		},
		onLoad() {
			var dot = uni.getStorageSync('USERS_DOT')
			if(dot){
				this.settings[0].expla = false
			}
		},
		onShow() {
			this.getUserInfo();
			this.getSocialInfo();
			var Token = uni.getStorageSync("TOKEN_KEY")
			this.getToken(Token);
			var dot = uni.getStorageSync('USERS_DOT')
			if(dot){
				this.settings[0].expla = false
			}
		}
	}
</script>

<style scoped="true">
	.user-page {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex: 1;
		box-sizing: border-box;
		flex-direction: column;
		padding: 60upx 20upx;
	}

	.userInfo {
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
	}

	.portrait {
		width: 150upx;
		height: 150upx;
		margin: 0 auto;
		margin-bottom: 30upx;
		border-radius: 100%;
	}

	.avatar {
		width: 150upx;
		height: 150upx;
		margin: 0 auto;
		margin-bottom: 30upx;
		border-radius: 50%;
	}

	.userInfo p {
		font-size: 25upx;
		text-align: center;
		margin: 5upx 0 5upx 0;
	}

	.userInfo p:nth-child(2) {
		font-size: 16px;
	}

	.edit {
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 10upx;
		margin-right: 30upx;
		z-index: 1010;
	}
	.edit::after {
	
		content: "";
	
		position: absolute;
	
		top: -10px;
	
		left: -10px;
	
		right: -10px;
	
		bottom: -10px;
	
	}

	.panInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 20rpx 80rpx;
		font-size: 12px;
		text-align: center;
	}


	.bag {
		position: relative;
		background-color: #131D21;
		height: 100px;
		display: flex;
		color: #FFFFFF;
		justify-content: space-between;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 5px;
	}

	.bag .dot {
		position: absolute;
		top: 15px;
		right: 40px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: red;
	}

	.bag view {
		width: 40%;
		height: 100%;
		position: relative;
	}

	.bag .left::after {
		content: "";
		height: 40px;
		width: 1px;
		position: absolute;
		top: 18px;
		right: -32px;
		background-color: #FFFFFF;
	}

	.bag text {
		display: block;
		text-align: center;
		font-size: 16px;
	}

	.bag image {

		display: block;
		margin: 0 auto;
		width: 30px;
		height: 30px;
		margin-top: 15px;
	}

	.invite {
		margin: 10px 0;
		background-color: #131D21;
		height: 80px;
		display: flex;
		color: #FFFFFF;
		justify-content: center;
		align-items: center;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 5px;

	}

	.invite image {

		display: block;
		margin: 0 auto;
		width: 30px;
		height: 30px;
		margin-top: 15px;
	}

	.organization {
		color: #000000;
		height: 100px;
		display: flex;
		color: #FFFFFF;
		justify-content: space-between;
		padding: 10px;
		box-sizing: border-box;
	}

	.organization view {
		width: 40%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.organization .left::after {
		content: "";
		height: 40px;
		width: 1px;
		position: absolute;
		top: 18px;
		right: -32px;
		background-color: #D3D3D3;
	}

	.organization text {
		font-size: 16px;
		color: #000000;
	}


	.organization image {
		margin: 0 20rpx;
		width: 30px;
		height: 30px;
	}

	.item-strategy {
		position: relative;
		font-size: 28upx;
		/* border-bottom: 1upx solid; */
		margin: 20px 0 0 10upx;
		padding-bottom: 10upx;
		/* border-image: -webkit-linear-gradient(left, #03D5C7, #73AE0F) 50 50;
		border-image: -o-linear-gradient(right, #03D5C7, #73AE0F);
		border-image: -moz-linear-gradient(right, #03D5C7, #73AE0F);
		border-image: linear-gradient(#03D5C7, #73AE0F); */
	}

	.item-strategy::after {
		content: "";
		position: absolute;
		right: 0;
		bottom: -2px;
		left: 4upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.item-strategy image {
		width: 40upx;
		height: 40upx;
		margin: 0 20upx -10upx 10upx;
	}

	.option {
		font-size: 28upx;
		position: relative;
		
	}
	.option-item{
		margin-top: 10px;
		height: 40px;
		display: flex;
		align-items: center;
		line-height:40px;
		border-bottom: 1px solid #979797;
	}
	.option image {
		width: 40upx;
		height: 40upx;
		margin: auto 20upx;
	}
	

	.option text:nth-child(3) {
		position: absolute;
		top: 20px;
		right: 0;
		width: 10px;
		height: 10px;
		background-color: red;
		border-radius: 50%;
	}

	.btn-row {
		margin: 20px auto;
		width: 35%;
		color: #000000;
		margin-bottom: 0;
	}

	.btn {
		padding: 0;
		font-size: 14px;
		border: 1px solid #CCCCCC;
		border-radius: 5px;
		line-height: 30px;
		color: #000000;
		background-color: #FFFFFF;
		text-align: center;
	}
</style>
