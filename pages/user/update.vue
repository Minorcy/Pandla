<template>
	<view class="update-page">
		<view class="input-group">
			<image :src="avatar" @tap='uploadAvatar()' mode="aspectFill" />
			<view class="input-row border">
				<text class="title">暱稱：</text>
				<m-input type="text" v-model="userInfo.name" focus clearable></m-input>
			</view>
			<view class="input-row border">
				<text class="title">身高：</text>
				<m-input type="number" v-model="userInfo.stature" placeholder="cm" placeholder-style="#ccc" maxlength="3" clearable></m-input>
			</view>
			<view class="input-row border">
				<text class="title">體重：</text>
				<m-input type="number" v-model="userInfo.weight" placeholder="kg" placeholder-style="#ccc" maxlength="3" clearable></m-input>
			</view>
			<view class="input-row border">
				<text class="title">年齡：</text>
				<m-input type="number" v-model="userInfo.age" clearable></m-input>
			</view>
			<view class="input-row border">
				<text class="title">角色：</text>
				<picker @change="bindAcc" :value="accIndex" :range="accArray">
					<view class="uni-input">{{accArray[accIndex]}}</view>
				</picker>
			</view>
			<view class="input-row border">
				<text class="title">種族：</text>
				<picker @change="bindRace" :value="raceIndex" :range="raceArray">
					<view class="uni-input">{{raceArray[raceIndex]}}</view>
				</picker>
			</view>
			<view class="input-row border">
				<text class="title">居住：</text>
				<!-- 用于弹出底部框-->
				<view class="popup-btn" @tap="popup_bottom()">{{userInfo.site}}</view>
				<!-- 选择组件 -->
				<linkAddress ref="linkAddress" :height="height" @confirmCallback="confirmCallback">
				</linkAddress>
			</view>
			<view class="input-row border">
				<text class="title">簽名：</text>
				<m-input type="text" v-model="userInfo.signature" clearable></m-input>
			</view>
		</view>

		<!-- <view class="btn-row">
			<view class="btn" @tap="update">完成</view>
		</view> -->
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue';
	import logo from '../../components/logo.vue';
	import {
		upPicture,
		upInfo,
		findByID
	} from '../../api/api.js';
	import {
		userValidate
	} from '../../common/js/validate.js';
	import linkAddress from '@/components/xuan-linkAddress/xuan-linkAddress.vue'
	export default {
		components: {
			mInput,
			logo,
			linkAddress
		},
		data() {
			return {
				height: '550rpx',
				accArray: ['1', '0', '0.5', '0.5偏0', "0.5偏1", 'S', 'M', '其它'],
				accIndex: 0,
				raceArray: ['亚洲人', '黑人', '拉美人', '中东人', '混血', '白人', '其它'],
				raceIndex: 0,
				userId: uni.getStorageSync('USERS_KEY').id,
				userInfo: {
					age: '',
					name: '',
					signature: '',
					site: '請選擇',
					stature: '',
					weight: '',
					acctType: '',
					race: '',
				},
				avatar: '../../static/img/user/upload.png'
			}
		},
		methods: {
			// <!-- 点击弹出-->
			popup_bottom: function() {
				this.height = '550rpx';
				//显示
				this.show_popup();
			},
			// <!-- 显示弹窗-->
			show_popup: function() {
				this.$refs.linkAddress.show();
			},
			// <!-- 回掉-->
			confirmCallback: function(address) {
				console.log(address)
				this.userInfo.site = address;
			},
			bindAcc(e) {

				this.accIndex = e.target.value;
				// console.log(this.accIndex);
				this.userInfo.acctType = this.accArray[this.accIndex];
			},
			bindRace(e) {
				this.raceIndex = e.target.value;

			},
			uploadAvatar() {
				upPicture(this.userId).then(data => {
					this.avatar = data.id;
				});
			},
			update() {
				if (this.avatar == '../../static/img/user/upload.png') {
					uni.showToast({
						icon: 'none',
						title: '請上傳头像'
					});
				}
				if (this.userInfo.site == "請選擇" || this.userInfo.site == "请选择") {
					uni.showToast({
						icon: 'none',
						title: "請選擇位置"
					})
					return
				}
				this.userInfo.acctType = this.accArray[this.accIndex];
				this.userInfo.race = this.raceArray[this.raceIndex];
				console.log(this.userInfo)
				if ((!this.userInfo.name) || (!this.userInfo.age) || (!this.userInfo.acctType) ||
					(!this.userInfo.stature) || (!this.userInfo.weight)) {
					uni.showToast({
						icon: 'none',
						title: '請完善信息'
					});
					return
				}
				if (userValidate(this.userInfo)) {
					upInfo(this.userInfo, this.userId).then(data => {
						var token = uni.getStorageSync('TOKEN_KEY')
						if (token) {
							findByID().then(data => {
								uni.setStorageSync('USERS_KEY',data);
								uni.switchTab({
									url: 'user'
								});
							})
							
						} else {
							uni.reLaunch({
								url: '../login/login'
							});
						}
					})

				}
			},
			findInfo() {
				findByID().then(data => {
					// this.userInfo = data;
					// console.log(data);
					if (data.portrait != null && data.portrait != "") this.avatar = data.portrait;
					if (!data.name) {
						return
					}
					if (data.race == '亚洲人') this.raceIndex = 0;
					if (data.race == '黑人') this.raceIndex = 1;
					if (data.race == '拉美人') this.raceIndex = 2;
					if (data.race == '中东人') this.raceIndex = 3;
					if (data.race == '混血') this.raceIndex = 4;
					if (data.race == '白人') this.raceIndex = 5;
					if (data.race == '其它') this.raceIndex = 6;
					// console.log('data:'+data.acctType)
					if (data.acctType == '1') this.accIndex = 0;
					if (data.acctType == '0') this.accIndex = 1;
					if (data.acctType == '0.5') this.accIndex = 2;
					if (data.acctType == '0.5偏0') this.accIndex = 3;
					if (data.acctType == '0.5偏1') this.accIndex = 4;
					if (data.acctType == 'S') this.accIndex = 5;
					if (data.acctType == 'M') this.accIndex = 6;
					if (data.acctType == '其它') this.accIndex = 7;
					this.userInfo.name = data.name
					this.userInfo.age = '' + data.age;
					this.userInfo.stature = '' + data.stature;
					this.userInfo.weight = '' + data.weight;
					this.userInfo.site = data.site
					this.userInfo.signature = data.signature
				});
			}
		},
		onNavigationBarButtonTap() {
			this.update()
		},
		onShow() {
			if (uni.getStorageSync('TOKEN_KEY')) {
				this.findInfo();
			}
		}
	}
</script>

<style>
	.update-page {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}

	image {
		display: flex;
		flex-direction: column;
		width: 200upx;
		height: 200upx;
		margin: 0 auto;
		border-radius: 100%;
	}

	text {
		color: #4A4A4A;
	}

	picker {
		width: 100%;
		margin: auto 0;
		margin-left: 50upx;
		line-height: 25px;
	}

	.uni-input {
		color: #4a4a4a;
		padding: 0;
	}

	m-input {
		color: #4a4a4a;
	}

	.btn {
		float: right;
		padding: 10rpx;
	}

	.popup-btn {
		width: 100%;
		height: 25px;
		margin: auto 0;
		margin-left: 50upx;
		color: #4a4a4a;
	}
</style>
