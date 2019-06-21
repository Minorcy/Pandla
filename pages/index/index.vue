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
						:circular="circular">
						<swiper-item v-for="(item, index) in slides" :key="index">
							<view class="swiper-item">
								<img :src="item.number" alt="">
							</view>
						</swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
		
		<!-- 重置小圆点样式 -->
		
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
    export default {
		data() {
			return {
				slides: [{
					number: 'static/img/slider/indexSlide1.svg'
				}, {
					number: 'static/img/slider/indexSlide2.svg'
				}, {
					number: 'static/img/slider/indexSlide3.svg'
				}, {
					number: 'static/img/slider/indexSlide4.svg'
				}],
				indicatorDots: false,
				autoplay: true,
				interval: 3000,
				duration: 1000,
				circular: true,
				currentSwiper: 0
			}
		},
		onLoad() {
			skipIndex();
		}
    }
</script>

<style scoped="true">
	facebook-link a {
		text-decoration: underline;
	}
	
	hr {
		margin-top: 40upx;
		height: 1upx;
		border: none;
		background: #777777;
	}
	
	.content{
		color: #EFEFF4;
	}
	
	/* 滑动器 */
	.swiper {
		width: 100%;
		height: 750upx;
	}
	.swiper-item>img {
		width: 100%;
		height: 750upx;
	}

	.login-reg-link {
		margin: 0upx 30upx;
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
</style>
