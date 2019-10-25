<template>
	<view class="pages-content">
		<view class="input-group">
			<image class="img-avatar" :src="avatar" @tap="upLogoImg" />
			<view class="input-row border">
				<m-input type="text" v-model="barInfo.name" placeholder="酒吧織名稱" focus clearable></m-input>
			</view>
			<view class="input-row border">
				<m-input type="number" v-model="barInfo.phone" maxlength="11" placeholder="聯係電話" clearable></m-input>
			</view>
			<view class="input-row border">
				<text class="title">位置</text>
				<!-- 用于弹出底部框-->
				<view class="popup-btn" @tap="popup_bottom()">{{barInfo.address}}</view>
				<!-- 选择组件 -->
				<linkAddress ref="linkAddress" :height="height" @confirmCallback="confirmCallback">
				</linkAddress>
			</view>
			<view class="input-row border">
				<m-input type="text" v-model="barInfo.location" placeholder="詳細地址" clearable></m-input>
			</view>
			<view class="input-row border">
				<m-input type="text" v-model="barInfo.intro" placeholder="酒吧簡介" clearable></m-input>
			</view>
			<view class="input-row border">
				<m-input type="text" v-model="barInfo.username" placeholder="申請人姓名" clearable></m-input>
			</view>
			<view class="input-row border">
				<m-input type="number" v-model="barInfo.userphone" placeholder="申請人聯係方式" clearable></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button class="btn" @tap="commitVer">上傳資料</button>
		</view>
	</view>
</template>

<script>
	import linkAddress from '@/components/xuan-linkAddress/xuan-linkAddress.vue'
	import mInput from '@/components/m-input.vue';
	import {
		upload,
		getImgTemp,
		setBar,
		createBenfit
	} from '../../api/api.js';
	import {
		barValidate
	} from '../../common/js/validate.js';

	export default {
		components: {
			linkAddress,
			mInput
		},
		data() {
			return {
				height: '550rpx',
				barInfo: {
					address: '請選擇',
					name: '',
					phone: '',
					location: '',
					intro: '',
					username: '',
					userphone: '',
					logo: ""
				},
				isUpload: false,
				avatar: '../../static/img/user/upload.png',
				
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
				this.barInfo.address = address;
			},
			upLogoImg() {
				getImgTemp().then(data => {
					this.avatar = data;
					upload(this.avatar).then(data => {
						this.isUpload = true;
						this.barInfo.logo = data
					});
				});
			},
			commitVer() {
				if(this.barInfo.address == "請選擇"){
					uni.showToast({
						icon:'none',
						title:"請選擇位置"
					})
					return
				}
				if (barValidate(this.barInfo, this.isUpload)) {
					uni.navigateTo({
						url: 'entertainUpload?barInfo=' + JSON.stringify(this.barInfo)
					});

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.img {
		&-avatar {
			display: flex;
			flex-direction: column;
			width: 200upx;
			height: 200upx;
			margin: 0 auto;
			border-radius: 100%;
		}
		
		&-text {
			margin-left: 10upx;
			font-size: 28upx;
			color: #007AFF;
		}
	}
	
	.input-row {
		margin-top: 50upx;
		padding: 10px;
		box-sizing: border-box;
	}
	.input-row .title{
		color: grey;
		    width: 20%;
		    height: 25px;
		    min-height: 25px;
		    padding: 7px 0;
		    padding-left: 7px;
		    line-height: 30px;
			font-size: 16px;
	}
	.btn-row {
		padding-top: 0;
		
	}
	.uni-input {
		margin-top: 15upx;
	}
	.btn{
		color: #007AFF;
	}
	navigator {
		margin-top: 70upx;
	}
	.popup-btn {
		margin-top: 9px;
		color: #4a4a4a;
	}
</style>

