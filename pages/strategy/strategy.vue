<template>
	<view class="qrcode-page" v-if="created">
		<view class="poster">
			<wm-poster imgSrc="http://47.244.27.153/images/static/img/poster/poster.png" :QrSrc="createImg" class="pan-poster"
			 @success="saveImg" @tap='save' :Height="height">
			</wm-poster>
		</view>
	</view>
</template>

<script>
	import {
		invList
	} from '../../common/js/json.js';
	import wmPoster from "../..//components/wm-poster/wm-poster.vue";
	import QR from "../../common/js/wxqrcode.js";
	import {
		pathToBase64,
		base64ToPath
	} from '../../common/js/image.js';
	import {
		getBill,
		getCountPan,
		passValidation,
		getinviteCount,
		getInvCode
	} from '../../api/api.js';
	
	var imgSrc
	var  inviteCode
	// #ifdef APP-PLUS
	// 如下为分享内容定义，可根据业务需求自行定义
	var strShareTitle = "潘多拉邀请你注册"
	
	//以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心
	var screenWidth = plus.screen.resolutionWidth
	//以360px宽度屏幕为例，上下左右边距及2排按钮边距留25像素，图标宽度55像素，同行图标间的间距在360宽的屏幕是30px，但需要动态计算，以此原则计算4列图标分别的left位置
	//图标下的按钮文字距离图标5像素，文字大小12像素
	//底部取消按钮高度固定为44px
	//TODO 未处理横屏和pad，这些情况6个图标应该一排即可
	var margin = 25,
		iconWidth = 55,
		icontextSpace = 5,
		textHeight = 12
	var left1 = margin / 360 * screenWidth
	var iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
	if (iconSpace <= 5) { //屏幕过窄时，缩小边距和图标大小，再算一次
		margin = 15
		iconWidth = 40
		left1 = margin / 360 * screenWidth
		iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
	}
	var left2 = left1 + iconWidth + iconSpace
	var left3 = left1 + (iconWidth + iconSpace) * 2
	var left4 = left1 + (iconWidth + iconSpace) * 3
	var top1 = left1
	var top2 = top1 + iconWidth + icontextSpace + textHeight + left1
	// 	console.log("screenWidth: " + screenWidth + " ;height: " + plus.screen.resolutionHeight);
	// 	console.log("left1: " + left1);
	// 	console.log("iconSpace: " + iconSpace);
	var nvMask = new plus.nativeObj.View("nvMask", { //先创建遮罩层
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.2)'
	});
	nvMask.addEventListener("click", function() { //处理遮罩层点击
		nvMask.hide();
		nvImageMenu.hide();
	})
	var nvImageMenu = new plus.nativeObj.View("nvImageMenu", { //创建底部图标菜单
		bottom: '0px',
		left: '0px',
		height: '165px',
		width: '100%',
		backgroundColor: 'rgb(255,255,255)'
	});
	//绘制底部图标菜单的内容
	nvImageMenu.draw([{
			tag: 'rect', //菜单顶部的分割灰线
			color: '#e7e7e7',
			position: {
				top: '0px',
				height: '1px'
			}
		},
		{
			tag: 'font',
			id: 'sharecancel', //底部取消按钮的文字
			text: '取消分享',
			textStyles: {
				size: '14px'
			},
			position: {
				bottom: '0px',
				height: '44px'
			}
		},
		{
			tag: 'rect', //底部取消按钮的顶部边线
			color: '#e7e7e7',
			position: {
				bottom: '45px',
				height: '1px'
			}
		},
		{
			tag: 'img',
			id: 'imgwechatfriend',
			src: '/static/sharemenu/wechatfriend.png',
			position: {
				top: top1,
				left: left1,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontwechatfriend',
			text: '微信好友',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left1,
				width: iconWidth,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgwechatmoments',
			src: '/static/sharemenu/wechatmoments.png',
			position: {
				top: top1,
				left: left2,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontwechatmoments',
			text: '微信朋友圈',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left2 - 2.5,
				width: iconWidth + 5,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgcopyurl',
			src: '/static/sharemenu/copyurl.png',
			position: {
				top: top1,
				left: left3,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontweibo',
			text: '复制',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left3,
				width: iconWidth,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgmore',
			src: '/static/sharemenu/more.png',
			position: {
				top: top1,
				left: left4,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontqq',
			text: '更多',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left4,
				width: iconWidth,
				height: textHeight
			}
		},
		// {
		// 	tag: 'img',
		// 	id: 'imgcopyurl',
		// 	src: '/static/sharemenu/copyurl.png',
		// 	position: {
		// 		top: top2,
		// 		left: left1,
		// 		width: iconWidth,
		// 		height: iconWidth
		// 	}
		// },
		// {
		// 	tag: 'font',
		// 	id: 'fontcopyurl',
		// 	text: '复制',
		// 	textStyles: {
		// 		size: textHeight
		// 	},
		// 	position: {
		// 		top: top2 + iconWidth + icontextSpace,
		// 		left: left1,
		// 		width: iconWidth,
		// 		height: textHeight
		// 	}
		// },
		// {
		// 	tag: 'img',
		// 	id: 'imgmore',
		// 	src: '/static/sharemenu/more.png',
		// 	position: {
		// 		top: top2,
		// 		left: left2,
		// 		width: iconWidth,
		// 		height: iconWidth
		// 	}
		// },
		// {
		// 	tag: 'font',
		// 	id: 'fontmore',
		// 	text: '更多',
		// 	textStyles: {
		// 		size: textHeight
		// 	},
		// 	position: {
		// 		top: top2 + iconWidth + icontextSpace,
		// 		left: left2,
		// 		width: iconWidth,
		// 		height: textHeight
		// 	}
		// },
		//如果想要增加更多按钮，请在这里继续添加，第二列还有2个空位
	])
	nvImageMenu.addEventListener("click", function(e) { //处理底部图标菜单的点击事件，根据点击位置触发不同的逻辑
		// console.log("click menu"+JSON.stringify(e));
		if (e.screenY > plus.screen.resolutionHeight - 44) { //点击了底部取消按钮
			nvMask.hide();
			nvImageMenu.hide();
		} else if (e.clientX < 5 || e.clientX > screenWidth - 5 || e.clientY < 5) {
			//屏幕左右边缘5像素及菜单顶部5像素不处理点击
		} else { //点击了图标按钮
			var iClickIndex = -1 //点击的图标按钮序号，第一个图标按钮的index为0
			var iRow = e.clientY < (top2 - (left1 / 2)) ? 0 : 1
			var iCol = -1
			if (e.clientX < (left2 - (iconSpace / 2))) {
				iCol = 0
			} else if (e.clientX < (left3 - (iconSpace / 2))) {
				iCol = 1
			} else if (e.clientX < (left4 - (iconSpace / 2))) {
				iCol = 2
			} else {
				iCol = 3
			}
			if (iRow == 0) {
				iClickIndex = iCol
			} else {
				iClickIndex = iCol + 4
			}
			console.log("点击按钮的序号: " + iClickIndex);
			if (iClickIndex >= 0 && iClickIndex <= 5) { //处理具体的点击逻辑，此处也可以自行定义逻辑。如果增减了按钮，此处也需要跟着修改
				var strProvider = "",
					strScene = ""
				switch (iClickIndex) {
					case 0:
						uni.share({
							provider: "weixin",
							scene: "WXSceneSession",
							type: 2,
							href: "http://pandla.io",
							
							imageUrl: imgSrc,
							success: function(res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function(err) {
								console.log("fail:" + JSON.stringify(err));
							}
						});
	
						break;
					case 1:
						uni.share({
							provider: "weixin",
							scene: "WXSenceTimeline",
							type: 2,
							href: "http://pandla.io",
							title: "PANDLA分享",
							imageUrl: imgSrc,
							
							success: function(res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function(err) {
								console.log("fail:" + JSON.stringify(err));
							}
						});
						break;
					case 2:
						uni.setClipboardData({
							data:inviteCode,
							complete() {
								uni.showToast({
									title: "已复制到剪贴板"
								})
							}
						})
						break;
					case 3:
						plus.share.sendWithSystem({
							content: strShareUrl,
						})
						break;
	
				}
				if (strProvider != "") { //点击了0-3序号的这4个按钮
					uni.share({
						provider: strProvider,
						scene: strScene,
						type: 0,
						href: strShareUrl,
						title: strShareTitle,
						summary: strShareSummary,
						imageUrl: strShareImageUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					})
				}
			}
		}
	})
	/* nvImageMenu.addEventListener("touchstart", function(e) {
		if (e.screenY > (plus.screen.resolutionHeight - 44)) {
			//TODO 这里可以处理按下背景变灰的效果
		}
	})
	nvImageMenu.addEventListener("touchmove", function(e) {
		//TODO 这里可以处理按下背景变灰的效果
		if (e.screenY > plus.screen.resolutionHeight - 44) {}
	})
	nvImageMenu.addEventListener("touchend", function(e) {
		//TODO 这里可以处理释放背景恢复的效果
	})
	*/
	// #endif
	
	
	export default{
		data(){
			return{
				inviteCode:'',
				createImg: '',
				imgSrc:'',
				created:false,
				height: "",
			}
		},
		components: {
			wmPoster
		},
		methods:{
			getInvCode(){
				getInvCode().then(data => {
					this.inviteCode = data;
					this.createPoster()
					inviteCode = data
				})
			},
			
			createPoster() {
				let URL = 'http://pandla.io/images/register.html?invCode=' + this.inviteCode;
				let img = QR.createQrCodeImg(URL, {
					size: parseInt(300) //二维码大小  
				});
				base64ToPath(img).then(path => {
					
					this.createImg = path;
				}).catch(error => {
					console.error("error===>", error)
				});
				this.created = true;
			},
			saveImg(res) {
				this.imgSrc = res.tempFilePath
				imgSrc = res.tempFilePath
			},
			save() {
				var arr = []
				arr[0] = this.imgSrc,
					uni.previewImage({
						urls: arr,
					});
			}
		},
		onLoad() {
			this.getInvCode()
		},
		onNavigationBarButtonTap(e) {
			switch (e.type) {
				case "share": //点击分享按钮
					//TODO 未处理h5，h5应调用qq浏览器等自带的share api，如果浏览器不自带share，那么分享图标不应该显示。或者从简的话，h5整个就不显示分享按钮
					// #ifdef APP-PLUS
					nvMask.show()
					nvImageMenu.show() //5+应支持从底部向上弹出的动画
					// #endif
					break;
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			this.height = res.windowHeight
		},
	}
</script>

<style>
	uni-view{
		line-height: 0 !important;
	}
	.qrcode-page{
	width: 100%;
	background-color: #FFFFFF;
		}
	.strategy {
		width: 100%;
		background-color: #FFFFFF;
	}

	.title {
		width: 100%;
		height: 40px;
		background: rgba(232, 232, 232, 1);
		box-sizing: border-box;
		padding: 5px 10px;
	}

	.title text {
		height: 20px;
		font-size: 14px;
		color: rgba(0, 0, 0, 1);
		line-height: 20px;
	}

	.constant-text {
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		background-color: #FFFFFF;
	}

	.constant-text text {
		font-size: 14px;
		line-height: 22px;
	}

	.force {
		display: flex;
		justify-content: space-between;
		margin: 10px 0;
	}
</style>


<!-- 
 
 <view class="strategy">
 	<view class="title">
 		<text>原力有什麼用處?</text>
 	</view>
 	<view class="constant-text">
 		<text>原力是潘多拉星球PAN幣生長的動力因子，原力越高生成的PAN數量越多</text>
 	</view>
 	<view class="title">
 		<text>PAN幣有什麼用處?</text>
 	</view>
 	<view class="constant-text">
 		<text>PAN幣是潘多拉星球唯一權益證明，用於記錄用戶價值與貢獻，用戶根據自己持有PAN的數量獲得分潤PAN幣可以用於流通交易，消費，打賞，兌換，公益捐贈等</text>
 	</view>
 	<view class="title">
 		<text>如何獲取原力?</text>
 	</view>
 	<view class="constant-text">
 		<view class="force">
 			<text>前5萬名內測用戶</text>
 			<text>贈送1000魔法原力</text>
 		</view>
 		<view class="force">
 			<text>完成星球註冊</text>
 			<text>獲得50個永久原力</text>
 		</view>
 		<view class="force">
 			<text>首次公益捐贈10個PAN幣 </text>
 			<text>獲得50個永久原力</text>
 		</view>
 		<view class="force">
 			<text>跳轉IXX交易所完成註冊</text>
 			<text>獲得50個永久原力</text>
 		</view>
 		<view class="force">
 			<text>發日誌10條</text>
 			<text>獲得50個永久原力</text>
 		</view>
 		<view class="force">
 			<text>關注100位好友</text>
 			<text>獲得50個永久原力</text>
 		</view>
 		<view class="force">
 			<text>每邀請1位有效用戶</text>
 			<text>獲得20個永久原力</text>
 		</view>
 		<view class="force">
 			<text>連續7天簽到</text>
 			<text>獲得36個魔法原力</text>
 		</view>
 	</view>
 	<view class="title">
 		<text>如何獲得PAN幣?</text>
 	</view>
 	<view class="constant-text">
 		<view class="force">
 			<text>完成星球註冊</text>
 			<text>獲得10個PAN幣</text>
 		</view>
 		<view class="force">
 			<text>跳轉IXX交易所完成註冊</text>
 			<text>獲得10個PAN幣</text>
 		</view>
 		<view class="force">
 			<text>首次公益捐贈10個PAN弊</text>
 			<text>獲得10個PAN幣</text>
 		</view>
 		<view class="force">
 			<text>發日誌3條</text>
 			<text>獲得10個PAN幣</text>
 		</view>
 		<view class="force">
 			<text>在星球日誌點100個讚</text>
 			<text>獲得5個PAN幣</text>
 		</view>
 		<view class="force">
 			<text>發布的日誌每被點1個讚</text>
 			<text>獲得0.1個PAN幣</text>
 		</view>
 		<view class="force">
 			<text>邀請5位有效用戶</text>
 			<text>共獲得50個PAN幣</text>
 		</view>
 		<view class="force">
 			<text>邀請第6-10位有效用戶</text>
 			<text>共獲得100PAN幣</text>
 		</view>
 		<view class="force">
 			<text>邀請第11-20位有效用戶</text>
 			<text>共獲得300個PAN幣</text>
 		</view>
 		<view class="force">
 			<text>邀請第21-100位有效用戶</text>
 			<text>共獲得4000個PAN幣</text>
 		</view>
 	</view>
 </view>
 
 -->
