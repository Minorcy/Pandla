<template>
	<view class="pages-content">
		<view class="pan-list" v-if="created == false">
			<p class="pan-list-label">邀請好友定居星球獲得PAN幣和原力</p>
			<ul class="pan-list-ul" v-for="(item, index) in listInfo" :key="index">
				<li class="pan-list-li">
					<view>
						<p class="pan-list-action">邀请好友 {{item.inviteNumber}}PAN/位</p>
						<text class="pan-list-time">+{{item.getForce}}永久原力</text>
					</view>
					<view>
						<p class="pan-list-total">共{{item.total}}位</p>
						<text class="pan-list-pan">可獲得{{item.getPan}}PAN</text>
					</view>
				</li>
			</ul>
			<p class="pan-list-tip">
				<text>爲防止惡意注冊，用戶需要完成公益捐贈以及發佈第一條動態才能評判為真實用戶</text>
				<text>點擊下方邀請碼即可生成專屬邀請碼海報</text>
			</p>
		</view>
		<view class="pan-invite-code" @tap="createPoster" v-if="created == false">
			<text>邀請碼</text>
			<text>{{inviteCode}}</text>
		</view>
		<wm-poster
			imgSrc="http://47.244.27.153/images/static/img/poster/poster.png"
			:QrSrc="createImg"
			Title="僅限前5萬名星球居民"
			PriceTxt="注冊送1000魔法原力"
			class="pan-poster"
			@tap="preview"
			v-if="created">
		</wm-poster>
	</view>
</template>

<script>
	import {getBill} from '../../api/api.js';
	import {invList} from '../../common/js/json.js';
	import {getInvCode} from '../../api/api.js';
	import wmPoster from "../..//components/wm-poster/wm-poster.vue"
	import QR from "../../common/js/wxqrcode.js";
	import { pathToBase64, base64ToPath } from '../../common/js/image.js';
	
		export default {
			data() {
				return {
					assetInfo: '',
					listInfo: '',
					inviteCode: '',
					created: false,
					createImg: ''
				}
			},
			components: {
				wmPoster
			},
			methods: {
				getInvData() {
					invList().then(data => {
						this.listInfo = data;
						// console.log(this.listInfo);
					});
					
					getInvCode().then(data => {
						this.inviteCode = data;
					});
				},
				createPoster() {
					let URL = 'http://pandla.io?invCode=' + this.inviteCode;
					let img = QR.createQrCodeImg(URL, {  
						 size: parseInt(300)//二维码大小  
					});
					base64ToPath(img).then(path => {
						console.log(path);
						this.createImg = path;
					}).catch(error => {
						console.error(error)
					});
					this.created = true;
					
				}
			},
			onLoad() {
				this.getInvData();
			}
		}
</script>

<style lang="scss" scoped>
	.pan {
		
		&-list {
			border-radius: 10upx;
			margin: -5upx 20upx;
			font-size: 25upx;
			
			
			&-label {
				text-align: center;
				margin: 100upx 0;
				font-size: 35upx;
			}
			
			&-ul {
				padding: 0 50upx;
			}
			
			&-li {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 20upx 0;
				margin: 30upx 0;
				border-bottom: 1upx solid #979797;
			}
			
			&-time {
				font-size: 25upx;
				color: #979797;
			}
			
			&-number {
				color: #EFEFF4;
				font-size: 30upx;
			}
			
			&-load {
				background-color: transparent;
				color: #EFEFF4;
				text-decoration: underline;
				font-size: 25upx;
				padding-top: 50upx;
			}
			
			&-total {
				text-align: right;
			}
			
			&-pan {
				font-size: 25upx;
				color: #007AFF;
			}
			
			&-tip {
				margin: 100upx 50upx;
				font-size: 25upx;
			}
			
			&-tip text:last-child {
				color: #007AFF;
				text-decoration: underline;
			}
		}
		
		
		&-invite-code {
			margin: 50upx 100upx 0 100upx;
			padding: 20upx;
			border: 5upx solid;
			border-radius: 10upx;
			border-left: none;
			border-right: none;
			border-image: -webkit-linear-gradient(left, #03D5C7, #73AE0F) 50 50;
			border-image: -o-linear-gradient(right, #03D5C7, #73AE0F);
			border-image: -moz-linear-gradient(right, #03D5C7, #73AE0F);
			border-image: liner-gradient(#03D5C7, #73AE0F);
		}
		
		&-invite-code text:last-child {
			color: #007AFF;
			margin-left: 80upx;
		}
	}
</style>
