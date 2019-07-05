<template>
    <view class="content">
		<!-- swiper滑动器 -->
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper"
						:indicator-dots="indicatorDots"
						:autoplay="autoplay"
						:interval="interval"
						:duration="duration"
						:circular="circular"
						@change="sliderChange">
						<swiper-item v-for="(item, index) in slides" :key="index">
							<view class="swiper-item">
								<image :src="item.number" alt="加载失败" mode="aspectFill"/>
							</view>
						</swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
		
		<!-- 重置小圆点样式 -->
		<progress :percent="sliderPercent" stroke-width="2" active-mode="backwards" activeColor="#02F52B"/>
		
		<view class="login-reg-link">
			<navigator class="reg" url="../reg/reg">注冊</navigator>
			<text>|</text>
			<navigator class="login" url="../login/login">登錄</navigator>
		</view>
		<hr>
		<view class="facebook-link">
			使用<a href="#"><navigator url="../reg/reg">邮箱/手机</navigator></a>注册
		</view>
		<view class="facebook-link">
			使用<a href="#">Facebook</a>帳號注冊
		</view>
		<view class="lang-link">
			<a class="ch">繁體中文</a><text>|</text><a class="en">English</a>
		</view>
	</view>
</template>

<script>
	import {skipIndex} from "../../common/js/storage.js";
	import {indexSlider} from '../../common/js/json.js';
	
    export default {
		data() {
			return {
				slides: '',
				indicatorDots: false,
				autoplay: true,
				interval: 3000,
				duration: 1000,
				circular: true,
				currentSwiper: 0,
				sliderPercent: 25
			}
		},
		methods: {
			getIndexSlider() {
				indexSlider().then(data => {
					this.slides = data;
				});
			},
			sliderChange() {
				(this.sliderPercent == 100) ? (this.sliderPercent = 25) : (this.sliderPercent += 25);
			}
		},
		onLoad() {
			skipIndex();
			this.getIndexSlider();
		}
    }
</script>

<style scoped="true">
	.content{
		color: #EFEFF4;
		padding: 0;
		background: #000000;
	}
	
	/* 滑动器 */
	.swiper {
		width: 100%;
		height: 750upx;
	}
	.swiper-item>image {
		width: 100%;
		height: 750upx;
	}

	.login-reg-link {
		margin: 50upx 30upx 0 30upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.facebook-link {
		margin-top: 90upx;
		display: flex;
		display: -webkit-flex;
		align-items: center;
	    justify-content: center;
		font-size: 30upx;
	}
	
	.facebook-link>a {
		margin: 0 5upx 0 5upx;
		color: #EFEFF4;
		text-decoration: underline;
		
	}
	
	.lang-link {
		display: flex;
		flex-direction: row;
		font-size: 25upx;
		position: fixed;
		bottom: 0;
		right: 0;
		padding: 20upx;
	}
	.en {
		color: #EFEFF4;
		margin-left: 10upx;
	}
	
	.ch {
		margin-right: 10upx;
	}
	
	.login {
		margin-left: 40upx;
	}
	
	.reg {
		margin-right: 40upx;
	}
	
		facebook-link a {
		text-decoration: underline;
	}
	
	hr {
		margin-top: 40upx;
		height: 1upx;
		border: none;
		background: #777777;
	}
</style>
