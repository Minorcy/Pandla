// 通过缓存判断是否登录从而跳过欢迎页
export const skipIndex = () => {
	var users_key = uni.getStorageSync("TOKEN_KEY")
	if (users_key) {
		uni.switchTab({
			url: '../nearby/nearby'
		});
	}
};
