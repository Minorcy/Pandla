import {
	getWyToken
} from "../../api/api.js";
import {
	connect
} from "@/store/actions/index.js"
// 通过缓存判断是否登录从而跳过欢迎页
export const skipIndex = () => {
	var users_key = uni.getStorageSync("USERS_KEY").token
	if (users_key) {
		uni.switchTab({
			url: '../main/main'
		});
		getWyToken().then(data => {
			let uid = data.uid;
			let sdktoken = data.wyToken
			uni.setStorageSync('uid', uid)
			uni.setStorageSync('sdktoken', sdktoken)
		})
	}
};
