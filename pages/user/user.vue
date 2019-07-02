<template>
    <view class="main-content">
		<navigator url="update">
			<image class="edit" src="../../static/img/user/edit.svg"></image>
		</navigator>
		<view class="userInfo">
			<image
				class="avatar" 
				src="../../static/img/user/upload.svg"
				v-if="userInfo.portrait == null || userInfo.portrait == ''"></image>
			<image class="portrait" :src="userInfo.portrait" @tap="uploadAvatar()" v-else/>
			<p>{{userInfo.name}}</p>
			<p>{{userInfo.age}}/{{userInfo.stature}}cm/{{userInfo.weight}}kg</p>
			<p>{{userInfo.signature}}</p>
		</view>
		<view class="panInfo">
			<view class="item-fans">
				<p>{{socialInfo.fans}}</p>
				<p>人氣</p>
			</view>|
			<view class="item-focus">
				<p>{{socialInfo.conn}}</p>
				<p>關注</p>
			</view>|
			<view class="item-photo">
				<p>{{socialInfo.dynm}}</p>
				<p>相冊</p>
			</view>|
			<view class="item-commune">
				<p>0</p>
				<p>公社</p>
			</view>
		</view>
		<view class="bag">
			<navigator url="../purse/purse"><image src="../../static/img/user/purse.svg"></image></navigator>
			<navigator url="../passport/passport"><image src="../../static/img/user/passport.svg"></image></navigator>
		</view>
		<view class="option" v-for="(item, index) in settings" :key="index">
			<navigator class="input-row border" :url="item.url">
				<image :src="item.src"></image>
				<text>{{item.label}}</text>
				<text>{{item.expla}}</text>
			</navigator>
		</view>
        <view class="btn-row">
            <button class="primary" hover-class="hover-primary" @tap="bindLogout">退出登錄</button>
        </view>
    </view>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
	import {findByID, getAllSocialInfo, upPicture} from '../../api/api.js';

    export default {
		data() {
			return {
				userInfo: '',
				socialInfo: '',
				settings: [{
					src: '../../static/img/user/relNameAuth.svg',
					url: '../auth/auth',
					label: '實名認證',
					expla: 'PAN幣綫上交易所交易需要實名認證'
				}, {
					src: '../../static/img/user/invCode.svg',
					url: '../invite/invite',
					label: '我的邀請碼',
					expla: '獲得PAN幣和原力'
				}, {
					src: '../../static/img/user/assetLedger.svg',
					url: '../ledger/asset',
					label: '資產賬本',
					expla: ''
				}, {
					src: '../../static/img/user/focusLedger.svg',
					url: '../ledger/focus',
					label: '原力賬本',
					expla: ''
				}, {
					src: '../../static/img/user/plantBase.svg',
					url: '../base/base',
					label: '星球基地',
					expla: ''
				}, {
					src: '../../static/img/user/option.svg',
					url: '../setting/setting',
					label: '設置',
					expla: ''
				}]
			}
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin'])
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogout() {
                this.logout();
				uni.clearStorage('USERS_KEY');
				uni.reLaunch({
					url: '../login/login'
				});
            },
			getUserInfo() {
				findByID().then(data => {
					this.userInfo = data;
				});
			},
			getSocialInfo() {
				getAllSocialInfo().then(data => {
					this.socialInfo = data;
				});
			},
			uploadAvatar() {
				upPicture(uni.getStorageSync('USERS_KEY').id).then(data => {
					if(data == 'success') {
						findByID().then(data => {
							this.getUserInfo();
						});
					}
				});

			}
        },
		onShow() {
			this.getUserInfo();
			this.getSocialInfo();
		}
    }
</script>

<style scoped="true">
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
	}
	
	.userInfo p {
		font-size: 25upx;
		text-align: center;
		margin: 5upx 0 5upx 0;
	}
	
	.userInfo p:nth-child(2) {
		font-size: 40upx;
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
		justify-content: space-between;
		margin: 30upx;
		font-size: 25upx;
		text-align: center;
	}
	
	
	.bag {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 20upx 40upx;
	}
	
	.bag image{
		width: 250upx;
		height: 100upx;
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
		color: #007AFF;
	}
	
	.btn-row {
		margin: 0 auto;
	}
	
	.primary {
		padding: 0;
	}
</style>
