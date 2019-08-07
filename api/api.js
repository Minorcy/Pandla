let Token = uni.getStorageSync('USERS_KEY').token;
// const URL = 'http://pandla.io:8080/v1/';
const URL = "http://apelord.cn:8080/v1/";
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
const map = "https://restapi.amap.com/v3/geocode/geo?"

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
			console.log(res.data.data);
			if (res.data.status == 200) {
				uni.setStorageSync('USERS_KEY', res.data.data);
				Token = uni.getStorageSync('USERS_KEY').token;
				console.log(Token)
				setTimeout(function(){
					uni.reLaunch({
						url: '../main/main'
					});
				},500)
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
			console.log(res.data);
			if (res.data.status == 200) {
				uni.showToast({
					icon: 'none',
					title: '注冊成功'
				});
				uni.setStorageSync('USERS_KEY', res.data.data);
				uni.reLaunch({
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
			if (res.data == true) {
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
		success: (res) => {
			// console.log(res.data);
			// uni.setStorageSync('USERS_KEY', res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
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
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
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
				if (uni.getStorageSync('USERS_KEY').token) {
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
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
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
		success: (res) => {
			// console.log(res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
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
export const findAllDyn = (count) => new Promise((resolve, reject) => {
	// console.log(Token);
	uni.request({
		url: dynUrl + 'findAllDyn?pageSize=' + count,
		header: {
			'token': Token
		},
		success: (res) => {
			console.log(res.data);
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
		success: (res) => {
			console.log(res.data.data);
			if (res.data.status == 200) resolve(res.data.data);
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
	// console.log(did);
	uni.request({
		url: dynUrl + 'createCom?did=' + did + '&content=' + content,
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
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) {
				if (type == 2) {
					uni.showToast({
						icon: 'none',
						title: '已取消關注'
					});
				}
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 回复评论
export const reply = (cid, content) => new Promise((resolve, reject) => {
	uni.request({
		url: dynUrl + 'reply?cid=' + cid + '&content=' + content,
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

//获取回复信息根据评论id
export const getReply = (cid) => new Promise((resolve, reject) => {
	uni.request({
		url: topicUrl + 'getReply?cid=' + cid,
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

/*********************TOPIC***************************/



/*********************PAN***************************/
// PAN公益首页数据
export const getIndex = () => new Promise((resolve, reject) => {
	console.log(Token),
		uni.request({
			url: pollUrl + 'getIndex',
			header: {
				'token': Token,

			},
			success: (res) => {
				console.log(res.data);
				if (res.data.status == 200) resolve(res.data.data);
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
		success: (res) => {
			// console.log(res.data);
			if (res.data.status == 200) resolve(res.data.data);
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

/*********************PAN资产账本***************************/
//PAN币余额
export const getBalance = () => new Promise((resolve, reject) => {
	uni.request({
		url: panUrl + 'getBalance',
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
					title: '簽到時間未滿24小時'
				})
			}
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

//酒吧详情
export const getBarInfo = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: barUrl + 'getBarInfo?id=' + id  ,
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

// 申请酒吧
export const setBar = (barInfo) => new Promise((resolve, reject) => {
	uni.request({
		url: barUrl + 'setBar' ,
		method: 'POST',
		header: {
			'token': Token
		},
		data: {
			"intro": barInfo.intro,
			"license": barInfo.license,
			"location": barInfo.location,
			"logo": barInfo.logo,
			"name": barInfo.name,
			"phone": barInfo.phone,
			"picture": barInfo.picture+','+ barInfo.picture1+','+ barInfo.picture2+','+ barInfo.picture3,
			"userName":barInfo.username,
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
				title: '页面加载失败，請稍后重試'
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
				title: '上传失败,请勿选择超过4M的图片'
			});
		}
	});
});

//获取酒吧经纬度
export const  getBarlocation= (address) => new Promise((resolve, reject) => {
	uni.request({
		url: map+"key=7378b20d4bff8e0470db31f1b0a83d99&address=" + address,
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

/*********************公益***************************/
//公益組織入駐

export const createBenfit = (barInfo) => new Promise((resolve, reject) => {
	uni.request({
		url: benfitUrl + 'createBenfit' ,
		method: 'POST',
		header: {
			'token': Token
		},
		data: {
			"intro": barInfo.intro,
			"license": barInfo.license,
			"location": barInfo.location,
			"logo": barInfo.logo,
			"name": barInfo.name,
			"phone": barInfo.phone,
			"picture": barInfo.picture+','+ barInfo.picture1+','+ barInfo.picture2+','+ barInfo.picture3,
			"userName":barInfo.username,
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

//公益組織列表

export const getBenfitList = () => new Promise((resolve, reject) => {
	uni.request({
		url: benfitUrl + 'getBenfitList' ,
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});

//公益組織详情
export const findById = (id) => new Promise((resolve, reject) => {
	uni.request({
		url: benfitUrl + 'findById?id=' + id  ,
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
				title: '页面加载失败，請稍后重試'
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
				title: '上传失败,请勿选择超过4M的图片'
			});
		}
	});
});

// 上传日志内容
export const createDyn = (dynContent, path) => new Promise((resolve, reject) => {
	uni.request({
		url: dynUrl + 'createDyn',
		method: 'POST',
		header: {
			'token': Token,
			'content-type': 'application/json'
		},
		data: {
			'content': dynContent,
			'location': '',
			'path': path
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
				title: '页面加载失败，請稍后重試'
			});
			reject(err);
		}
	});
});
