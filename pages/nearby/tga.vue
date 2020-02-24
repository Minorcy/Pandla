<template>
	<view class="tag">
		<view class="tag-text">
			<textarea v-model="value" placeholder-style="color:#979797" placeholder="@僅限10個字" maxlength="10" />
			</view>
		<view class="btn">
			<text @tap="enterSeek()">確認</text>
		</view>
		<view class="remind">
			<view class="title">
				<text>星球提示：</text>
			</view>
			<view class="remind-count">
				<view class="item">
					<text>勇敢做自己，真實相片，提升認識新朋友的速度</text>
				</view>
				<view class="item">
					<text>安全約會注意防盜防騙，如果遇到危險請況立即報警，星球將全力配合警方打擊犯罪分子</text>
				</view>
				<view class="item">
					<text>正確使用安全套可以讓你遠離各種性傳播疾病</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import {updateLab}from'@/api/api.js'
	import keywords from '@/common/checks.js'
	export default {
		data() {
			return {
				value:''
			}
		},
		components: {uniIcon},
		methods: {
			enterSeek(){
				if(this.value.length>0){
					var value = this.filter(this.value)
						uni.setStorageSync('tga',value)
					
						uni.switchTab({
						    url: 'nearby'
					});
				
				}else{
					uni.showToast({
						icon: 'none',
						title: "請輸入交友標籤"
					});
				}
				
			},
			filter(value) {
				//遍历敏感词数组
				 keywords.filter(function (v) {
				        while(value.indexOf(v) !== -1){
				            value = value.replace(v, '***');
							// console.log(value)
				        }
				});
				return value
			
			},
		}
		
	}
</script>

<style>
.tag{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	box-sizing: border-box;
	padding: 5px;
	background-color: #FFFFFF;
}

.tag-text textarea{
	width: 100%;
	height: 100px;
	padding: 10px;
	font-size: 14px;
	box-sizing: border-box;
	background-color: #FFFFFF;
	border: 1px solid #979797;
	border-radius: 10px;
}
.btn{
	float: right;
	top: 20px;
	right: 10px;
	margin-top: 15px;
	width: 50px;
	height: 20px;
	font-size:16px;
	color:rgba(74,144,226,1);
	line-height:22px;
}
.remind{
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
	position: absolute;
	top:200px;
	left: 0;
	background-color: #E1E1E1;
	}
	.title{
		width: 100%;
		border-bottom: 1px solid #999;
	}
	.title text{
		font-size: 14px;
		width: 100%;
		line-height: 1.5;
		color: rgba(74,144,226,1);
	}
	.item{
		width: 100%;
		margin: 5px auto;
		display: flex;
		flex-direction: row;
	}
	.remind-count text{
		font-size: 12px;
		line-height:1.5;
		color: #9B9B9B;
	}
</style>
