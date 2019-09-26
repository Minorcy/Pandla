<template>
	<view class="update-page">
		<view class="input-group">
			<image :src="avatar" @tap='uploadAvatar()' mode="aspectFill" />
			<view class="input-row border">
				<text class="title">昵称：</text>
				<m-input type="text" v-model="userInfo.name" focus clearable></m-input>
			</view>
			<view class="input-row border">
				<text class="title">身高：</text>
				<m-input type="number" v-model="userInfo.stature" maxlength="3" clearable></m-input>
			</view>
			<view class="input-row border">
				<text class="title">體重：</text>
				<m-input type="number" v-model="userInfo.weight" maxlength="3" clearable></m-input>
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

		<view class="btn-row">
			<view class="btn" @tap="update">完成</view>
		</view>
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

				accArray: ['1', '0', '0.5', '其它'],
				accIndex: 0,
				raceArray: ['亚洲人', '黑人', '拉美人', '中东人', '混血', '白人', '其它'],
				raceIndex: 0,
				userId: uni.getStorageSync('USERS_KEY').id,
				userInfo: {
					age: '',
					name: '',
					signature: '',
					site: '请选择',
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
				// console.log(this.acctType);
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
				if (userValidate(this.userInfo)) {
					this.userInfo.acctType = this.accArray[this.accIndex];
					this.userInfo.race = this.raceArray[this.raceIndex];
					// console.log('acctType:'+this.accArray[this.accIndex]);
					// console.log(this.userInfo);
					// console.log(this.userId);
					upInfo(this.userInfo, this.userId);
				}
			},
			findInfo() {
				findByID().then(data => {
					this.userInfo = data;
					// console.log(data.race);
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
					if (data.acctType == '其它') this.accIndex = 3;
					if (data.portrait != null && data.portrait != "") this.avatar = data.portrait;
					this.userInfo.age = '' + data.age;
					this.userInfo.stature = '' + data.stature;
					this.userInfo.weight = '' + data.weight;
				});
			}
		},
		onShow() {
			if (uni.getStorageSync('USERS_KEY').token) {
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
		margin-left: 30upx;
		margin-top: 5upx;
	}

	.uni-input {
		margin-top: 15upx;
		color: #4a4a4a;
	}

	m-input {
		color: #4a4a4a;
	}

	.btn {
		float: right;
	}

	.popup-btn {
		margin-top: 9px;
		color: #4a4a4a;
	}
</style>
