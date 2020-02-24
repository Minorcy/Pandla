<template>
	<view class="chatSettings-page">
		<view class="user">
			<image :src="userInfo.avatar" mode="aspectFill"></image>
			<text>{{userInfo.name}}</text>

		</view>

		<uni-list class="setting" v-if="nikeShow">
			<uni-list-item class="setting-item" title="設置備註" @tap="showNick" />
			<uni-list-item class="setting-item" :show-switch="true" :show-arrow="false" :switch-checked="disturbing" title="消息免打擾"
			 @switchChange="switchChange" />
			<uni-list-item class="setting-item" title="清空通訊紀錄" :show-arrow="false" @tap="deleteSession()" />
			<uni-list-item class="setting-item" title="舉報" @tap="enterReport" />
		</uni-list>
		<view class="blacklist" v-if="nikeShow">
			<text @tap="blackList()" v-if="!black.isBlack">拉入黑名單</text>
			<text @tap="removeBlack()" v-if="black.isBlack">移出黑名單</text>
		</view>
		<view class="nike-wrapper" v-if="!nikeShow">
			<text class="top">備註</text>
			<input type="text" v-model="alias" class="input" maxlength="10" />
			<text @click="setNick" class="btn">完成</text>
		</view>
	</view>
</template>
<script>
	import store from '@/store/'
	import util from '@/common/utils';
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import {
		setRemark,
		deleteRemark,
		chatUserInfo,
		pushBlacklist,
		queryBlackList,
		removeBlacklist,
		deleteList
	} from '@/api/api.js'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				to: "",
				nikeShow: true,
				alias: "",
				userInfo: '',
				black: {
					isBlack: '',
					id: ''
				},
				disturbing: false
			}
		},
		methods: {
			switchChange(e) {
				var disturbingList = this.$store.state.noDisturbingList
				console.log(e.value)
				if (e.value) {
					disturbingList.push(this.userInfo.id)
					store.commit('updaDisturbingList', disturbingList)

				} else {
					disturbingList.splice(disturbingList.indexOf(this.userInfo.id), 1)
					store.commit('updaDisturbingList', disturbingList)
				}
			},
			showNick() {
				if (this.nikeShow == true) {
					this.nikeShow = false
				} else if (this.nikeShow == false) {
					this.nikeShow = true
				}
			},
			setNick() {
				this.alias = this.alias.replace(/\n/g, ' ').replace(/\r/g, '')
				if (/^\s*$/.test(this.alias)) {
					// ...
				} else if (this.alias.length > 10) {
					uni.showToast({
						icon: 'none',
						title: '备注不能超过10个字符'
					})
					return
				}
				if (this.alias.length == 0) {
					deleteRemark(this.userInfo.id).then(data => {
						console.log(data)
						chatUserInfo(this.userInfo.id).then(data => {
							this.userInfo.name = data.name
						})
					})
				} else {
					setRemark(this.userInfo.id, this.alias).then(data => {
						console.log(data)
						this.userInfo.name = data
						var sessionlist = uni.getStorageSync('updateSessionList')
						console.log(sessionlist)
						sessionlist.filter(item => {
							if (item.from.id == this.userInfo.id) {
								item.from.name = data
							}
						})
						uni.setStorageSync('updateSessionList', sessionlist)
						uni.$emit('updateSessionList', sessionlist)
					})
				}
				if (this.nikeShow == true) {
					this.nikeShow = false
				} else if (this.nikeShow == false) {
					this.nikeShow = true
				}

			},
			enterReport() {
				uni.navigateTo({
					url: "report?userInfo=" + JSON.stringify(this.userInfo)
				})
			},
			deleteSession() {
				uni.removeStorageSync('msg' + this.userInfo.id);
				const that = this;  
				var pages = getCurrentPages(); //当前页面栈  
				if (pages.length > 1) {  
				    var beforePage = pages[pages.length - 2]; //获取上一个页面实例对象  
				    beforePage.$vm.msgList(); //触发父页面中的方法change()  
				 }  
				var sessionlist = uni.getStorageSync('updateSessionList')
				sessionlist.filter(item=>{
					item.disturbing = false
					if(item.from.id ==  this.userInfo.id){
						item.message = ''
					}
				})
				console.log(sessionlist)
				uni.$emit('updateSessionList', sessionlist)
				uni.showToast({
					icon: 'none',
					title: "清除成功！"
				});

			},
			blackList() {
				var that = this
				uni.showModal({
					title: '',
					content: '確定拉入黑名單',
					confirmText: "確定",
					success: function(res) {
						if (res.confirm) {
							pushBlacklist(that.userInfo.id).then(data => {
								console.log(data)
								that.black.isBlack = true
								uni.showToast({
									icon: 'none',
									title: data.msg
								});
							})
						}
					}
				});
			},
			removeBlack() {
				removeBlacklist(this.black.id).then(data => {
					uni.showToast({
						icon: 'none',
						title: data.msg
					});
					this.black.isBlack = false

				})

			}


		},
		onLoad(option) {
			var disturbingList = this.$store.state.noDisturbingList
			this.userInfo = JSON.parse(option.userInfo)
			console.log(disturbingList.indexOf(this.userInfo.id))
			if (disturbingList.indexOf(this.userInfo.id) > -1) {
				this.disturbing = true
			}
			queryBlackList(this.userInfo.id).then(data => {
				if (!data) {
					this.black.isBlack = data
				} else {
					this.black.isBlack = true
					this.black.id = data.id
				}
			})
		}


	}
</script>

<style lang="scss" scoped>
	.chatSettings-page {
		width: 100%;
		background-color: #FFFFFF;
	}

	.user {
		width: 100%;
		height: 150px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}

	.user image {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		text-align: center;
		display: block;
		margin: 0px auto;
	}

	.user text {
		font-size: 14px;
		color: #000000;
		text-align: center;
		line-height: 40px;
	}

	.setting {
		width: 100%;
		font-size: 14px;
		background-color: #F4F4F4;
		padding: 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.setting-item {
		color: #4A4A4A;
		background-color: #F4F4F4;
	}

	switch {
		float: right;
	}

	.right {
		float: right;
		font-size: 18px;
		margin-right: 15px;
	}

	.blacklist {
		width: 100%;
		height: 50px;
		background-color: #F4F4F4;
		text-align: center;
		line-height: 50px;
		font-size: 16px;
		margin: 20px 0;
	}

	.nike-wrapper {
		width: 100%;
		box-sizing: border-box;
	}

	.top {
		color: #9B9B9B;
		font-size: 14px;
		margin-left: 10px;
	}

	.input {
		width: 100%;
		height: 40px;
		font-size: 14px;
		padding-left: 10px;
		box-sizing: border-box;
		background-color: #F4F4F4;
	}

	.btn {
		margin-top: 10px;
		margin-right: 20px;
		font-size: 16px;
		float: right;
	}
</style>
