<template>
    <view class="main-content">
        <!-- <view v-if="hasLogin" class="hello"></view>
        <view v-if="!hasLogin" class="hello"></view> -->
		<view id="header" class="header">
			<view class="header-border">
				<image src="../../static/img/main/pan.png" class="header-icon"/>
				<text>889088</text>
			</view>
			<view class="header-border">
				<image src="../../static/img/main/focus.svg" class="header-icon"/>
				<text>657</text>
			</view>
		</view>
		<view class="header-border" style="border:0.1upx solid #8F8F94;">
			<image src="../../static/img/main/notice.png" class="header-icon"/>
			<text>公益基金池建設中，捐贈10個token星球返回10個</text>
		</view>
		<view class="token-area">
			<view id="content" class="token-content">
				<token
					v-for="(item, index) in tokens"
					:key="index"
					class="mine-item topTobottom"
					:tokenValue="item.value"/>
			</view>
			<view class="welfare-content" @tap="toPan">
				<image src="../../static/img/main/welfare.png" class="welfare-icon"/>
				<span class="welfare-text">星球公益</span>
			</view>
		</view>
		<!-- swiper滑动器 -->
		<swiper class="swiper"
			:indicator-dots="indicatorDots"
			:autoplay="autoplay"
			:interval="interval"
			:duration="duration"
			:circular="circular"
			next-margin="1upx"
			display-multiple-items=2.2>
			<swiper-item v-for="(i, ind) in slides" :key="ind">
				<view class="swiper-item" @tap="linkTo(i.linkTab)">
					<img :src="i.number" alt="加载失败">
				</view>
			</swiper-item>
		</swiper>
    </view>
</template>

<script>
	import token from '../../components/token.vue';
    import {
        mapState
    } from 'vuex'
	
    export default {
		data() {
			return {
				slides: [{
					number: 'static/img/slider/mainPact.svg',
					linkTab: 'pact'
				}, {
					number: 'static/img/slider/mainDaily.svg',
					linkTab: 'daily'
				}, {
					number: 'static/img/slider/mainNearby.svg',
					linkTab: 'nearby'
				}, {
					number: 'static/img/slider/mainPan.svg',
					linkTab: 'pan'
				}, {
					number: 'static/img/slider/mainStore.svg',
					linkTab: 'store'
				}, {
					number: 'static/img/slider/mainGame.svg',
					linkTab: 'game'
				}, {
					number: 'static/img/slider/mainEntertain.svg',
					linkTab: 'entertain'
				}],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				circular: false,
				currentSwiper: 0,
				tokens: [{
					value: '0.0214'
				}, {
					value: '0.0872'
				}, {
					value: '0.0476'
				}, {
					value: '0.0013'
				}]
			}
		},	
		components: {
			token
		},
		mounted() {
			console.log("sss");
		},
		methods: {
			toPan() {
				uni.switchTab({
					url: '../pan/pan'
				});
			},
			linkTo(linkTab) {
				// console.log(linkTab)
				if(linkTab == 'pan') {
					uni.switchTab({
					  url: '../pan/pan'
					});
				} else if (linkTab == 'pact') {
					uni.navigateTo({
					  url:'../pact/pact'
					});
				  }
				  else if (linkTab == 'daily') {
				  	uni.navigateTo({
				  	  url:'../daily/daily'
				  	});
				  }
				  else if (linkTab == 'store') {
					uni.navigateTo({
					  url:'../store/store'
					});
				  }
				  else if (linkTab == 'game') {
					uni.navigateTo({
					  url:'../game/game'
					});
				  }
				  else if (linkTab == 'entertain') {
					uni.navigateTo({
					   url:'../entertain/entertain'
					});
				  }
			}
		}
    }
</script>

<style scoped="true">
	.header {
		display: flex;
		flex-direction: row;
		margin-left: 0;

	}
	
	.header-border {
		border:1px solid #C8C7CC;
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
		height: 60%;
		background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjYxcHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCAyNjEgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+5YiG57uEIDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAuMzg4NjM3NDM3IDAuOTEwODYyODU4IDE4MC40OTcwMjcgMC45MTA4NjI4NTggMTgwLjQ5NzAyNyAxODEuNjQyMjI5IDAuMzg4NjM3NDM3IDE4MS42NDIyMjkiPjwvcG9seWdvbj4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjAgMCAzNiAwIDM2IDM2IDAgMzYiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpppbpoIHnjqnovYlQQU4iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmiYvmnLoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03My4wMDAwMDAsIC0xMjIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMuMDAwMDAwLCAxMjIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5YiG57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNTcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIzMy4yODk2Myw2NSBDMjMxLjIxMTQwOCw2NSAyMjkuMzEwMzA4LDYzLjYxODUxMzIgMjI4Ljc0NzQ1Niw2MS41MjM0MTA2IEMyMjcuOTMyNjk5LDU4LjQ5NTExODIgMjIzLjc1NjU3NSw1NS44MzgwMTA2IDIxNi45OTA1NDcsNTQuMDM2OTgwNSBDMjE1Ljk2NzE4LDUzLjc2NjQzMzggMjE0Ljg5MTMzMyw1My41MTQxODUxIDIxMy43NjQzMTcsNTMuMjg1NDYyMSBDMjExLjIxOTAyMSw1Mi43NjY1ODc2IDIwOS41NzYzODYsNTAuMjg5ODQ0NCAyMTAuMDk1OTQxLDQ3Ljc1MTY3MjggQzIxMC42MTgxMjEsNDUuMjE2MTE1MSAyMTMuMDk2NTA1LDQzLjU3MDYxNjYgMjE1LjY1MDk4Niw0NC4wOTg2Mzk5IEMyMTYuOTYyOTk0LDQ0LjM2NjU3MjUgMjE4LjIxOTg5OSw0NC42NTkzMzggMjE5LjQxNzc2Myw0NC45NzgyNDMyIEMyMjkuODY5MjIzLDQ3Ljc1ODIwNzcgMjM2LjA2NTg0LDUyLjUwNzgwMzkgMjM3LjgzODM2NCw1OS4wOTc2Mzk5IEMyMzguNTExNDI0LDYxLjU5NzkwODkgMjM3LjAyMDk4Miw2NC4xNjg3NTUzIDIzNC41MTExMSw2NC44Mzc5MzM0IEMyMzQuMTAzMDc1LDY0Ljk0OTAyNzQgMjMzLjY5MzcyOCw2NSAyMzMuMjg5NjMsNjUiIGlkPSJGaWxsLTEiIGZpbGw9IiMyRjI3MjUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS43NTk0NzcwOSwxMjEuMDI1OTMzIEM5LjY0ODQ5ODA3LDEyMC42MTQ1OTMgOS41OTIzNDAwMSwxMjAuMTk1MzE2IDkuNTkyMzQwMDEsMTE5LjczMTA3IEM5LjU4Njk5MTYyLDExOC41NDU5ODcgOS45OTA3OTQ4MywxMTYuOTY4MDc5IDExLjA5NTIzNjcsMTE1LjAxOTgzMyBDMTIuOTk5MjYyNCwxMTEuNjE1MzYzIDE3LjAzMzI4MzIsMTA3LjMzMTMzNyAyMi44OTExMDM5LDEwMi44OTM4ODYgQzI2LjU4NDE2NSwxMDAuMDc5MzEyIDMwLjk4NTg4NzMsOTcuMTg2NzAyNiAzNiw5NC4yNzgyMjEzIEwzNC43NTExNTE3LDg0IEMyNS4zOTE0NzQ3LDg5LjEzNDQ4MTQgMTYuMzk1NDg4MSw5NS4wODIzODUzIDkuNjI1NzY3NDIsMTAxLjcyNTk5NyBDNi43NDI5ODY5MiwxMDQuNTYzMDU2IDQuNDExMDkwMjYsMTA3LjQxNDY2NCAyLjcyNjM0ODQxLDExMC4zODEzNDEgQzEuMDUwOTY2MjMsMTEzLjMzODc2IDAuMDA0MDE5NTA5NDMsMTE2LjQ3MDc2NyA4LjIxOTMwNDY0ZS0wNiwxMTkuNzMxMDcgQy0wLjAwMTMyODg3NzQsMTIwLjk5MDIyMiAwLjE2MDQ1OTgyNCwxMjIuMjUzMzQxIDAuNDkzMzk2OTA1LDEyMy40ODA3NSBDMS4xODA2NjQ2MSwxMjYuMDEyMjc5IDMuODEwNzMzODQsMTI3LjUxNDc5NiA2LjM2ODU5OTg0LDEyNi44Mzc2MDUgQzguOTI3ODAyOTQsMTI2LjE1OTA5MiAxMC40NDU0MDc3LDEyMy41NTc0NjMgOS43NTk0NzcwOSwxMjEuMDI1OTMzIiBpZD0iRmlsbC0zIiBmaWxsPSIjMkYyNzI1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTYiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkwLjQzODQzMzYsMTAuNDIxODg4NiBMOTAuNDM4NDMzNiwxMC40MjE4ODg2IEM4My40NDY4MTMxLDEwLjQyMTg4ODYgNzYuNDM5MzM4NywxMS4zMzQwNzc0IDY5LjU5MTcyNTUsMTMuMTc0MzY1MSBDMjYuNjgxNTEzOSwyNC43MTMyODcxIDEuMTI0ODQyMzQsNjkuMTM0NzU2MSAxMi42MjE2NDUzLDExMi4xOTcyMjMgQzE3LjU5NDUyMTIsMTMwLjgyNTQ5NSAyOS4wNjA5MzcyLDE0Ny4wODE4MTIgNDQuOTA3MDI0OCwxNTcuOTY5NzM5IEM2NC4zNTE5NzM3LDE3MS4zMzAzODcgODguNTQ5MTYzNSwxNzUuNDg0MjkzIDExMS4yOTQzOSwxNjkuMzY5NDQ2IEMxNTQuMjA1OTIzLDE1Ny44MzA1MjQgMTc5Ljc2MTI3MywxMTMuNDA5MDU1IDE2OC4yNjQ0Nyw3MC4zNDUyNjI0IEMxNjIuMTY4NjAxLDQ3LjUxODAwNSAxNDYuNDg1MDE4LDI4LjU2NjIyMzggMTI1LjIzMjcxMSwxOC4zNDc4NTQgQzExNC4zMDI2ODksMTMuMDkzNDg3OSAxMDIuMzk4OTY2LDEwLjQyMTg4ODYgOTAuNDM4NDMzNiwxMC40MjE4ODg2IE05MC40MjM5MDA3LDE4MS42NDI4OTIgQzcyLjQ1MDczMjgsMTgxLjY0Mjg5MiA1NC43MTAwOTA1LDE3Ni4yMzIwNzUgMzkuNTUxMDEwMiwxNjUuODE4ODA1IEMyMS44NDA3NTQ3LDE1My42NDg3NzUgOS4wMjU0MjYyOCwxMzUuNDc5MjQ5IDMuNDY3MjcyOTksMTE0LjY1OTMzNyBDLTkuMzgzNzI3MDEsNjYuNTI5NDQ5NyAxOS4xNzg2MDE1LDE2Ljg4Mjc4MzQgNjcuMTM4MzE2OCwzLjk4NjE4NTEzIEM4Ny44ODU5MzcyLC0xLjU5MDM2MzkgMTA5Ljk3MzIyMiwwLjQ2MjA2MDcwOCAxMjkuMzI4MzMxLDkuNzY5NTY3NjUgQzE1My4wNzc2NDUsMjEuMTg5MTYyNyAxNzAuNjA4MjIyLDQyLjM3MTAzMzIgMTc3LjQxODg0Miw2Ny44ODQ0NzQyIEMxOTAuMjY4NTIxLDExNi4wMTE3MSAxNjEuNzA3NTE0LDE2NS42NTk3MDIgMTEzLjc0Nzc5OSwxNzguNTU2MyBDMTA2LjA1NzI4LDE4MC42MjQ2MzUgOTguMjE4NzkxMiwxODEuNjQyODkyIDkwLjQyMzkwMDcsMTgxLjY0Mjg5MiIgaWQ9IkZpbGwtNSIgZmlsbD0iIzJGMjcyNSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ni40NDk2Mzc0LDE0MC4yODk5MjggQzIxLjY3ODA3MTYsMTQwLjI4OTkyOCAzLjM5OTM2ODA3LDEzNS4yNzYzOTYgMC4xNjM1MjAyODQsMTIzLjIyMjI3NiBDLTAuNTE2NDU3NTQyLDEyMC42OTc2OTUgMC45ODYzNzI4MjksMTE4LjEwMTg0OSAzLjUxODQzMDM0LDExNy40MjYxNjQgQzYuMDQ3ODQyMDIsMTE2LjczODYwMSA4LjY1MDAxMzk3LDExOC4yNDU2OTYgOS4zMjg2Njg4OSwxMjAuNzcyOTE3IEMxMi40MDg0MTI4LDEzMi4yMjc4OTQgNTguNTQ5MDA5NCwxMzcuMDIxMDM2IDEyNi43MDk1MSwxMTguODAzOTI4IEMxOTQuODY2MDQzLDEwMC41ODQxODEgMjMyLjQyNjIxOSw3My40MTk1MjE2IDIyOS4zNTA0NDQsNjEuOTYxOTA1NSBDMjI4LjY3MTc4OSw1OS40MzYwMDM5IDIzMC4xNzQ2MTksNTYuODQxNDc4MSAyMzIuNzA1MzU0LDU2LjE2NDQ3MzEgQzIzNS4yMzYwODgsNTUuNDgyMTg5NCAyMzcuODM5NTgzLDU2Ljk4NTMyNTIgMjM4LjUxNjkxNSw1OS41MTI1NDY0IEMyNDQuODk5OTc1LDgzLjI3MjM4NTIgMTg2LjkzNzgxOSwxMTIuNTA2MzMgMTI5LjE2NDgzOSwxMjcuOTQ2Nzk0IEMxMDAuNjk4Mzc0LDEzNS41NTc0OTIgNzAuNTEwNzk4MywxNDAuMjg5OTI4IDQ2LjQ0OTYzNzQsMTQwLjI4OTkyOCBMMjI0LjA2MjUsMTU3IiBpZD0iRmlsbC03IiBmaWxsPSIjMkYyNzI1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5YiG57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4wMDA2NDc1LDguMTI5Nzg0MTcgTDE4LjAwMDY0NzUsOC4xMjk3ODQxNyBDMTIuNTU3NzE3OSw4LjEyOTc4NDE3IDguMTI4NzgxNjEsMTIuNTU3MjY2MiA4LjEyODc4MTYxLDE4IEM4LjEyODc4MTYxLDIzLjQ0MjczMzggMTIuNTU3NzE3OSwyNy44NzE1MTA4IDE4LjAwMDY0NzUsMjcuODcxNTEwOCBDMjMuNDQzNTc3MSwyNy44NzE1MTA4IDI3Ljg3MTIxODQsMjMuNDQyNzMzOCAyNy44NzEyMTg0LDE4IEMyNy44NzEyMTg0LDEyLjU1NzI2NjIgMjMuNDQzNTc3MSw4LjEyOTc4NDE3IDE4LjAwMDY0NzUsOC4xMjk3ODQxNyBNMTguMDAwNjQ3NSwzNiBDOC4wNzQzOTExNywzNiAwLDI3LjkyNTg5OTMgMCwxOCBDMCw4LjA3NDEwMDcyIDguMDc0MzkxMTcsMCAxOC4wMDA2NDc1LDAgQzI3LjkyNTYwODgsMCAzNiw4LjA3NDEwMDcyIDM2LDE4IEMzNiwyNy45MjU4OTkzIDI3LjkyNTYwODgsMzYgMTguMDAwNjQ3NSwzNiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzJGMjcyNSIgbWFzaz0idXJsKCNtYXNrLTQpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
		background-repeat: no-repeat;
		background-position: center;
	}
	
	.token-content {
		width: 100%;
		height: auto;
		float: left;
		padding: 40upx 0 20upx 30upx;
	}
	
	.welfare-content {
		position: absolute;
		right: 50upx;
		margin-top: 50upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
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
		width: 100%;
		height: 450upx;
		margin-bottom: 40upx;
	}

	.swiper-item > img {
		width: 300upx;
	}
</style>
