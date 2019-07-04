<template>
	<view class="main-content">
		<!-- <view v-if="hasLogin" class="hello"></view>
        <view v-if="!hasLogin" class="hello"></view> -->
		<view id="header" class="header">
			<view class="header-border">
				<image src="../../static/img/main/pan.png" class="header-icon" />
				<text>889088</text>
			</view>
			<view class="header-border">
				<image src="../../static/img/main/focus.svg" class="header-icon" />
				<text>657</text>
			</view>
		</view>
		<view class="header-border" style="border:0.1upx solid #8F8F94;">
			<image src="../../static/img/main/notice.png" class="header-icon" />
			<text>公益基金池建設中，首次捐贈10個token星球返回10個</text>
		</view>
		<view class="token-area" :style="{'background-image':'url('+bgColor+')'}">
			<!-- <view class="welfare-content" @tap="toPan">
				<image src="../../static/img/main/welfare.png" class="welfare-icon" />
				<view class="welfare-text">星球公益</view>
			</view> -->
			<view class="planetPublic">
				<view class="planetPublic-box">
					<image src="../../static/img/main/welfare.png" class="welfare-icon" />
					<view class="planet-text">星球公益</view>
				</view>
			</view>
			<view id="content" class="token-content">
				<!-- <token v-for="(item, index) in tokens" :key="index" class="mine-item topTobottom" :tokenValue="item" :index="index"
				 @confirm="pushToken" /> -->
				<view id="token" class="token topTobottom" v-for="(item, index) in tokenList" :style="{'left':item.leftVal+'px','top':item.topVal+'px','display':item.display}"
				 :key="index" v-bind:class="{'topTobottom-1':Math.random()>0.4,'topTobottom':Math.random()<0.4}" @click="pushToken(item,index,$event)">
					<image src="../../static/img/main/token.png" class="token-icon"></image>
					<view class="token-num">{{item.value}}</view>
				</view>
			</view>
		</view>
		<!-- swiper滑动器 -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
		 :circular="circular" next-margin="1upx" display-multiple-items=2.2>
			<swiper-item v-for="(i, ind) in slides" :key="ind">
				<navigator class="swiper-item" :url="i.linkTab">
					<img :src="i.number" alt="加载失败">
				</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	//import token from '../../components/token.vue';
	import {
		mainSlider
	} from '../../common/js/json.js';
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				slides: '',
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				circular: false,
				currentSwiper: 0,
				tokens: [],
				tokenList: [],
				bgColor: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjM5cHgiIGhlaWdodD0iMTgycHgiIHZpZXdCb3g9IjAgMCAyMzkgMTgyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+5pif55CDMTExMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4zODg2Mzc0MzcgMC45MTA4NjI4NTggMTgwLjQ5NzAyNyAwLjkxMDg2Mjg1OCAxODAuNDk3MDI3IDE4MS42NDIyMjkgMC4zODg2Mzc0MzcgMTgxLjY0MjIyOSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaYn+eQgzExMTEiPgogICAgICAgICAgICA8ZyBpZD0i5YiG57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMzLjI4OTYzLDY1IEMyMzEuMjExNDA4LDY1IDIyOS4zMTAzMDgsNjMuNjE4NTEzMiAyMjguNzQ3NDU2LDYxLjUyMzQxMDYgQzIyNy45MzI2OTksNTguNDk1MTE4MiAyMjMuNzU2NTc1LDU1LjgzODAxMDYgMjE2Ljk5MDU0Nyw1NC4wMzY5ODA1IEMyMTUuOTY3MTgsNTMuNzY2NDMzOCAyMTQuODkxMzMzLDUzLjUxNDE4NTEgMjEzLjc2NDMxNyw1My4yODU0NjIxIEMyMTEuMjE5MDIxLDUyLjc2NjU4NzYgMjA5LjU3NjM4Niw1MC4yODk4NDQ0IDIxMC4wOTU5NDEsNDcuNzUxNjcyOCBDMjEwLjYxODEyMSw0NS4yMTYxMTUxIDIxMy4wOTY1MDUsNDMuNTcwNjE2NiAyMTUuNjUwOTg2LDQ0LjA5ODYzOTkgQzIxNi45NjI5OTQsNDQuMzY2NTcyNSAyMTguMjE5ODk5LDQ0LjY1OTMzOCAyMTkuNDE3NzYzLDQ0Ljk3ODI0MzIgQzIyOS44NjkyMjMsNDcuNzU4MjA3NyAyMzYuMDY1ODQsNTIuNTA3ODAzOSAyMzcuODM4MzY0LDU5LjA5NzYzOTkgQzIzOC41MTE0MjQsNjEuNTk3OTA4OSAyMzcuMDIwOTgyLDY0LjE2ODc1NTMgMjM0LjUxMTExLDY0LjgzNzkzMzQgQzIzNC4xMDMwNzUsNjQuOTQ5MDI3NCAyMzMuNjkzNzI4LDY1IDIzMy4yODk2Myw2NSIgaWQ9IkZpbGwtMSIgZmlsbD0iIzJGMjcyNSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS43NTk0NzcwOSwxMjEuMDI1OTMzIEM5LjY0ODQ5ODA3LDEyMC42MTQ1OTMgOS41OTIzNDAwMSwxMjAuMTk1MzE2IDkuNTkyMzQwMDEsMTE5LjczMTA3IEM5LjU4Njk5MTYyLDExOC41NDU5ODcgOS45OTA3OTQ4MywxMTYuOTY4MDc5IDExLjA5NTIzNjcsMTE1LjAxOTgzMyBDMTIuOTk5MjYyNCwxMTEuNjE1MzYzIDE3LjAzMzI4MzIsMTA3LjMzMTMzNyAyMi44OTExMDM5LDEwMi44OTM4ODYgQzI2LjU4NDE2NSwxMDAuMDc5MzEyIDMwLjk4NTg4NzMsOTcuMTg2NzAyNiAzNiw5NC4yNzgyMjEzIEwzNC43NTExNTE3LDg0IEMyNS4zOTE0NzQ3LDg5LjEzNDQ4MTQgMTYuMzk1NDg4MSw5NS4wODIzODUzIDkuNjI1NzY3NDIsMTAxLjcyNTk5NyBDNi43NDI5ODY5MiwxMDQuNTYzMDU2IDQuNDExMDkwMjYsMTA3LjQxNDY2NCAyLjcyNjM0ODQxLDExMC4zODEzNDEgQzEuMDUwOTY2MjMsMTEzLjMzODc2IDAuMDA0MDE5NTA5NDMsMTE2LjQ3MDc2NyA4LjIxOTMwNDY0ZS0wNiwxMTkuNzMxMDcgQy0wLjAwMTMyODg3NzQsMTIwLjk5MDIyMiAwLjE2MDQ1OTgyNCwxMjIuMjUzMzQxIDAuNDkzMzk2OTA1LDEyMy40ODA3NSBDMS4xODA2NjQ2MSwxMjYuMDEyMjc5IDMuODEwNzMzODQsMTI3LjUxNDc5NiA2LjM2ODU5OTg0LDEyNi44Mzc2MDUgQzguOTI3ODAyOTQsMTI2LjE1OTA5MiAxMC40NDU0MDc3LDEyMy41NTc0NjMgOS43NTk0NzcwOSwxMjEuMDI1OTMzIiBpZD0iRmlsbC0zIiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJGaWxsLTUtQ2xpcHBlZCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InBhdGgtMSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTAuNDM4NDMzNiwxMC40MjE4ODg2IEw5MC40Mzg0MzM2LDEwLjQyMTg4ODYgQzgzLjQ0NjgxMzEsMTAuNDIxODg4NiA3Ni40MzkzMzg3LDExLjMzNDA3NzQgNjkuNTkxNzI1NSwxMy4xNzQzNjUxIEMyNi42ODE1MTM5LDI0LjcxMzI4NzEgMS4xMjQ4NDIzNCw2OS4xMzQ3NTYxIDEyLjYyMTY0NTMsMTEyLjE5NzIyMyBDMTcuNTk0NTIxMiwxMzAuODI1NDk1IDI5LjA2MDkzNzIsMTQ3LjA4MTgxMiA0NC45MDcwMjQ4LDE1Ny45Njk3MzkgQzY0LjM1MTk3MzcsMTcxLjMzMDM4NyA4OC41NDkxNjM1LDE3NS40ODQyOTMgMTExLjI5NDM5LDE2OS4zNjk0NDYgQzE1NC4yMDU5MjMsMTU3LjgzMDUyNCAxNzkuNzYxMjczLDExMy40MDkwNTUgMTY4LjI2NDQ3LDcwLjM0NTI2MjQgQzE2Mi4xNjg2MDEsNDcuNTE4MDA1IDE0Ni40ODUwMTgsMjguNTY2MjIzOCAxMjUuMjMyNzExLDE4LjM0Nzg1NCBDMTE0LjMwMjY4OSwxMy4wOTM0ODc5IDEwMi4zOTg5NjYsMTAuNDIxODg4NiA5MC40Mzg0MzM2LDEwLjQyMTg4ODYgTTkwLjQyMzkwMDcsMTgxLjY0Mjg5MiBDNzIuNDUwNzMyOCwxODEuNjQyODkyIDU0LjcxMDA5MDUsMTc2LjIzMjA3NSAzOS41NTEwMTAyLDE2NS44MTg4MDUgQzIxLjg0MDc1NDcsMTUzLjY0ODc3NSA5LjAyNTQyNjI4LDEzNS40NzkyNDkgMy40NjcyNzI5OSwxMTQuNjU5MzM3IEMtOS4zODM3MjcwMSw2Ni41Mjk0NDk3IDE5LjE3ODYwMTUsMTYuODgyNzgzNCA2Ny4xMzgzMTY4LDMuOTg2MTg1MTMgQzg3Ljg4NTkzNzIsLTEuNTkwMzYzOSAxMDkuOTczMjIyLDAuNDYyMDYwNzA4IDEyOS4zMjgzMzEsOS43Njk1Njc2NSBDMTUzLjA3NzY0NSwyMS4xODkxNjI3IDE3MC42MDgyMjIsNDIuMzcxMDMzMiAxNzcuNDE4ODQyLDY3Ljg4NDQ3NDIgQzE5MC4yNjg1MjEsMTE2LjAxMTcxIDE2MS43MDc1MTQsMTY1LjY1OTcwMiAxMTMuNzQ3Nzk5LDE3OC41NTYzIEMxMDYuMDU3MjgsMTgwLjYyNDYzNSA5OC4yMTg3OTEyLDE4MS42NDI4OTIgOTAuNDIzOTAwNywxODEuNjQyODkyIiBpZD0iRmlsbC01IiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ni40NDk2Mzc0LDE0MC4yODk5MjggQzIxLjY3ODA3MTYsMTQwLjI4OTkyOCAzLjM5OTM2ODA3LDEzNS4yNzYzOTYgMC4xNjM1MjAyODQsMTIzLjIyMjI3NiBDLTAuNTE2NDU3NTQyLDEyMC42OTc2OTUgMC45ODYzNzI4MjksMTE4LjEwMTg0OSAzLjUxODQzMDM0LDExNy40MjYxNjQgQzYuMDQ3ODQyMDIsMTE2LjczODYwMSA4LjY1MDAxMzk3LDExOC4yNDU2OTYgOS4zMjg2Njg4OSwxMjAuNzcyOTE3IEMxMi40MDg0MTI4LDEzMi4yMjc4OTQgNTguNTQ5MDA5NCwxMzcuMDIxMDM2IDEyNi43MDk1MSwxMTguODAzOTI4IEMxOTQuODY2MDQzLDEwMC41ODQxODEgMjMyLjQyNjIxOSw3My40MTk1MjE2IDIyOS4zNTA0NDQsNjEuOTYxOTA1NSBDMjI4LjY3MTc4OSw1OS40MzYwMDM5IDIzMC4xNzQ2MTksNTYuODQxNDc4MSAyMzIuNzA1MzU0LDU2LjE2NDQ3MzEgQzIzNS4yMzYwODgsNTUuNDgyMTg5NCAyMzcuODM5NTgzLDU2Ljk4NTMyNTIgMjM4LjUxNjkxNSw1OS41MTI1NDY0IEMyNDQuODk5OTc1LDgzLjI3MjM4NTIgMTg2LjkzNzgxOSwxMTIuNTA2MzMgMTI5LjE2NDgzOSwxMjcuOTQ2Nzk0IEMxMDAuNjk4Mzc0LDEzNS41NTc0OTIgNzAuNTEwNzk4MywxNDAuMjg5OTI4IDQ2LjQ0OTYzNzQsMTQwLjI4OTkyOCBMMjI0LjA2MjUsMTU3IiBpZD0iRmlsbC03IiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
				targetWidth: "",
				tokenWidth: ""
			}
		},
		methods: {
			toPan() {
				uni.switchTab({
					url: '../pan/pan'
				});
			},
			getMainSlider() {
				mainSlider().then(data => {
					this.slides = data;
				});
			},
			async getToken() { //获取token
				let res = await this.api.homeToken().getIndexPan();
				if (res.data.status == 200) {
					//res.data.data
					this.tokens = [0.12, 0.23, 0.44, 0.33];
					let num = this.tokens.length;
					let iconWidth;
					let iconHeight;
					uni.createSelectorQuery().select(".planetPublic-box").fields({
						size: true,
					}, (data) => {
						iconWidth = data.width;
						this.tokenWidth = iconWidth;
						iconHeight = data.height;
						console.log("iconWidth", iconWidth);
						console.log("iconHeight", iconHeight);
					}).exec();
					uni.createSelectorQuery().select("#content").fields({
						size: true,
					}, (data) => {
						//planetPublic-box
						let targetHeight = data.height;
						let targetWidth = data.width;
						this.targetWidth = targetWidth;
						let _tmpArray = [];
						let html = "";
						//当放置的元素的宽高大于容器的宽高时，直接返回
						if (targetWidth < iconWidth || targetHeight < iconHeight) {
							return false;
						}
						let xNum = parseInt(targetWidth / iconWidth, 10); //用浏览器的宽度除以一个元素的宽度可算出浏览器窗口内一行可以放置元素的个数
						let yNum = parseInt(targetHeight / iconHeight, 10); //用浏览器的高度除以一个元素的高度可算出浏览器窗口内一列可以放置元素的个数
						let allNum = xNum * yNum; //浏览器窗口内总共可以放置元素的个数
						//当需要放置的元素的个数超过浏览器窗口内总共可以放置的元素的个数时，则返回
						if (num >= allNum) {
							return false;
						}
						for (let i = 0; i < allNum; i++) {
							_tmpArray.push(i);
						}
						let xStart = 0,
							yStart = 0;
						let arr = [];
						while (num) {
							var pointer = Math.floor(Math.random() * allNum); //向下取整取出0到allnum之间的任意一个整数
							//如果数组_tmpArray中不存在第pointer值，则继续
							if (!_tmpArray[pointer]) {
								continue;
							}

							delete _tmpArray[pointer]; //删除数组_tmpArray中第pointer个值
							yStart = parseInt(pointer / xNum, 10) * iconWidth;
							xStart = (pointer % xNum) * iconHeight;
							let o = {
								value: this.tokens[num - 1],
								leftVal: xStart,
								topVal: yStart,
								display: "block",
								styleVal: {
									'left': xStart + 'px',
									'top': yStart + 'px'
								}
							}
							arr.push(o);
							num--;
						}
						this.tokenList = arr;
					}).exec();
				}
			},
			pushToken(item, index, e) { //收取token
				this.tokenList[index].leftVal = 0;
				this.tokenList[index].topVal = -this.tokenWidth - 70;
				setTimeout(() => {
					this.tokenList[index].display = 'none';
					this.takePan(item.value);
				}, 2000);
			},
			async takePan(token) {
				let res = await this.api.homeToken().takePan({
					numbers: Number(token)
				});
				if (res.data.status == 200) {
					console.log("成功");
				}
			}
		},
		onLoad() {
			this.getMainSlider();
			this.getToken();
		}
	}
</script>

<style lang="scss" scoped="true">
	.header {
		display: flex;
		flex-direction: row;
		margin-left: 0;

	}

	.header-border {
		border: 1px solid #C8C7CC;
		border-radius: 30upx;
		display: flex;
		flex-direction: row;
		padding: 5upx 20upx;
		margin: 0 20upx 10upx 0;
	}

	.header-icon {
		display: flex;
		flex-direction: row;
		width: 32upx;
		height: 32upx;
	}

	text {
		font-size: 25upx;
		margin-left: 15upx;
		margin-bottom: 5upx;
	}

	.token-area {
		width: 100%;
		height: 600upx;
		position: relative;
		// overflow: hidden;
		background-repeat: no-repeat;
		background-position: center;

		.planetPublic {
			width: 100%;
			height: 100upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}

		.planetPublic-box {
			width: 128upx;
			height: 128upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.welfare-icon {
				width: 45upx;
				height: 40upx;
			}

			.planet-text {
				font-size: 22upx;
				color: #4CD964;
			}
		}
	}

	.token-content {
		width: 100%;
		height: 500upx;
		position: relative;

		.token {
			position: absolute;
			width: 128upx;
			height: 110upx;
			text-align: center;
			z-index: 66;
			transition-property: all;
			transition-duration: 2s;
			transition-timing-function: ease-out;

			.token-icon {
				width: 48upx;
				height: 48upx;
			}

			.token-num {
				font-size: 25upx;
			}
		}
	}

	.welfare-content {
		position: absolute;
		top: 25upx;
		right: 30upx;
		margin-top: 20upx;
		z-index: 6;
		width: 120upx;
		// height: 88upx;
		text-align: center;

		.welfare-icon {
			margin: 0 auto;
			display: block;
		}

		.welfare-text {
			text-align: center;
		}
	}

	.welfare-icon {
		width: 55upx;
		height: 48upx;
		margin-bottom: 8upx;
	}

	.welfare-text {
		margin-left: -22upx;
		font-size: 25upx;
		color: #4CD964;
	}

	.swiper {
		position: absolute;
		bottom: 40upx;
		width: 100%;
		height: 450upx;
	}

	.swiper-item>img {
		width: 300upx;
	}

	/* 动画 */
	.topTobottom {
		animation-name: topTobottom;
		animation-duration: 3s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.topTobottom-1 {
		animation-name: topTobottom;
		animation-duration: 3s;
		animation-timing-function: linear;
		animation-delay: 1s;
		animation-iteration-count: infinite;
	}

	@keyframes topTobottom {
		0% {
			transform: translate(0, 0)
		}

		50% {
			transform: translate(0, 6px)
		}

		100% {
			transform: translate(0, 0)
		}
	}

	@-moz-keyframes topTobottom

	/* Firefox */
		{
		0% {
			transform: translate(0, 0)
		}

		50% {
			transform: translate(0, 6px)
		}

		100% {
			transform: translate(0, 0)
		}
	}

	@-webkit-keyframes topTobottom

	/* Safari 和 Chrome */
		{
		0% {
			transform: translate(0, 0)
		}

		50% {
			transform: translate(0, 6px)
		}

		100% {
			transform: translate(0, 0)
		}
	}

	@-o-keyframes topTobottom

	/* Opera */
		{
		0% {
			transform: translate(0, 0)
		}

		50% {
			transform: translate(0, 6px)
		}

		100% {
			transform: translate(0, 0)
		}
	}
</style>
