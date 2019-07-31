<template>
	<view class="pages-content">
		<ul>
			<li v-for="(item, index) in followList" :key=index>
				<image :src="item.portrait" @tap="userInfo(item.id)" mode="aspectFill" />
				<text @tap="userInfo(item.id)">{{item.name}}</text>
				<button @click="unFollow(item.id,index)">取消關注</button>
			</li>
		</ul>
		<view class="no-follow" v-show="!followList.length">
			<view>
				你還沒有關注的人，
			</view>
			<navigator url="../daily/daily" class="todaily">
				趕緊去看看吧
			</navigator>
		</view>
	</view>
</template>

<script>
	
	import {getFollow, concern} from '../../api/api.js';
	export default {
		data() {
			return {
				followList: '',
			}
		},
		
		methods: {
			getAllFollow() {
				// console.log("请求开始")
				getFollow().then(data => {
					this.followList = data;
					console.log(this.followList)
				});
			},
			userInfo(id) {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + id
				});
			},
			unFollow(id,index) {
					concern(2, id).then(data => {
						this.followList.splice(index,1)
					});
				}
				
			
		},
		onLoad() {
			this.getAllFollow()
		}
	}
</script>

<style scoped>
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 50upx;
		font-size: 30upx;
	}
	
	li {
		list-style: none;
		border-bottom: solid 1upx #4CD964;
		margin-top: 30upx;
	}
	
	li button {
		width: 180upx;
		float: right;
		margin-bottom: 10upx;
	}
	
	li text:nth-child(2) {
		position: absolute;
	}
	
	text {
		margin: 20upx 0 0 20upx;
	}
	
	image {
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
	}
	.no-follow{
		text-align: center;
	}
	.todaily{
		color:#007AFF ;
	}
</style>
