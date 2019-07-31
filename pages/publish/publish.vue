<template>
	<view class="pages-content">
		<view class="text">
			<textarea maxlength="500" placeholder-style="color:#0087ff" :placeholder="title" v-model="topicContent"></textarea>
		</view>
	</view>
</template>

<script>
	import {
		createTopic
	} from '../../api/api.js';
	export default {
		data() {
			return {
				tid: '',
				topicContent: '',
				title:''
			}
		},
		onNavigationBarButtonTap() {
			if(this.topicContent == ""){
				uni.showToast({
					icon: 'none',
					title: '請輸入發佈內容'},
					)
			return;
			}
			let address
			uni.getLocation({
				type: 'wgs84',
				geocode: true,
				success: function(res) {
					address = res.address
				},
				fail(err) {
					console.log(err)
				}
			});
			createTopic(this.topicContent, address, this.tid).then(data => {
				uni.showToast({
					icon: 'none',
					title: '发布成功',
					success: function() {
						setTimeout(function(){
							uni.navigateBack()
						},800
						)
					}
				});

			})
		},
		onLoad(options) {
			this.tid = JSON.parse(options.tid)
			switch(this.tid){
				
				case 1:
				this.title = "#星球定位社交";
				break
				case 2:
				this.title = "#星球特供商城";
				break
				case 3:
				this.title = "#星球小遊戲";
				break
				case 4:
				this.title = "#點對點通訊";
				break
			}
		}
	}
</script>

<style lang="scss" scoped>
	.text {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
		height: 600upx;
		margin-top: 20upx;
		font-size: 32upx;
		padding: 20upx;
		color: #000000;
		background-color: #FFFFFF;
		textarea {
			width: 100%;
			height: 100%
		}
	}
</style>
