import uniRequest from "../request/request.js";
import store from '@/store/'
import {logout} from '@/api/api.js';
const api = function(token) {
	return {
		/*
		1.获取首页随机token
		*/
		async getIndexPan() {
			let res = await uniRequest.get('/v1/pan/getIndexPan', {
				header: {
					"token": token
				}
			}).then(respons => {
				// console.log(respons)
				return respons;
			}, error => {
				uni.showModal({
					title: '',
					content: "登入失效，請重新登入",
					confirmText: "確定",
					showCancel: false, // 不显示取消按钮
					success(res) {
						if (res.confirm) {
							uni.reLaunch({
								url: '../login/login'
							});
							logout()
							uni.removeStorageSync('USERS_KEY');
							uni.removeStorageSync('TOKEN_KEY');
							store.commit('openSocket', false)
						}
					}
				});
				return error
			})
			return res
		},

		/*
		2.收取token
		*/
		async takePan({
			numbers,
			id
		}) {
			let res = await uniRequest.get('/v1/pan/takePan', {
				data: {
					numbers,
					id
				},
				header: {
					"token": token
				}
			}).then(respons => {
				return respons;
			}, error => {
				console.log("error", error);
			})
			return res;
		}
	}
}
export default api;
