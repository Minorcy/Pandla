// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// this.$store.commit(method, params)

import store from '../'
import storage from '@/common/utils/storage'
import util from '@/common/utils'
import config from '@/common/configs'
import Vue from 'vue'

export default {
	openSocket(state,Boolean){
		state.is_open_socket = Boolean
	},
	updaReconnectChat(state,Boolean){
		state.reconnectChat = Boolean
	},
	updateSessionList(state,msg){
		uni.setStorageSync('updateSessionList', msg)
		state.sessionList = msg
	},
	updateCurrentSession(state,msg){
		 
		state.currentSession = msg
	},
	pushConnMsg(state, msg) {
		state.pushMsg.pushConnMsg = msg
	},
	pushFansMsg(state, msg) {
		state.pushMsg.pushFansMsg = msg
	},
	pushLikeMsg(state, msg) {
		state.pushMsg.pushLikeMsg = msg
	},

	pushSystemMsg(state, msg) {
		state.pushMsg.pushSystemMsg = msg
	},
	updaDisturbingList(state,arr){
		state.noDisturbingList = arr
	},
	
	setVoice(state,booleanValue){
		state.defaultSettings.voice = booleanValue
	},
	setShock(state,booleanValue){
		state.defaultSettings.shock = booleanValue
	},
	setSystem(state,booleanValue){
		state.defaultSettings.system = booleanValue
	},
	setIndirectly(state,booleanValue){
		state.defaultSettings.indirectly = booleanValue
	},
	setFans(state,booleanValue){
		state.defaultSettings.fans= booleanValue
	},
	setLog(state,booleanValue){
		state.defaultSettings.log = booleanValue
	},

	setBarText(state, voteValue) {
		state.voteValue = '';
		state.voteValue = voteValue;
	},
	logout(state) {
		state.token = '';
		state.hasLogin = false;
	},
	setImgTemp(state, imgTemp) {
		state.imgTemp = imgTemp;
	}
	
}
