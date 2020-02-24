<template>
	<view class="m-chat-emoji">

		<view class="cnt">
			<view class="emoji-item" :class="{'pinup-item':item.type==='pinup'}" v-for="(item,index) in currEmoji.list" :key="index" @click.stop="selectEmoji(item)">
				<image :src="item.img"/>
			</view>
		</view>

		<!-- <div class="emoji-channel">
      <span class="emoji-album" :class="{active: item.name==currAlbum}" v-for="item in emoji" @click.stop="selectAlbum(item)">
        <img :src="item.album">
      </span><span v-if="type==='session'" class="emoji-album" :class="{active: item.name==currAlbum}" v-for="item in pinup" @click.stop="selectAlbum(item)">
        <img :src="item.album">
      </span>
    </div> -->
	</view>
</template>

<script>
	import emojiObj from '@/common/configs/emoji'

	function genEmojiList(type, emojiList) {
		let result = {}
		for (let name in emojiList) {
			let emojiMap = emojiList[name]
			let list = []
			for (let key in emojiMap) {
				list.push({
					type,
					name,
					key,
					img: emojiMap[key].img
				})
			}
			if (list.length > 0) {
				result[name] = {
					type,
					name,
					list,
					album: list[0].img
				}
			}
		}
		return result
	}

	export default {
		props: {
			type: String,
			scene: String,
			to: String
		},
		data() {
			return {
				currType: 'emoji',
				currAlbum: 'emoji'
			}
		},
		computed: {
			emoji() {
				return genEmojiList('emoji', emojiObj.emojiList)
			},
			pinup() {
				return genEmojiList('pinup', emojiObj.pinupList)
			},
			currEmoji() {
				if (this.currType === 'emoji') {
					return this.emoji[this.currAlbum]
				} else if (this.currType === 'pinup') {
					return this.pinup[this.currAlbum]
				}
				return []
			}
		},
		methods: {
			moveHandle(){},
			selectAlbum(album) {
				this.currType = album.type
				this.currAlbum = album.name
			},
			selectEmoji(emoji) {
				this.$emit("sendEmji",emoji.key)
			// 	if (this.currType === 'emoji') {
			// 		// 由触发父组件事件，增加表情文案
			// 		this.$emit('add-emoji', emoji.key)
			// 	} else if (this.currType === 'pinup') {
			// 		if (this.type === 'session') {
			// 			this.$store.dispatch('sendMsg', {
			// 				type: 'custom',
			// 				scene: this.scene,
			// 				to: this.to,
			// 				pushContent: '[贴图表情]',
			// 				content: {
			// 					type: 3,
			// 					data: {
			// 						catalog: this.currAlbum,
			// 						chartlet: emoji.key
			// 					}
			// 				}
			// 			})
			// 		} else if (this.type === 'chatroom') {
			// 			this.$store.dispatch('sendChatroomMsg', {
			// 				type: 'custom',
			// 				pushContent: '[贴图表情]',
			// 				content: {
			// 					type: 3,
			// 					data: {
			// 						catalog: this.currAlbum,
			// 						chartlet: emoji.key
			// 					}
			// 				}
			// 			})
			// 		}
			// 		this.$emit('hide-emoji')
			// 	}
			}
		}
	}
</script>

<style scoped lang="scss">
	.m-chat-emoji {
		height: 250px;
		margin: 0 auto;
		width: 100%;
		box-sizing: border-box;
		padding:0 10px 10px 10px;
		/* border: 1px solid #b4b4b4; */
		overflow: hidden;
		overflow-y: auto;
		background: #FFFFFF;
		.cnt {
			position: relative;
			display: flex;
			margin: 10px auto;
			text-align: left;
			box-sizing: border-box;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-between;
		}

		.emoji-item {
			display: inline-block;
			width: 28px;
			height: 28px;
			padding: 8px;
			vertical-align: middle;
			
			image{
				width: inherit;
				height: inherit;
			}
		}

		.pinup-item {
			width: 44px;
			height: 44px;
		}


		@media screen and (min-width: 300px) and (max-width: 420px) {
			.emoji-content .cnt {
				width: 300px;
			}
		}

		@media screen and (min-width: 420px) and (max-width: 600px) {
			.emoji-content .cnt {
				width: 420px;
			}
		}

		@media screen and (min-width: 600px) and (max-width: 720px) {
			.emoji-content .cnt {
				width: 600px;
			}
		}

		@media screen and (min-width: 720px) and (max-width: 1080px) {
			.emoji-content .cnt {
				width: 720px;
			}
		}

		@media screen and (min-width: 1080px) {
			.emoji-content .cnt {
				width: 1080px;
			}
		}
	}
</style>
