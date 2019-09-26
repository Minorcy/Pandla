<template>
	<view class="comment-section">
		<view class="comment-section-top">
			<text>{{commCont}}条评论</text>
			<image src="../../static/img/daily/X.svg" @tap.stop="hidComm()"></image>
		</view>
		<scroll-view class="comment" scroll-y="true" @touchmove.stop.prevent="moveHandle">
			<view class="nocomm" v-if="!commList.length"><text>暫無評論和回复,快來搶沙發吧!</text></view>
			<view scroll-y="true" class="comment-section-details" v-for="(ite, ind) in commList" :key="ind">
				<view class="comment-section-comm">
					<view class="comm-ite">
						<image class="ite-portrait" :src="ite.portrait" mode="aspectFill" @tap="replyComm(ite.name, ite.uid ,ite.id)"></image>
						<view class="ite-name-content">
							<text class="ite-name" @tap="replyComm( ite.name,ite.uid,ite.id)">{{ite.name}}:</text>
							<text class="ite-content">{{ite.content}}</text>
							<text class="ite-create_time">{{ite.createTime}}</text>
						</view>
					</view>
					<!-- v-if="ite.reply != ''" v-for="(it,idx) in ite.reply" :key="idx" -->
					<p class="comment-section-reply">
						<text class="color reply-name">作者回复:</text>
						<text class="reply-text">1111</text>
					</p>
				</view>
			</view>
			<view class="input-section">
				<input :value="currentValue" :placeholder="commplaceholder" @input="$emit('input', $event.target.value)" />
				<button class="primary" hover-class="hover-primary" @tap="addComm()">發送</button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			commCont: {
				type: Number,
				default: 0
			},
			commList: {
				default: null
			},
			commplaceholder: {
				type: String,
				default: "請輸入評論內容"
			},
			showComment: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			},


		},
		data() {
			return {
				currentValue: this.value
			};
		},
		watch: {
			value(val) {
				this.setCurrentValue(val);
			}
		},
		methods: {
			hidComm() {
				this.$emit("hidComm");
			},
			moveHandle() {

			},
			replyComm(ite1, ite2, ite3) {
				this.$emit("replyComm", ite1, ite2, ite3)
			},
			addComm() {
				this.$emit("addComm");

			},
			setCurrentValue(value) {
				if (value === this.currentValue) return;
				this.currentValue = value;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.comment-section {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 60%;
		box-sizing: border-box;
		padding: 10px 10px 32px 10px;
		font-size: 16px;
		z-index: 300;
		background-color: #000000;
		border-radius: 36upx 36upx 0 0;
		overflow: hidden;

		::-webkit-scrollbar {
			width: 0;
			height: 0;
			color: transparent;
		}

		.comment-section-top {
			width: 95%;
			height: 30px;
			position: fixed;
			text-align: center;
			box-sizing: border-box;
			color: #ffffff;
			font-size: 14px;
			margin: 0 auto;
			background-color: #000000;

			image {
				width: 15px;
				height: 15px;
				float: right;
				right: 10px;
			}
		}

		.comment {
			margin-top: 30px;
			width: 100%;
			height: 93%;

			.nocomm {
				margin-left: 70px;
				margin-top: 50px;
				color: #ffffff;

			}

			.comment-section-details {
				width: 100%;

				.comment-section-comm {
					margin-bottom: 10px;

					.comm-ite {
						display: flex;
						align-items: flex-end;
						box-sizing: border-box;
						overflow: hidden;

						.ite-portrait {
							width: 40px;
							height: 40px;
							border-radius: 50%;
							margin: 5px;
							align-self: end;
							flex-shrink: 0;
						}

						.ite-name-content {
							max-width: 82%;
							padding: 5px;
							color: #ffffff;
							flex-wrap: wrap;
							flex-grow: 1;
							font-size: 14px;
							line-height: 20px;

							.ite-name {
								display: block;
								color: #B7B7B7;
							}

							.ite-content {
								overflow-wrap:break-word;
								word-wrap: break-word;
							}

							.ite-create_time {
								float: right;
								font-size: 12px;
							}
						}
					}

					.comment-section-reply {
						box-sizing: border-box;
						padding: 5px;
						color: #ffffff;
						font-size: 14px;
						display: flex;
						flex-direction: row;
						.color {
							color: #e64340;
							font-size: 14px;
						}

						.reply-name {
							max-width: 20%;
							overflow: hidden;
							align-self: end;
							flex-shrink: 0;
						}

						.reply-text {
							max-width:80%;
							word-wrap: break-word;
							color: #ffffff;
							flex-wrap: wrap;
							flex-grow: 1;
							font-size: 14px;
							line-height: 20px;
						}
					}
				}

			}

			.input-section {
				position: fixed;
				width: 100%;
				height: 65upx;
				margin: 0 auto;
				bottom: 0;
				left: 0;
				box-sizing: border-box;
				color: #000000;
				background-color: #B7B7B7;

				font-size: 30upx;

				input {
					width: 77%;
					height: 65upx;
					line-height: 65upx;
					vertical-align: middle;
					float: left;
					padding-left: 20upx;
				}

				button {
					position: absolute;
					margin: 0;
					padding: 0;
					right: 0;
					width: 20%;
					padding-right: 40upx;
					float: right;
					margin-top: -10upx;
					font-size: 35upx;
					color: #000000;
				}
			}
		}
	}
</style>
