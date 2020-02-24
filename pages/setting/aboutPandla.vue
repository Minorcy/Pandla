<template>
	<view class="introduce">
		<view class="introduce-top">
			<image src="../../static/img/user/introduce.png" mode="" class="img"></image>
			<view class="title">
				<text>潘多拉星球</text>
				<text>開啓男男社交3.0時代</text>
			</view>
		</view>
		<view class="introduce-content">
			<text>PANDLA，中文名【潘多拉星球】是香港潘多拉文化傳媒有限公司推出的一款男男社交軟體，也是全球第一款基於區塊鏈底層技術的男男社交軟體
			</text>
			<text>潘多拉星球運用區塊鏈技術重塑了男男社交的形態，PAN的激勵機制，讓居民創造的價值和貢獻都紀錄在超級帳本裡，最終獲得自己應有的收益 
			</text>
			<text>潘多拉星球聯合星球所有居民共建一個1亿枚PAN的公益基金池，這部分資產將用於幫助星球有需要的居民和支持LGBT公益事業
			</text>
			<text>潘多拉星球是一個社交中心化，利益去中心化的星球，星球居民即星球股東
			</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.introduce {
		background-color: #FFFFFF;
		width: 100%;

		box-sizing: border-box;
	}

	.introduce-top {
		width: 100%;
		margin-top: 25px;
		height: 103px;
		background: rgba(19, 29, 33, 1);
		position: relative;
	}

	.img {
		width: 158px;
		height: 142px;
		position: absolute;
		top: -25px;
		left: 0;
	}

	.title {
		position: absolute;
		right: 40px;
		top: 30px;
		text-align: center;
	}

	.title text {
		display: block;
		color: #FFFFFF;
		font-size: 14px;
		line-height: 1.5;
		font-weight: 100;
	}

	.title text:nth-child(1) {
		font-weight: 700;
		font-size: 20px;
		line-height: 1.5;
	}

	.introduce-content {
		padding: 10px;
		margin-top: 30px;
	}
	.introduce-content text{
		display: block;
		font-size: 14px;
		line-height: 1.5;
		color: #000000;
		margin-bottom: 20px;
	}
</style>
