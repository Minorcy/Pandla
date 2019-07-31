<template>
	<view class="pages-content">
		<ul>
			<li v-for="(item, index) in fnasList" :key=index>
				<image :src="item.portrait" mode="aspectFill" />
				<text @tap="userInfo(item.id)">{{item.name}}</text>
				<text :style="{color: textColor[index]}">{{item.number}}</text>
				<button>{{butText}}</button>
			</li>
		</ul>
	</view>
</template>

<script>
	
	import {getFans, getFollow} from '../../api/api.js';
	export default {
		data() {
			return {
				fnasList: '',
				butText:'',
				allFollow:[],
				list:[],
				textColor: ['#4CD964', '#4CD964', '#4CD964']
			}
		},
		
		methods: {
			getAllFans() {
				getFans().then(data => {
					this.fnasList = data;
					// console.log(data);
				});
				uni.hideLoading();
			},
			// 用户详情
			userInfo(id) {
				uni.navigateTo({
					url: '/pages/daily/userInfo?uid=' + id
				});
			},
			getAllFollow(){
				getFollow().then(data => {
					this.allFollow = data;
					for(let i = 0 ; i<this.allFollow.length;i++){	
							this.list.push(this.allFollow[i].id);
						};
					});
					this.follow()
			},
			follow(){
				for(let i = 0 ; i < this.fnasList.length; i++){
					console.log('1')
					if(this.list.indexOf(this.fnasList[i].id) != -1 ){
						console.log('2')
					}
				}
			}
			
			
		},
		onLoad() {
			uni.showLoading({
				title: '加载中'
			});
			this.getAllFans();
			this.getAllFollow();
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
	
	li text:nth-child(3) {
		float: right;
		
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
</style>
