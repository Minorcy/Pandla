import uniRequest from "../request/request.js";
let Token = uni.getStorageSync('USERS_KEY').token;
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
				console.log(respons)
				return respons;
			}, error => {
				console.log("error", error);
			})
			return res;
		},
		/*
		2.收取token
		*/
		async takePan({
			numbers
		}) {
			let res = await uniRequest.get('/v1/pan/takePan', {
				data: {
					numbers
				},
				header: {
					"token": Token
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
