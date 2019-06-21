<template>
    <view class="content">
		<logo slogan="找回或修改密碼"></logo>
		<view v-if="succ==false">
			 <view class="input-group">
			    <view class="input-row border">
			        <m-input type="text" focus clearable v-model="account" placeholder="輸入注冊的郵箱/手機"></m-input>
			    </view>
				<view class="input-row border">
					<m-input type="number" maxlength="6" v-model="regCode" placeholder="輸入驗證碼" clearable></m-input>
					<button class="verCode" @tap="getRegCode" :disabled="regCodeBtn.btnStatus">
						<text>{{regCodeBtn.text}}</text>
					</button>
				</view>
			</view>
			<view class="btn-row">
			    <button class="primary" @tap="nextChange" :disabled="nextBtn">下一步</button>
			</view>
		</view>
       
		<view v-if="succ==true">
			<view class="input-group">
				<view class="input-row border">
					<m-input type="password" displayable v-model="password" placeholder="6位數以上由字母和數字組成的密碼"></m-input>
				</view>
				<view class="input-row border">
					<m-input type="password" displayable v-model="verifyPwd" placeholder="確認您的密碼"></m-input>
				</view>
			</view>
			<view class="btn-row">
			    <button class="primary" @tap="findPassword" :disabled="changeBtn">确认修改</button>
			</view>
		</view>
    </view>
</template>

<script>
    import mInput from '../../components/m-input.vue';
	import logo from '../../components/logo.vue';
	import {changePwd, sendCode} from '../../api/api.js';
	import {codeValidate, pwdValidate, joinValidate} from '../../common/js/validate.js';

    export default {
        components: {
            mInput,
			logo
        },
        data() {
            return {
                account: '',
				password: '',
				verifyPwd: '',
				regCode: '',
				regCodeBtn: { //获取验证码按钮
					text: '獲取驗證碼',
					btnStatus: false,
					codeTime: 60
				},
				changeBtn: false, //修改按钮
				nextBtn: true, // 下一步按钮
				timerId: null,
				succ: false
            }
        },
        methods: {
            getRegCode() {
				if (joinValidate(this.account)) {
					this.nextBtn = false;
					sendCode(this.account, this.regCodeBtn, this.timerId);
				}
            },
			nextChange() { 
				if(codeValidate(this.regCode)) {
					this.succ = true;
				}
			},
			findPassword() {
				if (pwdValidate(this.password, this.verifyPwd)) {
					// this.changeBtn = false;
					changePwd(this.password, this.account, this.regCode);
				}
				
			}
        }
    }
</script>

<style>
	
</style>
