const pReg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
const eReg = /^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;

// 手机校验
export const phoneValidate = (phone) => {
	if (phone.length == "") {
		uni.showToast({
			icon: 'none',
			title: '手機號碼不能爲空'
		});
		return false;
	} else {
		if (!pReg.exec(phone) || phone.length < 8) {
		/* 香港手机号码正则 ：^([6|9])\d{7}$
			澳门手机号码正则：^[0][9]\d{8}$
			大陆：^[1][3-8]\d{9}$
			正则表达式：^[1][3-8]\d{9}$|^([6|9])\d{7}$|^[6]([8|6])\d{5}$ */
			uni.showToast({
				icon: 'none',
				title: '手機號碼格式不正確'
			});
			return false;
		}
	}
	return true;
};

// 邮箱校验
export const emailValidate = (email) => {
	if (email.length == "") {
		uni.showToast({
			icon: 'none',
			title: '郵箱不能爲空'
		});
		return false;
	} else {
		if(!eReg.exec(email)) {
			uni.showToast({
				icon: 'none',
				title: '郵箱格式不正確'
			});
			return false;
		}
	}
	return true;
};

// 联合校验
export const joinValidate = (account) => {
	if (account.length == "") {
		uni.showToast({
			icon: 'none',
			title: '請輸入注冊的郵箱/手機'
		});
		return false;
	} else {
		if (!pReg.exec(account) && !eReg.exec(account)) {
			uni.showToast({
				icon: 'none',
				title: '格式不正確'
			});
			return false;
		}
	}
	return true;
};

// 验证码校验
export const codeValidate = (regCode) => {
	if (regCode.length == "") {
		uni.showToast({
			icon: 'none',
			title: '驗證碼不能爲空'
		});
		return false;
	} else {
		if (regCode.length < 6) {
			uni.showToast({
				icon: 'none',
				title: '驗證碼格式不正確'
			});
			return false;
		}
	}
	return true;
};

// 密码校验
export const pwdValidate = (password, verifyPwd) => {
	if (password.length == "") {
		uni.showToast({
			icon: 'none',
			title: '密碼不能爲空'
		});
		return false;
	} else {
		if (password.length < 6) {
			uni.showToast({
				icon: 'none',
				title: '密碼最短為6個字符'
			});
			return false;
		}
		if(verifyPwd != password ) {
			uni.showToast({
				icon: 'none',
				title: '與上次密碼不一致'
			});
			return false;
		}
	}
	return true;
};

// 个人信息校验
export const userValidate = (userInfo) => {
	if (userInfo.name.length < 2) {
	    uni.showToast({
	        icon: 'none',
	        title: '賬戶名最短為2個字符'
	    });
	    return false;
	}
	if(userInfo.stature == '') {
		uni.showToast({
			icon: 'none',
			title: '請輸入身高'
		});
		return false;
	} else {
		if(userInfo.stature<50 ||userInfo.stature>300) {
			uni.showToast({
				icon: 'none',
				title: '身高範圍(cm):50~300'
			});
			return false;
		}
	}
	if(userInfo.weight == '') {
		uni.showToast({
			icon: 'none',
			title: '請輸入體重'
		});
		return false;
	} else {
		if(userInfo.weight<5 || userInfo.weight>700) {
			uni.showToast({
				icon: 'none',
				title: '體重範圍(kg):5~700'
			});
			return false;
		}
	}
	if(userInfo.age == '') {
		uni.showToast({
			icon: 'none',
			title: '請輸入年龄'
		});
		return false;
	} else {
		if(userInfo.age<18 ||userInfo.age>150) {
			uni.showToast({
				icon: 'none',
				title: '年龄範圍:18~150'
			});
			return false;
		}
	}
	if(userInfo.site == '') {
		uni.showToast({
			icon: 'none',
			title: '請輸入居住地址'
		});
		return false;
	}
	if(userInfo.signature == '') {
		uni.showToast({
			icon: 'none',
			title: '請輸入簽名'
		});
		return false;
	}
	return true;
};