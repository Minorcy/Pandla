import store from '@/store/'
var id = uni.getStorageSync("USERS_KEY").id
var flog = true
// var websocket = uni.connectSocket({
// 	url: 'ws://pandla.io:8080/chat/' + id, //仅为示例，并非真实接口地址。
// 	complete: () => {}
// });

var socketTask = null

function connectSocketInit() {
	var id = uni.getStorageSync("USERS_KEY").id
	// 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】
	console.log("連接開始====>",id)
	socketTask = uni.connectSocket({
		url: 'ws://apelord.cn:8080/chat/' + id,
		success(data) {
			console.log("websocket连接成功");
		},
	});

	// 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
	socketTask.onOpen((res) => {
		console.log("WebSocket连接正常打开中...！");
		store.commit('openSocket', true)
		socketTask.onMessage((e) => {
			var res = JSON.parse(e.data)
			console.log(res)
			// console.log(res.data.from.id)
			var id = res.data.from.id
			store.commit('updateCurrentSession', res.data)
			uni.$emit('onMsg' + id, res.data)
			var msgList= uni.getStorageSync("msg"+id)
			if(msgList){
				msgList.push(res.data)
				uni.setStorageSync("msg"+id,msgList)
			}else{
				msgList = []
				msgList.push(res.data)
				uni.setStorageSync("msg"+id,msgList)
			}
			var disturbingList = store.state.noDisturbingList
			
			if(disturbingList.indexOf(id) < 0){
				var voice = store.state.defaultSettings.voice
				if (voice) {
					if (flog) {
						flog = false
						const innerAudioContext = uni.createInnerAudioContext();
						innerAudioContext.autoplay = true;
						innerAudioContext.obeyMuteSwitch = true
						innerAudioContext.src = 'http://pandla.io/images/static/bell.mp3';
						innerAudioContext.onPlay(() => {
							console.log('收取音乐');
						});
						innerAudioContext.onError((res) => {
							console.log(res);
						});
						innerAudioContext.onEnded(() => {
							flog = true
						})
					}
				}
			}
			res.data.lastMsgShow = 1
			if(disturbingList.indexOf(id) < 0){
				uni.setTabBarBadge({
					index: 1,
					text: res.data.lastMsgShow.toString()
				})
			}
			
			var session = uni.getStorageSync('updateSessionList')
			if (session.length == 0) {
				session = []
				session.unshift(res.data)
				uni.setStorageSync('updateSessionList', session)
				uni.$emit('updateSessionList', session)
				console.log(1)
				return
			}
			
			
			var session = uni.getStorageSync('updateSessionList')
			if (!session) {
				session = []
				session.unshift(res.data)
				uni.setStorageSync('updateSessionList', session)
				uni.$emit('updateSessionList', session)
				return
			}
			var has = false
			var idx = 0
			var count = 0
			session.filter((item, index) => {
				if (item.from.id == id) {
					has = true
					idx = index
					count = item.lastMsgShow + 1

				}
			})

			if (has) {
				res.data.lastMsgShow = count
				session.splice(idx, 1, res.data)
				var arr = session[0]
				session[0] = res.data
				session[idx] = arr
				if(disturbingList.indexOf(id)<0){
					uni.setTabBarBadge({
						index: 1,
						text: count.toString()
					})
				}
				uni.setStorageSync('updateSessionList', session)
				uni.$emit('updateSessionList', session)
				return
			}
			session.unshift(res.data)
			uni.setStorageSync('updateSessionList', session)
			uni.$emit('updateSessionList', session)

		});
	})
	socketTask.onError((res) => {
		store.commit('openSocket', false)
		console.log("错误")
	})
	// 这里仅是事件监听【如果socket关闭了会执行】
	socketTask.onClose(() => {
		console.log("已经被关闭了")
		store.commit('openSocket', false)
	})
}

function closeSocket() {
	socketTask.close({
		success(res) {
			console.log("关闭成功", res)
		},
		fail(err) {
			console.log("关闭失败", err)
		}
	})
}


// var connect = function() {
// 	websocket.onopen = uni.onSocketOpen(function(res) {
// 		console.log('WebSocket连接已打开！');
// 	});
// 	websocket.onmessage = uni.onSocketMessage(function(e) {
// 		var res = JSON.parse(e.data)
// 		// console.log(res.data.from.id)
// 		var id = res.data.from.id
// 		store.commit('updateCurrentSession', res.data)

// 		uni.$emit('onMsg' + id, res.data)

// 		const innerAudioContext = uni.createInnerAudioContext();
// 		innerAudioContext.autoplay = true;
// 		innerAudioContext.src = 'http://pandla.io/images/static/bell.mp3';
// 		innerAudioContext.onPlay(() => {
// 			console.log('开始播放');
// 		});
// 		innerAudioContext.onError((res) => {
// 			console.log(res.errMsg);
// 			console.log(res.errCode);
// 		});
// 		console.log(res)
// 		res.data.lastMsgShow = 1
// 		uni.setTabBarBadge({
// 			index: 1,
// 			text: res.data.lastMsgShow.toString()
// 		})
// 		var session = uni.getStorageSync('updateSessionList')
// 		if (session.length == 0) {
// 			session = []
// 			session.unshift(res.data)
// 			uni.setStorageSync('updateSessionList', session)
// 			uni.$emit('updateSessionList', session)
// 			return
// 		}
// 		var has = false
// 		var idx = 0
// 		var count = 0
// 		session.filter((item, index) => {
// 			if (item.from.id == id) {
// 				has = true
// 				idx = index
// 				count = item.lastMsgShow + 1

// 			}
// 		})

// 		if (has) {
// 			res.data.lastMsgShow = count
// 			session.splice(idx, 1, res.data)
// 			var arr = session[0]
// 			session[0] = res.data
// 			session[idx] = arr
// 			uni.setTabBarBadge({
// 				index: 1,
// 				text: count.toString()
// 			})
// 			uni.setStorageSync('updateSessionList', session)
// 			uni.$emit('updateSessionList', session)
// 			return
// 		}
// 		session.unshift(res.data)
// 		uni.setStorageSync('updateSessionList', session)
// 		uni.$emit('updateSessionList', session)

// 	});
// 	websocket.onerror = uni.onSocketError(function(e) {
// 		console.log("异常：" + JSON.stringify(e.data));
// 		// console.log(e.data);  
// 		store.commit('updaReconnectChat', true)
// 	});
// 	websocket.onclose = uni.onSocketClose(function(e) {

// 		console.log('连接已经关闭');
// 		// console.log(  e.code); 
// 		store.commit('updaReconnectChat', true)
// 	});

// }

// function cls() {
// 	socketTask.close();
// }
export default {
	// cls,
	// connect,
	connectSocketInit,
	closeSocket

}
