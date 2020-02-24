import store from '../'
import {
	getPushConnMsg,
	getPushFansMsg,
	getPushLikeMsg,
	getPushSystemMsg
} from "@/api/api.js"

export function getConnMsg() {
	var msg = store.state.pushMsg.pushConnMsg
	getPushConnMsg().then(data => {
		if (!data) {
			return
		}
		if (msg == false) {
			store.commit('pushConnMsg', data)
			return
		}
		if (msg[0].status != data[0].status) {
			store.commit('pushConnMsg', data)
			return
		}
		if (msg.length != 0) {
			if (msg[0].id == data[0].id) {
				return
			}
		}
		store.commit('pushConnMsg', data)
	})
}
export function getFansMsg() {
	var msg = store.state.pushMsg.pushFansMsg
	getPushFansMsg().then(data => {
		if (!data) {
			return
		}
		if (msg == false) {
			store.commit('pushFansMsg', data)
			return
		}
		if (msg[0].status != data[0].status) {
			store.commit('pushFansMsg', data)
			return
		}
		if (msg.length != 0) {
			if (msg[0].id == data[0].id) {
				return
			}
		}
		store.commit('pushFansMsg', data)
	})
}
export function getLikeMsg() {
	var msg = store.state.pushMsg.pushLikeMsg
	getPushLikeMsg().then(data => {
		// console.log(data)
		if (!data) {
			return
		}
		if (msg == false) {
			store.commit('pushLikeMsg', data)
			return
		}
		if (msg[0].status != data[0].status) {
			store.commit('pushLikeMsg', data)
			return
		}
		if (msg.length != 0) {
			if (msg[0].id == data[0].id) {

				return
			}
		}
		store.commit('pushLikeMsg', data)
	})
}
export function getSystemMsg() {
	var msg = store.state.pushMsg.pushSystemMsg
	getPushSystemMsg().then(data => {
		// console.log(data)
		if (!data) {
			return
		}
		if (msg == false) {
			store.commit('pushSystemMsg', data)
			return
		}

		if (msg[0].isRed != data[0].isRed) {
			store.commit('pushSystemMsg', data)
			return
		}
		if (msg.length != 0) {
			if (msg[0].id == data[0].id) {
				return
			}
		}
		store.commit('pushSystemMsg', data)
	})
}
