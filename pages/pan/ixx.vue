<!-- <template>
	<view class="page">
		<view class="logo">
			<image src="../../static/img/pan/ixxlogo.svg" mode="widthFix"></image>
		</view>
		<view class="title-wrap">
			<text class="panel-title">注册</text>
			<text class="by-link" @tap="linkE" :class="[isColor == false ? 'link' : ' ']">邮箱</text>
			<text class="sp-line">|</text>
			<text class="by-link" @tap="linkP" :class="[isColor == true ? 'link' : ' ']">手机号</text>
		</view>
		<view class="from">
			<view class="field" v-if="!isColor">
				<view class="input-box">
					<view class="input-container">
						<input type="text" placeholder="+86" class="ipt" />
					</view>
				</view>
			</view>
			<view class="field">
				<view class="input-box">
					<view class="input-container">
						<input type="text" :placeholder="placeholder" class="ipt" />
					</view>
				</view>
			</view>
			<view class="field">
				<view class="input-box">
					<view class="input-container">
						<input type="text" placeholder="验证码" class="ipt" />
						<button class="cod-btn">发送验证码</button>
					</view>
				</view>
			</view>
			<view class="field">
				<view class="input-box">
					<view class="input-container">
						<input type="text" placeholder="密码至少8个字符" class="ipt" />
					</view>
				</view>
			</view>
			<view class="field">
				<view class="input-box">
					<view class="input-container">
						<input type="text" placeholder="确认密码" class="ipt" />
					</view>
				</view>
			</view>
			<view class="field">
				<view class="input-box">
					<view class="input-container">
						<input type="text" placeholder="填写邀请码(选填)" class="ipt" />
					</view>
				</view>
			</view>
		</view>
		<view class="submit">
			<view class="btn-box">
				<button class="btn">注册</button>
			</view>

			<view class="agreement">
				<checkbox type="checkbox" name="accept" id="accept" class="checked" />
				<text>我已阅读并同意</text>
				<text>服务条款</text>
				<text>隐私协议</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isColor: true,
				placeholder:"請輸入手機號碼"
			}
		},
		methods: {
			linkE() {
				this.isColor = true;
				this.placeholder="you@example.com"
			},
			linkP() {
				this.isColor = false;
				this.placeholder="請輸入手機號碼"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		width: 100%;

		.logo {
			width: 60%;
			height: 60px;
			font-size: 24px;
			color: aqua;
			text-align: center;
			line-height: 60px;
			margin: 20px auto;
			image{
				width: 100%
			}
		}

		.title-wrap {
			width: 360px;
			height: 36px;
			margin: 0 auto;
			padding: 0 40px;
			margin-bottom: 30px;
			box-sizing: border-box;

			.panel-title {
				font-size: 24px;
				line-height: 1.5;
				color: #01ced1;
				float: left;
			}

			.by-link {
				line-height: 36px;
				font-size: 16px;
				float: right;
				text-align: center;
				cursor: pointer;
				color: #01ced1;
				display: inline-block;
			}

			.sp-line {
				color: #01ced1;
				line-height: 32px;
				float: right;
				margin: 0 5px;
			}

			.link {
				font-size: 12px;
				color: #aaa49b;
			}
		}

		.from {
			.field {
				position: relative;
				min-height: 60px;

				.input-box {
					width: 100%;
					height: 60px;
					padding: 0 48px;
					top: 0;
					left: 0;

					.input-container {
						height: 60px;
						width: 280px;
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						position: relative;
						padding-right: 40px;

						.ipt {
							-webkit-box-sizing: border-box;
							box-sizing: border-box;
							padding-right: 20px;
							font-size: 16px;
							height: 40px;
							width: 100%;
							border: 0;
							color: #fff;
							background: transparent;
							border-bottom: 1px solid #fff;
							position: absolute;
							bottom: 0;
							left: 0;
							outline: none;
						}

						.cod-btn {
							width: 100px;
							height: 30px;
							line-height: 30px;
							border-radius: 20px;
							margin-left: 10px;
							font-size: 16px;
							color: #01ced1;
							text-align: center;
							position: absolute;
							right: 0;
							bottom: 0px;
							background: transparent
						}
					}
				}
			}
		}

		.submit {
			padding: 40px 26px;
			height: 66px;
			border-bottom: none;
			position: relative;
			min-height: 60px;

			.btn-box {
				height: 40px;
				line-height: 38px;
				border-radius: 3px;
				border-width: 1px;
				font-size: 14px;

				.btn {
					display: block;
					color: #fff;
					text-align: center;
					width: 90%;
					background-color: #01ced1;
					font-size: 14px;
					margin-bottom: 10px;
				}
			}

			.agreement {
				font-size: 12px;
				margin: 21px 0;
				color: #fff;

				.checked {
					margin-left: 18px;
					resize: none;
					border: none;
					outline: 0;
					-webkit-box-shadow: none;
					box-shadow: none;
					border-radius: 0;
				}
			}
		}
	}
</style>
 -->
 
 <template>
 	<view class="pages-content">
 		<view class="box">
 			<loading></loading>
 			<text>頁面正在建設中
 				程序員小哥哥正在努力</text>
 		</view>
 	</view>
 </template>
 
 <script>
 	import loading from '../../components/loading8.vue'
 	export default{
 		components:{
 			loading
 		}
 	}
 </script>
 
 <style>
 	.box{
 		position: relative;
 		margin: 10px auto;
 		width: 100%;
 		height: 40%;
 		
 	}
 	text{
 		position: absolute;
 		top: 70%;
 		left: 50%;
 		transform: translate(-50%,-50%);
 		font-size: 16px;
 		text-align: center;
 	}
 </style>
 
 
 