const URL = "http://47.244.27.153/images/json/";

// 欢迎页幻灯片
const indexSlider = () => new Promise((resolve, reject) => {
	uni.request({
		url: URL + "slider.json",
		success:(res) => {
			// console.log(res.data);
			resolve(res.data.index);
		}
	});
});

// 首页模块幻灯片
const mainSlider = () => new Promise((resolve, reject) => {
	uni.request({
		url: URL + "slider.json",
		success:(res) => {
			// console.log(res.data);
			resolve(res.data.main);
		}
	});
});

// 邀请码列表
const invList = () => new Promise((resolve, reject) => {
	uni.request({
		url: URL + "user.json",
		success:(res) => {
			// console.log(res.data);
			resolve(res.data.invList);
		}
	});
});

module.exports = {
	indexSlider,
	mainSlider,
	invList
}