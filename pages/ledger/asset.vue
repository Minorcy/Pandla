<template>
	<view class="pages-content">
		<view class="pan-data">
			<p>PAN幣數量</p>
			<text>888900</text>
			<text>交易 ></text>
			<p>凍結數量:50000</p>
		</view>
		<view class="pan-notice">
			<p>PAN幣簡介</p>
			<text>PAN幣是基於區塊鏈技術，用於記錄用戶在潘多拉的工作量證明，可用於星球上的消費與兌換等</br>
			除日常根據原力大小生長PAN幣之外，星球用戶之間可以互相點贊送禮物贈與獲得PAN幣，48小時不領取PAN幣
			將暫停生長。超過7天未領取，生長的PAN幣將自動消失。PAN幣的總數量有限，且每2年產出減少一半，隨著時
			閒的退役獲取的難度將越來越大，前期參與更有優勢
			</text>
		</view>
		<view class="pan-list">
			<text>收支記錄</text>
			<text>|</text>
			<text>任務獲取PAN幣</text>
			<ul>
				<li>
					
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.pan {
		&-data {
			width: 100%;
			height: 100%;
			background: -webkit-linear-gradient(to right, #000000, #979797); /* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(to right, #000000, #979797); /* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(to right, #000000, #979797); /* Firefox 3.6 - 15 */
			background: linear-gradient(to right, #000000, #979797); /* 标准的语法 */
		}
		
		&-data p:nth-child(1) {
			font-size: 30upx;
			border-bottom: 1upx solid #FFFFFF;
			padding: 20upx
		}
		
		&-data text {
			
		}
	}
</style>
