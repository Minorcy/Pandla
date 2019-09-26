<template>
	<view class="no-tabbar">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="user-page">
			<navigator url="update">
				<image class="edit" src="../../static/img/user/edit.svg"></image>
			</navigator>
			<view class="userInfo">
				<image class="avatar" :src="avatar" @tap='uploadAvatar()' mode="aspectFill" />
				<p>{{userInfo.name}}</p>
				<p>{{userInfo.age}}/{{userInfo.stature}}cm/{{userInfo.weight}}kg</p>
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
				<view @tap="toPurse" class="left">
					<image src="../../static/img/user/wallet.svg" mode=""></image>
					<text>錢包</text>
				</view>
				<view @tap="toPassport">
					<image src="../../static/img/user/passport.svg" mode=""></image>
					<text>護照</text>
				</view>
			</view>

			<navigator class="item-strategy" url="../strategy/strategy">
				<image src="../../static/img/user/strategy.svg"></image>
				<text>星球攻略</text>
			</navigator>
			<view class="option" v-for="(item, index) in settings" :key="index">
				<navigator class="input-row border" :url="item.url">
					<image :src="item.src"></image>
					<text>{{item.label}}</text>
					<text>{{item.expla}}</text>
				</navigator>
			</view>
			<view class="btn-row">
				<view class="btn" @tap="bindLogout">退出登錄</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions,
		mapMutations
	} from 'vuex';
	import {
		findByID,
		getAllSocialInfo,
		upPicture
	} from '../../api/api.js';
	export default {
		data() {
			return {
				userInfo: '',
				socialInfo: '',
				userId: uni.getStorageSync('USERS_KEY').id,
				avatar: '../../static/img/user/upload.svg',
				settings: [{
						src: '../../static/img/user/plantBase.svg',
						url: '../base/base',
						label: '招募節點',
						expla: ''
					}, {
						src: '../../static/img/user/relNameAuth.svg',
						url: '../auth/auth',
						label: '實名認證',
						expla: 'PAN幣綫上交易所交易需要實名認證'
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
			...mapActions(["logoutnim"]),
			bindLogout() {
				let _this = this;
				uni.showModal({
					title: '',
					content: '點擊確定後退出',
					success(res) {
						if (res.confirm) {
							_this.logout();
							uni.clearStorageSync('USERS_KEY');
							uni.clearStorageSync('uni-storage-keys');
							uni.reLaunch({
								url: '../login/login'
							});
							_this.logoutnim()
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
				upPicture(this.userId).then(data => {
					this.avatar = data.id;
				});
			},
			touserInfo(id) {
				uni.navigateTo({
					url: 'album?uid=' + id
				});
			},
			toPurse() {
				uni.navigateTo({
					url: '/pages/purse/purse'
				});
			},
			toPassport() {
				uni.navigateTo({
					url: '/pages/passport/passport'
				});
			},
			

		},
		onShow() {
			this.getUserInfo();
			this.getSocialInfo();
		},
		godynm() {

		}
	}
</script>

<style scoped="true">
	.no-tabbar {
		width: 100%;
		background-color: #FFFFFF;
		z-index: 99;
	}

	.status_bar {
		padding: 10px;
		height: var(--status-bar-height);
		width: 100%;
		box-sizing: border-box;
	}
	.user-page {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex: 1;
		box-sizing: border-box;
		flex-direction: column;
		padding: 20upx;
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
	}

	.panInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 30upx 80upx;
		font-size: 12px;
		text-align: center;
	}


	.bag {
		background-color: #131D21;
		height: 100px;
		display: flex;
		color: #FFFFFF;
		justify-content: space-between;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 5px;
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

	.item-strategy {
		position: relative;
		font-size: 28upx;
		/* border-bottom: 1upx solid; */
		margin: 30upx 0 0 10upx;
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
	}

	.option image {
		width: 40upx;
		height: 40upx;
		margin: 0 20upx 10upx 20upx;
	}

	.option text:nth-child(3) {
		margin-left: auto;
		margin-top: 10upx;
		font-size: 25upx;
		color: #9B9B9B;
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
