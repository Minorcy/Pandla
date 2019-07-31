<template>
	<view class="main-content">
		<view class="asset">
			<view class="asset-item">
				<p>總資產</p>
				<text v-if="!isHidden">{{propInfo.balance | toFixed(4)}}</text>
				<text v-else>*****</text>
				<text class="asset-rmb" v-if="!isHidden">≈{{ this.rmb | toFixed(4)}}USTD</text>
			</view>
			<m-icon class="eyeIcon" :color="changColor" type="eye" size="20" @click="assetHidden()">
			</m-icon>
		</view>
		<hr>
		<view class="panData">
			<view class="data">
				<p>PAN / USTD</p>
				<p>{{data1}}</p>
				<p>{{data2}}</p>
			</view>
			<text class="data-24">24H 量 {{data3}}</text>
			<view class="bindCurr">
				<view class="okexCurr">
					<text>IXX</text>
					<text>點擊註冊IXX交易所可以获得10个PAN幣</text>
					<text @tap="toIXX">註冊</text>
				</view>
			</view>
			<view class="pan-box">
				<text class="pan-text">
					新加坡IXX數字資產是潘多拉星球戰略合作,也是潘多拉星球的超級節點，用戶可以在IXX交易所查看PAN的價格走勢
				</text>
				<text  class="color">
					當潘多拉星球居民達到200萬時，用戶可以將自己获得的PAN可以在IXX交易所進行流通交易
				</text>
			</view>
		</view>
		<view class="fundPool">
			<view class="left">
				<image src="../../static/img/pan/love.svg"></image>
				<p>已募集 {{propInfo.pollSum}} 枚PAN幣</p>
				<a href="#">區塊鏈查詢地址</a>
			</view>
			<view class="right">
				<P>星球公益基金池</p>
				<p>首次向基金池捐赠
					<span>10枚PAN幣</span>
					星球將返還您
					<span>10枚PAN幣</span>
				</p>
				<view class="donate">
					<ul class="modifi">
						<li @click="sub">-</li>
						<li><input type="number" v-model="donateValue"></input></li>
						<li @click="add">+</li>
					</ul>
					<button size="mini" @tap="donatePan">確認捐贈</button>
				</view>
			</view>
		</view>
		<view class="donateShow">
			<text>您捐贈的數量：{{propInfo.oneself}}枚</text>
			<navigator url="donateList">查詢捐贈榜單</navigator>
		</view>
		<view class="poster">
			<image src="../../static/img/pan/poster.svg"></image>
		</view>
		<view class="description">
			<p>
				潘多拉星球將聯合各國公益組織，以及星球居民建設1億枚PAN弊的公益基金池，基金池的資產將用於支持LGBT的公益事業，資產的使用及用處，將生成區塊上傳到鏈上，任何人都可以進行查詢，以保證資產的規範使用。
			</p>
			<p>活動時間：2019年7月3至2019年7月15</p>
		</view>
	</view>
</template>

<script>
	import mIcon from "../../components/m-icon/m-icon";
	import {
		getIndex,
		donate,
		getChange_24h
	} from "../../api/api.js";

	export default {
		data() {
			return {
				propInfo: '',
				isHidden: this.$store.state.isHidden,
				changColor: '#EFEFF4',
				data1: '+0.91%',
				data2: '0.082',
				data3: '89,893,708',
				noBind: '暫未綁定',
				Bind: '已綁定',
				panVlaue: '198,878',
				donateValue: '10',
				rmb: ''
			}
		},
		components: {
			mIcon
		},
		methods: {
			assetHidden() {
				if (this.isHidden == false) {
					this.changColor = '#9B9B9B';
					this.isHidden = true;
					uni.setStorageSync('ASSET_KEY', this.isHidden);
				} else {
					this.changColor = '#EFEFF4';
					this.isHidden = false;
					uni.setStorageSync('ASSET_KEY', this.isHidden);
				}
			},
			getMyIndex() {
				getIndex().then(data => {
					this.propInfo = data;
					// 限制小数点后为4位
					console.log(this.propInfo)
					console.log(this.data2)
					this.rmb = this.propInfo.balance * this.data2
				})
			},
			add() {
				this.donateValue++;
			},
			sub() {
				if (this.donateValue <= 0) {
					uni.showToast({
						icon: 'none',
						title: '不可以捐贈少於1個'
					});
				} else {
					this.donateValue--;
				}

			},
			donatePan() {
				if (this.donateValue <= 0) {
					uni.showToast({
						icon: 'none',
						title: '不可以捐贈少於1個'
					});
				} else {
					donate(this.donateValue).then(data => {
						this.getMyIndex();
					});
				}
			},
			getChang() {
				getChange_24h().then(data => {
					console.log(data.data[0])
					this.data1 = data.data[0].change_24h
					if (this.data1 > 0) {
						this.data1 = "+" + this.data1
					} else {
						this.data1 = this.data1
					}
					this.data3 = data.data[0].volume_24h
					this.data2 = data.data[0].current

				})

			},
			toIXX(){
				uni.navigateTo({
					url:"ixx"
				})
				
				}

		},
		onLoad() {
			this.getMyIndex();
			this.getChang()
		},
		onShow() {
			this.getMyIndex();
		}
	}
</script>

<style scoped="true">
	.asset {
		display: flex;
		flex-direction: row;
		color: #EFEFF4;
	}

	.asset-item {
		width: 120upx;
		margin: 20upx 40upx;

	}

	.asset-item>p {
		font-size: 30upx;
		line-height: 20px;
		display: flex;
		flex-direction: row;
	}

	.asset-item>text {
		font-size: 30upx;
		margin-top: 5upx;
	}

	.asset-rmb {
		font-size: 24upx !important;
	}

	hr {
		height: 3upx;
		border: none;
		border-top: 3upx solid #C8C7CC;
	}

	.eyeIcon {
		position: absolute;
		right: 0upx;
		margin-right: 50upx;
		margin-top: 20upx;
	}

	.panData {
		padding: 20upx;
		font-size: 35upx;
	}

	.data {
		display: flex;
		justify-content: space-between;
	}

	.data-24 {
		font-size: 24upx;
		display: block;
		margin-bottom: 20upx;
	}

	.pan-text {
		color: #C7C7CC;
		font-size: 14px;
	}
	.color{
		color: #007AFF;
		font-size: 14px;
	}
	.data>p:nth-child(1) {
		text-align: left;
		color: #EFEFF4;
		margin-bottom: 10upx;
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

	.data>p:nth-child(4) {
		color: #C8C7CC;
		font-size: 24upx;
		margin-bottom: 10upx;
		text-align: right;
	}

	.bindCurr {
		margin-left: auto;
	}

	.fireCurr>text:nth-child(2) {
		float: right;
	}
	.okexCurr{
		position: relative;
	}
	.okexCurr>text:nth-child(1) {
		margin-right: 80upx;
		font-size: 14px;
		display: block;
	}

	.okexCurr>text:nth-child(2) {
		color:#007AFF;
		font-size: 14px;
	}

	.okexCurr>text:nth-child(3) {
		position: absolute;
		top: 0;
		right: 0;
		color: #FFFFFFFF;
		font-size: 14px;
		
		width: 60px;
		height: 20px;
		text-align: center;
		border: 1px solid;
		border-image: linear-gradient(135deg, rgba(3, 255, 239, 1), rgba(2, 245, 43, 1)) 1 1;
		border-radius: 16px;
	}

	.fireCurr {
		margin-top: 65upx;
	}

	.fundPool {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		border-radius: 10upx;
		padding: 20upx;
	}

	.left>image {
		width: 280upx;
		height: 200upx;
	}

	.left>p {
		color: #8F8F8F;
		font-size: 20upx;
	}

	a {
		color: #007AFF;
		font-size: 25upx;
		float: left;
		text-decoration: none;
	}

	.right {
		margin-left: 50upx;
		color: #000000;
	}

	.right p {
		font-weight: bold;
	}

	.right p:nth-child(2) {
		margin-top: 30upx;
		font-weight: normal;
		font-size: 25upx;
		color: #646464;
	}

	.right p:nth-child(2) span {
		color: #D0021B;
		text-decoration: underline;
	}

	.donate {
		display: flex;
		flex-direction: row;
		margin-top: 70upx;
	}

	navigator {
		color: #007AFF;
		font-size: 25upx;
		float: right;
		margin-top: 15upx;
	}

	.modifi {
		padding: 0;
	}

	.donate li {
		width: 40upx;
		height: 55upx;
		background: #DDDDDD;
		list-style: none;
		float: left;
		font-size: 30upx;
		text-align: center;
		line-height: 55upx;
		vertical-align: middle;
	}

	.donate li:nth-child(2) {
		width: 70upx;
		margin: 0 10upx 0 10upx;
	}

	.donate button {
		margin-right: 0;
		font-size: 23upx;
		padding-top: 2upx;
		color: #EFEFF4;
		border-radius: 50upx;
		background-color: #CD2626;
	}

	.donateShow {
		margin-top: 1upx;
		padding: 0 20upx 10upx 20upx;
		border-radius: 10upx;
		background: #FFFFFF;
	}

	.donateShow text {
		font-size: 25upx;
		color: #000000;
		margin-bottom: 10upx;
	}

	.donateShow a {
		margin-top: 15upx;
		float: right;
	}

	.poster {
		width: 100%;
		margin-top: 1upx;
		border-radius: 10upx;
		background: #FFFFFF;
	}

	.poster>image {
		width: 100%;
		height: 840upx;
	}

	.description {
		padding: 30upx;
		margin-top: 1upx;
		font-size: 25upx;
		line-height: 45upx;
		background: #FFFFFF;
		color: #000000;
		border-radius: 10upx;
	}

	.description>p:nth-child(2) {
		margin-top: 20upx;
		float: right;
	}
</style>
