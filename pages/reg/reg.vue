<template>
    <view class="content">
		<logo slogan="移民潘多拉星球"></logo>
        <view class="input-group">
			<view class="input-row border">
				<m-input v-model="account" :placeholder="regType" clearable></m-input>
			</view>
			<view class="input-row border">
				<m-input type="number" maxlength="6" v-model="regCode" placeholder="輸入驗證碼" clearable></m-input>
				<button class="verCode" @tap="getRegCode" :disabled="regCodeBtn.btnStatus">
					<text>{{regCodeBtn.text}}</text>
				</button>
			</view>
			<view class="input-row border">
				<m-input type="password" displayable v-model="password" placeholder="6位數以上由字母和數字組成的密碼"></m-input>
			</view>
			<view class="input-row border">
				<m-input type="password" displayable v-model="verifyPwd" placeholder="確認您的密碼"></m-input>
			</view>
			<view class="input-row border">
				<m-input type="text" clearable v-model="inviteCode" placeholder="邀請碼(選填)"></m-input>
			</view>
        </view>
		
		<view class="btn-row">
			<view class="action-row">
				<view class="regSelect">
					<button size="mini" @tap="changeRegType">{{btnType}}</button>
				</view>
				<button size="primary" class="primary" hover-class="hover-primary" @tap="bindRegister" :disabled="regBtn">下一步</button>
			</view>
		</view>
		
		<view class="footer">
			注冊即表示你同意
			<a href="www.baidu.com">服務協議</a>和
			<a href="www.baidu.com">隱私政策</a>
		</view>
    </view>
</template>

<script>
    import mInput from '../../components/m-input.vue';
	import logo from '../../components/logo.vue';
	import {sendCode, register} from '../../api/api.js';
	import {phoneValidate, emailValidate, codeValidate, pwdValidate} from '../../common/js/validate.js';

    export default {
        components: {
            mInput,
			logo
        },
        data() {
            return {
                nickname: '',
                password: '',
				account: '',
				phone: '',
                email: '',
				verifyPwd: '',
				regCode: '',
				inviteCode: '',
				pRegister: true,
				regType: '手機注冊',	// 輸入框占位符文字切換
				btnType: '郵箱注冊',	// 按鈕文字切換
				regCodeBtn: { // 验证码按钮
					text: '獲取驗證碼',
					btnStatus: false,
					codeTime: 60
				},
				regBtn: true, // 注册按钮
				timerId: null
            }
        },
        methods: {
			getRegCode() {
				let codeResult = false;
				if (this.pRegister) {
					codeResult = phoneValidate(this.account);
				} else {
					codeResult = emailValidate(this.account);
				}
				if (codeResult) {
					sendCode(this.account, this.regCodeBtn, this.timerId);
					this.regBtn = false;
				}
			},
            bindRegister() {
				if (codeValidate(this.regCode) && pwdValidate(this.password, this.verifyPwd)) {
					register(this.password, this.account, this.regCode, this.inviteCode);
				}
            },
			changeRegType() {
				if (this.pRegister == true) {
					this.regType = '郵箱注冊';
					this.btnType = '手機注冊';
					this.pRegister = false;
				} else {
					this.regType = '手機注冊';
					this.btnType = '郵箱注冊';
					this.pRegister = true;
				}
				this.regBtn = true;
			}
        }
    }
</script>

<style>
	.regSelect {
		padding-top: 27upx;
	}
	
	.regSelect>button {
		border: 0upx;
		background-color:#000000;
		color: #007AFF;
		padding-left: 0;
	}
	
	.footer {
		display: flex;
		justify-content: center;
		font-size: 25upx;
		color: #EFEFF4;
		margin-top: 50upx;
	}
	
	.footer>a {
		color: #007AFF;
	}
</style>
