import request from "./request/request.js";
let baseURL;
if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');
	// baseURL = 'http://192.168.0.117:8080/';
	baseURL = 'http://apelord.cn:8080/';
} else {
	console.log('生产环境');
	baseURL = 'http://apelord.cn:8080/';
}
// 全局配置
request.setConfig({
	baseUrl: baseURL, // 此为测试地址，需加入到域名白名单，或者更改为您自己的线上地址即可
	dataType: 'json', // 可删除，默认为json
	responseType: 'text', // 可删除，默认为text
	// 设置请求头，支持所有请求头设置，也可不设置，去掉header就行 
	header: {
		'content-type': 'application/json'
	}
})
