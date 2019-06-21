<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* uni-app默认全局使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。如不使用flex布局，请删除或注释掉本行。*/
	body,
	page {
		min-height: 100%;
		display: flex;
		background: #131D21;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* 按钮样式 */
	.btn-row {
		padding: 50upx;
	}
		
	button {
		padding-top: 10upx;
		font-size: 30upx;
	}
	
	
	button[disabled] {
		color: #9E9E9E !important;
		background: #000000 !important;
	}
	
	button.primary {
		display: flex;
		justify-content: flex-end;
		background-color: transparent;
		position: relative;
		margin-right: 0;
		padding-right: 0;
		color: #EFEFF4;
		border: none;
	}
	
	button.hover-primary {
		opacity: 0.5;
	}
	
	.verCode {
		background: transparent;
		color: #EFEFF4;
		font-size: 25upx;
		width: 30%;
		text-align: right;
		padding: 0;
		margin: 0;
	}
	
	/* 链接 */
	.action-row {
	    display: flex;
	    flex-direction: row;
	    justify-content: flex-start;
		font-size: 25upx;
		margin-left: 10upx;
	}
	
	/* 原生组件模式下需要注意组件外部样式 */
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #000000;
		padding: 20upx;
		color: #EFEFF4;
	}
	
	.main-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 20upx;
		margin-top: 40upx;
		background: #131D21;
		color: #EFEFF4;
	}
	
	.pages-content {
		width: 100%;
		display: flex;
		flex: 1;
		flex-direction: column;
		color: #EFEFF4;
		background: #000000;
		border-top:solid;
		border-width: 2upx;
		border-top-color: #4CD964;
		overflow: hidden;
	}
	
	/* 输入框 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	.input-group {
		padding: 50upx;
		font-size: 30upx;
		background-color: #000000;
		margin-top: 40upx;
		position: relative;
		color: #EFEFF4;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		margin-top: 40upx;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 10upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
</style>
