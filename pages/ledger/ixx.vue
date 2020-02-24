<template>
	<view class="page">
		<view class="logo">
			<image src="../../static/img/pan/logo.svg" mode="widthFix"></image>
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
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input " style="fontSize:16px ;">{{array[index]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="field" v-if="!isColor">
				<view class="input-box">
					<view class="input-container">
						<input type="text" :placeholder="placeholder" v-model="phone" class="ipt" />
					</view>
				</view>
			</view>
			<view class="field" v-if="isColor">
				<view class="input-box">
					<view class="input-container">
						<input type="text" :placeholder="placeholder" v-model="email" class="ipt" />
					</view>
				</view>
			</view>
			<view class="field">
				<view class="input-box">
					<view class="input-container">
						<input type="text" placeholder="验证码" class="ipt" v-model="captcha" />
						<button class="cod-btn" @tap="getRegCode" :disabled="regCodeBtn.btnStatus">{{regCodeBtn.text}}</button>
					</view>
				</view>
			</view>
			<view class="field">
				<view class="input-box">
					<view class="input-container">
						<input type="password" placeholder="密码至少8个字符" class="ipt" v-model="password" />
					</view>
				</view>
			</view>
			<view class="field">
				<view class="input-box">
					<view class="input-container">
						<input type="password" placeholder="确认密码" class="ipt" v-model="passwords" />
					</view>
				</view>
			</view>

		</view>
		<view class="submit">
			<view class="btn-box">
				<button class="btn" @tap="register" :disabled="submitDisabled">注册</button>
			</view>

			<view class="agreement">
				<text>注冊即表示你同意</text>
				<text>服务条款</text>
				<text>隐私协议</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		phoneValidate,
		emailValidate,
		codeValidate,
		pwdValidate
	} from '@/common/js/validate.js';

	import {
		sendEmailCode,
		sendPhoneCode,
		ixxEmailRegister,
		ixxPhoneRegister,
		regIxxAccount
	} from '@/api/api.js'
	export default {
		data() {
			return {
				isColor: true,
				array: ["+86中国", "+93阿富汗", "+355阿尔巴尼亚", "+213阿尔格拉", "+376安道尔", "+244安哥拉", "+1264安圭拉", "+247阿森松岛", "+1268安提瓜和巴布达",
					"+54阿根廷", "+374亚美尼亚", "+297阿鲁巴", "+61澳大利亚", "+43奥地利", "+994阿塞拜疆", "+1242巴哈马", "+973巴林", "+880孟加拉国", "+1246巴巴多斯",
					"+375白俄罗斯", "+32比利时", "+501伯利兹", "+229贝宁", "+1441百慕大", "+975不丹", "+591玻利维亚", "+387波斯尼亚和黑塞哥维那", "+267博茨瓦纳",
					"+55巴西", "+673文莱", "+359保加利亚", "+226布基纳法索", "+257布隆迪", "+855柬埔寨", "+237喀麦隆", "+238佛得角", "+1345开曼群岛",
					"+236中非共和国", "+235乍得", "+56智利", "+57哥伦比亚", "+269科摩罗", "+242刚果共和国", "+243刚果民主共和国", "+682库克群岛", "+506哥斯达黎加",
					"+225科特迪沃", "+385克罗地亚", "+53古巴", "+357塞浦路斯", "+420+捷克共和国", "+45丹麦", "+253吉布提", "+1767多米尼加", "+1809多米尼加共和国",
					"+593厄瓜多尔", "+20埃及", "+503艾萨尔瓦多", "+372爱沙尼亚", "+251埃塞俄比亚", "+298法罗群岛", "+679斐济", "+358芬兰", "+33法国", "+594法属圭亚那",
					"+689法属波利尼西亚", "+241加蓬", "+220冈比亚", "+995格鲁吉亚", "+94德国", "+233加纳", "+350直布罗陀", "+30希腊", "+299格陵兰", "+1473格林纳达",
					"+590瓜德罗普", "+1671关岛", "+502危地马拉", "+240几内亚", "+44根西", "+224几内亚", "+592圭亚那", "+509海地", "+504洪都拉斯", "+852香港",
					"+95缅甸", "+36匈牙利", "+354冰岛", "+91印度", "+62印度尼西亚", "+98伊朗", "+964伊拉克", "+353爱尔兰", "+44马恩岛", "+972以色列", "+93意大利",
					"+1876牙买加", "+81日本", "+44泽西岛", "+962约旦", "+7哈萨克斯坦", "+254肯尼亚", "+383科索沃", "+965科威特", "+996吉尔吉斯斯坦", "+856老挝",
					"+371拉脱维亚", "+961黎巴嫩", "+266莱索托", "+231利比里亚", "+218利比亚", "+423列支敦士登", "+370立陶宛", "+352卢森堡", "+853澳门", "+389马其顿",
					"+261马达加斯加", "+265马拉维", "+60马来西亚", "+960马尔代夫", "+223马里", "+356马耳他", "+596马提尼克", "+222毛里塔尼亚", "+230毛里求斯",
					"+262马约特", "+52墨西哥", "+373摩尔多瓦", "+377摩纳哥", "+976蒙古", "+382黑山", "+1664蒙特塞拉特", "+212摩洛哥", "+258莫桑比克", "+264纳米比亚",
					"+977尼泊尔", "+31荷兰", "+599荷属安的列斯", "+687新喀里多尼亚", "+64新西兰", "+505尼加拉瓜", "+227尼日尔", "+234尼日利亚", "+47挪威", "+968阿曼",
					"+92巴基斯坦", "+970巴勒斯坦", "+507巴拿马", "+675巴布亚新几内亚", "+595巴拉圭", "+51秘鲁", "+63菲律宾", "+48波兰", "+351葡萄牙", "+1波多黎各",
					"+974库塔", "+262留尼汪", "+40罗马尼亚", "+7俄罗斯", "+250卢旺达", "+684萨摩亚东部", "+685萨摩亚西部", "+378圣马力诺", "+239圣多美和普林西比",
					"+966沙特阿拉伯", "+221塞内加尔", "+381塞尔维亚", "+248塞舌尔", "+232塞拉利昂", "+65新加坡", "+421斯洛伐克", "+386斯洛文尼亚", "+27南非", "+82韩国",
					"+34西班牙", "+94斯里兰卡", "+1869圣基茨和尼维斯", "+1758圣卢西亚", "+1784圣文森特", "+249苏丹", "+597苏里南", "+268斯威士兰", "+46瑞典", "+41瑞士",
					"+963叙利亚", "+886台湾", "+992塔吉克斯坦", "+255坦桑尼亚", "+66泰国", "+670东帝汶", "+228多哥", "+676汤加", "+1868特立尼达和多巴哥", "+216突尼斯",
					"+90土耳其", "+993土库曼斯坦", "+1649特克斯和凯科斯群岛", "+256乌干达", "+380乌克兰", "+971阿拉伯联合酋长国", "+44英国", "+1美国", "+598乌拉圭",
					"+998乌兹别克斯坦", "+678瓦努阿图", "+58委内瑞拉", "+84越南", "+1340维尔京群岛", "+967也门", "+260赞比亚", "+263津巴布韦"
				],
				index: 0,
				placeholder: "you@example.com",
				email: '',
				phone: '',
				captcha: '',
				password: '',
				passwords: '',
				region: 86,
				regCodeBtn: { // 验证码按钮
					text: '獲取驗證碼',
					btnStatus: false,
					codeTime: 60
				},
				submitDisabled: false
			}
		},
		methods: {
			linkE() {
				this.isColor = true;
				this.placeholder = "you@example.com"
			},
			linkP() {
				this.isColor = false;

				this.placeholder = "請輸入手機號碼"
			},
			bindPickerChange: function(e) {
				this.index = e.target.value
				this.region = parseInt(this.array[this.index])
				console.log(this.region)

			},
			getRegCode() {
				var that = this
				var codeResult = false;
				if (this.isColor) {
					codeResult = emailValidate(this.email);
					if (codeResult) {
						sendEmailCode(this.email).then(data => {
							if (data.code == 200) {
								uni.showToast({
									icon: 'none',
									title: "驗證碼發送成功"
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: data.message
								})

							}
						})
						this.flag = true
						var time = 60
						var timer = setInterval(() => {
							if (time <= 0) {
								that.regCodeBtn.text = "獲取驗證碼";
								clearInterval(timer);
								that.regCodeBtn.btnStatus = false;
								time = null;
							} else {
								that.regCodeBtn.text = --time + "s后重發";
								that.regCodeBtn.btnStatus = true;
							}
						}, 1000);
					}

				} else {
					codeResult = phoneValidate(this.phone);
					if (codeResult) {
						sendPhoneCode(this.phone, this.region).then(data => {
							if (data.code == 200) {
								uni.showToast({
									icon: 'none',
									title: "驗證碼發送成功"
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: data.message
								})
							}
						})
						this.flag = true
						var time = 60
						var timer = setInterval(() => {
							if (time <= 0) {
								that.regCodeBtn.text = "獲取驗證碼";
								clearInterval(timer);
								that.regCodeBtn.btnStatus = false;
								time = null;
							} else {
								that.regCodeBtn.text = --time + "s后重發";
								that.regCodeBtn.btnStatus = true;
							}
						}, 1000);
					}
				}

			},
			register() {
				this.submitDisabled = true
				if (pwdValidate(this.password, this.passwords)) {

					if (this.isColor) {
						if (!emailValidate(this.email)) {
							this.submitDisabled = false
							return
						}
						var submit = {
							email: this.email,
							code: this.captcha,
							password: this.password
						}
						ixxEmailRegister(submit).then(data => {
							if (data.code == 200) {
								uni.showToast({
									icon: 'none',
									 duration: 2000,
									title: "註冊成功"
								})
								regIxxAccount(data.data.id).then(data => {
									uni.redirectTo({
										url: "asset"
									})
								})

							} else {
								uni.showToast({
									icon: 'none',
									title: data.message
								})

							}
							this.submitDisabled = false
						})

					} else {
						if (!phoneValidate(this.phone)) {
							this.submitDisabled = false
							return
						}
						var submit = {
							phone: this.phone,
							region: this.region,
							code: this.captcha,
							password: this.password
						}
						ixxPhoneRegister(submit).then(data => {
							if (data.code == 200) {
								uni.showToast({
									icon: 'none',
									 duration: 2000,
									title: "註冊成功"
								})
								regIxxAccount(data.data.id).then(data => {
									uni.redirectTo({
										url: "asset"
									})
								})
							} else {
								uni.showToast({
									icon: 'none',
									 duration: 2000,
									title: data.message
								})

							}
							this.submitDisabled = false
						})
					}


				}

				setTimeout(() => {
					this.submitDisabled = false

				}, 5000)


			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		background-color: #FFFFFF;
		color: #4a4a4a;

		.logo {
			width: 60%;
			height: 60px;
			font-size: 24px;
			color: aqua;
			text-align: center;
			line-height: 60px;
			margin: 20px auto;

			image {
				width: 225px;
				height: 45px;
			}
		}

		.title-wrap {
			// width: 360px;
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
				-webkit-box-sizing: border-box;
				box-sizing: border-box;

				.input-box {
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
					width: 360px;
					box-sizing: border-box;
					height: 60px;
					margin: 0 auto;
					top: 0;
					left: 0;

					.input-container {
						height: 60px;
						width: 280px;
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						position: relative;
						margin: 0 auto;

						picker {

							-webkit-box-sizing: border-box;
							box-sizing: border-box;
							padding-right: 20px;
							font-size: 16px;
							height: 40px;
							width: 100%;
							border: 0;
							color: #4A4A4A;
							background: transparent;
							position: absolute;
							bottom: 0px;
							left: 0px;
							outline: none;
							border-bottom: 1px solid #999;
						}

						.ipt {
							-webkit-box-sizing: border-box;
							box-sizing: border-box;
							padding-right: 20px;
							font-size: 16px;
							height: 40px;
							width: 100%;
							border: 0;
							color: #4A4A4A;
							background: transparent;
							border-bottom: 1px solid #999;
							position: absolute;
							bottom: 0;
							left: 0;
							outline: none;
						}

						.cod-btn {
							width: 120px;
							height: 30px;
							line-height: 1.5;
							border-radius: 20px;
							margin-left: 10px;
							font-size: 14px;
							color: #01ced1;
							text-align: center;
							position: absolute;
							right: 0;
							bottom: 0px;
							background: transparent;
							border: none;
							z-index: 9;
						}

						.cod-btn:after {
							border: none;
						}
					}
				}
			}
		}

		.submit {
			box-sizing: border-box;
			padding: 40px 26px;
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
				margin: 20px 15px;
				color: #4A4A4A;

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
