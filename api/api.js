const Token = uni.getStorageSync('USERS_KEY').token;
const systemUrl = 'http://printsn.com:8080/v1/system/';
const fansUrl = 'http://printsn.com:8080/v1/fans/';
const dynUrl = 'http://printsn.com:8080/v1/dyn/';
const pollUrl = 'http://printsn.com:8080/v1/poll/';

/*********************登录注册***************************/
// 登录
export const login = (account, password) => {
	uni.request({
		url: systemUrl + 'login',
		method: 'POST',
		data: {
			name: account,
			password: password,
		},
		header: {
			'content-type': 'application/json'
		},
		success: (res) => {
			// console.log(res.data.data);
			if (res.data.status == 200)
			{
				uni.setStorageSync('USERS_KEY', res.data.data);
				uni.reLaunch({
					url: '../main/main'
				});
			} else {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '登錄失敗，請稍后重試'
			});
		}
	});
};

// 验证码
export const sendCode = (account, regCodeBtn, timerId) => {
	uni.request({
		url: systemUrl + 'sendCode',
		data: {
			parame: account,
		},
		success() {
			uni.showToast({
				icon: 'none',
				title: '發送成功'
			})
			regCodeBtn.btnStatus = true
			timerId = setInterval(() => {
				var codeTime = regCodeBtn.codeTime;
				codeTime--;
				regCodeBtn.codeTime = codeTime;
				regCodeBtn.text = "重發(" + codeTime + ")秒";
				if (codeTime < 1) {
					clearInterval(timerId);
					regCodeBtn.text = "重新獲取";
					regCodeBtn.codeTime = "60";
					regCodeBtn.btnStatus = false;
				}
			}, 1000);
			return false;
		},
		fail() {
			uni.showToast({
				icon: 'none',
				title: '發送失败了，请稍后重试'
			});
		}
	});
};

// 注册
export const register = (password, account, regCode, inviteCode) => {
	uni.request({
		url: systemUrl + 'register',
		method: 'POST',
		data: {
			password: password,
			account: account,
			regCode: regCode,
			inviteCode: inviteCode
		},
		header: {
			'content-type': 'application/json'
		},
		success: (res) => {
			// console.log(res.data.status);
			if(res.data.status == 200) {
				uni.showToast({
					icon: 'none',
				    title: '注冊成功'
				});
				uni.setStorageSync('USERS_KEY', res.data.data);
				uni.redirectTo({
					url: '../user/update'
				});
				// console.log(res.data);
			} else {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
				return;
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '發送失败了，请稍后重试'
			});
			return;
		}
	});
};

// 修改密码
export const changePwd = (password, account, regCode) => {
	uni.request({
		url: systemUrl + 'changePwd',
		method: 'POST',
		data: {
			parame: account,
			code: regCode,
			password: password
		},
		success: (res) => {
			// console.log(res.data);
			if(res.data == true) {
				uni.redirectTo({
					url: '../login/login'
				})
			} else {
				uni.showToast({
					icon: 'none',
					title: '修改失敗，新密碼不可以與舊密碼相同'
				});
			}
		},
		fail() {
			uni.showToast({
				icon: 'none',
				title: '修改失敗，請稍後重試'
			});
		}
	});
};

/*********************用户信息***************************/
// 请求用户数据
export const findByID = () => new Promise((resolve, reject) => {
	uni.request({
		url: systemUrl + 'findByID',
		header: {
			'token': Token
		},
		success:(res) => {
			// uni.setStorageSync('USERS_KEY', res.data.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 获取用户社交信息
export const getAllSocialInfo = () => new Promise((resolve, reject) => {
	uni.request({
		url: fansUrl + 'getAllFans',
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 更新用户数据
export const upInfo = (userInfo, userId) => new Promise((resolve, reject) => {
	uni.request({
		url: systemUrl+'updata',
		method: 'POST',
		data: {
			acctType: userInfo.acctType,
			age: userInfo.age,
			name: userInfo.name,
			race: userInfo.race,
			signature: userInfo.signature,
			site : userInfo.site,
			stature: userInfo.stature,
			weight: userInfo.weight,
			id: userId
		},
		header: {
			'content-type': 'application/json'
		},
		success: (res) => {
			// console.log(res.data);
			if(res.data.status == 200) {
				if(uni.getStorageSync('USERS_KEY').token) {
					uni.switchTab({
						url: 'user'
					});
				} else {
					uni.reLaunch({
						url: '../login/login'
					});
				}
				resolve(res.data.status);
				// console.log(res.data);
			} else { 
				uni.showToast({
					icon: 'none',
					title: '提交失败，没有修改'
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: err.data.msg
			});
		}
	});
});

// 查看用户信息
export const getInfo = (uid) => new Promise((resolve, reject) => {
	// console.log(uid);
	uni.request({
		url: dynUrl + 'getInfo?uid=' + uid,
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 查看用户所有动态
export const getDyn = (uid) => new Promise((resolve, reject) => {
	// console.log(uid);
	uni.request({
		url: dynUrl + 'getDyn?uid=' + uid,
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

/*********************日志***************************/
// 获取日志列表
export const findAllDyn = () => new Promise((resolve, reject) => {
	uni.request({
		url: dynUrl + 'findAllDyn',
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 获取日志评论列表
export const getComment = (did) => new Promise((resolve, reject) => {
	// console.log(did);
	uni.request({
		url: dynUrl + 'getComment?did=' + did,
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data.content);
			// if(res.data.status == 400) reject(0);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 用户评论
export const addComment = (content, did) => new Promise((resolve, reject) => {
	console.log(did);
	uni.request({
		url: dynUrl + 'createCom?did=' + did + '&content=' + content,
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 关注
export const concern = (type, gid) => new Promise((resolve, reject) => {
	uni.request({
		url: fansUrl + 'concern?gid=' + gid + '&type=' + type,
		header: {
			'token': Token
		},
		success:(res) => {
			console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

/*********************PAN***************************/
// PAN公益首页数据
export const getIndex = () => new Promise((resolve, reject) => {
	uni.request({
		url: pollUrl + 'getIndex',
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// PAN公益首页数据
export const donate = (number) => new Promise((resolve, reject) => {
	uni.request({
		url: pollUrl + 'donate?number=' + number,
		method:'POST',
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) {
				uni.showToast({
					icon: 'success',
					title: res.data.data
				});
				resolve(res.data.data);
			}
			if(res.data.status == 404) {
				uni.showToast({
					icon: "none",
					title: res.data.msg
				});
				resolve(res.data.data);
			}
			// else reject(res.data.msg);
			
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 捐赠列表
export const getPollTop = () => new Promise((resolve, reject) => {
	uni.request({
		url: pollUrl + 'getPollTop',
		header: {
			'token': Token
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

/*********************上传***************************/
// 上传头像
export const upPicture = (userId) => new Promise((resolve, reject) => {
	uni.chooseImage({
		count: 1,
		sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success(chooseImageRes) {
			const tempFilePaths = chooseImageRes.tempFilePaths;
			const uploadTask = uni.uploadFile({
				url: systemUrl+'pic/upPicture?id='+userId,
				filePath: tempFilePaths[0],
				name: 'file',
				success: (res) => {
					console.log(res.data);
					var jsonObj = JSON.parse(res.data);
					console.log('uploadImage success, res is:', jsonObj.data);
					uni.showToast({
						title: '上传成功',
						icon: 'success',
						duration: 1000
					});
					resolve('success');
					// avatar = jsonObj.data.id;
				},
				fail: (err) => {
					console.log('uploadImage fail', err);
					uni.showToast({
						icon: 'none',
						title: '上传失败,请勿选择超过4M的图片'
					});
				}
			});
			uploadTask.onProgressUpdate((res) => {
				console.log('上传进度' + res.progress);
				console.log('已经上传的数据长度' + res.totalBytesSent);
				console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
			});
		}
	});
});

// 获取日志图片视频本地路径
export const getImgTemp = () => new Promise((resolve, reject) => {
	uni.chooseImage({
		count: 1,
		sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success(chooseImageRes) {
			const tempFilePaths = chooseImageRes.tempFilePaths;
			resolve(tempFilePaths[0]);
		},
		fail() {
			uni.showToast({
				icon: 'none',
				title: '出錯了，請稍後重試'
			});
		}
	});
});

// 上传日志图片视频
export const upload = (imgTemp) => new Promise((resolve, reject) => {
	uni.uploadFile({
		url: dynUrl+'upload',
		header: {token: Token},
		filePath: imgTemp,
		name: 'file',
		success: (res) => {
			console.log(res.data);
			var jsonObj = JSON.parse(res.data);
			console.log('uploadImage success, res is:', jsonObj.data);
			console.log(jsonObj.data.id);
			resolve(jsonObj.data.id);
			uni.showToast({
				icon: 'none',
				title: '發表成功'
			});
			uni.navigateBack({
				delta: 1
			});
		},
		fail: (err) => {
			console.log('uploadImage fail', err);
			uni.showToast({
				icon: 'none',
				title: '上传失败,请勿选择超过4M的图片'
			});
		}
	});
});

// 上传日志内容
export const createDyn = (dynContent) => new Promise((resolve, reject) => {
	uni.request({
		url: dynUrl + 'createDyn',
		method: 'POST',
		header: {
			'token': Token,
			'content-type': 'application/json'
		},
		data: {
			'content': dynContent,
			'location': ''
		},
		success:(res) => {
			// console.log(res.data);
			if(res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});