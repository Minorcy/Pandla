<template>
		<view class="comment-section"  @touchmove.stop.prevent="moveHandle" :style="{height: height}">
			<view class="comment-section-top">
				<text>{{commCount}}条評論</text>
				<view class="img-box">
					<image class="img" src="http://47.244.27.153/images/image/X.svg" @tap.stop="hidComm()"></image>
				</view>
			</view>
			<view class="noComm" v-if="commentInfo.length == 0">
				<text >
					為保證用戶隱私，只可以看自己的評論
				</text>
			</view>
			<scroll-view class="comment" scroll-y="true" v-if="commentInfo.length != 0">
				<view scroll-y="true" class="comment-section-details" v-for="(ite, ind) in commentInfo" :key="ind">
					<view class="comment-section-comm">
						<view class="comm-ite">
							<image class="ite-portrait" :src="ite.portrait" mode="aspectFill"></image>
							<view class="ite-name-content" @tap="replyComm(ind, ite.name)" @longpress="deleteComm(ite.id,ite.uid,ind)">
								<text class="ite-name">{{ite.name}}:</text>
								<text class="ite-content">{{ite.content}}</text>
								<text class="ite-create_time">{{ite.create_time|stringifyDate}}</text>
							</view>
						</view>
						<text @tap="showMoreComment(ind)" class="more" v-if="ite.moreComment && !ite.showComment " decode="true" space="nbsp">——<text decode="true" space="nbsp">展开{{ite.moreComment.length}}条回复 &nbsp;</text>▼</text>
						<view class="read-more" v-for="(iem,idx) in ite.moreComment" :key= 'idx' v-if="ite.showComment">
							<view class="more-iem">
								<image :src="iem.uportrait" mode="aspectFill"></image>
								<view class="more-info" @tap="nextReplyComm(ite.id,iem.id,iem.uid,iem.uname)" @longpress="deleteReply(iem.id,iem.uid,ind,idx)">
									<text class="info-name">{{iem.uname}}</text>
									<text class="info-content" decode space ="nbsp">回复&nbsp;<text class="info-content-name">{{iem.toName}}</text>:{{iem.content}}</text>
									<text class="info-createTime">{{iem.createTime|stringifyDate}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="input-section">
				<input class="input-section-input" v-model="commContent" :placeholder="placeholder" @blur="blur" @focus="focus"/>
				<button class="input-section-button" :disabled="disabled" @tap="addComm()">發送</button>
				<!-- <chatInput @sendMessge="addComm"></chatInput> -->
			</view>
		</view>

</template>

<script>
	import util from '@/common/utils'
	import keywords from '@/common/checks.js'
	export default {
		name:"comments",
		props: {
			commCount: {
				type: Number,
				default: 0
			},
			commplaceholder: {
				type: String,
				default: "請輸入評論內容"
			},
			showComment: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			},
			commentInfo: {
				default: ''
			},
		},
		data() {
			return {
				commContent: '',
				disabled: false,
				height: '500px',
				placeholder:this.commplaceholder,
				moreShow:false
			};
		},
		watch: {
			value(val) {
				this.setCurrentValue(val); 
			}
		},
		components: {
			
		},
		methods: {
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
			hidComm() {
				this.placeholder = this.commplaceholder
				this.$emit("hidComm");
			},
			moveHandle(e) {
				e.stopPropagation()
			},
			replyComm(ite1, ite2) {
				this.placeholder = '@' + ite2;
				this.$emit("replyComm",ite1)
			},
			nextReplyComm(iem1,iem2,iem3,iem4){
				this.placeholder = '@' + iem4;
				this.$emit("nextReplyComm",iem1,iem2,iem3)
			},
			addComm() {
				this.disabled = true
				setTimeout(()=>{
					this.disabled = false
				}, 300);
				if(this.commContent.length == 0){
					uni.showToast({
						icon: 'none',
						title: '評論內容不能為空'
					})
					return
				}
				this.commContent = this.filter(this.commContent)
				this.$emit("addComm", this.commContent);
				this.commContent = ''
			},
			blur() {
				this.height = "500px"
			},
			focus() {
				this.height = "300px"
			},
			showMoreComment(index){
				this.commentInfo[index].showComment = true 
			},
			deleteComm(ite1,ite2,ind){
				this.$emit("deleteComm", ite1,ite2,ind);
			},
			deleteReply(iem1,iem2,ind,idx){
				this.$emit("deleteReply", iem1,iem2,ind,idx);
			}


		},
		filters: {
			stringifyDate(datetime) {
				datetime = Number(datetime)
				return util.formatDate(datetime, true)
			}
		},
		 options: {
		    multipleSlots: true // 在组件定义时的选项中启用多slot支持
		  },
		
	}
</script>

<style lang="less" scoped="true">
	.comment-section {
		position: fixed;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		font-size: 16px;
		z-index: 999;
		background-color: #000000;
		border-radius: 18px 18px 0 0;
		overflow: hidden;
	}
	.noComm{
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 100%;
		font-size: 12px;
		color: #808080;
		line-height: 1.5;
	}
	
	 .comment-section-top {
		width: 95%;
		height: 30px;
		box-sizing: border-box;
		text-align: center;
		display: block;
		margin: 0 auto;
		margin-top: 10px;
		color: #ffffff;
		font-size: 14px;
		line-height: 30px;
		background-color: #000000;
	}
	.img-box{
		position: absolute;
		top: 15px;
		right: 15px;
		width: 20px;
		height: 20px;
	}
	.img{
		width: 15px;
		height: 15px;
	}
	.img::after{
		content: "";
		position: absolute;
		top: -10px;
		left: -10px;
		right: -10px;
		bottom: -10px;
	}
	.comment {
		width: 100%;
		height: 90%;
		padding: 10px 10px 40px 10px;
		box-sizing: border-box;
	}
	.comment-section-details {
		width: 100%;

	}
	.comment-section-comm {
		margin-bottom: 10px;
	}
	.comm-ite {
		display: flex;
		align-items: flex-end;
	}
	.ite-portrait {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		flex-shrink: 0;
		margin: 5px;
		align-self: end;
	}
	.ite-name-content {
		max-width: 90%;
		box-sizing: border-box;
		padding: 5px;
		color: #ffffff;
		flex-wrap: wrap;
		flex-grow: 1;
		font-size: 12px;
	}
	.ite-name {
		display: block
	}
	.ite-content {
		word-wrap: break-word;
		font-size: 14px;
	}
	.ite-create_time {
		float: right;
		font-size: 12px;
	}
	.more{
		margin: 5px 0px 5px 55px;
		font-size: 12px;
		color: #FFFFFF;
	}
	.more text{
		text-indent:1em;
		display: inline-block;
		text-decoration: underline;
	}
	.read-more{
		width: 100%;
		display: flex;
		 flex-direction: row-reverse;
	}
	.more-iem{
		width: 90%;
		display: flex;
		align-items: flex-end;
	}
	.more-iem image{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		flex-shrink: 0;
		margin: 5px;
		align-self: end;
	}
	.more-info{
		max-width: 91%;
		box-sizing: border-box;
		padding: 5px 5px 0 5px;
		color: #ffffff;
		flex-wrap: wrap;
		flex-grow: 1;
		font-size: 12px;
	}
	.info-name{
		display: block
	}
	.info-content{
		word-wrap: break-word;
		font-size: 14px;
	}
	.info-content-name{
		color: #999;
	}
	.info-createTime{
		float: right;
		font-size: 12px;
	}
	.input-section {
		box-sizing: border-box;
		position: fixed;
		width: 100%;
		height: 100rpx;
		padding: 10upx !important;
		bottom: 0px;
		left: 0;
		color: #4A4A4A;
		background-color: #FFFFFF;
		font-size: 14px;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
	
	}
	.input-section-input {
		width: 82%;
		height: 40px;
		line-height: 40px !important;
		box-sizing: border-box;
		color: #4A4A4A;
		test-align: left;
		vertical-align: middle;
		border: 1px solid #999;
		border-radius: 15upx;
		padding: 5px 5px 5px 10px;
	}
	.input-section-button {
		display: block;
		width: 15%;
		font-size: 16px;
		color: #4A4A4A;
		height: 40px;
		padding: 5px 0 5px 5px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.fade-enter-active{
		transition: opacity .5s
		}
	.fade-leave-active {
		transition: opacity .5s;
		opacity: 0
	}
	.fade-enter{
		opacity: 0
	}
	
</style>
