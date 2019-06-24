<template>
    <view class="main-content">
		<navigator url="update">
			<image class="edit" src="../../static/img/user/edit.svg"></image>
		</navigator>
		<view class="userInfo">
			<image class="avatar" src="../../static/img/user/upload.svg" v-if="userInfo.portrait == null"></image>
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
				<p>{{commune}}</p>
				<p>公社</p>
			</view>
		</view>
		<view class="bag">
			<navigator url="../purse/purse"><image src="../../static/img/user/purse.svg"></image></navigator>
			<navigator url="../passport/passport"><image src="../../static/img/user/passport.svg"></image></navigator>
		</view>
		<view class="option">
			<view class="input-row border">
				<image src="../../static/img/user/relNameAuth.svg"></image>
				<text>實名認證</text>
				<text>PAN幣綫上交易所交易需要實名認證</text>
			</view>
			<view class="input-row border">
				<image src="../../static/img/user/invCode.svg"></image>
				<text>我的邀請碼</text>
				<text>獲得PAN幣和原力</text>
			</view>
			<navigator class="input-row border" url="../ledger/asset">
				<image src="../../static/img/user/assetLedger.svg"></image>
				<text>資產賬本</text>
			</navigator>
			<navigator class="input-row border" url="../ledger/focus">
				<image src="../../static/img/user/focusLedger.svg"></image>
				<text>原力賬本</text>
			</navigator>
			<view class="input-row border">
				<image src="../../static/img/user/plantBase.svg"></image>
				<text>星球基地</text>
			</view>
			<navigator class="input-row border" url="../setting/setting">
				<image src="../../static/img/user/option.svg"></image>
				<text>設置</text>
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
				fans: '18296',
				focus: '13565',
				photo: '345',
				commune: '3'
			}
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin'])
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogout() {
                this.logout();
				uni.reLaunch({
					url: '../login/login'
				})
				uni.clearStorage('USERS_KEY');
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
</style>
