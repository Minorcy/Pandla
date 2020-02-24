let Token = uni.getStorageSync('TOKEN_KEY');
const URL = 'http://apelord.cn:8080/v1/';
// const URL = "http://192.168.0.117:8080/v1/";
const systemUrl = URL + 'system/';
const fansUrl = URL + 'fans/';
const dynUrl = URL + 'dyn/';
const benfitUrl = URL + 'benfit/'
const pollUrl = URL + 'poll/';
const panUrl = URL + 'pan/';
const forceUrl = URL + 'force/';
const treatyUrl = URL + 'tre/';
const barUrl = URL + 'bar/';
const invUrl = URL + 'inv/';
const topicUrl = URL + 'topic/';
const priceUrl = 'https://q.ixex.io/v1/deal/PAN_USDT?size=1';
const Change_24h = 'https://q.ixex.io/v1/market/tickers?period=1h&pairs=PAN_USDT';
const map = "https://restapi.amap.com/v3/geocode/geo?";
const nimURL = URL + 'wy/';
const nearbyUrl = URL + 'nearby/'
const reportUrl = URL + 'sys/report/';
const pushUrl = URL + 'push/'
const ixxUrl = URL + 'ixx/'
const mapUrl = URL + 'map/'
const commUrl = URL + 'comm/'

import store from '@/store/'

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
			if (res.data.status == 200) {
				uni.setStorageSync('USERS_KEY', res.data.data);
				Token = res.data.data.token;
				uni.setStorageSync('TOKEN_KEY', Token)
				loginCat()
				uni.reLaunch({
					url: '../login/Verification'
				});
			}
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
			if (res.data.status == 500) {
				uni.showToast({
					icon: 'none',
					title: "賬號不存在"
				});
			}
		},
		fail: (err) => {
			console.log(err)
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
		}
	});
};

// 登入聊天
export const loginCat = () => {
	var userInfo = uni.getStorageSync('USERS_KEY')
	uni.request({
		url: 'http://apelord.cn:8080/router/login',
		method: 'POST',
		data: {
			name: userInfo.name,
			id: userInfo.id,
			avatar: userInfo.portrait
		},
		header: {
			'token': Token,
			'content-type': 'application/json',
		},
		success: (res) => {
			// console.log(res)
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
		}
	})
}

// 验证码
export const sendCode = (account, type) => new Promise((resolve, reject) => {
	uni.request({
		url: systemUrl + 'sendCode',
		data: {
			parame: account,
			type: type
		},
		success(res) {
			if (res.data.status == 200) {
				uni.showToast({
					icon: 'none',
					title: res.data.data
				})
				resolve(res.data.data)
			}
			if (res.data.status == 400) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
				resolve(null)
			}

		},
		fail() {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});

		}
	});
});

// 注册
export const register = (password, account, regCode, inviteCode) => new Promise((resolve, reject) => {
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
			console.log(res)
			if (res.data.status == 200) {
				uni.showToast({
					icon: 'none',
					title: '注冊成功'
				});
				uni.setStorageSync('USERS_KEY', res.data.data);
				resolve(res.data.data)
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
				title: '當前網絡不可用'
			});
			return;
		}
	});
});

//GET /v1/system/logout 用户退出
export const logout = () => new Promise((resolve, reject) => {
	let Uid = uni.getStorageSync('USERS_KEY').id;
	uni.request({
		url: systemUrl + 'logout?uid=' + Uid,
		success: (res) => {
			// console.log(res)
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
		}
	});
});
//注册网易云信id
export const registerWyAccount = () => new Promise((resolve, reject) => {
	uni.request({
		url: nimURL + 'registerWyAccount',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(JSON.parse(res.data.data).code)
			if (JSON.parse(res.data.data).code == 200) {
				console.log(JSON.parse(res.data.data).info)
				putWyToken(JSON.parse(res.data.data).info.token)
			}
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//保存网易云信token
export const putWyToken = (wyToken) => new Promise((resolve, reject) => {
	uni.request({
		url: nimURL + 'putWyToken?wyToken=' + wyToken,
		header: {
			'token': Token
		},
		success: (res) => {
			console.log(res)
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//获取网易云信token
export const getWyToken = () => new Promise((resolve, reject) => {
	uni.request({
		url: nimURL + 'getWyToken',
		header: {
			'token': Token
		},
		success: (res) => {
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
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
			console.log(res)
			console.log(res.data.status);
			if (res.data.status == 200) {
				uni.redirectTo({
					url: '../login/login'
				})
			}
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: '驗證碼錯誤'
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
		success: (res) => {
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
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
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 更新用户数据
export const upInfo = (userInfo, userId) => new Promise((resolve, reject) => {
	uni.request({
		url: systemUrl + 'updata',
		method: 'POST',
		data: {
			acctType: userInfo.acctType,
			age: userInfo.age,
			name: userInfo.name,
			race: userInfo.race,
			signature: userInfo.signature,
			site: userInfo.site,
			stature: userInfo.stature,
			weight: userInfo.weight,
			id: userId
		},
		header: {
			'content-type': 'application/json'
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) {
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
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 查看用户所有动态
export const getDyn = (uid, pageSize) => new Promise((resolve, reject) => {
	// console.log(uid);
	uni.request({
		url: dynUrl + 'getDyn?uid=' + uid + '&pageSize=' + pageSize,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				uni.hideLoading();
				uni.showToast({
					icon: 'none',
					title: '暫無更多相片'
				});
				resolve(null)
			}

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//GET /v1/dyn/checkMeAllDyn
export const checkMeAllDyn = (uid) => new Promise((resolve, reject) => {
	// console.log(uid);
	uni.request({
		url: dynUrl + 'checkMeAllDyn?uid=' + uid,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				resolve(null)
			}

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
// 获取用户所以动态
export const getAlbum = () => new Promise((resolve, reject) => {
	// console.log(uid);
	uni.request({
		url: dynUrl + 'checkMeAllDyn',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}


		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//获取用户关注列表
export const getFollow = () => new Promise((resolve, reject) => {
	// console.log(uid);
	uni.request({
		url: fansUrl + 'checkAllConcern',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//获取用户粉丝列表
export const getFans = () => new Promise((resolve, reject) => {
	// console.log(uid);
	uni.request({
		url: fansUrl + 'checkAllFans',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//查詢是否關注用戶
export const checkIsCon = (uid) => new Promise((resolve, reject) => {
	uni.request({
		url: fansUrl + 'checkIsCon?uid=' + uid,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});


/*********************日志***************************/
// 获取日志列表
export const findAllDyn = (count) => new Promise((resolve, reject) => {
	// console.log(Token);
	uni.request({
		url: dynUrl + 'findAllDyn?pageSize=' + count,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: '没有更多数据了'
				});
			}

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//根据动态id获取动态详情GET /v1/dyn/getDynInfo
export const getDynInfo = (did) => new Promise((resolve, reject) => {
	// console.log(Token);
	uni.request({
		url: dynUrl + 'getDynInfo?did=' + did,
		header: {
			'token': Token
		},
		success: (res) => {
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: '没有更多数据了'
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 获取日志评论列表
// export const getComment = (did) => new Promise((resolve, reject) => {
// 	// console.log(did);
// 	uni.request({
// 		url: dynUrl + 'getComment?did=' + did,
// 		header: {
// 			'token': Token
// 		},
// 		success: (res) => {
// 			// console.log(res.data.data);
// 			if (res.data.status == 200) resolve(res.data.data);
// 			if (res.data.status == 404) {
// 				uni.showToast({
// 					icon: 'none',
// 					title: res.data.msg
// 				});
// 			}
// 			// if(res.data.status == 400) reject(0);
// 			// else reject(res.data.msg);
// 		},
// 		fail: (err) => {
// 			uni.showToast({
// 				icon: 'none',
// 				title: '當前網絡不可用'
// 			});
// 			reject(err);
// 		}
// 	});
// });

// 用户评论
export const addComment = (content, did) => new Promise((resolve, reject) => {
	// console.log(did);
	uni.request({
		url: dynUrl + 'createCom?did=' + did + '&content=' + content,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
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
		success: (res) => {
			if (res.data.status == 200) {

				resolve(res.data.data);
			}
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 点赞
export const like = (did, likeNumber) => new Promise((resolve, reject) => {
	uni.request({
		url: dynUrl + 'like?did=' + did + '&likeNumber=' + likeNumber,
		method: 'POST',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: '余额不足'
				});
			}
			if (res.data.status == 403) {
				uni.showToast({
					icon: 'none',
					title: '超过点赞次数'
				});
			}
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//获取点赞数
export const likeCount = (did) => new Promise((resolve, reject) => {
	uni.request({
		url: dynUrl + 'refreshLike?did=' + did,
		method: 'GET',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 弹幕
export const getBullet = (did) => new Promise((resolve, reject) => {
	uni.request({
		url: dynUrl + 'getBullet?did=' + did,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 回复评论
// export const reply = (cid, content) => new Promise((resolve, reject) => {
// 	uni.request({
// 		url: dynUrl + 'reply?cid=' + cid + '&content=' + content,
// 		header: {
// 			'token': Token
// 		},
// 		success: (res) => {
// 			// console.log(res.data);
// 			if (res.data.status == 200) resolve(res.data.data);
// 			// else reject(res.data.msg)
// 			if (res.data.status == 404) resolve(res.data.data);

// 		},
// 		fail: (err) => {
// 			uni.showToast({
// 				icon: 'none',
// 				title: '當前網絡不可用'
// 			});
// 			reject(err);
// 		}
// 	});
// });

//刪除動態
export const deleteDyn = (did) => new Promise((resolve, reject) => {
	uni.request({
		url: dynUrl + 'deleteDyn?did=' + did,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

/***********************评论***********************/

// 获取评论  GET /v1/comm/getComment
export const getComment = (did) => new Promise((resolve, reject) => {
	uni.request({
		url: commUrl + 'getComment?did=' + did,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//发表评论GET /v1/comm/createCom
export const createCom = (did, content) => new Promise((resolve, reject) => {
	uni.request({
		url: commUrl + 'createCom?did=' + did + '&content=' + content,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//获取下一级评论GET /v1/comm/getReply
export const getReply = (cid) => new Promise((resolve, reject) => {
	uni.request({
		url: commUrl + 'getReply?cid=' + cid,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//回复评论GET /v1/comm/reply
export const reply = (cid, content, parentId, to) => new Promise((resolve, reject) => {
	uni.request({
		url: commUrl + 'reply',
		method: "POST",
		header: {
			'token': Token
		},
		data: {
			"cid": cid,
			"content": content,
			"parentId": parentId,
			"to": to
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//删除评论GET /v1/comm/deleteComm/{id}
export const deleteComm = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: commUrl + 'deleteComm/' + id,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//删除回复GET /v1/comm/deleteReply/{id}
export const deleteReply = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: commUrl + 'deleteReply/' + id,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
/*********************TOPIC***************************/
//获取话题分类
export const checkTopicList = (tid, pageSize) => new Promise((resolve, reject) => {
	uni.request({
		url: topicUrl + 'checkTopicList?tid=' + tid + "&pageSize=" + pageSize,
		method: "GET",
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) resolve(0);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//获取帖子详情
export const getLikeNumber = (tid) => new Promise((resolve, reject) => {
	uni.request({
		url: topicUrl + 'getLikeNumber?tid=' + tid,
		method: "GET",
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//点赞
export const topicLike = (tid) => new Promise((resolve, reject) => {
	uni.request({
		url: topicUrl + 'topicLike?tid=' + tid,
		method: "GET",
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//获取所有评论根据帖子id
export const getAllComment = (tid) => new Promise((resolve, reject) => {
	uni.request({
		url: topicUrl + 'getAllComment?tid=' + tid,
		method: "GET",
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// if (res.data.status == 404) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//获取回复信息根据评论id
// export const getReply = (cid) => new Promise((resolve, reject) => {
// 	uni.request({
// 		url: topicUrl + 'getReply?cid=' + cid,
// 		method: "GET",
// 		header: {
// 			'token': Token
// 		},
// 		success: (res) => {
// 			// console.log(res.data);
// 			if (res.data.status == 200) resolve(res.data.data);
// 			// else reject(res.data.msg);
// 		},
// 		fail: (err) => {
// 			uni.showToast({
// 				icon: 'none',
// 				title: '當前網絡不可用'
// 			});
// 			reject(err);
// 		}
// 	});
// });
//发表话题
export const createTopic = (content, location = "广州", tid) => new Promise((resolve, reject) => {
	uni.request({
		url: topicUrl + 'createTopic',
		method: "POST",
		header: {
			'token': Token,
			'content-type': 'application/json'
		},
		data: {
			"content": content,
			"location": location,
			"tid": tid
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//话题评论
export const topicComment = (tid, content) => new Promise((resolve, reject) => {
	uni.request({
		url: topicUrl + 'topicComment?tid=' + tid + "&content=" + content,
		method: "POST",
		header: {
			'token': Token,
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//回复评论根据品论id
export const topicReply = (cid, content) => new Promise((resolve, reject) => {
	uni.request({
		url: topicUrl + 'reply?cid=' + cid + "&content=" + content,
		method: "POST",
		header: {
			'token': Token,
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

/*********************TOPIC***************************/
/*********************nearby***************************/
//獲取附近的人22.9913456029,113.3352184296
export const checkNearbyPerson = (lng, lat, scope, info) => new Promise((resolve, reject) => {
	// lng = 113.3352184296
	// lat =  22.9913456029
	scope = scope || 10
	info = uni.getStorageSync("tga")
	uni.request({
		url: nearbyUrl + 'checkNearbyPerson?lng=' + lng + '&lat=' + lat + '&scope=' + scope + '&info=' + info,
		header: {
			'token': Token,
		},
		success: (res) => {
			// console.log(res)
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}

		},
		fail: (err) => {
			uni.hideLoading();
			uni.showToast({
				icon: 'none',
				title: '請稍后重試'
			});
			reject(err);
		}
	});
});

//修改標籤
export const updateLab = (lable) => new Promise((resolve, reject) => {
	uni.request({
		url: nearbyUrl + 'updateLab?lable=' + lable,
		header: {
			'token': Token,
		},
		success: (res) => {
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '請稍后重試'
			});
			reject(err);
		}
	});
});


//獲取上次在線時間
export const getLastTime = (uid) => new Promise((resolve, reject) => {
	uni.request({
		url: nearbyUrl + 'getLastTime?uid=' + uid,
		header: {
			'token': Token,
		},
		success: (res) => {
			if (res.data.status == 200) resolve(res.data.data);

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '請稍后重試'
			});
			reject(err);
		}
	});
});
/*********************nearby***************************/

/*********************PAN***************************/
// PAN公益首页数据
export const getIndex = () => new Promise((resolve, reject) => {
	uni.request({
		url: pollUrl + 'getIndex',
		header: {
			'token': Token,

		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// PAN公益捐贈
export const donate = (number) => new Promise((resolve, reject) => {
	uni.request({
		url: pollUrl + 'donate?number=' + number,
		method: 'POST',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) {
				uni.showToast({
					icon: 'none',
					title: res.data.data
				});
				resolve(res.data.data);
			}
			if (res.data.status == 404) {
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
				title: '當前網絡不可用'
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
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//查看自己的排名GET /v1/poll/getMeRanking
export const getMeRanking = () => new Promise((resolve, reject) => {
	uni.request({
		url: pollUrl + 'getMeRanking',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
//公益活动GET /v1/poll/getActivity
export const getActivity = () => new Promise((resolve, reject) => {
	uni.request({
		url: pollUrl + 'getActivity',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});


/*********************PAN资产账本***************************/
//PAN币余额
export const getBalance = () => new Promise((resolve, reject) => {
	uni.request({
		url: panUrl + 'getBalance',
		header: {
			'token': Token
		},
		success: (res) => {
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//PAN币账单信息
export const getBill = (pageSize) => new Promise((resolve, reject) => {
	uni.request({
		url: panUrl + 'getBill?pageSize=' + pageSize,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				resolve(null)
				uni.showToast({
					icon: 'none',
					title: '暫無更多數據'
				});
			};

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// PAN币任务列表
export const checkTaskList = () => new Promise((resolve, reject) => {
	uni.request({
		url: panUrl + 'checkTaskList',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});



//获取24小时货币涨幅比例
export const getChange_24h = () => new Promise((resolve, reject) => {
	uni.request({
		url: Change_24h,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			resolve(res.data);

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
})

/*********************原力账本***************************/
// 原力余额
export const getForBalance = () => new Promise((resolve, reject) => {
	uni.request({
		url: forceUrl + 'getBalance',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 原力账单信息
export const getForBill = (pageSize) => new Promise((resolve, reject) => {
	uni.request({
		url: forceUrl + 'getBill?pageSize=' + pageSize,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				resolve(null)
				uni.showToast({
					icon: 'none',
					title: '暫無更多數據'
				});
			};
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 原力任务列表
export const checkForTaskList = () => new Promise((resolve, reject) => {
	uni.request({
		url: forceUrl + 'checkTaskList',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//查询今天是否签到checkSignToday
export const checkSignToday = () => new Promise((resolve, reject) => {
	uni.request({
		url: forceUrl + 'checkSignToday',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//簽到
export const signin = (force, day) => new Promise((resolve, reject) => {
	uni.request({
		url: forceUrl + 'signin?force=' + force + "&day=" + day,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
			if (res.data.status == 404) {
				resolve(null)
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
			}
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

export const signinMsg = () => new Promise((resolve, reject) => {
	uni.request({
		url: forceUrl + 'signinMsg',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);

		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});


/*********************公約***************************/
//公约列表
export const toTreIndex = () => new Promise((resolve, reject) => {
	uni.request({
		url: treatyUrl + 'toTreIndex',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//列表详情
export const isVote = (tid) => new Promise((resolve, reject) => {
	uni.request({
		url: treatyUrl + 'isVote?tid=' + tid,
		method: 'POST',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//投票
export const sysVote = (tid, isWell) => new Promise((resolve, reject) => {
	uni.request({
		url: treatyUrl + 'sysVote?tid=' + tid + '&isWell=' + isWell,
		method: 'POST',
		header: {
			'token': Token
		},
		success: (res) => {
			console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

/*********************酒吧***************************/
// 获取酒吧列表
export const getBarList = (location) => new Promise((resolve, reject) => {
	uni.request({
		url: barUrl + 'getBarList?location=' + location,
		header: {
			'token': Token
		},
		success: (res) => {
			console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//酒吧详情
export const getBarInfo = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: barUrl + 'getBarInfo?id=' + id,
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 申请酒吧
export const setBar = (barInfo) => new Promise((resolve, reject) => {
	uni.request({
		url: barUrl + 'setBar',
		method: 'POST',
		header: {
			'token': Token
		},
		data: {
			"intro": barInfo.intro,
			"license": barInfo.license,
			"location": barInfo.address + barInfo.location,
			"logo": barInfo.logo,
			"name": barInfo.name,
			"phone": barInfo.phone,
			"picture": barInfo.picture + ',' + barInfo.picture1 + ',' + barInfo.picture2 + ',' + barInfo.picture3,
			"userName": barInfo.username,
			"userPhone": barInfo.userphone
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

// 上传酒吧相册/营业执照
export const upLogo = (imgTemp, type) => new Promise((resolve, reject) => {
	uni.uploadFile({
		url: barUrl + 'upLogo?type=' + type,
		header: {
			'token': Token
		},
		filePath: imgTemp,
		name: 'file',
		success: (res) => {
			// console.log(res.data);
			var jsonObj = JSON.parse(res.data);
			// console.log('uploadImage success, res is:', jsonObj.data);
			resolve(jsonObj.data);
			if (type == 3) {
				uni.showToast({
					icon: 'none',
					title: '上传成功,請等待審核'
				}).then(data => {
					uni.redirectTo({
						url: 'entertain'
					});
				});
			}
		},
		fail: (err) => {
			console.log('uploadImage fail', err);
			uni.showToast({
				icon: 'none',
				title: '上傳失敗,請稍後重試'
			});
		}
	});
});

//获取酒吧经纬度
export const getBarlocation = (address) => new Promise((resolve, reject) => {
	uni.request({
		url: map + "key=7378b20d4bff8e0470db31f1b0a83d99&address=" + address,
		header: {

		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 1) resolve(res.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

/*********************公益***************************/
//公益組織入駐

export const createBenfit = (barInfo) => new Promise((resolve, reject) => {
	uni.request({
		url: benfitUrl + 'createBenfit',
		method: 'POST',
		header: {
			'token': Token
		},
		data: {
			"intro": barInfo.intro,
			"license": barInfo.license,
			"location": barInfo.address + barInfo.location,
			"logo": barInfo.logo,
			"name": barInfo.name,
			"phone": barInfo.phone,
			"picture": barInfo.picture + ',' + barInfo.picture1 + ',' + barInfo.picture2 + ',' + barInfo.picture3,
			"userName": barInfo.username,
			"userPhone": barInfo.userphone
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//公益組織列表

export const getBenfitList = () => new Promise((resolve, reject) => {
	uni.request({
		url: benfitUrl + 'getBenfitList',
		header: {
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

//公益組織详情
export const findById = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: benfitUrl + 'findById?id=' + id,
		header: {
			'token': Token
		},
		success: (res) => {
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});

/*********************end***************************/





/*********************邀请码***************************/

export const getInvCode = () => new Promise((resolve, reject) => {
	uni.request({
		url: invUrl + 'getInvCode',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});
//获取邀请人数
export const getinviteCount = () => new Promise((resolve, reject) => {
	uni.request({
		url: invUrl + 'getinviteCount',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});

//获取已经通过验证的人数！
export const passValidation = () => new Promise((resolve, reject) => {
	uni.request({
		url: invUrl + 'passValidation',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});

//获取邀请获得的PAN数量！
export const getCountPan = () => new Promise((resolve, reject) => {
	uni.request({
		url: invUrl + 'getCountPan',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
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
				url: systemUrl + 'pic/upPicture?id=' + userId,
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
					resolve(jsonObj.data);
					// avatar = jsonObj.data.id;
				},
				fail: (err) => {
					console.log('uploadImage fail', err);
					uni.showToast({
						icon: 'none',
						title: '上傳失敗,請稍後重試'
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

// 获取图片视频本地路径
export const getImgTemp = () => new Promise((resolve, reject) => {
	uni.chooseImage({
		count: 1,
		sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success(chooseImageRes) {
			const tempFilePaths = chooseImageRes.tempFilePaths;
			resolve(tempFilePaths[0]);
		},
		fail(res) {
			uni.hideLoading()
			console.log(res)
			uni.showToast({
				icon: 'none',
				title: '請稍後重試'
			});
		}
	});
});

// 上传日志图片视频
export const upload = (imgTemp) => new Promise((resolve, reject) => {
	uni.uploadFile({
		url: dynUrl + 'upload',
		header: {
			'token': Token
		},
		filePath: imgTemp,
		name: 'file',
		success: (res) => {
			// console.log(res.data);
			var jsonObj = JSON.parse(res.data);
			// console.log('uploadImage success, res is:', jsonObj.data);
			// console.log(jsonObj.data.id);
			resolve(jsonObj.data.id);
		},
		fail: (err) => {
			console.log('uploadImage fail', err);
			uni.showToast({
				icon: 'none',
				title: '上傳失敗,請稍後重試'
			});
		}
	});
});

// 上传日志内容
export const createDyn = (dynContent, path, location, lat, lng) => new Promise((resolve, reject) => {
	var id = uni.getStorageSync('USERS_KEY').id
	console.log(id)
	uni.request({
		url: dynUrl + 'createDyn',
		method: 'POST',
		header: {
			'token': Token,
			'content-type': 'application/json'
		},
		data: {
			'content': dynContent,
			'location': location,
			'path': path,
			"lat": lat,
			"lng": lng,
			"uid": id
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) {
				uni.showToast({
					icon: 'success',
					title: '發表成功'
				});
				resolve(res.data.data);
			}
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
/*********************举报***************************/
//获取举报类型
export const getReportType = () => new Promise((resolve, reject) => {
	uni.request({
		url: reportUrl + 'getReportType',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});

export const submitReport = (reportInfo) => new Promise((resolve, reject) => {
	console.log(reportInfo)
	uni.request({
		url: reportUrl + 'submitReport',
		method: 'POST',
		data: {
			"did": reportInfo.did,
			"reportDescribe": reportInfo.describe,
			"reportPrints": reportInfo.picture1 + "," + reportInfo.picture2 + "," + reportInfo.picture3,
			"reportTitle": reportInfo.title,
			"toReportUid": reportInfo.uid
		},
		header: {
			'content-type': 'application/json',
			'token': Token
		},
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
			// else reject(res.data.msg);
		},
		fail: (err) => {
			uni.showToast({
				icon: 'none',
				title: '當前網絡不可用'
			});
			reject(err);
		}
	});
});
/************************推送*********************/
//获取公告信息GET /v1/push/getIndexBulletin
export const getIndexBulletin = () => new Promise((resolve, reject) => {
	uni.request({
		url: pushUrl + 'getIndexBulletin',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});
//获取评论
// /v1/push/getPushConnMsg
export const getPushConnMsg = () => new Promise((resolve, reject) => {
	uni.request({
		url: pushUrl + 'getPushConnMsg',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.code == 500) {
				uni.removeStorageSync('USERS_KEY');
				uni.removeStorageSync('TOKEN_KEY');
				uni.showModal({
					title: '',
					content: "服務器繁忙，請稍後重新登入",
					confirmText: "確定",
					showCancel: false, // 不显示取消按钮
					success(res) {
						if (res.confirm) {
							uni.reLaunch({
								url: '../login/login'
							});
							logout()
							store.commit('openSocket', false)
						}
					}
				});
			}
		},
		fail(err) {
			uni.removeStorageSync('USERS_KEY');
			uni.removeStorageSync('TOKEN_KEY');
			uni.showModal({
				title: '',
				content: "服務器繁忙，請稍後重新登入",
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
		}
	});
});
//获取关注
export const getPushFansMsg = () => new Promise((resolve, reject) => {
	uni.request({
		url: pushUrl + 'getPushFansMsg',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		},
		fail(err) {
			uni.showModal({
				title: '',
				content: "服務器繁忙，請稍後重新登入",
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
		}
	});
});
//获取点赞信息
export const getPushLikeMsg = () => new Promise((resolve, reject) => {
	uni.request({
		url: pushUrl + 'getPushLikeMsg',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);

		},
		fail(err) {
			uni.showModal({
				title: '',
				content: "服務器繁忙，請稍後重新登入",
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
		}
	});
});

//获取系统消息/v1/push/getPushSystemMsg
export const getPushSystemMsg = () => new Promise((resolve, reject) => {
	uni.request({
		url: pushUrl + 'getPushSystemMsg',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);

		},
		fail(err) {
			uni.showModal({
				title: '',
				content: "服務器繁忙，請稍後重新登入",
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
		}
	});
});

//改变推送消息状态GET /v1/push/upStatus
export const upStatus = (type) => new Promise((resolve, reject) => {
	uni.request({
		url: pushUrl + 'upStatus?type=' + type,
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);

		}
	});
});

//改变系统消息已读状态GET /v1/push/upSysStatus
export const upSysStatus = () => new Promise((resolve, reject) => {
	uni.request({
		url: pushUrl + 'upSysStatus',
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});
/****************************地理定位*****************************/
//将地理位置转换为经纬度getCoordinate
export const getCoordinate = (location) => new Promise((resolve, reject) => {
	uni.request({
		url: mapUrl + 'getCoordinate?location=' + location,
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});
//getDistance获得两个经纬度之间的距离
export const getDistance = (lat1Str, lng1Str, lat2Str, lng2Str) => new Promise((resolve, reject) => {
	uni.request({
		url: mapUrl + 'getDistance?lat1Str=' + lat1Str + '&lng1Str=' + lng1Str + '&lat2Str=' + lat2Str + '&lng2Str=' +
			lng2Str,
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});
//獲取對方坐標GET /v1/map/getToUserLocation
export const getToUserLocation = (tid) => new Promise((resolve, reject) => {
	uni.request({
		url: mapUrl + 'getToUserLocation?tid=' + tid,
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
		}
	});
});
/****************************ixx********************************/
//获取验邮箱证码
export const sendEmailCode = (email) => new Promise((resolve, reject) => {
	uni.request({
		url: "https://i.ixex.io/user/register/email/code",
		header: {
			'content-type': 'application/json',
			'FROM': 'ix',
			'LANG': 'zh-cn',
			'ORIGIN': 'https://www.ixex.io',
		},
		data: {
			'email': email
		},
		method: 'POST',
		success(res) {
			console.log(res)
			resolve(res.data);
		},
		fail(err) {
			console.log(err)
		}
	});
});

//获取验手機证码
export const sendPhoneCode = (phone, region) => new Promise((resolve, reject) => {
	uni.request({
		url: "https://i.ixex.io/user/register/phone/code",
		header: {
			'content-type': 'application/json',
			'FROM': 'ix',
			'LANG': 'zh-cn',
			'ORIGIN': 'https://www.ixex.io',
		},
		data: {
			'phone': phone,
			'region': region
		},
		method: 'POST',
		success(res) {
			console.log(res)
			resolve(res.data);
		},
		fail(err) {
			console.log(err)
		}
	});
});


//郵箱注册
export const ixxEmailRegister = (params) => new Promise((resolve, reject) => {
	var id = uni.getStorageSync('USERS_KEY').id;
	uni.request({
		url: "https://i.ixex.io/user/register/email",
		header: {
			'content-type': 'application/json',
			'FROM': 'ix',
			'LANG': 'zh-cn',
			'ORIGIN': 'https://www.ixex.io',
		},
		data: {
			'email': params.email,
			'code': params.code,
			'password': params.password,
			'invitor_id': "199754",
			'utm_source': "",
			'pan': id
		},
		method: 'POST',
		success(res) {
			console.log(res)
			resolve(res.data);
		},
		fail(err) {
			console.log(err)
		}
	});
});

//手機註冊
export const ixxPhoneRegister = (params) => new Promise((resolve, reject) => {
	var id = uni.getStorageSync('USERS_KEY').id;
	uni.request({
		url: "https://i.ixex.io/user/register/phone",
		header: {
			'content-type': 'application/json',
			'FROM': 'ix',
			'LANG': 'zh-cn',
			'ORIGIN': 'https://www.ixex.io',
		},
		data: {
			'phone': params.phone,
			'region': params.region,
			'code': params.code,
			'password': params.password,
			'invitor_id': "199754",
			'utm_source': "",
			'pan': id
		},
		method: 'POST',
		success(res) {
			console.log(res)
			resolve(res.data);
		},
		fail(err) {
			console.log(err)
		}
	});
});

//GET regIxxAccount注册成功给予奖励
export const regIxxAccount = (ixxId) => new Promise((resolve, reject) => {
	uni.request({
		url: ixxUrl + 'regIxxAccount?ixxId=' + ixxId,
		header: {
			'token': Token
		},
		success(res) {
			if (res.data.status == 200) resolve(res.data.data);
			if (res.data.status == 404) {
				uni.showToast({
					icon: 'none',
					duration: 2000,
					title: "該用戶已註冊"
				})
			};
		}
	});
});


/******************************聊天********************/
//向指定人发送消息
export const sendMessage = (toId, message, type) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/chat/push',
		method: 'POST',
		data: {
			toId: toId + '',
			text: message,
			type: type

		},
		header: {
			'content-type': 'application/json',
			'token': Token
		},
		success: (res) => {
			// console.log(res)
			if (res.data.errcode == 200) resolve(res.data.data)
			if (res.data.errcode == 404) {
				resolve(res.data.data)
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				});
			}
		},
		fail: (err) => {
			console.log(err)
			// uni.showToast({
			// 	icon: 'none',
			// 	title: '登錄失敗，請稍后重試'
			// });
		}
	});
});

//获取当前窗口信息GET /chat/info/{
export const chatUserInfo = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/chat/info/' + id,
		header: {
			'token': Token
		},
		method: 'GET',
		success(res) {
			// console.log(res)
			if (res.data.code == 200) resolve(res.data.data)
			if (res.data.code == 404) {
				uni.showToast({
					icon: 'none',
					title: '获取信息,請稍后重試'
				});
			}
		},
		fail(err) {
			console.log(err)
			uni.hideLoading()
		}
	});
});

//获取会话列表
export const sessionList = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/chat/push/info/' + id,
		header: {
			'token': Token
		},
		method: 'GET',
		success(res) {
			console.log(res)
		},
		fail(err) {
			console.log(err)
		}
	});
});
//获取当前对话信息
export const currentSession = (fromId, toId) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/chat/self/' + fromId + '/' + toId,
		header: {
			'token': Token
		},
		method: 'GET',
		success(res) {
			// console.log(res)
			if (res.data.errcode == 200) resolve(res.data.data)
			if (res.data.errcode == 404) {
				uni.showToast({
					icon: 'none',
					title: '获取信息,請稍后重試'
				});
			}
		},
		fail(err) {
			console.log(err)
		}
	});
});

//聊天发送图片上传到服务器
export const uploadPictures = (imgTemp) => new Promise((resolve, reject) => {
	uni.uploadFile({
		url: 'http://apelord.cn:8080/file/upLogo',
		header: {
			'token': Token
		},
		filePath: imgTemp,
		name: 'file',
		success: (res) => {
			var jsonObj = JSON.parse(res.data);
			resolve(jsonObj.data);
		},
		fail: (err) => {
			console.log('uploadImage fail', err);
			uni.showToast({
				icon: 'none',
				title: '上傳失敗,請稍後重試'
			});
		}
	});
});

//GET /chat/deleteList/{toId}删除聊天
export const deleteList = (toId) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/chat/deleteList/' + toId,
		header: {
			'token': Token
		},
		method: 'GET',
		success(res) {
			console.log(res)
			if (res.data.errcode == 200) resolve(res.data.data)
			if (res.data.errcode == 404) {
				uni.showToast({
					icon: 'none',
					title: '获取信息,請稍后重試'
				});
			}
		},
		fail(err) {
			console.log(err)
		}
	});
});

//设置备注GET /router/remark
export const setRemark = (toId, name) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/router/remark',
		header: {
			'token': Token
		},
		data: {
			toUid: toId,
			remaerName: name
		},
		method: 'GET',
		success(res) {
			// console.log(res)
			if (res.data.errcode == 200) resolve(res.data.data)
			if (res.data.errcode == 404) {
				uni.showToast({
					icon: 'none',
					title: '获取信息,請稍后重試'
				});
			}
		},
		fail(err) {
			console.log(err)
		}
	});
});

//删除备注GET /router/deleteRemark
export const deleteRemark = (toId) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/router/deleteRemark',
		header: {
			'token': Token
		},
		data: {
			toUid: toId,
		},
		method: 'GET',
		success(res) {
			// console.log(res)
			if (res.data.errcode == 200) resolve(res.data.data)
			if (res.data.errcode == 404) {
				uni.showToast({
					icon: 'none',
					title: '获取信息,請稍后重試'
				});
			}
		},
		fail(err) {
			console.log(err)
		}
	});
});

//加入黑名单GET /router/blacklist
export const pushBlacklist = (toId) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/router/blacklist',
		header: {
			'token': Token
		},
		data: {
			toUid: toId,
		},
		method: 'GET',
		success(res) {
			// console.log(res)
			if (res.data.errcode == 200) resolve(res.data)
			if (res.data.errcode == 404) {
				uni.showToast({
					icon: 'none',
					title: '获取信息,請稍后重試'
				});
			}
		},
		fail(err) {
			console.log(err)
		}
	});
});

//移除黑名单GET /router/removeBlacklist
export const removeBlacklist = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/router/removeBlacklist',
		header: {
			'token': Token
		},
		data: {
			id: id,
		},
		method: 'GET',
		success(res) {
			// console.log(res)
			if (res.data.errcode == 200) resolve(res.data)
			if (res.data.errcode == 404) {
				uni.showToast({
					icon: 'none',
					title: '获取信息,請稍后重試'
				});
			}
		},
		fail(err) {
			console.log(err)
		}
	});
});


//查询黑名单列表GET /router/checkBlacklist
export const checkBlacklist = () => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/router/checkBlacklist',
		header: {
			'token': Token
		},
		method: 'GET',
		success(res) {
			// console.log(res)
			if (res.data.errcode == 200) resolve(res.data.data)
			if (res.data.errcode == 404) {
				uni.showToast({
					icon: 'none',
					title: '获取信息,請稍后重試'
				});
			}
		},
		fail(err) {
			console.log(err)
		}
	});
});

//查询是否在黑名单GET /router/checkBlackListByToUid
export const queryBlackList = (toId) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/router/checkBlackListByToUid',
		header: {
			'token': Token
		},
		data: {
			toUid: toId
		},
		method: 'GET',
		success(res) {
			console.log(res)
			if (res.data.errcode == 200) resolve(res.data.data)
			if (res.data.errcode == 404) resolve(false)
		},
		fail(err) {
			console.log(err)
		}
	});
});

//查询用户是否在线GET /chat/chaeckOnlineByUid/{uid}
export const chaeckOnlineByUid = (toId) => new Promise((resolve, reject) => {
	uni.request({
		url: 'http://apelord.cn:8080/chat/chaeckOnlineByUid/' + toId,
		header: {
			'token': Token
		},
		method: 'GET',
		success(res) {
			// console.log(res)
			if (res.data.errcode == 200) resolve(res.data.data)
			if (res.data.errcode == 404) resolve(false)
		},
		fail(err) {
			console.log(err)
		}
	});
});
