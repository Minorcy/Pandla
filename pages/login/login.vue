<template>
    <view class="content">
		<logo slogan="潘多拉星球歡迎您"></logo>
        <view class="input-group">
            <view class="input-row border">
                <m-input class="m-input" type="text" v-model="account" placeholder="使用手機號/郵箱登錄" clearable focus></m-input>
            </view>
            <view class="input-row border">
                <m-input type="password" v-model="password" placeholder="請輸入密碼" displayable></m-input>
            </view>
        </view>
        <view class="btn-row">
			<view class="action-row">
			    <navigator url="../reg/reg">注冊賬號</navigator>
			    <text>|</text>
			    <navigator url="../pwd/pwd">忘記密碼</navigator>
				<button class="primary" hover-class="hover-primary" @tap="bindLogin">登錄</button>
			</view>
        </view>
        <!-- <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @tap="oauth(provider.value)"></image>
            </view>
        </view> -->
    </view>
</template>

<script>
	import logo from '../../components/logo.vue';
	import mInput from '../../components/m-input.vue';
	import {login} from '../../api/api.js';
	import {joinValidate, pwdValidate} from '../../common/js/validate.js';

    export default {
        components: {
            mInput,
			logo
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0
            }
        },
        methods: {
			bindLogin() {
				// console.log(result);
				if (joinValidate(this.account) && pwdValidate(this.password, this.password)) {
					login(this.account, this.password);
				}
				
			}
		}
    }
</script>

<style>
	.action-row navigator {
	    color: #007aff;
	    padding-top: 38upx;
	}
	
	.action-row text {
		color: #EFEFF4;
		padding:38upx 10upx;
	}
	
    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 100upx;
        height: 100upx;
        border: 1upx solid #dddddd;
        border-radius: 100upx;
        margin: 0 40upx;
        background-color: #EFEFF4;
    }

    .oauth-image image {
        width: 60upx;
        height: 60upx;
        margin: 20upx;
    }
</style>
