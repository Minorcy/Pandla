<template>
    <view class="pages-content">
        <view class="input-group">
				<image class="img-avatar" :src="avatar" @tap="upLogoImg"/>
				 <view class="input-row border">
				    <m-input type="text" v-model="barInfo.name" placeholder="酒吧織名稱" focus clearable></m-input>
				</view>
				<view class="input-row border">
				    <m-input type="number" v-model="barInfo.phone" maxlength="11" placeholder="聯係電話" clearable></m-input>
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
    import mInput from '../../components/m-input.vue';
	import {upload, getImgTemp, setBar,createBenfit} from '../../api/api.js';
	import {barValidate} from '../../common/js/validate.js';

    export default {
        components: {
            mInput
        },
        data() {
			return {
				barInfo: {
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
				if(barValidate(this.barInfo, this.isUpload)) {
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
</style>
