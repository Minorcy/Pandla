<template>
	<view class="report-page">
		<view v-if="typeShow">
			<view class="title">
				<text>選擇舉報類別</text>
			</view>
			<view class="reportList">
				<view class="list-item" v-for="(item,index) in reportType" :key="index" @tap="selectType(item.title)">
					<text>{{item.title}}<text class="right">></text></text>
				</view>
			</view>
		</view>
		<view class="report-conten" v-if="!typeShow">
			<view class="header">
				<text class="type">舉報類別: {{type}}</text>
				<text class="name">舉報用戶: {{userInfo.name}}</text>
			</view>
			<view class="text">
				<text>舉報描述:</text>
				<textarea v-model="reportValue" maxlength="200" />
				</view>
			<view class="screenshot">
				<text>上传證據截圖</text>
				<view class="img">
					<image :src="licImg1" mode="aspectFit" @tap="uploadImg(1)"></image>
					<image :src="licImg2" mode="aspectFit" @tap="uploadImg(2)"></image>
					<image :src="licImg3" mode="aspectFit" @tap="uploadImg(3)"></image>
				</view>
			</view>
			<view class="btn">
				<text @tap="submit">提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	import{getReportType,getImgTemp,upload,submitReport}from'@/api/api.js'
	export default {
		data(){
			return{
				licImg1: '../../static/img/msg/report/upload.svg',
				licImg2: '../../static/img/msg/report/upload.svg',
				licImg3:'../../static/img/msg/report/upload.svg',
				userInfo:'',
				reportType:'',
				typeShow:true,
				type:'',
				reportValue:'',
				barInfo: {},
				reportInfo:{}
			}
		},
		methods:{
			getReportList(){
				getReportType().then(data=>{
					this.reportType = data
				})
			},
			selectType(item){
				if (this.typeShow == true) {
					this.typeShow = false
					this.type = item
				} else if (this.typeShow == false) {
					this.typeShow = true
				}
			},
			uploadImg(type) {
				getImgTemp().then(data => {
					console.log(data)
					if (type == 1) {
						upload(data).then(data => {
							this.reportInfo.picture1 = data
							this.licImg1 = data;
						})
					}
					if (type == 2) {
						upload(data).then(data => {
							this.reportInfo.picture2 = data
							this.licImg2 = data;
						})
					}
					if (type == 3) {
						upload(data).then(data => {
							this.reportInfo.picture3 = data
							this.licImg3 = data;
						})
					}
					
				})
			
			},
			submit(){
				if(this.reportValue == ''){
					uni.showToast({
						icon:"none",
						title:"請輸入舉報內容!"
					})
					return
				}
				this.reportInfo.did = this.userInfo.did || 0
				this.reportInfo.title = this.type
				this.reportInfo.describe = this.reportValue
				this.reportInfo.uid = this.userInfo.id
				submitReport(this.reportInfo).then(data=>{
					console.log(data)
					uni.showToast({
						icon:"none",
						title:"舉報成功,請等待審核!"
					})
					setTimeout(()=>{
						uni.navigateBack({
							delta: 1
						})
					},500)
				})
			}
		
		},
		onLoad(option) {
			this.userInfo = JSON.parse(option.userInfo)
			this.getReportList()
		}
	}
</script>

<style>
	.report-page{
		width: 100%;
		background-color: #FFFFFF;
	}
	.title{
		font-size: 14px;
		margin: 20px 0 0 10px;
		color: #4A4A4A;
	}
	.reportList{
		background-color: #F4F4F4;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		
	}
	.list-item{
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		border-bottom: 1px solid #D3D3D3;
		margin: 5px 0;
		color: #4A4A4A;
	}
	.right {
		float: right;
		font-size: 18px;
		margin-right: 15px;
	}
	.header{
		width: 100%;
		height: 100px;
		padding: 10px;
		box-sizing: border-box;
	}
	.type{
		margin-top: 20px;
		display: block;
		height: 20px;
		font-size: 14px;
		color: #9B9B9B;
		line-height: 20px;
	}
	.name{
		margin-top: 5px;
		display: block;
		height: 30px;
		font-size: 14px;
		color: #4A4A4A;
		line-height: 30px;
	}
	.text{
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		height: 150px;
	background-color: #F4F4F4;
	
	}
	.text text{
		color:#9B9B9B ;
		font-size: 14px;
		display: block;
	}
	textarea{
		box-sizing: border-box;
		background-color: #F4F4F4;
		font-size: 14px;
		width: 100%;
		color: #9B9B9B;
		height: 100px;
		padding: 10px;
		
	}
	.screenshot{
		box-sizing: border-box;
		background-color: #F4F4F4;
		width: 100%;
		margin: 10px 0;
		padding: 10px;
		}
	.screenshot text{
		display: block;
		height: 20px;
		line-height: 20px;
		font-size: 14px;
		color: #9B9B9B;
		margin: 5px;
	}
	.img{
		display: flex;
		justify-content: space-between;
	}
	.img image{
		width: 100px;
		height: 100px;
	}
	.btn{
		margin-top: 30px;
		width: 100%;
		font-size: 16px;
		background-color: #F4F4F4;
		height: 60px;
		line-height: 60px;
		text-align: center;
	}
</style>
