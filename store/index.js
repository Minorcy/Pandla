import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		// 登录
		requireAuth: false,
		hasLogin: (uni.getStorageSync('USERS_KEY').token != '') ? true : false,
		
		// 星球公约列表传值
		voteValue: {
			voteName: '',
			voteId: 0,
			voteStatus: 0
		},
		
		// 日志图片
		imgTemp: '',
		
		// 资产隐藏
		isHidden: (uni.getStorageSync('ASSET_KEY')) ? true : false
    },
    mutations: {
		setBarText(state, voteValue) {
			state.voteValue = '';
			state.voteValue = voteValue;
		},
		logout(state) {
			state.token = '';
			state.hasLogin = false;
		},
		setImgTemp(state, imgTemp) {
			state.imgTemp = imgTemp;
		}
    }
})

export default store;
