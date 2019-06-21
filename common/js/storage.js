// 通过缓存判断是否登录从而跳过欢迎页
export const skipIndex = () => {
	let users_key = '';
	uni.getStorage({
		key: 'USERS_KEY',
		success: (res) => {
			users_key = res.data.token;
			// console.log(users_key);
		}
	});
	if(users_key) {
		uni.switchTab({
			url: '../main/main'
		});
	}
};