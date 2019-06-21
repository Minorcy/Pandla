<template>
	<image src="../../static/img/main/pactVoteDetail.svg" mode="aspectFit"></image>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		onReady() {
			uni.setNavigationBarTitle({
				title: this.$store.state.voteItem
			})
		}
	}
</script>

<style>
	image {
		width: 100%;
		height: 1100upx;
		margin-top: -100upx;
		background-color: #B7B7B7;
	}
</style>
