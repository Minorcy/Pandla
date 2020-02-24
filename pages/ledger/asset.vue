<template>
	<view class="pages-content" scroll-y="true">
		<uni-nav-bar left-icon="back" background-color="#e1e1e1" color="#000" :fixed="true" :status-bar="true" @clickLeft="back()">
			<view class="tabbar-title">
				<text @click="showPAN">PAN</text>
				<text class="interval">|</text>
				<text @click="showFocus">原力</text>
			</view>
		</uni-nav-bar>
		<view class="content-box" v-if="pageShow">
			<view class="top-wrapper">
				<view class="asset">
					<view class="asset-left">
						<p>我的資產PAN</p>
						<text class="balance">{{propInfo.balance | toFixed(4)}}</text>
						<text class="asset-rmb">≈{{ this.rmb | toFixed(4)}} USTD<text class="dollar"> (美元)</text></text>
					</view>
					<view class="asset-right">
						<p>凍結PAN</p>
					</view>
				</view>
				<view class="panData">
					<view class="data">
						<p>PAN/USTD</p>
						<p :class="red == true ? 'red' : '' ">{{data1}}</p>
						<p :class="red == true ? 'red' : '' ">{{data2}}</p>
						<text class="data-24">24H{{data3}}</text>
					</view>
				</view>
				<view class="token-box">
					<!-- <view class="star" v-if="tokenList.length == 0"></view>
					<view class="star Orange" v-if="tokenList.length == 0"></view>
					<view class="star pink" v-if="tokenList.length == 0"></view>
					<view class="star blue" v-if="tokenList.length == 0"></view>
					<view class="star yellow" v-if="tokenList.length == 0"></view>
					<view class="star purple" v-if="tokenList.length == 0"></view> -->
					<view class="token-area" :style="{'background-image':'url('+bgImage1+')'}">
						<view :class="{ avatar: isActive }">
						</view>
						<view id="content" class="token-content ">
							<view id="token" class="token topTobottom" v-for="(item, index) in tokenList" :style="{'left':item.leftVal+'px','top':item.topVal+'px','display':item.display}"
							 :key="index" v-bind:class="{'topTobottom-1':Math.random()>0.4,'topTobottom':Math.random()<0.4}" @click="pushToken(item,index,$event)">
								<image src="../../static/img/main/token.svg" class="token-icon"></image>
								<view class="token-num">{{item.value}}</view>
							</view>
						</view>

					</view>


				</view>
			</view>
			<view class="text-wrapper">
				<view class="title">
					<text>【PAN】簡介</text>
				</view>
				<view class="text">
					<text class="black">【PAN】是潘多拉星球發行的數字资产，也是潘多拉星球唯一權益證明，基於EOS公鏈發行，恆定20億永不增發PAN将用于记录用户在潘多拉星球创造的数据价值，用户也可以根据自己持有PAN的数量获得星球盈利分润</text><br>
					<text>星球居民達到200萬時將開啟二級市場流通，為保障二級市場正常秩序，星球居民每增加100萬，解鎖您總資10%，到二級市場流通</text>
				</view>
			</view>
			<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
				<block v-for="(menuTab,index) in menuTabs" :key="index">
					<view class="menu-one-view" v-bind:id="'tabNum'+index" @tap.stop="swichMenu(index)">
						<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
							<view class="menu-one-txt">{{menuTab.name}}</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<view class="pan-list">
				<ul class="pan-list-ul" v-for="(item, index) in listInfo" :key="index">
					<li class="pan-list-li" v-if="labelList == 'budget'">
						<view>
							<p class="pan-list-action">{{item.action}}</p>
							<text class="pan-list-time">{{item.create_time}}</text>
						</view>
						<text class="pan-list-number">{{item.status}}{{item.number}}</text>
					</li>
					<li class="pan-list-li" v-if="labelList == 'task'">
						<view>
							<p class="pan-list-action">{{item.name}}</p>
						</view>
						<view>
							<p class="pan-list-number">{{item.number}}個PAN</p>
							<text class="pan-list-time" v-if="item.status == 1">已完成</text>
							<text class="pan-list-time" v-if="item.status == 0">未完成</text>
						</view>
					</li>
				</ul>
				<ul class="pan-list-ul">
					<li class="pan-list-li" v-if="labelList == 'task' ">
						<view>
							<p class="pan-list-action">星球注冊</p>
						</view>
						<view>
							<p class="pan-list-number">10個PAN</p>
							<text class="pan-list-time">已完成</text>
						</view>
					</li>
				</ul>
				<button class="pan-list-load" @tap="loadMore()" v-if="isShow && labelList == 'budget' && isShow ==true">點擊查看更多</button>
			</view>
		</view>
		<view class="content-box" v-if='!pageShow'>
			<view class="focus-data">
				<view class="focus-top">
					<view class="focus-data-info">
						<text>我的原力</text>
						<text class="num">{{focusInfo.balance | toFixed(4)}}</text>
					</view>
					<view class="btn" @tap="singIn()" :class="signed == true ? 'signed' : ' ' ">
						<text v-if="!signed">签到</text>
						<text v-if="signed" class="color">已签到</text>
					</view>
				</view>
				<view class="focus-bottom">
					<text class="title">連續簽到獲得更多魔法原力</text>
					<view class="sign">
						<view v-for="(item,index) in sing" :key="index" :class="item.isSigned == true ? 'sing-in' : ' ' ">
							<text v-if="!item.isSigned">{{item.value}}</text>
							<image src="../../static/img/main/signed.svg" mode="" v-if="item.isSigned"></image>
						</view>
					</view>
				</view>

			</view>
			<view class="focus-notice">
				<p class="focus-label-introduction">原力簡介</p>
				<p class="focus-label-context">{{focusInfo.context}}</p>
			</view>

			<view class="focus-label-list">
				<text class="pan-label-budget" :style="{color: budgetText}" @tap="changeList('budget')">獲取原力記錄</text>
				<text>|</text>
				<text class="pan-label-task" :style="{color: taskText}" @tap="changeList('task')">任務獲取原力</text>
			</view>
			<view class="focus-list">
				<ul class="focus-list-ul" v-for="(item, index) in focusListInfo" :key="index">
					<li class="focus-list-li" v-if="focusLabelList == 'budget'">
						<view>
							<p class="focus-list-action">{{item.action}}</p>
							<text class="focus-list-time">{{item.createTime}}</text>
						</view>
						<view class="list-right">
							<image src="/static/img/main/lnvalid.svg" mode="" v-if="item.status == 1"></image>
							<p class="focus-list-number">{{item.type}} +{{item.number}}</p>
							<text class="focus-list-time">{{item.loseTime}}</text>
						</view>
					</li>
					<li class="focus-list-li" v-if="focusLabelList == 'task' && index == 0">
						<view>
							<p class="focus-list-action">星球注冊</p>
						</view>
						<view>
							<p class="focus-list-number">50個永久原力</p>
							<text class="focus-list-time">已完成</text>
						</view>
					</li>
					<li class="focus-list-li" v-if="focusLabelList == 'task'">
						<view>
							<p class="focus-list-action">{{item.name}}</p>
						</view>
						<view>
							<p class="focus-list-number">{{item.number}}個永久原力</p>
							<text class="focus-list-time" v-if="item.status == 1">已完成</text>
							<text class="focus-list-time" v-if="item.status == 0">未完成</text>
						</view>
					</li>
				</ul>
				<button class="pan-list-load" @tap="focusLoadMore()" v-if="focusLabelList == 'budget' && focusIsShow != true ">點擊查看更多</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import {
		getBalance,
		getBill,
		checkTaskList,
		getIndex,
		donate,
		getChange_24h,
		getWyToken,
		putWyToken,
		getForBalance,
		getForBill,
		checkForTaskList,
		signinMsg,
		signin,
		checkSignToday
	} from '../../api/api.js';
	let Token
	export default {
		data() {
			return {
				propInfo: '',
				data1: '+0.91%',
				data2: '0.082',
				data3: '89,893,708',
				panVlaue: '198,878',
				donateValue: '10',
				rmb: '',
				red: false,
				assetInfo: '',
				listInfo: '',
				labelList: 'budget',
				menuTabs: [{
					name: '收支記錄'
				}, {
					name: '任務獲取'
				}],
				scrollLeft: 0,
				currentTab: 0,
				isShow: true,
				loadingType: 10,
				bgImage1: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjM5cHgiIGhlaWdodD0iMTgycHgiIHZpZXdCb3g9IjAgMCAyMzkgMTgyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+5pif55CDMTExMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4zODg2Mzc0MzcgMC45MTA4NjI4NTggMTgwLjQ5NzAyNyAwLjkxMDg2Mjg1OCAxODAuNDk3MDI3IDE4MS42NDIyMjkgMC4zODg2Mzc0MzcgMTgxLjY0MjIyOSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaYn+eQgzExMTEiPgogICAgICAgICAgICA8ZyBpZD0i5YiG57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMzLjI4OTYzLDY1IEMyMzEuMjExNDA4LDY1IDIyOS4zMTAzMDgsNjMuNjE4NTEzMiAyMjguNzQ3NDU2LDYxLjUyMzQxMDYgQzIyNy45MzI2OTksNTguNDk1MTE4MiAyMjMuNzU2NTc1LDU1LjgzODAxMDYgMjE2Ljk5MDU0Nyw1NC4wMzY5ODA1IEMyMTUuOTY3MTgsNTMuNzY2NDMzOCAyMTQuODkxMzMzLDUzLjUxNDE4NTEgMjEzLjc2NDMxNyw1My4yODU0NjIxIEMyMTEuMjE5MDIxLDUyLjc2NjU4NzYgMjA5LjU3NjM4Niw1MC4yODk4NDQ0IDIxMC4wOTU5NDEsNDcuNzUxNjcyOCBDMjEwLjYxODEyMSw0NS4yMTYxMTUxIDIxMy4wOTY1MDUsNDMuNTcwNjE2NiAyMTUuNjUwOTg2LDQ0LjA5ODYzOTkgQzIxNi45NjI5OTQsNDQuMzY2NTcyNSAyMTguMjE5ODk5LDQ0LjY1OTMzOCAyMTkuNDE3NzYzLDQ0Ljk3ODI0MzIgQzIyOS44NjkyMjMsNDcuNzU4MjA3NyAyMzYuMDY1ODQsNTIuNTA3ODAzOSAyMzcuODM4MzY0LDU5LjA5NzYzOTkgQzIzOC41MTE0MjQsNjEuNTk3OTA4OSAyMzcuMDIwOTgyLDY0LjE2ODc1NTMgMjM0LjUxMTExLDY0LjgzNzkzMzQgQzIzNC4xMDMwNzUsNjQuOTQ5MDI3NCAyMzMuNjkzNzI4LDY1IDIzMy4yODk2Myw2NSIgaWQ9IkZpbGwtMSIgZmlsbD0iIzJGMjcyNSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS43NTk0NzcwOSwxMjEuMDI1OTMzIEM5LjY0ODQ5ODA3LDEyMC42MTQ1OTMgOS41OTIzNDAwMSwxMjAuMTk1MzE2IDkuNTkyMzQwMDEsMTE5LjczMTA3IEM5LjU4Njk5MTYyLDExOC41NDU5ODcgOS45OTA3OTQ4MywxMTYuOTY4MDc5IDExLjA5NTIzNjcsMTE1LjAxOTgzMyBDMTIuOTk5MjYyNCwxMTEuNjE1MzYzIDE3LjAzMzI4MzIsMTA3LjMzMTMzNyAyMi44OTExMDM5LDEwMi44OTM4ODYgQzI2LjU4NDE2NSwxMDAuMDc5MzEyIDMwLjk4NTg4NzMsOTcuMTg2NzAyNiAzNiw5NC4yNzgyMjEzIEwzNC43NTExNTE3LDg0IEMyNS4zOTE0NzQ3LDg5LjEzNDQ4MTQgMTYuMzk1NDg4MSw5NS4wODIzODUzIDkuNjI1NzY3NDIsMTAxLjcyNTk5NyBDNi43NDI5ODY5MiwxMDQuNTYzMDU2IDQuNDExMDkwMjYsMTA3LjQxNDY2NCAyLjcyNjM0ODQxLDExMC4zODEzNDEgQzEuMDUwOTY2MjMsMTEzLjMzODc2IDAuMDA0MDE5NTA5NDMsMTE2LjQ3MDc2NyA4LjIxOTMwNDY0ZS0wNiwxMTkuNzMxMDcgQy0wLjAwMTMyODg3NzQsMTIwLjk5MDIyMiAwLjE2MDQ1OTgyNCwxMjIuMjUzMzQxIDAuNDkzMzk2OTA1LDEyMy40ODA3NSBDMS4xODA2NjQ2MSwxMjYuMDEyMjc5IDMuODEwNzMzODQsMTI3LjUxNDc5NiA2LjM2ODU5OTg0LDEyNi44Mzc2MDUgQzguOTI3ODAyOTQsMTI2LjE1OTA5MiAxMC40NDU0MDc3LDEyMy41NTc0NjMgOS43NTk0NzcwOSwxMjEuMDI1OTMzIiBpZD0iRmlsbC0zIiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJGaWxsLTUtQ2xpcHBlZCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InBhdGgtMSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTAuNDM4NDMzNiwxMC40MjE4ODg2IEw5MC40Mzg0MzM2LDEwLjQyMTg4ODYgQzgzLjQ0NjgxMzEsMTAuNDIxODg4NiA3Ni40MzkzMzg3LDExLjMzNDA3NzQgNjkuNTkxNzI1NSwxMy4xNzQzNjUxIEMyNi42ODE1MTM5LDI0LjcxMzI4NzEgMS4xMjQ4NDIzNCw2OS4xMzQ3NTYxIDEyLjYyMTY0NTMsMTEyLjE5NzIyMyBDMTcuNTk0NTIxMiwxMzAuODI1NDk1IDI5LjA2MDkzNzIsMTQ3LjA4MTgxMiA0NC45MDcwMjQ4LDE1Ny45Njk3MzkgQzY0LjM1MTk3MzcsMTcxLjMzMDM4NyA4OC41NDkxNjM1LDE3NS40ODQyOTMgMTExLjI5NDM5LDE2OS4zNjk0NDYgQzE1NC4yMDU5MjMsMTU3LjgzMDUyNCAxNzkuNzYxMjczLDExMy40MDkwNTUgMTY4LjI2NDQ3LDcwLjM0NTI2MjQgQzE2Mi4xNjg2MDEsNDcuNTE4MDA1IDE0Ni40ODUwMTgsMjguNTY2MjIzOCAxMjUuMjMyNzExLDE4LjM0Nzg1NCBDMTE0LjMwMjY4OSwxMy4wOTM0ODc5IDEwMi4zOTg5NjYsMTAuNDIxODg4NiA5MC40Mzg0MzM2LDEwLjQyMTg4ODYgTTkwLjQyMzkwMDcsMTgxLjY0Mjg5MiBDNzIuNDUwNzMyOCwxODEuNjQyODkyIDU0LjcxMDA5MDUsMTc2LjIzMjA3NSAzOS41NTEwMTAyLDE2NS44MTg4MDUgQzIxLjg0MDc1NDcsMTUzLjY0ODc3NSA5LjAyNTQyNjI4LDEzNS40NzkyNDkgMy40NjcyNzI5OSwxMTQuNjU5MzM3IEMtOS4zODM3MjcwMSw2Ni41Mjk0NDk3IDE5LjE3ODYwMTUsMTYuODgyNzgzNCA2Ny4xMzgzMTY4LDMuOTg2MTg1MTMgQzg3Ljg4NTkzNzIsLTEuNTkwMzYzOSAxMDkuOTczMjIyLDAuNDYyMDYwNzA4IDEyOS4zMjgzMzEsOS43Njk1Njc2NSBDMTUzLjA3NzY0NSwyMS4xODkxNjI3IDE3MC42MDgyMjIsNDIuMzcxMDMzMiAxNzcuNDE4ODQyLDY3Ljg4NDQ3NDIgQzE5MC4yNjg1MjEsMTE2LjAxMTcxIDE2MS43MDc1MTQsMTY1LjY1OTcwMiAxMTMuNzQ3Nzk5LDE3OC41NTYzIEMxMDYuMDU3MjgsMTgwLjYyNDYzNSA5OC4yMTg3OTEyLDE4MS42NDI4OTIgOTAuNDIzOTAwNywxODEuNjQyODkyIiBpZD0iRmlsbC01IiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ni40NDk2Mzc0LDE0MC4yODk5MjggQzIxLjY3ODA3MTYsMTQwLjI4OTkyOCAzLjM5OTM2ODA3LDEzNS4yNzYzOTYgMC4xNjM1MjAyODQsMTIzLjIyMjI3NiBDLTAuNTE2NDU3NTQyLDEyMC42OTc2OTUgMC45ODYzNzI4MjksMTE4LjEwMTg0OSAzLjUxODQzMDM0LDExNy40MjYxNjQgQzYuMDQ3ODQyMDIsMTE2LjczODYwMSA4LjY1MDAxMzk3LDExOC4yNDU2OTYgOS4zMjg2Njg4OSwxMjAuNzcyOTE3IEMxMi40MDg0MTI4LDEzMi4yMjc4OTQgNTguNTQ5MDA5NCwxMzcuMDIxMDM2IDEyNi43MDk1MSwxMTguODAzOTI4IEMxOTQuODY2MDQzLDEwMC41ODQxODEgMjMyLjQyNjIxOSw3My40MTk1MjE2IDIyOS4zNTA0NDQsNjEuOTYxOTA1NSBDMjI4LjY3MTc4OSw1OS40MzYwMDM5IDIzMC4xNzQ2MTksNTYuODQxNDc4MSAyMzIuNzA1MzU0LDU2LjE2NDQ3MzEgQzIzNS4yMzYwODgsNTUuNDgyMTg5NCAyMzcuODM5NTgzLDU2Ljk4NTMyNTIgMjM4LjUxNjkxNSw1OS41MTI1NDY0IEMyNDQuODk5OTc1LDgzLjI3MjM4NTIgMTg2LjkzNzgxOSwxMTIuNTA2MzMgMTI5LjE2NDgzOSwxMjcuOTQ2Nzk0IEMxMDAuNjk4Mzc0LDEzNS41NTc0OTIgNzAuNTEwNzk4MywxNDAuMjg5OTI4IDQ2LjQ0OTYzNzQsMTQwLjI4OTkyOCBMMjI0LjA2MjUsMTU3IiBpZD0iRmlsbC03IiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
				tokens: [],
				tokenList: [],
				targetWidth: "",
				tokenWidth: "",
				initToken: 0,
				flog: false,
				focusInfo: '',
				focusListInfo: '',
				focusLabelList: 'budget',
				budgetText: 'black',
				taskText: 'gray',
				pageSize: 10,
				focusIsShow: false,
				sing: [{
						value: "+1",
						title: "第一天",
						isSigned: false
					},
					{
						value: "+2",
						title: "第二天",
						isSigned: false
					},
					{
						value: "+3",
						title: "第三天",
						isSigned: false
					},
					{
						value: "+5",
						title: "第四天",
						isSigned: false
					},
					{
						value: "+5",
						title: "第五天",
						isSigned: false
					},
					{
						value: "+10",
						title: "第六天",
						isSigned: false
					},
					{
						value: "+10",
						title: "第七天",
						isSigned: false
					},
				],
				singDay: "",
				force: '',
				signed: false,
				pageShow: true,
				tokenFlag: true,
				isActive: true
			}
		},
		components: {
			uniNavBar
		},
		methods: {
			showPAN() {
				this.pageShow = true
				// this.getBillData()
				// this.getTaskData()
			},
			showFocus() {
				this.pageShow = false
				// this.getFocusBill()
				// this.getFocusTask()
			},
			back() {

				uni.switchTab({
					url: '/pages/user/user'
				});
			},
			async getToken(Token) { //获取token
				this.tokens = []
				let res = await this.api.homeToken(Token).getIndexPan();
				if (res.data.status == 200) {
					this.tokens = res.data.data
					// console.log(res.data.data)
				} else if(res.data.status == 404) {
					this.isActive = true;
					return
				}
				if (this.tokens.length == 0) {
					this.isActive = true;
				} else {
					this.isActive = false;
				}
				let num = this.tokens.length;
				let iconWidth = 64;
				let iconHeight = 55;
				this.tokenWidth = iconWidth;
				uni.createSelectorQuery().select("#content").fields({
					size: true,
				}, (data) => {
					//planetPublic-box
					if (!data) {
						return
					}
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
					// console.log(allNum,num)
					//当需要放置的元素的个数超过浏览器窗口内总共可以放置的元素的个数时，则返回
					if (num >= allNum) {
						this.tokens = this.tokens.slice(0, allNum - 1)
					}
					num = this.tokens.length;
					for (let i = 0; i < allNum; i++) {
						_tmpArray.push(i);
					}
					let xStart = 0,
						yStart = 0;
					let arr = [];
					while (num) {
						var pointer = Math.floor(Math.random() * allNum); //向下取整取出0到allnum之间的任意一个整数
						// 如果数组_tmpArray中不存在第pointer值，则继续
						if (!_tmpArray[pointer]) {
							continue;
						}
						delete _tmpArray[pointer]; //删除数组_tmpArray中第pointer个值
						var random = Math.floor(Math.random() * 50)

						// yStart = parseInt(pointer / xNum, 10) * iconWidth;
						// xStart = (pointer % xNum) * iconHeight;

						yStart = parseInt(pointer / xNum, 10) * iconWidth + random;
						xStart = (pointer % xNum) * iconHeight + random;
						if (yStart > data.height - 50) {
							yStart = yStart - 50
						}
						if (xStart > data.width - 50) {
							xStart = xStart - 50
						}
						let o = {
							value: this.tokens[num - 1].token,
							id: this.tokens[num - 1].id,
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
			},
			pushToken(item, index, e) { //收取token
				if (!this.tokenFlag) {
					return
				}
				this.tokenFlag = false
				setTimeout(() => {
					this.tokenFlag = true
				}, 500)
				this.tokenList[index].leftVal = 30;
				this.tokenList[index].topVal = -this.tokenWidth;
				this.initToken += 1;
				setTimeout(() => {
					this.tokenList[index].display = 'none';
					this.takePan(item.value, item.id, index);
					if (this.initToken > this.tokens.length) {
						this.tokens = []
						this.initToken = 0
					}
				}, 800);
			},
			async takePan(token, id, index) {
				let res = await this.api.homeToken(Token).takePan({
					numbers: Number(token),
					id: id
				});
				if (res.data.status == 200) {
					var that = this
					var voice = this.$store.state.defaultSettings.voice
					this.propInfo.balance += Number(token)
					this.rmb = this.propInfo.balance * this.data2
					if (this.initToken == this.tokens.length) {
						this.initToken = 0
						this.getToken(Token)
					}
					if (voice) {
						if (this.flog) {
							return
						}
						this.flog = true
						const innerAudioContext = uni.createInnerAudioContext();
						innerAudioContext.autoplay = true;
						innerAudioContext.obeyMuteSwitch = true
						innerAudioContext.src = 'http://pandla.io/images/static/pan.mp3';
						innerAudioContext.onPlay(() => {
							console.log('开始播放');
						});
						innerAudioContext.onError((res) => {
							console.log(res);
						});
						innerAudioContext.onEnded(() => {
							that.flog = false
						})
					}
				}
			},
			getMyIndex() {
				getIndex().then(data => {
					this.propInfo = data;
					this.rmb = this.propInfo.balance * this.data2
				})
			},
			getChang() {
				getChange_24h().then(data => {
					// console.log(data.data[0])
					this.data1 = data.data[0].change_24h
					// console.log(this.data1)
					if (this.data1 > 0) {
						this.data1 = "+" + this.data1
					} else {
						this.red = true
						this.data1 = this.data1
					}
					this.data3 = data.data[0].volume_24h
					this.data2 = data.data[0].current
				})
			},
			getBalanceData() {
				getBalance(0).then(data => {
					this.assetInfo = data;
				});
				getForBalance().then(data => {
					this.focusInfo = data;
				});
			},
			getBillData() {
				getBill("0").then(data => {
					this.listInfo = '';
					this.listInfo = data.splice(0, 10);
				});
			},
			getFocusBill() {
				getForBill(0).then(data => {
					this.focusListInfo = '';
					this.focusListInfo = data;
					// console.log(this.listInfo);
				});
			},
			getTaskData() {
				checkTaskList().then(data => {
					this.listInfo = '';
					// console.log(this.listInfo)
					this.listInfo = data;
					// console.log(this.listInfo);
				});
			},
			getFocusTask() {
				checkForTaskList().then(data => {
					this.focusListInfo = '';
					this.focusListInfo = data;
					// console.log(this.listInfo);
				});
			},
			swichMenu: async function(current) {
				if (this.currentTab == current) {
					return false;
				}
				if (current == 1) {
					this.currentTab = current;
					this.labelList = 'task';
					this.listInfo = '';
					this.getTaskData();
					// console.log(current)
				} else {
					this.currentTab = current;
					this.labelList = 'budget';
					this.listInfo = '';
					this.getBillData();
					// console.log(current)
				}
			},
			loadMore() {
				getBill(this.loadingType).then(data => {
					if (data == null) {
						this.isShow = false
						return
					}
					this.listInfo = this.listInfo.concat(data)
					this.loadingType += 10
					// console.log(this.listInfo)
				});
			},

			changeList(chooseItem) {
				if (chooseItem == 'budget') {
					this.focusLabelList = 'budget';
					this.budgetText = 'black';
					this.taskText = 'gray';
					this.getFocusBill();
				} else {
					this.focusLabelList = 'task';
					this.budgetText = 'gray';
					this.taskText = 'black';
					this.getFocusTask();
				}
			},
			focusLoadMore() {
				getForBill(this.pageSize).then(data => {
					if (!data) {
						this.focusIsShow = true
						this.pageSize = 10
						return
					}
					this.focusListInfo = this.focusListInfo.concat(data);
					this.pageSize += 10
				});
			},
			singIn() {
				console.log(this.signed)
				if (this.signed) {
					return
				}
				if (this.singDay == 7) {
					this.singDay = 0
					signin(this.force, this.singDay + 1).then(data => {
						if (data != null) {
							this.show();
							this.getSigninMsg()
							uni.showToast({
								icon: 'none',
								title: '簽到成功'
							})
							this.signed = true
							if (this.focusLabelList == 'budget') {
								this.getFocusBill();
							} else {
								this.getFocusTask();
							}
						}
					})
				}
				signin(this.force, this.singDay + 1).then(data => {
					if (data != null) {
						this.show();
						this.getSigninMsg()
						uni.showToast({
							icon: 'none',
							title: '簽到成功'
						})
						this.signed = true
						if (this.focusLabelList == 'budget') {
							this.getFocusBill();
						} else {
							this.getFocusTask();
						}
					}
				})

			},
			getSigninMsg() {
				signinMsg().then(data => {
					console.log(data)
					this.singDay = data
					switch (data) {
						case 0:
							this.force = 1
							break
						case 1:
							this.force = 2
							break
						case 2:
							this.force = 3
							break
						case 3:
							this.force = 5
							break
						case 4:
							this.force = 5
							break
						case 5:
							this.force = 10
							break
						case 6:
							this.force = 10
							break
						case 7:
							this.force = 1
							break

					}
					this.show()
				})
			},
			show() {
				if (this.singDay == 7) {
					if (!this.signed) {
						this.singDay = 0
					}
				}
				switch (this.singDay) {
					case 0:
						this.sing[0].value = "+1"
						this.sing[0].isSigned = false
						this.sing[1].value = "+2"
						this.sing[1].isSigned = false
						this.sing[2].value = "+3"
						this.sing[2].isSigned = false
						this.sing[3].value = "+5"
						this.sing[3].isSigned = false
						this.sing[4].value = "+5"
						this.sing[4].isSigned = false
						this.sing[5].value = "+10"
						this.sing[5].isSigned = false
						this.sing[6].value = "+10"
						this.sing[6].isSigned = false
						break
					case 1:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						break
					case 2:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						break
					case 3:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						break
					case 4:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						this.sing[3].value = "√"
						this.sing[3].isSigned = true
						break
					case 5:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						this.sing[3].value = "√"
						this.sing[3].isSigned = true
						this.sing[4].value = "√"
						this.sing[4].isSigned = true
						break
					case 6:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						this.sing[3].value = "√"
						this.sing[3].isSigned = true
						this.sing[4].value = "√"
						this.sing[4].isSigned = true
						this.sing[5].value = "√"
						this.sing[5].isSigned = true
						break
					case 7:
						this.sing[0].value = "√"
						this.sing[0].isSigned = true
						this.sing[1].value = "√"
						this.sing[1].isSigned = true
						this.sing[2].value = "√"
						this.sing[2].isSigned = true
						this.sing[3].value = "√"
						this.sing[3].isSigned = true
						this.sing[4].value = "√"
						this.sing[4].isSigned = true
						this.sing[5].value = "√"
						this.sing[5].isSigned = true
						this.sing[6].value = "√"
						this.sing[6].isSigned = true
						break
				}
			}
		},
		onLoad() {
			this.getBalanceData();
			this.getBillData();
			this.getMyIndex();
			this.getChang()
			this.getFocusBill()
			Token = uni.getStorageSync('TOKEN_KEY');
			this.getToken(Token);
			checkSignToday().then(data => {
				// console.log(data)
				if (data == 1) {
					this.signed = true
				} else if (data == 0) {
					this.signed = false
					// console.log(this.signed)
				}

			})
			this.getSigninMsg()

		},
		onShow() {
			var that = this
			var token = uni.getStorageSync("TOKEN_KEY")
			if (this.tokens.length == 0) {
				this.getToken(Token);
			}
			if (this.initToken > this.tokens.length) {
				this.tokens = ""
				this.initToken = 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages-content {
		width: 100%;
		padding: 0;
		background-color: #EFEFF4;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-y: scroll;
	}

	.status_bar {
		position: fixed;
		top: 0;
		height: var(--status-bar-height);
		width: 100%;
		z-index: 99;
		background-color: #E1E1E1;
	}

	.tabbar {
		position: sticky;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		white-space: nowrap;
		background-color: #E1E1E1;
		border-bottom: 1px solid #c8c7cc;
		line-height: 44px;
		height: 44px;
		z-index: 999;
	}

	.back {
		position: absolute;
		top: 15px;
		left: 25px;
		width: 15px;
		height: 15px;
		color: #000000;
		display: inline-block;

	}

	.back image {
		width: 15px;
		height: 15px;
		display: block;
	}

	.content-box {
		box-sizing: border-box;
		width: 100%;
	}

	.scroll-box {
		width: 100%;
		height: 100%;
	}

	.token-box {
		position: relative;
		background-color: #131D21;
		width: 100%;
		height: 600upx;
		color: #FFFFFF;
	}

	.tabbar-title {
		margin: 0 auto;
		width: 70%;
		display: flex !important;
		justify-content: center;
		align-items: center;
		height: 44px !important;
		border: none;
	}

	.tabbar-title text {
		font-size: 15px;
		line-height: 44px;
	}

	.interval {
		margin: 0 40rpx;
	}

	.token-area {
		width: 100%;
		height: 600upx;
		position: relative;
		background-repeat: no-repeat;
		background-position: center;
	}

	.token-content {
		width: 100%;
		height: 500upx;
		position: relative;

		.token {
			position: absolute;
			width: 128upx;
			text-align: center;
			z-index: 999;
			transition-property: all;
			transition-duration: 0.8s;
			transition-timing-function: ease-in;

			.token-icon {
				width: 48upx;
				height: 48upx;
				opacity: 0.7;
			}

			.token-num {
				font-size: 22upx;
				line-height: 1;
			}
		}
	}


	.pan {
		&-list {
			border-top: 1upx solid #979797;
			font-size: 35upx;
			color: #000000;
			-webkit-overflow-scrolling: touch;
			overflow-scrolling: touch;
			overflow-y: scroll;

			&-ul {
				padding: 0 50upx;
			}

			&-li {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 20upx 0;
				border-bottom: 1upx solid #979797;
			}

			&-action {
				font-size: 14px;
			}

			&-time {
				font-size: 12px;
				color: #979797;
				float: right;
			}

			&-number {
				color: #CD2626;
				font-size: 14px;
			}
		}

		&-img-pan {
			width: 50upx;
			height: 50upx;
			padding: 15upx;
			float: left;
		}

		&-load {
			background-color: transparent;
			color: #EFEFF4;
			text-decoration: underline;
			font-size: 25upx;
			padding-top: 50upx;
		}
	}

	.top-menu-view {
		display: flex;
		text-align: center;
		white-space: nowrap;
		font-size: 30upx;
		width: 100%;
		background-color: #EFEFF4;
		height: 112upx;
		line-height: 112upx;
		border-top: 2upx solid #979797;
	}

	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		width: 50%;
	}

	.menu-one-view:first-child::after {
		content: "|";
		position: absolute;
		width: 1px;
		height: 10px;
		// background-color: #000000;
		right: 49%;
		top: 14px;
	}

	.top-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;


	}

	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		text-align: center;
		font-size: 15px;
		color: #979797;
	}

	.pan-list-load {
		background-color: #EFEFF4;
	}

	.top-wrapper {
		position: relative;
		width: 95%;
		padding: 10px;
		margin: 0 auto;
		margin-top: 5px;
		box-sizing: border-box;
		background: rgba(19, 29, 33, 1);
		border-radius: 5px;
		color: #FFFFFF;
		font-size: 14px;
	}

	.asset {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-content: flex-start;
	}

	.asset-left {
		padding: 5px;
		display: flex;
		flex-direction: column;

		line-height: 20px;
	}

	.dollar {
		font-size: 12px;
		color: #CCCCCC;
		display: inline-block !important;
	}

	.asset-left .balance {
		font-size: 20px;
		line-height: 30px;
	}

	.asset-right {
		padding: 5px;
		width: 40%;
		display: flex;
		flex-direction: column;
	}

	.panData {
		width: 100%;
		margin: 30px 0 20px 0;
	}

	.data {
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
	}

	.data>p:nth-child(2) {
		color: #4CD964;
		margin-bottom: 5upx;
		text-align: right;
	}

	.data>p:nth-child(3) {
		color: #4CD964;
		margin-bottom: 10upx;
		text-align: right;
	}

	.red {
		color: red !important;
	}

	.bottom {
		border-top: 1px solid #4A4A4A;
		display: flex;
		flex-direction: row-reverse;
	}

	.bottom image {
		margin-top: 10px;
		width: 94px;
		height: 30px;
		padding: 0 5px;
		border-radius: 15px;
	}

	.text-wrapper {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		line-height: 1.5;
	}

	.text-wrapper .title {
		width: 100%;

		border-bottom: 1px solid #979797;
	}

	.text-wrapper .title text {
		font-size: 16px;
		font-weight: 400;
		color: #000000;
	}

	.text-wrapper .text {
		width: 100%;
		padding: 10px 0;
	}

	.text-wrapper text {
		font-size: 14px;
		color: #9B9B9B;
	}

	.text-wrapper .black {
		color: #000000;
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
		animation-duration: 4s;
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

	.avatar {
		width: 170px;
		height: 170px;
		position: absolute;
		top: 50%;
		left: 50%;
		// margin-left: -93px;
		// margin-top: -93px;
		border: #6b5e5e solid 8px;
		opacity: 0.6;
		border-radius: 9999px;
		-webkit-transform: scale(1.05);
		-ms-transform: scale(1.05);
		transform: scale(1.05) translate(-48%, -48%);
		-webkit-animation: pulse-data-v-592699c8 3s linear infinite;
		animation: pulse-data-v-592699c8 3s linear infinite;
	}

	@-webkit-keyframes pulse {
		to {
			opacity: 0;
			-webkit-transform: scale(1.1);
		}
	}

	@keyframes pulse {
		to {
			opacity: 0;
			transform: scale(1.2);
		}
	}

	.avatar::before,
	.avatar::after {
		-webkit-animation: pulse 3s linear infinite;
		animation: pulse 3s linear infinite;
		border: #6b5e5e solid 8px;
		border-radius: 9999px;
		box-sizing: border-box;
		content: ' ';
		height: 140%;
		left: -20%;
		opacity: 0.6;
		position: absolute;
		top: -20%;
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
		width: 140%;
		z-index: 1;
	}

	.avatar::after {
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
	}

	.focus {
		&-data {
			width: 95%;
			border-radius: 8px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			margin: 0 auto;
			padding: 10px;
			margin-top: 5px;
			background-color: #131D21;
			color: #FFFFFF;

			.focus-top {
				display: flex;
				justify-content: space-between;
			}

			.focus-data-info text {
				display: block;
				font-size: 14px;
			}

			.focus-data-info .num {
				display: block;
				font-size: 18px;
			}

			.btn {
				width: 94px;
				height: 30px;
				border-radius: 15px;
				border: 1px solid rgba(211, 211, 211, 1);
				display: flex;
				justify-content: center;
				align-content: center;
			}

			.btn text {
				line-height: 30px;
				display: block;
				font-size: 14px;
				text-align: center;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				letter-spacing: 2px;
			}

			.color {
				color: #131D21 !important;
			}

			.focus-bottom {
				margin-top: 20px;

				.title {

					height: 20px;
					font-size: 14px;
					font-family: PingFangSC;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 30px;
				}

				.sign {
					margin: 10px 0;
					display: flex;
					justify-content: space-around;

					view {
						width: 40px;
						height: 40px;
						border: 1px solid #FFFFFF;
						background: rgba(255, 255, 255, 1);
						border-radius: 50%;
						color: #4A4A4A;
						display: flex;
						justify-content: center;
						align-items: center;

						image {
							width: 40px;
							height: 40px;
							border-radius: 50%;
							overflow: hidden;
						}
					}
				}
			}
		}

		&-notice {
			.focus-label-context {
				font-size: 14px;
				color: #888
			}
		}

		&-label {
			&-num {
				font-size: 14px;
				border-bottom: 1upx solid #FFFFFF;
				padding: 20upx;
			}

			&-deal {
				float: right;
				margin-right: 20upx;
				font-size: 30upx;
			}

			&-introduction {
				line-height: 1.8;
				font-size: 16px;
				border-bottom: 1upx solid #979797;
			}

			&-context {
				padding: 10px 0;
				font-size: 14px;
				line-height: 1.8;
			}


			&-list {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 30upx;
				padding: 40upx 100upx;
				color: #000000;

			}

			&-budget {}

			&-task {}
		}



		&-notice {
			background-color: #EFEFF4;
			color: #000000;
			padding: 30upx;
			border-bottom: 1upx solid #979797;
		}

		&-list {
			border-top: 1upx solid #979797;
			font-size: 35upx;
			color: #000000;

			&-ul {
				padding: 0 50upx;
			}

			&-li {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 20upx 0;
				border-bottom: 1upx solid #979797;
			}

			&-action {
				font-size: 14px;
			}

			&-time {
				font-size: 12px;
				color: #979797;
				float: right;
			}

			&-number {
				font-size: 14px;
				color: #CD2626;
			}
		}

		&-img-focus {
			width: 50upx;
			height: 50upx;
			padding: 15upx;
			float: left;
		}
	}

	.list-right {
		position: relative;

		image {
			position: absolute;
			top: 0;
			right: 15px;
			width: 60px;
			height: 50px;
		}

		p {
			display: flex;
			justify-content: flex-end;
		}
	}

	.sing-in {
		background: #131D21 !important;
		color: #FFFFFF !important;
		border: none !important;
	}

	.signed {
		background-color: #D3D3D3 !important;
		color: #000000 !important;
	}

	.pan-list-load {
		background-color: #EFEFF4;

	}



	.star {
		display: block;
		width: 1px;
		background: transparent;
		position: relative;
		opacity: 0;
		/*过渡动画*/
		z-index: 99;
		animation: star-fall 6s linear infinite;
		-webkit-animation: star-fall 6s linear infinite;
		-moz-animation: star-fall 6s linear infinite;
	}

	.star:after {
		content: '';
		display: block;
		border: 0px solid #fff;
		border-width: 0px 90px 2px 90px;
		border-color: transparent transparent transparent rgba(255, 255, 255, .5);
		box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
		/*变形*/

		transform: rotate(-45deg) translate3d(-50px, 50px, 0);
		-webkit-transform: rotate(-45deg) translate3d(-50px, 50px, 0);
		-moz-transform: rotate(-45deg) translate3d(-50px, 50px, 0);
		transform-origin: 0% 100%;
		-webkit-transform-origin: 0% 100%;
		-moz-transform-origin: 0% 100%;
	}

	.Orange {
		top: 0px;
		left: 200px;
		animation-delay: 0.8s;
	}

	.Orange:after {
		animation-delay: 0.8s;
	}

	.pink {
		top: -50px;
		left: 300px;
		animation-delay: 1.8s;
	}

	.pink:after {
		animation-delay: 1.8s;
	}

	.purple {
		top: -150px;
		left: 350px;
		animation-delay: 3.8s;
	}

	.purple:after {
		animation-delay: 3.8s;
	}

	.blue {
		top: -100px;
		left: 400px;
		animation-delay: 2.5s;
	}

	.blue:after {
		animation-delay: 2.5s;
	}

	.yellow {
		top: -150px;
		left: 500px;
		animation-delay: 5.8s;
	}

	.yellow:after {
		animation-delay: 5.8s;
	}






	@keyframes star-fall {
		0% {
			opacity: 0;
			transform: scale(0.5) translate3d(0, 0, 0);
			-webkit-transform: scale(0.5) translate3d(0, 0, 0);
			-moz-transform: scale(0.5) translate3d(0, 0, 0);
		}

		50% {
			opacity: 1;
			transform: translate3d(-100px, 100px, 0);
			-webkit-transform: translate3d(-100px, 100px, 0);
			-moz-transform: translate3d(-100px, 100px, 0);
		}

		// 75% {
		// 	opacity: 0;
		// 	transform: scale(1.2) translate3d(-300px, 300px, 0);
		// 	-webkit-transform: scale(1.2) translate3d(-300px, 300px, 0);
		// 	-moz-transform: scale(1.2) translate3d(-300px, 300px, 0);
		// }

		100% {
			opacity: 0;
			transform: scale(1.2) translate3d(-400px, 400px, 0);
			-webkit-transform: scale(1.2) translate3d(-400px, 400px, 0);
			-moz-transform: scale(1.2) translate3d(-400px, 400px, 0);
		}
	}
</style>
