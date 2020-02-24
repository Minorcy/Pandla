/* 内存数据状态 */

export default {
	requireAuth: false,
	hasLogin: (uni.getStorageSync('TOKEN_KEY')!= '') ? true : false,

	// 星球公约列表传值
	voteValue: {
		voteName: '',
		voteId: 0,
		voteStatus: 0
	},

	// 日志图片
	imgTemp: '',

	// 资产隐藏
	isHidden: (uni.getStorageSync('ASSET_KEY')) ? true : false,
	pushMsg :{
		pushConnMsg: [],
		pushFansMsg: [],
		pushLikeMsg: [],
		pushSystemMsg:[]
	},
	defaultSettings:{
		voice:true,
		shock:true,
		system :true,
		indirectly:true,
		fans:true,
		log:true
	},
	sessionList:[],
	currentSession:[],
	reconnectChat:false,
	is_open_socket:false,
	//免打扰
	noDisturbingList:[]
}
