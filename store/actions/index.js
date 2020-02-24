// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
import storage from '@/common/utils/storage'
import pageUtil from '@/common/utils/page'

/* 导出actions方法 */

import {
	getConnMsg,
	getFansMsg,
	getLikeMsg,
	getSystemMsg
} from "./push"


export default {
	//推送消息
	getConnMsg,
	getFansMsg,
	getLikeMsg,
	getSystemMsg
}
